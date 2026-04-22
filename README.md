# redditlp — Big Think Capital Reddit Landing Page

A Next.js 14 landing page for Reddit traffic, with a multi-step lead form wired to a webhook + tracking pixels.

## Tech Stack
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS (preflight disabled so the original design system stays intact)

## Features
- Multi-step qualifier form (amount → revenue → tenure → contact)
- Server-side API route at `/api/lead` that:
  - Validates the submission
  - Enriches it with IP + user agent + timestamp
  - Forwards to one or more webhooks (Zapier, Make, GoHighLevel, etc.)
  - Logs everything to Vercel function logs
- Optional tracking pixels: Reddit Ads, Meta (Facebook), Google Analytics / Ads
- Fires `Lead` / `SignUp` / `generate_lead` conversion events on successful submit
- All pixels are env-var driven — leave blank to skip

## Getting Started

```bash
npm install
cp .env.example .env.local
# fill in .env.local with your webhook URL + pixel IDs
npm run dev
```

Open http://localhost:3000

## Environment Variables

| Variable | Required | What it does |
|---|---|---|
| `LEAD_WEBHOOK_URL` | Recommended | URL(s) that receive the lead POST. Comma-separate for multiple. |
| `LEAD_WEBHOOK_SECRET` | Optional | Sent as `X-Webhook-Secret` header for receiver verification |
| `NEXT_PUBLIC_REDDIT_PIXEL_ID` | Optional | Reddit Ads pixel ID |
| `NEXT_PUBLIC_FB_PIXEL_ID` | Optional | Meta / Facebook pixel ID |
| `NEXT_PUBLIC_GTAG_ID` | Optional | GA4 or Google Ads tag ID |

## Webhook Payload

Your webhook receives a POST with JSON like this:

```json
{
  "amount": "$50,000 – $150,000",
  "revenue": "$15K – $50K / mo",
  "tenure": "2 – 5 years",
  "firstName": "Jane",
  "lastName": "Smith",
  "phone": "555-123-4567",
  "email": "jane@example.com",
  "submittedAt": "2025-04-16T...",
  "source": "reddit-landing",
  "pageUrl": "https://...",
  "referrer": "https://reddit.com/...",
  "ip": "1.2.3.4",
  "userAgent": "Mozilla/...",
  "receivedAt": "2025-04-16T..."
}
```

## Deploy to Vercel

1. Push to the `redditlp` GitHub repo (see below)
2. Import the repo in Vercel — it auto-detects Next.js
3. Add env vars in **Project Settings → Environment Variables**
4. Deploy

### If Vercel has stale "Other / vite build" settings from a previous deploy
Project Settings → Build & Development Settings → **Reset** or explicitly set:
- Framework Preset: **Next.js**
- Build Command: (leave default)
- Output Directory: (leave default)
- Install Command: (leave default)

## Git / PowerShell Deploy Commands

From the unzipped project folder:

```powershell
cd $HOME\Downloads\redditlp

git init
git branch -M main
git add .
git commit -m "Next.js rewrite with webhook + pixel support"
git remote add origin https://github.com/mjpert26/redditlp.git
git push -u origin main --force
```

(Force push to overwrite the previous static HTML commit.)

## Adding Pixels Later

Just set the env var in Vercel → Settings → Environment Variables → redeploy. No code changes needed. The pixel script only renders if the env var is populated.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Fonts + pixel scripts
│   ├── page.tsx            # Landing page sections
│   ├── globals.css         # Original design system
│   └── api/
│       └── lead/route.ts   # Webhook receiver
└── components/
    ├── LeadForm.tsx        # Multi-step form (client)
    └── ScrollReveal.tsx    # Intersection observer (client)
```
