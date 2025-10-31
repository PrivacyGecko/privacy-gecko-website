import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoAdvisor: AI-Powered Website Privacy Policy Scanner | Privacy Gecko",
  description: "AI-enhanced website privacy policy analysis. Scan any website for hidden trackers, compliance issues, and data collection practices. Beta pricing $4.99/mo. Free tier: 3 scans/month.",
};

export default function AdvisorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
