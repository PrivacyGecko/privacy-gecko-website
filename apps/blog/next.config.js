/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/blog',
  transpilePackages: ['@privacygecko/ui', '@privacygecko/database'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.privacygecko.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
