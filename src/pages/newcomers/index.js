import React from 'react'
import Link from 'next/link'

// ** Import Translation
import { useTranslation } from 'react-i18next'

// ** Import course section
import CourseDeskSingle from 'src/views/swiper/courseDeskSingle'
import CourseMobileSingle from 'src/views/swiper/courseMobileSingle'

// ** Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { fetchCourseData } from 'src/store/apps/course'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

const Index = () => {
  return (
    <>
      <section className='FNV-SinglePage FNV-SinglePage-Header'>
        <div className='container'>
          <div className='row FNV-Header'>
            <div className='col-12'>
              <h1>تازه واردان به کانادا</h1>
            </div>

            <div className='col-12 col-md-6'>
              <span>پیش از هر اقدامی، این ویدئو را ببینید</span>
              <iframe
                src='https://www.youtube.com/embed/rJxBSn_VRYM?si=eHic4Pa3IT6nhII1'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>

            <div className='col-12 col-md-6'>
              <p>کارآفرینی در کانادا، با وجود سود فراوانی که در برای افراد موفق این حوزه دارد، برای بسیاری از کارآفرینان می‌تواند چالش‌ برانگیز و همراه با ریسک زیاد باشد. در سری جلسات سه‌ شنبه‌ها با کارآفرینان، مطالب تخصصی این حوزه، ریسک‌ ها موجود و راه‌ های موفقیت در بیزینس‌ های مختلف بررسی می‌شود و نکاتی که کارفرمایان و علاقه مندان به حوزه کارآفرینی در کانادا نمی‌دانند بیان می‌گردد.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Index.guestGuard = true

export default Index
