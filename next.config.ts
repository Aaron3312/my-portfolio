/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  compress: true,
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

  experimental: {
    optimizeCss: true,
  },

  // Modern JavaScript target - removes unnecessary polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Performance optimizations
  swcMinify: true,
  
  // Bundle optimization
  webpack: (config: any) => {
    // Code splitting optimization
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            maxSize: 244000, // 244kb chunks
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            maxSize: 244000,
          },
        },
      },
    };

    // Tree shaking optimization
    config.resolve.alias = {
      ...config.resolve.alias,
    };

    return config;
  },

  // Bundle analyzer for development
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: any, { isServer }: any) => {
      if (!isServer) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
          })
        );
      }
      return config;
    }
  })
};

module.exports = nextConfig;