import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoAdvisor - Privacy Policy Scanner & GDPR Checker",
  description: "Scan any website's privacy policy for hidden trackers & compliance issues. GDPR & CCPA checker. Detect cookies, trackers & compliance gaps. Free scans.",
};

export default function AdvisorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
