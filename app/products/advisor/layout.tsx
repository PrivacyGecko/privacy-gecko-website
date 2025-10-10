import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoAdvisor: Privacy & Security Audit Tool - Beta Testing | Privacy Gecko",
  description: "Comprehensive privacy and security audits for your devices. Get your privacy score, detect vulnerabilities, and get actionable recommendations. Beta pricing $4.99/mo. Free tier: 3 scans/month.",
};

export default function AdvisorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
