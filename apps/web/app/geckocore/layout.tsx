import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoCore Protocol: The Privacy Proof Layer for Solana | Privacy Gecko",
  description: "Open privacy infrastructure enabling any application to verify privacy, security, and trust through zero-knowledge proofs. Five Privacy Feeds. SDK launching Q2 2026.",
  keywords: [
    "GeckoCore",
    "privacy proof layer",
    "Solana privacy",
    "zero-knowledge proofs",
    "privacy infrastructure",
    "PRICKO token",
    "privacy feeds",
    "decentralized privacy",
    "privacy SDK",
    "DeFi privacy"
  ],
  openGraph: {
    title: "GeckoCore Protocol: The Privacy Proof Layer for Solana",
    description: "Open privacy infrastructure enabling any application to verify privacy, security, and trust through zero-knowledge proofs. SDK launching Q2 2026.",
    type: "website",
    url: "https://privacygecko.com/geckocore",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeckoCore Protocol: The Privacy Proof Layer for Solana",
    description: "Open privacy infrastructure for any app. Five Privacy Feeds. Zero-knowledge verification. SDK launching Q2 2026.",
  },
  alternates: {
    canonical: "https://privacygecko.com/geckocore",
  },
};

export default function GeckoCoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
