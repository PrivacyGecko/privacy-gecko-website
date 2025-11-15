import { Metadata } from "next";
import { WhitepaperContent } from "@/components/whitepaper/WhitepaperContent";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "GeckoCore Protocol Whitepaper | Privacy Gecko",
  description: "Technical whitepaper for GeckoCore Protocol - The Privacy Proof Layer for Solana. Zero-knowledge privacy infrastructure enabling any application to verify privacy, security, and trust without exposing user data.",
  openGraph: {
    title: "GeckoCore Protocol Whitepaper v1.0",
    description: "The Privacy Proof Layer for Solana - Technical architecture, token economics, and roadmap for decentralized privacy infrastructure.",
    type: "article",
    publishedTime: "2025-11-01T00:00:00Z",
    images: [
      {
        url: "/images/og-whitepaper.png",
        width: 1200,
        height: 630,
        alt: "GeckoCore Protocol Whitepaper - The Privacy Proof Layer for Solana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@privacygecko",
    creator: "@0xAnonA",
    title: "GeckoCore Protocol Whitepaper v1.0",
    description: "The Privacy Proof Layer for Solana - Building open privacy infrastructure on blockchain.",
    images: ["/images/og-whitepaper.png"],
  },
};

export default function WhitepaperPage() {
  // Read the whitepaper markdown file
  const whitepaperPath = path.join(process.cwd(), "assets", "docs", "GeckoCore-Whitepaper-v1.0.md");
  const whitepaperContent = fs.readFileSync(whitepaperPath, "utf8");

  return <WhitepaperContent content={whitepaperContent} />;
}
