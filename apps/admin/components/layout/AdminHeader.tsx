"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LogOut, Loader2, ChevronRight } from "lucide-react";

const breadcrumbLabels: Record<string, string> = {
  "": "Dashboard",
  articles: "Articles",
  categories: "Categories",
  new: "New",
  edit: "Edit",
};

function getBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = [{ label: "Dashboard", href: "/" }];

  let currentPath = "";
  for (const segment of segments) {
    currentPath += `/${segment}`;
    // Skip numeric IDs in breadcrumbs label, but keep in path
    const label = /^\d+$/.test(segment)
      ? `#${segment}`
      : breadcrumbLabels[segment] || segment;
    breadcrumbs.push({ label, href: currentPath });
  }

  return breadcrumbs;
}

export function AdminHeader() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);

  async function handleLogout() {
    if (isLoggingOut) return;
    setIsLoggingOut(true);

    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoggingOut(false);
    }
  }

  return (
    <header className="h-16 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] flex items-center justify-between px-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-1 text-[var(--color-text-tertiary)]" />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="font-medium text-[var(--color-text-primary)]">
                {crumb.label}
              </span>
            ) : (
              <a
                href={crumb.href}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                {crumb.label}
              </a>
            )}
          </span>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="btn btn-ghost btn-sm"
        >
          {isLoggingOut ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <LogOut className="w-4 h-4" />
          )}
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}
