import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports for GitHub Pages
  images: {
    domains: ["raw.githubusercontent.com"],
    unoptimized: true,  // Required for static export with Next.js Image component
  },
  // Add your repository name if your site will be hosted in a subdirectory
  // basePath: '/my-portfolio',  // Uncomment and replace with your repo name
  
  // For GitHub Pages, this is required if you're not using a custom domain
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',  // Uncomment and replace with your repo name
};

export default nextConfig;