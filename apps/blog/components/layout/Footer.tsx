"use client";

import Link from "next/link";
import { Twitter, Send, Github, ArrowUpRight } from "lucide-react";

// Base URL for main site links (empty for same domain)
const MAIN_SITE_BASE = "";

export function Footer() {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { href: "https://geckoadvisor.com", label: "GeckoAdvisor", external: true, isMainSite: false },
        { href: "https://geckoshare.com", label: "GeckoShare", external: true, isMainSite: false },
        { href: "https://geckoguard.app", label: "GeckoGuard", external: true, isMainSite: false },
        { href: "https://geckolock.com", label: "GeckoLock", external: true, isMainSite: false },
      ],
    },
    {
      title: "Company",
      links: [
        { href: `${MAIN_SITE_BASE}/about`, label: "About", external: false, isMainSite: true },
        { href: "/", label: "Blog", external: false, isMainSite: false }, // Blog internal
        { href: `${MAIN_SITE_BASE}/roadmap`, label: "Roadmap", external: false, isMainSite: true },
        { href: `${MAIN_SITE_BASE}/contact`, label: "Contact", external: false, isMainSite: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: `${MAIN_SITE_BASE}/legal/privacy`, label: "Privacy", external: false, isMainSite: true },
        { href: `${MAIN_SITE_BASE}/legal/terms`, label: "Terms", external: false, isMainSite: true },
        { href: `${MAIN_SITE_BASE}/security`, label: "Security", external: false, isMainSite: true },
      ],
    },
  ];

  const socialLinks = [
    { href: "https://twitter.com/PrivacyGecko", icon: Twitter, label: "Twitter" },
    { href: "https://t.me/pricko_official", icon: Send, label: "Telegram" },
    { href: "https://github.com/privacygecko", icon: Github, label: "GitHub" },
  ];

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <a href={`${MAIN_SITE_BASE}/`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/privacygecko_logo_320x100.png"
                alt="Privacy Gecko"
                className="h-9 w-auto mb-4"
              />
            </a>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-xs mb-5">
              Privacy products that work. No tracking, no data selling, just tools that respect you.
            </p>

            {/* Social */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-display font-medium text-[var(--color-text-primary)] text-sm mb-3">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : link.isMainSite ? (
                      <a
                        href={link.href}
                        className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-text-tertiary)] text-xs">
            © {new Date().getFullYear()} Privacy Gecko
          </p>
          <div className="flex items-center gap-5">
            <span className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium">No tracking</span>
            <span className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium">Open source</span>
            <span className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium">GDPR compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
