import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gecko Watch - Privacy Compliance Monitoring | GDPR & CCPA",
  description: "Monitor privacy compliance of any website. GDPR & CCPA checking. Cookie & tracker analysis. Automated compliance reports. AI-powered change detection. Free.",
};

export default function GeckoWatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
