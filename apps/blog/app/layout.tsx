import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | PrivacyGecko Blog",
    default: "PrivacyGecko Blog - Privacy, Security & Crypto Safety",
  },
  description:
    "Expert guides on online privacy, cybersecurity, and crypto safety. Learn how to protect your digital life.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://privacygecko.com/blog",
    siteName: "PrivacyGecko Blog",
    images: [
      {
        url: "https://privacygecko.com/images/og-home.png",
        width: 1200,
        height: 630,
        alt: "PrivacyGecko Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PrivacyGecko",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* Blog-specific header */}
        <header className="border-b border-slate-100 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a
                href="/"
                className="flex items-center gap-2 text-xl font-bold text-slate-900"
              >
                <span className="text-2xl">🦎</span>
                <span className="font-display">PrivacyGecko</span>
              </a>
              <nav className="hidden md:flex items-center gap-6">
                <a
                  href="/blog"
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  Blog
                </a>
                <a
                  href="/#products"
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  Products
                </a>
                <a
                  href="/#about"
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="/whitepaper"
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  Whitepaper
                </a>
              </nav>
            </div>
          </div>
        </header>

        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
          {children}
        </main>

        {/* Blog-specific footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 text-xl font-bold mb-4">
                  <span className="text-2xl">🦎</span>
                  <span className="font-display">PrivacyGecko</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Building privacy-first tools for the modern internet.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Products</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>
                    <a href="/products/geckoguard" className="hover:text-white transition-colors">
                      GeckoGuard
                    </a>
                  </li>
                  <li>
                    <a href="/products/geckoadvisor" className="hover:text-white transition-colors">
                      GeckoAdvisor
                    </a>
                  </li>
                  <li>
                    <a href="/products/geckoshare" className="hover:text-white transition-colors">
                      GeckoShare
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>
                    <a href="/blog" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/whitepaper" className="hover:text-white transition-colors">
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>
                    <a
                      href="https://twitter.com/PrivacyGecko"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/PrivacyGecko"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
              © {new Date().getFullYear()} PrivacyGecko. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
