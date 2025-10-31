import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gecko VPN - Privacy-First No-Logs VPN | No Tracking",
  description: "Privacy-first VPN with strict no-logs policy. Global server network. Kill switch protection. Perfect for crypto trading. No data collection. Free tier.",
};

export default function GeckoVPNLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
