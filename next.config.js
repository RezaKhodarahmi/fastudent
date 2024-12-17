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
        source: '/membership-account/membership-levels', // Use relative URL path for source
        destination: '/membership/checkout', // Use relative URL path for destination
        permanent: true // Indicates a permanent redirect (HTTP 301)
      },
      {
        source: '/courses/bcin-house-1', // Use relative URL path for source
        destination: '/courses/bcin-house', // Use relative URL path for destination
        permanent: true // Indicates a permanent redirect (HTTP 301)
      },
      {
        source: '/verification-of-educational-qualifications-of-engineering-graduates', // Use relative URL path for source
        destination: '/signing-documents', // Use relative URL path for destination
        permanent: true // Indicates a permanent redirect (HTTP 301)
      },
      {
        source: '/course-category/technician/', // Use relative URL path for source
        destination: '/courses/category/technician', // Use relative URL path for destination
        permanent: true // Indicates a permanent redirect (HTTP 301)
      },
      {
        source: '/course-category/recorded-courses', // Use relative URL path for source
        destination: '/courses/category/recorded-courses', // Use relative URL path for destination
        permanent: true // Indicates a permanent redirect (HTTP 301)
      },
      {
        source: '/p-eng-courses', // Use relative URL path for source
        destination: '/courses/category/peng-technical-exams', // Use relative URL path for destination
        permanent: true // Indicates a permanent redirect (HTTP 301)
      },
      {
        source: '/writing-technician-experiences', // Use relative URL path for source
        destination: '/services/counseling-working-experience', // Use relative URL path for destination
        permanent: true // Indicates a permanent redirect (HTTP 301)
      },
      {
        source: '/courses/gas-technician-g2-g3', // Use relative URL path for source
        destination: '/courses/gas-technician-g3', // Use relative URL path for destination
        permanent: true // Indicates a permanent redirect (HTTP 301)
      },
      {
        source: '/courses/writing-technician-experiences',
        destination: '/services/writing-technician-experiences',
        permanent: true
      }
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
