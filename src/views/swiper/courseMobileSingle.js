import React from 'react'

// ** Hook Imports
import Link from 'next/link'

// ** Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

// ** Import translation
import { useTranslation } from 'react-i18next'

const CourseMobileSingle = ({ courses }) => {
  const { t } = useTranslation()

  // Ensure courses is always treated as an array
  const validCourses = Array.isArray(courses) ? courses : []

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={false}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        }}
        modules={[Autoplay, Pagination]}
        className='FNV-NewCoursesSwiper d-block d-sm-block d-md-none'
      >
        {validCourses
          .filter(item => item.id !== 150000)
          .map(course => (
            <SwiperSlide key={course.id}>
              <div className='card'>
                <img src={course?.image} className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h4 className='card-title'>{course.title}</h4>
                  <price>${course?.cycles?.[parseInt(course?.cycles?.length ?? 0) - 1]?.regularPrice ?? 'N/A'}</price>

                  <div className='d-flex justify-content-between'>
                    <Link href={`/courses/${course?.slug}`} className='FNV-Btn BtnOutline PrimaryColor BtnLarge'>
                      {t('see-details')}
                    </Link>
                    <Link
                      href='#'
                      onClick={e => {
                        e.preventDefault()
                        addToCart(course?.cycles[parseInt(course?.cycles?.length) - 1].id)
                      }}
                      className='FNV-Btn SecondaryColor BtnLarge'
                    >
                      {t('add-to-cart')}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

// Define default props
CourseMobileSingle.defaultProps = {
  courses: []
}

export default CourseMobileSingle
