import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GeckoLock - Zero-Knowledge Password Manager | Cross-Platform Sync",
  description: "Password manager where only YOU can see your passwords. Zero-knowledge AES-256 encryption. Cross-platform sync, password generator, 2FA authenticator. Free for 2 devices.",
  keywords: [
    "password manager",
    "zero-knowledge encryption",
    "password vault",
    "secure passwords",
    "password generator",
    "2FA",
    "two-factor authentication",
    "cross-platform sync",
    "AES-256 encryption",
    "privacy-first password manager",
    "Privacy Gecko",
    "GeckoLock",
  ],
  openGraph: {
    title: "GeckoLock - Zero-Knowledge Password Manager | Cross-Platform Sync",
    description: "Password manager where only YOU can see your passwords. Zero-knowledge AES-256 encryption. Cross-platform sync, password generator, 2FA authenticator.",
    url: "https://privacygecko.com/products/lock",
    siteName: "Privacy Gecko",
    images: [
      {
        url: "https://privacygecko.com/images/og-lock.png",
        width: 1200,
        height: 630,
        alt: "GeckoLock - Zero-Knowledge Password Manager | Privacy Gecko"
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeckoLock - Zero-Knowledge Password Manager | Cross-Platform Sync",
    description: "Password manager where only YOU can see your passwords. Zero-knowledge AES-256 encryption. Cross-platform sync, password generator.",
    images: ["https://privacygecko.com/images/og-lock.png"],
  },
  alternates: {
    canonical: "https://privacygecko.com/products/lock"
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

export default function GeckoLockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
