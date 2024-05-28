import React, { useState, useEffect } from 'react'

// ** Hook Imports
import Link from 'next/link'

// ** Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

const SingleMobileBlog = ({ blogPosts }) => {
  // Use state to manage blog posts if they are fetched asynchronously
  const [posts, setPosts] = useState(blogPosts || [])

  // If blogPosts prop changes, update the posts state
  useEffect(() => {
    if (blogPosts) {
      setPosts(blogPosts)
    }
  }, [blogPosts])

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
        modules={[Autoplay, Pagination]}
        className='d-block d-sm-block d-md-none'
      >
        {Array.isArray(posts) &&
          posts?.map(post => (
            <SwiperSlide key={post.id}>
              <div className='card'>
                <img src={post.image} className='card-img-top' alt={post.title} />
                <div className='card-body'>
                  <h4 className='card-title'>{post.title}</h4>
                  {/* Example date and SVG icon */}
                  <span>Date of Publish</span>

                  <Link href={`/blog/${post.slug}`} className='FNV-Btn BtnPrimary BtnLarge'>
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default SingleMobileBlog
