import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Privacy Gecko - Privacy Tools That Actually Work",
  description: "8 open-source privacy tools. No tracking. No data selling. Powered by $PRICKO.",
  keywords: ["privacy", "security", "encryption", "open source", "privacy tools"],
  authors: [{ name: "@0xAnonA" }],
  openGraph: {
    title: "Privacy Gecko - Privacy Tools That Actually Work",
    description: "8 open-source privacy tools. No tracking. No data selling.",
    type: "website",
    url: "https://privacygecko.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Gecko - Privacy Tools That Actually Work",
    description: "8 open-source privacy tools. No tracking. No data selling.",
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
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
