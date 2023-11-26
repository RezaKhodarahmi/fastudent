import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Helmet } from 'react-helmet'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import CoursePagination from '@mui/material/Pagination'
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

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

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
<>
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
            <div class="tab-pane fade show active" id="All-Courses" role="tabpanel" aria-labelledby="All-Courses-tab"
              tabindex="0">

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
                  <CoursePagination count={Math.ceil(courseData?.data?.data?.length / 5)} page={page}
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

  {/* Youtube CTA */}
  <section className='FNV-YoutubeCTA'>
    <div className='container d-flex justify-content-center align-items-center flex-column'>
      <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M41.1346 4.69428C40.6507 2.85867 39.232 1.41168 37.433 0.917412C34.1463 0 20.9995 0 20.9995 0C20.9995 0 7.85323 0 4.56659 0.88263C2.80214 1.37638 1.3489 2.85894 0.864919 4.69428C0 8.04697 0 15 0 15C0 15 0 21.9881 0.864919 25.3057C1.34942 27.1411 2.76753 28.5881 4.56684 29.0823C7.88783 30 21 30 21 30C21 30 34.1463 30 37.433 29.1174C39.2323 28.6234 40.6507 27.1764 41.1352 25.341C41.9998 21.9881 41.9998 15.0353 41.9998 15.0353C41.9998 15.0353 42.0344 8.04697 41.1346 4.69428ZM16.8139 21.4235V8.57655L27.7461 15L16.8139 21.4235Z"
          fill="white" />
      </svg>

      <p>
        We at Fanavaran provide useful and diverse content for your further information<br />
        We have collected about Canadian courses, designations and certificates.<br />
        It is enough to visit the YouTube channel of the technicians.
      </p>

      <a href='https://www.youtube.com/channel/UCKbfvGZBXPn2Y3LGb9YDiIA' target='_blank'
        className='FNV-Btn BtnOutline BtnLarge'>FANAVARAN Youtube Channel</a>
    </div>
  </section>

  {/* Blog */}
  <section className='FNV-BlogTestiomonial'>
    <h3>Latest Blogs</h3>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          {/* Blogs Desktop */}
          <Swiper slidesPerView={3} spaceBetween={10} centeredSlides={false} loop={true} autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }} pagination={{
              clickable: false
            }} navigation={false} modules={[Autoplay, Pagination, Navigation]} className='d-none d-sm-none d-md-block'>
            <SwiperSlide>
              <div className='card'>
                <img src='img/course1.jpg' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h4 className='card-title'>LEED GA Exam Preparation</h4>

                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.4688 2.225V1.25C10.4688 0.99375 10.2563 0.78125 10 0.78125C9.74375 0.78125 9.53125 0.99375 9.53125 1.25V2.1875H5.46875V1.25C5.46875 0.99375 5.25625 0.78125 5 0.78125C4.74375 0.78125 4.53125 0.99375 4.53125 1.25V2.225C2.84375 2.38125 2.025 3.3875 1.9 4.88125C1.8875 5.0625 2.0375 5.2125 2.2125 5.2125H12.7875C12.9687 5.2125 13.1187 5.05625 13.1 4.88125C12.975 3.3875 12.1562 2.38125 10.4688 2.225Z"
                        fill="#003BBF" fill-opacity="0.3" />
                      <path
                        d="M12.5 6.15002H2.5C2.15625 6.15002 1.875 6.43127 1.875 6.77502V10.625C1.875 12.5 2.8125 13.75 5 13.75H10C12.1875 13.75 13.125 12.5 13.125 10.625V6.77502C13.125 6.43127 12.8438 6.15002 12.5 6.15002ZM9.275 9.36877L8.9625 9.68752H8.95625L7.0625 11.5813C6.98125 11.6625 6.8125 11.75 6.69375 11.7625L5.85 11.8875C5.54375 11.9313 5.33125 11.7125 5.375 11.4125L5.49375 10.5625C5.5125 10.4438 5.59375 10.2813 5.675 10.1938L7.575 8.30002L7.8875 7.98127C8.09375 7.77502 8.325 7.62502 8.575 7.62502C8.7875 7.62502 9.01875 7.72502 9.275 7.98127C9.8375 8.54377 9.65625 8.98752 9.275 9.36877Z"
                        fill="#003BBF" fill-opacity="0.3" />
                    </svg>

                    Date of Publish
                  </span>

                  <Link href='#' className='FNV-Btn BtnPrimary BtnLarge'>
                  Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='card'>
                <img src='img/course2.jpg' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h4 className='card-title'>LEED GA Exam Preparation</h4>

                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.4688 2.225V1.25C10.4688 0.99375 10.2563 0.78125 10 0.78125C9.74375 0.78125 9.53125 0.99375 9.53125 1.25V2.1875H5.46875V1.25C5.46875 0.99375 5.25625 0.78125 5 0.78125C4.74375 0.78125 4.53125 0.99375 4.53125 1.25V2.225C2.84375 2.38125 2.025 3.3875 1.9 4.88125C1.8875 5.0625 2.0375 5.2125 2.2125 5.2125H12.7875C12.9687 5.2125 13.1187 5.05625 13.1 4.88125C12.975 3.3875 12.1562 2.38125 10.4688 2.225Z"
                        fill="#003BBF" fill-opacity="0.3" />
                      <path
                        d="M12.5 6.15002H2.5C2.15625 6.15002 1.875 6.43127 1.875 6.77502V10.625C1.875 12.5 2.8125 13.75 5 13.75H10C12.1875 13.75 13.125 12.5 13.125 10.625V6.77502C13.125 6.43127 12.8438 6.15002 12.5 6.15002ZM9.275 9.36877L8.9625 9.68752H8.95625L7.0625 11.5813C6.98125 11.6625 6.8125 11.75 6.69375 11.7625L5.85 11.8875C5.54375 11.9313 5.33125 11.7125 5.375 11.4125L5.49375 10.5625C5.5125 10.4438 5.59375 10.2813 5.675 10.1938L7.575 8.30002L7.8875 7.98127C8.09375 7.77502 8.325 7.62502 8.575 7.62502C8.7875 7.62502 9.01875 7.72502 9.275 7.98127C9.8375 8.54377 9.65625 8.98752 9.275 9.36877Z"
                        fill="#003BBF" fill-opacity="0.3" />
                    </svg>

                    Date of Publish
                  </span>

                  <Link href='#' className='FNV-Btn BtnPrimary BtnLarge'>
                  Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='card'>
                <img src='img/course3.jpg' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h4 className='card-title'>LEED GA Exam Preparation</h4>

                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.4688 2.225V1.25C10.4688 0.99375 10.2563 0.78125 10 0.78125C9.74375 0.78125 9.53125 0.99375 9.53125 1.25V2.1875H5.46875V1.25C5.46875 0.99375 5.25625 0.78125 5 0.78125C4.74375 0.78125 4.53125 0.99375 4.53125 1.25V2.225C2.84375 2.38125 2.025 3.3875 1.9 4.88125C1.8875 5.0625 2.0375 5.2125 2.2125 5.2125H12.7875C12.9687 5.2125 13.1187 5.05625 13.1 4.88125C12.975 3.3875 12.1562 2.38125 10.4688 2.225Z"
                        fill="#003BBF" fill-opacity="0.3" />
                      <path
                        d="M12.5 6.15002H2.5C2.15625 6.15002 1.875 6.43127 1.875 6.77502V10.625C1.875 12.5 2.8125 13.75 5 13.75H10C12.1875 13.75 13.125 12.5 13.125 10.625V6.77502C13.125 6.43127 12.8438 6.15002 12.5 6.15002ZM9.275 9.36877L8.9625 9.68752H8.95625L7.0625 11.5813C6.98125 11.6625 6.8125 11.75 6.69375 11.7625L5.85 11.8875C5.54375 11.9313 5.33125 11.7125 5.375 11.4125L5.49375 10.5625C5.5125 10.4438 5.59375 10.2813 5.675 10.1938L7.575 8.30002L7.8875 7.98127C8.09375 7.77502 8.325 7.62502 8.575 7.62502C8.7875 7.62502 9.01875 7.72502 9.275 7.98127C9.8375 8.54377 9.65625 8.98752 9.275 9.36877Z"
                        fill="#003BBF" fill-opacity="0.3" />
                    </svg>

                    Date of Publish
                  </span>

                  <Link href='#' className='FNV-Btn BtnPrimary BtnLarge'>
                  Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='card'>
                <img src='img/course1.jpg' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h4 className='card-title'>LEED GA Exam Preparation</h4>

                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.4688 2.225V1.25C10.4688 0.99375 10.2563 0.78125 10 0.78125C9.74375 0.78125 9.53125 0.99375 9.53125 1.25V2.1875H5.46875V1.25C5.46875 0.99375 5.25625 0.78125 5 0.78125C4.74375 0.78125 4.53125 0.99375 4.53125 1.25V2.225C2.84375 2.38125 2.025 3.3875 1.9 4.88125C1.8875 5.0625 2.0375 5.2125 2.2125 5.2125H12.7875C12.9687 5.2125 13.1187 5.05625 13.1 4.88125C12.975 3.3875 12.1562 2.38125 10.4688 2.225Z"
                        fill="#003BBF" fill-opacity="0.3" />
                      <path
                        d="M12.5 6.15002H2.5C2.15625 6.15002 1.875 6.43127 1.875 6.77502V10.625C1.875 12.5 2.8125 13.75 5 13.75H10C12.1875 13.75 13.125 12.5 13.125 10.625V6.77502C13.125 6.43127 12.8438 6.15002 12.5 6.15002ZM9.275 9.36877L8.9625 9.68752H8.95625L7.0625 11.5813C6.98125 11.6625 6.8125 11.75 6.69375 11.7625L5.85 11.8875C5.54375 11.9313 5.33125 11.7125 5.375 11.4125L5.49375 10.5625C5.5125 10.4438 5.59375 10.2813 5.675 10.1938L7.575 8.30002L7.8875 7.98127C8.09375 7.77502 8.325 7.62502 8.575 7.62502C8.7875 7.62502 9.01875 7.72502 9.275 7.98127C9.8375 8.54377 9.65625 8.98752 9.275 9.36877Z"
                        fill="#003BBF" fill-opacity="0.3" />
                    </svg>

                    Date of Publish
                  </span>

                  <Link href='#' className='FNV-Btn BtnPrimary BtnLarge'>
                  Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Blogs Mobile */}
          <Swiper slidesPerView={1} spaceBetween={10} centeredSlides={false} loop={true} autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }} pagination={{
              clickable: true
            }} navigation={false} breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50
              }
            }} modules={[Autoplay, Pagination]} className='d-block d-sm-block d-md-none'>

            <SwiperSlide>
              <div className='card'>
                <img src='img/course1.jpg' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h4 className='card-title'>LEED GA Exam Preparation</h4>

                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.4688 2.225V1.25C10.4688 0.99375 10.2563 0.78125 10 0.78125C9.74375 0.78125 9.53125 0.99375 9.53125 1.25V2.1875H5.46875V1.25C5.46875 0.99375 5.25625 0.78125 5 0.78125C4.74375 0.78125 4.53125 0.99375 4.53125 1.25V2.225C2.84375 2.38125 2.025 3.3875 1.9 4.88125C1.8875 5.0625 2.0375 5.2125 2.2125 5.2125H12.7875C12.9687 5.2125 13.1187 5.05625 13.1 4.88125C12.975 3.3875 12.1562 2.38125 10.4688 2.225Z"
                        fill="#003BBF" fill-opacity="0.3" />
                      <path
                        d="M12.5 6.15002H2.5C2.15625 6.15002 1.875 6.43127 1.875 6.77502V10.625C1.875 12.5 2.8125 13.75 5 13.75H10C12.1875 13.75 13.125 12.5 13.125 10.625V6.77502C13.125 6.43127 12.8438 6.15002 12.5 6.15002ZM9.275 9.36877L8.9625 9.68752H8.95625L7.0625 11.5813C6.98125 11.6625 6.8125 11.75 6.69375 11.7625L5.85 11.8875C5.54375 11.9313 5.33125 11.7125 5.375 11.4125L5.49375 10.5625C5.5125 10.4438 5.59375 10.2813 5.675 10.1938L7.575 8.30002L7.8875 7.98127C8.09375 7.77502 8.325 7.62502 8.575 7.62502C8.7875 7.62502 9.01875 7.72502 9.275 7.98127C9.8375 8.54377 9.65625 8.98752 9.275 9.36877Z"
                        fill="#003BBF" fill-opacity="0.3" />
                    </svg>

                    Date of Publish
                  </span>

                  <Link href='#' className='FNV-Btn BtnPrimary BtnLarge'>
                  Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='card'>
                <img src='img/course2.jpg' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h4 className='card-title'>LEED GA Exam Preparation</h4>

                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.4688 2.225V1.25C10.4688 0.99375 10.2563 0.78125 10 0.78125C9.74375 0.78125 9.53125 0.99375 9.53125 1.25V2.1875H5.46875V1.25C5.46875 0.99375 5.25625 0.78125 5 0.78125C4.74375 0.78125 4.53125 0.99375 4.53125 1.25V2.225C2.84375 2.38125 2.025 3.3875 1.9 4.88125C1.8875 5.0625 2.0375 5.2125 2.2125 5.2125H12.7875C12.9687 5.2125 13.1187 5.05625 13.1 4.88125C12.975 3.3875 12.1562 2.38125 10.4688 2.225Z"
                        fill="#003BBF" fill-opacity="0.3" />
                      <path
                        d="M12.5 6.15002H2.5C2.15625 6.15002 1.875 6.43127 1.875 6.77502V10.625C1.875 12.5 2.8125 13.75 5 13.75H10C12.1875 13.75 13.125 12.5 13.125 10.625V6.77502C13.125 6.43127 12.8438 6.15002 12.5 6.15002ZM9.275 9.36877L8.9625 9.68752H8.95625L7.0625 11.5813C6.98125 11.6625 6.8125 11.75 6.69375 11.7625L5.85 11.8875C5.54375 11.9313 5.33125 11.7125 5.375 11.4125L5.49375 10.5625C5.5125 10.4438 5.59375 10.2813 5.675 10.1938L7.575 8.30002L7.8875 7.98127C8.09375 7.77502 8.325 7.62502 8.575 7.62502C8.7875 7.62502 9.01875 7.72502 9.275 7.98127C9.8375 8.54377 9.65625 8.98752 9.275 9.36877Z"
                        fill="#003BBF" fill-opacity="0.3" />
                    </svg>

                    Date of Publish
                  </span>

                  <Link href='#' className='FNV-Btn BtnPrimary BtnLarge'>
                  Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='card'>
                <img src='img/course3.jpg' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h4 className='card-title'>LEED GA Exam Preparation</h4>

                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.4688 2.225V1.25C10.4688 0.99375 10.2563 0.78125 10 0.78125C9.74375 0.78125 9.53125 0.99375 9.53125 1.25V2.1875H5.46875V1.25C5.46875 0.99375 5.25625 0.78125 5 0.78125C4.74375 0.78125 4.53125 0.99375 4.53125 1.25V2.225C2.84375 2.38125 2.025 3.3875 1.9 4.88125C1.8875 5.0625 2.0375 5.2125 2.2125 5.2125H12.7875C12.9687 5.2125 13.1187 5.05625 13.1 4.88125C12.975 3.3875 12.1562 2.38125 10.4688 2.225Z"
                        fill="#003BBF" fill-opacity="0.3" />
                      <path
                        d="M12.5 6.15002H2.5C2.15625 6.15002 1.875 6.43127 1.875 6.77502V10.625C1.875 12.5 2.8125 13.75 5 13.75H10C12.1875 13.75 13.125 12.5 13.125 10.625V6.77502C13.125 6.43127 12.8438 6.15002 12.5 6.15002ZM9.275 9.36877L8.9625 9.68752H8.95625L7.0625 11.5813C6.98125 11.6625 6.8125 11.75 6.69375 11.7625L5.85 11.8875C5.54375 11.9313 5.33125 11.7125 5.375 11.4125L5.49375 10.5625C5.5125 10.4438 5.59375 10.2813 5.675 10.1938L7.575 8.30002L7.8875 7.98127C8.09375 7.77502 8.325 7.62502 8.575 7.62502C8.7875 7.62502 9.01875 7.72502 9.275 7.98127C9.8375 8.54377 9.65625 8.98752 9.275 9.36877Z"
                        fill="#003BBF" fill-opacity="0.3" />
                    </svg>

                    Date of Publish
                  </span>

                  <Link href='#' className='FNV-Btn BtnPrimary BtnLarge'>
                  Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='card'>
                <img src='img/course1.jpg' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h4 className='card-title'>LEED GA Exam Preparation</h4>

                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.4688 2.225V1.25C10.4688 0.99375 10.2563 0.78125 10 0.78125C9.74375 0.78125 9.53125 0.99375 9.53125 1.25V2.1875H5.46875V1.25C5.46875 0.99375 5.25625 0.78125 5 0.78125C4.74375 0.78125 4.53125 0.99375 4.53125 1.25V2.225C2.84375 2.38125 2.025 3.3875 1.9 4.88125C1.8875 5.0625 2.0375 5.2125 2.2125 5.2125H12.7875C12.9687 5.2125 13.1187 5.05625 13.1 4.88125C12.975 3.3875 12.1562 2.38125 10.4688 2.225Z"
                        fill="#003BBF" fill-opacity="0.3" />
                      <path
                        d="M12.5 6.15002H2.5C2.15625 6.15002 1.875 6.43127 1.875 6.77502V10.625C1.875 12.5 2.8125 13.75 5 13.75H10C12.1875 13.75 13.125 12.5 13.125 10.625V6.77502C13.125 6.43127 12.8438 6.15002 12.5 6.15002ZM9.275 9.36877L8.9625 9.68752H8.95625L7.0625 11.5813C6.98125 11.6625 6.8125 11.75 6.69375 11.7625L5.85 11.8875C5.54375 11.9313 5.33125 11.7125 5.375 11.4125L5.49375 10.5625C5.5125 10.4438 5.59375 10.2813 5.675 10.1938L7.575 8.30002L7.8875 7.98127C8.09375 7.77502 8.325 7.62502 8.575 7.62502C8.7875 7.62502 9.01875 7.72502 9.275 7.98127C9.8375 8.54377 9.65625 8.98752 9.275 9.36877Z"
                        fill="#003BBF" fill-opacity="0.3" />
                    </svg>

                    Date of Publish
                  </span>

                  <Link href='#' className='FNV-Btn BtnPrimary BtnLarge'>
                  Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className='row justify-content-center'>
        <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnLarge FNV-SeeMore'>See All Blogs</Link>
      </div>
    </div>
  </section>
</>
)
}
Index.guestGuard = true

export default Index