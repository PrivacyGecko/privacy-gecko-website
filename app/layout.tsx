import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";

// Google Fonts removed for privacy - using system font stack instead
// No external font requests = zero tracking vectors

export const metadata: Metadata = {
  title: "Privacy Gecko - 8 AI-Enhanced Privacy Tools | Free Tier",
  description: "8 AI-enhanced privacy tools with local processing. Password manager, VPN, encrypted file sharing & more. Free tier available. Zero data collection.",
  keywords: ["privacy", "security", "encryption", "open source", "privacy tools", "AI privacy", "federated learning", "GDPR", "data protection"],
  authors: [{ name: "@0xAnonA" }],
  creator: "@0xAnonA",
  publisher: "Privacy Gecko",
  robots: "index, follow",
  metadataBase: new URL("https://privacygecko.com"),
  alternates: {
    canonical: "https://privacygecko.com",
  },
  openGraph: {
    title: "Privacy Gecko - 8 AI-Enhanced Privacy Tools | Free Tier",
    description: "8 AI-enhanced privacy tools with local processing. Password manager, VPN, encrypted file sharing & more. Free tier available. Zero data collection.",
    type: "website",
    url: "https://privacygecko.com",
    siteName: "Privacy Gecko",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Privacy Gecko - 8 AI-Enhanced Privacy Tools. Zero Data Collection.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@privacygecko",
    creator: "@0xAnonA",
    title: "Privacy Gecko - 8 AI-Enhanced Privacy Tools | Free Tier",
    description: "8 AI-enhanced privacy tools with local processing. Password manager, VPN, encrypted file sharing & more. Free tier available. Zero data collection.",
    images: ["/twitter-image"],
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
    <html lang="en">
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
        <PrivacyNotice />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
