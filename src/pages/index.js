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

// ** Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// ** Import blog section
import SingleDeskBlog from 'src/views/blog/singleDeskPost'
import SingleMobileBlog from 'src/views/blog/singleMobileBlog'

// ** Import course section
import CourseDeskSingle from 'src/views/swiper/courseDeskSingle'
import CourseMobileSingle from 'src/views/swiper/courseMobileSingle'

// ** Import Webinars section
import WebinarsSection from 'src/views/swiper/webinarDeskSingle'

// ** Categories Section
import CategoriesSection from 'src/views/categoriesSection'
const Home = () => {
  const [courses, setCourses] = useState([])

  //Hooks
  const router = useRouter()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const courseData = useSelector(state => state.course)

  useEffect(() => {
    dispatch(fetchCourseData())
  }, [])

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
        <h3>New Courses</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              {/* Courses Desktop */}
              <CourseDeskSingle courses={courses} />
              {/* Courses Mobile */}
              <CourseMobileSingle courses={courses} />
            </div>
          </div>
        </div>
      </section>

      {/* New Webinars */}
      <WebinarsSection />

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
            We at Fanavaran provide useful and diverse content for your further information
            <br />
            We have collected about Canadian courses, designations and certificates.
            <br />
            It is enough to visit the YouTube channel of the technicians.
          </p>

          <Link
            href='https://www.youtube.com/channel/UCKbfvGZBXPn2Y3LGb9YDiIA'
            target='_blank'
            className='FNV-Btn BtnOutline BtnLarge'
          >
            FANAVARAN Youtube Channel
          </Link>
        </div>
      </section>

      {/* Blog */}
      <section className='FNV-BlogTestiomonial'>
        <h3>{t('Blogs')}</h3>
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
            <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnLarge FNV-SeeMore'>
              See All Blogs
            </Link>
          </div>
        </div>

        <h3>Testimonials</h3>
        <div className='container FNV-Testimonials'>
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
                modules={[Autoplay]}
                className='FNV-NewCoursesSwiper d-none d-sm-none d-md-block'
              >
                {/* Slider */}
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-body'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                      <div className='d-flex flex-row w-100'>
                        <div className='col-3'>
                          <img src='img/user.png' />
                        </div>
                        <div className='col-9'>
                          <span className='FNV-PersonName'>Name</span>
                          <span className='FNV-CourseName'>Course Name</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slider */}
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-body'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                      <div className='d-flex flex-row w-100'>
                        <div className='col-3'>
                          <img src='img/user.png' />
                        </div>
                        <div className='col-9'>
                          <span className='FNV-PersonName'>Name</span>
                          <span className='FNV-CourseName'>Course Name</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slider */}
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-body'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                      <div className='d-flex flex-row w-100'>
                        <div className='col-3'>
                          <img src='img/user.png' />
                        </div>
                        <div className='col-9'>
                          <span className='FNV-PersonName'>Name</span>
                          <span className='FNV-CourseName'>Course Name</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slider */}
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-body'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                      <div className='d-flex flex-row w-100'>
                        <div className='col-3'>
                          <img src='img/user.png' />
                        </div>
                        <div className='col-9'>
                          <span className='FNV-PersonName'>Name</span>
                          <span className='FNV-CourseName'>Course Name</span>
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
                centeredSlides={false}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
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
                {/* Slider */}
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-body'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                      <div className='d-flex flex-row w-100'>
                        <div className='col-3'>
                          <img src='img/user.png' />
                        </div>
                        <div className='col-9'>
                          <span className='FNV-PersonName'>Name</span>
                          <span className='FNV-CourseName'>Course Name</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slider */}
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-body'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                      <div className='d-flex flex-row w-100'>
                        <div className='col-3'>
                          <img src='img/user.png' />
                        </div>
                        <div className='col-9'>
                          <span className='FNV-PersonName'>Name</span>
                          <span className='FNV-CourseName'>Course Name</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slider */}
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-body'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                      <div className='d-flex flex-row w-100'>
                        <div className='col-3'>
                          <img src='img/user.png' />
                        </div>
                        <div className='col-9'>
                          <span className='FNV-PersonName'>Name</span>
                          <span className='FNV-CourseName'>Course Name</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slider */}
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-body'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                      <div className='d-flex flex-row w-100'>
                        <div className='col-3'>
                          <img src='img/user.png' />
                        </div>
                        <div className='col-9'>
                          <span className='FNV-PersonName'>Name</span>
                          <span className='FNV-CourseName'>Course Name</span>
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
