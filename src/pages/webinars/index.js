import React from 'react'
import { Helmet } from 'react-helmet'
const Index = () => {
  return (
    <div>
      {' '}
      <Helmet>
        <title>{t('fanavaran-search-result')}</title>
      </Helmet>
      webinars
    </div>
  )
}

Index.guestGuard = true

export default Index
