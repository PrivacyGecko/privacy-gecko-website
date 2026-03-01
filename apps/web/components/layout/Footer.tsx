"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Github, ArrowUpRight } from "lucide-react";

export function Footer() {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { href: "https://geckoadvisor.com", label: "GeckoAdvisor", external: true },
        { href: "https://geckoshare.com", label: "GeckoShare", external: true },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About", external: false },
        { href: "/blog", label: "Blog", external: false },
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
    { href: "https://github.com/privacygecko", icon: Github, label: "GitHub" },
  ];

  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/">
              <Image
                src="/images/privacygecko_logo_320x100.png"
                alt="Privacy Gecko"
                width={320}
                height={100}
                className="h-10 w-auto mb-4 brightness-[1.15]"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Privacy products that work. No tracking, no data selling, just
              tools that respect you.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-[#00D98A] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-display font-bold text-white text-xs tracking-wider uppercase mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
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

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Privacy Gecko
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-500 uppercase tracking-wider">No tracking</span>
            <span className="text-xs text-slate-500 uppercase tracking-wider">Open source</span>
            <span className="text-xs text-slate-500 uppercase tracking-wider">GDPR compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
