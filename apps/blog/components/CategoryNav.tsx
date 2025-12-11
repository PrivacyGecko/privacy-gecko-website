"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Lock, Coins, Wrench, LayoutGrid } from "lucide-react";

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
}

interface CategoryNavProps {
  categories: Category[];
}

const categoryIcons: Record<string, React.ElementType> = {
  privacy: Shield,
  security: Lock,
  crypto: Coins,
  tools: Wrench,
};

export function CategoryNav({ categories }: CategoryNavProps) {
  const pathname = usePathname();

  const isActive = (slug: string) => {
    return pathname === `/${slug}` || pathname.startsWith(`/${slug}/`);
  };

  const isHome = pathname === "/";

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="Category navigation">
      {/* All Articles */}
      <Link
        href="/"
        className={`
          group flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium
          transition-all duration-300
          ${isHome
            ? "bg-emerald-600 text-white shadow-sm"
            : "text-[var(--color-charcoal-light)] hover:text-emerald-600 hover:bg-emerald-50"
          }
        `}
      >
        <LayoutGrid className={`w-4 h-4 ${isHome ? "text-emerald-100" : "text-slate-400 group-hover:text-emerald-500"}`} />
        <span>All</span>
      </Link>

      {/* Separator */}
      <div className="h-6 w-px bg-[var(--color-border)] mx-1" />

      {/* Category Links */}
      {categories.map((category) => {
        const Icon = categoryIcons[category.slug] || Shield;
        const active = isActive(category.slug);

        return (
          <Link
            key={category.id}
            href={`/${category.slug}`}
            className={`
              group flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium
              transition-all duration-300
              ${active
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-[var(--color-charcoal-light)] hover:text-emerald-600 hover:bg-emerald-50"
              }
            `}
          >
            <Icon className={`w-4 h-4 ${active ? "text-emerald-100" : "text-slate-400 group-hover:text-emerald-500"}`} />
            <span>{category.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
