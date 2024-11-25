import React, { useEffect, useState } from 'react'

// ** Hook Imports
import Link from 'next/link'

import SimpleDateFormatter from 'src/utils/simple-date-readble'

// ** Import translation
import { useTranslation } from 'react-i18next'
import { VancouverTime } from 'src/utils/countries-time'

// ** Loader
import Loader from 'src/views/components/loader/loader.js'

const WebinarSection = ({ webinars }) => {
  const [webinarList, setWebinarList] = useState([])
  const [displayCount, setDisplayCount] = useState(4)

  // Hooks
  const { t } = useTranslation()

  useEffect(() => {
    setWebinarList(webinars)
  }, [webinars])

  const showMoreWebinars = () => {
    setDisplayCount(prevCount => prevCount + 4)
  }

  const getCurrentTimeInTimezone = offset => {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000; // Convert local time to UTC
    return new Date(utcTime + offset * 3600000); // Add the timezone offset in milliseconds
  };

  const handelStatus = webinar => {
    // Define timezone offsets for Toronto and Vancouver
    const torontoOffset = -5; // UTC-5
    const vancouverOffset = -8; // UTC-8

    // Get the current time in Toronto and Vancouver
    const nowToronto = getCurrentTimeInTimezone(torontoOffset);
    const nowVancouver = getCurrentTimeInTimezone(vancouverOffset);

    // Parse the webinar's time in Toronto timezone
    const webinarDateTimeToronto = new Date(`${webinar.date}T${webinar.time}:00-05:00`);

    if (isNaN(webinarDateTimeToronto.getTime())) {
      return t('webinar-home-status-done');
    }

    // Calculate the webinar's end time (2 hours duration)
    const webinarEndTimeToronto = new Date(webinarDateTimeToronto.getTime() + 2 * 60 * 60 * 1000);

    // Check if the current time has passed the webinar's end time in both timezones
    if (nowToronto > webinarEndTimeToronto && nowVancouver > webinarEndTimeToronto) {
      return t('webinar-home-status-done');
    }

    // Return other statuses based on webinar status
    switch (webinar.status) {
      case 1:
        return t('webinar-home-status-active');
      case '2':
        return t('webinar-home-status-recorded');
      case '3':
        return t('webinar-home-status-postponed');
      default:
        return t('webinar-home-status-done');
    }
  };

  const handelType = webinar => {
    switch (webinar.type) {
      case 1:
        return '$' + webinar.regularPrice + ' ' + 'CAD'
      case 2:
        return 'Free'
      default:
        return 'Free'
    }
  }

  const truncateText = (html, maxLength) => {
    const div = document.createElement('div')
    div.innerHTML = html
    const text = div.textContent || div.innerText || ''
    return text.length > maxLength ? text.substr(0, maxLength) + '...' : text
  }

  // Lazy loading images with a loader
  const LazyImage = ({ src, alt, className }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
      <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
        {!isLoaded && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f0f0f0',
            }}
          >
            <Loader />
          </div>
        )}
        <img
          src={src}
          className={className}
          alt={alt}
          style={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    )
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-2'>
            <h3>{t('menu-webinars')}</h3>

            <Link href="/webinars">
              {t('menu-all-courses')}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.5607 0.93934C12.1464 1.52513 12.1464 2.47487 11.5607 3.06066L3.62132 11L11.5607 18.9393C12.1464 19.5251 12.1464 20.4749 11.5607 21.0607C10.9749 21.6464 10.0251 21.6464 9.43934 21.0607L0.43934 12.0607C-0.146447 11.4749 -0.146447 10.5251 0.43934 9.93934L9.43934 0.93934C10.0251 0.353553 10.9749 0.353553 11.5607 0.93934Z" fill="#F0F3FB" />
                <path fillRule="evenodd" clipRule="evenodd" d="M11 11C11 10.1716 11.6716 9.5 12.5 9.5H20.5C21.3284 9.5 22 10.1716 22 11C22 11.8284 21.3284 12.5 20.5 12.5H12.5C11.6716 12.5 11 11.8284 11 11Z" fill="#F0F3FB" />
              </svg>
            </Link>
          </div>

          <div className='col-12 col-md-10'>
            <div className='row FNV-LoopItem FNV-LoopItem-Webinar'>
              {Array.isArray(webinarList) &&
                webinarList.slice(0, 3).map(webinar => (
                  <div className='col-12 col-md-4' key={webinar.id}>
                    <div className='card'>
                      <Link href={`/webinars/${webinar.slug}`} className='FNV-LoopItem-Webinar-Image-Link'>
                        <LazyImage
                          src={webinar.image}
                          alt={webinar.title}
                          className='FNV-LoopItem-Webinar-Image'
                        />

                        <badge
                          className={
                            handelStatus(webinar) === t('webinar-home-status-done')
                              ? 'DangerColor'
                              : 'PrimaryColor'
                          }
                        >
                          {handelStatus(webinar)}
                        </badge>
                      </Link>

                      <div className="card-body">
                        <Link href={`/webinars/${webinar.slug}`}>
                          <h4>{webinar.title}</h4>
                        </Link>
                        <div className="row FNV-LoopItem-Webinar-Details">
                          <date className="col-12">
                            <SimpleDateFormatter dateString={webinar.date} />
                          </date>
                          <hour className="col-12">
                            {webinar.time && webinar.time + ' Toronto | '}
                            {webinar.time && <VancouverTime torontoTime={webinar.time} />} Vancouver
                          </hour>
                        </div>
                        <div className='row FNV-LoopItem-Webinar-Button'>
                          <div className="col-6">
                            <Link
                              href={`/webinars/${webinar.slug}`}
                              className='FNV-Btn BtnPrimary w-100'
                            >
                              {t('webinar-home-detail')}
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link href='#' className='FNV-Btn BtnOutline PrimaryColor w-100'>
                              {t('webinar-home-enroll')}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WebinarSection
