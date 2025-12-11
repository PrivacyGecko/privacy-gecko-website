"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Send, Github, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { href: "https://geckoadvisor.com", label: "GeckoAdvisor", external: true },
        { href: "https://geckoshare.com", label: "GeckoShare", external: true },
        { href: "https://geckoguard.app", label: "GeckoGuard", external: true },
        { href: "https://geckolock.com", label: "GeckoLock", external: true },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About", external: false },
        { href: "/blog", label: "Blog", external: false },
        { href: "/roadmap", label: "Roadmap", external: false },
        { href: "/contact", label: "Contact", external: false },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/legal/privacy", label: "Privacy", external: false },
        { href: "/legal/terms", label: "Terms", external: false },
        { href: "/security", label: "Security", external: false },
      ],
    },
  ];

  const socialLinks = [
    { href: "https://twitter.com/PrivacyGecko", icon: Twitter, label: "Twitter" },
    { href: "https://t.me/pricko_official", icon: Send, label: "Telegram" },
    { href: "https://github.com/privacygecko", icon: Github, label: "GitHub" },
  ];

  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/">
              <Image
                src="/images/privacygecko_logo_320x100.png"
                alt="Privacy Gecko"
                width={320}
                height={100}
                className="h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              Privacy products that work. No tracking, no data selling, just tools that respect you.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-colors"
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
              <h3 className="font-display font-semibold text-slate-900 text-sm mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
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
        <div className="py-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Privacy Gecko
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-400 uppercase tracking-wider">No tracking</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider">Open source</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider">GDPR compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
