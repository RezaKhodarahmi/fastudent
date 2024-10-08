import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import { appConfig } from 'src/configs/appConfig'

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
      router.push('/about-us')
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>{t('درباره فناوران')}</title>
      </Helmet>

      {/* Header */}
      <section className='FNV-About-Header'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 FNV-HCard'>
              <h1>{t('about-fanavaran')}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className='FNV-About-Content'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 p-0'>
              <h2>{t('about-fanavaran-1')}</h2>
              <p>{t('about-fanavaran-2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className='FNV-About-Content FNV-BG-Highlight'>
        <div className='container'>
          <div className='row'>
            <h3 className='text-center'>{t('about-fanavaran-3')}</h3>
            <div className='col-12 col-md-6 p-2'>
              <iframe
                width='100%'
                height='350'
                src='https://www.youtube.com/embed/5OMF56GHPKI?si=23Fyp2b7tAvkgr7S'
                className='rounded'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>
            <div className='col-12 col-md-6 ps-5 py-5'>
              <p>{t('about-fanavaran-5')}</p>
              <p>{t('about-fanavaran-6')}</p>
              <p>{t('about-fanavaran-7')}</p>
              <p>{t('about-fanavaran-8')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className='FNV-About-Team'>
        <h3>{t('about-fanavaran-9')}</h3>

        <div className='container'>
          <div className='row mb-5'>
            <p>{t('about-fanavaran-10')}</p>
            <p>{t('about-fanavaran-11')}</p>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            {/* Item */}
            <div className='col-12 col-md-6 p-0'>
              <div className='row ps-0 p-4'>
                <div className='col-12 text-center'>
                  <img
                    alt='image'
                    src={appConfig.appUrl + '/img/team/mo_amani.jpg'}
                    className='img-fluid w-75 rounded mb-4'
                  />
                  <h4 className='mt-4'>Mo Amani</h4>
                  <small className='h6 text-muted'>(P.Eng., PMP, PMI-RMP)</small>
                  <p className='mt-1'>CEO</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className='col-12 col-md-6 p-0'>
              <div className='row ps-0 p-4'>
                <div className='col-12 text-center'>
                  <img
                    alt='image'
                    src={appConfig.appUrl + '/img/team/babak_babaee.png'}
                    className='img-fluid w-75 rounded mb-4'
                  />
                  <h4 className='mt-4'>Babak Babaee</h4>
                  <small className='h6 text-muted'>(P.Eng, MASc, MBA)</small>
                  <p className='mt-1'>COO</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className='col-12 col-md-4 p-0'>
              <div className='row p-0'>
                <div className='col-5'>
                  <img alt='image' src={appConfig.appUrl + '/img/team/payam_mahjoub.jpg'} className='img-fluid' />
                </div>
                <div className='col-7'>
                  <h4>Payam Mahjoub</h4>
                  <small className='h6 text-muted'>MSc in AI</small>
                  <p>CTO</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className='col-12 col-md-4 p-0'>
              <div className='row p-0'>
                <div className='col-5'>
                  <img alt='image' src={appConfig.appUrl + '/img/team/mona_dejban.jpg'} className='img-fluid' />
                </div>
                <div className='col-7'>
                  <h4>Mona Dejban</h4>
                  <small className='h6 text-muted'></small>
                  <p>Marketing Manager</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className='col-12 col-md-4 p-0'>
              <div className='row p-0'>
                <div className='col-5'>
                  <img alt='image' src={appConfig.appUrl + '/img/team/parham_fazlali.jpg'} className='img-fluid' />
                </div>
                <div className='col-7'>
                  <h4>Parham FazlAli</h4>
                  <small className='h6 text-muted'></small>
                  <p>Graphic Designer</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className='col-12 col-md-4 p-0'>
              <div className='row p-0'>
                <div className='col-5'>
                  <img alt='image' src={appConfig.appUrl + '/img/team/reza_khodarahmi.jpg'} className='img-fluid' />
                </div>
                <div className='col-7'>
                  <h4>Morteza Khodarahmi</h4>
                  <small className='h6 text-muted'>BSc in Software Engineering</small>
                  <p>Senior Developer</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className='col-12 col-md-4 p-0'>
              <div className='row p-0'>
                <div className='col-5'>
                  <img alt='image' src={appConfig.appUrl + '/img/team/arezou_khanzadeh.jpg'} className='img-fluid' />
                </div>
                <div className='col-7'>
                  <h4>Arezou Khanzadeh</h4>
                  <small className='h6 text-muted'>MSc in Interior Design</small>
                  <p>HR / SEO</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className='col-12 col-md-4 p-0'>
              <div className='row p-0'>
                <div className='col-5'>
                  <img alt='image' src={appConfig.appUrl + '/img/team/maryam_rajabi.jpg'} className='img-fluid' />
                </div>
                <div className='col-7'>
                  <h4>Maryam Rajabi</h4>
                  <small className='h6 text-muted'>BSc in Graphic</small>
                  <p>Graphic Designer</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className='col-12 col-md-4 p-0'>
              <div className='row p-0'>
                <div className='col-5'>
                  <img alt='image' src={appConfig.appUrl + '/img/team/sajad_fatehi.jpg'} className='img-fluid' />
                </div>
                <div className='col-7'>
                  <h4>Sajad Fatehi</h4>
                  <small className='h6 text-muted'>BSc in Software Engineering</small>
                  <p>Admin / YouTube Manager</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className='col-12 col-md-4 p-0'>
              <div className='row p-0'>
                <div className='col-5'>
                  <img alt='image' src={appConfig.appUrl + '/img/team/khaled_hamidi.jpg'} className='img-fluid' />
                </div>
                <div className='col-7'>
                  <h4>Khaled Hamidi</h4>
                  <small className='h6 text-muted'></small>
                  <p>Coordinator</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className='col-12 col-md-4 p-0'>
              <div className='row p-0'>
                <div className='col-5'>
                  <img alt='image' src={appConfig.appUrl + '/img/team/bahareh_hashemi.jpg'} className='img-fluid' />
                </div>
                <div className='col-7'>
                  <h4>Bahareh Hashemi</h4>
                  <small className='h6 text-muted'>BSc in Multimedia</small>
                  <span>Video Editor</span>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className='col-12 col-md-4 p-0'>
              <div className='row p-0'>
                <div className='col-5'>
                  <img alt='image' src={appConfig.appUrl + '/img/team/roya_karami.jpg'} className='img-fluid' />
                </div>
                <div className='col-7'>
                  <h4>Roya Karami</h4>
                  <small className='h6 text-muted'>MSc in Industrial Engineering</small>
                  <p>Sales Manager</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className='col-12 col-md-4 p-0'>
              <div className='row p-0'>
                <div className='col-5'>
                  <img alt='image' src={appConfig.appUrl + '/img/team/kiarash_kiarasi.jpg'} className='img-fluid' />
                </div>
                <div className='col-7'>
                  <h4>Kiarash Kiarasi</h4>
                  <small className='h6 text-muted'>BSc, PMP</small>
                  <span>Project Coordinator</span>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className='col-12 col-md-4 p-0'>
              <div className='row p-0'>
                <div className='col-5'>
                  <img alt='image' src={appConfig.appUrl + '/img/team/hesam_bagheri.jpg'} className='img-fluid' />
                </div>
                <div className='col-7'>
                  <h4>Hesam Bagheri</h4>
                  <small className='h6 text-muted'></small>
                  <small className='h6 text-muted'>BSc in Law</small>
                  <p>Content</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
Index.guestGuard = true

export default Index
