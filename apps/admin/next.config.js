/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@privacygecko/ui', '@privacygecko/database'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.privacygecko.com',
      },
      {
        protocol: 'https',
        hostname: '**.vercel-storage.com',
      },
    ],
  },
};

module.exports = nextConfig;
