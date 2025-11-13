import Link from "next/link";
import Image from "next/image";
import { Twitter, Send, Github, Shield } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function Footer() {
  const productLinks = [
    { href: "https://geckoadvisor.com", label: "GeckoAdvisor", external: true },
    { href: "https://geckoshare.com", label: "GeckoShare", external: true },
    { href: "https://geckoguard.app", label: "GeckoGuard", external: true },
    { href: "https://geckolock.com", label: "GeckoLock", external: true },
    { href: "/products", label: "All Products" },
  ];

  const companyLinks = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/roadmap", label: "Roadmap" },
  ];

  const resourceLinks = [
    { href: "/resources/docs", label: "Documentation" },
    { href: "/resources/faq", label: "FAQ" },
    { href: "/resources/support", label: "Support" },
    { href: "/ai-whitepaper", label: "AI Architecture" },
    { href: "/ai-ethics", label: "AI Ethics" },
  ];

  const aiLinks = [
    { href: "/roadmap#ai-development", label: "AI Roadmap" },
    { href: "/contact?subject=AI Beta Waitlist", label: "AI Beta Program" },
    { href: "/developers", label: "Developer Program", comingSoon: true },
    { href: "/research", label: "Research Partners", comingSoon: true },
  ];

  const legalLinks = [
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms of Service" },
    { href: "/legal/cookies", label: "Cookie Policy" },
    { href: "/security", label: "Security" },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/images/privacygecko_logo_320x100.png"
                alt="Privacy Gecko Logo"
                width={320}
                height={100}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Privacy tools that actually work. <span className="text-gray-500">($PRICKO token optional)</span>
            </p>

            {/* Brand Social Links */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Community
              </p>
              <div className="flex flex-col space-y-2 text-sm">
                <ExternalLink
                  href="https://twitter.com/PrivacyGecko"
                  className="text-gray-400 hover:text-gecko-green transition-colors flex items-center"
                  showIcon={false}
                >
                  <Twitter size={16} className="mr-2" />
                  @PrivacyGecko
                </ExternalLink>
                <ExternalLink
                  href="https://t.me/pricko_official"
                  className="text-gray-400 hover:text-gecko-green transition-colors flex items-center"
                  showIcon={false}
                >
                  <Send size={16} className="mr-2" />
                  $PRICKO Community
                </ExternalLink>
              </div>
            </div>

            {/* Developer Social Links */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Developer
              </p>
              <div className="flex flex-col space-y-2 text-sm">
                <ExternalLink
                  href="https://twitter.com/0xAnonA"
                  className="text-gray-400 hover:text-gecko-green transition-colors flex items-center"
                  showIcon={false}
                >
                  <Twitter size={16} className="mr-2" />
                  @0xAnonA
                </ExternalLink>
                <ExternalLink
                  href="https://t.me/askAnonA"
                  className="text-gray-400 hover:text-gecko-green transition-colors flex items-center"
                  showIcon={false}
                >
                  <Send size={16} className="mr-2" />
                  Ask Developer
                </ExternalLink>
              </div>
            </div>

            {/* GitHub Link */}
            <div className="flex flex-col space-y-2 text-sm">
              <ExternalLink
                href="https://github.com/privacygecko"
                className="text-gray-400 hover:text-gecko-green transition-colors flex items-center"
                showIcon={false}
              >
                <Github size={16} className="mr-2" />
                View Source
              </ExternalLink>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <ExternalLink
                      href={link.href}
                      className="text-gray-400 hover:text-gecko-green transition-colors text-sm"
                      showIcon={false}
                    >
                      {link.label}
                    </ExternalLink>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-gecko-green transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gecko-green transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gecko-green transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI & Research */}
          <div>
            <h3 className="font-semibold mb-4">AI & Research</h3>
            <ul className="space-y-2">
              {aiLinks.map((link) => (
                <li key={link.href}>
                  {link.comingSoon ? (
                    <span className="text-gray-500 text-sm flex items-center gap-2">
                      {link.label}
                      <span className="text-xs bg-gray-700 px-2 py-0.5 rounded">Coming Soon</span>
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-gecko-green transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gecko-green transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            <ExternalLink
              href="https://github.com/privacygecko"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
              showIcon={false}
            >
              <Github size={16} />
              <span className="text-gray-300">Open Source</span>
            </ExternalLink>
            <ExternalLink
              href="https://plausible.io/privacygecko.com"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
              showIcon={false}
            >
              <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.1 2C6.6 2 2.1 6.5 2.1 12s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
                <path d="M13 7h-2v6h6v-2h-4z"/>
              </svg>
              <span className="text-gray-300">Privacy Analytics</span>
            </ExternalLink>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm">
              <Shield size={16} className="text-gecko-green" />
              <span className="text-gray-300">No Tracking</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm">
              <Shield size={16} className="text-gecko-green" />
              <span className="text-gray-300">No Data Selling</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Privacy Gecko. All rights reserved.
            Built with ❤️ for privacy.
          </p>
        </div>
      </div>
    </footer>
  );
}
