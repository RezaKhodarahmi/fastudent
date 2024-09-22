import React from 'react'

// ** Hook Imports
import Link from 'next/link'

// ** Import Translation
import { useTranslation } from 'react-i18next'

const AboutFanavaran = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className='FNV-HomeAbout'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <img alt='image' src='images/about/about-fanavaran.png' className='img-fluid' />
            </div>
            <div className='col-12 col-md-6'>
              <h2>{t('about-fanavaran')}</h2>
              <p>{t('about-fanavaran-1')}</p>
              <p>{t('about-fanavaran-2')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutFanavaran