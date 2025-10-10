import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Privacy Gecko - Transparent Privacy Tools Since Jan 2025",
  description: "Privacy Gecko launched January 2025 to build radically transparent privacy tools. No tracking. No data selling. Open source code. Real privacy, provable security."
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
