/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  }
}

const withNextIntl = require('next-intl/plugin')(
  './i18n.tsx'
)

module.exports = withNextIntl(nextConfig)
