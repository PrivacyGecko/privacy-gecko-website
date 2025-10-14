import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Privacy Gecko vs Bitwarden, NordVPN, uBlock Origin",
  description: "See how Privacy Gecko compares to popular privacy tools. Fair, honest comparison of features, pricing, and privacy practices across 8 dimensions.",
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
