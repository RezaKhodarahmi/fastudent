import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import BlogSection from 'src/views/blogSection'
import { fetchSearchedCourse } from 'src/store/apps/search'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import YoutubeSection from 'src/views/youtubeSection'
import SingleCourse from 'src/views/courses/singleCourse'

const SearchPage = () => {
  // State
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  // Hooks
  const router = useRouter()
  const dispatch = useDispatch()
  const searchResults = useSelector(state => state.search)
  const { t } = useTranslation()

  // Give searched string from the URL
  const { s: searchTerm } = router.query

  // Fetch Searched course from the backend
  useEffect(() => {
    dispatch(fetchSearchedCourse(searchTerm))
  }, [searchTerm, dispatch])

  useEffect(() => {
    setCourses(searchResults?.data?.data || [])
    setLoading(false)
  }, [searchResults])

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
      <div className='FNV-Courses'>
        <Helmet>
          <title>{t('fanavaran-search-result')}</title>
        </Helmet>

        <section className='FNV-CourseList'>
          <div className='container'>
            <div className='row justify-content-center'>
              <h1 className='m-3'>{t('fanavaran-search-result')}</h1>
              {!loading ? (
                <div class='tab-content' id='pills-tabContent'>
                  <div
                    class='tab-pane fade show active'
                    id='All-Courses'
                    role='tabpanel'
                    aria-labelledby='All-Courses-tab'
                    tabindex='0'
                  >
                    <div className='row'>
                      {courses?.length ? (
                        courses?.map(course => <SingleCourse key={course.id} course={course} addToCart={addToCart} />)
                      ) : (
                        <div className='no-results'>
                          <h2>Sorry, we can't find any results for your search</h2>
                          <button onClick={() => router.push('/')} className='return-home-btn'>
                            Return Home
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          </div>
        </section>
      </div>
      <YoutubeSection />
      <BlogSection />
    </>
  )
}

SearchPage.guestGuard = true

export default SearchPage
