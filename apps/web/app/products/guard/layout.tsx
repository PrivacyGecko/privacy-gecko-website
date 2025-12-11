import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GeckoGuard - AI Tracker Blocker & Privacy Extension | Privacy Gecko",
  description: "Block trackers & ads with AI-enhanced detection. Learns new tracking patterns in real-time. Privacy dashboard, custom filters, cookie management. Free tier available.",
  keywords: [
    "tracker blocker",
    "ad blocker",
    "privacy extension",
    "AI ad blocker",
    "browser extension",
    "privacy protection",
    "cookie blocker",
    "anti-tracking",
    "Chrome extension",
    "Firefox extension",
    "Privacy Gecko",
    "GeckoGuard",
  ],
  openGraph: {
    title: "GeckoGuard - AI Tracker Blocker & Privacy Extension",
    description: "Block trackers & ads with AI-enhanced detection. Learns new tracking patterns in real-time. Privacy dashboard, custom filters, cookie management.",
    url: "https://privacygecko.com/products/guard",
    siteName: "Privacy Gecko",
    images: [
      {
        url: "https://privacygecko.com/images/og-guard.png",
        width: 1200,
        height: 630,
        alt: "GeckoGuard - AI Tracker Blocker | Privacy Gecko"
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeckoGuard - AI Tracker Blocker & Privacy Extension",
    description: "Block trackers & ads with AI-enhanced detection. Learns new tracking patterns in real-time. Privacy dashboard, custom filters.",
    images: ["https://privacygecko.com/images/og-guard.png"],
  },
  alternates: {
    canonical: "https://privacygecko.com/products/guard"
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

export default function GeckoGuardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
