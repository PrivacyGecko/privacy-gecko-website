import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Privacy Gecko",
  description: "Common questions about Privacy Gecko: Can I use without crypto? What if you shut down? Do you collect data? How do you make money?",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
