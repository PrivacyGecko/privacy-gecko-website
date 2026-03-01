import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Privacy Gecko vs Privacy Badger, WeTransfer | Feature Comparison",
  description: "See how Privacy Gecko compares to popular alternatives. Honest comparison of features, pricing, and privacy practices for GeckoAdvisor and GeckoShare.",
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
