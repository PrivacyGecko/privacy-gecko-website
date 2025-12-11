import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center flex-wrap gap-1.5 text-sm">
        {/* Home */}
        <li>
          <Link
            href="/"
            className="flex items-center justify-center w-8 h-8 rounded-lg text-[var(--color-slate)] hover:text-emerald-600 hover:bg-emerald-50 transition-all"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-1.5">
              <ChevronRight className="w-4 h-4 text-[var(--color-border)]" />
              {isLast ? (
                <span className="px-2 py-1 text-[var(--color-charcoal)] font-medium truncate max-w-[200px] md:max-w-[300px]">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="px-2 py-1 rounded-lg text-[var(--color-slate)] hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
