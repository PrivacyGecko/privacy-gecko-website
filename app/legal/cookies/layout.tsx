import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Minimal Cookies for Privacy | Privacy Gecko",
  description: "We use minimal, privacy-friendly cookies. No tracking cookies, no advertising cookies. Only essential cookies for functionality.",
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
