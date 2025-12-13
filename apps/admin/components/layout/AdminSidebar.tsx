"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Articles",
    href: "/articles",
    icon: FileText,
  },
  {
    label: "Categories",
    href: "/categories",
    icon: FolderOpen,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar flex flex-col">
      {/* Logo */}
      <div className="sidebar-logo">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[#00F5A0] flex items-center justify-center shadow-lg group-hover:shadow-[var(--shadow-glow)] transition-shadow">
              <span className="text-xl">🦎</span>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-bg-base)] animate-pulse" />
          </div>
          <div>
            <div className="font-bold text-[var(--color-text-primary)] text-sm tracking-tight">
              Privacy Gecko
            </div>
            <div className="text-xs text-[var(--color-text-tertiary)] flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Admin Panel
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav flex-1 py-4">
        <div className="px-4 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
            Navigation
          </span>
        </div>
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn("sidebar-link", isActive && "active")}
                >
                  <Icon className="w-[18px] h-[18px]" />
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[var(--color-border)]">
        <a
          href="https://blog.privacygecko.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)] transition-all group"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="text-sm">View Blog</span>
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-5 h-5 rounded bg-[var(--color-accent-subtle)] flex items-center justify-center">
              <ExternalLink className="w-3 h-3 text-[var(--color-accent)]" />
            </div>
          </div>
        </a>

        {/* Version Badge */}
        <div className="mt-4 px-3">
          <div className="flex items-center gap-2 text-[10px] text-[var(--color-text-muted)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            <span>v1.0.0</span>
            <span className="text-[var(--color-border-strong)]">•</span>
            <span>Production</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
