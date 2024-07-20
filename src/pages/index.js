// ** React Imports
import React, { useEffect, useState } from 'react'

// ** Hook Imports
import Link from 'next/link'

// ** Import Translation
import { useTranslation } from 'react-i18next'

// ** Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// ** Import Search Section
import SearchBox from 'src/views/searchBar.js'

import { fetchCourseData } from 'src/store/apps/course'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import feather from 'feather-icons'

// ** Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// ** Import blog section
import SingleDeskBlog from 'src/views/blog/singleDeskPost'
import SingleMobileBlog from 'src/views/blog/singleMobileBlog'

// ** Import course section
import CourseDeskSingle from 'src/views/swiper/courseDeskSingle'
import CourseMobileSingle from 'src/views/swiper/courseMobileSingle'

// ** Import Webinars section
import WebinarsSection from 'src/views/swiper/webinarList'

import { fetchWebinarData } from 'src/store/apps/webinar'

// ** Categories Section
import CategoriesSection from 'src/views/categoriesSection'

const Home = () => {
  const [courses, setCourses] = useState([])
  const [webinars, setWebinars] = useState([])

  //Hooks
  const router = useRouter()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const courseData = useSelector(state => state.course)
  const webinarData = useSelector(state => state.webinar)

  useEffect(() => {
    dispatch(fetchCourseData())
    dispatch(fetchWebinarData())
  }, [])

  useEffect(() => {
    // if (typeof feather !== 'undefined' && feather !== null) {
    //   feather.replace();
    // }

    if (webinarData?.data) {
      setWebinars(webinarData?.data?.data)
    }
  }, [webinarData])

  useEffect(() => {
    if (courseData?.data) {
      setCourses(courseData?.data?.data)
    }
  }, [courseData])

  const addToCart = id => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const existInCart = cartItems.includes(id)
    router.push('/cart')

    if (existInCart) {
      window.alert('Item is already in cart!')
      router.push('/cart')
    } else {
      cartItems.push(id)
    }

    const updatedCartItems = [...cartItems]
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  return (
    <>
      <SearchBox title={t('fanavaran-motto')} />

      {/* Categories */}
      <CategoriesSection />

      {/* New Courses */}
      <section className='FNV-NewCourses'>
        <h3>{t('courses-section-title')}</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-12' dir='ltr'>
              {/* Courses Desktop */}
              <CourseDeskSingle courses={courses} addToCart={addToCart} />
              {/* Courses Mobile */}
              <CourseMobileSingle courses={courses} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>

      {/* New Webinars */}
      {Array.isArray(webinars) && <WebinarsSection webinars={webinars} />}

      {/* Youtube CTA */}
      <section className='FNV-YoutubeCTA'>
        <div className='container d-flex justify-content-center align-items-center flex-column'>
          <svg width='42' height='30' viewBox='0 0 42 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M41.1346 4.69428C40.6507 2.85867 39.232 1.41168 37.433 0.917412C34.1463 0 20.9995 0 20.9995 0C20.9995 0 7.85323 0 4.56659 0.88263C2.80214 1.37638 1.3489 2.85894 0.864919 4.69428C0 8.04697 0 15 0 15C0 15 0 21.9881 0.864919 25.3057C1.34942 27.1411 2.76753 28.5881 4.56684 29.0823C7.88783 30 21 30 21 30C21 30 34.1463 30 37.433 29.1174C39.2323 28.6234 40.6507 27.1764 41.1352 25.341C41.9998 21.9881 41.9998 15.0353 41.9998 15.0353C41.9998 15.0353 42.0344 8.04697 41.1346 4.69428ZM16.8139 21.4235V8.57655L27.7461 15L16.8139 21.4235Z'
              fill='white'
            />
          </svg>

          <p>
            {t('we-provide-useful-content')}
            <br />
            {t('collected-about-courses')}
            <br />
            {t('just-visit-our-channel')}
          </p>

          <Link
            href='https://www.youtube.com/channel/UCKbfvGZBXPn2Y3LGb9YDiIA'
            target='_blank'
            className='FNV-Btn BtnOutline BtnLarge'
          >
            {t('fanavaran-youtube-channel')}
          </Link>
        </div>
      </section>

      {/* Blog */}
      <section className='FNV-Blog' >
        <h3>{t('blogs-section-title')}</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              {/* Blogs Desktop */}
              <SingleDeskBlog />
              {/* Blogs Mobile */}
              <SingleMobileBlog />
            </div>
          </div>

          <div className='row justify-content-center'>
            <Link href='/blog' className='FNV-Btn BtnOutline PrimaryColor BtnLarge FNV-SeeMore'>
              {t('blogs-section-button')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='FNV-Testimonial'>
        <h3>{t('testimonials-section-title')}</h3>

        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              {/* Testimonial Desktop */}
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                centeredSlides={false}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
                }}
                navigation={false}
                modules={[Autoplay]}
                className='FNV-NewCoursesSwiper d-none d-sm-none d-md-block'
              >
                {/* Slider */}
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-body'>
                      <p>{t('testimonials-section-comment-one-caption')}</p>
                      <div className='d-flex flex-row w-100'>
                        <div className='col-3'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            class='icon icon-tabler icon-tabler-school'
                            width='44'
                            height='44'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='#2c3e50'
                            fill='none'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          >
                            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                            <path d='M22 9l-10 -4l-10 4l10 4l10 -4v6' />
                            <path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4' />
                          </svg>
                        </div>
                        <div className='col-9'>
                          <span className='FNV-PersonName'>{t('testimonials-section-comment-one-name')}</span>
                          <span className='FNV-CourseName'>{t('testimonials-section-comment-one-coursename')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slider */}
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-body'>
                      <p>{t('testimonials-section-comment-two-caption')}</p>
                      <div className='d-flex flex-row w-100'>
                        <div className='col-3'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            class='icon icon-tabler icon-tabler-school'
                            width='44'
                            height='44'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='#2c3e50'
                            fill='none'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          >
                            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                            <path d='M22 9l-10 -4l-10 4l10 4l10 -4v6' />
                            <path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4' />
                          </svg>
                        </div>
                        <div className='col-9'>
                          <span className='FNV-PersonName'>{t('testimonials-section-comment-two-name')}</span>
                          <span className='FNV-CourseName'>{t('testimonials-section-comment-two-coursename')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slider */}
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-body'>
                      <p>{t('testimonials-section-comment-three-caption')}</p>
                      <div className='d-flex flex-row w-100'>
                        <div className='col-3'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            class='icon icon-tabler icon-tabler-school'
                            width='44'
                            height='44'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='#2c3e50'
                            fill='none'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          >
                            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                            <path d='M22 9l-10 -4l-10 4l10 4l10 -4v6' />
                            <path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4' />
                          </svg>
                        </div>
                        <div className='col-9'>
                          <span className='FNV-PersonName'>{t('testimonials-section-comment-three-name')}</span>
                          <span className='FNV-CourseName'>{t('testimonials-section-comment-three-coursename')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* Testimonial Mobile */}
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                navigation={false}
                modules={[Autoplay, Pagination]}
                className='FNV-NewCoursesSwiper d-block d-sm-block d-md-none'
              >
                {/* Slider */}
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-body'>
                      <p>{t('testimonials-section-comment-one-caption')}</p>
                      <div className='d-flex flex-row w-100'>
                        <div className='col-3'>
                          <img alt="image" src='' />
                        </div>
                        <div className='col-9'>
                          <span className='FNV-PersonName'>{t('testimonials-section-comment-one-name')}</span>
                          <span className='FNV-CourseName'>{t('testimonials-section-comment-one-coursename')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slider */}
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-body'>
                      <p>{t('testimonials-section-comment-two-caption')}</p>
                      <div className='d-flex flex-row w-100'>
                        <div className='col-3'>
                          <img alt="image" src='' />
                        </div>
                        <div className='col-9'>
                          <span className='FNV-PersonName'>{t('testimonials-section-comment-two-name')}</span>
                          <span className='FNV-CourseName'>{t('testimonials-section-comment-two-coursename')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slider */}
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-body'>
                      <p>{t('testimonials-section-comment-three-caption')}</p>
                      <div className='d-flex flex-row w-100'>
                        <div className='col-3'>
                          <img alt="image" src='' />
                        </div>
                        <div className='col-9'>
                          <span className='FNV-PersonName'>{t('testimonials-section-comment-three-name')}</span>
                          <span className='FNV-CourseName'>{t('testimonials-section-comment-three-coursename')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
