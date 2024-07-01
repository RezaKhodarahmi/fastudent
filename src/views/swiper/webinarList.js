import React, { useEffect, useState } from 'react'

// ** Hook Imports
import Link from 'next/link'

import SimpleDateFormatter from 'src/utils/simple-date-readble'

// ** Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// ** Import translation
import { useTranslation } from 'react-i18next'
import { VancouverTime } from 'src/utils/countries-time'

const WebinarDeskSingle = ({ webinars }) => {
  const [webinarList, setWebinarList] = useState([])
  const [displayCount, setDisplayCount] = useState(4)

  //Hooks
  const { t } = useTranslation()

  useEffect(() => {
    setWebinarList(webinars)
  }, [webinars])

  const showMoreWebinars = () => {
    // Increase the number of webinars displayed by 4 each time the button is clicked
    setDisplayCount(prevCount => prevCount + 4)
  }

  const handelStatus = webinar => {
    switch (webinar.status) {
      case 1:
        return t('webinar-home-status-active');
        break
      case '2':
        return t('webinar-home-status-recorded');
        break
      case '3':
        return t('webinar-home-status-postponed');
        break
      default:
        return t('webinar-home-status-not-active');
    }
  }

  const handelType = webinar => {
    switch (webinar.type) {
      case 1:
        return '$' + webinar.regularPrice + ' ' + 'CAD'
        break
      case 2:
        return 'Free'
        break
      default:
        return 'Free'
    }
  }

  const truncateText = (html, maxLength) => {
    // Remove HTML tags
    const div = document.createElement('div')
    div.innerHTML = html
    const text = div.textContent || div.innerText || ''

    // Truncate text to maxLength characters
    return text.length > maxLength ? text.substr(0, maxLength) + '...' : text
  }

  return (
    <>
      <section className='FNV-NewWebinars' dir='ltr'>
        <h3>{t('webinars-section-title')}</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-5'>
              {/* Rest */}
              {Array.isArray(webinarList) &&
                webinarList
                .slice(0, 2)
                .map((webinar, index) => (
                  <div key={index} className='col-12'>
                    <div className='d-flex'>
                      <div className='col-7' dir='ltr'>
                        <badge className='PrimaryColor'>{handelType(webinar)}</badge>
                        <badge className='SecondaryColor'>{handelStatus(webinar)}</badge> {/* Changed badge to span */}
                        <h4>{webinar.title}</h4>
                      </div>
                      <div className='col-5'>
                        <Link href={`/webinars/${webinar.slug}`} className='FNV-Btn BtnOutline PrimaryColor w-100'>
                          {t('webinar-home-detail')}
                        </Link>
                        <Link href={`/webinars/${webinar.slug}`} className='FNV-Btn SecondaryColor w-100'>
                          {t('webinar-home-enroll')}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            {/* Featured */}
            <div className='col-12 col-md-7'>
              {/* Webinars Desktop */}
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
                }}
                modules={[Autoplay]}
                className='FNV-NewCoursesSwiper'
              >
                {Array.isArray(webinarList) &&
                  webinarList
                  .slice(0, 4)
                  .map(webinar => (
                    <>
                      {' '}
                      <SwiperSlide>
                        <div className='d-flex flex-row'>
                          <div className='col-12 col-md-5'>
                            <badge className='PrimaryColor'>{handelType(webinar)}</badge>
                            <badge className='SecondaryColor'>{handelStatus(webinar)}</badge>
                            <h4>{webinar.title}</h4>

                            <small class="d-block">{truncateText(webinar?.description, 150)}</small>
                            <span>
                              <svg
                                width='11'
                                height='11'
                                viewBox='0 0 11 11'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M8.88063 0.845045H8.47015V0.429688C8.47015 0.192371 8.27778 0 8.04046 0C7.80314 0 7.61077 0.192371 7.61077 0.429688V0.845045H3.39496V0.429688C3.39496 0.192371 3.20259 0 2.96527 0C2.72795 0 2.53558 0.192371 2.53558 0.429688V0.845045H2.12512C0.95356 0.845045 0.000427246 1.79818 0.000427246 2.96972V8.8753C0.000427246 10.0469 0.95356 11 2.12512 11H8.88065C10.0522 11 11.0053 10.0469 11.0053 8.8753V2.96972C11.0053 1.79818 10.0522 0.845045 8.88063 0.845045ZM2.12512 1.70442H2.53558V2.54231C2.53558 2.77963 2.72795 2.972 2.96527 2.972C3.20259 2.972 3.39496 2.77963 3.39496 2.54231V1.70442H7.61079V2.54231C7.61079 2.77963 7.80316 2.972 8.04048 2.972C8.2778 2.972 8.47017 2.77963 8.47017 2.54231V1.70442H8.88065C9.57833 1.70442 10.1459 2.27204 10.1459 2.96972V3.3802H0.859802V2.96972C0.859802 2.27204 1.42742 1.70442 2.12512 1.70442ZM8.88063 10.1406H2.12512C1.42742 10.1406 0.859802 9.57301 0.859802 8.8753V4.23958H10.1459V8.8753C10.1459 9.57301 9.57833 10.1406 8.88063 10.1406ZM3.81749 5.92969C3.81749 6.167 3.62512 6.35938 3.3878 6.35938H2.54276C2.30544 6.35938 2.11307 6.167 2.11307 5.92969C2.11307 5.69237 2.30544 5.5 2.54276 5.5H3.3878C3.6251 5.5 3.81749 5.69237 3.81749 5.92969ZM8.8927 5.92969C8.8927 6.167 8.70033 6.35938 8.46301 6.35938H7.61797C7.38065 6.35938 7.18828 6.167 7.18828 5.92969C7.18828 5.69237 7.38065 5.5 7.61797 5.5H8.46301C8.70031 5.5 8.8927 5.69237 8.8927 5.92969ZM6.35265 5.92969C6.35265 6.167 6.16028 6.35938 5.92296 6.35938H5.07792C4.8406 6.35938 4.64823 6.167 4.64823 5.92969C4.64823 5.69237 4.8406 5.5 5.07792 5.5H5.92296C6.16025 5.5 6.35265 5.69237 6.35265 5.92969ZM3.81749 8.46484C3.81749 8.70216 3.62512 8.89453 3.3878 8.89453H2.54276C2.30544 8.89453 2.11307 8.70216 2.11307 8.46484C2.11307 8.22753 2.30544 8.03516 2.54276 8.03516H3.3878C3.6251 8.03516 3.81749 8.22753 3.81749 8.46484ZM8.8927 8.46484C8.8927 8.70216 8.70033 8.89453 8.46301 8.89453H7.61797C7.38065 8.89453 7.18828 8.70216 7.18828 8.46484C7.18828 8.22753 7.38065 8.03516 7.61797 8.03516H8.46301C8.70031 8.03516 8.8927 8.22753 8.8927 8.46484ZM6.35265 8.46484C6.35265 8.70216 6.16028 8.89453 5.92296 8.89453H5.07792C4.8406 8.89453 4.64823 8.70216 4.64823 8.46484C4.64823 8.22753 4.8406 8.03516 5.07792 8.03516H5.92296C6.16025 8.03516 6.35265 8.22753 6.35265 8.46484Z'
                                  fill='#FF772C'
                                />
                              </svg>
                              <SimpleDateFormatter dateString={webinar.date} />
                            </span>

                            <span>
                              <svg
                                width='11'
                                height='11'
                                viewBox='0 0 11 11'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M5.5 0C2.4603 0 0 2.4599 0 5.5C0 8.53969 2.4599 11 5.5 11C8.53969 11 11 8.5401 11 5.5C11 2.4603 8.5401 0 5.5 0ZM5.92969 10.1209V9.72527C5.92969 9.48795 5.73732 9.29558 5.5 9.29558C5.26268 9.29558 5.07031 9.48795 5.07031 9.72527V10.1209C2.84967 9.91828 1.0817 8.15001 0.879162 5.92969H1.27475C1.51207 5.92969 1.70444 5.73732 1.70444 5.5C1.70444 5.26268 1.51207 5.07031 1.27475 5.07031H0.879162C1.08172 2.84967 2.84999 1.0817 5.07031 0.879141V1.27473C5.07031 1.51205 5.26268 1.70442 5.5 1.70442C5.73732 1.70442 5.92969 1.51205 5.92969 1.27473V0.879141C8.15033 1.08172 9.9183 2.84999 10.1208 5.07031H9.72525C9.48793 5.07031 9.29556 5.26268 9.29556 5.5C9.29556 5.73732 9.48793 5.92969 9.72525 5.92969H10.1208C9.91828 8.15033 8.15001 9.9183 5.92969 10.1209ZM7.49394 6.88626C7.66176 7.05407 7.66176 7.32613 7.49394 7.49392C7.32613 7.66174 7.05407 7.66172 6.88628 7.49392L5.19617 5.80381C5.11558 5.72327 5.07031 5.61395 5.07031 5.5V2.96484C5.07031 2.72753 5.26268 2.53516 5.5 2.53516C5.73732 2.53516 5.92969 2.72753 5.92969 2.96484V5.32202L7.49394 6.88626Z'
                                  fill='#FF772C'
                                />
                              </svg>
                              {webinar.time && webinar.time + ' ' + 'Toronto' + ' '} |
                              {webinar.time && <VancouverTime torontoTime={webinar.time} />} Vancouver
                            </span>

                            <div className='d-flex justify-content-between'>
                              <Link
                                href={`/webinars/${webinar.slug}`}
                                className='FNV-Btn BtnOutline PrimaryColor w-100'
                              >
                                {t('webinar-home-detail')}
                              </Link>
                              <Link href='#' className='FNV-Btn SecondaryColor w-100'>
                                {t('webinar-home-enroll')}
                              </Link>
                            </div>
                          </div>
                          <div className='col-md-7 d-none d-sm-none d-md-block'>
                            <img src={webinar.image} className='img-fluid' />
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  ))}
              </Swiper>
            </div>

            <div className='col-12'>
              {displayCount < webinarList.length && (
                <div className='col-12 text-center'>
                  <button onClick={showMoreWebinars} className='FNV-Btn SecondaryColor BtnLarge'>
                    {t('webinar-more')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WebinarDeskSingle
