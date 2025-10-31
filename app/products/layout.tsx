import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Tools - Password Manager, VPN & More | Privacy Gecko",
  description: "Complete privacy tool ecosystem: password manager, VPN, encrypted file sharing, ad blocker, policy scanner & more. Free tier available on all 8 tools."
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
