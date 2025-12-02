import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gecko VPN - Privacy-First VPN with No-Logs Policy | Privacy Gecko",
  description: "Privacy-first VPN with global server network. Verified no-logs policy. Kill switch, split tunneling, WireGuard protocol. AI-enhanced routing 2027. Coming Q3 2026.",
  keywords: [
    "privacy VPN",
    "no-logs VPN",
    "secure VPN",
    "private VPN",
    "VPN service",
    "WireGuard VPN",
    "anonymous VPN",
    "kill switch",
    "split tunneling",
    "Privacy Gecko",
    "Gecko VPN",
  ],
  openGraph: {
    title: "Gecko VPN - Privacy-First VPN with No-Logs Policy",
    description: "Privacy-first VPN with global server network. Verified no-logs policy. Kill switch, split tunneling, WireGuard protocol. AI-enhanced routing 2027.",
    url: "https://privacygecko.com/products/vpn",
    siteName: "Privacy Gecko",
    images: [
      {
        url: "https://privacygecko.com/images/og-vpn.png",
        width: 1200,
        height: 630,
        alt: "Gecko VPN - Privacy-First VPN | Privacy Gecko"
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gecko VPN - Privacy-First VPN with No-Logs Policy",
    description: "Privacy-first VPN with global server network. Verified no-logs policy. Kill switch, split tunneling, WireGuard protocol.",
    images: ["https://privacygecko.com/images/og-vpn.png"],
  },
  alternates: {
    canonical: "https://privacygecko.com/products/vpn"
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

export default function GeckoVPNLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
