"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: Array<{ href: string; label: string; badge?: string }> = [
    { href: "/products", label: "Products" },
    { href: "/geckocore", label: "GeckoCore", badge: "Coming 2026" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      {/* Skip to main content - WCAG A compliance */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gecko-green focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-gecko-green focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/privacygecko_logo_320x100.png"
              alt="Privacy Gecko"
              width={320}
              height={100}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-900 hover:text-gecko-green transition-colors font-medium inline-flex items-center gap-2"
              >
                {link.label}
                {link.badge && (
                  <span className="px-2 py-0.5 bg-blue-900 text-white text-xs rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button href="https://geckoadvisor.com" variant="primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between py-2 text-neutral-900 hover:text-gecko-green transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 bg-blue-900 text-white text-xs rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="https://geckoadvisor.com" variant="primary" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
      </nav>
    </>
  );
}
