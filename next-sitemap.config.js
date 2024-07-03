/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://alemarat-line.vercel.app',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 12000,
  // ...other options
}
