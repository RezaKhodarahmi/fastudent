const path = require('path')

module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    '@fullcalendar/common',
    '@fullcalendar/core',
    '@fullcalendar/react',
    '@fullcalendar/daygrid',
    '@fullcalendar/list',
    '@fullcalendar/timegrid'
  ],
  experimental: {
    esmExternals: false
  },
  i18n: {
    locales: ['en', 'fa'], // Specify your locales
    defaultLocale: 'en' // Specify your default locale
  },
  // Add more configuration options here
  async redirects() {
    return [
      {
        source: '/membership-account/membership-levels', // Use relative URL path for source
        destination: '/membership/checkout', // Use relative URL path for destination
        permanent: true // Indicates a permanent redirect (HTTP 301)
      }
    ]
  },
  // If you have webpack configuration, it goes outside the redirects function
  webpack: (config, { isServer }) => {
    // Example webpack configuration
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  }
}
