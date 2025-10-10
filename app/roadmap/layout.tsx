import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Roadmap: 5 Privacy Tools In Development - Privacy Gecko",
  description: "5 privacy tools in active development (20-65% complete). Real progress bars, transparent roadmap. Join early adopter waitlist for 20% lifetime discount."
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
