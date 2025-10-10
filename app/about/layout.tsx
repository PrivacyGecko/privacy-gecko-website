import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Privacy Gecko - Transparent Privacy Tools Since Jan 2025",
  description: "Building radically transparent privacy tools. No tracking. No data selling. Open source code in development. Real privacy, provable security."
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
