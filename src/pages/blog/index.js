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
    feather.replace()
    if (blogData?.data) {
      setPosts(blogData?.data?.data)
    }
  }, [blogData])

  const handleChangePage = (event, value) => {
    setPage(value)
  }

  return (
    <>
      <div className='FNV-Courses'>
        <Helmet>
          <title>{t('fanavaran-blogs-page')}</title>
        </Helmet>

        <section className='FNV-Header'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 FNV-HCard'>
                <h1>{t('fanavaran-blogs-page')}</h1>
              </div>
            </div>
          </div>
        </section>

        <section className='FNV-CourseList'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-9'></div>
              {/* <CourseFilters /> */}
              <div class='tab-content' id='pills-tabContent'>
                <div
                  class='tab-pane fade show active'
                  id='All-Courses'
                  role='tabpanel'
                  aria-labelledby='All-Courses-tab'
                  tabBlogPage='0'
                >
                  <div className='row'>
                    {Array.isArray(posts) ? (
                      (() => {
                        const filteredPosts = posts.slice((page - 1) * 5, page * 5)

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
              </div>
            </div>
          </div>
        </section>
      </div>
      <YoutubeSection />
    </>
  )
}
BlogPage.guestGuard = true

export default BlogPage
