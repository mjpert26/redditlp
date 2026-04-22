import { NextRequest, NextResponse } from "next/server";

// Force Node runtime (not edge) so all env vars and fetch timeouts behave as expected
export const runtime = "nodejs";

type LeadPayload = {
  amount?: string;
  revenue?: string;
  tenure?: string;
  firstName?: string;
  lastName?: string;
  businessName?: string;
  phone?: string;
  email?: string;
  submittedAt?: string;
  source?: string;
  pageUrl?: string;
  referrer?: string;
};

function isValidEmail(s: string) {
  return /^\S+@\S+\.\S+$/.test(s);
}

export async function POST(req: NextRequest) {
  let data: LeadPayload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Validate
  const { firstName, lastName, businessName, phone, email } = data;
  if (!firstName || !lastName || !businessName || !phone || !email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Missing or invalid required fields" },
      { status: 400 }
    );
  }

  // Enrich with server-side metadata
  const enriched = {
    ...data,
    ip:
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      null,
    userAgent: req.headers.get("user-agent") || null,
    receivedAt: new Date().toISOString(),
  };

  // Fan out to one or more webhooks. Comma-separate URLs in LEAD_WEBHOOK_URL to send to multiple.
  const webhookEnv = process.env.LEAD_WEBHOOK_URL || "";
  const webhooks = webhookEnv
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const results: { url: string; ok: boolean; status?: number; error?: string }[] = [];

  await Promise.all(
    webhooks.map(async (url) => {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(process.env.LEAD_WEBHOOK_SECRET
              ? { "X-Webhook-Secret": process.env.LEAD_WEBHOOK_SECRET }
              : {}),
          },
          body: JSON.stringify(enriched),
        });
        results.push({ url, ok: res.ok, status: res.status });
      } catch (err) {
        results.push({
          url,
          ok: false,
          error: err instanceof Error ? err.message : "unknown",
        });
      }
    })
  );

  // Always log server-side so nothing is lost even if a webhook fails
  console.log("[lead]", JSON.stringify({ enriched, results }));

  // Return success to the client even if webhooks fail, so the user doesn't get stuck.
  // Failed webhook deliveries are visible in Vercel function logs for debugging.
  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ ok: true, route: "/api/lead" });
}
