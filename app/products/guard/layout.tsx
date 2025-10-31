import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GeckoGuard - Privacy Ad Blocker & Tracker Blocker",
  description: "Block trackers & ads automatically. Real-time privacy dashboard. Custom filter lists. Learns new tracking patterns with AI. Chrome & Firefox extension.",
};

export default function GeckoGuardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
