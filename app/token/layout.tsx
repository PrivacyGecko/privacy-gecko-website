import { Metadata } from "next";

export const metadata: Metadata = {
  title: "$PRICKO Token - Powering Privacy-First AI | Launch December 2025",
  description: "The utility token funding AI-enhanced privacy for everyone. Stake to earn, unlock unlimited AI queries, vote on development. Fair launch December 2025. No VCs, no pre-sales.",
  keywords: [
    "$PRICKO token",
    "privacy token",
    "AI utility token",
    "privacy memecoin",
    "Solana token",
    "privacy cryptocurrency",
    "AI funding token",
    "Web3 privacy",
    "token launch December 2025",
    "Privacy Gecko token",
    "stake to earn",
    "crypto governance",
  ],
  openGraph: {
    title: "$PRICKO Token - Powering Privacy-First AI",
    description: "Fair launch December 2025. Stake to earn, unlock unlimited AI, vote on development. No VCs, no pre-sales.",
    url: "https://privacygecko.com/token",
    siteName: "Privacy Gecko",
    images: [
      {
        url: "https://privacygecko.com/images/og-token.png",
        width: 1200,
        height: 630,
        alt: "$PRICKO Token - Privacy Gecko"
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "$PRICKO Token - Powering Privacy-First AI",
    description: "Fair launch December 2025. Stake to earn, unlock unlimited AI, vote on development.",
    images: ["https://privacygecko.com/images/og-token.png"],
  },
  alternates: {
    canonical: "https://privacygecko.com/token"
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

export default function TokenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
