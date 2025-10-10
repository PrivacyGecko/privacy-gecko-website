import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Roadmap: 5 Privacy Tools In Development - Privacy Gecko",
  description: "See our progress: 5 privacy tools in active development (20-65% complete). Join early adopter waitlist for 20% lifetime discount on all Q4 2025 launches."
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
