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

export function CategoryNav({ categories }: CategoryNavProps) {
  const pathname = usePathname();

  const isActive = (slug: string) => {
    return pathname === `/${slug}` || pathname.startsWith(`/${slug}/`);
  };

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2">
      <Link
        href="/"
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          pathname === "/"
            ? "bg-blue-600 text-white shadow-blue"
            : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
        }`}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/${category.slug}`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            isActive(category.slug)
              ? "bg-blue-600 text-white shadow-blue"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
          }`}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
