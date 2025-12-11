import Link from "next/link";
import { Shield, Lock, Eye, Share2 } from "lucide-react";

const productInfo: Record<string, { name: string; description: string; icon: React.ReactNode; href: string }> = {
  geckoguard: {
    name: "GeckoGuard",
    description: "Password manager with zero-knowledge encryption",
    icon: <Shield className="w-6 h-6" />,
    href: "/products/geckoguard",
  },
  geckoadvisor: {
    name: "GeckoAdvisor",
    description: "AI-powered privacy policy analyzer",
    icon: <Eye className="w-6 h-6" />,
    href: "/products/geckoadvisor",
  },
  geckolock: {
    name: "GeckoLock",
    description: "Secure file encryption tool",
    icon: <Lock className="w-6 h-6" />,
    href: "/products/geckolock",
  },
  geckoshare: {
    name: "GeckoShare",
    description: "End-to-end encrypted file sharing",
    icon: <Share2 className="w-6 h-6" />,
    href: "/products/geckoshare",
  },
};

interface ProductCTAProps {
  products: string[];
}

export function ProductCTA({ products }: ProductCTAProps) {
  const relevantProducts = products
    .map((p) => productInfo[p.toLowerCase()])
    .filter(Boolean);

  if (relevantProducts.length === 0) return null;

  return (
    <div className="my-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 border border-blue-200">
      <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
        Recommended Tools
      </h3>
      <p className="text-slate-600 mb-6">
        Protect yourself with these privacy-first tools from PrivacyGecko
      </p>
      <div className="grid gap-4">
        {relevantProducts.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            className="flex items-center gap-4 p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-soft transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {product.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h4>
              <p className="text-sm text-slate-600">{product.description}</p>
            </div>
            <svg
              className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
