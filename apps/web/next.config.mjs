import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [],
  },

  // Enhanced security headers for privacy and protection
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self' *.privacygecko.com",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' plausible.io *.privacygecko.com",
              "style-src 'self' 'unsafe-inline' fonts.googleapis.com *.privacygecko.com",
              "img-src 'self' data: https:",
              "font-src 'self' data: fonts.gstatic.com *.privacygecko.com",
              "connect-src 'self' plausible.io *.privacygecko.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests"
            ].join('; ')
          }
        ],
      },
    ]
  },

  // 301 Redirects for removed pages
  async redirects() {
    return [
      { source: '/products/guard', destination: '/products', permanent: true },
      { source: '/products/lock', destination: '/products', permanent: true },
      { source: '/products/view', destination: '/products', permanent: true },
      { source: '/products/shell', destination: '/products', permanent: true },
      { source: '/products/vpn', destination: '/products', permanent: true },
      { source: '/products/watch', destination: '/products', permanent: true },
      { source: '/roadmap', destination: '/about', permanent: true },
      { source: '/ai-roadmap', destination: '/about', permanent: true },
    ]
  },

  // Rewrites to proxy /blog to the blog subdomain
  // Blog app uses basePath: '/blog', so all paths are under /blog/*
  async rewrites() {
    // Use environment variable for flexibility between staging and production
    const blogUrl = process.env.BLOG_URL || 'https://blog.stage.privacygecko.com';

    return {
      beforeFiles: [
        // Proxy all /blog/* requests to the blog subdomain
        {
          source: '/blog',
          destination: `${blogUrl}/blog`,
        },
        {
          source: '/blog/:path*',
          destination: `${blogUrl}/blog/:path*`,
        },
      ],
    };
  },

  // Transpile shared packages
  transpilePackages: ['@privacygecko/ui', '@privacygecko/database'],
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)
