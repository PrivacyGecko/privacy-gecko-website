"use client";

import { useState, useEffect } from "react";
import { Download, ChevronRight, BookOpen, Clock, FileText, ArrowUp, Menu, X } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { motion, AnimatePresence } from "framer-motion";

interface WhitepaperContentProps {
  content: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export function WhitepaperContent({ content }: WhitepaperContentProps) {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  const tableOfContents = [
    { id: "abstract", title: "Abstract", level: 2 },
    { id: "1-executive-summary", title: "1. Executive Summary", level: 2 },
    { id: "2-the-privacy-problem", title: "2. The Privacy Problem", level: 2 },
    { id: "3-geckocore-solution", title: "3. GeckoCore Solution", level: 2 },
    { id: "4-technical-architecture", title: "4. Technical Architecture", level: 2 },
    { id: "5-the-five-privacy-feeds", title: "5. The Five Privacy Feeds", level: 2 },
    { id: "6-protocol-design", title: "6. Protocol Design", level: 2 },
    { id: "7-privacy-gecko-phase-1-reference", title: "7. Privacy Gecko: Phase 1", level: 2 },
    { id: "8-roadmap", title: "8. Roadmap", level: 2 },
    { id: "9-token-economics", title: "9. Token Economics", level: 2 },
    { id: "10-security-model", title: "10. Security Model", level: 2 },
    { id: "11-team--governance", title: "11. Team & Governance", level: 2 },
  ];

  // Scroll spy and reading progress
  useEffect(() => {
    const handleScroll = () => {
      // Reading progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      setReadingProgress((scrollTop / scrollHeight) * 100);
      setShowScrollTop(scrollTop > 500);

      // Active section
      const sections = tableOfContents.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setTocOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "GeckoCore-Whitepaper-v1.0.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 z-50">
        <motion.div
          className="h-full bg-blue-600"
          style={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            {/* Breadcrumb */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/geckocore" className="hover:text-blue-600 transition-colors">GeckoCore</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900">Whitepaper</span>
            </motion.div>

            {/* Meta badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                <FileText className="w-3 h-3" />
                Version 1.0
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                <Clock className="w-3 h-3" />
                ~25 min read
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                December 2025
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 mb-6"
              style={{ lineHeight: '1.1' }}
            >
              GeckoCore Protocol
              <br />
              <span className="text-blue-600">Whitepaper</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-8 leading-relaxed font-light"
            >
              The Privacy Proof Layer for Solana — open infrastructure enabling any application
              to verify privacy through zero-knowledge proofs.
            </motion.p>

            {/* Actions */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] shadow-lg shadow-blue-600/25"
              >
                <Download className="w-4 h-4" />
                Download Whitepaper
              </button>
              <Link
                href="/geckocore"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-900 rounded-full font-semibold border-2 border-slate-200 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
              >
                <BookOpen className="w-4 h-4" />
                View GeckoCore
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Mobile TOC Toggle */}
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors flex items-center justify-center"
              aria-label="Toggle table of contents"
            >
              {tocOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Table of Contents - Sidebar */}
            <aside
              className={`
                lg:sticky lg:top-24 lg:h-[calc(100vh-120px)] lg:overflow-y-auto
                ${tocOpen ? "fixed inset-0 z-40 bg-white p-6 overflow-y-auto" : "hidden lg:block"}
                lg:w-72 flex-shrink-0
              `}
            >
              {tocOpen && (
                <button
                  onClick={() => setTocOpen(false)}
                  className="lg:hidden absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-6 h-6" />
                </button>
              )}

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                  Contents
                </h2>
                <nav className="space-y-1">
                  {tableOfContents.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        block w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200
                        ${activeSection === item.id
                          ? "bg-blue-600 text-white font-medium"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }
                      `}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>

                {/* Quick stats */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-slate-900">12</p>
                      <p className="text-xs text-slate-500">Sections</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">5</p>
                      <p className="text-xs text-slate-500">Privacy Feeds</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 max-w-4xl">
              <article className="
                prose prose-lg prose-slate max-w-none
                prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-4xl prose-h1:text-slate-900 prose-h1:mb-8 prose-h1:mt-0
                prose-h2:text-3xl prose-h2:text-slate-900 prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-slate-200
                prose-h3:text-xl prose-h3:text-slate-900 prose-h3:mt-10 prose-h3:mb-4
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-[17px]
                prose-a:text-blue-600 prose-a:no-underline prose-a:font-medium hover:prose-a:underline
                prose-strong:text-slate-900 prose-strong:font-semibold
                prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-[''] prose-code:font-mono
                prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:border prose-pre:border-slate-800
                prose-ul:my-6 prose-li:my-2 prose-li:text-slate-600
                prose-ol:my-6
                prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-slate-700
                prose-hr:border-slate-200 prose-hr:my-12
                prose-table:border-collapse prose-table:w-full
                prose-th:bg-slate-50 prose-th:p-3 prose-th:text-left prose-th:text-sm prose-th:font-semibold prose-th:text-slate-900 prose-th:border prose-th:border-slate-200
                prose-td:p-3 prose-td:text-sm prose-td:border prose-td:border-slate-200
              ">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeSlug]}
                  components={{
                    // Custom rendering for horizontal rules
                    hr: () => (
                      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-16" />
                    ),
                    // Enhanced code blocks
                    pre: ({ children }) => (
                      <pre className="bg-slate-900 text-slate-100 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed border border-slate-800 my-8">
                        {children}
                      </pre>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </article>

              {/* Footer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 pt-12 border-t border-slate-200"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    Ready to Build with GeckoCore?
                  </h3>
                  <p className="text-blue-100 text-lg mb-8 max-w-xl">
                    Join the developer waitlist for SDK access. Be among the first to integrate
                    privacy verification into your applications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact?subject=Developer%20SDK%20Waitlist"
                      className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-blue-600 rounded-full font-semibold transition-all duration-300 hover:bg-blue-50 hover:scale-[1.02]"
                    >
                      Join Developer Waitlist
                    </Link>
                    <Link
                      href="/geckocore"
                      className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent text-white rounded-full font-semibold border-2 border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white"
                    >
                      Explore GeckoCore
                    </Link>
                  </div>
                </div>
              </motion.div>
            </main>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-white text-slate-600 rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 hover:text-blue-600 transition-colors flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
