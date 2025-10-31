import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoLock - Zero-Knowledge Password Manager | AES-256",
  description: "Secure password manager with zero-knowledge encryption. We can't see your passwords. AES-256 encryption. Cross-platform sync. Crypto wallet support. Free.",
};

export default function GeckoLockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
