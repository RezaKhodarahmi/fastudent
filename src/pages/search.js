import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import { Box, Typography, Button } from '@mui/material'
import { fetchSearchedCourse } from 'src/store/apps/search'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import YoutubeSection from 'src/views/youtubeSection'
import SingleCourse from 'src/views/courses/singleCourse'

// ** Loader
import Loader from 'src/views/components/loader/loader.js'

const SearchPage = () => {
  // State
  const [courses, setCourses] = useState([])
  const [results, setResults] = useState(null) // Initially null to indicate that we haven't checked yet
  const [loading, setLoading] = useState(true)

  // Hooks
  const router = useRouter()
  const dispatch = useDispatch()
  const searchResults = useSelector(state => state.search)
  const { t } = useTranslation()

  // Get the search term from the URL
  const { s: searchTerm } = router.query

  // Fetch searched courses from the backend
  useEffect(() => {
    if (searchTerm) {
      setLoading(true)
      dispatch(fetchSearchedCourse(searchTerm))
    }
  }, [searchTerm, dispatch])

  useEffect(() => {
    if (searchResults?.data?.data) {
      if (searchResults.data.data.length > 0) {
        setCourses(searchResults.data.data)
        setResults(true)
      } else {
        setResults(false)
      }
    }
    setLoading(false)
  }, [searchResults])

  const addToCart = id => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const existInCart = cartItems.includes(id)
    if (existInCart) {
      window.alert('Item is already in cart!')
    } else {
      cartItems.push(id)
      const updatedCartItems = [...cartItems]
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    }
    router.push('/cart')
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

              {loading ? (
                <Loader />
              ) : (
                <div className='tab-content' id='pills-tabContent'>
                  <div
                    className='tab-pane show active'
                    id='All-Courses'
                    role='tabpanel'
                    aria-labelledby='All-Courses-tab'
                    tabIndex='0'
                  >
                    <div className='row'>
                      {
                        results === true && courses.length ? (
                          courses.map(course => <SingleCourse key={course.id} course={course} addToCart={addToCart} />)
                        ) : results === false ? (
                          <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            sx={{
                              minHeight: '300px',
                              textAlign: 'center',
                              padding: '2rem',
                              backgroundColor: '#f9f9f9',
                              borderRadius: '8px'
                            }}
                          >
                            <Typography variant='h4' component='h2' gutterBottom>
                              Sorry, we can't find any results for your search
                            </Typography>
                            <Button
                              variant='contained'
                              color='primary'
                              onClick={() => router.push('/')}
                              sx={{ marginTop: '1rem' }}
                            >
                              Return Home
                            </Button>
                          </Box>
                        ) : null /* Don't render anything until results are determined */
                      }
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

SearchPage.guestGuard = true

export default SearchPage
