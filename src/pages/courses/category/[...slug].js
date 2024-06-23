import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import CoursePagination from '@mui/material/Pagination'
import { Grid, LinearProgress } from '@mui/material'
import { useRouter } from 'next/router'
import { fetchCourseData } from 'src/store/apps/course'

import { useSelector, useDispatch } from 'react-redux'
import SearchBox from 'src/views/searchBar.js'
import YoutubeSection from 'src/views/youtubeSection'
import SingleCourse from 'src/views/courses/singleCourse'

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
  const [course, setCourse] = useState([])
  const [title, setTitle] = useState('فناوران')

  // Hooks
  const router = useRouter()
  const dispatch = useDispatch()
  const courseData = useSelector(state => state.course)
  const { t } = useTranslation()
  const { slug } = router.query

  useEffect(() => {
    dispatch(fetchCourseData())
  }, [])

  useEffect(() => {
    if (courseData?.data) {
      const { slug } = router.query

      const filteredCourses = courseData?.data?.data?.filter(course =>
        course.categories.some(category => category.slug === slug[0])
      )
      setCourse(filteredCourses)
    }
  }, [courseData, router.query])

  useEffect(() => {
    if (slug) {
      switch (slug[0]) {
        case 'project-managment':
          setTitle('مدیریت پروژه')
          break
        case 'courses':
          setTitle('فناوران')
          break
        case 'energy':
          setTitle('انرژی')
          break
        case 'home-inspection':
          setTitle('بازرسی ساختمان')
          break
        case 'technician':
          setTitle('تکنسین')
          break
        case 'Accounting':
          setTitle('حسابداری')
          break
        case 'self-employee':
          setTitle('خوداشتغالی فنی')
          break
        case 'recorded-courses':
          setTitle('ضبط شده')
          break
        case 'english-language':
          setTitle('زبان انگلیسی')
          break
        case 'Design':
          setTitle('طراحی')
          break
        case 'job-seekers':
          setTitle('جوینده شغل')
          break
        case 'finance-and-management':
          setTitle('مدیریت مالی')
          break

        case 'architecture':
          setTitle('معماری')
          break

        case 'engineering':
          setTitle('مهندسی')
          break

        case 'Engineering.':
          setTitle('مهندسی')
          break

        case 'peng-technical-exams':
          setTitle('آزمون های تکنیکال P.Eng')
          break

        default:
          setTitle('فناوران')
      }
    }
  }, [slug, setTitle])

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

  return (
    <>
      <div className='FNV-Courses-page FNV-Courses'>
        <Helmet>
          <title>دوره های {title}</title>
        </Helmet>

        <SearchBox title={`دوره های ${title}`} />

        <section className='FNV-CourseList'>
          <div className='container'>
            <div className='row justify-content-center'>
              {/* <CourseFilters /> */}
              <div className='tab-content' id='pills-tabContent'>
                <div
                  className='tab-pane fade show active'
                  id='All-Courses'
                  role='tabpanel'
                  aria-labelledby='All-Courses-tab'
                  tabIndex='0'
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
                          .slice((page - 1) * 5, page * 15)

                        return filteredCourses.length ? (
                          filteredCourses
                            .filter(item => item.id != 150000)
                            .map(course =>
                              course.cycles?.length ? (
                                <SingleCourse key={course.id} course={course} addToCart={addToCart} />
                              ) : null
                            )
                        ) : (
                          <Grid p={5} mt={5} mb={5} container justifyContent='center'>
                            <h3>No courses found matching the selected filters.</h3>
                          </Grid>
                        )
                      })()
                    ) : (
                      <LinearProgress />
                    )}

                    <Grid container justifyContent='center' marginTop={'3rem'}>
                      <CoursePagination
                        style={{ direction: 'ltr' }}
                        count={Math.ceil(course?.length / 5)}
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
