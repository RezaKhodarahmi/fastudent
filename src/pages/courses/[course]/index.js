import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format, parseISO, isWithinInterval, intervalToDuration } from 'date-fns'

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
  const [faq, setFaqs] = useState([])
  const [newComment, setNewComment] = useState(null)
  const [succeededMessage, setSucceededMessage] = useState(null)
  const [open, setOpen] = useState(false)
  const [countdown, setCountdown] = useState('')
  const [direction, setDirection] = useState('rtl')

  const [courseType, setType] = useState('1')
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
  const getDirection = localStorage.getItem('i18nextLng')

  useEffect(() => {
    setLoading(true)
  }, [])

  useEffect(() => {
    if (getDirection == 'fa') {
      setDirection('rtl')
    } else {
      setDirection('ltr')
    }
  }, [getDirection])

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
    if (course != null) {
      if (userEmail != null && token != null) {
        dispatch(getEnrolledCourse({ course: course, user: userEmail }))
      } else {
        dispatch(getCourseWithSlug(course))
      }
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
    if (courseData?.data?.data && courseData?.data?.data?.id) {
      setData(courseData?.data?.data)
      setFaqs(courseData?.data?.faq)
      setType(courseData?.data?.data?.type)
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

  const reNewCourse = id => {
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
    if (courseData?.data?.data?.accessAll) {
      // Filtered tests and videos based on cycleId
      const filteredTests = data?.tests || []
      const filteredVideos = data?.videos || []

      setFilteredVideos(filteredVideos)
      setFilteredTests(filteredTests)
    } else {
      // Filtered tests and videos based on cycleId
      const filteredTests = data?.tests || []
      const filteredVideos = data?.videos?.filter(video => parseInt(video.cycleId) == cycleId)

      setFilteredVideos(filteredVideos)
      setFilteredTests(filteredTests)
    }
  }, [cycleId, data])

  // Determines if the current date is within the discount period
  const isDiscountActive = cycle => {
    const today = new Date()
    if (!cycle.discountDate || !cycle.discountDateEnd) {
      return false // Return false or handle as you see fit
    }

    try {
      const discountStart = parseISO(cycle.discountDate)
      const discountEnd = parseISO(cycle.discountDateEnd)

      return isWithinInterval(today, { start: discountStart, end: discountEnd })
    } catch (error) {
      return false // Return false or handle error as needed
    }
  }

  const updateCountdown = cycle => {
    const now = new Date()
    const discountEnd = parseISO(cycle.discountDateEnd)
    if (now <= discountEnd) {
      const duration = intervalToDuration({ start: now, end: discountEnd })
      const formatted = `<span><span class="num">${duration.days}</span> <span>Day</span></span><span><span class="num">${duration.hours}</span><span>Hr</span></span><span><span class="num">${duration.minutes}</span><span>Min</span></span><span><span class="num">${duration.seconds}</span><span>Sec</span></span>`
      setCountdown(formatted)
    } else {
      setCountdown('Discount period has ended.')
    }
  }

  useEffect(() => {
    const cycle = data?.cycles?.find(c => c.id === selectedCycle)

    if (cycle && isDiscountActive(cycle)) {
      const timer = setInterval(() => updateCountdown(cycle), 1000)

      return () => clearInterval(timer)
    }
  }, [selectedCycle, data])

  if (loading) return <Spinner />

  return (
    <div>
      {loading && !data ? (
        <LinearProgress />
      ) : (
        data && (
          <>
            <main className='FNV-SingleCourse'>
              <section className='FNV-SingleCourse-Details'>
                <div className='FNV-Canvas-Top'>
                  <svg viewBox='0 0 1454 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M1453 0.999987L1 99L1 0.999987L1453 0.999987Z' fill='white' stroke='white' />
                  </svg>
                </div>

                {/* Course Section */}
                <div className='container'>
                  <div className='row FNV-SingleCourse-SD'>
                    <article className='col-12 col-md-8'>
                      <header>
                        <h1>{data?.title}</h1>
                      </header>

                      <h2>
                        <svg width='26' height='27' viewBox='0 0 26 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M1 1.01562H10V10.0156H1V1.01562ZM16 1.01562H25V10.0156H16V1.01562ZM1 16.0156H10V25.0156H1V16.0156ZM16 20.5156C16 21.7091 16.4741 22.8537 17.318 23.6976C18.1619 24.5415 19.3065 25.0156 20.5 25.0156C21.6935 25.0156 22.8381 24.5415 23.682 23.6976C24.5259 22.8537 25 21.7091 25 20.5156C25 19.3222 24.5259 18.1776 23.682 17.3336C22.8381 16.4897 21.6935 16.0156 20.5 16.0156C19.3065 16.0156 18.1619 16.4897 17.318 17.3336C16.4741 18.1776 16 19.3222 16 20.5156Z'
                            stroke='#0074FF'
                            strokeWidth='2'
                            stroke-linecap='round'
                          />
                        </svg>

                        <span>
                          {t('single-course-category')}:
                          {data?.categories
                            ? data?.categories?.map((category, index, array) => (
                              <small key={category.id}>
                                <a href={category.id}>{category.title}</a>
                                {index < array.length - 1 ? ', ' : ''}
                              </small>
                            ))
                            : 'uncategorized'}
                        </span>
                      </h2>

                      <divider></divider>

                      <div className='row'>
                        {/* Duration */}
                        <div className='col-6'>
                          {/* Icon */}
                          <svg
                            width='30'
                            height='28'
                            viewBox='0 0 30 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <g id='Group 17906'>
                              <g id='Vector'>
                                <mask
                                  id='path-1-outside-1_377_4128'
                                  maskUnits='userSpaceOnUse'
                                  x='0'
                                  y='0'
                                  width='30'
                                  height='28'
                                  fill='black'
                                >
                                  <rect fill='white' width='30' height='28' />
                                  <path d='M16.6015 1C16.4587 1 16.3217 1.05674 16.2207 1.15775C16.1197 1.25875 16.0629 1.39574 16.0629 1.53858C16.0629 1.68142 16.1197 1.81841 16.2207 1.91941C16.3217 2.02041 16.4587 2.07716 16.6015 2.07716C18.9277 2.07847 21.202 2.76449 23.141 4.04967C25.0799 5.33485 26.5977 7.16234 27.505 9.30429C28.4124 11.4462 28.6691 13.8079 28.2433 16.0948C27.8175 18.3817 26.728 20.4926 25.1105 22.1645C23.4931 23.8363 21.4193 24.9951 19.1477 25.4963C16.8762 25.9975 14.5073 25.819 12.3365 24.983C10.1658 24.147 8.28908 22.6905 6.94048 20.7951C5.59188 18.8997 4.83102 16.6493 4.75278 14.3244L7.10098 16.0317C7.21668 16.1156 7.36098 16.1502 7.50213 16.1277C7.64328 16.1052 7.76972 16.0276 7.85364 15.9119C7.93756 15.7962 7.97208 15.6519 7.94961 15.5107C7.92713 15.3696 7.84951 15.2431 7.73381 15.1592L4.32461 12.6818C4.26737 12.6399 4.20243 12.6097 4.13351 12.593C4.06459 12.5763 3.99305 12.5734 3.92299 12.5844C3.85293 12.5954 3.78574 12.6201 3.72527 12.6572C3.66479 12.6942 3.61223 12.7428 3.5706 12.8002L1.10391 16.2094C1.06204 16.2667 1.03188 16.3316 1.01517 16.4005C0.998455 16.4695 0.99552 16.541 1.00653 16.6111C1.01754 16.6811 1.04228 16.7483 1.07932 16.8088C1.11636 16.8693 1.16499 16.9218 1.2224 16.9635C1.31406 17.0298 1.4243 17.0656 1.53747 17.0658C1.62268 17.0657 1.70665 17.0454 1.78249 17.0065C1.85833 16.9677 1.92386 16.9114 1.97371 16.8423L3.68909 14.4833C3.79831 17.0138 4.64857 19.4564 6.13422 21.5077C7.61988 23.5591 9.67547 25.1287 12.0456 26.0217C14.4158 26.9147 16.9961 27.0917 19.466 26.5307C21.9359 25.9697 24.1866 24.6954 25.9384 22.8661C27.6902 21.0368 28.866 18.7332 29.3197 16.2413C29.7734 13.7495 29.4851 11.1792 28.4904 8.84987C27.4958 6.52052 25.8387 4.53472 23.7251 3.13914C21.6114 1.74357 19.1343 0.999718 16.6015 1Z' />
                                </mask>
                                <path
                                  d='M16.6015 1C16.4587 1 16.3217 1.05674 16.2207 1.15775C16.1197 1.25875 16.0629 1.39574 16.0629 1.53858C16.0629 1.68142 16.1197 1.81841 16.2207 1.91941C16.3217 2.02041 16.4587 2.07716 16.6015 2.07716C18.9277 2.07847 21.202 2.76449 23.141 4.04967C25.0799 5.33485 26.5977 7.16234 27.505 9.30429C28.4124 11.4462 28.6691 13.8079 28.2433 16.0948C27.8175 18.3817 26.728 20.4926 25.1105 22.1645C23.4931 23.8363 21.4193 24.9951 19.1477 25.4963C16.8762 25.9975 14.5073 25.819 12.3365 24.983C10.1658 24.147 8.28908 22.6905 6.94048 20.7951C5.59188 18.8997 4.83102 16.6493 4.75278 14.3244L7.10098 16.0317C7.21668 16.1156 7.36098 16.1502 7.50213 16.1277C7.64328 16.1052 7.76972 16.0276 7.85364 15.9119C7.93756 15.7962 7.97208 15.6519 7.94961 15.5107C7.92713 15.3696 7.84951 15.2431 7.73381 15.1592L4.32461 12.6818C4.26737 12.6399 4.20243 12.6097 4.13351 12.593C4.06459 12.5763 3.99305 12.5734 3.92299 12.5844C3.85293 12.5954 3.78574 12.6201 3.72527 12.6572C3.66479 12.6942 3.61223 12.7428 3.5706 12.8002L1.10391 16.2094C1.06204 16.2667 1.03188 16.3316 1.01517 16.4005C0.998455 16.4695 0.99552 16.541 1.00653 16.6111C1.01754 16.6811 1.04228 16.7483 1.07932 16.8088C1.11636 16.8693 1.16499 16.9218 1.2224 16.9635C1.31406 17.0298 1.4243 17.0656 1.53747 17.0658C1.62268 17.0657 1.70665 17.0454 1.78249 17.0065C1.85833 16.9677 1.92386 16.9114 1.97371 16.8423L3.68909 14.4833C3.79831 17.0138 4.64857 19.4564 6.13422 21.5077C7.61988 23.5591 9.67547 25.1287 12.0456 26.0217C14.4158 26.9147 16.9961 27.0917 19.466 26.5307C21.9359 25.9697 24.1866 24.6954 25.9384 22.8661C27.6902 21.0368 28.866 18.7332 29.3197 16.2413C29.7734 13.7495 29.4851 11.1792 28.4904 8.84987C27.4958 6.52052 25.8387 4.53472 23.7251 3.13914C21.6114 1.74357 19.1343 0.999718 16.6015 1Z'
                                  fill='#0074FF'
                                />
                                <path
                                  d='M16.6015 1C16.4587 1 16.3217 1.05674 16.2207 1.15775C16.1197 1.25875 16.0629 1.39574 16.0629 1.53858C16.0629 1.68142 16.1197 1.81841 16.2207 1.91941C16.3217 2.02041 16.4587 2.07716 16.6015 2.07716C18.9277 2.07847 21.202 2.76449 23.141 4.04967C25.0799 5.33485 26.5977 7.16234 27.505 9.30429C28.4124 11.4462 28.6691 13.8079 28.2433 16.0948C27.8175 18.3817 26.728 20.4926 25.1105 22.1645C23.4931 23.8363 21.4193 24.9951 19.1477 25.4963C16.8762 25.9975 14.5073 25.819 12.3365 24.983C10.1658 24.147 8.28908 22.6905 6.94048 20.7951C5.59188 18.8997 4.83102 16.6493 4.75278 14.3244L7.10098 16.0317C7.21668 16.1156 7.36098 16.1502 7.50213 16.1277C7.64328 16.1052 7.76972 16.0276 7.85364 15.9119C7.93756 15.7962 7.97208 15.6519 7.94961 15.5107C7.92713 15.3696 7.84951 15.2431 7.73381 15.1592L4.32461 12.6818C4.26737 12.6399 4.20243 12.6097 4.13351 12.593C4.06459 12.5763 3.99305 12.5734 3.92299 12.5844C3.85293 12.5954 3.78574 12.6201 3.72527 12.6572C3.66479 12.6942 3.61223 12.7428 3.5706 12.8002L1.10391 16.2094C1.06204 16.2667 1.03188 16.3316 1.01517 16.4005C0.998455 16.4695 0.99552 16.541 1.00653 16.6111C1.01754 16.6811 1.04228 16.7483 1.07932 16.8088C1.11636 16.8693 1.16499 16.9218 1.2224 16.9635C1.31406 17.0298 1.4243 17.0656 1.53747 17.0658C1.62268 17.0657 1.70665 17.0454 1.78249 17.0065C1.85833 16.9677 1.92386 16.9114 1.97371 16.8423L3.68909 14.4833C3.79831 17.0138 4.64857 19.4564 6.13422 21.5077C7.61988 23.5591 9.67547 25.1287 12.0456 26.0217C14.4158 26.9147 16.9961 27.0917 19.466 26.5307C21.9359 25.9697 24.1866 24.6954 25.9384 22.8661C27.6902 21.0368 28.866 18.7332 29.3197 16.2413C29.7734 13.7495 29.4851 11.1792 28.4904 8.84987C27.4958 6.52052 25.8387 4.53472 23.7251 3.13914C21.6114 1.74357 19.1343 0.999718 16.6015 1Z'
                                  stroke='#0074FF'
                                  strokeWidth='0.8'
                                  mask='url(#path-1-outside-1_377_4128)'
                                />
                              </g>
                              <g id='Vector_2'>
                                <mask
                                  id='path-2-outside-2_377_4128'
                                  maskUnits='userSpaceOnUse'
                                  x='15.0625'
                                  y='3.23145'
                                  width='9'
                                  height='15'
                                  fill='black'
                                >
                                  <rect fill='white' x='15.0625' y='3.23145' width='9' height='15' />
                                  <path d='M16.3318 14.3998L22.2562 17.6313C22.3391 17.6751 22.4317 17.6974 22.5255 17.6959C22.6465 17.699 22.7651 17.6612 22.8621 17.5886C22.959 17.5161 23.0287 17.413 23.0598 17.2959C23.0909 17.1789 23.0817 17.0548 23.0336 16.9437C22.9855 16.8325 22.9014 16.7408 22.7948 16.6834L17.1397 13.6054V4.77002C17.1397 4.62718 17.083 4.49019 16.982 4.38919C16.881 4.28819 16.744 4.23145 16.6011 4.23145C16.4583 4.23145 16.3213 4.28819 16.2203 4.38919C16.1193 4.49019 16.0626 4.62718 16.0626 4.77002V13.9259C16.0612 14.0217 16.0855 14.1161 16.1328 14.1994C16.1801 14.2827 16.2489 14.3519 16.3318 14.3998Z' />
                                </mask>
                                <path
                                  d='M16.3318 14.3998L22.2562 17.6313C22.3391 17.6751 22.4317 17.6974 22.5255 17.6959C22.6465 17.699 22.7651 17.6612 22.8621 17.5886C22.959 17.5161 23.0287 17.413 23.0598 17.2959C23.0909 17.1789 23.0817 17.0548 23.0336 16.9437C22.9855 16.8325 22.9014 16.7408 22.7948 16.6834L17.1397 13.6054V4.77002C17.1397 4.62718 17.083 4.49019 16.982 4.38919C16.881 4.28819 16.744 4.23145 16.6011 4.23145C16.4583 4.23145 16.3213 4.28819 16.2203 4.38919C16.1193 4.49019 16.0626 4.62718 16.0626 4.77002V13.9259C16.0612 14.0217 16.0855 14.1161 16.1328 14.1994C16.1801 14.2827 16.2489 14.3519 16.3318 14.3998Z'
                                  fill='#0074FF'
                                />
                                <path
                                  d='M16.3318 14.3998L22.2562 17.6313C22.3391 17.6751 22.4317 17.6974 22.5255 17.6959C22.6465 17.699 22.7651 17.6612 22.8621 17.5886C22.959 17.5161 23.0287 17.413 23.0598 17.2959C23.0909 17.1789 23.0817 17.0548 23.0336 16.9437C22.9855 16.8325 22.9014 16.7408 22.7948 16.6834L17.1397 13.6054V4.77002C17.1397 4.62718 17.083 4.49019 16.982 4.38919C16.881 4.28819 16.744 4.23145 16.6011 4.23145C16.4583 4.23145 16.3213 4.28819 16.2203 4.38919C16.1193 4.49019 16.0626 4.62718 16.0626 4.77002V13.9259C16.0612 14.0217 16.0855 14.1161 16.1328 14.1994C16.1801 14.2827 16.2489 14.3519 16.3318 14.3998Z'
                                  stroke='#0074FF'
                                  strokeWidth='0.8'
                                  mask='url(#path-2-outside-2_377_4128)'
                                />
                              </g>
                              <g id='Vector_3'>
                                <mask
                                  id='path-3-outside-3_377_4128'
                                  maskUnits='userSpaceOnUse'
                                  x='11.8555'
                                  y='0.42041'
                                  width='3'
                                  height='3'
                                  fill='black'
                                >
                                  <rect fill='white' x='11.8555' y='0.42041' width='3' height='3' />
                                  <path d='M13.3852 2.4975C13.4324 2.49877 13.4796 2.49333 13.5253 2.48134C13.6579 2.44803 13.7728 2.36553 13.8469 2.25057C13.9209 2.13562 13.9484 1.99681 13.9239 1.86231C13.8993 1.7278 13.8245 1.60767 13.7147 1.52626C13.6048 1.44486 13.4681 1.40829 13.3323 1.42396C13.1965 1.43963 13.0717 1.50638 12.9833 1.61066C12.8948 1.71494 12.8494 1.84895 12.8561 1.98551C12.8629 2.12207 12.9213 2.25096 13.0195 2.34603C13.1178 2.44111 13.2485 2.49526 13.3852 2.4975Z' />
                                </mask>
                                <path
                                  d='M13.3852 2.4975C13.4324 2.49877 13.4796 2.49333 13.5253 2.48134C13.6579 2.44803 13.7728 2.36553 13.8469 2.25057C13.9209 2.13562 13.9484 1.99681 13.9239 1.86231C13.8993 1.7278 13.8245 1.60767 13.7147 1.52626C13.6048 1.44486 13.4681 1.40829 13.3323 1.42396C13.1965 1.43963 13.0717 1.50638 12.9833 1.61066C12.8948 1.71494 12.8494 1.84895 12.8561 1.98551C12.8629 2.12207 12.9213 2.25096 13.0195 2.34603C13.1178 2.44111 13.2485 2.49526 13.3852 2.4975Z'
                                  fill='#0074FF'
                                />
                                <path
                                  d='M13.3852 2.4975C13.4324 2.49877 13.4796 2.49333 13.5253 2.48134C13.6579 2.44803 13.7728 2.36553 13.8469 2.25057C13.9209 2.13562 13.9484 1.99681 13.9239 1.86231C13.8993 1.7278 13.8245 1.60767 13.7147 1.52626C13.6048 1.44486 13.4681 1.40829 13.3323 1.42396C13.1965 1.43963 13.0717 1.50638 12.9833 1.61066C12.8948 1.71494 12.8494 1.84895 12.8561 1.98551C12.8629 2.12207 12.9213 2.25096 13.0195 2.34603C13.1178 2.44111 13.2485 2.49526 13.3852 2.4975Z'
                                  stroke='#0074FF'
                                  strokeWidth='0.8'
                                  mask='url(#path-3-outside-3_377_4128)'
                                />
                              </g>
                              <g id='Vector_4'>
                                <mask
                                  id='path-4-outside-4_377_4128'
                                  maskUnits='userSpaceOnUse'
                                  x='8.87024'
                                  y='1.6499'
                                  width='3'
                                  height='3'
                                  fill='black'
                                >
                                  <rect fill='white' x='8.87024' y='1.6499' width='3' height='3' />
                                  <path d='M10.4079 3.73841C10.5025 3.73825 10.5953 3.71317 10.6772 3.66571C10.7415 3.63204 10.7984 3.5857 10.8444 3.52947C10.8904 3.47325 10.9245 3.4083 10.9448 3.33854C10.965 3.26878 10.9709 3.19564 10.9622 3.12354C10.9534 3.05143 10.9301 2.98184 10.8938 2.91895C10.8574 2.85607 10.8087 2.80118 10.7506 2.7576C10.6925 2.71402 10.6262 2.68265 10.5556 2.66537C10.4851 2.64809 10.4118 2.64525 10.3401 2.65704C10.2684 2.66883 10.1999 2.695 10.1386 2.73397C10.0362 2.79337 9.9562 2.88485 9.91101 2.99427C9.86583 3.1037 9.85795 3.22496 9.88861 3.3393C9.91927 3.45365 9.98674 3.55471 10.0806 3.62685C10.1745 3.699 10.2895 3.7382 10.4079 3.73841Z' />
                                </mask>
                                <path
                                  d='M10.4079 3.73841C10.5025 3.73825 10.5953 3.71317 10.6772 3.66571C10.7415 3.63204 10.7984 3.5857 10.8444 3.52947C10.8904 3.47325 10.9245 3.4083 10.9448 3.33854C10.965 3.26878 10.9709 3.19564 10.9622 3.12354C10.9534 3.05143 10.9301 2.98184 10.8938 2.91895C10.8574 2.85607 10.8087 2.80118 10.7506 2.7576C10.6925 2.71402 10.6262 2.68265 10.5556 2.66537C10.4851 2.64809 10.4118 2.64525 10.3401 2.65704C10.2684 2.66883 10.1999 2.695 10.1386 2.73397C10.0362 2.79337 9.9562 2.88485 9.91101 2.99427C9.86583 3.1037 9.85795 3.22496 9.88861 3.3393C9.91927 3.45365 9.98674 3.55471 10.0806 3.62685C10.1745 3.699 10.2895 3.7382 10.4079 3.73841Z'
                                  fill='#0074FF'
                                />
                                <path
                                  d='M10.4079 3.73841C10.5025 3.73825 10.5953 3.71317 10.6772 3.66571C10.7415 3.63204 10.7984 3.5857 10.8444 3.52947C10.8904 3.47325 10.9245 3.4083 10.9448 3.33854C10.965 3.26878 10.9709 3.19564 10.9622 3.12354C10.9534 3.05143 10.9301 2.98184 10.8938 2.91895C10.8574 2.85607 10.8087 2.80118 10.7506 2.7576C10.6925 2.71402 10.6262 2.68265 10.5556 2.66537C10.4851 2.64809 10.4118 2.64525 10.3401 2.65704C10.2684 2.66883 10.1999 2.695 10.1386 2.73397C10.0362 2.79337 9.9562 2.88485 9.91101 2.99427C9.86583 3.1037 9.85795 3.22496 9.88861 3.3393C9.91927 3.45365 9.98674 3.55471 10.0806 3.62685C10.1745 3.699 10.2895 3.7382 10.4079 3.73841Z'
                                  stroke='#0074FF'
                                  strokeWidth='0.8'
                                  mask='url(#path-4-outside-4_377_4128)'
                                />
                              </g>
                              <g id='Vector_5'>
                                <mask
                                  id='path-5-outside-5_377_4128'
                                  maskUnits='userSpaceOnUse'
                                  x='6.29968'
                                  y='3.62939'
                                  width='3'
                                  height='3'
                                  fill='black'
                                >
                                  <rect fill='white' x='6.29968' y='3.62939' width='3' height='3' />
                                  <path d='M7.83869 5.70655C7.96337 5.70645 8.08415 5.6631 8.18044 5.58389C8.27672 5.50467 8.34254 5.39451 8.36666 5.27219C8.39079 5.14986 8.37172 5.02296 8.31273 4.91312C8.25373 4.80328 8.15845 4.71732 8.04315 4.66989C7.92784 4.62246 7.79965 4.6165 7.68045 4.65304C7.56124 4.68957 7.4584 4.76633 7.38947 4.87022C7.32054 4.97412 7.2898 5.09871 7.30248 5.22274C7.31515 5.34677 7.37047 5.46256 7.45899 5.55036C7.55997 5.65052 7.69647 5.70666 7.83869 5.70655Z' />
                                </mask>
                                <path
                                  d='M7.83869 5.70655C7.96337 5.70645 8.08415 5.6631 8.18044 5.58389C8.27672 5.50467 8.34254 5.39451 8.36666 5.27219C8.39079 5.14986 8.37172 5.02296 8.31273 4.91312C8.25373 4.80328 8.15845 4.71732 8.04315 4.66989C7.92784 4.62246 7.79965 4.6165 7.68045 4.65304C7.56124 4.68957 7.4584 4.76633 7.38947 4.87022C7.32054 4.97412 7.2898 5.09871 7.30248 5.22274C7.31515 5.34677 7.37047 5.46256 7.45899 5.55036C7.55997 5.65052 7.69647 5.70666 7.83869 5.70655Z'
                                  fill='#0074FF'
                                />
                                <path
                                  d='M7.83869 5.70655C7.96337 5.70645 8.08415 5.6631 8.18044 5.58389C8.27672 5.50467 8.34254 5.39451 8.36666 5.27219C8.39079 5.14986 8.37172 5.02296 8.31273 4.91312C8.25373 4.80328 8.15845 4.71732 8.04315 4.66989C7.92784 4.62246 7.79965 4.6165 7.68045 4.65304C7.56124 4.68957 7.4584 4.76633 7.38947 4.87022C7.32054 4.97412 7.2898 5.09871 7.30248 5.22274C7.31515 5.34677 7.37047 5.46256 7.45899 5.55036C7.55997 5.65052 7.69647 5.70666 7.83869 5.70655Z'
                                  stroke='#0074FF'
                                  strokeWidth='0.8'
                                  mask='url(#path-5-outside-5_377_4128)'
                                />
                              </g>
                              <g id='Vector_6'>
                                <mask
                                  id='path-6-outside-6_377_4128'
                                  maskUnits='userSpaceOnUse'
                                  x='4.31165'
                                  y='6.18262'
                                  width='3'
                                  height='3'
                                  fill='black'
                                >
                                  <rect fill='white' x='4.31165' y='6.18262' width='3' height='3' />
                                  <path d='M5.60058 8.19842C5.68204 8.24674 5.77516 8.27188 5.86987 8.27113C5.98825 8.27092 6.10327 8.23171 6.19713 8.15957C6.29099 8.08742 6.35847 7.98636 6.38912 7.87202C6.41978 7.75767 6.41191 7.63641 6.36672 7.52699C6.32154 7.41757 6.24156 7.32608 6.13916 7.26668C6.07786 7.22771 6.00931 7.20155 5.93763 7.18976C5.86596 7.17797 5.79264 7.1808 5.72209 7.19808C5.65154 7.21536 5.58521 7.24674 5.5271 7.29032C5.46899 7.3339 5.42029 7.38878 5.38394 7.45167C5.34759 7.51455 5.32433 7.58415 5.31558 7.65625C5.30682 7.72836 5.31273 7.80149 5.33297 7.87125C5.35321 7.94102 5.38735 8.00596 5.43334 8.06219C5.47933 8.11841 5.53622 8.16475 5.60058 8.19842Z' />
                                </mask>
                                <path
                                  d='M5.60058 8.19842C5.68204 8.24674 5.77516 8.27188 5.86987 8.27113C5.98825 8.27092 6.10327 8.23171 6.19713 8.15957C6.29099 8.08742 6.35847 7.98636 6.38912 7.87202C6.41978 7.75767 6.41191 7.63641 6.36672 7.52699C6.32154 7.41757 6.24156 7.32608 6.13916 7.26668C6.07786 7.22771 6.00931 7.20155 5.93763 7.18976C5.86596 7.17797 5.79264 7.1808 5.72209 7.19808C5.65154 7.21536 5.58521 7.24674 5.5271 7.29032C5.46899 7.3339 5.42029 7.38878 5.38394 7.45167C5.34759 7.51455 5.32433 7.58415 5.31558 7.65625C5.30682 7.72836 5.31273 7.80149 5.33297 7.87125C5.35321 7.94102 5.38735 8.00596 5.43334 8.06219C5.47933 8.11841 5.53622 8.16475 5.60058 8.19842Z'
                                  fill='#0074FF'
                                />
                                <path
                                  d='M5.60058 8.19842C5.68204 8.24674 5.77516 8.27188 5.86987 8.27113C5.98825 8.27092 6.10327 8.23171 6.19713 8.15957C6.29099 8.08742 6.35847 7.98636 6.38912 7.87202C6.41978 7.75767 6.41191 7.63641 6.36672 7.52699C6.32154 7.41757 6.24156 7.32608 6.13916 7.26668C6.07786 7.22771 6.00931 7.20155 5.93763 7.18976C5.86596 7.17797 5.79264 7.1808 5.72209 7.19808C5.65154 7.21536 5.58521 7.24674 5.5271 7.29032C5.46899 7.3339 5.42029 7.38878 5.38394 7.45167C5.34759 7.51455 5.32433 7.58415 5.31558 7.65625C5.30682 7.72836 5.31273 7.80149 5.33297 7.87125C5.35321 7.94102 5.38735 8.00596 5.43334 8.06219C5.47933 8.11841 5.53622 8.16475 5.60058 8.19842Z'
                                  stroke='#0074FF'
                                  strokeWidth='0.8'
                                  mask='url(#path-6-outside-6_377_4128)'
                                />
                              </g>
                              <g id='Vector_7'>
                                <mask
                                  id='path-7-outside-7_377_4128'
                                  maskUnits='userSpaceOnUse'
                                  x='3.07617'
                                  y='9.17236'
                                  width='3'
                                  height='3'
                                  fill='black'
                                >
                                  <rect fill='white' x='3.07617' y='9.17236' width='3' height='3' />
                                  <path d='M4.48353 11.2333C4.52945 11.244 4.57643 11.2494 4.62356 11.2494C4.76027 11.2472 4.89101 11.1931 4.98927 11.098C5.08753 11.0029 5.14594 10.874 5.15268 10.7375C5.15941 10.6009 5.11395 10.4669 5.02552 10.3626C4.93709 10.2583 4.81231 10.1916 4.67649 10.1759C4.54066 10.1602 4.40396 10.1968 4.2941 10.2782C4.18425 10.3596 4.10947 10.4798 4.08492 10.6143C4.06038 10.7488 4.08791 10.8876 4.16193 11.0025C4.23595 11.1175 4.35093 11.2 4.48353 11.2333Z' />
                                </mask>
                                <path
                                  d='M4.48353 11.2333C4.52945 11.244 4.57643 11.2494 4.62356 11.2494C4.76027 11.2472 4.89101 11.1931 4.98927 11.098C5.08753 11.0029 5.14594 10.874 5.15268 10.7375C5.15941 10.6009 5.11395 10.4669 5.02552 10.3626C4.93709 10.2583 4.81231 10.1916 4.67649 10.1759C4.54066 10.1602 4.40396 10.1968 4.2941 10.2782C4.18425 10.3596 4.10947 10.4798 4.08492 10.6143C4.06038 10.7488 4.08791 10.8876 4.16193 11.0025C4.23595 11.1175 4.35093 11.2 4.48353 11.2333Z'
                                  fill='#0074FF'
                                />
                                <path
                                  d='M4.48353 11.2333C4.52945 11.244 4.57643 11.2494 4.62356 11.2494C4.76027 11.2472 4.89101 11.1931 4.98927 11.098C5.08753 11.0029 5.14594 10.874 5.15268 10.7375C5.15941 10.6009 5.11395 10.4669 5.02552 10.3626C4.93709 10.2583 4.81231 10.1916 4.67649 10.1759C4.54066 10.1602 4.40396 10.1968 4.2941 10.2782C4.18425 10.3596 4.10947 10.4798 4.08492 10.6143C4.06038 10.7488 4.08791 10.8876 4.16193 11.0025C4.23595 11.1175 4.35093 11.2 4.48353 11.2333Z'
                                  stroke='#0074FF'
                                  strokeWidth='0.8'
                                  mask='url(#path-7-outside-7_377_4128)'
                                />
                              </g>
                            </g>
                          </svg>
                          {/* Title */}
                          <h3>
                            {t('single-course-duration')}:{' '}
                            <span>
                              {data?.cycles
                                ? data?.cycles?.map(cycle => (cycle.id == selectedCycle ? cycle.duration : null))
                                : '0 ساعت'}
                            </span>
                          </h3>
                        </div>

                        {/* Start Date */}
                        <div className='col-6'>
                          {/* Icon */}
                          <svg
                            width='20'
                            height='30'
                            viewBox='0 0 20 30'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M1 27V2L17.5 14L1 27Z' stroke='#0074FF' strokeWidth='2' />
                          </svg>
                          {/* Title */}
                          <h3>
                            {t('single-course-start-date')}:{' '}
                            <span>
                              {data?.cycles
                                ? data?.cycles?.map(cycle => (cycle.id == selectedCycle ? cycle.startDate : null))
                                : 'January'}
                            </span>
                          </h3>
                        </div>

                        {/* Days */}
                        <div className='col-6'>
                          {/* Icon */}
                          <svg
                            width='30'
                            height='31'
                            viewBox='0 0 30 31'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M26.8754 4.96563V4.96562H26.8746H24.1662H24.1162V5.01562V6.68229V6.73229H24.1662H26.6162V24.9656H3.3829V6.73229H5.8329H5.8829V6.68229V5.01562V4.96562H5.8329H3.12456V4.96562L3.12373 4.96563C2.92236 4.969 2.72363 5.012 2.53888 5.09218C2.35413 5.17236 2.18699 5.28816 2.047 5.43295C1.90701 5.57773 1.79692 5.74868 1.72301 5.93603C1.64915 6.12324 1.61287 6.32316 1.61623 6.52438V25.1735C1.61287 25.3748 1.64915 25.5747 1.72301 25.7619C1.79692 25.9492 1.90701 26.1202 2.047 26.265C2.18699 26.4098 2.35413 26.5256 2.53888 26.6057C2.72363 26.6859 2.92236 26.7289 3.12373 26.7323H3.12456L26.8746 26.7323L26.8754 26.7323C27.0768 26.7289 27.2755 26.6859 27.4602 26.6057C27.645 26.5256 27.8121 26.4098 27.9521 26.265C28.0921 26.1202 28.2022 25.9492 28.2761 25.7619C28.35 25.5747 28.3863 25.3747 28.3829 25.1734V6.52447C28.3863 6.32322 28.35 6.12327 28.2761 5.93603C28.2022 5.74868 28.0921 5.57773 27.9521 5.43295C27.8121 5.28816 27.645 5.17236 27.4602 5.09218C27.2755 5.012 27.0768 4.969 26.8754 4.96563Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M6.66699 11.6321H6.61699V11.6821V13.3488V13.3988H6.66699H8.33366H8.38366V13.3488V11.6821V11.6321H8.33366H6.66699Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M11.667 11.6321H11.617V11.6821V13.3488V13.3988H11.667H13.3337H13.3837V13.3488V11.6821V11.6321H13.3337H11.667Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M16.667 11.6321H16.617V11.6821V13.3488V13.3988H16.667H18.3337H18.3837V13.3488V11.6821V11.6321H18.3337H16.667Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M21.667 11.6321H21.617V11.6821V13.3488V13.3988H21.667H23.3337H23.3837V13.3488V11.6821V11.6321H23.3337H21.667Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M6.66699 15.7991H6.61699V15.8491V17.5158V17.5658H6.66699H8.33366H8.38366V17.5158V15.8491V15.7991H8.33366H6.66699Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M11.667 15.7991H11.617V15.8491V17.5158V17.5658H11.667H13.3337H13.3837V17.5158V15.8491V15.7991H13.3337H11.667Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M16.667 15.7991H16.617V15.8491V17.5158V17.5658H16.667H18.3337H18.3837V17.5158V15.8491V15.7991H18.3337H16.667Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M21.667 15.7991H21.617V15.8491V17.5158V17.5658H21.667H23.3337H23.3837V17.5158V15.8491V15.7991H23.3337H21.667Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M6.66699 19.9656H6.61699V20.0156V21.6823V21.7323H6.66699H8.33366H8.38366V21.6823V20.0156V19.9656H8.33366H6.66699Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M11.667 19.9656H11.617V20.0156V21.6823V21.7323H11.667H13.3337H13.3837V21.6823V20.0156V19.9656H13.3337H11.667Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M16.667 19.9656H16.617V20.0156V21.6823V21.7323H16.667H18.3337H18.3837V21.6823V20.0156V19.9656H18.3337H16.667Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M21.667 19.9656H21.617V20.0156V21.6823V21.7323H21.667H23.3337H23.3837V21.6823V20.0156V19.9656H23.3337H21.667Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M8.33333 8.3988C8.56761 8.3988 8.79229 8.30573 8.95794 8.14007C9.1236 7.97442 9.21667 7.74974 9.21667 7.51546V2.51546C9.21667 2.28119 9.1236 2.05651 8.95794 1.89085C8.79229 1.72519 8.56761 1.63213 8.33333 1.63213C8.09906 1.63213 7.87438 1.72519 7.70872 1.89085C7.54307 2.05651 7.45 2.28119 7.45 2.51546V7.51546C7.45 7.74974 7.54307 7.97442 7.70872 8.14007C7.87438 8.30573 8.09906 8.3988 8.33333 8.3988Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M21.6663 8.3988C21.9006 8.3988 22.1253 8.30573 22.291 8.14007C22.4566 7.97442 22.5497 7.74974 22.5497 7.51546V2.51546C22.5497 2.28119 22.4566 2.05651 22.291 1.89085C22.1253 1.72519 21.9006 1.63213 21.6663 1.63213C21.4321 1.63213 21.2074 1.72519 21.0417 1.89085C20.8761 2.05651 20.783 2.28119 20.783 2.51546V7.51546C20.783 7.74974 20.8761 7.97442 21.0417 8.14007C21.2074 8.30573 21.4321 8.3988 21.6663 8.3988Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                            <path
                              d='M10.833 4.96562H10.783V5.01562V6.68229V6.73229H10.833H19.1663H19.2163V6.68229V5.01562V4.96562H19.1663H10.833Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.1'
                            />
                          </svg>
                          {/* Title */}
                          <h3>
                            {t('single-course-days')}:{' '}
                            <span>
                              {data?.cycles
                                ? data?.cycles.map(cycle => (cycle.id == selectedCycle ? cycle.days : null))
                                : '--'}
                            </span>
                          </h3>
                        </div>

                        {/* Start Time */}
                        <div className='col-6'>
                          {/* Icon */}
                          <svg
                            width='32'
                            height='33'
                            viewBox='0 0 32 33'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M16 30.0156C13.2311 30.0156 10.5243 29.1945 8.22202 27.6562C5.91973 26.1179 4.12532 23.9314 3.06569 21.3732C2.00607 18.815 1.72882 16.0001 2.26901 13.2844C2.80921 10.5686 4.14258 8.07407 6.10051 6.11614C8.05845 4.1582 10.553 2.82483 13.2687 2.28464C15.9845 1.74444 18.7994 2.02169 21.3576 3.08132C23.9157 4.14094 26.1022 5.93536 27.6406 8.23765C29.1789 10.5399 30 13.2467 30 16.0156C30 19.7287 28.525 23.2896 25.8995 25.9151C23.274 28.5406 19.713 30.0156 16 30.0156ZM16 4.01563C13.6266 4.01563 11.3066 4.71942 9.33316 6.038C7.35977 7.35657 5.8217 9.23072 4.91345 11.4234C4.0052 13.6161 3.76756 16.0289 4.23058 18.3567C4.69361 20.6845 5.83649 22.8227 7.51472 24.5009C9.19296 26.1791 11.3312 27.322 13.6589 27.7851C15.9867 28.2481 18.3995 28.0104 20.5922 27.1022C22.7849 26.1939 24.6591 24.6559 25.9776 22.6825C27.2962 20.7091 28 18.389 28 16.0156C28 12.833 26.7357 9.78079 24.4853 7.53035C22.2348 5.27991 19.1826 4.01563 16 4.01563Z'
                              fill='#0074FF'
                            />
                            <path
                              d='M20.59 22.0156L15 16.4256V7.01562H17V15.5956L22 20.6056L20.59 22.0156Z'
                              fill='#0074FF'
                            />
                          </svg>
                          {/* Title */}
                          <h3>
                            {t('single-course-time')}:{' '}
                            <span>
                              {data?.cycles
                                ? data?.cycles?.map(cycle => (cycle.id == selectedCycle ? cycle.time : null))
                                : '00:00'}
                            </span>
                          </h3>
                        </div>

                        {/* Teacher */}
                        <div className='col-6'>
                          {/* Icon */}
                          <svg
                            width='29'
                            height='19'
                            viewBox='0 0 29 19'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14.6435 11.8808L2.5 6.55476L14.6435 1.01562L26.787 6.55476L14.6435 11.8808Z'
                              stroke='#0074FF'
                              strokeWidth='1.7'
                            />
                            <path
                              d='M5.48254 8.0459V13.7981L14.6434 17.8459L22.9521 13.7981V8.25894'
                              stroke='#0074FF'
                              strokeWidth='1.7'
                            />
                            <path d='M27 6.55469V16.1416' stroke='#0074FF' strokeWidth='1.7' />
                          </svg>
                          {/* title */}
                          <h3>
                            {t('single-course-teacher')}:{' '}
                            <span>
                              {data?.teachers ? (
                                <span>{data?.teachers[0]?.firstName + ' ' + data?.teachers[0]?.lastName}</span>
                              ) : (
                                'Fanavaran'
                              )}
                            </span>
                          </h3>
                        </div>

                        {/* Cycle */}
                        <div className='col-6'>
                          {/* Icon */}
                          <svg
                            width='29'
                            height='29'
                            viewBox='0 0 29 29'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M20.7819 28.5728L20.6954 28.5224L15.1846 25.3065L15.0983 25.2562L15.1485 25.1698L18.336 19.6944L18.3863 19.608L18.4727 19.6583L19.6911 20.3666L19.7778 20.417L19.7271 20.5036L17.6213 24.0969C20.3113 23.7017 22.5638 22.4776 24.3826 20.4222C26.2467 18.3156 27.1785 15.8483 27.1795 13.0156L20.7819 28.5728ZM20.7819 28.5728L20.8323 28.4862L21.5406 27.2679L21.591 27.1812L21.5041 27.131L18.6772 25.4988M20.7819 28.5728L18.6772 25.4988M18.6772 25.4988C21.5744 24.8959 23.9723 23.4524 25.8675 21.17L25.8675 21.17C27.8188 18.819 28.7947 16.0905 28.7947 12.9886C28.7947 12.489 28.7662 12.0024 28.709 11.5289C28.6518 11.0543 28.5651 10.5882 28.4488 10.1307L28.4296 10.0553H28.3519H26.8729H26.7378L26.7772 10.1845C26.9145 10.6337 27.0158 11.0945 27.0812 11.5672C27.0812 11.5672 27.0812 11.5673 27.0812 11.5673L27.1803 11.5536L18.6772 25.4988ZM12.0252 25.1665L12.1016 25.1913L12.1422 25.122L12.8775 23.8682L12.9421 23.7581L12.8197 23.7218C10.4895 23.0299 8.57443 21.7051 7.07217 19.7448C5.57097 17.786 4.82047 15.5469 4.82047 13.0241C4.82047 12.2618 4.89398 11.5099 5.04097 10.7683C5.17503 10.0921 5.37768 9.43894 5.64895 8.80876L7.68116 12.3219L7.73203 12.4098L7.81917 12.3576L9.04458 11.6223L9.12901 11.5717L9.07967 11.4864L5.89217 5.9827L5.84208 5.89621L5.75556 5.94625L0.244731 9.13375L0.159484 9.18306L0.20748 9.26905L0.88748 10.4874L0.936915 10.576L1.02477 10.5253L3.85791 8.89066C3.63614 9.50759 3.47097 10.137 3.36245 10.779C3.23873 11.5108 3.17688 12.2502 3.17688 12.9971C3.17688 15.8608 4.00986 18.3991 5.67622 20.6082C7.34103 22.8153 9.45794 24.3355 12.0252 25.1665ZM20.4503 7.32056V7.42054L20.5503 7.42056L26.9253 7.42198L27.0253 7.422V7.32198V0.94698V0.84698H26.9253H25.5086H25.4086V0.94698V4.34809C24.2188 3.03928 22.8334 2.02791 21.253 1.31483C19.5946 0.566524 17.8342 0.19248 15.9731 0.19248C14.348 0.19248 12.8187 0.476536 11.3858 1.04528C9.95587 1.61232 8.67288 2.39462 7.53738 3.3921L7.47593 3.44608L7.51666 3.51702L8.25191 4.79769L8.31511 4.90776L8.40734 4.82056C9.40318 3.879 10.5459 3.14189 11.8363 2.60908L11.8363 2.60907C13.1268 2.07605 14.5143 1.80915 15.9999 1.80915C17.6909 1.81008 19.2965 2.16998 20.8178 2.88897C22.2762 3.57825 23.5219 4.54961 24.5554 5.8039H20.5503H20.4503V5.9039V7.32056Z'
                              fill='#0074FF'
                              stroke='#0074FF'
                              strokeWidth='0.2'
                            />
                          </svg>
                          {/* Title */}
                          <h3>
                            {t('single-course-cycle')}:{' '}
                            <span>
                              {data?.cycles
                                ? data?.cycles?.map(cycle => (cycle.id == selectedCycle ? cycle.name : null))
                                : ''}
                            </span>
                          </h3>
                        </div>
                      </div>

                      <div className='FNV-Single-Video'>
                        {/* Course Video */}
                        {data?.introURL ? (
                          <ReactPlayer className='FNV-Course-Video w-100' url={data?.introURL} controls={true} />
                        ) : null}
                      </div>

                      {direction == 'ltr' ? (
                        <>
                          {' '}
                          {/* english Description */}
                          <h4 className='FNV-SingleCourse-Detail-Title' id='FNV-CheckMate'>
                            <svg
                              width='99'
                              height='65'
                              viewBox='0 0 99 65'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g opacity='0.3'>
                                <path
                                  d='M25.1606 8.4337L14.9396 34.8455L3 30.0516L13.221 4.00159L19.1908 6.21765L25.1606 8.4337ZM25.1606 8.4337C29.653 4.8458 40.8629 -0.575253 49.7634 6.44377C54.793 10.4103 58.5383 13.3696 61.084 15.3839C63.1539 17.0216 63.4448 20.0483 61.7292 22.0542V22.0542C60.1736 23.8731 57.4931 24.2182 55.5274 22.8527L47.1403 17.0266L17.3818 34.1219'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <path
                                  d='M68.3297 9.09517L80.3488 34.366L92.011 28.9319L79.7279 3.41375L74.0288 6.25446L68.3297 9.09517Z'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <path
                                  d='M18.0152 33.7599L16.0933 34.8051C14.0069 35.9398 13.2341 38.5501 14.3664 40.6377V40.6377C15.4996 42.727 18.1119 43.502 20.2012 42.3688L36.5441 33.5047'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <path
                                  d='M36.6178 33.6095L22.0671 41.5016C19.979 42.6341 19.2044 45.245 20.3369 47.3331V47.3331C21.4695 49.4212 24.0804 50.1959 26.1685 49.0633L40.7192 41.1712'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <path
                                  d='M40.7382 41.2386L28.58 47.8331C26.4918 48.9657 25.7172 51.5765 26.8498 53.6647V53.6647C27.9823 55.7528 30.5932 56.5274 32.6813 55.3949L44.8396 48.8004'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <path
                                  d='M44.8784 48.8717L35.4457 53.9879C33.362 55.118 32.589 57.7233 33.7192 59.807V59.807C34.8527 61.897 37.4693 62.6672 39.5544 61.5248L50.939 55.287'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <rect
                                  width='18.8513'
                                  height='8.60242'
                                  rx='4.30121'
                                  transform='matrix(-0.657259 -0.753665 -0.753665 0.657259 83.8164 39.6929)'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <rect
                                  width='21.6567'
                                  height='8.60242'
                                  rx='4.30121'
                                  transform='matrix(-0.657259 -0.753665 -0.753665 0.657259 77.3204 45.5254)'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <rect
                                  width='17.6113'
                                  height='8.60242'
                                  rx='4.30121'
                                  transform='matrix(-0.657259 -0.753665 -0.753665 0.657259 70.843 51.4385)'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <rect
                                  width='11.3865'
                                  height='8.60242'
                                  rx='4.30121'
                                  transform='matrix(-0.657259 -0.753665 -0.753665 0.657259 63.8418 56.5303)'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <path d='M55.1904 10.6943H69.3008' stroke='#0074FF' strokeWidth='4' />
                              </g>
                            </svg>

                            {t('single-course-introduction')}
                          </h4>
                          <div
                            className='non-clickable-content'
                            dangerouslySetInnerHTML={{ __html: data?.englishDescription }}
                          />
                        </>
                      ) : (
                        <>
                          {' '}
                          {/* english Description */}
                          <h4 className='FNV-SingleCourse-Detail-Title' id='FNV-CheckMate'>
                            <svg
                              width='99'
                              height='65'
                              viewBox='0 0 99 65'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g opacity='0.3'>
                                <path
                                  d='M25.1606 8.4337L14.9396 34.8455L3 30.0516L13.221 4.00159L19.1908 6.21765L25.1606 8.4337ZM25.1606 8.4337C29.653 4.8458 40.8629 -0.575253 49.7634 6.44377C54.793 10.4103 58.5383 13.3696 61.084 15.3839C63.1539 17.0216 63.4448 20.0483 61.7292 22.0542V22.0542C60.1736 23.8731 57.4931 24.2182 55.5274 22.8527L47.1403 17.0266L17.3818 34.1219'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <path
                                  d='M68.3297 9.09517L80.3488 34.366L92.011 28.9319L79.7279 3.41375L74.0288 6.25446L68.3297 9.09517Z'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <path
                                  d='M18.0152 33.7599L16.0933 34.8051C14.0069 35.9398 13.2341 38.5501 14.3664 40.6377V40.6377C15.4996 42.727 18.1119 43.502 20.2012 42.3688L36.5441 33.5047'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <path
                                  d='M36.6178 33.6095L22.0671 41.5016C19.979 42.6341 19.2044 45.245 20.3369 47.3331V47.3331C21.4695 49.4212 24.0804 50.1959 26.1685 49.0633L40.7192 41.1712'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <path
                                  d='M40.7382 41.2386L28.58 47.8331C26.4918 48.9657 25.7172 51.5765 26.8498 53.6647V53.6647C27.9823 55.7528 30.5932 56.5274 32.6813 55.3949L44.8396 48.8004'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <path
                                  d='M44.8784 48.8717L35.4457 53.9879C33.362 55.118 32.589 57.7233 33.7192 59.807V59.807C34.8527 61.897 37.4693 62.6672 39.5544 61.5248L50.939 55.287'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <rect
                                  width='18.8513'
                                  height='8.60242'
                                  rx='4.30121'
                                  transform='matrix(-0.657259 -0.753665 -0.753665 0.657259 83.8164 39.6929)'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <rect
                                  width='21.6567'
                                  height='8.60242'
                                  rx='4.30121'
                                  transform='matrix(-0.657259 -0.753665 -0.753665 0.657259 77.3204 45.5254)'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <rect
                                  width='17.6113'
                                  height='8.60242'
                                  rx='4.30121'
                                  transform='matrix(-0.657259 -0.753665 -0.753665 0.657259 70.843 51.4385)'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <rect
                                  width='11.3865'
                                  height='8.60242'
                                  rx='4.30121'
                                  transform='matrix(-0.657259 -0.753665 -0.753665 0.657259 63.8418 56.5303)'
                                  stroke='#0074FF'
                                  strokeWidth='4'
                                />
                                <path d='M55.1904 10.6943H69.3008' stroke='#0074FF' strokeWidth='4' />
                              </g>
                            </svg>

                            {t('single-course-introduction')}
                          </h4>
                          <div
                            className='non-clickable-content'
                            dangerouslySetInnerHTML={{ __html: data?.description }}
                          />
                        </>
                      )}
                      {/* Course Materials */}
                      {data?.abstract ? (
                        <div id='CourseDetails'>
                          <h4 className='FNV-SingleCourse-Detail-Title'>
                            <svg
                              width='88'
                              height='80'
                              viewBox='0 0 88 80'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g opacity='0.3'>
                                <path
                                  fill-rule='evenodd'
                                  clip-rule='evenodd'
                                  d='M4.93613 24.9924L8.95438 22.5487L44.4084 0.987305L79.8326 22.5463L83.8518 24.9924L79.8293 27.4304L77.0911 29.09L84.6694 33.8017L87.8382 35.772L87.7953 35.798V41.8846L87.7953 43.2691L86.7665 43.8605L79.6009 47.9792L84.6553 51.0531L87.8739 53.0105L84.6531 54.9627L45.1559 78.9022L44.3539 79.3883L43.5523 78.9014L4.13386 54.9619L0.90332 52.9999L4.13863 51.0496L9.21949 47.9868L2.23012 43.9551L1.20355 43.3629V41.9805L1.20355 35.9223L0.99587 35.7961L4.10098 33.8128L11.5867 29.0314L8.95547 27.4334L4.93613 24.9924ZM13.3536 50.3715L8.96928 53.0145L44.3555 74.5052L79.8299 53.0039L75.471 50.353L45.1094 67.8045L44.3411 68.2461L43.5732 67.8032L13.3536 50.3715ZM45.1557 61.6421L84.2038 37.9748V40.5L44.3438 63.4111L4.7951 40.5981L4.7951 38.1035L43.5521 61.6413L44.3537 62.1282L45.1557 61.6421ZM15.5476 31.4369L8.87639 35.6981L44.3553 57.2451L79.8653 35.7223L73.0944 31.5125L44.3545 48.9319L15.5476 31.4369ZM44.3561 44.0488L12.9737 24.9897L44.4078 5.87304L75.8101 24.9843L44.3561 44.0488Z'
                                  fill='#0074FF'
                                />
                              </g>
                            </svg>

                            {t('single-course-materials')}
                          </h4>
                          {/* Contents */}
                          {inEnrolled && data?.abstract ? (
                            <div className='FNV-Course-Card-Body'>
                              <div
                                className='non-clickable-content'
                                dangerouslySetInnerHTML={{ __html: data?.abstract }}
                              />
                            </div>
                          ) : null}
                        </div>
                      ) : null}

                      {/* Course Mock Exams */}
                      {filteredTests && filteredTests.length > 0 && (
                        <>
                          <h5 className='FNV-SingleCourse-Detail-Title'>
                            <svg
                              width='55'
                              height='51'
                              viewBox='0 0 55 51'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g opacity='0.3'>
                                <rect x='2' y='2' width='51' height='47' stroke='#FFA600' strokeWidth='4' />
                                <rect x='12' y='11' width='9' height='9' stroke='#FFA600' strokeWidth='4' />
                                <rect x='12' y='31' width='9' height='9' stroke='#FFA600' strokeWidth='4' />
                                <path d='M27 13H45' stroke='#FFA600' strokeWidth='4' />
                                <path d='M27 33H45' stroke='#FFA600' strokeWidth='4' />
                                <path d='M27 18H36' stroke='#FFA600' strokeWidth='4' />
                                <path d='M27 38H36' stroke='#FFA600' strokeWidth='4' />
                              </g>
                            </svg>
                            {t('single-course-mock-exams')}
                          </h5>

                          <div className='accordion' id='courseMockExamsAccordion'>
                            {filteredTests?.map((test, index) => (
                              <div key={test?.id} className='accordion-item'>
                                <h2 className='accordion-header' id={`headingTest${test?.id}`}>
                                  <button
                                    className='accordion-button collapsed'
                                    type='button'
                                    data-bs-toggle='collapse'
                                    data-bs-target={`#collapseTest${test?.id}`}
                                    aria-expanded='false'
                                    aria-controls={`collapseTest${test?.id}`}
                                  >
                                    {/* Icon */}
                                    <svg
                                      width='13'
                                      height='10'
                                      viewBox='0 0 13 10'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path d='M0 2.83863L13 0V7.16137L0 10V2.83863Z' fill='#0074FF' />
                                    </svg>

                                    {test?.title}

                                    {/* Quiz Type */}
                                    <span className='FNV-Badge-Quiz'>
                                      <svg
                                        width='15'
                                        height='16'
                                        viewBox='0 0 15 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                      >
                                        <path
                                          d='M8.809 10.7216C8.99217 10.7216 9.15258 10.654 9.29025 10.5186C9.42733 10.3845 9.49588 10.2255 9.49588 10.0417C9.49588 9.858 9.4285 9.69758 9.29375 9.5605C9.159 9.42342 9.00004 9.35488 8.81688 9.35488C8.63371 9.35488 8.47329 9.42225 8.33562 9.557C8.19796 9.69175 8.12912 9.85071 8.12912 10.0339C8.12912 10.217 8.1965 10.3775 8.33125 10.5151C8.466 10.6528 8.62525 10.7222 8.809 10.7216ZM8.42575 8.25762H9.19925C9.222 7.89071 9.28004 7.6145 9.37337 7.429C9.46612 7.2435 9.68983 6.9845 10.0445 6.652C10.4143 6.316 10.6722 6.01558 10.818 5.75075C10.9638 5.48708 11.0367 5.18404 11.0367 4.84162C11.0367 4.25246 10.8267 3.76158 10.4067 3.369C9.98675 2.97583 9.45533 2.77925 8.8125 2.77925C8.32658 2.77925 7.89492 2.9105 7.5175 3.173C7.14008 3.4355 6.85279 3.79338 6.65562 4.24662L7.36525 4.559C7.53033 4.21717 7.73158 3.9605 7.969 3.789C8.20642 3.6175 8.48758 3.53204 8.8125 3.53262C9.23017 3.53262 9.57638 3.65629 9.85113 3.90363C10.1253 4.15096 10.2624 4.47033 10.2624 4.86175C10.2624 5.09975 10.1959 5.32113 10.0629 5.52588C9.92929 5.73062 9.69975 5.97708 9.37425 6.26525C9.00558 6.58725 8.75533 6.88271 8.6235 7.15162C8.49167 7.42054 8.42575 7.78921 8.42575 8.25762ZM2.6875 12.875V0.625H14.9375V12.875H2.6875ZM3.5625 12H14.0625V1.5H3.5625V12ZM0.0625 15.5V3.789H0.9375V14.625H11.7744V15.5H0.0625Z'
                                          fill='#6A7BBA'
                                        />
                                      </svg>
                                      {t('single-course-quiz')}
                                    </span>

                                    {inEnrolled ? (
                                      <span className='FNV-Badge-Unlock'>
                                        <svg
                                          width='16'
                                          height='16'
                                          viewBox='0 0 16 16'
                                          fill='none'
                                          xmlns='http://www.w3.org/2000/svg'
                                        >
                                          <path d='M1 5.7027V1H5.7027' />
                                          <path d='M15.5 10.7973L15.5 15.5L10.7973 15.5' />
                                          <path d='M15.5 5.7027V1H10.7973' />
                                          <path d='M1 10.7973L1 15.5L5.7027 15.5' />
                                          <rect x='5.02734' y='6.5946' width='6.83784' height='5.27027' />
                                          <path d='M7.27051 6.48648V4.13513H9.62186V6.48648' />
                                        </svg>
                                        {t('single-course-unlocked')}
                                      </span>
                                    ) : (
                                      <span className='FNV-Badge-Locked'>
                                        <svg
                                          width='16'
                                          height='16'
                                          viewBox='0 0 16 16'
                                          fill='none'
                                          xmlns='http://www.w3.org/2000/svg'
                                        >
                                          <path d='M1 5.7027V1H5.7027' />
                                          <path d='M15.5 10.7973L15.5 15.5L10.7973 15.5' />
                                          <path d='M15.5 5.7027V1H10.7973' />
                                          <path d='M1 10.7973L1 15.5L5.7027 15.5' />
                                          <rect x='5.02734' y='6.5946' width='6.83784' height='5.27027' />
                                          <path d='M7.27051 6.48648V4.13513H9.62186V6.48648' />
                                        </svg>

                                        {t('single-course-locked')}
                                      </span>
                                    )}

                                    {/* Information */}
                                    <span className='FNV-Badge-Information'>
                                      <svg
                                        width='16'
                                        height='17'
                                        viewBox='0 0 16 17'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                      >
                                        <path
                                          d='M7.99425 3.95C8.15881 3.95 8.29524 4.0018 8.39811 4.10877C8.49979 4.2145 8.55 4.34679 8.55 4.50199C8.55 4.65719 8.49979 4.78949 8.39811 4.89522C8.29524 5.00218 8.15881 5.05398 7.99425 5.05398C7.83653 5.05398 7.70424 5.00164 7.60189 4.89522M7.99425 3.95L7.60189 4.89522M7.99425 3.95C7.83653 3.95 7.70424 4.00234 7.60189 4.10877C7.50021 4.2145 7.45 4.34679 7.45 4.50199C7.45 4.65719 7.50021 4.78949 7.60189 4.89522M7.99425 3.95L7.60189 4.89522M8.38908 6.749V6.699H8.33908H7.67241H7.62241V6.749V13V13.05H7.67241H8.33908H8.38908V13V6.749Z'
                                          fill='#6A7BBA'
                                          stroke-width='0.1'
                                        />
                                        <rect x='0.5' y='1' width='15' height='15' />
                                      </svg>
                                      {t('single-course-information')}
                                    </span>
                                  </button>
                                </h2>
                                <div
                                  id={`collapseTest${test?.id}`}
                                  className='accordion-collapse collapse'
                                  aria-labelledby={`headingTest${test?.id}`}
                                  data-bs-parent='#courseMockExamsAccordion'
                                >
                                  <div className='accordion-body FNV-Locked'>
                                    <ul>
                                      <li>
                                        {t('single-course-quiz-name')}: {test?.title}
                                      </li>
                                      <li>
                                        {t('single-course-quiz-time')}: {test?.testTime} {t('single-course-quiz-min')}
                                      </li>
                                      <li>
                                        {t('single-course-quiz-agenda')}:{' '}
                                        <div
                                          className='non-clickable-content'
                                          dangerouslySetInnerHTML={{ __html: test?.agenda }}
                                        />
                                      </li>
                                      {inEnrolled ? (
                                        <Link
                                          className='FNV-Btn BtnPrimary'
                                          href={`${data?.slug}/${test?.slug}/`}
                                          passHref
                                        >
                                          {t('single-course-quiz-start')}
                                        </Link>
                                      ) : (
                                        <Typography className='FNV-Locked-Text'>
                                          <svg
                                            width='16'
                                            height='16'
                                            viewBox='0 0 16 16'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                          >
                                            <path d='M1 5.7027V1H5.7027' stroke='#981837' />
                                            <path d='M15.5 10.7973L15.5 15.5L10.7973 15.5' stroke='#981837' />
                                            <path d='M15.5 5.7027V1H10.7973' stroke='#981837' />
                                            <path d='M1 10.7973L1 15.5L5.7027 15.5' stroke='#981837' />
                                            <rect
                                              x='5.02734'
                                              y='6.5946'
                                              width='6.83784'
                                              height='5.27027'
                                              stroke='#981837'
                                            />
                                            <path d='M7.27051 6.48648V4.13513H9.62186V6.48648' stroke='#981837' />
                                          </svg>

                                          {t('single-course-quiz-comment')}
                                        </Typography>
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Course Videos */}
                      {filteredVideos && filteredVideos.length > 0 && (
                        <>
                          <h5 className='FNV-SingleCourse-Detail-Title'>
                            <svg
                              width='78'
                              height='51'
                              viewBox='0 0 78 51'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g opacity='0.35'>
                                <rect x='2' y='2' width='51' height='47' stroke='#FFA600' strokeWidth='4' />
                                <path d='M76 8L53 17.697V31.3781L76 41V8Z' stroke='#FFA600' strokeWidth='4' />
                              </g>
                            </svg>

                            {t('single-course-videos-title')}
                          </h5>

                          <div className='accordion' id='courseMockExamsAccordion'>
                            {filteredVideos.map(video => (
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
                                    {/* Icon */}
                                    <svg
                                      width='13'
                                      height='10'
                                      viewBox='0 0 13 10'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path d='M0 2.83863L13 0V7.16137L0 10V2.83863Z' fill='#0074FF' />
                                    </svg>

                                    {video.title}

                                    {/* Quiz Type */}
                                    <span className='FNV-Badge-Quiz'>
                                      <svg
                                        width='15'
                                        height='16'
                                        viewBox='0 0 15 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                      >
                                        <path
                                          d='M8.809 10.7216C8.99217 10.7216 9.15258 10.654 9.29025 10.5186C9.42733 10.3845 9.49588 10.2255 9.49588 10.0417C9.49588 9.858 9.4285 9.69758 9.29375 9.5605C9.159 9.42342 9.00004 9.35488 8.81688 9.35488C8.63371 9.35488 8.47329 9.42225 8.33562 9.557C8.19796 9.69175 8.12912 9.85071 8.12912 10.0339C8.12912 10.217 8.1965 10.3775 8.33125 10.5151C8.466 10.6528 8.62525 10.7222 8.809 10.7216ZM8.42575 8.25762H9.19925C9.222 7.89071 9.28004 7.6145 9.37337 7.429C9.46612 7.2435 9.68983 6.9845 10.0445 6.652C10.4143 6.316 10.6722 6.01558 10.818 5.75075C10.9638 5.48708 11.0367 5.18404 11.0367 4.84162C11.0367 4.25246 10.8267 3.76158 10.4067 3.369C9.98675 2.97583 9.45533 2.77925 8.8125 2.77925C8.32658 2.77925 7.89492 2.9105 7.5175 3.173C7.14008 3.4355 6.85279 3.79338 6.65562 4.24662L7.36525 4.559C7.53033 4.21717 7.73158 3.9605 7.969 3.789C8.20642 3.6175 8.48758 3.53204 8.8125 3.53262C9.23017 3.53262 9.57638 3.65629 9.85113 3.90363C10.1253 4.15096 10.2624 4.47033 10.2624 4.86175C10.2624 5.09975 10.1959 5.32113 10.0629 5.52588C9.92929 5.73062 9.69975 5.97708 9.37425 6.26525C9.00558 6.58725 8.75533 6.88271 8.6235 7.15162C8.49167 7.42054 8.42575 7.78921 8.42575 8.25762ZM2.6875 12.875V0.625H14.9375V12.875H2.6875ZM3.5625 12H14.0625V1.5H3.5625V12ZM0.0625 15.5V3.789H0.9375V14.625H11.7744V15.5H0.0625Z'
                                          fill='#6A7BBA'
                                        />
                                      </svg>
                                      {t('single-course-quiz')}
                                    </span>

                                    {inEnrolled ? (
                                      <span className='FNV-Badge-Unlock'>
                                        <svg
                                          width='16'
                                          height='16'
                                          viewBox='0 0 16 16'
                                          fill='none'
                                          xmlns='http://www.w3.org/2000/svg'
                                        >
                                          <path d='M1 5.7027V1H5.7027' />
                                          <path d='M15.5 10.7973L15.5 15.5L10.7973 15.5' />
                                          <path d='M15.5 5.7027V1H10.7973' />
                                          <path d='M1 10.7973L1 15.5L5.7027 15.5' />
                                          <rect x='5.02734' y='6.5946' width='6.83784' height='5.27027' />
                                          <path d='M7.27051 6.48648V4.13513H9.62186V6.48648' />
                                        </svg>
                                        {t('single-course-unlocked')}
                                      </span>
                                    ) : (
                                      <span className='FNV-Badge-Locked'>
                                        <svg
                                          width='16'
                                          height='16'
                                          viewBox='0 0 16 16'
                                          fill='none'
                                          xmlns='http://www.w3.org/2000/svg'
                                        >
                                          <path d='M1 5.7027V1H5.7027' />
                                          <path d='M15.5 10.7973L15.5 15.5L10.7973 15.5' />
                                          <path d='M15.5 5.7027V1H10.7973' />
                                          <path d='M1 10.7973L1 15.5L5.7027 15.5' />
                                          <rect x='5.02734' y='6.5946' width='6.83784' height='5.27027' />
                                          <path d='M7.27051 6.48648V4.13513H9.62186V6.48648' />
                                        </svg>

                                        {t('single-course-locked')}
                                      </span>
                                    )}

                                    {/* Information */}
                                    <span className='FNV-Badge-Information'>
                                      <svg
                                        width='16'
                                        height='17'
                                        viewBox='0 0 16 17'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                      >
                                        <path
                                          d='M7.99425 3.95C8.15881 3.95 8.29524 4.0018 8.39811 4.10877C8.49979 4.2145 8.55 4.34679 8.55 4.50199C8.55 4.65719 8.49979 4.78949 8.39811 4.89522C8.29524 5.00218 8.15881 5.05398 7.99425 5.05398C7.83653 5.05398 7.70424 5.00164 7.60189 4.89522M7.99425 3.95L7.60189 4.89522M7.99425 3.95C7.83653 3.95 7.70424 4.00234 7.60189 4.10877C7.50021 4.2145 7.45 4.34679 7.45 4.50199C7.45 4.65719 7.50021 4.78949 7.60189 4.89522M7.99425 3.95L7.60189 4.89522M8.38908 6.749V6.699H8.33908H7.67241H7.62241V6.749V13V13.05H7.67241H8.33908H8.38908V13V6.749Z'
                                          fill='#6A7BBA'
                                          stroke-width='0.1'
                                        />
                                        <rect x='0.5' y='1' width='15' height='15' />
                                      </svg>
                                      {t('single-course-information')}
                                    </span>
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
                            ))}
                          </div>
                        </>
                      )}
                    </article>

                    <aside className='col-12 col-md-4'>
                      <div className='card'>
                        {/* Feature Image */}
                        <figure>
                          <img alt={data?.title} src={data?.image} className='img-fluid' />
                          <figcaption>{data?.title}</figcaption>
                        </figure>

                        <div className='container'>
                          {/* Diploma */}
                          <div className='row'>
                            {/* SVG */}
                            <div className='col-3 col-md-1'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                class='icon icon-tabler icon-tabler-certificate'
                                viewBox='0 0 24 24'
                                strokeWidth='1'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
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
                            <div className='col-9 col-md-11'>
                              <h4>{t('single-course-diploma')}</h4>
                              <p>{t('single-course-diploma-desc')}</p>
                            </div>
                          </div>

                          {/* Regular Price */}
                          <div className='row'>
                            {/* SVG */}
                            <div className='col-3 col-md-1'>
                              <svg
                                width='36'
                                height='36'
                                viewBox='0 0 36 36'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M25.2956 11.2296L25.2955 11.2296C24.9193 11.1433 24.6841 10.7684 24.7703 10.3921C24.8565 10.0158 25.2316 9.7805 25.6079 9.86687L25.2956 11.2296ZM25.2956 11.2296C25.6957 11.3213 26.1312 11.3834 26.5883 11.4148M25.2956 11.2296L26.5883 11.4148M26.5883 11.4148C26.3265 11.7574 25.9142 11.9785 25.4517 11.9785C24.6633 11.9785 24.0215 11.3367 24.0215 10.5483C24.0215 9.75987 24.6633 9.11809 25.4517 9.11809C26.0553 9.11809 26.5732 9.49448 26.7825 10.0251C26.3589 10.0016 25.962 9.94801 25.608 9.86689L26.5883 11.4148ZM15.1333 4.82217L15.1333 4.82218L1.47149 18.484C0.576169 19.3794 0.576169 20.8357 1.47149 21.731L14.269 34.5285C14.7167 34.9762 15.3051 35.1999 15.8924 35.1999C16.4798 35.1999 17.0682 34.9762 17.5159 34.5285L31.1778 20.8666L31.0364 20.7252L31.1778 20.8666C31.7117 20.3327 32.0061 19.6218 32.0061 18.8667V10.3285C32.3872 10.1252 32.7495 9.8916 33.0838 9.62524C34.4667 8.52342 35.2 6.99826 35.2 5.22516C35.2 2.78495 33.215 0.8 30.7748 0.8C28.7937 0.8 27.0646 2.13624 26.5247 3.99382H17.1332C16.3782 3.99382 15.6672 4.2883 15.1333 4.82217ZM30.1892 19.8781L16.5273 33.5399C16.1773 33.8899 15.6075 33.8899 15.2575 33.5399L2.46005 20.7425C2.46005 20.7425 2.46004 20.7425 2.46004 20.7425C2.11011 20.3925 2.1101 19.8226 2.46004 19.4726C2.46004 19.4726 2.46005 19.4726 2.46005 19.4726L16.1219 5.81079C16.3923 5.54036 16.7508 5.3919 17.1332 5.3919H29.7102C30.2051 5.3919 30.6081 5.79487 30.6081 6.28977V9.43315C29.8502 9.72964 29.027 9.91183 28.2241 9.9916C27.9648 8.69787 26.8211 7.71995 25.4518 7.71995C23.8921 7.71995 22.6235 8.98855 22.6235 10.5482C22.6235 12.1079 23.8921 13.3765 25.4518 13.3765C26.7133 13.3765 27.7834 12.5467 28.1471 11.4049C28.9631 11.3404 29.8039 11.1829 30.6081 10.9202V18.8668C30.6081 19.2492 30.4596 19.6076 30.1892 19.8781ZM32.2125 8.53185C32.1455 8.5853 32.0766 8.63724 32.0061 8.6877V6.28977C32.0061 5.02362 30.9763 3.99382 29.7102 3.99382H28.0097C28.4872 2.92986 29.5634 2.19807 30.7748 2.19807C32.4438 2.19807 33.8019 3.5562 33.8019 5.22516C33.8019 6.58233 33.2693 7.6898 32.2125 8.53185Z'
                                  fill='white'
                                  stroke='white'
                                  strokeWidth='0.4'
                                />
                              </svg>
                            </div>

                            {/* Title */}
                            <div className='col-9 col-md-5'>
                              <h4>{t('single-course-regular-price')}: </h4>
                            </div>

                            {/* Price */}
                            <div className='col-9 col-md-6'>
                              <price>
                                {data?.cycles
                                  ? data?.cycles?.map(cycle =>
                                    cycle.id == selectedCycle ? (
                                      <>
                                        {' '}
                                        <span className="FNV-Price-LineThrough">
                                          CA$ {cycle.regularPrice}
                                        </span>
                                        {isDiscountActive(cycle) && <span> - CA$ {cycle.discountPrice}</span>}
                                        {isDiscountActive(cycle) && (
                                          <>
                                            <div className='FNV-CountDown'>
                                              DISCOUNT ENDS IN <span className='FNV-CountDown-Counter' dangerouslySetInnerHTML={{ __html: countdown }} />
                                            </div>
                                          </>
                                        )}
                                      </>
                                    ) : null
                                  )
                                  : '0'}
                              </price>
                            </div>
                          </div>

                          {/* Gold Price */}
                          <div className='row'>
                            {/* SVG */}
                            <div className='col-3 col-md-1'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                class='icon icon-tabler icon-tabler-crown'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                <path d='M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z' />
                              </svg>
                            </div>

                            {/* Title */}
                            <div className='col-9 col-md-5'>
                              <h4>{t('single-course-vip-price-gold')}: </h4>
                            </div>

                            {/* Price */}
                            <div className='col-9 col-md-6'>
                              <price>
                                {data?.cycles
                                  ? data?.cycles?.map(cycle =>
                                    cycle.id == selectedCycle ? (
                                      <>
                                        {' '}
                                        <span className="FNV-Price-LineThrough">
                                          C$ {cycle.vipPrice}
                                        </span>
                                        {isDiscountActive(cycle) && <span> - CA$ {cycle.discountVipPrice} </span>}
                                      </>
                                    ) : null
                                  )
                                  : '0'}
                              </price>
                            </div>
                          </div>

                          {/* Platinium Price */}
                          <div className='row'>
                            {/* SVG */}
                            <div className='col-3 col-md-1'>
                              <svg
                                width='35'
                                height='28'
                                viewBox='0 0 35 28'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M6.97916 0.3H6.97921L28.0223 0.3L28.0223 0.3C28.2074 0.299974 28.3899 0.344207 28.5551 0.429251C28.7203 0.514303 28.8636 0.637835 28.973 0.790009L28.973 0.790044L34.6154 8.63392C34.6154 8.63394 34.6154 8.63396 34.6154 8.63399C34.6754 8.71748 34.7052 8.81987 34.6992 8.9237C34.6932 9.02752 34.6518 9.12554 34.5828 9.20119C34.5828 9.20121 34.5828 9.20122 34.5828 9.20124L17.821 27.5575L17.8209 27.5575C17.7419 27.6442 17.6328 27.6949 17.5178 27.6996C17.4064 27.7043 17.2971 27.6654 17.2125 27.5905L0.417226 9.20124C0.417216 9.20123 0.417172 9.20118 0.417162 9.20117C0.348124 9.12551 0.306762 9.02753 0.300758 8.9237C0.294755 8.81988 0.324558 8.7175 0.38454 8.63402C0.384564 8.63398 0.384589 8.63395 0.384613 8.63392L6.0284 0.790074L6.02845 0.790009C6.13788 0.637835 6.28116 0.514303 6.44636 0.429251C6.61155 0.344207 6.79412 0.299974 6.97916 0.3ZM7.73062 2.68476L7.57691 2.68477L7.48713 2.80953L3.35352 8.5537L3.21126 8.75138L3.37549 8.93123L17.2792 24.1565L17.5007 24.3991L17.7223 24.1565L31.6245 8.93121L31.7887 8.75139L31.6465 8.55373L27.5129 2.80806L27.4231 2.68325L27.2693 2.68327L7.73062 2.68476Z'
                                  fill='white'
                                  stroke='#223885'
                                  strokeWidth='0.6'
                                />
                              </svg>
                            </div>

                            {/* Title */}
                            <div className='col-9 col-md-5'>
                              <h4>{t('single-course-vip-price-platinum')}: </h4>
                            </div>

                            {/* Price */}
                            <div className='col-9 col-md-6'>
                              <price>
                                {data?.cycles
                                  ? data?.cycles?.map(cycle =>
                                    cycle.id == selectedCycle ? (
                                      <>
                                        {' '}
                                        <span className="FNV-Price-LineThrough">
                                          CA$ {cycle.vipPLPrice}
                                        </span>
                                        {isDiscountActive(cycle) && <span> - CA$ {cycle.discountVipPLPrice}</span>}
                                      </>
                                    ) : null
                                  )
                                  : '0'}
                              </price>
                            </div>
                          </div>

                          {inEnrolled ? (
                            <>
                              <Link
                                href='#CourseDetails'
                                scroll={false} // Prevent default Next.js scroll behavior
                                className='FNV-Btn LightColor FNV-Submit BtnLarge w-100'
                                onClick={e => {
                                  e.preventDefault()
                                  const element = document.getElementById('CourseDetails')
                                  if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' }) // Smooth scroll to the section
                                  }
                                }}
                              >
                                {t('single-course-watch')}
                              </Link>

                              <LinearProgress
                                value={(remindedDays / 236) * 100}
                                variant='determinate'
                                className='FNV-CourseProgress'
                              />

                              {parseInt(remindedDays) <= 15 ? (
                                <>
                                  {' '}
                                  <Typography className='FNV-CourseProgress-Text'>
                                    <i data-feather='alert-triangle'></i>
                                    {remindedDays} days remaining until your course access expired! renew the course
                                    with %75 discount!
                                  </Typography>
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
                                      onClick={e => reNewCourse(selectedCycle)}
                                      className='FNV-Btn BtnPrimary BtnLarge w-100'
                                    >
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        class='icon icon-tabler icon-tabler-shopping-cart'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
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

                                      <span>{t('single-course-renew')} With %75 Discount!</span>
                                    </a>
                                  )}
                                </>
                              ) : (
                                <Typography className='FNV-CourseProgress-Text'>
                                  <i data-feather='alert-triangle'></i>
                                  <strong>{remindedDays}</strong> {t('single-course-watch-expire')}
                                </Typography>
                              )}
                            </>
                          ) : (
                            <>
                              {data?.cycles?.length && (
                                <>
                                  <select value={selectedCycle} onChange={handleCycleChange} className='form-select'>
                                    <option disabled selected value=''>
                                      {t('single-course-scycle')}
                                    </option>
                                    {[...data.cycles]
                                      .reverse()
                                      .filter(cycle => cycle.status == 1)
                                      .map(cycle => (
                                        <option key={cycle.id} value={cycle.id}>
                                          {cycle.name}
                                        </option>
                                      ))}
                                  </select>
                                </>
                              )}

                              {inCart ? (
                                <a
                                  disabled={!data?.cycles?.length}
                                  style={{ cursor: 'pointer' }}
                                  onClick={e => router.replace('/cart')}
                                  className='FNV-Btn btn btn-success BtnMedium w-100'
                                >
                                  <i data-feather='shopping-cart'></i>{' '}
                                  {data?.cycles?.length ? t('single-course-gotocart') : 'Registration is disabled!'}
                                </a>
                              ) : (
                                <button
                                  disabled={!data?.cycles?.length}
                                  style={{ cursor: 'pointer' }}
                                  onClick={e => addToCart(selectedCycle)}
                                  className='FNV-Btn SecondaryColor FNV-Submit BtnLarge w-100'
                                >
                                  {data?.cycles?.length ? t('single-course-enroll') : 'Registration is disabled!'}
                                </button>
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
                                <>
                                  {courseType == '2' ? null : (
                                    <Button className='FNV-Btn LightColor FNV-Submit-Demo w-100' onClick={handleOpen}>
                                      {t('single-course-demo')}
                                    </Button>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </div>
                      </div>

                      <div className='card FNV-Instructor d-none'>
                        {/* Image */}
                        {/* <figure>
                          <img src='' className='img-fluid' />
                        </figure> */}
                        {/* Title */}
                        <h4>
                          <span>{t('single-course-teacher')}:</span>
                          <span>
                            {data?.teachers ? (
                              <span>{data?.teachers[0]?.firstName + ' ' + data?.teachers[0]?.lastName}</span>
                            ) : (
                              'Fanavaran'
                            )}
                          </span>
                        </h4>
                        {/* Disignation */}
                        <h5></h5>
                        {/* Description of Instructor */}
                        <p></p>
                      </div>
                    </aside>

                    <div className='col-12 FNV-SingleCourse-Comment'>
                      <h4>{t('single-course-comment-title')}</h4>
                      {!loading && (
                        <>
                          {user ? (
                            <>
                              <div className='FNV-SingleCourse-Comment-Section'>
                                <TextareaAutosize
                                  minRows={5}
                                  value={newComment}
                                  onChange={e => setNewComment(e.target.value)}
                                  placeholder='Write a comment...'
                                />
                                <Button onClick={handleCommentSubmit}>{t('single-course-comment-submit')}</Button>
                              </div>
                            </>
                          ) : (
                            <Button
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
                                strokeWidth='1.5'
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
                            sitekey='6Ld3vRchAAAAANNHnay731SB7BpaV1F1NxXx8WWT'
                            onChange={onReCAPTCHAChange}
                          />

                          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                            Send Request
                          </Button>
                        </Box>
                      </Modal>
                    </div>
                  </div>
                </div>
              </section>

              <section className='FNV-SingleCourse-FAQ'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                      {/* FAQ */}
                      {faq && (
                        <>
                          {/* Head */}
                          <h4>{t('single-course-faq')}</h4>

                          {/* Body */}
                          <div className='accordion' id='faq'>
                            {/* Item */}
                            {faq.map((item, index) => (
                              <div key={index} className='accordion-item'>
                                <h2 className='accordion-header'>
                                  <button
                                    className='accordion-button collapsed'
                                    type='button'
                                    data-bs-toggle='collapse'
                                    data-bs-target={`#Question${item.id}`}
                                    aria-expanded='false'
                                    aria-controls={`Question${item.id}`}
                                  >
                                    {index + 1}. {item.title}{' '}
                                  </button>
                                </h2>
                                <div id={`Question${item.id}`} className='accordion-collapse collapse'>
                                  <div className='accordion-body FNV-Locked'>
                                    {t('single-course-faq-answer')}:
                                    <div
                                      className='non-clickable-content'
                                      dangerouslySetInnerHTML={{ __html: item?.description }}
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </>
        )
      )}
    </div>
  )
}

Course.guestGuard = true

export default Course
