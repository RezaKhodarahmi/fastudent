import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { setCartItems } from 'src/store/apps/cart'
import axios from 'axios'
import BASE_URL from 'src/api/BASE_URL'
import feather from 'feather-icons'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import { appConfig } from 'src/configs/appConfig'
import ReactPlayer from 'react-player'

const Course = ({ course }) => {
  const [data, setData] = useState(null)
  const [courseId, setCourseId] = useState(null)
  const [selectedCycle, setSelectedCycle] = useState('0') // Add state for the selected cycle
  const [inCart, setInCart] = useState(false)
  const [inEnrolled, setIsEnrolled] = useState(false)
  const [remindedDays, setRemindedDays] = useState('0')
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    const localCartItems = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('cartItems')) : []
    dispatch(setCartItems(localCartItems || []))

    const handleStorage = () => {
      const updatedCartItems = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('cartItems')) : []
      dispatch(setCartItems(updatedCartItems || []))
    }

    window.addEventListener('storage', handleStorage)
    feather.replace()
    return () => window.removeEventListener('storage', handleStorage)
  }, [courseId, inCart, data])
  useEffect(() => {
    if (course?.data) {
      setData(course?.data)
      setCourseId(course?.data.id)
      setIsEnrolled(course.enrolled)
      setRemindedDays(course?.remainingDays)
      setSelectedCycle(course?.data?.cycles ? course?.data?.cycles[0]?.id : null) // Set the initial selected cycle to the first cycle

      // Check if the course is in the cart
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
      const existInCart = cartItems.includes(course?.data?.cycles[0]?.id)

      if (existInCart) {
        setInCart(true)
      }
    } else {
      router.replace('/404')
    }
  }, [course])

  const addToCart = id => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const existInCart = cartItems.includes(id)

    if (existInCart) {
      window.alert('Item is already in cart!')
      setInCart(true)
    } else {
      cartItems.push(id)
    }

    const updatedCartItems = [...cartItems]
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    setInCart(true)
  }

  const handleCycleChange = e => {
    setSelectedCycle(e.target.value)
  }

  return (
    <div>
      {data ? (
        <div className='FNV-SingleCourse'>
          <section className='FNV-Header'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-md-8'>
                  <div className='d-flex'>
                    <i color='#ffb600' data-feather='bookmark'></i>
                    <div className='SINGLE-COURSE-FNV-Cat-Heading'>
                      <span style={{ color: '#fff' }}>Category: </span>
                      {data?.categories
                        ? data?.categories?.map((category, index, array) => (
                            <span key={category.id}>
                              <a href={category.id} style={{ marginRight: '5px', color: '#fff' }}>
                                {category.title}
                              </a>
                              {index < array.length - 1 ? ', ' : ''}
                            </span>
                          ))
                        : 'uncategorized'}
                    </div>
                  </div>

                  <h2>{data.title}</h2>

                  <div className='FNV-Cat-Shorts'>
                    <div className='row'>
                      <div className='col-12 col-md'>
                        <i data-feather='clock'></i>{' '}
                        <h3>
                          Duration:{' '}
                          <strong>
                            {data?.cycles
                              ? data?.cycles?.map(cycle => (cycle.id == selectedCycle ? cycle.duration : null))
                              : '0 Hour'}
                          </strong>
                        </h3>
                      </div>

                      <div className='col-12 col-md'>
                        <i data-feather='play'></i>{' '}
                        <h3>
                          Start Date:{' '}
                          <strong>
                            {data?.cycles
                              ? data?.cycles?.map(cycle => (cycle.id == selectedCycle ? cycle.startDate : null))
                              : 'January'}
                          </strong>
                        </h3>
                      </div>

                      <div className='col-12 col-md'>
                        <i data-feather='calendar'></i>{' '}
                        <h3>
                          Days:{' '}
                          <strong>
                            {data?.cycles
                              ? data?.cycles.map(cycle => (cycle.id == selectedCycle ? cycle.days : null))
                              : '--'}
                          </strong>
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className='FNV-Cat-Shorts'>
                    <div className='row'>
                      <div className='col-12 col-md'>
                        <i data-feather='clock'></i>{' '}
                        <h3>
                          Time:{' '}
                          <strong>
                            {data?.cycles
                              ? data?.cycles?.map(cycle => (cycle.id == selectedCycle ? cycle.time : null))
                              : '00:00'}
                          </strong>
                        </h3>
                      </div>

                      <div className='col-12 col-md'>
                        <i data-feather='award'></i>{' '}
                        <h3>
                          Teacher:{' '}
                          <strong>
                            {data?.teachers ? (
                              <Link
                                style={{ color: '#fff' }}
                                href={`${appConfig.appUrl}/teachers/${data.teachers[0]?.id}`}
                              >
                                {data.teachers[0]?.firstName + ' ' + data.teachers[0]?.lastName}
                              </Link>
                            ) : (
                              'Fanavaran'
                            )}
                          </strong>
                        </h3>
                      </div>
                      <div className='col-12 col-md'>
                        <i data-feather='star'></i>{' '}
                        <h3>
                          Cycle:{' '}
                          <strong>
                            {data?.cycles
                              ? data?.cycles?.map(cycle => (cycle.id == selectedCycle ? cycle.name : null))
                              : ''}
                          </strong>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='FNV-Course-Detail'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12 col-md-8'>
                  <div className='FNV-Course-Card'>
                    <div className='FNV-Course-Card-Body'>
                      <h5>1. Introduction</h5>
                      <div className='accordion' id='accordionPanelsStayOpenExample'>
                        <div className='accordion-item'>
                          <h2 className='accordion-header'>
                            <button
                              className='accordion-button'
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#panelsStayOpen-collapseOne'
                              aria-expanded='true'
                              aria-controls='panelsStayOpen-collapseOne'
                            >
                              <i data-feather='play-circle'></i> 1.1 Introduction{' '}
                              <span className='badge text-bg-info'>Video</span>
                              <span className='badge text-bg-primary FNV-Badge-Preview'>
                                <i data-feather='play-circle'></i> Preview
                              </span>
                            </button>
                          </h2>
                          <div id='panelsStayOpen-collapseOne' className='accordion-collapse collapse show'>
                            <div className='accordion-body'>
                              {data?.introURL ? (
                                <ReactPlayer
                                  className='FNV-Course-Video w-100'
                                  url={data?.introURL}
                                  controls={true}
                                  // This will use the poster as a thumbnail until played
                                  width='100%'
                                  height='400px'
                                />
                              ) : null}
                              <div className='FNV-Course-Card-Content mt-2'>
                                <div
                                  className='non-clickable-content'
                                  dangerouslySetInnerHTML={{ __html: data?.description }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='FNV-Course-Card'>
                    {data?.abstract ? (
                      <div className='FNV-Course-Card-Content'>
                        <div className='non-clickable-content' dangerouslySetInnerHTML={{ __html: data?.abstract }} />
                      </div>
                    ) : null}

                    <div className='FNV-Course-Card-Body'>
                      <div className='accordion' id='accordionPanelsStayOpenExample'>
                        <div className='accordion-item'>
                          <h2 className='accordion-header'>
                            <button
                              className='accordion-button collapsed'
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#panelsStayOpen-collapseTwo'
                              aria-expanded='false'
                              aria-controls='panelsStayOpen-collapseTwo'
                            >
                              <i data-feather='file-text'></i> 1.2 Course Documents{' '}
                              <span className='badge text-bg-practice'>Practice</span>
                              <span className='badge text-bg-primary FNV-Badge-Private'>
                                <i data-feather='lock'></i> Private
                              </span>
                            </button>
                          </h2>
                          <div id='panelsStayOpen-collapseTwo' className='accordion-collapse collapse'>
                            <div className='accordion-body FNV-Locked'>
                              This lesson is private, for full access to all lessons you need to buy this course.
                            </div>
                          </div>
                        </div>
                        {data?.tests
                          ? data?.tests.map(test => (
                              <div className='accordion-item'>
                                <h2 className='accordion-header'>
                                  <button
                                    className='accordion-button collapsed'
                                    type='button'
                                    data-bs-toggle='collapse'
                                    data-bs-target={`#panelsStayOpen-collapseTest${test.id}`}
                                    aria-expanded='false'
                                    aria-controls={`panelsStayOpen-collapseTest${test.id}`}
                                  >
                                    <i data-feather='check-square'></i> {test.title}
                                    <span className='badge text-bg-quiz'>Quiz</span>
                                    {inEnrolled ? (
                                      <span className='badge text-bg-primary FNV-Badge-Private'>
                                        <i data-feather='unlock'></i>You have access
                                      </span>
                                    ) : (
                                      <span className='badge text-bg-primary FNV-Badge-Private'>
                                        <i data-feather='lock'></i> {test.needEnroll ? 'Private' : 'Public'}
                                      </span>
                                    )}
                                  </button>
                                </h2>
                                <div
                                  id={`panelsStayOpen-collapseTest${test.id}`}
                                  className='accordion-collapse collapse'
                                >
                                  <div className='accordion-body FNV-Locked'>
                                    <ul>
                                      <li>Quiz Name: {test.title}</li>
                                      <li>Quiz Time: {test.testTime} Min</li>
                                      <li>
                                        Agenda:{' '}
                                        <div
                                          className='non-clickable-content'
                                          dangerouslySetInnerHTML={{ __html: test.agenda }}
                                        />
                                      </li>
                                      {inEnrolled ? (
                                        <Link
                                          className='FNV-Btn BtnPrimary BtnSmall mt-2'
                                          href={`${data?.slug}/${test.slug}/`}
                                        >
                                          Start
                                        </Link>
                                      ) : (
                                        <Typography className='start-test-button'>
                                          This lesson is private, for full access to all lessons you need to buy this
                                          course or login to your account.
                                        </Typography>
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))
                          : null}
                        {data?.videos
                          ? data?.videos.map(video => (
                              <div className='accordion-item'>
                                <h2 className='accordion-header'>
                                  <button
                                    className='accordion-button collapsed'
                                    type='button'
                                    data-bs-toggle='collapse'
                                    data-bs-target={`#panelsStayOpen-collapseVideo${video.id}`}
                                    aria-expanded='false'
                                    aria-controls={`panelsStayOpen-collapseVideo${video.id}`}
                                  >
                                    <i data-feather='play'></i> {video.title}
                                    <span className='badge text-bg-quiz'>Video</span>
                                    {inEnrolled ? (
                                      <span className='badge text-bg-primary FNV-Badge-Private'>
                                        <i data-feather='unlock'></i>You have access
                                      </span>
                                    ) : (
                                      <span className='badge text-bg-primary FNV-Badge-Private'>
                                        <i data-feather='lock'></i> {video.needEnroll ? 'Private' : 'Public'}
                                      </span>
                                    )}
                                  </button>
                                </h2>
                                <div
                                  id={`panelsStayOpen-collapseVideo${video.id}`}
                                  className='accordion-collapse collapse'
                                >
                                  <div className='accordion-body FNV-Locked'>
                                    <ul>
                                      <li>Video title: {video.title}</li>
                                      <li>Video Time: {video.time} Min</li>
                                      {inEnrolled ? (
                                        <Link
                                          className='FNV-Btn BtnPrimary BtnSmall mt-2'
                                          href={`${data?.slug}/session/${video?.id}`}
                                        >
                                          Start watching
                                        </Link>
                                      ) : (
                                        <Typography className='start-test-button'>
                                          This lesson is private, for full access to all lessons you need to buy this
                                          course or login to your account.
                                        </Typography>
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))
                          : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-4 d-sm-none d-md-block'>
                  <div className='FNV-Course-Card'>
                    <img src={data.image} className='img-fluid' />
                    {inEnrolled ? (
                      <>
                        {' '}
                        <Typography sx={{ color: 'text.secondary' }}>You are enrolled in this course!</Typography>
                        <LinearProgress
                          value={(remindedDays / 236) * 100}
                          variant='determinate'
                          sx={{ my: 1.5, height: 10 }}
                        />
                        <Typography sx={{ color: 'text.secondary' }}>
                          <i data-feather='alert-triangle'></i>
                          {remindedDays} days remaining until your course access expired!
                        </Typography>
                      </>
                    ) : (
                      <>
                        {' '}
                        <h4>Select a Cycle</h4>
                        {data.cycles && (
                          <select value={selectedCycle} onChange={handleCycleChange} className='form-select mt-3'>
                            {data.cycles.map(cycle => (
                              <option key={cycle.id} value={cycle.id}>
                                {cycle.name}
                              </option>
                            ))}
                          </select>
                        )}
                        {inCart ? (
                          <a
                            style={{ cursor: 'pointer' }}
                            onClick={e => router.replace('/cart')}
                            className='FNV-Btn btn btn-success BtnMedium w-100'
                          >
                            <i data-feather='shopping-cart'></i> Go to cart
                          </a>
                        ) : (
                          <a
                            style={{ cursor: 'pointer' }}
                            onClick={e => addToCart(selectedCycle)}
                            className='FNV-Btn BtnPrimary BtnMedium w-100'
                          >
                            <i data-feather='shopping-cart'></i> Apply
                          </a>
                        )}
                        <a href='#' className='FNV-Btn BtnOutline PrimaryColor w-100'>
                          Request Demo Session
                        </a>
                      </>
                    )}

                    <h4>Accredited Diploma</h4>
                    <p>Offered by the Fanavaran University</p>

                    <h4>24-36 months</h4>
                    <p>72 credit hours of graduate coursework</p>

                    <h4>
                      Regular Price:{' '}
                      <price>
                        $
                        {data?.cycles
                          ? data?.cycles?.map(cycle => (cycle.id == selectedCycle ? cycle.regularPrice : null))
                          : '0'}
                      </price>
                    </h4>

                    <h4>
                      VIP Membership Price:{' '}
                      <price>
                        $
                        {data?.cycles
                          ? data?.cycles.map(cycle => (cycle.id == selectedCycle ? cycle.vipPrice : null))
                          : '0'}
                      </price>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { course } = context.query
  const { req } = context
  const userDataCookie = req.cookies.userData
  const token = req.cookies.accessToken
  var response = {}
  if (userDataCookie != null && token != null) {
    response = await axios.post(
      `${BASE_URL}/student/courses/enrolled-check`,
      { user: userDataCookie, course }, // This is the body of the request
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      }
    )
  } else {
    response = await axios.get(`${BASE_URL}/student/courses/${course}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
  }

  return { props: { course: response?.data } }
}

Course.guestGuard = true
export default Course
