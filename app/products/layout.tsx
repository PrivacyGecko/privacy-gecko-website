import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "All Products: Password Manager, VPN, File Sharing - Privacy Gecko",
  description: "8 privacy tools: GeckoAdvisor (website privacy scanner), GeckoShare (encrypted files), GeckoGuard (ad blocking) live now. Password manager, VPN, email aliases in development."
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
