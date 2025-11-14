"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface WhitepaperContentProps {
  content: string;
}

export function WhitepaperContent({ content }: WhitepaperContentProps) {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Table of Contents structure
  const tableOfContents = [
    { id: "abstract", title: "Abstract", level: 2 },
    { id: "executive-summary", title: "1. Executive Summary", level: 2 },
    { id: "the-privacy-problem", title: "2. The Privacy Problem", level: 2 },
    { id: "geckocore-solution", title: "3. GeckoCore Solution", level: 2 },
    { id: "technical-architecture", title: "4. Technical Architecture", level: 2 },
    { id: "the-five-privacy-feeds", title: "5. The Five Privacy Feeds", level: 2 },
    { id: "protocol-design", title: "6. Protocol Design", level: 2 },
    { id: "privacy-gecko-phase-1-reference", title: "7. Privacy Gecko: Phase 1 Reference", level: 2 },
    { id: "roadmap", title: "8. Roadmap", level: 2 },
    { id: "token-economics", title: "9. Token Economics", level: 2 },
    { id: "security-model", title: "10. Security Model", level: 2 },
    { id: "team--governance", title: "11. Team & Governance", level: 2 },
  ];

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setTocOpen(false);
    }
  };

  const handleDownloadPDF = () => {
    // Download the markdown file
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
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-700 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <Badge variant="outline" className="bg-white/20 text-white border-white/40">
              Version 1.0
            </Badge>
            <Badge variant="outline" className="bg-white/20 text-white border-white/40">
              Published November 2025
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            GeckoCore Protocol Whitepaper
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-6">
            The Privacy Proof Layer for Solana
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleDownloadPDF}
              variant="outline"
              className="bg-white text-emerald-700 hover:bg-gray-100 border-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Whitepaper
            </Button>
            <Button
              href="/geckocore"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              View GeckoCore Platform
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile TOC Toggle */}
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className="lg:hidden fixed bottom-6 right-6 z-50 bg-gecko-green text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            {tocOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Table of Contents - Sidebar */}
          <aside
            className={`
              lg:sticky lg:top-6 lg:h-screen lg:overflow-y-auto
              ${tocOpen ? "fixed inset-0 z-40 bg-white p-6" : "hidden lg:block"}
              lg:w-64 flex-shrink-0
            `}
          >
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-bold mb-4 text-gray-900">Table of Contents</h2>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      block w-full text-left text-sm py-2 px-3 rounded transition-colors
                      ${activeSection === item.id
                        ? "bg-gecko-green/10 text-gecko-green font-semibold"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }
                    `}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12">
              <article className="prose prose-lg prose-slate max-w-none
                prose-headings:font-display prose-headings:font-bold
                prose-h1:text-4xl prose-h1:text-gray-900 prose-h1:mb-6
                prose-h2:text-3xl prose-h2:text-gray-900 prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
                prose-h3:text-2xl prose-h3:text-gray-900 prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-gecko-green prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-code:text-gecko-green prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-['']
                prose-pre:bg-gray-900 prose-pre:text-gray-100
                prose-ul:my-6 prose-li:my-2
                prose-blockquote:border-l-gecko-green prose-blockquote:bg-emerald-50 prose-blockquote:p-4 prose-blockquote:rounded-r
              ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content}
                </ReactMarkdown>
              </article>

              {/* Footer CTA */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ready to Build with GeckoCore?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Join the waitlist for developer SDK access (launching Q2 2026)
                  </p>
                  <Button href="/contact?subject=Developer%20SDK%20Waitlist" variant="primary">
                    Join Developer Waitlist →
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
