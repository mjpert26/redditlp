import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Big Think Capital — Fast Business Funding",
  description:
    "Pre-qualify for business funding in 60 seconds. $10K–$1M. No credit impact. Funded in 24–48 hours.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Big Think Capital — Fast Business Funding",
    description:
      "Pre-qualify for business funding in 60 seconds. $10K–$1M. No credit impact.",
    type: "website",
    images: ["/logo.png"],
  },
};

// Env-driven pixel IDs — set these in Vercel project env vars
const FB_PIXEL = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID;
const REDDIT_PIXEL = process.env.NEXT_PUBLIC_REDDIT_PIXEL_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}

        {/* ---------- Reddit Pixel ---------- */}
        {REDDIT_PIXEL && (
          <>
            <Script id="reddit-pixel" strategy="afterInteractive">
              {`!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);
              rdt('init','${REDDIT_PIXEL}');
              rdt('track', 'PageVisit');`}
            </Script>
          </>
        )}

        {/* ---------- Meta (Facebook) Pixel ---------- */}
        {FB_PIXEL && (
          <>
            <Script id="fb-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL}');
              fbq('track', 'PageView');`}
            </Script>
          </>
        )}

        {/* ---------- Google Analytics / Ads ---------- */}
        {GTAG_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTAG_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
