import React, { useEffect, useState } from 'react'

// ** Hook Imports
import Link from 'next/link'

// ** Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// ** Import translation
import { useTranslation } from 'react-i18next'

// ** Format ISO date
import DateFormat from 'src/utils/isoDateToReadble'

import { fetchBlogData } from 'src/store/apps/blog'
import { useDispatch, useSelector } from 'react-redux'

const SingleDeskPost = () => {
  // state
  const [posts, setPosts] = useState([])

  // Hooks
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const blogData = useSelector(state => state.blog)

  useEffect(() => {
    dispatch(fetchBlogData())
  }, [dispatch])

  useEffect(() => {
    if (blogData?.data) {
      setPosts(blogData?.data?.data)
    }
  }, [blogData])

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className='d-none d-sm-none d-md-block'
      >
        {Array.isArray(posts) &&
          posts?.map(post => (
            <SwiperSlide key={post.id}>
              <div className='card'>
                <img src={post.image} className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h4 className='card-title'>{post.title}</h4>

                  <span>
                    {/* SVG and DateFormat component here */}
                    <i data-feather="calendar"></i> <DateFormat date={post.createdAt} />
                  </span>

                  <Link href={`/blog/${post.slug}`} className='FNV-Btn BtnPrimary BtnLarge'>
                    {t('blogs-section-readmore')}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default SingleDeskPost
