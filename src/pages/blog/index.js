import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import PostsPagination from '@mui/material/Pagination'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import feather from 'feather-icons'
import { fetchBlogData } from 'src/store/apps/blog'
import { useSelector, useDispatch } from 'react-redux'
import YoutubeSection from 'src/views/youtubeSection'
import SinglePost from 'src/views/blog/singleBlog'
import Link from 'next/link'

// Import Translation
import { useTranslation } from 'react-i18next'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const BlogPage = () => {
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState([])

  //Hooks
  const router = useRouter()
  const dispatch = useDispatch()
  const blogData = useSelector(state => state.blog)

  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchBlogData())
  }, [])

  useEffect(() => {
    // if (typeof feather !== 'undefined' && feather !== null) {
    //   feather.replace();
    // }

    if (blogData?.data) {
      setPosts(blogData?.data?.data)
    }
  }, [blogData])

  const handleChangePage = (event, value) => {
    setPage(value)
  }

  return (
    <>
      <section class='FNV-Blogs'>
        <head>
          <title>Fanavaran Blogs Archive</title>
        </head>

        <header>
          <h2>{t('blog-read-with-us')}</h2>
          <h1>{t('blog-archive')}</h1>
        </header>

        <div className='container'>
          <main className='row'>
            <aside className='col-12 col-md-3'>
              <Link href='#'>
                <span>{t('fanavaran-ads')}</span>
                <span>370 x 424</span>
              </Link>
            </aside>

            <article className='col-12 col-md-9'>
              <div className='row'>
                {Array.isArray(posts) ? (
                  (() => {
                    const filteredPosts = posts.slice((page - 1) * 12, page * 12)

                    return filteredPosts.length ? (
                      filteredPosts.map(post => <SinglePost key={post.id} post={post} />)
                    ) : (
                      <div className='grid p-5 mt-5 mb-5 container justify-content-center'>
                        <h3>No Post found matching the selected filters.</h3>
                      </div>
                    )
                  })()
                ) : (
                  <h3>Loading...</h3>
                )}
              </div>
            </article>

            <div className='col-md-12'>
              <PostsPagination
                count={Math.ceil(blogData?.data?.data?.length / 5)}
                page={page}
                onChange={handleChangePage}
                color='primary'
                dir='ltr'
              />
            </div>
          </main>
        </div>
      </section>
    </>
  )
}

BlogPage.guestGuard = true

export default BlogPage
