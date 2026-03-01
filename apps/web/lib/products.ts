import {
  Shield,
  Share2,
  LucideIcon,
} from "lucide-react";
import { getProductLink } from "./domain-config";

/**
 * AI Feature Timing Categories
 * - launch-feature: AI capabilities available at product launch
 * - post-launch: AI features added after initial product release
 * - ai-native: Product is fundamentally AI-powered from the start
 * - future: AI capabilities planned for later phases
 */
export type AITiming = "launch-feature" | "post-launch" | "ai-native" | "future";

export interface ProductAIFeatures {
  /**
   * When AI features will be available for this product
   */
  aiTiming: AITiming;

  /**
   * List of AI-powered capabilities
   */
  aiFeatures: string[];

  /**
   * Quarter when AI features launch (e.g., "Q1 2026")
   */
  aiLaunchDate?: string;

  /**
   * Quarter when base product launches (for products with post-launch AI)
   */
  productLaunch?: string;

  /**
   * Development progress percentage (0-100)
   * Only for products in development (status: "coming")
   */
  developmentProgress?: number;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  status: "live" | "beta" | "coming";
  badge?: string; // Optional badge text (e.g., "Newly Launched", "Beta")
  comingDate?: string;
  progress?: number; // Percentage complete for coming-soon/beta products
  lastUpdated?: string; // Last progress update date
  href: string;
  isExternal?: boolean; // True if links to external domain
  features: string[];
  ai?: ProductAIFeatures; // AI feature information
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
    tagline: "Scan Website Privacy Policies for Hidden Trackers",
    description: "Scan any website's privacy policy for hidden trackers and compliance issues",
    icon: Shield,
    status: "live",
    href: "https://geckoadvisor.com",
    isExternal: true,
    features: [
      "Website privacy policy analysis",
      "Tracker & cookie detection",
      "GDPR & CCPA compliance checking",
      "Privacy score & actionable recommendations",
      "Detailed security reports",
      "Real-time threat monitoring",
    ],
    ai: {
      aiTiming: "post-launch",
      aiLaunchDate: "Q1 2026",
      aiFeatures: [
        "AI-powered privacy policy analysis in plain language",
        "Intelligent risk scoring & pattern detection",
        "Automated compliance gap identification",
        "Natural language privacy reports",
      ],
    },
    pricing: {
      free: {
        limit: "3 scans/month",
        features: ["Basic privacy report", "Website policy scanning", "Privacy score"],
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
    ai: {
      aiTiming: "post-launch",
      aiLaunchDate: "Q2 2026",
      aiFeatures: [
        "AI scans files for hidden metadata/trackers",
        "Detects suspicious file patterns before sharing",
        "Intelligent expiration recommendations",
        "Automated security suggestions",
      ],
    },
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
