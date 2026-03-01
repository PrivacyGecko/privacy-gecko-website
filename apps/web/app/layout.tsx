import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Privacy Gecko - Enterprise Privacy Tools",
  description: "Enterprise-grade privacy tools for business. GeckoAdvisor scans privacy policies for compliance risks. GeckoShare provides encrypted file sharing with expiring links. Free tier available.",
  keywords: ["privacy tools", "privacy policy scanner", "encrypted file sharing", "GDPR compliance", "enterprise privacy", "data protection", "security tools"],
  authors: [{ name: "Privacy Gecko" }],
  creator: "Privacy Gecko",
  publisher: "Privacy Gecko",
  robots: "index, follow",
  metadataBase: new URL("https://privacygecko.com"),
  alternates: {
    canonical: "https://privacygecko.com",
  },
  openGraph: {
    title: "Privacy Gecko - Enterprise Privacy Tools",
    description: "Enterprise-grade privacy tools for business. GeckoAdvisor scans privacy policies. GeckoShare provides encrypted file sharing. Free tier available.",
    type: "website",
    url: "https://privacygecko.com",
    siteName: "Privacy Gecko",
    locale: "en_US",
    images: [
      {
        url: "/images/og-home.png",
        width: 1200,
        height: 630,
        alt: "Privacy Gecko - Enterprise Privacy Tools for Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@privacygecko",
    creator: "@privacygecko",
    title: "Privacy Gecko - Enterprise Privacy Tools",
    description: "Enterprise-grade privacy tools for business. GeckoAdvisor scans privacy policies. GeckoShare provides encrypted file sharing. Free tier available.",
    images: ["/images/og-home.png"],
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <head>
        {/* Plausible Analytics - Privacy-friendly, GDPR-compliant */}
        <script
          defer
          data-domain="privacygecko.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main id="main-content" className="pb-28 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
