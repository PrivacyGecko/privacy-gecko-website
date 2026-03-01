import { Eye, Share2, ArrowRight, Sparkles } from "lucide-react";

const productInfo: Record<string, { name: string; description: string; icon: React.ReactNode; href: string; color: string }> = {
  geckoadvisor: {
    name: "GeckoAdvisor",
    description: "Domain intelligence for risk & compliance",
    icon: <Eye className="w-6 h-6" />,
    href: "https://geckoadvisor.com",
    color: "emerald",
  },
  geckoshare: {
    name: "GeckoShare",
    description: "Zero-knowledge file sharing",
    icon: <Share2 className="w-6 h-6" />,
    href: "https://geckoshare.com",
    color: "emerald",
  },
};

const colorClasses: Record<string, { bg: string; icon: string; iconHover: string }> = {
  emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", iconHover: "group-hover:bg-emerald-600" },
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
    <div className="my-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] to-slate-800 rounded-2xl" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative p-8 md:p-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            Recommended Tools
          </span>
        </div>

        <h3 className="font-editorial text-2xl md:text-3xl font-light text-white mb-2">
          Put your privacy <span className="italic">into action</span>
        </h3>
        <p className="text-slate-300 mb-8 max-w-xl">
          Protect yourself with these privacy-first tools from PrivacyGecko
        </p>

        {/* Products Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {relevantProducts.map((product) => {
            const colors = colorClasses[product.color] || colorClasses.emerald;

            return (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.icon} flex items-center justify-center ${colors.iconHover} group-hover:text-white transition-colors`}>
                  {product.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-sm text-slate-400 truncate">{product.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0" />
              </a>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <a
            href="https://privacygecko.com/products"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
          >
            Explore all PrivacyGecko products
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
