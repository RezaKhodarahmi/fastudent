import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import CoursePagination from '@mui/material/Pagination'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import feather from 'feather-icons'
import { fetchCourseData } from 'src/store/apps/course'
import { fetchCategoryData } from 'src/store/apps/category'
import { useSelector, useDispatch } from 'react-redux'
import SearchBox from 'src/views/searchBar.js'
import YoutubeSection from 'src/views/youtubeSection'
import SingleCourse from 'src/views/courses/singleCourse'
import CategoryFilter from 'src/views/filters/categoryFilters'

// ** Hook Imports
import Link from 'next/link'

// ** Import blog section
import SingleDeskBlog from 'src/views/blog/singleDeskPost'
import SingleMobileBlog from 'src/views/blog/singleMobileBlog'

// ** Import Translation
import { useTranslation } from 'react-i18next'

const Index = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedTeachers, setSelectedTeachers] = useState([])
  const [page, setPage] = useState(1)
  const [categories, setCategories] = useState([])
  const [course, setCourse] = useState([])

  //Hooks
  const router = useRouter()
  const dispatch = useDispatch()
  const courseData = useSelector(state => state.course)
  const categoryData = useSelector(state => state.category)
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchCategoryData())
    dispatch(fetchCourseData())
  }, [])

  useEffect(() => {
    if (categoryData?.data) {
      setCategories(categoryData?.data?.data)
    }
  }, [categoryData])

  const handleCategoryChange = id => {
    setSelectedCategories(
      course.includes(id)
        ? course.filter(catId => catId != id) // toggle category
        : [...course, id] // add new category
    )
  }
  useEffect(() => {
    if (typeof feather !== 'undefined' && feather !== null) {
      feather.replace();
    }
    if (courseData?.data) {
      setCourse(courseData?.data?.data)
    }
  }, [courseData])

  const handleChangePage = (event, value) => {
    setPage(value)
  }

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

  const handleClearFilters = () => {
    setSelectedCategories([])
    setSelectedTeachers([])
  }

  return (
    <>
      <div className='FNV-Courses-page FNV-Courses'>
        <Helmet>
          <title>{t('fanavaran-courses')}</title>
        </Helmet>

        <SearchBox title={t('fanavaran-courses')} />

        <section className='FNV-CourseList'>
          <div className='container'>
            <div className='row justify-content-center'>
              <CategoryFilter
                categories={categories}
                handleClearFilters={handleClearFilters}
                selectedCategories={selectedCategories}
                handleCategoryChange={handleCategoryChange}
              />

              {/* <CourseFilters /> */}
              <div class='tab-content' id='pills-tabContent'>
                <div
                  class='tab-pane fade show active'
                  id='All-Courses'
                  role='tabpanel'
                  aria-labelledby='All-Courses-tab'
                  tabindex='0'
                >
                  <div className='row'>
                    {Array.isArray(course) ? (
                      (() => {
                        const filteredCourses = course
                          .filter(
                            c =>
                              selectedCategories.length === 0 ||
                              c.categories.some(cat => selectedCategories.includes(cat.id))
                          )
                          .filter(
                            c =>
                              selectedTeachers.length === 0 ||
                              c.teachers.some(teacher =>
                                selectedTeachers.includes(teacher.firstName + ' ' + teacher.lastName)
                              )
                          )
                          .slice((page - 1) * 5, page * 5)

                        return filteredCourses.length ? (
                          filteredCourses
                            .filter(item => item.id != 150000)
                            .map(course =>
                              course.cycles?.length ? (
                                <>
                                  <SingleCourse key={course.id} course={course} addToCart={addToCart} />
                                </>
                              ) : null
                            )
                        ) : (
                          <Grid p={5} mt={5} mb={5} container justifyContent='center'>
                            <h3>No courses found matching the selected filters.</h3>
                          </Grid>
                        )
                      })()
                    ) : (
                      <h3>Loading...</h3>
                    )}

                    <Grid container justifyContent='center' marginTop={'3rem'}>
                      <CoursePagination
                        count={Math.ceil(courseData?.data?.data?.length / 5)}
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
      {/* Blog */}
      <section className='FNV-BlogTestiomonial'>
        <h3>{t('Blogs')}</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              {/* Blogs Desktop */}
              <SingleDeskBlog />
              {/* Blogs Mobile */}
              <SingleMobileBlog />
            </div>
          </div>

          <div className='row justify-content-center'>
            <Link href='/blog' className='FNV-Btn BtnOutline PrimaryColor BtnLarge FNV-SeeMore'>
              {t('see-all-posts')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
Index.guestGuard = true

export default Index
