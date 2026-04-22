"use client";

import { useState } from "react";
import { IconLock, IconArrowRight } from "./Icons";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    rdt?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export default function LeadForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !businessName.trim() ||
      !email.trim() ||
      !phone.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      businessName: businessName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      submittedAt: new Date().toISOString(),
      source: "reddit-landing",
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);

      try {
        window.fbq?.("track", "Lead");
        window.rdt?.("track", "Lead");
        window.gtag?.("event", "generate_lead", { value: 1, currency: "USD" });
      } catch {
        /* pixel errors shouldn't block success */
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="form-card">
      <div className="form-header">
        <h2>Get Your Funding Offers</h2>
        <p>60 seconds · No obligation · No credit impact</p>
      </div>
      <div className="form-body">
        {submitted ? (
          <div className="success-msg" style={{ display: "block" }}>
            <span className="check">✓</span>
            <h3>You&apos;re All Set!</h3>
            <p>
              A Big Think Capital funding expert will reach out shortly. Your
              offers are being prepared.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="two-col">
              <input
                className="form-input"
                type="text"
                placeholder="First Name"
                autoComplete="given-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                className="form-input"
                type="text"
                placeholder="Last Name"
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <input
              className="form-input"
              type="text"
              placeholder="Business Name"
              autoComplete="organization"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />
            <input
              className="form-input"
              type="email"
              placeholder="Business Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="form-input"
              type="tel"
              placeholder="Phone Number"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            {error && (
              <div
                role="alert"
                style={{
                  color: "#b91c1c",
                  fontSize: 13.5,
                  marginTop: 6,
                  fontWeight: 500,
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn-submit"
              disabled={submitting}
              style={{ marginTop: 14, width: "100%" }}
            >
              {submitting ? (
                <>Submitting…</>
              ) : (
                <>
                  <IconLock size={16} /> Get My Funding Offers{" "}
                  <IconArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        )}

        <div
          className="form-footer-note"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 8,
            justifyContent: "center",
            marginTop: 18,
          }}
        >
          <IconLock size={14} style={{ marginTop: 2, flexShrink: 0 }} />
          <span>
            256-bit encrypted · No credit impact · No fees to apply
            <br />
            Trusted by 45,000+ clients nationwide
          </span>
        </div>
      </div>
    </div>
  );
}
