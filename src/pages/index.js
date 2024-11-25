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

// ** Import Search Section
import Slider from 'src/views/slider.js'

import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import feather from 'feather-icons'

// ** Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// ** Import blog section
import SingleDeskBlog from 'src/views/blog/singleDeskPost'
import SingleMobileBlog from 'src/views/blog/singleMobileBlog'

// ** Import Webinars section
import WebinarsSection from 'src/views/newWebinars'

import { fetchWebinarData } from 'src/store/apps/webinar'

// ** Sections
import CategoriesSection from 'src/views/categoriesSection'
import AboutFanavaran from 'src/views/aboutFanavaran'
import WhyFanavaran from 'src/views/whyFanavaran'
import NewCourses from 'src/views/newCourses'
import NewWorkshops from 'src/views/newWorkshops'

import ConvertTime from 'src/views/convert-timezone'

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

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const accessToken = queryParams.get('access')
    const refreshToken = queryParams.get('refresh')
    const email = queryParams.get('email')

    if (accessToken && refreshToken && email) {
      localStorage.removeItem('userData')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('userImage')

      // Store tokens in localStorage
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      localStorage.setItem('userData', JSON.stringify(email))
    }
  }, [])

  return (
    <>
      {/* Search */}
      <SearchBox title={t('fanavaran-motto')} />

      {/* Slider */}
      <Slider />

      {/* Categories */}
      <CategoriesSection />

      {/* About Fanavaran */}
      <AboutFanavaran />

      {/* Why Fanavaran */}
      <WhyFanavaran />


      {/* New on Fanavaran */}
      <section className='FNV-NewOnFanavaran'>
        <h2>{t('lastest-fanavaran')}</h2>

        {/* Courses */}
        <NewCourses />

        {/* Workshops */}
        <NewWorkshops />

        {/* New Webinars */}
        {Array.isArray(webinars) && <WebinarsSection webinars={webinars} />}
      </section>

      {/* Blog */}
      <section className='FNV-NewBlogs'>
        <div className='container'>
          <h3>
            {t('blogs-section-title')}

            <Link href="/blog/">
              {t('blogs-section-button')}

              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 2L2 11L11 20"
                  stroke="#223885"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 11H21"
                  stroke="#223885"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </h3>

          {/* Blogs Desktop */}
          <SingleDeskBlog />
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
                          <img alt='image' src='' />
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
                          <img alt='image' src='' />
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
                          <img alt='image' src='' />
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
