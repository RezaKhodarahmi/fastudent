import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// ** Hook Imports
import Link from 'next/link'
import Head from 'next/head'

import { useDispatch, useSelector } from 'react-redux'
import { getBlogWithSlug } from 'src/store/apps/blog'
import styles from './SinglePost.module.css' // Import your CSS module here


// ** Import Translation
import { useTranslation } from 'react-i18next'

// ** Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// ** Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// ** Import blog section
import SingleDeskBlog from 'src/views/blog/singleDeskPost'
import SingleMobileBlog from 'src/views/blog/singleMobileBlog'

const SinglePost = () => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const router = useRouter()
  const { slug } = router.query
  const postData = useSelector(state => state.blog)

  useEffect(() => {
    if (slug) {
      dispatch(getBlogWithSlug(slug))
      setLoading(true)
    }
  }, [slug, dispatch])

  useEffect(() => {
    if (postData?.data?.data) {
      setPost(postData.data.data)
      setLoading(false)
    }
  }, [postData])

  if (loading || !post) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>{post.metaTitle}</title>
        <meta name='description' content={post.metaDescription} />
        <meta name='keywords' content={post.keywords} />
      </Head>

      <section className='FNV-Single-Post'>
        <div className="container">
          <div className='row'>
            <div className='col-12 FNV-FeatureImage'>
              <img src={post.image} alt={post.title} />

              <div className='FNV-Meta'>
                <div className='FNV-Meta-Title'>
                  <h1>{post.title}</h1>
                </div>

                <span className='FNV-Author'>
                  {/* Logo or Image */}
                  <div className='FNV-Author-Image'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-pentagon" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M13.163 2.168l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-3.064 9.43a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0z" />
                      <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                      <path d="M6 20.703v-.703a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.707" />
                    </svg>
                  </div>
                  {/* Name */}
                  <div className='FNV-Author-Name'>
                    <span>Author: <strong>Author Name</strong></span>
                  </div>

                  {/* Logo or Image */}
                  <div className='FNV-Author-Image'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-time" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                      <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                      <path d="M15 3v4" />
                      <path d="M7 3v4" />
                      <path d="M3 11h16" />
                      <path d="M18 16.496v1.504l1 1" />
                    </svg>
                  </div>
                  {/* Name */}
                  <div className='FNV-Author-Name'>
                    <span>Date: <strong>Post Publishing Date</strong></span>
                  </div>

                  {/* Logo or Image */}
                  <div className='FNV-Author-Image'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                    </svg>
                  </div>
                  {/* Name */}
                  <div className='FNV-Author-Name'>
                    <span>Comments: <strong>Count of Comments</strong></span>
                  </div>
                </span>
              </div>
            </div>

            <div className='col-12 FNV-Content'>
              <div dangerouslySetInnerHTML={{ __html: post.description }} />
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className='FNV-Blog-Related'>
        <h3>{t('Continue Reading')}</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              {/* Blogs Desktop */}
              {/* <SingleDeskBlog /> */}
              {/* Blogs Mobile */}
              {/* <SingleMobileBlog /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
SinglePost.guestGuard = true

export default SinglePost
