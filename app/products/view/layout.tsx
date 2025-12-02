import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoView - AI Bookmark Manager with Private Content Summaries | Privacy Gecko",
  description: "Bookmark & summarize content with AI while keeping your reading history completely private. End-to-end encrypted vault, browser extension, mobile apps. Coming Q2 2026.",
  keywords: [
    "AI bookmarks",
    "content summarization",
    "private bookmarks",
    "AI reading assistant",
    "bookmark manager",
    "reading list",
    "end-to-end encryption",
    "private AI",
    "GPT summaries",
    "Privacy Gecko",
    "GeckoView",
  ],
  openGraph: {
    title: "GeckoView - AI Bookmark Manager with Private Content Summaries",
    description: "Bookmark & summarize content with AI while keeping your reading history completely private. End-to-end encrypted vault, browser extension, mobile apps.",
    url: "https://privacygecko.com/products/view",
    siteName: "Privacy Gecko",
    images: [
      {
        url: "https://privacygecko.com/images/og-view.png",
        width: 1200,
        height: 630,
        alt: "GeckoView - AI Bookmark Manager | Privacy Gecko"
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeckoView - AI Bookmark Manager with Private Content Summaries",
    description: "Bookmark & summarize content with AI while keeping your reading history completely private. End-to-end encrypted vault.",
    images: ["https://privacygecko.com/images/og-view.png"],
  },
  alternates: {
    canonical: "https://privacygecko.com/products/view"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function GeckoViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
