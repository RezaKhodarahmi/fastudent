import React, { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Logo from 'src/views/logoMain.js'
import feather from 'feather-icons'
import { useAuth } from 'src/hooks/useAuth'
import { useDispatch, useSelector } from 'react-redux'
import { setCartItems } from 'src/store/apps/cart'
import Box from '@mui/material/Box'
import { fetchSearchedCourse } from 'src/store/apps/search'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Modal from '@mui/material/Modal'
import Input from '@mui/material/Input'
import { appConfig } from 'src/configs/appConfig'
import { useTranslation } from 'react-i18next'
import SidebarSection from 'src/layouts/components/SideBar'

const Header = props => {
  // State
  const [courses, setCourses] = useState([])
  const [open, setOpen] = React.useState(false)
  const [userName, setUserName] = React.useState('')
  const [userImage, setUserImage] = React.useState('')
  const [searchInput, setSearchInput] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(null)

  // Hooks
  const user = typeof window !== 'undefined' ? window.localStorage.getItem('userData') : null
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const dispatch = useDispatch()
  const { logout } = useAuth()
  const { t } = useTranslation()
  const cartItems = useSelector(state => state.cart.items)
  const searchData = useSelector(state => state.search)

  const { i18n } = useTranslation()

  useEffect(() => {
    const currentLang = localStorage.getItem('i18nextLng') || 'en'
    document.body.dir = currentLang === 'fa' ? 'rtl' : 'ltr'
    document.body.lang = currentLang
  }, [])

  const changeLanguage = () => {
    let prevLng = window.localStorage.getItem('i18nextLng')
    let lng = prevLng === 'fa' ? 'en' : 'fa'

    i18n.changeLanguage(lng)
    window.localStorage.setItem('i18nextLng', lng)

    const direction = lng === 'fa' ? 'rtl' : 'ltr'

    document.body.dir = direction
    document.body.lang = lng
    window.localStorage.setItem('direction', direction)

    const html = document.documentElement
    html.setAttribute('dir', direction)
    html.setAttribute('lang', lng)


  }

  useEffect(() => {
    setUserName(JSON.parse(window.localStorage.getItem('userName' || '')))
    setUserImage(window.localStorage.getItem('userImage' || ''))
  }, [dispatch])

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prevIndex => (prevIndex === null || prevIndex >= courses.length - 1 ? 0 : prevIndex + 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prevIndex => (prevIndex <= 0 ? courses.length - 1 : prevIndex - 1))
      } else if (e.key === 'Enter' && selectedIndex !== null) {
        e.preventDefault()

        // Navigate to the selected course page
        const selectedCourse = courses[selectedIndex]
        window.location.href = `${appConfig.appUrl}/courses/${selectedCourse.slug}`
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [courses, selectedIndex])

  // Debounce function
  const debounce = (func, delay) => {
    let timerId

    return (...args) => {
      clearTimeout(timerId)
      timerId = setTimeout(() => func.apply(this, args), delay)
    }
  }

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(inputValue => {
      if (inputValue.length >= 3) {
        dispatch(fetchSearchedCourse(inputValue))
      }
    }, 600),
    []
  )

  const handleSearchInputChange = e => {
    const inputValue = e.target.value
    setSearchInput(inputValue)
    debouncedSearch(inputValue)
  }

  useEffect(() => {
    const inputValue = searchInput
    setSearchInput(inputValue)
  }, [searchInput])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof feather !== 'undefined' && feather !== null) {
        feather.replace()
      }
    }, 4000) // 10 seconds delay

    return () => clearTimeout(timer) // Clear timeout on cleanup
  }, [courses]) // Dependency array

  useEffect(() => {
    if (searchData?.data?.data) {
      setCourses(searchData?.data?.data)
    } else {
      setCourses([])
    }

    setSelectedIndex(null)

    // feather.replace()
  }, [searchData, searchInput])

  const storeClickedCourse = course => {
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]')

    // Check if the course already exists in history
    if (!searchHistory.some(historyItem => historyItem.slug === course.slug)) {
      searchHistory.push(course)

      // Keep only the last 5 courses
      if (searchHistory.length > 5) {
        searchHistory = searchHistory.slice(-5) // stores last 5 courses
      }

      localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
    }
  }

  useEffect(() => {
    const localCartItems = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('cartItems')) : []
    dispatch(setCartItems(localCartItems || []))

    const handleStorage = () => {
      const updatedCartItems = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('cartItems')) : []
      dispatch(setCartItems(updatedCartItems || []))
    }

    window.addEventListener('storage', handleStorage)

    return () => window.removeEventListener('storage', handleStorage)
  }, [props])

  const handleLogout = () => {
    logout()
  }

  const getPopularSearchTerms = () => {
    return JSON.parse(localStorage.getItem('searchHistory') || '[]')
  }

  return (
    <>
      {user ? (
        <nav className='navbar navbar-expand-lg bg-body-tertiary d-flex flex-column pb-0 pt-0'>
          <div className='container-fluid'>
            <Link
              className='OffCanvasMenu'
              data-bs-toggle='offcanvas'
              href='#offcanvasExample'
              role='button'
              aria-controls='offcanvasExample'
            >
              <i data-feather='grid'></i>
            </Link>
            <Link className='navbar-brand' href={appConfig.appUrl}>
              <Logo />
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#FNV-Toggle'
              aria-controls='FNV-Toggle'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='navbar-collapse justify-content-end' id=''>
              <div className='FNV-User dropdown'>
                <button
                  className='FNV-Btn dropdown-toggle'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  {t('language')}
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <Link href='/' className='dropdown-item' onClick={() => changeLanguage()}>
                      English
                    </Link>
                  </li>
                  <li>
                    <Link href='/' className='dropdown-item' onClick={() => changeLanguage()}>
                      فارسی
                    </Link>
                  </li>
                </ul>
              </div>
              <Link href='/cart' className='FNV-Btn SecondaryColor'>
                <i data-feather='shopping-cart'></i>
                <span className='position-absolute top-10 start-70 translate-middle badge rounded-pill bg-danger'>
                  {cartItems?.length ? cartItems.length : 0}
                  <span className='visually-hidden'>Cart Item's</span>
                </span>
              </Link>

              {/* <Link href="/" className='FNV-Btn PrimaryColor position-relative'>
                <i data-feather='bell'></i>
                <span className='position-absolute top-10 start-70 translate-middle badge rounded-pill bg-danger'>
                  9+
                  <span className='visually-hidden'>{t('unreadMessages')}</span>
                </span>
              </Link> */}

              <div className='FNV-User dropdown'>
                <button
                  className='FNV-Btn dropdown-toggle'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  {userImage != null && userImage != '' ? <img src={userImage} className='img-fluid' /> : null}
                  {userName}
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <Link href='/app/dashboards/main/' className='dropdown-item'>
                      <i data-feather='pie-chart'></i> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='app/pages/account-settings/account/'>
                      <i data-feather='user'></i> Profile
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='/app/dashboards/certificates/'>
                      <i data-feather='award'></i> {t('certificate')}
                    </Link>
                  </li>

                  <li>
                    <Link href='/' className='dropdown-item' style={{ cursor: 'pointer' }} onClick={handleLogout}>
                      <i data-feather='log-out'></i> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='container-fluid'>
            <div className='collapse navbar-collapse' id='FNV-Toggle'>
              <ul className='navbar-nav mb-2 mb-lg-0'>
                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/courses' aria-expanded='false'>
                    {t('courses')}
                  </Link>
                </li>

                {/* <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Certification
                  </Link>
                  <ul className='dropdown-menu'>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Action
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Something else here
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Something else here
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Something else here
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li> */}

                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/membership/checkout'>
                    {t('membership')}
                  </Link>
                </li>

                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/blog' aria-expanded='false'>
                    {t('blog')}
                  </Link>
                </li>
                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/webinars' aria-expanded='false'>
                    {t('webinars')}
                  </Link>
                </li>
                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/contact-us' aria-expanded='false'>
                    {t('contact-us')}
                  </Link>
                </li>
                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/about-us' aria-expanded='false'>
                    {t('about-us')}
                  </Link>
                </li>
                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/services/educational-and-career-counseling' aria-expanded='false'>
                    {t('appointment')}
                  </Link>
                </li>
                {/* <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Business Solutions
                  </Link>
                  <ul className='dropdown-menu'>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Action
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Something else here
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Something else here
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Something else here
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li> */}
              </ul>

              <div className='d-flex' role='search'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item FNV-MegaMenu-Search'>
                    <button
                      className='nav-link'
                      onClick={handleOpen}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        color: 'blue',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                      }}
                    >
                      <i data-feather='search'></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className='navbar navbar-expand-lg FNV-MegaMenu d-flex flex-column pb-0 pt-0'>
          <div className='container-fluid'>
            <Link
              className='OffCanvasMenu2'
              data-bs-toggle='offcanvas'
              href='#offcanvasExample1'
              role='button'
              aria-controls='offcanvasExample1'
            >
              <i data-feather='grid'></i>
            </Link>
            <Link className='navbar-brand' href={appConfig.appUrl}>
              <Logo />
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#FNV-Toggle'
              aria-controls='FNV-Toggle'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='navbar-collapse FNV_QuickAccess justify-content-end'>
              <Link href='/login' className='FNV-Btn BtnMedium PrimaryColor'>
                {t('menu-login')}
              </Link>

              <Link href='/register' className='FNV-Btn SecondaryColor BtnMedium'>
                {t('menu-register')}
              </Link>

              <Link href='/cart' className='FNV-Btn LightColor BtnMedium'>
                <i data-feather='shopping-cart'></i>
              </Link>

              <Link href='/' className='FNV-Btn LightColor BtnMedium' onClick={e => changeLanguage()}>
                {t('menu-language')}
              </Link>
            </div>
          </div>

          <div className='container-fluid'>
            <div className='collapse navbar-collapse' id='FNV-Toggle'>
              <ul className='navbar-nav mb-2 mb-lg-0 w-100 p-0'>
                {/* Courses */}
                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/courses' aria-expanded='false'>
                    {t('menu-courses')}
                  </Link>
                  {/* <ul className='dropdown-menu'>
                    <div className='container-fluid'>
                      <Link href='/courses'>{t('courses')}</Link>
                      <div className='row'>
                        <div className='col'>
                          <span>
                            <i data-feather='package'></i> Project Management
                          </span>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                        </div>
                        <div className='col'>
                          <span>
                            <i data-feather='package'></i> Engineering
                          </span>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                        </div>
                        <div className='col'>
                          <span>
                            <i data-feather='package'></i> Energy Advisory
                          </span>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                        </div>
                        <div className='col'>
                          <span>
                            <i data-feather='package'></i> Plumbing
                          </span>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                        </div>
                        <div className='col'>
                          <span>
                            <i data-feather='package'></i> Electrician
                          </span>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Course Name
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul> */}
                </li>
                {/* Certification */}
                {/* <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    {t('menu-certificate')}
                  </Link>
                  <ul className='dropdown-menu'>
                    <div className='container-fluid'>
                      <Link href='/'>
                        Certification<span>Get recognition for your skills and experience</span>
                      </Link>
                      <div className='row'>
                        <div className='col-md-3'>
                          <span>
                            <i data-feather='award'></i> Certification Overview
                          </span>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Compare Certification
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Certification FAQs
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Certification Registry
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Report PDUs
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Maintain Your Certification
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <span>
                            <i data-feather='award'></i> PMP Certification
                          </span>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Project Management Professional
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Item 2
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Item 3
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Item 4
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Item 5
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <span>
                            <i data-feather='award'></i> P.Eng Certification
                          </span>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Item 1
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Item 2
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Item 3
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Item 4
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Item 5
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <span>
                            <i data-feather='award'></i> TEC Certification
                          </span>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Item 1
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Item 2
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Item 3
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Item 4
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Item 5
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li> */}
                {/* Membership */}
                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/membership/checkout'>
                    {t('membership')}
                  </Link>
                </li>

                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/blog' aria-expanded='false'>
                    {t('menu-blogs')}
                  </Link>
                </li>
                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/webinars' aria-expanded='false'>
                    {t('webinars')}
                  </Link>
                </li>

                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/contact-us' aria-expanded='false'>
                    {t('contact-us')}
                  </Link>
                </li>
                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/about-us' aria-expanded='false'>
                    {t('about-us')}
                  </Link>
                </li>
                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/services/educational-and-career-counseling' aria-expanded='false'>
                    {t('appointment')}
                  </Link>
                </li>
                {/* <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    {t('menu-business')}
                  </Link>
                  <ul className='dropdown-menu w-50'>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Action
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Something else here
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Something else here
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='/'>
                              Something else here
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li> */}
              </ul>

              <div className='d-flex' role='search'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item FNV-MegaMenu-Search'>
                    <button
                      className='nav-link'
                      onClick={handleOpen}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        color: 'blue',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                      }}
                    >
                      <i data-feather='search'></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Box
          sx={{
            position: 'fixed',
            top: '120px',
            right: '10px',
            width: '50%',
            bgcolor: 'background.paper',
            border: '2px solid #7367f0',
            boxShadow: 24,
            p: 8
          }}
        >
          <h2 id='simple-modal-title'>Search</h2>
          <Input
            type='text'
            placeholder='Search...'
            fullWidth
            autoFocus
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <List>
            {courses.length ? (
              courses?.map((course, index) => (
                <ListItem key={index} selected={index === selectedIndex}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='15'
                    height='15'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-search'
                  >
                    <circle cx='11' cy='11' r='8'></circle>
                    <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                  </svg>
                  <Link
                    onClick={() => {
                      handleClose()
                      storeClickedCourse({ title: course.title, slug: course.slug })
                    }}
                    style={{ marginLeft: '10px' }}
                    href={`${appConfig.appUrl}/courses/${course.slug}`}
                  >
                    {course.title}
                  </Link>
                </ListItem>
              ))
            ) : (
              <h5>{searchInput.length ? 'No result' : null} </h5>
            )}
            <>
              <h5>Popular Search Terms</h5>
              {JSON.parse(localStorage.getItem('searchHistory') || '[]').map((course, index) => (
                <ListItem key={index}>
                  <Link onClick={handleClose} href={`${appConfig.appUrl}/courses/${course.slug}`}>
                    {course.title}
                  </Link>
                </ListItem>
              ))}
            </>
          </List>
        </Box>
      </Modal>
      <div
        className='offcanvas offcanvas-start'
        tabIndex='-1'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <div className='offcanvas-header'>
          <Link className='navbar-brand' href='/'>
            <img src='/img/MainLogo.png' className='img-fluid' />
          </Link>
          <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
        </div>
        <SidebarSection />
      </div>
      <div
        className='offcanvas offcanvas-start'
        tabIndex='-1'
        id='offcanvasExample1'
        aria-labelledby='offcanvasExampleLabel'
      >
        <div className='offcanvas-header'>
          <Link className='navbar-brand' href='/'>
            <img src='/img/MainLogo.png' className='img-fluid' />
          </Link>
          <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
        </div>
        <SidebarSection />
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: {} }
}

export default Header
