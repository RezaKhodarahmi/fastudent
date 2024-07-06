module.exports = {
  siteUrl: 'https://fanavaran.ca',
  generateRobotsTxt: true, // Generate robots.txt
  sitemapSize: 5000, // Split sitemap file into chunks
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/app' },
      { userAgent: '*', disallow: '/faq' }
    ]
  }
}
