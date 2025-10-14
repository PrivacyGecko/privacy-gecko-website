import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GeckoGuard: Ad & Tracker Blocker Extension for Chrome, Firefox | Privacy Gecko",
  description: "GeckoGuard browser extension blocks ads, trackers, and fingerprinting on Chrome, Firefox, Safari. Faster browsing, better privacy. Free tier available.",
};

export default function GeckoGuardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
