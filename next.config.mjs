/** @type {import('next').NextConfig} */

const repo = 'https://github.com/Ngalo-bot/marvin.ngalonde.git';

const nextConfig = {
  output: 'export', 

  basePath: `/${repo}`,         
  assetPrefix: `/${repo}/`,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
}

export default nextConfig
