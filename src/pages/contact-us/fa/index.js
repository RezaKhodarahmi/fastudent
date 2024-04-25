import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'

// ** Import Translation
import { useTranslation } from 'react-i18next'

const Index = () => {
  //Hooks
  const router = useRouter()
  const { t } = useTranslation()

  // Check website lang
  useEffect(() => {
    const lng = window.localStorage.getItem('i18nextLng')
    if (lng == 'en') {
      router.push('/contact-us')
    }
  }, [])
    
  return (
    <>
      <section className='FNV-ContactUs'>
        <div className='container'>
          <div className='row'>
            <h1 className='mb-5'>{t('contact-fanavaran-1')}</h1>
            <div className='col-12 col-md-6'>
              <p>{t('contact-fanavaran-2')}</p>
              <p>{t('contact-fanavaran-3')}</p>
              <p>{t('contact-fanavaran-4')}</p>
              <p>{t('contact-fanavaran-5')}</p>
            </div>
            <div className='col-12 col-md-6 p-5'>
              <form>
                <div className='row'>
                  <div className='col-12 col-md-6 mb-3'>
                    <input type='text' className='form-control' placeholder={t('contact-fanavaran-fullname')} />
                  </div>

                  <div className='col-12 col-md-6 mb-3'>
                    <input type='email' className='form-control' placeholder={t('contact-fanavaran-email')} />
                  </div>

                  <div className='col-12 mb-3'>
                    <textarea className='form-control' rows={4} placeholder={t('contact-fanavaran-message')} ></textarea>
                  </div>

                  <div className='col-12 mb-3'>
                    <button type='submit' className='FNV-Btn SecondaryColor BtnLarge w-100'>{t('contact-fanavaran-submit')}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.6290760198417!2d-79.95137982348712!3d43.21726868051585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c85252c90b295%3A0x881e55084178b394!2zRmFuYXZhcmFuIHwg2KfZhtis2YXZhiDZgdmG24wg2YXZh9mG2K_Ys9uMINmB2YbYp9mI2LHYp9mG!5e0!3m2!1sen!2slu!4v1707492191488!5m2!1sen!2slu" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  )
}
Index.guestGuard = true

export default Index
