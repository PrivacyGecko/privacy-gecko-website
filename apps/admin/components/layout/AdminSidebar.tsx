"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Shield,
  ExternalLink,
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
      <div className="p-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[var(--color-accent)] flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-semibold text-white text-sm">Privacy Gecko</div>
            <div className="text-xs text-white/50">Admin</div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-1">
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
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10">
        <a
          href="https://blog.privacygecko.com"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-link text-white/50 hover:text-white"
        >
          <ExternalLink className="w-4 h-4" />
          <span>View Blog</span>
        </a>
      </div>
    </aside>
  );
}
