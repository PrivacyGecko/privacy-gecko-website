import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoShell - Privacy Mobile Browser for iOS & Android | Privacy Gecko",
  description: "Private mobile browser that blocks trackers on iOS and Android. Built-in Solana wallet (optional). No browsing history collection. Fast and lightweight. Coming Q2 2026.",
  keywords: [
    "privacy browser",
    "mobile browser",
    "tracker blocking browser",
    "crypto browser",
    "private browsing",
    "iOS browser",
    "Android browser",
    "Solana wallet",
    "privacy-first browser",
    "Privacy Gecko",
    "GeckoShell",
  ],
  openGraph: {
    title: "GeckoShell - Privacy Mobile Browser for iOS & Android",
    description: "Private mobile browser that blocks trackers on iOS and Android. Built-in Solana wallet (optional). No browsing history collection. Fast and lightweight.",
    url: "https://privacygecko.com/products/shell",
    siteName: "Privacy Gecko",
    images: [
      {
        url: "https://privacygecko.com/images/og-shell.png",
        width: 1200,
        height: 630,
        alt: "GeckoShell - Privacy Mobile Browser | Privacy Gecko"
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeckoShell - Privacy Mobile Browser for iOS & Android",
    description: "Private mobile browser that blocks trackers on iOS and Android. Built-in Solana wallet (optional). No browsing history collection.",
    images: ["https://privacygecko.com/images/og-shell.png"],
  },
  alternates: {
    canonical: "https://privacygecko.com/products/shell"
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

export default function GeckoShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
