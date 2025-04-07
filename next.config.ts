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
  // basePath: '/my-portfolio',
  
  // For GitHub Pages, this is required if you're not using a custom domain
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  
  eslint: {
    // This will ignore all ESLint errors during the build
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    // This will ignore all TypeScript errors during the build
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig;