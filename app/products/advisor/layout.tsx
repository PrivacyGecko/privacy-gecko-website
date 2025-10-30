import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoAdvisor: AI-Powered Privacy & Security Audit Tool | Privacy Gecko",
  description: "AI-enhanced device security audits. Get your privacy score, AI-powered threat detection, and actionable recommendations. Beta pricing $4.99/mo. Free tier: 3 scans/month.",
};

export default function AdvisorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
