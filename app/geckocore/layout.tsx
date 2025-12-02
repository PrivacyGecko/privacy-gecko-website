import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoCore Protocol: Unified Privacy Ecosystem Coming 2026 | Privacy Gecko",
  description: "One wallet login across 8 privacy tools. GeckoCore unifies Privacy Gecko's ecosystem with zero-knowledge architecture. Development starts Q1 2026.",
  keywords: [
    "GeckoCore",
    "privacy ecosystem",
    "unified authentication",
    "Solana wallet",
    "PRICKO token",
    "zero-knowledge proofs",
    "privacy protocol",
    "decentralized privacy",
    "token staking",
    "privacy infrastructure"
  ],
  openGraph: {
    title: "GeckoCore Protocol: Unified Privacy Ecosystem Coming 2026",
    description: "One wallet login across 8 privacy tools. GeckoCore unifies Privacy Gecko's ecosystem with zero-knowledge architecture. Development starts Q1 2026.",
    type: "website",
    url: "https://privacygecko.com/geckocore",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeckoCore Protocol: Unified Privacy Ecosystem Coming 2026",
    description: "One wallet login across 8 privacy tools. Zero-knowledge architecture. Development roadmap Q1-Q4 2026.",
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
