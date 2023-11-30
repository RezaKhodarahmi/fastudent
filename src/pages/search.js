// pages/search.js

import React from 'react'
import { useRouter } from 'next/router'
import BlogSection from 'src/views/blogSection'

const SearchPage = () => {
  const router = useRouter()
  const { s: searchTerm } = router.query

  // You can use 'searchTerm' to fetch and display search results

  return (
    <>
      <div className='FNV-Courses'>
        <Helmet>
          <title>{t('fanavaran-courses')}</title>
        </Helmet>

        {/* Header */}
        <SearchBox title={t('fanavaran-courses')} />

        <section className='FNV-CourseList'>
          <div className='container'>
            <div className='row justify-content-center'>
              {/* Navbar Filters */}
              <div className='col-md-9'>
                <ul class='nav justify-content-between nav-pills mb-3 p-0' id='pills-tab' role='tablist'>
                  <li class='nav-item' role='presentation'>
                    <button
                      onClick={e => handleClearFilters()}
                      class='nav-link '
                      id='All-Courses-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#All-Courses'
                      type='button'
                      role='tab'
                      aria-controls='All-Courses'
                      aria-selected='true'
                    >
                      {t('all-courses')}
                    </button>
                  </li>
                  {categories &&
                    categories?.map(item => (
                      <li class='nav-item' role='presentation'>
                        <button
                          onClick={e => handleCategoryChange(item.id)}
                          className={`nav-link ${item.id == selectedCategories.id ? '' : null}`}
                          id='All-Courses-tab'
                          data-bs-toggle='pill'
                          data-bs-target='#All-Courses'
                          type='button'
                          role='tab'
                          aria-controls='All-Courses'
                          aria-selected='true'
                        >
                          {t(item.title)}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Filters */}
              <div className='col-md-9'>
                <div className='row'>
                  {/* Type */}
                  <div className='col-4 col-md-4'>
                    <select class='form-select' aria-label='Default select example'>
                      <option selected>Course Type</option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                  </div>

                  {/* Start Date */}
                  <div className='col-4 col-md-4'>
                    <select class='form-select' aria-label='Default select example'>
                      <option selected>Course Start Date</option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                  </div>

                  {/* Sort */}
                  <div className='col-4 col-md-4'>
                    <select class='form-select' aria-label='Default select example'>
                      <option selected>Display Sort</option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Tab Content */}
              <div class='tab-content' id='pills-tabContent'>
                {/* All Courses */}
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
                          filteredCourses.map(course =>
                            course.cycles?.length ? (
                              <Link className='col-md-4' href={`/courses/${course.slug}`} key={course.id} passHref>
                                <div className='card'>
                                  <badge>درحال برگزاری</badge>{' '}
                                  {/* Assuming this is a custom component or a placeholder */}
                                  <img src={course.image} className='card-img-top' alt={course.title} />
                                  <div className='card-body'>
                                    <h4 className='card-title'>{course.title}</h4>
                                    <price>{course.cycles[parseInt(course.cycles?.length) - 1]?.regularPrice}</price>
                                    <div className='d-flex justify-content-between'>
                                      <Link
                                        href={`/courses/${course.slug}`}
                                        className='FNV-Btn BtnOutline PrimaryColor BtnLarge'
                                      >
                                        See Details
                                      </Link>

                                      <Link
                                        href='#'
                                        onClick={e => {
                                          e.preventDefault()
                                          addToCart(course.cycles[parseInt(course.cycles?.length) - 1].id)
                                        }}
                                        className='FNV-Btn SecondaryColor BtnLarge'
                                      >
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

                {/* Engineering */}
                <div
                  class='tab-pane fade'
                  id='Engineering'
                  role='tabpanel'
                  aria-labelledby='Engineering-tab'
                  tabindex='0'
                >
                  Engineering
                </div>

                {/* Project Management */}
                <div
                  class='tab-pane fade'
                  id='Project-Management'
                  role='tabpanel'
                  aria-labelledby='Project-Management-tab'
                  tabindex='0'
                >
                  Project Management
                </div>

                {/* Architect */}
                <div class='tab-pane fade' id='Architect' role='tabpanel' aria-labelledby='Architect-tab' tabindex='0'>
                  Architect
                </div>

                {/* Technician */}
                <div
                  class='tab-pane fade'
                  id='Technician'
                  role='tabpanel'
                  aria-labelledby='Technician-tab'
                  tabindex='0'
                >
                  Technician
                </div>

                {/* Job Seeker */}
                <div
                  class='tab-pane fade'
                  id='Job-Seeker'
                  role='tabpanel'
                  aria-labelledby='Job-Seeker-tab'
                  tabindex='0'
                >
                  Job Seeker
                </div>

                {/* Self Employee */}
                <div
                  class='tab-pane fade'
                  id='Self-Employee'
                  role='tabpanel'
                  aria-labelledby='Self-Employee-tab'
                  tabindex='0'
                >
                  Self Employee
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Youtube CTA */}
      <YoutubeSection />

      {/* Blog */}
      <BlogSection />
    </>
  )
}

SearchPage.guestGuard = true

export default SearchPage
