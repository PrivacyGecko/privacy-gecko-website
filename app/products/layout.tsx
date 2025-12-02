import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Tools - Password Manager, VPN & More | Privacy Gecko",
  description: "Explore Privacy Gecko's complete privacy toolkit: 2 live tools (GeckoAdvisor, GeckoShare) + 6 in development (password manager, VPN, tracker blocker, AI bookmarks, privacy browser, compliance monitor). Free tiers available. AI-enhanced Q1-Q2 2026.",
  keywords: [
    "privacy tools",
    "password manager",
    "privacy VPN",
    "encrypted file sharing",
    "ad blocker",
    "tracker blocker",
    "AI bookmarks",
    "privacy browser",
    "compliance monitor",
    "privacy policy scanner",
    "Privacy Gecko ecosystem",
  ],
  openGraph: {
    title: "Privacy Tools - Complete Privacy Toolkit | Privacy Gecko",
    description: "Explore Privacy Gecko's complete privacy toolkit: 2 live tools + 6 in development. Password manager, VPN, encrypted file sharing, tracker blocker, and more.",
    url: "https://privacygecko.com/products",
    siteName: "Privacy Gecko",
    images: [
      {
        url: "https://privacygecko.com/images/og-products.png",
        width: 1200,
        height: 630,
        alt: "Privacy Tools | Privacy Gecko"
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Tools - Complete Privacy Toolkit | Privacy Gecko",
    description: "Explore Privacy Gecko's complete privacy toolkit: 2 live tools + 6 in development. Password manager, VPN, encrypted file sharing, and more.",
    images: ["https://privacygecko.com/images/og-products.png"],
  },
  alternates: {
    canonical: "https://privacygecko.com/products"
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

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
