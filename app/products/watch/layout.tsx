import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoWatch - Website Privacy Compliance Monitor | GDPR & CCPA Checker",
  description: "Analyze and monitor privacy compliance of any website. GDPR, CCPA checking. Cookie & tracker analysis. Continuous monitoring. AI-enhanced Q2 2026. Coming Q1 2026.",
  keywords: [
    "privacy compliance",
    "GDPR checker",
    "CCPA compliance",
    "privacy monitor",
    "website scanner",
    "compliance automation",
    "cookie compliance",
    "tracker analysis",
    "privacy audit",
    "Privacy Gecko",
    "GeckoWatch",
  ],
  openGraph: {
    title: "GeckoWatch - Website Privacy Compliance Monitor | GDPR & CCPA Checker",
    description: "Analyze and monitor privacy compliance of any website. GDPR, CCPA checking. Cookie & tracker analysis. Continuous monitoring. AI-enhanced Q2 2026.",
    url: "https://privacygecko.com/products/watch",
    siteName: "Privacy Gecko",
    images: [
      {
        url: "https://privacygecko.com/images/og-watch.png",
        width: 1200,
        height: 630,
        alt: "GeckoWatch - Privacy Compliance Monitor | Privacy Gecko"
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeckoWatch - Website Privacy Compliance Monitor | GDPR & CCPA Checker",
    description: "Analyze and monitor privacy compliance of any website. GDPR, CCPA checking. Cookie & tracker analysis. Continuous monitoring.",
    images: ["https://privacygecko.com/images/og-watch.png"],
  },
  alternates: {
    canonical: "https://privacygecko.com/products/watch"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function GeckoWatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
