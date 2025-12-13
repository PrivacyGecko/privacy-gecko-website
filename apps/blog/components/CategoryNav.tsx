"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
}

interface CategoryNavProps {
  categories: Category[];
}

// Get category color based on slug
function getCategoryColor(slug: string): string {
  const colors: Record<string, string> = {
    "privacy": "#635BFF",
    "security": "#FF6B35",
    "crypto-safety": "#00B4D8",
    "browser-protection": "#E83E8C",
    "file-security": "#00D98A",
    "passwords-identity": "#6366F1",
    "product-updates": "#00B876",
    "tutorials": "#FF6B35",
  };
  return colors[slug] || "#635BFF";
}

export function CategoryNav({ categories }: CategoryNavProps) {
  const pathname = usePathname();

  const isActive = (slug: string) => {
    return pathname === `/${slug}` || pathname.startsWith(`/${slug}/`);
  };

  const isHome = pathname === "/";

  return (
    <nav className="flex items-center gap-2 overflow-x-auto pb-1 -mb-1 scrollbar-hide" aria-label="Category navigation">
      {/* All Articles - Accent color pill when active */}
      <Link
        href="/"
        className={`shrink-0 px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-200 ${
          isHome
            ? "bg-[var(--color-accent)] text-white shadow-sm"
            : "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5"
        }`}
      >
        All
      </Link>

      {/* Category Links */}
      {categories.map((category) => {
        const active = isActive(category.slug);
        const color = getCategoryColor(category.slug);

        return (
          <Link
            key={category.id}
            href={`/${category.slug}`}
            className={`shrink-0 px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-200 ${
              active
                ? "text-white shadow-sm"
                : "text-[var(--color-text-secondary)] hover:bg-gray-100"
            }`}
            style={active ? { backgroundColor: color } : {}}
          >
            {category.name}
          </Link>
        );
      })}
    </nav>
  );
}
