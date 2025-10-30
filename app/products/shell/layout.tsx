import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoShell: AI-Protected Mobile Browser with Web3 Support | Privacy Gecko",
  description: "Privacy-first mobile browser with AI-enhanced tracker blocking, no browsing history logging, and optional Solana wallet. iOS & Android. Free tier available.",
};

export default function GeckoShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
