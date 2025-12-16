import type { Metadata } from "next";
import { Instrument_Serif, Geist } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

// Fonts
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

// Use main domain for SEO authority (subdirectory > subdomain)
const canonicalBase = "https://privacygecko.com/blog";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalBase),
  title: {
    template: "%s | Privacy Gecko",
    default: "Privacy Gecko Blog — Privacy Research & Education",
  },
  description:
    "Independent privacy research and education. Learn how websites track you, how data brokers operate, and how to protect your digital privacy.",
  keywords: [
    "privacy",
    "security",
    "tracking",
    "data protection",
    "browser fingerprinting",
    "crypto safety",
    "online privacy",
  ],
  authors: [{ name: "Privacy Gecko Team" }],
  creator: "Privacy Gecko",
  publisher: "Privacy Gecko",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: canonicalBase,
    siteName: "Privacy Gecko",
    title: "Privacy Gecko Blog — Privacy Research & Education",
    description:
      "Independent privacy research and education. Learn how websites track you and protect your digital privacy.",
    images: [
      {
        url: "https://privacygecko.com/images/og-home.png",
        width: 1200,
        height: 630,
        alt: "Privacy Gecko Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PrivacyGecko",
    creator: "@PrivacyGecko",
  },
  alternates: {
    canonical: canonicalBase,
    types: {
      "application/rss+xml": "/blog/feed.xml",
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${geist.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to critical origins for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="https://plausible.io" />
      </head>
      <body className="font-body antialiased bg-[var(--color-bg)] text-[var(--color-text-primary)]">
        <Navigation />

        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
