import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - How We Protect Your Data | Privacy Gecko",
  description: "Our privacy policy: No tracking, no data selling, no surveillance capitalism. Clear explanation of what data we collect (almost none) and why.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
