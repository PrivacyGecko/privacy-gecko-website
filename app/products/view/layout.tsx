import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoView: AI-Powered Reading with Encrypted Bookmarks | Privacy Gecko",
  description: "Read smarter with AI summaries, encrypted bookmark vault, and AI digest assistant. One-click article summaries using GPT-4. Privacy-first reading platform.",
};

export default function GeckoViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
