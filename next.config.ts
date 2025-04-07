/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      }
    ],
  },
  // Use the environment variable from GitHub Actions
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : '',
  
  // Match assetPrefix with basePath for GitHub Pages
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : '',
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },

  // Remove the experimental section if it exists
  experimental: {}
};

module.exports = nextConfig;