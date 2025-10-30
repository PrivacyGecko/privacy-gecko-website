import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoLock: AI-Enhanced Password Manager with Zero-Knowledge Encryption | Privacy Gecko",
  description: "Open-source password manager with AI-powered security insights, zero-knowledge encryption, and cross-platform sync. Free tier: 50 passwords. Coming soon with federated learning.",
};

export default function GeckoLockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
