import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Insights & Guides - Privacy Gecko Blog',
  description: 'Expert privacy guides, crypto trader tips, and AI security insights. Learn how to protect your digital privacy with Privacy Gecko tools.',
  keywords: ['privacy blog', 'privacy guides', 'crypto privacy', 'AI privacy', 'data protection', 'privacy tools', 'digital privacy', 'online security'],
  authors: [{ name: '@0xAnonA' }],
  creator: '@0xAnonA',
  publisher: 'Privacy Gecko',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://privacygecko.com/blog',
    siteName: 'Privacy Gecko',
    title: 'Privacy Insights & Guides - Privacy Gecko Blog',
    description: 'Expert privacy guides, crypto trader tips, and AI security insights. Learn how to protect your digital privacy with Privacy Gecko tools.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Privacy Gecko Blog - Privacy Insights & Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@privacygecko',
    creator: '@0xAnonA',
    title: 'Privacy Insights & Guides - Privacy Gecko Blog',
    description: 'Expert privacy guides, crypto trader tips, and AI security insights. Learn how to protect your digital privacy.',
    images: ['/twitter-image'],
  },
  alternates: {
    canonical: 'https://privacygecko.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
