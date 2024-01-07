import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogWithSlug } from 'src/store/apps/blog'
import styles from './SinglePost.module.css' // Import your CSS module here

const SinglePost = () => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
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
      <div className={styles.postContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <img src={post.image} alt={post.title} className={styles.image} />
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.description }} />
      </div>
    </>
  )
}

export default SinglePost
