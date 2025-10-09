import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PrivacyNotice } from "@/components/PrivacyNotice";

// Google Fonts removed for privacy - using system font stack instead
// No external font requests = zero tracking vectors

export const metadata: Metadata = {
  title: "Privacy Gecko - Privacy Tools That Actually Work",
  description: "8 open-source privacy tools. No tracking. No data selling. Powered by $PRICKO.",
  keywords: ["privacy", "security", "encryption", "open source", "privacy tools", "GDPR", "data protection"],
  authors: [{ name: "@0xAnonA" }],
  creator: "@0xAnonA",
  publisher: "Privacy Gecko",
  robots: "index, follow",
  metadataBase: new URL("https://privacygecko.com"),
  alternates: {
    canonical: "https://privacygecko.com",
  },
  openGraph: {
    title: "Privacy Gecko - Privacy Tools That Actually Work",
    description: "8 open-source privacy tools. No tracking. No data selling. Powered by $PRICKO.",
    type: "website",
    url: "https://privacygecko.com",
    siteName: "Privacy Gecko",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Privacy Gecko - Privacy Tools That Actually Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@privacygecko",
    creator: "@0xAnonA",
    title: "Privacy Gecko - Privacy Tools That Actually Work",
    description: "8 open-source privacy tools. No tracking. No data selling. Powered by $PRICKO.",
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
        <main>{children}</main>
        <Footer />
        <PrivacyNotice />
      </body>
    </html>
  );
}
