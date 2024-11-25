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
  eslint: {
    ignoreDuringBuilds: true
  },
  i18n: {
    locales: ['en', 'fa'], // Specify your locales
    defaultLocale: 'en' // Specify your default locale
  },
  async redirects() {
    return [
      {
        source: '/membership-account/membership-levels',
        destination: '/membership/checkout',
        permanent: true
      }
      // ...other redirects
    ]
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource'
    })
    return config
  }
}
