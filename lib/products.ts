import {
  Shield,
  Share2,
  Eye,
  Wifi,
  Key,
  Mail,
  Globe,
  Search,
  LucideIcon,
} from "lucide-react";
import { getProductLink } from "./domain-config";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  status: "live" | "coming";
  comingDate?: string;
  href: string;
  isExternal?: boolean; // True if links to external domain
  features: string[];
  pricing: {
    free: {
      limit: string;
      features: string[];
    };
    pro: {
      price: string;
      features: string[];
    };
  };
}

export const products: Product[] = [
  {
    id: "advisor",
    name: "Gecko Advisor",
    tagline: "Know Your Privacy Score",
    description: "Comprehensive privacy & security audit tool for your devices",
    icon: Shield,
    status: "live",
    href: "https://geckoadvisor.com",
    isExternal: true,
    features: [
      "Device scanning & vulnerability detection",
      "Privacy score & actionable recommendations",
      "Tracking detection & secure configuration tips",
      "Detailed security reports",
      "Real-time threat monitoring",
      "Compliance checking",
    ],
    pricing: {
      free: {
        limit: "3 scans/month",
        features: ["Basic privacy report", "Device scanning", "Privacy score"],
      },
      pro: {
        price: "$9.99/mo",
        features: [
          "Unlimited scans",
          "Detailed reports",
          "Priority alerts",
          "Advanced recommendations",
          "Historical tracking",
        ],
      },
    },
  },
  {
    id: "share",
    name: "Gecko Share",
    tagline: "Share Files, Not Your Privacy",
    description: "End-to-end encrypted file sharing with expiring links",
    icon: Share2,
    status: "live",
    href: "https://geckoshare.com",
    isExternal: true,
    features: [
      "End-to-end encryption (256-bit AES)",
      "Expiring links & password protection",
      "No registration required",
      "Audit logs & access tracking",
      "Custom branding options",
      "Team collaboration features",
    ],
    pricing: {
      free: {
        limit: "Up to 100MB, 24hr expiry",
        features: ["E2E encryption", "Basic sharing", "Password protection"],
      },
      pro: {
        price: "$7.99/mo",
        features: [
          "Up to 5GB per file",
          "Custom expiry",
          "Branded links",
          "Advanced analytics",
          "Priority support",
        ],
      },
    },
  },
  {
    id: "guard",
    name: "Gecko Guard",
    tagline: "Browse Without Being Tracked",
    description: "Browser extension for comprehensive tracker & ad blocking",
    icon: Eye,
    status: "live",
    href: "/products/guard",
    features: [
      "Real-time tracker & ad blocking",
      "Privacy dashboard & statistics",
      "Custom filter lists",
      "Cookie management",
      "Fingerprint protection",
      "Cross-device sync",
    ],
    pricing: {
      free: {
        limit: "Basic blocking, 10,000 trackers blocked",
        features: ["Ad blocking", "Basic tracker blocking", "Privacy stats"],
      },
      pro: {
        price: "$4.99/mo",
        features: [
          "Advanced filters",
          "Whitelisting",
          "Device sync",
          "Custom rules",
          "Advanced analytics",
        ],
      },
    },
  },
  {
    id: "view",
    name: "Gecko View",
    tagline: "Summarize Content. Protect Privacy.",
    description: "AI-powered content summarization with end-to-end encrypted bookmarks across all devices",
    icon: Globe,
    status: "coming",
    comingDate: "Coming Q4 2025",
    href: "/products/view",
    features: [
      "One-click AI summaries with GPT-3.5 & GPT-4",
      "End-to-end encrypted bookmark vault",
      "Browser extension with right-click integration",
      "Mobile apps for iOS and Android",
      "Gecko Digest AI assistant (chat with content)",
      "Export to PDF and share via IPFS",
    ],
    pricing: {
      free: {
        limit: "10 summaries/day with GPT-3.5",
        features: ["AI summarization", "Encrypted local storage", "Smart tagging", "Basic organization"],
      },
      pro: {
        price: "$9.99/mo",
        features: [
          "Unlimited summaries with GPT-4",
          "Cross-device sync",
          "IPFS decentralized storage",
          "PDF exports",
          "Priority support",
          "Free with 100K+ $PRICKO tokens",
        ],
      },
    },
  },
  {
    id: "pass",
    name: "Gecko Pass",
    tagline: "Secure Password Management",
    description: "Open-source password manager with zero-knowledge encryption",
    icon: Key,
    status: "coming",
    comingDate: "Coming Q4 2025",
    href: "/products",
    features: [
      "Zero-knowledge encryption",
      "Password generator",
      "Auto-fill & auto-save",
      "2FA integration",
      "Secure sharing",
      "Breach monitoring",
    ],
    pricing: {
      free: {
        limit: "Up to 50 passwords",
        features: ["Password storage", "Basic auto-fill", "Single device"],
      },
      pro: {
        price: "$4.99/mo",
        features: [
          "Unlimited passwords",
          "Device sync",
          "Priority support",
          "Advanced sharing",
          "Family plan available",
        ],
      },
    },
  },
  {
    id: "shell",
    name: "Gecko Shell",
    tagline: "Anonymous Email Made Easy",
    description: "Disposable email addresses for ultimate privacy",
    icon: Mail,
    status: "coming",
    comingDate: "Coming Q4 2025",
    href: "/products",
    features: [
      "Unlimited disposable emails",
      "Auto-forwarding",
      "Spam filtering",
      "Custom domains",
      "Email aliases",
      "Burn after reading",
    ],
    pricing: {
      free: {
        limit: "5 active emails",
        features: ["Basic forwarding", "7-day retention", "Standard domains"],
      },
      pro: {
        price: "$5.99/mo",
        features: [
          "Unlimited emails",
          "Custom domains",
          "Extended retention",
          "Advanced filtering",
          "API access",
        ],
      },
    },
  },
  {
    id: "vpn",
    name: "Gecko VPN",
    tagline: "Private Browsing, Global Access",
    description: "Privacy-first VPN with global server network",
    icon: Wifi,
    status: "coming",
    comingDate: "Coming Q4 2025",
    href: "/products",
    features: [
      "No-logs policy",
      "Global server network",
      "Kill switch protection",
      "Split tunneling",
      "WireGuard protocol",
      "Multi-device support",
    ],
    pricing: {
      free: {
        limit: "Limited servers, 10GB/month",
        features: ["Basic encryption", "Select servers", "Single device"],
      },
      pro: {
        price: "$9.99/mo",
        features: [
          "Unlimited bandwidth",
          "All servers",
          "5 devices",
          "Premium support",
          "Advanced features",
        ],
      },
    },
  },
  {
    id: "watch",
    name: "Gecko Watch",
    tagline: "Website Privacy Scanner",
    description: "Analyze and monitor privacy compliance of any website",
    icon: Search,
    status: "coming",
    comingDate: "Coming Q4 2025",
    href: "/products",
    features: [
      "GDPR compliance checking",
      "Cookie & tracker analysis",
      "Privacy policy scanning",
      "Continuous monitoring",
      "Competitor analysis",
      "Detailed reports",
    ],
    pricing: {
      free: {
        limit: "3 scans/month",
        features: ["Basic scanning", "Public reports", "Standard checks"],
      },
      pro: {
        price: "$14.99/mo",
        features: [
          "Unlimited scans",
          "Continuous monitoring",
          "Advanced reports",
          "API access",
          "White-label reports",
        ],
      },
    },
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getLiveProducts(): Product[] {
  return products.filter((product) => product.status === "live");
}

export function getComingProducts(): Product[] {
  return products.filter((product) => product.status === "coming");
}

/**
 * Get the correct link for a product (internal or external)
 */
export function getProductHref(product: Product): string {
  // Use domain config if available
  const domainLink = getProductLink(product.id);
  if (domainLink.startsWith('http')) {
    return domainLink;
  }
  return product.href;
}
