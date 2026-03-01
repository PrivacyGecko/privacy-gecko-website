"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Eye, Share2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Base URL for main site links (empty for same domain)
const MAIN_SITE_BASE = "";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const products = [
    { name: "GeckoAdvisor", tagline: "Domain intelligence for risk & compliance", href: "https://geckoadvisor.com", icon: Eye },
    { name: "GeckoShare", tagline: "Zero-knowledge file sharing", href: "https://geckoshare.com", icon: Share2 },
  ];

  // Navigation links - use <a> for main site, Link for blog internal
  const navLinks = [
    { href: `${MAIN_SITE_BASE}/about`, label: "About", isMainSite: true },
    { href: "/", label: "Blog", isMainSite: false },
  ];

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[var(--color-bg-dark)] focus:text-white focus:rounded-full focus:outline-none"
      >
        Skip to main content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-bg-elevated)]/95 backdrop-blur-xl border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - links to main site */}
            <a href={`${MAIN_SITE_BASE}/`} className="relative z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/privacygecko_logo_320x100.png"
                alt="Privacy Gecko"
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Products Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  className="px-4 py-2 flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  onClick={() => setProductsOpen(!productsOpen)}
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-[300px] bg-[var(--color-bg-elevated)] rounded-xl shadow-lg border border-[var(--color-border)] overflow-hidden z-50"
                    >
                      <div className="p-3">
                        <div className="space-y-0.5 mb-3">
                          {products.map((product) => (
                            <a
                              key={product.name}
                              href={product.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--color-bg-subtle)] transition-colors group"
                              onClick={() => setProductsOpen(false)}
                            >
                              <div className="w-9 h-9 rounded-lg bg-[var(--color-accent-subtle)] flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent-muted)] transition-colors">
                                <product.icon className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="font-medium text-[var(--color-text-primary)] text-sm">{product.name}</p>
                                <p className="text-xs text-[var(--color-text-tertiary)]">{product.tagline}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="border-t border-[var(--color-border-subtle)] pt-2">
                          <a
                            href={`${MAIN_SITE_BASE}/products`}
                            className="flex items-center justify-center gap-2 p-2 rounded-lg text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-colors font-medium text-sm"
                            onClick={() => setProductsOpen(false)}
                          >
                            View all products
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other nav links */}
              {navLinks.map((link) => (
                link.isMainSite ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`${MAIN_SITE_BASE}/contact`}
                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                Contact
              </a>
              <a
                href="https://geckoshare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Get started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={24} className="text-[var(--color-text-primary)]" />
              ) : (
                <Menu size={24} className="text-[var(--color-text-primary)]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)]"
            >
              <div className="max-w-5xl mx-auto px-6 py-6">
                <div className="flex flex-col gap-1">
                  {/* Products Link */}
                  <a
                    href={`${MAIN_SITE_BASE}/products`}
                    className="py-3 text-base font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Products
                  </a>

                  {/* Product Quick Links */}
                  <div className="grid grid-cols-2 gap-2 py-2 mb-2">
                    {products.map((product) => (
                      <a
                        key={product.name}
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 rounded-lg bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <product.icon className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm font-medium">{product.name}</span>
                      </a>
                    ))}
                  </div>

                  {/* Other nav links */}
                  {navLinks.map((link) => (
                    link.isMainSite ? (
                      <a
                        key={link.href}
                        href={link.href}
                        className="py-3 text-base font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="py-3 text-base font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                  <a
                    href={`${MAIN_SITE_BASE}/contact`}
                    className="py-3 text-base font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--color-border-subtle)]">
                  <a
                    href="https://geckoshare.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Get started
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
}
