import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | PrivacyGecko Blog",
    default: "PrivacyGecko Blog - Privacy, Security & Crypto Safety",
  },
  description:
    "Expert guides on online privacy, cybersecurity, and crypto safety. Learn how to protect your digital life.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://privacygecko.com/blog",
    siteName: "PrivacyGecko Blog",
    images: [
      {
        url: "https://privacygecko.com/images/og-home.png",
        width: 1200,
        height: 630,
        alt: "PrivacyGecko Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PrivacyGecko",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased bg-[var(--color-cream)] text-[var(--color-charcoal)]">
        <Navigation />

        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
