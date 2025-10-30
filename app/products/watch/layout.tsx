import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoWatch: AI-Powered Privacy Compliance Monitoring | Privacy Gecko",
  description: "AI-driven privacy auditing tool. Scan websites for GDPR/CCPA compliance, analyze cookies & trackers, monitor policy changes, and generate compliance reports.",
};

export default function GeckoWatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
