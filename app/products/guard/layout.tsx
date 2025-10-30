import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GeckoGuard: AI-Adaptive Ad & Tracker Blocker Extension | Privacy Gecko",
  description: "AI-enhanced browser extension with adaptive tracker blocking on Chrome, Firefox, Safari. Blocks ads, trackers, fingerprinting. Faster browsing, better privacy. Free tier available.",
};

export default function GeckoGuardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
