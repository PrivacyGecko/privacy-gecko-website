import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Privacy Gecko",
  description: "Have questions about Privacy Gecko? Contact our team for support, partnerships, or general inquiries. We respond within 48 hours and protect your privacy.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
