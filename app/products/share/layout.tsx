import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoShare - Secure Encrypted File Sharing | Auto-Delete",
  description: "Send encrypted files that automatically delete. End-to-end encryption (AES-256). Password protection & expiring links. No registration. 100MB free.",
};

export default function GeckoShareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
