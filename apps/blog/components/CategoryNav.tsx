"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid } from "lucide-react";

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
}

interface CategoryNavProps {
  categories: Category[];
}

export function CategoryNav({ categories }: CategoryNavProps) {
  const pathname = usePathname();

  const isActive = (slug: string) => {
    return pathname === `/${slug}` || pathname.startsWith(`/${slug}/`);
  };

  const isHome = pathname === "/";

  return (
    <nav className="flex flex-wrap items-center justify-center gap-1" aria-label="Category navigation">
      {/* All Articles */}
      <Link
        href="/"
        className={`nav-pill ${isHome ? "active" : ""}`}
      >
        <LayoutGrid className="w-4 h-4" />
        <span>All</span>
      </Link>

      {/* Separator */}
      <div className="h-5 w-px bg-[var(--color-border)] mx-2" />

      {/* Category Links */}
      {categories.map((category) => {
        const active = isActive(category.slug);

        return (
          <Link
            key={category.id}
            href={`/${category.slug}`}
            className={`nav-pill ${active ? "active" : ""}`}
          >
            <span>{category.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
