import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoShare - Encrypted File Sharing with Self-Destructing Links | Privacy Gecko",
  description: "Send encrypted files with self-destructing links. 256-bit AES encryption, password protection, no registration required. Free up to 100MB, Pro up to 5GB.",
  keywords: [
    "encrypted file sharing",
    "secure file transfer",
    "self-destructing files",
    "private file sharing",
    "temporary file sharing",
    "AES-256 encryption",
    "password protected sharing",
    "anonymous file upload",
    "Privacy Gecko",
    "GeckoShare",
  ],
  openGraph: {
    title: "GeckoShare - Encrypted File Sharing with Self-Destructing Links",
    description: "Send encrypted files with self-destructing links. 256-bit AES encryption, password protection, no registration required. Free up to 100MB.",
    url: "https://privacygecko.com/products/share",
    siteName: "Privacy Gecko",
    images: [
      {
        url: "https://privacygecko.com/images/og-share.png",
        width: 1200,
        height: 630,
        alt: "GeckoShare - Encrypted File Sharing | Privacy Gecko"
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeckoShare - Encrypted File Sharing with Self-Destructing Links",
    description: "Send encrypted files with self-destructing links. 256-bit AES encryption, password protection, no registration required.",
    images: ["https://privacygecko.com/images/og-share.png"],
  },
  alternates: {
    canonical: "https://privacygecko.com/products/share"
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

export default function GeckoShareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
