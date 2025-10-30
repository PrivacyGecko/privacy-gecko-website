import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoVPN: AI-Enhanced VPN with WireGuard & No-Logs Policy | Privacy Gecko",
  description: "Fast, secure VPN with AI threat detection, WireGuard protocol, 50+ country servers, and audited no-logs policy. Kill switch, split tunneling, 5 devices per account.",
};

export default function GeckoVPNLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
