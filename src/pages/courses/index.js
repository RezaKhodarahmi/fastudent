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
import Input from '@mui/material/Input'
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
    <div className='FNV-Courses'>
      <Helmet>
        <title>Fanavaran Courses</title>
      </Helmet>
      {/* Header */}
      <section className='FNV-Header'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-6'>
              <h1>Fanavaran Courses</h1>

              <div className='FNV-HSearch input-group mb-3'>
                <Input type='text' placeholder='Search for the desired word...' className='form-control FNV-HSearchInput'
                  aria-describedby='button-addon1' fullWidth autoFocus />
                <button className='FNV-Btn BtnMedium PrimaryColor' type='button' id='button-addon1'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none'
                    stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'
                    className='feather feather-search'>
                    <circle cx='11' cy='11' r='8'></circle>
                    <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className='FNV-CourseList'>
        <div className='container'>
          <div className="row justify-content-center">

            {/* Navbar Filters */}
            <div className='col-md-9'>
              <ul class="nav justify-content-between nav-pills mb-3 p-0" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="All-Courses-tab" data-bs-toggle="pill" data-bs-target="#All-Courses"
                    type="button" role="tab" aria-controls="All-Courses" aria-selected="true">All Courses</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="Engineering-tab" data-bs-toggle="pill" data-bs-target="#Engineering"
                    type="button" role="tab" aria-controls="Engineering" aria-selected="false">Engineering</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="Project-Management-tab" data-bs-toggle="pill"
                    data-bs-target="#Project-Management" type="button" role="tab" aria-controls="Project-Management"
                    aria-selected="false">Project Management</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="Architect-tab" data-bs-toggle="pill" data-bs-target="#Architect"
                    type="button" role="tab" aria-controls="Architect" aria-selected="false">Architect</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="Technician-tab" data-bs-toggle="pill" data-bs-target="#Technician"
                    type="button" role="tab" aria-controls="Technician" aria-selected="false">Technician</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="Job-Seeker-tab" data-bs-toggle="pill" data-bs-target="#Job-Seeker"
                    type="button" role="tab" aria-controls="Job-Seeker" aria-selected="false">Job Seeker</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="Self-Employee-tab" data-bs-toggle="pill" data-bs-target="#Self-Employee"
                    type="button" role="tab" aria-controls="Self-Employee" aria-selected="false">Self Employee</button>
                </li>
              </ul>
            </div>

            {/* Filters */}
            <div className="col-md-9">
              <div className='row'>
                {/* Type */}
                <div className='col-4 col-md-4'>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Course Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                {/* Start Date */}
                <div className='col-4 col-md-4'>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Course Start Date</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                {/* Sort */}
                <div className='col-4 col-md-4'>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Display Sort</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div class="tab-content" id="pills-tabContent">
              {/* All Courses */}
              <div class="tab-pane fade show active" id="All-Courses" role="tabpanel" aria-labelledby="All-Courses-tab" tabindex="0">

                <div className='row'>
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
                            <Link className='col-md-4' href={`/courses/${course.slug}`} key={course.id} passHref>
                              <div className='card'>
                                <badge>درحال برگزاری</badge>
                                <img src={course.image} className='card-img-top' alt={course.title} />
                                <div className='card-body'>
                                  <h4 className='card-title'>{course.title}</h4>
                                  <price>$680.00</price>

                                  <div className='d-flex justify-content-between'>
                                    <Link href={`/courses/${course.slug}`} className='FNV-Btn BtnOutline PrimaryColor BtnLarge'>
                                      See Details
                                    </Link>
                                    <Link href='#' className='FNV-Btn SecondaryColor BtnLarge'>
                                      Add to Cart
                                    </Link>
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

                  <Grid container justifyContent='center' marginTop={'3rem'}>
                    <Pagination count={Math.ceil(courseData?.data?.data?.length / 5)} page={page}
                      onChange={handleChangePage} color='primary' />
                  </Grid>
                </div>

              </div>

              {/* Engineering */}
              <div class="tab-pane fade" id="Engineering" role="tabpanel" aria-labelledby="Engineering-tab" tabindex="0">
                Engineering
              </div>

              {/* Project Management */}
              <div class="tab-pane fade" id="Project-Management" role="tabpanel" aria-labelledby="Project-Management-tab"
                tabindex="0">
                Project Management
              </div>

              {/* Architect */}
              <div class="tab-pane fade" id="Architect" role="tabpanel" aria-labelledby="Architect-tab" tabindex="0">
                Architect
              </div>

              {/* Technician */}
              <div class="tab-pane fade" id="Technician" role="tabpanel" aria-labelledby="Technician-tab" tabindex="0">
                Technician
              </div>

              {/* Job Seeker */}
              <div class="tab-pane fade" id="Job-Seeker" role="tabpanel" aria-labelledby="Job-Seeker-tab" tabindex="0">
                Job Seeker
              </div>

              {/* Self Employee */}
              <div class="tab-pane fade" id="Self-Employee" role="tabpanel" aria-labelledby="Self-Employee-tab"
                tabindex="0">
                Self Employee
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
Index.guestGuard = true

export default Index