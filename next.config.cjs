// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return []
  },
  swcMinify: true,
}

module.exports = nextConfig
