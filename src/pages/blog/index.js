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
      <div className='FNV-BlogPage'>
        <Helmet>
          <title>{t('Fanavaran Blogs Archhive')}</title>
        </Helmet>

        <section className='FNV-Header'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 FNV-HCard'>
                <h5 class='text-white my-2'>{t('Read with us')}</h5>
                <h1>{t('Fanavaran Blog Archive')}</h1>
              </div>
            </div>
          </div>
        </section>

        <section className='FNV-BlogList'>
          <div className='container'>
            <div className='row'>
              {Array.isArray(posts) ? (
                (() => {
                  const filteredPosts = posts.slice((page - 1) * 12, page * 12)

                  return filteredPosts.length ? (
                    filteredPosts.map(post => (
                      <>
                        <SinglePost post={post} />
                      </>
                    ))
                  ) : (
                    <Grid p={5} mt={5} mb={5} container justifyContent='center'>
                      <h3>No Post found matching the selected filters.</h3>
                    </Grid>
                  )
                })()
              ) : (
                <h3>Loading...</h3>
              )}

              <Grid container justifyContent='center' marginTop={'3rem'}>
                <PostsPagination
                  count={Math.ceil(blogData?.data?.data?.length / 5)}
                  page={page}
                  onChange={handleChangePage}
                  color='primary'
                />
              </Grid>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
BlogPage.guestGuard = true

export default BlogPage
