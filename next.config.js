/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')
const withPWA = require('next-pwa')({
  dest: 'public',
})
const nextConfig = {
  i18n,
  reactStrictMode: true,
}

module.exports = nextConfig
