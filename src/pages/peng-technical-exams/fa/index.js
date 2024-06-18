import React, { useEffect, useState } from 'react'
import feather from 'feather-icons'

import { useRouter } from 'next/router'

const Index = () => {
  //Hooks
  const router = useRouter()

  // Feathericon
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof feather !== 'undefined' && feather !== null) {
        feather.replace()
      }
    }, 1000) // 1 second delay

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer)
  }, [])

  // Check website lang
  useEffect(() => {
    const lng = window.localStorage.getItem('i18nextLng')
    if (lng === 'en') {
      router.push('/peng-technical-exams')
    }
  }, [router])

  return (
  <>
    <section className='FNV-SinglePage'>
        <div className='FNV-BG'>
          <img src='/img/landings/engineering-bg.jpg' className='img-fluid' alt='Engineering Background' />
        </div>

        <div className='container'>
          <div className='row FNV-Header'>
            <div className='col-12'>
              <h1>فعالیت مهندسی در کانادا</h1>
            </div>

            <div className='col-12 col-md-6'>
              <span>پیش از هر اقدامی، این ویدئو را ببینید</span>
              <iframe
                src='https://www.youtube.com/embed/6OdumXuaE50?si=2g6M4dsBeCvTCzKq'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>

            <div className='col-12 col-md-6'>
              <p>
                مهندسی در کانادا جزوه‌ای نظام‌مند است. کسی که می‌خواد در این حوزه فعالیت داشته باشد باید لایسنس مهندس
                حرفه‌ای یا به اختصار .P.Eng را دریافت کند. فعالیت مهندسی در کانادا شامل سه بخش اصلی آنالیز، طراحی و
                محاسبات است. هر عملی که در این سه بخش قرار نمی‌گیرد، از دسته فعالیت‌های مهندسی نیست.
              </p>
            </div>
          </div>
        </div>
    </section>
  </>
  )
}

Index.guestGuard = true

export default Index