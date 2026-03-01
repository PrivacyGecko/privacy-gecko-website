"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Eye, Share2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { name: "GeckoAdvisor", tagline: "Privacy policy scanner", href: "https://geckoadvisor.com", icon: Eye },
    { name: "GeckoShare", tagline: "Encrypted file sharing", href: "https://geckoshare.com", icon: Share2 },
  ];

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#00D98A] focus:text-white focus:rounded-full focus:outline-none"
      >
        Skip to main content
      </a>

      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-nav border-b border-slate-100"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
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

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  className="px-4 py-2.5 flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setProductsOpen(!productsOpen)}
                >
                  Products
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", productsOpen && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.12 }}
                      className="absolute top-full left-0 mt-1 w-[300px] bg-white rounded-xl shadow-soft-lg border border-slate-200 overflow-hidden z-50"
                    >
                      <div className="p-3">
                        <div className="space-y-0.5 mb-3">
                          {products.map((product) => (
                            <a
                              key={product.name}
                              href={product.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                              onClick={() => setProductsOpen(false)}
                            >
                              <div className="w-9 h-9 rounded-lg bg-gecko-50 flex items-center justify-center text-[#00D98A] group-hover:bg-gecko-100 transition-colors">
                                <product.icon className="w-4.5 h-4.5" />
                              </div>
                              <div>
                                <p className="font-semibold text-slate-900 text-sm">{product.name}</p>
                                <p className="text-xs text-slate-400">{product.tagline}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="border-t border-slate-100 pt-2">
                          <Link
                            href="/products"
                            className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg text-[#00D98A] hover:bg-gecko-50 transition-colors font-medium text-sm"
                            onClick={() => setProductsOpen(false)}
                          >
                            View all products
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Contact
              </Link>
              <a
                href="https://geckoadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#00D98A] text-white text-sm font-semibold hover:bg-[#00B876] transition-colors shadow-green group"
              >
                Get started
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile menu */}
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} className="text-slate-900" /> : <Menu size={22} className="text-slate-900" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-soft-lg"
            >
              <div className="max-w-7xl mx-auto px-6 py-5">
                <div className="flex flex-col gap-1">
                  <Link href="/products" className="py-2.5 text-base font-medium text-slate-900 hover:text-[#00D98A] transition-colors" onClick={() => setIsOpen(false)}>
                    Products
                  </Link>
                  <div className="grid grid-cols-2 gap-2 py-2 mb-1">
                    {products.map((product) => (
                      <a
                        key={product.name}
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <product.icon className="w-4 h-4 text-[#00D98A]" />
                        <span className="text-sm font-medium">{product.name}</span>
                      </a>
                    ))}
                  </div>
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="py-2.5 text-base font-medium text-slate-900 hover:text-[#00D98A] transition-colors" onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/contact" className="py-2.5 text-base font-medium text-slate-900 hover:text-[#00D98A] transition-colors" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </div>
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <a
                    href="https://geckoadvisor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-[#00D98A] text-white font-semibold hover:bg-[#00B876] transition-colors shadow-green"
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

      <div className="h-20" />
    </>
  );
}
