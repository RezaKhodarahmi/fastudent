import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// ** Import Translation
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { setCartItems } from 'src/store/apps/cart'
import { getCourseWithSlug, getEnrolledCourse } from 'src/store/apps/course'
import { submitDemoRequest } from 'src/store/apps/demo-request'
import { postNewComment } from 'src/store/apps/comment'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import { appConfig } from 'src/configs/appConfig'
import ReactPlayer from 'react-player'
import { Button, TextareaAutosize, List, ListItem, ListItemText, Divider, Box, Modal, TextField } from '@mui/material'
import { useAuth } from 'src/hooks/useAuth'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

const Course = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [courseId, setCourseId] = useState(null)
  const [selectedCycle, setSelectedCycle] = useState(null) // Add state for the selected cycle
  const [inCart, setInCart] = useState(false)
  const [inEnrolled, setIsEnrolled] = useState(false)
  const [cycleId, setCycleId] = useState(null)
  const [filteredVideos, setFilteredVideos] = useState([])
  const [filteredTests, setFilteredTests] = useState([])
  const [commentSubmit, setCommentSubmit] = useState(false)
  const [remindedDays, setRemindedDays] = useState('0')
  const [user, setUser] = useState(null)
  const [newComment, setNewComment] = useState(null)
  const [succeededMessage, setSucceededMessage] = useState(null)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const courseData = useSelector(state => state.course)
  const reqCourseDemo = useSelector(state => state.reqCourseDemo)
  const userEmail = localStorage.getItem('userData') || null
  const token = localStorage.getItem('accessToken') || null
  const { course } = router.query
  const auth = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm()

  const { t } = useTranslation()
  const recaptchaRef = React.createRef()

  useEffect(() => {
    setLoading(true)
  }, [])

  useEffect(() => {
    if (reqCourseDemo?.data.message) {
      setSucceededMessage(reqCourseDemo?.data?.message)
    }
  }, [reqCourseDemo])

  useEffect(() => {
    setLoading(true)
    setUser(auth.user)
  }, [auth])

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const onReCAPTCHAChange = captchaCode => {
    // If the CAPTCHA code is verified, set the form value
    if (captchaCode) {
      setValue('recaptcha', captchaCode)
    }
  }

  useEffect(() => {
    if (userEmail != null && token != null) {
      dispatch(getEnrolledCourse({ course: course, user: userEmail }))
    } else {
      dispatch(getCourseWithSlug(course))
    }
  }, [dispatch, userEmail, token, course])

  useEffect(() => {
    if (commentSubmit && newComment) {
      dispatch(postNewComment({ content: newComment, email: JSON.parse(userEmail), courseId: courseId }))

      setCommentSubmit(false)
    }
  }, [commentSubmit, newComment])

  useEffect(() => {
    const localCartItems = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('cartItems')) : []
    dispatch(setCartItems(localCartItems || []))

    const handleStorage = () => {
      const updatedCartItems = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('cartItems')) : []
      dispatch(setCartItems(updatedCartItems || []))
    }

    window.addEventListener('storage', handleStorage)

    return () => window.removeEventListener('storage', handleStorage)
  }, [courseId, inCart, data])

  useEffect(() => {
    // if (courseData?.error?.status === 404) {
    //   router.push('/404')
    // }
    if (courseData?.data) {
      setData(courseData?.data?.data)
      setCourseId(courseData?.data?.data?.id)
      setIsEnrolled(courseData?.data?.enrolled)
      setCycleId(courseData?.data?.cycleId)
      setRemindedDays(courseData?.data?.remainingDays)
      setSelectedCycle(
        courseData?.data?.data?.cycles
          ? courseData?.data?.data?.cycles[parseInt(courseData?.data?.data?.cycles.length) - 1]?.id
          : null
      )
      const cycles = courseData?.data?.data?.cycles?.id

      // Check if the course is in the cart
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

      const existInCart = cartItems.includes(cycles)

      if (existInCart) {
        setInCart(true)
      }
      setLoading(false)
    }
  }, [courseData, setData, setCourseId, setIsEnrolled, setRemindedDays, setSelectedCycle, setInCart])

  const onSubmit = data => {
    // Ensure CAPTCHA is validated
    if (!data.recaptcha) {
      alert('Please verify you are not a robot!')

      return
    }

    const cycle = selectedCycle ? selectedCycle : cycleId
    dispatch(submitDemoRequest({ data, courseId, cycle }))
    handleClose() // Close modal after form submission
  }

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

  const handleCommentSubmit = () => {
    if (newComment) {
      setCommentSubmit(true)
    } else {
      window.alert('The comment field is empty!')
    }
  }

  useEffect(() => {
    // Filtered tests and videos based on cycleId
    const filteredTests = data?.tests?.filter(test => test.cycleId === cycleId)
    const filteredVideos = data?.videos?.filter(video => parseInt(video.cycleId) === cycleId)
    setFilteredVideos(filteredVideos)
    setFilteredTests(filteredTests)
  }, [cycleId, data])

  if (loading) return <Spinner />

  return (
    <div>
      {!loading && data ? (
        <section className='FNV-SingleCourse'>
          <div className='container'>
            <div className='row FNV-Header'>
              <div className='col-12 col-md-8'>
                <h1>{data?.title}</h1>

                <div className='FNV-Category'>
                  {/* Category Icon */}
                  <div className='FNV-Category-Icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='icon icon-tabler icon-tabler-category-2'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      fill='none'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <path d='M14 4h6v6h-6z' />
                      <path d='M4 14h6v6h-6z' />
                      <path d='M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
                      <path d='M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
                    </svg>
                  </div>
                  {/* Category Title */}
                  <div className='FNV-Cat-Heading'>
                    <span>{t('single-course-category')}:</span>
                    {data?.categories
                      ? data?.categories?.map((category, index, array) => (
                          <h2 key={category.id}>
                            <a href={category.id} style={{ marginRight: '5px', color: '#fff' }}>
                              {category.title}
                            </a>
                            {index < array.length - 1 ? ', ' : ''}
                          </h2>
                        ))
                      : 'uncategorized'}
                  </div>
                </div>

                <div className='FNV-Cat-Shorts'>
                  <div className='row'>
                    {/* Duration */}
                    <div className='col-12 col-md-4'>
                      <div className='FNV-Cat-Shorts-Icon'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='icon icon-tabler icon-tabler-hourglass-high'
                          width='44'
                          height='44'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='#2c3e50'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <path d='M6.5 7h11' />
                          <path d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z' />
                          <path d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z' />
                        </svg>

                        <h3>
                          {t('single-course-duration')}:{' '}
                          <strong>
                            {data?.cycles
                              ? data?.cycles?.map(cycle => (cycle.id == selectedCycle ? cycle.duration : null))
                              : '0 ساعت'}
                          </strong>
                        </h3>
                      </div>
                    </div>

                    {/* Start Date */}
                    <div className='col-12 col-md-4'>
                      <div className='FNV-Cat-Shorts-Icon'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='icon icon-tabler icon-tabler-player-play'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <path d='M7 4v16l13 -8z' />
                        </svg>
                        <h3>
                          {t('single-course-start-date')}:{' '}
                          <strong>
                            {data?.cycles
                              ? data?.cycles?.map(cycle => (cycle.id == selectedCycle ? cycle.startDate : null))
                              : 'January'}
                          </strong>
                        </h3>
                      </div>
                    </div>

                    {/* Days */}
                    <div className='col-12 col-md-4'>
                      <div className='FNV-Cat-Shorts-Icon'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='icon icon-tabler icon-tabler-calendar-week'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <path d='M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z' />
                          <path d='M16 3v4' />
                          <path d='M8 3v4' />
                          <path d='M4 11h16' />
                          <path d='M8 14v4' />
                          <path d='M12 14v4' />
                          <path d='M16 14v4' />
                        </svg>
                        <h3>
                          {t('single-course-days')}:{' '}
                          <strong>
                            {data?.cycles
                              ? data?.cycles.map(cycle => (cycle.id == selectedCycle ? cycle.days : null))
                              : '--'}
                          </strong>
                        </h3>
                      </div>
                    </div>

                    {/* Time */}
                    <div className='col-12 col-md-4'>
                      <div className='FNV-Cat-Shorts-Icon'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='icon icon-tabler icon-tabler-alarm-average'
                          width='44'
                          height='44'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='#2c3e50'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <path d='M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0' />
                          <path d='M7 4l-2.75 2' />
                          <path d='M17 4l2.75 2' />
                          <path d='M8 13h1l2 3l2 -6l2 3h1' />
                        </svg>
                        <h3>
                          {t('single-course-time')}:{' '}
                          <strong>
                            {data?.cycles
                              ? data?.cycles?.map(cycle => (cycle.id == selectedCycle ? cycle.time : null))
                              : '00:00'}
                          </strong>
                        </h3>
                      </div>
                    </div>

                    {/* Teacher */}
                    <div className='col-12 col-md-4'>
                      <div className='FNV-Cat-Shorts-Icon'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='icon icon-tabler icon-tabler-school'
                          width='44'
                          height='44'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='#2c3e50'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <path d='M22 9l-10 -4l-10 4l10 4l10 -4v6' />
                          <path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4' />
                        </svg>
                        <h3>
                          {t('single-course-teacher')}:{' '}
                          <strong>
                            {data?.teachers ? (
                              <Link href={`${appConfig.appUrl}/teachers/${data?.teachers[0]?.id}`} passHref>
                                {data?.teachers[0]?.firstName + ' ' + data?.teachers[0]?.lastName}
                              </Link>
                            ) : (
                              'Fanavaran'
                            )}
                          </strong>
                        </h3>
                      </div>
                    </div>

                    {/* Cycle */}
                    <div className='col-12 col-md-4'>
                      <div className='FNV-Cat-Shorts-Icon'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='icon icon-tabler icon-tabler-progress'
                          width='44'
                          height='44'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='#2c3e50'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <path d='M10 20.777a8.942 8.942 0 0 1 -2.48 -.969' />
                          <path d='M14 3.223a9.003 9.003 0 0 1 0 17.554' />
                          <path d='M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592' />
                          <path d='M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305' />
                          <path d='M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356' />
                        </svg>
                        <h3>
                          {t('single-course-cycle')}:{' '}
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
          </div>

          <div className='FNV-Course-Detail'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12 col-md-8'>
                  {/* Course Video */}
                  {data?.introURL ? (
                    <ReactPlayer className='FNV-Course-Video w-100' url={data?.introURL} controls={true} />
                  ) : null}

                  {/* Short Description */}
                  <div className='FNV-Course-Card'>
                    {/* Head */}
                    <div className='FNV-Course-Card-Head'>
                      <h4>{t('single-course-introduction')}</h4>
                    </div>
                    {/* Body */}
                    <div className='FNV-Course-Card-Body'>
                      <div className='non-clickable-content' dangerouslySetInnerHTML={{ __html: data?.description }} />
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className='FNV-Course-Card FNV-Instructor'>
                    <div className='row'>
                      <div className='col-4 col-md-2'>
                        <div className='FNV-Instructor-Image'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            class='icon icon-tabler icon-tabler-school'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            fill='none'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          >
                            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                            <path d='M22 9l-10 -4l-10 4l10 4l10 -4v6' />
                            <path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4' />
                          </svg>
                        </div>
                      </div>
                      <div className='col-8 col-md-8'>
                        <small>{t('single-course-teacher')}:</small>
                        <h4>
                          {data?.teachers ? (
                            <Link href={`${appConfig.appUrl}/teachers/${data?.teachers[0]?.id}`} passHref>
                              {data?.teachers[0]?.firstName + ' ' + data?.teachers[0]?.lastName}
                            </Link>
                          ) : (
                            'Fanavaran'
                          )}
                        </h4>
                        <p>
                          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Long Description */}
                  <div className='FNV-Course-Card'>
                    {/* Head */}
                    <div className='FNV-Course-Card-Head'>
                      <h4>{t('single-course-materials')}</h4>
                    </div>
                    {/* Body */}

                    {inEnrolled && data?.abstract ? (
                      <div className='FNV-Course-Card-Body'>
                        <div className='non-clickable-content' dangerouslySetInnerHTML={{ __html: data?.abstract }} />
                      </div>
                    ) : null}
                  </div>

                  {/* Curriculum */}
                  <div className='FNV-Course-Card'>
                    {/* Head */}
                    <div className='FNV-Course-Card-Head'>
                      <h4>{t('single-course-videos')}</h4>
                    </div>
                    {/* Body */}
                    <div className='FNV-Course-Card-Body'>
                      <div className='accordion' id='accordionPanelsStayOpenExample'>
                        {/* <div className='accordion-item'>
                          <h2 className='accordion-header'>
                            <button
                              className='accordion-button collapsed'
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#panelsStayOpen-collapseTwo'
                              aria-expanded='false'
                              aria-controls='panelsStayOpen-collapseTwo'
                            >
                              <i data-feather='file-text'></i> 1.1 Course Documents{' '}
                              <span className='badge text-bg-practice'>{t('single-course-practise')}</span>
                              <span className='badge text-bg-primary FNV-Badge-Private'>
                                <i data-feather='lock'></i> {t('single-course-locked')}
                              </span>
                            </button>
                          </h2>
                          <div id='panelsStayOpen-collapseTwo' className='accordion-collapse collapse'>
                            <div className='accordion-body FNV-Locked'>
                              {t('single-course-quiz-comment')}
                            </div>
                          </div>
                        </div> */}
                        <h4>{t('single-course-mock-exams')}</h4>
                        {filteredTests
                          ? filteredTests.map(test => (
                              <div key={test.id} className='accordion-item'>
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
                                    <span className='badge text-bg-quiz'>{t('single-course-quiz')}</span>
                                    {inEnrolled ? (
                                      <span className='badge text-bg-primary FNV-Badge-Private'>
                                        <i data-feather='unlock'></i>
                                        {t('single-course-unlocked')}
                                      </span>
                                    ) : (
                                      <span className='badge text-bg-primary FNV-Badge-Private'>
                                        <i data-feather='lock'></i>

                                        {
                                          test.needEnroll
                                            ? t('single-course-locked') // Display this if test.needEnroll is true
                                            : t('single-course-unlocked') // Display this if test.needEnroll is false
                                        }
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
                                      <li>
                                        {t('single-course-quiz-name')}: {test.title}
                                      </li>
                                      <li>
                                        {t('single-course-quiz-time')}: {test.testTime} {t('single-course-quiz-min')}
                                      </li>
                                      <li>
                                        {t('single-course-quiz-agenda')}:{' '}
                                        <div
                                          className='non-clickable-content'
                                          dangerouslySetInnerHTML={{ __html: test.agenda }}
                                        />
                                      </li>
                                      {inEnrolled ? (
                                        <Link
                                          className='FNV-Btn BtnPrimary BtnSmall mt-2'
                                          href={`${data?.slug}/${test.slug}/`}
                                          passHref
                                        >
                                          {t('single-course-quiz-start')}
                                        </Link>
                                      ) : (
                                        <Typography className='start-test-button'>
                                          {t('single-course-quiz-comment')}
                                        </Typography>
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))
                          : null}
                        <h4>{t('single-course-videos-title')}</h4>
                        {filteredVideos
                          ? filteredVideos.map(video => (
                              <div key={video.id} className='accordion-item'>
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
                                    <span className='badge text-bg-quiz'>{t('single-course-video-title')}</span>
                                    {inEnrolled ? (
                                      <span className='badge text-bg-primary FNV-Badge-Private'>
                                        <i data-feather='unlock'></i> {t('single-course-unlocked')}
                                      </span>
                                    ) : (
                                      <span className='badge text-bg-primary FNV-Badge-Private'>
                                        <i data-feather='lock'></i>
                                        {
                                          video.needEnroll
                                            ? t('single-course-locked') // Display this if test.needEnroll is true
                                            : t('single-course-unlocked') // Display this if test.needEnroll is false
                                        }
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
                                      <li>
                                        {t('single-course-video-title')}: {video.title}
                                      </li>
                                      <li>
                                        {t('single-course-video-time')}: {video.time} {t('single-course-quiz-min')}
                                      </li>
                                      {inEnrolled ? (
                                        <Link
                                          className='FNV-Btn BtnPrimary BtnSmall mt-2'
                                          href={`${data?.slug}/session/${video?.id}`}
                                        >
                                          {t('single-course-video-start')}
                                        </Link>
                                      ) : (
                                        <Typography className='start-test-button'>
                                          {t('single-course-quiz-comment')}
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

                  {/* FAQ */}
                  <div className='FNV-Course-Card'>
                    {/* Head */}
                    <div className='FNV-Course-Card-Head'>
                      <h4>{t('single-course-faq')}</h4>
                    </div>
                    {/* Body */}
                    <div className='FNV-Course-Card-Body'>
                      <div className='accordion' id='faq'>
                        {/* Item */}
                        <div className='accordion-item'>
                          <h2 className='accordion-header'>
                            <button
                              className='accordion-button collapsed'
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#QuestionOne'
                              aria-expanded='false'
                              aria-controls='QuestionOne'
                            >
                              1. {t('single-course-faq-question')}{' '}
                            </button>
                          </h2>
                          <div id='QuestionOne' className='accordion-collapse collapse'>
                            <div className='accordion-body FNV-Locked'>{t('single-course-faq-answer')}:</div>
                          </div>
                        </div>
                        {/* Item */}
                        <div className='accordion-item'>
                          <h2 className='accordion-header'>
                            <button
                              className='accordion-button collapsed'
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#QuestionTwo'
                              aria-expanded='false'
                              aria-controls='QuestionTwo'
                            >
                              2. {t('single-course-faq-question')}{' '}
                            </button>
                          </h2>
                          <div id='QuestionTwo' className='accordion-collapse collapse'>
                            <div className='accordion-body FNV-Locked'>{t('single-course-faq-answer')}:</div>
                          </div>
                        </div>
                        {/* Item */}
                        <div className='accordion-item'>
                          <h2 className='accordion-header'>
                            <button
                              className='accordion-button collapsed'
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#QuestionThree'
                              aria-expanded='false'
                              aria-controls='QuestionThree'
                            >
                              3. {t('single-course-faq-question')}{' '}
                            </button>
                          </h2>
                          <div id='QuestionThree' className='accordion-collapse collapse'>
                            <div className='accordion-body FNV-Locked'>{t('single-course-faq-answer')}:</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-4 d-sm-none d-md-block'>
                  <div className='FNV-Course-Card'>
                    <img src={data?.image} className='img-fluid' />

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
                        <h4>{t('single-course-scycle')}</h4>
                        {data?.cycles && (
                          <select value={selectedCycle} onChange={handleCycleChange} className='form-select'>
                            {[...data.cycles].reverse().map(cycle => (
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
                            <i data-feather='shopping-cart'></i> {t('single-course-gotocart')}
                          </a>
                        ) : (
                          <a
                            style={{ cursor: 'pointer' }}
                            onClick={e => addToCart(selectedCycle)}
                            className='FNV-Btn BtnPrimary BtnLarge w-100'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              class='icon icon-tabler icon-tabler-shopping-cart'
                              viewBox='0 0 24 24'
                              stroke-width='1.5'
                              fill='none'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            >
                              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                              <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
                              <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
                              <path d='M17 17h-11v-14h-2' />
                              <path d='M6 5l14 1l-1 7h-13' />
                            </svg>

                            <span>{t('single-course-enroll')}</span>
                          </a>
                        )}
                        {succeededMessage ? (
                          <p
                            style={{
                              marginTop: '5px',
                              color: '#fff',
                              backgroundColor: 'green',
                              padding: '5px',
                              borderRadius: '10px'
                            }}
                          >
                            {succeededMessage}
                          </p>
                        ) : (
                          <Button className='FNV-Btn BtnOutline PrimaryColor w-100' onClick={handleOpen}>
                            {t('single-course-demo')}
                          </Button>
                        )}
                      </>
                    )}

                    {/* Features */}
                    <div className='row'>
                      {/* SVG */}
                      <div className='col-3 col-md-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='icon icon-tabler icon-tabler-certificate'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <path d='M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
                          <path d='M13 17.5v4.5l2 -1.5l2 1.5v-4.5' />
                          <path d='M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73' />
                          <path d='M6 9l12 0' />
                          <path d='M6 12l3 0' />
                          <path d='M6 15l2 0' />
                        </svg>
                      </div>
                      {/* Title */}
                      <div className='col-9 col-md-10'>
                        <h5>{t('single-course-diploma')}</h5>
                        <p>{t('single-course-diploma-desc')}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className='row'>
                      {/* SVG */}
                      <div className='col-3 col-md-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='icon icon-tabler icon-tabler-timeline'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <path d='M4 16l6 -7l5 5l5 -6' />
                          <path d='M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
                          <path d='M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
                          <path d='M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
                          <path d='M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
                        </svg>
                      </div>
                      {/* Title */}
                      <div className='col-9 col-md-10'>
                        <h5>{t('single-course-months')}</h5>
                        <p>{t('single-course-months-desc')}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className='row FNV-Price'>
                      {/* SVG */}
                      <div className='col-3 col-md-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='icon icon-tabler icon-tabler-currency-dollar'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <path d='M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2' />
                          <path d='M12 3v3m0 12v3' />
                        </svg>
                      </div>
                      {/* Title */}
                      <div className='col-9 col-md-10'>
                        <h5>
                          {t('single-course-regular-price')}:{' '}
                          <price>
                            $
                            {data?.cycles
                              ? data?.cycles?.map(cycle => (cycle.id == selectedCycle ? cycle.regularPrice : null))
                              : '0'}
                          </price>
                        </h5>
                      </div>
                    </div>

                    {/* VIP Membership */}
                    <div className='row FNV-VIP'>
                      {/* SVG */}
                      <div className='col-3 col-md-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='icon icon-tabler icon-tabler-crown'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <path d='M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z' />
                        </svg>
                      </div>
                      {/* Title */}
                      <div className='col-9 col-md-10'>
                        <h5>
                          {t('single-course-vip-price')}:{' '}
                          <price>
                            $
                            {data?.cycles
                              ? data?.cycles.map(cycle => (cycle.id == selectedCycle ? cycle.vipPrice : null))
                              : '0'}
                          </price>
                        </h5>
                        <p>{t('single-course-vip-price-desc')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {!loading && (
        <>
          <Box className='container' sx={{ maxWidth: 600, mx: 'auto', my: 4 }}>
            {user ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
                <TextareaAutosize
                  minRows={3}
                  style={{ marginBottom: '1rem', padding: '12px' }}
                  value={newComment}
                  onChange={e => setNewComment(e.target.value)}
                  placeholder='Write a comment...'
                />
                <Button variant='contained' onClick={handleCommentSubmit} style={{ backgroundColor: '#003BBF' }}>
                  Post
                </Button>
              </Box>
            ) : (
              <Button
                variant='outlined'
                style={{ backgroundColor: '#003BBF', color: '#fff' }}
                onClick={() => {
                  router.push(`/login/?returnUrl=/courses/${data?.slug}`)
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon icon-tabler icon-tabler-login'
                  width='44'
                  height='44'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='#2c3e50'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2' />
                  <path d='M21 12h-13l3 -3' />
                  <path d='M11 15l-3 -3' />
                </svg>
                Login to Post a Comment
              </Button>
            )}
            <div style={{ paddingTop: '15px' }}>
              <List component='nav' aria-label='comments'>
                {data?.comments?.map(comment => (
                  <React.Fragment key={comment.id}>
                    <div>
                      <b>{comment?.user?.firstName + ' ' + comment?.user?.lastName}</b>
                    </div>
                    <ListItem alignItems='flex-start'>
                      <ListItemText primary={comment.content} />
                    </ListItem>
                    {comment.replies && comment.replies.length > 0 && (
                      <>
                        <p>Answer:</p>
                        <List component='div' disablePadding>
                          {comment.replies.map(reply => (
                            <ListItem key={reply.id} sx={{ pl: 4, px: 10 }}>
                              <ListItemText primary={reply.content} />
                            </ListItem>
                          ))}
                        </List>
                      </>
                    )}
                    <Divider variant='inset' component='li' />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </Box>

          {/* Related Courses */}
          {/* <section className='FNV-Course-Related'>
            <h3>Related Courses</h3>
            <div className='container'>
              <div className='row'>
                <div className='col-12'></div>
              </div>
            </div>
          </section> */}
        </>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4
          }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='name'
            label='Your Name'
            name='name'
            autoComplete='name'
            autoFocus
            {...register('name', { required: true })}
          />

          {errors.name && <span>This field is required</span>}
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            {...register('email', { required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <TextField
            margin='normal'
            required
            fullWidth
            id='phone'
            label='Phone'
            name='phone'
            autoComplete='phone'
            {...register('phone', { required: true })}
          />
          {errors.phone && <span>This field is required</span>}

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey='6LeP1jojAAAAAJMGRkY1WeJuBybdzqeRwZNErOrc'
            onChange={onReCAPTCHAChange}
          />

          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Send Request
          </Button>
        </Box>
      </Modal>
    </div>
  )
}

Course.guestGuard = true

export default Course
