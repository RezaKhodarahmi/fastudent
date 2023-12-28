import React, { useEffect, useState } from 'react'

// ** Hook Imports
import Link from 'next/link'

// ** Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// ** Format ISO date
import DateFormat from 'src/utils/isoDateToReadble'

import { fetchBlogData } from 'src/store/apps/blog'
import { useDispatch, useSelector } from 'react-redux'

const SingleDeskPost = () => {
  // state
  const [posts, setPosts] = useState()

  // Hooks
  const dispatch = useDispatch()

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
        pagination={{
          clickable: false
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className='d-none d-sm-none d-md-block'
      >
        {posts && (
          <>
            {posts?.map(post => (
              <SwiperSlide>
                <div className='card'>
                  <img src={post.image} className='card-img-top' alt='...' />
                  <div className='card-body'>
                    <h4 className='card-title'>{post.title}</h4>

                    <span>
                      <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M10.4688 2.225V1.25C10.4688 0.99375 10.2563 0.78125 10 0.78125C9.74375 0.78125 9.53125 0.99375 9.53125 1.25V2.1875H5.46875V1.25C5.46875 0.99375 5.25625 0.78125 5 0.78125C4.74375 0.78125 4.53125 0.99375 4.53125 1.25V2.225C2.84375 2.38125 2.025 3.3875 1.9 4.88125C1.8875 5.0625 2.0375 5.2125 2.2125 5.2125H12.7875C12.9687 5.2125 13.1187 5.05625 13.1 4.88125C12.975 3.3875 12.1562 2.38125 10.4688 2.225Z'
                          fill='#003BBF'
                          fill-opacity='0.3'
                        />
                        <path
                          d='M12.5 6.15002H2.5C2.15625 6.15002 1.875 6.43127 1.875 6.77502V10.625C1.875 12.5 2.8125 13.75 5 13.75H10C12.1875 13.75 13.125 12.5 13.125 10.625V6.77502C13.125 6.43127 12.8438 6.15002 12.5 6.15002ZM9.275 9.36877L8.9625 9.68752H8.95625L7.0625 11.5813C6.98125 11.6625 6.8125 11.75 6.69375 11.7625L5.85 11.8875C5.54375 11.9313 5.33125 11.7125 5.375 11.4125L5.49375 10.5625C5.5125 10.4438 5.59375 10.2813 5.675 10.1938L7.575 8.30002L7.8875 7.98127C8.09375 7.77502 8.325 7.62502 8.575 7.62502C8.7875 7.62502 9.01875 7.72502 9.275 7.98127C9.8375 8.54377 9.65625 8.98752 9.275 9.36877Z'
                          fill='#003BBF'
                          fill-opacity='0.3'
                        />
                      </svg>
                      <DateFormat date={post.createdAt} />
                    </span>

                    <Link href={`/blog/${post.slug}`} className='FNV-Btn BtnPrimary BtnLarge'>
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </>
  )
}

export default SingleDeskPost
