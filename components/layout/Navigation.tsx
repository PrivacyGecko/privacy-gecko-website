"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Eye, Share2, Shield, Lock, Bookmark, Globe, Wifi, FileSearch, ChevronDown, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
    { name: "GeckoAdvisor", tagline: "Privacy policy scanner", href: "https://geckoadvisor.com", icon: Eye, status: "live" },
    { name: "GeckoShare", tagline: "Encrypted file sharing", href: "https://geckoshare.com", icon: Share2, status: "live" },
    { name: "GeckoGuard", tagline: "Tracker blocker", href: "https://geckoguard.app", icon: Shield, status: "live" },
    { name: "GeckoLock", tagline: "Password manager", href: "https://geckolock.com", icon: Lock, status: "live" },
    { name: "GeckoView", tagline: "Private bookmarks", href: "/products#geckoview", icon: Bookmark, status: "coming" },
    { name: "GeckoShell", tagline: "Mobile browser", href: "/products#geckoshell", icon: Globe, status: "coming" },
    { name: "GeckoVPN", tagline: "Secure VPN", href: "/products#geckovpn", icon: Wifi, status: "coming" },
    { name: "GeckoWatch", tagline: "Compliance monitor", href: "/products#geckowatch", icon: FileSearch, status: "coming" },
  ];

  // Simplified navigation - only essential items
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-slate-900 focus:text-white focus:rounded-full focus:outline-none"
      >
        Skip to main content
      </a>

      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/50"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <Image
                src="/images/privacygecko_logo_320x100.png"
                alt="Privacy Gecko"
                width={320}
                height={100}
                className="h-11 w-auto"
                priority
              />
            </Link>

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
                  className={cn(
                    "px-5 py-2.5 flex items-center gap-1.5",
                    "text-base font-medium tracking-tight",
                    "text-slate-600 hover:text-slate-900",
                    "transition-colors duration-200"
                  )}
                  onClick={() => setProductsOpen(!productsOpen)}
                >
                  Products
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    productsOpen && "rotate-180"
                  )} />
                </button>

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-[520px] bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden z-50"
                    >
                      <div className="p-4">
                        {/* Live Products */}
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Live Now</p>
                        <div className="grid grid-cols-2 gap-1 mb-4">
                          {products.filter(p => p.status === "live").map((product) => (
                            <a
                              key={product.name}
                              href={product.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                              onClick={() => setProductsOpen(false)}
                            >
                              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                                <product.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="font-semibold text-slate-900 text-sm">{product.name}</p>
                                <p className="text-xs text-slate-500">{product.tagline}</p>
                              </div>
                            </a>
                          ))}
                        </div>

                        {/* Coming Soon */}
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Coming Soon</p>
                        <div className="grid grid-cols-2 gap-1 mb-4">
                          {products.filter(p => p.status === "coming").map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                              onClick={() => setProductsOpen(false)}
                            >
                              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-200 transition-colors">
                                <product.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="font-semibold text-slate-600 text-sm">{product.name}</p>
                                <p className="text-xs text-slate-400">{product.tagline}</p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* GeckoCore Protocol */}
                        <div className="border-t border-slate-100 pt-3">
                          <Link
                            href="/geckocore"
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                            onClick={() => setProductsOpen(false)}
                          >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
                              <Cpu className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className="font-semibold text-slate-900 text-sm">GeckoCore Protocol</p>
                                <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">2026</span>
                              </div>
                              <p className="text-xs text-slate-500">AI-powered privacy infrastructure</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        </div>

                        {/* View All */}
                        <div className="border-t border-slate-100 pt-3 mt-2">
                          <Link
                            href="/products"
                            className="flex items-center justify-center gap-2 p-3 rounded-xl text-blue-600 hover:bg-blue-50 transition-colors font-medium text-sm"
                            onClick={() => setProductsOpen(false)}
                          >
                            View all products
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other nav links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-5 py-2.5",
                    "text-base font-medium tracking-tight",
                    "text-slate-600 hover:text-slate-900",
                    "transition-colors duration-200"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <Link
                href="/contact"
                className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Contact
              </Link>
              <a
                href="https://geckoshare.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2",
                  "px-6 py-3 rounded-full",
                  "bg-blue-600 text-white text-base font-semibold",
                  "hover:bg-blue-700 transition-colors duration-200",
                  "shadow-lg shadow-blue-600/25",
                  "group"
                )}
              >
                Try free
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
                <X size={24} className="text-slate-900" />
              ) : (
                <Menu size={24} className="text-slate-900" />
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
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200"
            >
              <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex flex-col gap-1">
                  {/* Products Link */}
                  <Link
                    href="/products"
                    className="py-3 text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Products
                  </Link>

                  {/* Product Quick Links */}
                  <div className="grid grid-cols-2 gap-2 py-2 mb-2">
                    {products.filter(p => p.status === "live").map((product) => (
                      <a
                        key={product.name}
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <product.icon className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium">{product.name}</span>
                      </a>
                    ))}
                  </div>

                  {/* Other nav links */}
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="py-3 text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="py-3 text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <a
                    href="https://geckoshare.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-center gap-2",
                      "w-full px-6 py-4 rounded-full",
                      "bg-blue-600 text-white font-semibold",
                      "hover:bg-blue-700 transition-colors",
                      "shadow-lg shadow-blue-600/25"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Try free
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
