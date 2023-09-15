import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Helmet } from 'react-helmet'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Pagination from '@mui/material/Pagination'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Grid, Box } from '@mui/material'
import Button from '@mui/material/Button'
import BASE_URL from '../../api/BASE_URL'
import feather from 'feather-icons'
import { fetchCourseData } from 'src/store/apps/course'
import { useSelector, useDispatch } from 'react-redux'

const Index = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedTeachers, setSelectedTeachers] = useState([])
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState([])
  const [course, setCourse] = useState([])

  //Hooks
  const dispatch = useDispatch()
  const courseData = useSelector(state => state.course)

  useEffect(() => {
    dispatch(fetchCourseData())
  }, [dispatch])

  const handleCategoryChange = event => {
    setSelectedCategories(
      event.target.checked
        ? [...selectedCategories, event.target.value]
        : selectedCategories.filter(cat => cat !== event.target.value)
    )
  }
  useEffect(() => {
    feather.replace()
    if (courseData?.data) {
      console.log(courseData?.data)
      setCategory(courseData?.data?.category)
      setCourse(courseData?.data?.data)
    }
  }, [courseData])

  const handleChangePage = (event, value) => {
    setPage(value)
  }

  const handleClearFilters = () => {
    setSelectedCategories([])
    setSelectedTeachers([])
  }
  function truncateContent(content, wordLimit) {
    const words = content.split(' ')
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'
    }

    return content
  }

  return (
    <div className='courses' style={{ marginTop: '50px', marginBottom: '50px' }}>
      <Helmet>
        <title>Fanavaran Courses</title>
      </Helmet>
      <section className='courses-FNV-Header'>
        <div className='container d-flex align-items-center h-100'>
          <div className='row'>
            <div className='col-12 page-header'>
              <h1>Fanavaran Courses</h1>
              <h2>Find an Authorized Training Partner Course</h2>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Course-List'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 d-sm-none d-md-block'>
              <Grid mb={5} mt={5} container className='match-height'>
                <h3>Filter by category:</h3>
                <FormControl fullWidth>
                  {Array.isArray(category) &&
                    category.map(category => (
                      <FormControlLabel
                        key={category.id}
                        control={
                          <Checkbox
                            color='primary'
                            checked={selectedCategories.includes(category.title)}
                            onChange={handleCategoryChange}
                            value={category.title}
                          />
                        }
                        label={category.title}
                      />
                    ))}
                </FormControl>
              </Grid>
              {/* <h3>Filter by Instructor:</h3>
              <Grid mb={5} mt={5} container className='match-height'>
                <FormControl fullWidth>
                  <InputLabel>Teacher</InputLabel>
                  <Select fullWidth multiple value={selectedTeachers} onChange={handleTeacherChange}>
                    {Array.isArray(teacher) &&
                      teacher.map(teacher => (
                        <MenuItem key={teacher.id} value={teacher.firstName + ' ' + teacher.lastName}>
                          {teacher.firstName + ' ' + teacher.lastName}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid> */}
              <Grid mt={5} container className='match-height'>
                <Button onClick={handleClearFilters} variant='contained' color='secondary'>
                  Clear filters
                </Button>
              </Grid>
            </div>

            <div className='col-sm-12 col-md-8'>
              {Array.isArray(course) ? (
                (() => {
                  const filteredCourses = course
                    .filter(
                      c =>
                        selectedCategories.length === 0 ||
                        c.categories.some(cat => selectedCategories.includes(cat.title))
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
                    filteredCourses.map(course =>
                      course.cycles?.length ? (
                        <Link href={`/courses/${course.slug}`} key={course.id} passHref>
                          <div className='FNV-Course-Card'>
                            <div className='row'>
                              <div className='col-12 col-md-4'>
                                <img src={course.image} className='img-fluid' alt={course.title} />
                              </div>
                              <div className='col-12 col-md-8'>
                                <h3>{course.title}</h3>
                                <div class='col-12 d-flex justify-content-between'>
                                  <h4>
                                    <i data-feather='clock'></i>Duration: {course?.cycles[0].duration}
                                  </h4>
                                  <h4>
                                    {' '}
                                    <i data-feather='play'></i>Start from: {course?.cycles[0].startDate}
                                  </h4>
                                  <h4>
                                    <i data-feather='calendar'></i>On: {course?.cycles[0].days}
                                  </h4>
                                </div>
                                <div
                                  className='non-clickable-content'
                                  dangerouslySetInnerHTML={{ __html: truncateContent(course.abstract, 100) }}
                                />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : null
                    )
                  ) : (
                    <Grid p={5} mt={5} mb={5} container justifyContent='center'>
                      <h3>No courses found matching the selected filters.</h3>{' '}
                    </Grid>
                  )
                })()
              ) : (
                <h3>Loading...</h3>
              )}

              <Grid container justifyContent='center'>
                <Pagination
                  count={Math.ceil(courseData?.data?.data?.length / 5)}
                  page={page}
                  onChange={handleChangePage}
                  color='primary'
                />
              </Grid>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
Index.guestGuard = true

export default Index
