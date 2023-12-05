import React, { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Logo from 'src/views/logo.js'
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

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
    window.localStorage.setItem('i18nextLng', lng)
    if (lng === 'fa') {
      document.body.dir = 'rtl'
      window.localStorage.setItem('direction', 'rtl')
    } else {
      document.body.dir = 'ltr'
      window.localStorage.setItem('direction', 'ltr')
    }
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
    feather.replace()
  }, [courses])

  useEffect(() => {
    if (searchData?.data?.data) {
      setCourses(searchData?.data?.data)
    } else {
      setCourses([])
    }

    setSelectedIndex(null)
    feather.replace()
  }, [searchData, searchInput])

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

  useEffect(() => {
    console.log(searchData)
  }, [searchData])

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
                    <Link href='#' className='dropdown-item' onClick={() => changeLanguage('en')}>
                      English
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='dropdown-item' onClick={() => changeLanguage('fa')}>
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

              <Link href='#' className='FNV-Btn PrimaryColor position-relative'>
                <i data-feather='bell'></i>
                <span className='position-absolute top-10 start-70 translate-middle badge rounded-pill bg-danger'>
                  9+
                  <span className='visually-hidden'>{t('unreadMessages')}</span>
                </span>
              </Link>

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
                    <Link className='dropdown-item' href='/app/pages/account-settings/account/'>
                      <i data-feather='user'></i> Profile
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='/app/apps/certificates/list/'>
                      <i data-feather='award'></i> {t('certificate')}
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='/app/pages/account-settings/security/'>
                      <i data-feather='lock'></i> Security
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='dropdown-item' style={{ cursor: 'pointer' }} onClick={handleLogout}>
                      <i data-feather='log-out'></i> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='container-fluid'>
            <div className='collapse navbar-collapse' id='FNV-Toggle'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/courses' aria-expanded='false'>
                    Courses
                  </Link>
                </li>

                <li className='nav-item dropdown FNV-MegaMenu'>
                  <a className='nav-link' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Certification
                  </a>
                  <ul className='dropdown-menu'>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-md-3'>
                          <li>
                            <a className='dropdown-item' href='#'>
                              Action
                            </a>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>

                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/membership/checkout'>
                    Membership
                  </Link>
                </li>

                <li className='nav-item dropdown FNV-MegaMenu'>
                  <a className='nav-link' href='/blog' aria-expanded='false'>
                    Blog
                  </a>
                </li>

                <li className='nav-item dropdown FNV-MegaMenu'>
                  <a className='nav-link' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Business Solutions
                  </a>
                  <ul className='dropdown-menu'>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-md-3'>
                          <li>
                            <a className='dropdown-item' href='#'>
                              Action
                            </a>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
              </ul>

              <div className='d-flex' role='search'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item FNV-MegaMenu-Search'>
                    <Link href='#' className='nav-link' role='button' aria-expanded='false' onClick={handleOpen}>
                      <i data-feather='search'></i>
                    </Link>
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
                Log In
              </Link>

              <Link href='/register' className='FNV-Btn SecondaryColor BtnMedium'>
                Register
              </Link>

              <Link href='/cart' className='FNV-Btn LightColor BtnMedium'>
                <i data-feather='shopping-cart'></i>
              </Link>

              <Link href='#' className='FNV-Btn LightColor BtnMedium'>
                نسخه فارسی
              </Link>
            </div>
          </div>

          <div className='container-fluid'>
            <div className='collapse navbar-collapse' id='FNV-Toggle'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                {/* Courses */}
                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/courses' aria-expanded='false'>
                    Explore Courses
                  </Link>
                  <ul className='dropdown-menu'>
                    <div className='container-fluid'>
                      <a>
                        Explore Courses<span>See the latest that FANAVARAN has to offer</span>
                      </a>
                      <div className='row'>
                        <div className='col'>
                          <span>
                            <i data-feather='package'></i> Project Management
                          </span>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                        </div>
                        <div className='col'>
                          <span>
                            <i data-feather='package'></i> Engineering
                          </span>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                        </div>
                        <div className='col'>
                          <span>
                            <i data-feather='package'></i> Energy Advisory
                          </span>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                        </div>
                        <div className='col'>
                          <span>
                            <i data-feather='package'></i> Plumbing
                          </span>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                        </div>
                        <div className='col'>
                          <span>
                            <i data-feather='package'></i> Electrician
                          </span>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Course Name
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                {/* Certification */}
                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Certification
                  </Link>
                  <ul className='dropdown-menu'>
                    <div className='container-fluid'>
                      <a>
                        Certification<span>Get recognition for your skills and experience</span>
                      </a>
                      <div className='row'>
                        <div className='col-md-3'>
                          <span>
                            <i data-feather='award'></i> Certification Overview
                          </span>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Compare Certification
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Certification FAQs
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Certification Registry
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Report PDUs
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Maintain Your Certification
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <span>
                            <i data-feather='award'></i> PMP Certification
                          </span>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Project Management Professional
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Item 2
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Item 3
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Item 4
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Item 5
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <span>
                            <i data-feather='award'></i> P.Eng Certification
                          </span>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Item 1
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Item 2
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Item 3
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Item 4
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Item 5
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <span>
                            <i data-feather='award'></i> TEC Certification
                          </span>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Item 1
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Item 2
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Item 3
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Item 4
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Item 5
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                {/* Membership */}
                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link
                    className='nav-link'
                    href='/membership/checkout'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Membership
                  </Link>
                  <ul className='dropdown-menu pe-0 pb-0 w-50'>
                    <div className='container-fluid pe-0 pb-0'>
                      <a>
                        Membership<span>Become a part of the FANAVARAN family</span>
                      </a>
                      <div className='row'>
                        <div className='col-md-6 pb-4'>
                          <div className='row'>
                            <div className='col-6'>
                              <span>
                                <i data-feather='users'></i> Membership Overview
                              </span>
                              <li>
                                <Link className='dropdown-item' href='/membership/checkout'>
                                  Become a Member
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' href='#'>
                                  Student Membership
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' href='#'>
                                  Local Chapters
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' href='#'>
                                  Membership FAQs
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' href='#'>
                                  Business Reading Center
                                </Link>
                              </li>
                            </div>
                            <div className='col-6'>
                              <span>
                                <i data-feather='users'></i> Community
                              </span>
                              <li>
                                <Link className='dropdown-item' href='#'>
                                  Global Community
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' href='#'>
                                  Volunteering
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' href='#'>
                                  Career Central
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' href='#'>
                                  Item 4
                                </Link>
                              </li>
                              <li>
                                <Link className='dropdown-item' href='#'>
                                  Item 5
                                </Link>
                              </li>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='row FNV-QuickAction'>
                            <div className='col-12'>
                              <Link className='dropdown-item' href='/membership/checkout'>
                                <i data-feather='user'></i>
                                <span>Become a Member</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>

                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='/blog' aria-expanded='false'>
                    Blog
                  </Link>
                </li>

                <li className='nav-item dropdown FNV-MegaMenu'>
                  <Link className='nav-link' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Business Solutions
                  </Link>
                  <ul className='dropdown-menu w-50'>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Action
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Something else here
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Something else here
                            </Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li>
                            <Link className='dropdown-item' href='#'>
                              Something else here
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
              </ul>

              <div className='d-flex' role='search'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item FNV-MegaMenu-Search'>
                    <Link href='#' className='nav-link' role='button' aria-expanded='false' onClick={handleOpen}>
                      <i data-feather='search'></i>
                    </Link>
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
                    onClick={handleClose}
                    style={{ marginLeft: '10px' }}
                    href={`${appConfig.appUrl}/courses/${course.slug}`}
                    passHref
                  >
                    {course.title}
                  </Link>
                </ListItem>
              ))
            ) : (
              <>
                <h5>Popular Search Terms</h5>
                <ListItem>
                  <Link onClick={handleClose} style={{ marginLeft: '10px' }} href='#'>
                    PMP Fundamentals
                  </Link>
                </ListItem>
                <ListItem>
                  <Link onClick={handleClose} style={{ marginLeft: '10px' }} href='#'>
                    NPEE Exam Prep
                  </Link>
                </ListItem>
                <ListItem>
                  <Link onClick={handleClose} style={{ marginLeft: '10px' }} href='#'>
                    Electrician 309A
                  </Link>
                </ListItem>
              </>
            )}
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
          <Link className='navbar-brand' href='#'>
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
          <Link className='navbar-brand' href='#' passHref>
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
