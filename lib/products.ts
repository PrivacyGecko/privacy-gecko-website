import {
  Shield,
  Share2,
  Eye,
  Wifi,
  Key,
  Mail,
  Globe,
  Search,
  Smartphone,
  LucideIcon,
} from "lucide-react";
import { getProductLink } from "./domain-config";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  status: "live" | "beta" | "coming";
  comingDate?: string;
  progress?: number; // Percentage complete for coming-soon/beta products
  lastUpdated?: string; // Last progress update date
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
    tagline: "Find Out If Your Device Is Leaking Data",
    description: "Scan your device for privacy leaks and get actionable fix recommendations",
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
        price: "$4.99/mo",
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
    tagline: "Share Files Securely Without Leaving a Trail",
    description: "Send encrypted files that automatically delete after you set the time limit",
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
    tagline: "Block Trackers Before They See You",
    description: "Stop websites from following you across the internet with automatic blocking",
    icon: Eye,
    status: "coming",
    comingDate: "In Web Store Review",
    progress: 90,
    lastUpdated: "2025-10-14",
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
    id: "lock",
    name: "Gecko Lock",
    tagline: "Your Passwords, Locked Away From Everyone",
    description: "Password manager where only you can see your passwords - not even we can access them",
    icon: Key,
    status: "coming",
    comingDate: "In Development",
    progress: 65,
    lastUpdated: "2025-01-15",
    href: "/products/lock",
    isExternal: false,
    features: [
      "Military-grade AES-256 encryption",
      "Zero-knowledge architecture (we can't see your passwords)",
      "Cross-platform sync (web, mobile, desktop)",
      "Password generator with customizable complexity",
      "Built-in 2FA authenticator",
      "Easy import from LastPass, 1Password, Bitwarden",
    ],
    pricing: {
      free: {
        limit: "Unlimited passwords, 2 devices",
        features: ["Unlimited password storage", "Password generator", "Basic auto-fill", "2FA authenticator", "Secure sharing (5 items)"],
      },
      pro: {
        price: "$4.99/mo",
        features: [
          "Unlimited device sync",
          "Breach monitoring & alerts",
          "Emergency access",
          "Priority support (4hr response)",
          "Advanced sharing & folders",
          "10% off with 50K+ $PRICKO tokens (optional)",
        ],
      },
    },
  },
  {
    id: "view",
    name: "Gecko View",
    tagline: "Save and Summarize Without Being Tracked",
    description: "Bookmark and summarize content with AI while keeping your reading history completely private",
    icon: Globe,
    status: "coming",
    comingDate: "In Development",
    progress: 45,
    lastUpdated: "2025-01-10",
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
          "Free with 100K+ $PRICKO tokens (optional)",
        ],
      },
    },
  },
  {
    id: "shell",
    name: "GeckoShell",
    tagline: "Private Mobile Browser",
    description: "Private mobile browser that blocks trackers on iOS and Android. Built-in crypto wallet optional.",
    icon: Smartphone,
    status: "coming",
    comingDate: "In Development",
    progress: 30,
    lastUpdated: "2025-10-14",
    href: "/products/shell",
    features: [
      "Blocks trackers automatically",
      "Available on iOS and Android",
      "Built-in Solana wallet (optional)",
      "Privacy-focused browsing",
      "No browsing history collection",
      "Fast and lightweight",
    ],
    pricing: {
      free: {
        limit: "Basic features, 1 device",
        features: [
          "Private mobile browsing",
          "Automatic tracker blocking",
          "No browsing history saved",
          "Basic crypto wallet",
          "Ad blocking"
        ],
      },
      pro: {
        price: "$6.99/mo",
        features: [
          "Sync across devices",
          "Advanced tracker blocking",
          "Premium wallet features",
          "Priority support",
          "Custom filters",
          "Faster updates"
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
    comingDate: "In Development",
    progress: 20,
    lastUpdated: "2025-01-05",
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
    comingDate: "In Development",
    progress: 55,
    lastUpdated: "2025-01-12",
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
