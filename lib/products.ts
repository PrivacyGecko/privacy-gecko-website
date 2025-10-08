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

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  status: "live" | "coming";
  comingDate?: string;
  href: string;
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
    name: "GeckoAdvisor",
    tagline: "Know Your Privacy Score",
    description: "Comprehensive privacy & security audit tool for your devices",
    icon: Shield,
    status: "live",
    href: "/products/advisor",
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
    name: "GeckoShare",
    tagline: "Share Files, Not Your Privacy",
    description: "End-to-end encrypted file sharing with expiring links",
    icon: Share2,
    status: "live",
    href: "/products/share",
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
    name: "GeckoGuard",
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
    id: "vpn",
    name: "GeckoVPN",
    tagline: "Private Browsing, Global Access",
    description: "Privacy-first VPN with global server network",
    icon: Wifi,
    status: "coming",
    comingDate: "Coming Q2 2025",
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
    id: "pass",
    name: "GeckoPass",
    tagline: "Secure Password Management",
    description: "Open-source password manager with zero-knowledge encryption",
    icon: Key,
    status: "coming",
    comingDate: "Coming Q2 2025",
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
    name: "GeckoShell",
    tagline: "Anonymous Email Made Easy",
    description: "Disposable email addresses for ultimate privacy",
    icon: Mail,
    status: "coming",
    comingDate: "Coming Q3 2025",
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
    id: "view",
    name: "GeckoView",
    tagline: "Privacy-First Browser",
    description: "Chromium-based browser built for privacy from the ground up",
    icon: Globe,
    status: "coming",
    comingDate: "Coming Q3 2025",
    href: "/products",
    features: [
      "Built-in ad & tracker blocking",
      "No telemetry or data collection",
      "Tor integration",
      "IPFS support",
      "Web3 wallet integration",
      "Chromium compatibility",
    ],
    pricing: {
      free: {
        limit: "Full features, free forever",
        features: ["All privacy features", "Regular updates", "Community support"],
      },
      pro: {
        price: "$6.99/mo",
        features: [
          "Premium themes",
          "Priority support",
          "Advanced features",
          "Early access",
          "Custom branding",
        ],
      },
    },
  },
  {
    id: "watch",
    name: "GeckoWatch",
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
