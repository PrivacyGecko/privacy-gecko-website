import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Tools - GeckoAdvisor & GeckoShare | Privacy Gecko",
  description: "Privacy tools built for businesses that take data protection seriously. GeckoAdvisor scans privacy policies for compliance risks. GeckoShare provides end-to-end encrypted file sharing. Both free to start.",
  keywords: [
    "privacy tools",
    "privacy policy scanner",
    "encrypted file sharing",
    "GDPR compliance",
    "data protection",
    "GeckoAdvisor",
    "GeckoShare",
    "enterprise privacy",
    "security tools",
  ],
  openGraph: {
    title: "Privacy Tools - GeckoAdvisor & GeckoShare | Privacy Gecko",
    description: "Privacy tools built for businesses. GeckoAdvisor scans privacy policies for compliance risks. GeckoShare provides encrypted file sharing. Free to start.",
    url: "https://privacygecko.com/products",
    siteName: "Privacy Gecko",
    images: [
      {
        url: "https://privacygecko.com/images/og-products.png",
        width: 1200,
        height: 630,
        alt: "Privacy Tools | Privacy Gecko"
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Tools - GeckoAdvisor & GeckoShare | Privacy Gecko",
    description: "Privacy tools built for businesses. GeckoAdvisor scans privacy policies. GeckoShare provides encrypted file sharing. Free to start.",
    images: ["https://privacygecko.com/images/og-products.png"],
  },
  alternates: {
    canonical: "https://privacygecko.com/products"
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

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
