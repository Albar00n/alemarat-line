/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://alamaratline.ae',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 12000,
  // ...other options
}
