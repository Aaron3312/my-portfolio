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
  // Add your repository name if your site will be hosted in a subdirectory
  basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  
  // For GitHub Pages, this is required if you're not using a custom domain
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  
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