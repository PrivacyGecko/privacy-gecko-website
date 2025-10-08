import Link from "next/link";
import { Twitter, Send } from "lucide-react";

export function Footer() {
  const productLinks = [
    { href: "/products/advisor", label: "GeckoAdvisor" },
    { href: "/products/share", label: "GeckoShare" },
    { href: "/products/guard", label: "GeckoGuard" },
    { href: "/products", label: "All Products" },
  ];

  const companyLinks = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" },
  ];

  const resourceLinks = [
    { href: "/resources/docs", label: "Documentation" },
    { href: "/resources/faq", label: "FAQ" },
    { href: "/resources/support", label: "Support" },
  ];

  const legalLinks = [
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms of Service" },
    { href: "/legal/cookies", label: "Cookie Policy" },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gecko-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🦎</span>
              </div>
              <span className="font-display font-bold text-lg">
                Privacy Gecko
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Privacy tools that actually work. Powered by $PRICKO.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/privacygecko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gecko-green transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://t.me/privacygecko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gecko-green transition-colors"
                aria-label="Telegram"
              >
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
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

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Privacy Gecko. All rights reserved.
            Built with ❤️ for privacy.
          </p>
        </div>
      </div>
    </footer>
  );
}
