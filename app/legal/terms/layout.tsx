import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Fair Usage Terms | Privacy Gecko",
  description: "Our terms of service written in plain English. No hidden clauses, no data harvesting rights, no dark patterns.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
