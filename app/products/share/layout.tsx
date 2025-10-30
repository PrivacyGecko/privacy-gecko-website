import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoShare: AI-Powered Encrypted File Sharing | Privacy Gecko",
  description: "End-to-end encrypted file sharing with AI-enhanced security detection, expiring links, and password protection. Share anything securely without registration.",
};

export default function GeckoShareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
