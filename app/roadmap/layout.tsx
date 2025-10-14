import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Roadmap: 6 Privacy Tools In Development - Privacy Gecko",
  description: "6 privacy tools in active development (20-90% complete). Real progress bars, transparent roadmap. Join early adopter waitlist for 20% lifetime discount."
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
