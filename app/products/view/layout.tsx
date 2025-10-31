import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoView - AI Bookmark Manager with Privacy | End-to-End",
  description: "Bookmark & summarize content with AI while keeping your reading private. One-click GPT summaries. End-to-end encrypted vault. Browser extension. Free.",
};

export default function GeckoViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
