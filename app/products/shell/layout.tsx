import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoShell - Private Mobile Browser | iOS & Android",
  description: "Private mobile browser that blocks trackers automatically. Built-in crypto wallet (optional). iOS & Android. Ad blocking. Privacy dashboard. Free download.",
};

export default function GeckoShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
