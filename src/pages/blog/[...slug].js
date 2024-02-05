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
                <h1>{post.title}</h1>

                <span>{post.date}</span>
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
