import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "All Products: Password Manager, VPN, File Sharing - Privacy Gecko",
  description: "Browse 8 privacy tools: GeckoAdvisor (device security), GeckoShare (encrypted files), GeckoGuard (ad blocking) live now. Password manager, VPN + more coming Q4 2025."
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
