import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Privacy Gecko",
  description: "Common questions about Privacy Gecko: What data do you collect? How do you make money? Is GeckoShare really encrypted? Can I cancel anytime?",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
