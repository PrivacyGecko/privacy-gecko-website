import { FileSearch, Share2, Shield, Lock, Eye, Terminal, Wifi, Clock } from "lucide-react";
import { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "advisor",
    name: "GeckoAdvisor",
    status: "live",
    color: "#3B82F6", // Blue
    icon: FileSearch,
    description: "AI-powered privacy policy scanner and tracker detector",
    href: "https://geckoadvisor.com",
  },
  {
    id: "share",
    name: "GeckoShare",
    status: "coming",
    color: "#10B981", // Green
    icon: Share2,
    description: "Encrypted file sharing with auto-expiration",
    launchQuarter: "Q2 2026",
    href: "/products#geckoshare",
  },
  {
    id: "guard",
    name: "GeckoGuard",
    status: "coming",
    color: "#F59E0B", // Orange
    icon: Shield,
    description: "Email breach checker with privacy-first hashing",
    launchQuarter: "Q2 2026",
    href: "/products#geckoguard",
  },
  {
    id: "lock",
    name: "GeckoLock",
    status: "coming",
    color: "#8B5CF6", // Purple
    icon: Lock,
    description: "Zero-knowledge password manager",
    launchQuarter: "Q3 2026",
    href: "/products#geckolock",
  },
  {
    id: "view",
    name: "GeckoView",
    status: "coming",
    color: "#06B6D4", // Cyan
    icon: Eye,
    description: "Privacy-focused web3 browser extension",
    launchQuarter: "Q3 2026",
    href: "/products#geckoview",
  },
  {
    id: "shell",
    name: "GeckoShell",
    status: "coming",
    color: "#1E3A8A", // Navy
    icon: Terminal,
    description: "Privacy CLI tools for developers",
    launchQuarter: "Q4 2026",
    href: "/products#geckoshell",
  },
  {
    id: "vpn",
    name: "GeckoVPN",
    status: "coming",
    color: "#14B8A6", // Teal
    icon: Wifi,
    description: "Decentralized VPN with no-logs guarantee",
    launchQuarter: "Q4 2026",
    href: "/products#geckovpn",
  },
  {
    id: "watch",
    name: "GeckoWatch",
    status: "coming",
    color: "#F97316", // Coral
    icon: Clock,
    description: "Real-time privacy policy monitoring",
    launchQuarter: "Q1 2027",
    href: "/products#geckowatch",
  },
];
