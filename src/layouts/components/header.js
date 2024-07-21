import React, { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Logo from 'src/views/logoMain.js'
import TopBanner from 'src/views/topBanner.js'
import TopBar from 'src/views/topBar.js'
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
import { Button } from '@mui/material'
// Includes
import Engineering from 'src/layouts/components/include/engineering'
import ProjectManagment from 'src/layouts/components/include/project-managment'
import Technician from 'src/layouts/components/include/technician'
import Architect from 'src/layouts/components/include/architect'
import Accounting from 'src/layouts/components/include/accounting'
import English from 'src/layouts/components/include/english'
import SelfEmployee from 'src/layouts/components/include/selfemployee'
import JobSeeker from 'src/layouts/components/include/jobseekers'

const Header = props => {
  // State
  const [courses, setCourses] = useState([])
  const [open, setOpen] = React.useState(false)
  const [userName, setUserName] = React.useState('')
  const [userImage, setUserImage] = React.useState('')
  const [searchInput, setSearchInput] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [cartCourses, setCartCourses] = useState([])

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
    }, 200),
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
      <TopBanner />

      <TopBar />

      {/* Navbar */}
      <nav className='navbar navbar-expand-lg FNV-Nav d-flex flex-column pb-0 pt-0'>
        <div className='container'>
          <Link className='navbar-brand' href='/'>
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

          { user ? (
            <div className='navbar-collapse justify-content-end' id=''>
              <Button href='#' className='FNV-Btn LightColor BtnMedium mx-2' onClick={e => changeLanguage()}>
                {t('menu-language')}
              </Button>
              <Link href='/cart' className='FNV-Btn SecondaryColor'>
                <i data-feather='shopping-cart'></i>
                <span className='position-absolute top-10 start-70 translate-middle badge rounded-pill bg-danger'>
                  {cartItems?.length ? cartItems.length : 0}
                  <span className='visually-hidden'>Cart Item's</span>
                </span>
              </Link>

              <div className='FNV-User dropdown'>
                <button
                  className='FNV-Btn dropdown-toggle'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  {/* User Avatar */}
                  {userImage === null || userImage === '' || userImage === 'null' ? (
                    <div className='FNV-UserAvatar'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='icon icon-tabler icon-tabler-user'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
                        <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
                      </svg>
                    </div>
                  ) : (
                    <img src={userImage} className='img-fluid' />
                  )}
                  {/* Username */}
                  <span>{userName}</span>
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <Link href='/app/dashboards/main/' className='dropdown-item'>
                      <i data-feather='pie-chart'></i> {t('menu-user-dashboard')}
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='app/pages/account-settings/account/'>
                      <i data-feather='user'></i> {t('menu-user-profile')}
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='/app/dashboards/certificates/'>
                      <i data-feather='award'></i> {t('menu-user-certificate')}
                    </Link>
                  </li>

                  <li>
                    <Link href='/' className='dropdown-item' style={{ cursor: 'pointer' }} onClick={handleLogout}>
                      <i data-feather='log-out'></i> {t('menu-user-logout')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className='navbar-collapse FNV_QuickAccess justify-content-end'>
              <Button className='FNV-Btn LightColor mx-2' onClick={e => changeLanguage()}>
                {t('menu-language')}
              </Button>

              <Link href='/cart' className='FNV-Btn LightColor BtnMedium'>
                <i data-feather='shopping-cart'></i>
              </Link>

              <Link href='/login' className='FNV-Btn BtnMedium PrimaryColor'>
                {t('menu-login')}
              </Link>

              <Link href='/register' className='FNV-Btn BtnMedium SecondaryColor'>
                {t('menu-register')}
              </Link>
            </div>
          )}
        </div>

                        {/* Architect */}
                        <div className="tab-pane fade" id="architect" role="tabpanel" aria-labelledby="architect-tab" tabindex="0">
                          <Architect />

                          {/* Consultant */}
                          <div className="container">
                            <span>Need More Solutions?</span>
                            <div className='row'>
                              <div className="col-7">
                                <p>For teams of +300 with advanced security, control, and support</p>
                              </div>
                              <div className="col-5">
                                <Link href='tel:+16723996600'>Talk to sales</Link>
                              </div>
                            </div>
                          </div>
                        </div>

                      {/* Project Management */}
                      <div className='col'>
                        <span>
                          <i data-feather='package'></i> {t('project-management')}
                        </span>
                        <li>
                          <Link className='dropdown-item' href='/courses/pmp-certification-preparation-test'>
                            {t('project-management-1')}
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/pmp-package'>
                            {t('project-management-2')}
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/pmp-certification-tests-preparation-test-recorded'>
                            {t('project-management-3')}
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/pmi-rmp-certification-test-preparation'>
                            {t('project-management-4')}
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/microsoft-project'>
                            {t('project-management-5')}
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/category/project-managment'>
                            {t('see-all')}
                          </Link>
                        </li>
                      </div>

                        {/* English */}
                        <div className="tab-pane fade" id="english" role="tabpanel" aria-labelledby="english-tab" tabindex="0">
                          <English />

                          {/* Consultant */}
                          <div className="container">
                            <span>Need More Solutions?</span>
                            <div className='row'>
                              <div className="col-7">
                                <p>For teams of +300 with advanced security, control, and support</p>
                              </div>
                              <div className="col-5">
                                <Link href='tel:+16723996600'>Talk to sales</Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Self Employee */}
                        <div className="tab-pane fade" id="self" role="tabpanel" aria-labelledby="self-tab" tabindex="0">
                          <SelfEmployee />

                          {/* Consultant */}
                          <div className="container">
                            <span>Need More Solutions?</span>
                            <div className='row'>
                              <div className="col-7">
                                <p>For teams of +300 with advanced security, control, and support</p>
                              </div>
                              <div className="col-5">
                                <Link href='tel:+16723996600'>Talk to sales</Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Job Seeker */}
                        <div className="tab-pane fade" id="jobseeker" role="tabpanel" aria-labelledby="jobseeker-tab" tabindex="0">
                          <JobSeeker />

                          {/* Consultant */}
                          <div className="container">
                            <span>Need More Solutions?</span>
                            <div className='row'>
                              <div className="col-7">
                                <p>For teams of +300 with advanced security, control, and support</p>
                              </div>
                              <div className="col-5">
                                <Link href='tel:+16723996600'>Talk to sales</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>

              {/* Learning */}
              <li className='nav-item dropdown FNV-MegaMenu FNV-MainMega'>
                <Link className='nav-link' href='#' aria-expanded='false'>
                  {t('menu-learning')}
                </Link>
                <ul className='dropdown-menu'>
                  <div className='row flex-row'>
                    <h2>{t('mega_menu-2-title')}</h2>
                    <h2>{t('mega_menu-2-desc')}</h2>
                  </div>
                  <div className='row'>
                    <div className='col-md-9'>
                      <div className='nav h-auto' id="v-pills-tab" role="tablist" aria-orientation="horizontal">
                        {/* Learning */}
                        <button className="nav-link active" id="eng-tab" data-bs-toggle="pill" data-bs-target="#eng" type="button" role="tab" aria-controls="eng" aria-selected="true">
                          <svg viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6822 20.3645H1V27.6265H10.6822V20.3645Z" />
                            <path d="M6.20426 27.6279L3.48596 35.6957" />
                            <path d="M12.3608 7.4548C14.1432 7.4548 15.5882 6.00985 15.5882 4.2274C15.5882 2.44496 14.1432 1 12.3608 1C10.5783 1 9.13336 2.44496 9.13336 4.2274C9.13336 6.00985 10.5783 7.4548 12.3608 7.4548Z" />
                            <path d="M13.168 15.5593L17.9457 18.1966" />
                            <path d="M6.71313 35.6957L9.84422 27.6279" />
                            <path d="M19.5585 30.8554L18.7191 23.5934L13.1021 20.366V12.2967C13.1021 10.7831 12.0778 10.5752 10.7141 9.87652C9.40233 9.20382 8.11963 9.09222 6.69627 9.87652C5.84928 10.3428 5.06804 10.9024 5.06804 10.9024C4.51613 11.3626 4.22717 11.9068 4.22717 12.6239V20.366M10.6942 23.7554L15.5086 25.6099L16.2913 30.8554M7.4561 13.5565V19.8783C7.4561 20.0418 7.46222 20.207 7.47598 20.3721" />
                            <path d="M19.1887 27.6524C23.4297 24.98 26.6036 22.1577 28.4184 17.4565L24.5014 16.0301L36.2522 7.4563L37.622 21.1502C37.622 21.1502 35.1896 20.3919 34.2739 20.0082C31.5112 26.7213 21.4422 35.6972 10.0645 35.6024" />
                            <path d="M8.09552 32.1365C10.7832 31.5433 13.5031 30.6244 16.0715 29.3784" />
                            <path d="M1 33.2754C2.12676 33.2754 3.28257 33.0094 4.45826 32.7449" />
                          </svg>
                          <span>{t('engineering')}</span>
                        </button>
                      </div>

                      <div className="tab-content" id="v-pills-tabContent">
                        {/* Learning */}
                        <div className="tab-pane fade show" id="eng" role="tabpanel" aria-labelledby="eng-tab" tabindex="0">
                          <Engineering />

                          {/* Consultant */}
                          <div className="container">
                            <span>Need More Solutions?</span>
                            <div className='row'>
                              <div className="col-7">
                                <p>For teams of +300 with advanced security, control, and support</p>
                              </div>
                              <div className="col-5">
                                <Link href='tel:+16723996600'>Talk to sales</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>

              {/* Services */}
              <li className='nav-item dropdown FNV-MegaMenu FNV-MainMega'>
                <Link className='nav-link' href='#' aria-expanded='false'>
                  {t('menu-services')}
                </Link>
                <ul className='dropdown-menu'>
                  <div className='row flex-row'>
                    <h2>{t('mega_menu-3-title')}</h2>
                    <h2>{t('mega_menu-3-desc')}</h2>
                  </div>
                  <div className='row'>
                    <div className='col-md-9'>
                      <div className='nav h-auto' id="services-tab" role="tablist" aria-orientation="horizontal">
                        {/* Counseling */}
                        <button className="nav-link active" id="counseling-tab" data-bs-toggle="pill" data-bs-target="#counseling" type="button" role="tab" aria-controls="counseling" aria-selected="true">
                          <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_672_2678)">
                              <path d="M20.5 10.9991C22.6333 10.9991 24.649 11.6901 26.3288 12.9973C26.5906 13.2013 26.9679 13.1541 27.1715 12.8922C27.3755 12.6304 27.3282 12.2532 27.0664 12.0495C25.1736 10.5765 22.903 9.79797 20.5 9.79797C14.5989 9.79797 9.79831 14.5989 9.79831 20.5C9.79831 25.6428 13.4447 29.9492 18.2875 30.9714C18.301 30.9746 18.3147 30.9777 18.3285 30.9802C19.7543 31.2752 21.2398 31.2764 22.6715 30.9802C22.6853 30.9777 22.699 30.9749 22.7125 30.9714C27.5553 29.9492 31.202 25.6428 31.202 20.5C31.202 18.2084 30.4872 16.0225 29.1353 14.1785C28.9392 13.911 28.5635 13.8532 28.296 14.0493C28.0283 14.2454 27.9704 14.6214 28.1665 14.8889C29.3665 16.5252 30.0008 18.4655 30.0008 20.5C30.0008 24.8132 27.1111 28.464 23.1664 29.6192V23.7954C23.7344 23.5139 24.2605 23.1419 24.7254 22.6837C27.4993 19.9479 26.9992 15.3008 23.6162 13.2498C23.2918 13.053 22.8851 13.0465 22.5548 13.2326C22.2248 13.4184 22.0199 13.769 22.0199 14.1475V17.6125L20.4615 19.1021L18.9801 17.6206V14.1475C18.9801 13.769 18.7752 13.4184 18.4452 13.2326C18.1149 13.0465 17.7079 13.0533 17.3832 13.2501C14.0565 15.2674 13.445 19.9257 16.3125 22.7096C16.7676 23.1516 17.2812 23.5123 17.8336 23.7879V25.8008C17.8336 26.1323 18.1027 26.4014 18.4342 26.4014C18.7661 26.4014 19.0348 26.1323 19.0348 25.8008V24.2346C20.003 24.4789 21.0143 24.4745 21.9652 24.238V29.8876C21.6808 29.9317 21.3924 29.963 21.1006 29.9811V26.6012C21.1006 26.2697 20.8316 26.0007 20.5 26.0007C20.1684 26.0007 19.8994 26.2697 19.8994 26.6012V29.9811C19.6076 29.9626 19.3192 29.9317 19.0348 29.8876V28.6035C19.0348 28.2716 18.7661 28.0029 18.4342 28.0029C18.1027 28.0029 17.8336 28.2716 17.8336 28.6035V29.6192C13.8889 28.464 10.9992 24.8132 10.9992 20.5C10.9992 15.2611 15.2611 10.9991 20.5 10.9991ZM18.7223 22.8751C18.6839 22.8541 18.6429 22.8379 18.6 22.8254C16.9475 22.1156 15.7682 20.5081 15.6878 18.6091C15.6168 16.9399 16.4126 15.3606 17.7789 14.4237V17.6929C17.7789 17.9672 17.8856 18.2249 18.0795 18.4189L19.733 20.0721C20.1243 20.4637 20.7681 20.4709 21.1678 20.0883L22.9039 18.4292C23.1054 18.2365 23.2208 17.9659 23.2208 17.6872V14.4234C24.5383 15.3237 25.3166 16.7904 25.3166 18.3986C25.3166 20.438 24.0635 22.1319 22.3562 22.8457C22.3371 22.8529 22.3183 22.8607 22.3002 22.8698C21.2022 23.3124 19.9113 23.3478 18.7223 22.8751Z"/>
                              <path d="M39.4729 15.9737L35.535 15.4982C35.4252 15.4851 35.3332 15.4091 35.2947 15.2999C35.1055 14.7616 34.8831 14.2267 34.6341 13.7093C34.5862 13.6098 34.5969 13.496 34.6623 13.4128L37.1165 10.2847C37.6577 9.59467 37.5982 8.60683 36.9783 7.98654L33.0135 4.02174C32.3932 3.40176 31.4053 3.34232 30.7153 3.88348L27.5872 6.33806C27.5037 6.40312 27.3902 6.41407 27.2907 6.3659C26.7736 6.11691 26.2384 5.8945 25.7004 5.70525C25.5909 5.66678 25.5149 5.57481 25.5018 5.46502L25.0263 1.52711C24.9212 0.656578 24.1805 0 23.3037 0H17.6963C16.8195 0 16.0788 0.656578 15.9737 1.52711L15.4982 5.46471C15.4851 5.57481 15.4091 5.66678 15.2999 5.70525C14.7616 5.8945 14.2264 6.11691 13.7096 6.3659C13.6098 6.41376 13.4963 6.40312 13.4131 6.33775L10.2847 3.88348C9.59467 3.34201 8.60683 3.40176 7.98685 4.02174L6.99526 5.01333C6.76066 5.24793 6.76066 5.6283 6.99526 5.86259C7.22987 6.0972 7.60992 6.0972 7.84453 5.86259L8.83612 4.87132C9.02693 4.6805 9.33067 4.66205 9.54337 4.82877L12.6714 7.28304C13.1178 7.63307 13.7153 7.69657 14.2308 7.4482C14.7081 7.21829 15.2017 7.01309 15.6984 6.83855C16.2421 6.64711 16.6225 6.17603 16.691 5.60891L17.1661 1.67101C17.1987 1.40324 17.4264 1.20117 17.6963 1.20117H23.3037C23.5733 1.20117 23.8013 1.40324 23.8339 1.67101L24.309 5.60891C24.3775 6.17603 24.7579 6.64711 25.3016 6.83823C25.7983 7.01309 26.2919 7.21829 26.7692 7.4482C27.2847 7.69626 27.8822 7.63307 28.3286 7.28304L31.4566 4.82877C31.669 4.66205 31.9731 4.6805 32.1639 4.87132L36.1287 8.83612C36.3195 9.02693 36.338 9.33098 36.1712 9.54337L33.717 12.6714C33.3669 13.1178 33.3037 13.7153 33.5518 14.2308C33.7817 14.7081 33.9869 15.202 34.1618 15.6984C34.3529 16.2421 34.8243 16.6225 35.3911 16.691L39.3287 17.1661C39.5968 17.1987 39.7988 17.4264 39.7988 17.6963V23.3037C39.7988 23.5736 39.5968 23.8013 39.329 23.8339L35.3911 24.3093C34.8243 24.3775 34.3529 24.7579 34.1618 25.3016C33.9869 25.7983 33.7817 26.2919 33.5518 26.7692C33.3037 27.2847 33.3669 27.8822 33.717 28.3286L36.1712 31.4569C36.338 31.6693 36.3195 31.9734 36.1287 32.1642L32.1639 36.129C31.9731 36.3198 31.669 36.338 31.4566 36.1715L28.3286 33.7173C27.8822 33.3669 27.2847 33.3037 26.7692 33.5521C26.2919 33.782 25.7983 33.9872 25.3016 34.1618C24.7579 34.3532 24.3775 34.8243 24.309 35.3914L23.8339 39.329C23.8013 39.5971 23.5736 39.7991 23.3037 39.7991H17.6963C17.4264 39.7991 17.1987 39.5971 17.1661 39.329L16.691 35.3914C16.6225 34.8243 16.2421 34.3532 15.6984 34.1618C15.2017 33.9872 14.7081 33.782 14.2308 33.5521C13.7153 33.3037 13.1178 33.3669 12.6714 33.7173L9.54337 36.1712C9.33098 36.3376 9.02693 36.3195 8.83612 36.1287L4.87132 32.1639C4.6805 31.9731 4.66205 31.669 4.82877 31.4566L7.28304 28.3286C7.63307 27.8822 7.69626 27.2847 7.4482 26.7692C7.21829 26.2919 7.01309 25.798 6.83823 25.3016C6.64711 24.7579 6.17571 24.3775 5.60891 24.309L1.67132 23.8339C1.40324 23.8013 1.20117 23.5736 1.20117 23.3037V17.6963C1.20117 17.4264 1.40324 17.1987 1.67101 17.1661L5.60891 16.6907C6.17571 16.6225 6.64711 16.2421 6.83823 15.6984C7.01309 15.2017 7.21829 14.7081 7.4482 14.2308C7.69626 13.7153 7.63307 13.1178 7.28304 12.6714L4.82877 9.54337C4.66205 9.33098 4.6805 9.02693 4.87132 8.83612L5.86291 7.84453C6.0972 7.60992 6.0972 7.22955 5.86291 6.99526C5.6283 6.76066 5.24793 6.76066 5.01333 6.99526L4.02205 7.98685C3.40176 8.60683 3.34232 9.59467 3.88379 10.2847L6.33806 13.4131C6.40343 13.4963 6.41407 13.6098 6.3659 13.7096C6.11691 14.2267 5.8945 14.7619 5.70525 15.2996C5.66678 15.4091 5.57481 15.4851 5.46502 15.4982L1.52711 15.9737C0.656578 16.0788 0 16.8195 0 17.6963V23.3037C0 24.1805 0.656578 24.9212 1.52711 25.0263L5.46502 25.5018C5.57481 25.5149 5.66678 25.5909 5.70525 25.7001C5.8945 26.2381 6.11691 26.7733 6.3659 27.2904C6.41407 27.3902 6.40312 27.5037 6.33806 27.5869L3.88379 30.7153C3.34232 31.4053 3.40176 32.3932 4.02205 33.0131L7.98685 36.978C8.60683 37.5982 9.59467 37.6577 10.2847 37.1162L13.4131 34.6619C13.4963 34.5966 13.6098 34.5859 13.7096 34.6341C14.2264 34.8831 14.7616 35.1052 15.2999 35.2947C15.4091 35.3329 15.4851 35.4252 15.4982 35.535L15.9737 39.4726C16.0788 40.3434 16.8195 41 17.6963 41H23.3037C24.1805 41 24.9212 40.3434 25.0263 39.4729L25.5018 35.535C25.5149 35.4252 25.5909 35.3332 25.7001 35.2947C26.2384 35.1055 26.7736 34.8831 27.2904 34.6341C27.3902 34.5859 27.5037 34.5969 27.5869 34.6623L30.7153 37.1165C31.405 37.6577 32.3932 37.5982 33.0131 36.9783L36.978 33.0135C37.5982 32.3932 37.6577 31.4053 37.1162 30.7153L34.6619 27.5872C34.5966 27.504 34.5859 27.3902 34.6341 27.2907C34.8831 26.7733 35.1052 26.2384 35.2947 25.7004C35.3329 25.5912 35.4252 25.5152 35.535 25.5018L39.4726 25.0263C40.3434 24.9212 41 24.1805 41 23.3037V17.6963C41 16.8195 40.3434 16.0788 39.4729 15.9737Z"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_672_2678">
                                <rect width="41" height="41" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <span>{t('mega_menu-3-cunseling')}</span>
                        </button>

                        {/* Course Description */}
                        <button className="nav-link" id="course-description-tab" data-bs-toggle="pill" data-bs-target="#course-description" type="button" role="tab" aria-controls="course-description" aria-selected="true">
                          <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_672_2678)">
                              <path d="M20.5 10.9991C22.6333 10.9991 24.649 11.6901 26.3288 12.9973C26.5906 13.2013 26.9679 13.1541 27.1715 12.8922C27.3755 12.6304 27.3282 12.2532 27.0664 12.0495C25.1736 10.5765 22.903 9.79797 20.5 9.79797C14.5989 9.79797 9.79831 14.5989 9.79831 20.5C9.79831 25.6428 13.4447 29.9492 18.2875 30.9714C18.301 30.9746 18.3147 30.9777 18.3285 30.9802C19.7543 31.2752 21.2398 31.2764 22.6715 30.9802C22.6853 30.9777 22.699 30.9749 22.7125 30.9714C27.5553 29.9492 31.202 25.6428 31.202 20.5C31.202 18.2084 30.4872 16.0225 29.1353 14.1785C28.9392 13.911 28.5635 13.8532 28.296 14.0493C28.0283 14.2454 27.9704 14.6214 28.1665 14.8889C29.3665 16.5252 30.0008 18.4655 30.0008 20.5C30.0008 24.8132 27.1111 28.464 23.1664 29.6192V23.7954C23.7344 23.5139 24.2605 23.1419 24.7254 22.6837C27.4993 19.9479 26.9992 15.3008 23.6162 13.2498C23.2918 13.053 22.8851 13.0465 22.5548 13.2326C22.2248 13.4184 22.0199 13.769 22.0199 14.1475V17.6125L20.4615 19.1021L18.9801 17.6206V14.1475C18.9801 13.769 18.7752 13.4184 18.4452 13.2326C18.1149 13.0465 17.7079 13.0533 17.3832 13.2501C14.0565 15.2674 13.445 19.9257 16.3125 22.7096C16.7676 23.1516 17.2812 23.5123 17.8336 23.7879V25.8008C17.8336 26.1323 18.1027 26.4014 18.4342 26.4014C18.7661 26.4014 19.0348 26.1323 19.0348 25.8008V24.2346C20.003 24.4789 21.0143 24.4745 21.9652 24.238V29.8876C21.6808 29.9317 21.3924 29.963 21.1006 29.9811V26.6012C21.1006 26.2697 20.8316 26.0007 20.5 26.0007C20.1684 26.0007 19.8994 26.2697 19.8994 26.6012V29.9811C19.6076 29.9626 19.3192 29.9317 19.0348 29.8876V28.6035C19.0348 28.2716 18.7661 28.0029 18.4342 28.0029C18.1027 28.0029 17.8336 28.2716 17.8336 28.6035V29.6192C13.8889 28.464 10.9992 24.8132 10.9992 20.5C10.9992 15.2611 15.2611 10.9991 20.5 10.9991ZM18.7223 22.8751C18.6839 22.8541 18.6429 22.8379 18.6 22.8254C16.9475 22.1156 15.7682 20.5081 15.6878 18.6091C15.6168 16.9399 16.4126 15.3606 17.7789 14.4237V17.6929C17.7789 17.9672 17.8856 18.2249 18.0795 18.4189L19.733 20.0721C20.1243 20.4637 20.7681 20.4709 21.1678 20.0883L22.9039 18.4292C23.1054 18.2365 23.2208 17.9659 23.2208 17.6872V14.4234C24.5383 15.3237 25.3166 16.7904 25.3166 18.3986C25.3166 20.438 24.0635 22.1319 22.3562 22.8457C22.3371 22.8529 22.3183 22.8607 22.3002 22.8698C21.2022 23.3124 19.9113 23.3478 18.7223 22.8751Z"/>
                              <path d="M39.4729 15.9737L35.535 15.4982C35.4252 15.4851 35.3332 15.4091 35.2947 15.2999C35.1055 14.7616 34.8831 14.2267 34.6341 13.7093C34.5862 13.6098 34.5969 13.496 34.6623 13.4128L37.1165 10.2847C37.6577 9.59467 37.5982 8.60683 36.9783 7.98654L33.0135 4.02174C32.3932 3.40176 31.4053 3.34232 30.7153 3.88348L27.5872 6.33806C27.5037 6.40312 27.3902 6.41407 27.2907 6.3659C26.7736 6.11691 26.2384 5.8945 25.7004 5.70525C25.5909 5.66678 25.5149 5.57481 25.5018 5.46502L25.0263 1.52711C24.9212 0.656578 24.1805 0 23.3037 0H17.6963C16.8195 0 16.0788 0.656578 15.9737 1.52711L15.4982 5.46471C15.4851 5.57481 15.4091 5.66678 15.2999 5.70525C14.7616 5.8945 14.2264 6.11691 13.7096 6.3659C13.6098 6.41376 13.4963 6.40312 13.4131 6.33775L10.2847 3.88348C9.59467 3.34201 8.60683 3.40176 7.98685 4.02174L6.99526 5.01333C6.76066 5.24793 6.76066 5.6283 6.99526 5.86259C7.22987 6.0972 7.60992 6.0972 7.84453 5.86259L8.83612 4.87132C9.02693 4.6805 9.33067 4.66205 9.54337 4.82877L12.6714 7.28304C13.1178 7.63307 13.7153 7.69657 14.2308 7.4482C14.7081 7.21829 15.2017 7.01309 15.6984 6.83855C16.2421 6.64711 16.6225 6.17603 16.691 5.60891L17.1661 1.67101C17.1987 1.40324 17.4264 1.20117 17.6963 1.20117H23.3037C23.5733 1.20117 23.8013 1.40324 23.8339 1.67101L24.309 5.60891C24.3775 6.17603 24.7579 6.64711 25.3016 6.83823C25.7983 7.01309 26.2919 7.21829 26.7692 7.4482C27.2847 7.69626 27.8822 7.63307 28.3286 7.28304L31.4566 4.82877C31.669 4.66205 31.9731 4.6805 32.1639 4.87132L36.1287 8.83612C36.3195 9.02693 36.338 9.33098 36.1712 9.54337L33.717 12.6714C33.3669 13.1178 33.3037 13.7153 33.5518 14.2308C33.7817 14.7081 33.9869 15.202 34.1618 15.6984C34.3529 16.2421 34.8243 16.6225 35.3911 16.691L39.3287 17.1661C39.5968 17.1987 39.7988 17.4264 39.7988 17.6963V23.3037C39.7988 23.5736 39.5968 23.8013 39.329 23.8339L35.3911 24.3093C34.8243 24.3775 34.3529 24.7579 34.1618 25.3016C33.9869 25.7983 33.7817 26.2919 33.5518 26.7692C33.3037 27.2847 33.3669 27.8822 33.717 28.3286L36.1712 31.4569C36.338 31.6693 36.3195 31.9734 36.1287 32.1642L32.1639 36.129C31.9731 36.3198 31.669 36.338 31.4566 36.1715L28.3286 33.7173C27.8822 33.3669 27.2847 33.3037 26.7692 33.5521C26.2919 33.782 25.7983 33.9872 25.3016 34.1618C24.7579 34.3532 24.3775 34.8243 24.309 35.3914L23.8339 39.329C23.8013 39.5971 23.5736 39.7991 23.3037 39.7991H17.6963C17.4264 39.7991 17.1987 39.5971 17.1661 39.329L16.691 35.3914C16.6225 34.8243 16.2421 34.3532 15.6984 34.1618C15.2017 33.9872 14.7081 33.782 14.2308 33.5521C13.7153 33.3037 13.1178 33.3669 12.6714 33.7173L9.54337 36.1712C9.33098 36.3376 9.02693 36.3195 8.83612 36.1287L4.87132 32.1639C4.6805 31.9731 4.66205 31.669 4.82877 31.4566L7.28304 28.3286C7.63307 27.8822 7.69626 27.2847 7.4482 26.7692C7.21829 26.2919 7.01309 25.798 6.83823 25.3016C6.64711 24.7579 6.17571 24.3775 5.60891 24.309L1.67132 23.8339C1.40324 23.8013 1.20117 23.5736 1.20117 23.3037V17.6963C1.20117 17.4264 1.40324 17.1987 1.67101 17.1661L5.60891 16.6907C6.17571 16.6225 6.64711 16.2421 6.83823 15.6984C7.01309 15.2017 7.21829 14.7081 7.4482 14.2308C7.69626 13.7153 7.63307 13.1178 7.28304 12.6714L4.82877 9.54337C4.66205 9.33098 4.6805 9.02693 4.87132 8.83612L5.86291 7.84453C6.0972 7.60992 6.0972 7.22955 5.86291 6.99526C5.6283 6.76066 5.24793 6.76066 5.01333 6.99526L4.02205 7.98685C3.40176 8.60683 3.34232 9.59467 3.88379 10.2847L6.33806 13.4131C6.40343 13.4963 6.41407 13.6098 6.3659 13.7096C6.11691 14.2267 5.8945 14.7619 5.70525 15.2996C5.66678 15.4091 5.57481 15.4851 5.46502 15.4982L1.52711 15.9737C0.656578 16.0788 0 16.8195 0 17.6963V23.3037C0 24.1805 0.656578 24.9212 1.52711 25.0263L5.46502 25.5018C5.57481 25.5149 5.66678 25.5909 5.70525 25.7001C5.8945 26.2381 6.11691 26.7733 6.3659 27.2904C6.41407 27.3902 6.40312 27.5037 6.33806 27.5869L3.88379 30.7153C3.34232 31.4053 3.40176 32.3932 4.02205 33.0131L7.98685 36.978C8.60683 37.5982 9.59467 37.6577 10.2847 37.1162L13.4131 34.6619C13.4963 34.5966 13.6098 34.5859 13.7096 34.6341C14.2264 34.8831 14.7616 35.1052 15.2999 35.2947C15.4091 35.3329 15.4851 35.4252 15.4982 35.535L15.9737 39.4726C16.0788 40.3434 16.8195 41 17.6963 41H23.3037C24.1805 41 24.9212 40.3434 25.0263 39.4729L25.5018 35.535C25.5149 35.4252 25.5909 35.3332 25.7001 35.2947C26.2384 35.1055 26.7736 34.8831 27.2904 34.6341C27.3902 34.5859 27.5037 34.5969 27.5869 34.6623L30.7153 37.1165C31.405 37.6577 32.3932 37.5982 33.0131 36.9783L36.978 33.0135C37.5982 32.3932 37.6577 31.4053 37.1162 30.7153L34.6619 27.5872C34.5966 27.504 34.5859 27.3902 34.6341 27.2907C34.8831 26.7733 35.1052 26.2384 35.2947 25.7004C35.3329 25.5912 35.4252 25.5152 35.535 25.5018L39.4726 25.0263C40.3434 24.9212 41 24.1805 41 23.3037V17.6963C41 16.8195 40.3434 16.0788 39.4729 15.9737Z"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_672_2678">
                                <rect width="41" height="41" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <span>{t('mega_menu-3-course-description')}</span>
                        </button>

                        {/* Credentials Verification */}
                        <button className="nav-link" id="credentials-verification-tab" data-bs-toggle="pill" data-bs-target="#credentials-verification" type="button" role="tab" aria-controls="course-description" aria-selected="true">
                          <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_672_2678)">
                              <path d="M20.5 10.9991C22.6333 10.9991 24.649 11.6901 26.3288 12.9973C26.5906 13.2013 26.9679 13.1541 27.1715 12.8922C27.3755 12.6304 27.3282 12.2532 27.0664 12.0495C25.1736 10.5765 22.903 9.79797 20.5 9.79797C14.5989 9.79797 9.79831 14.5989 9.79831 20.5C9.79831 25.6428 13.4447 29.9492 18.2875 30.9714C18.301 30.9746 18.3147 30.9777 18.3285 30.9802C19.7543 31.2752 21.2398 31.2764 22.6715 30.9802C22.6853 30.9777 22.699 30.9749 22.7125 30.9714C27.5553 29.9492 31.202 25.6428 31.202 20.5C31.202 18.2084 30.4872 16.0225 29.1353 14.1785C28.9392 13.911 28.5635 13.8532 28.296 14.0493C28.0283 14.2454 27.9704 14.6214 28.1665 14.8889C29.3665 16.5252 30.0008 18.4655 30.0008 20.5C30.0008 24.8132 27.1111 28.464 23.1664 29.6192V23.7954C23.7344 23.5139 24.2605 23.1419 24.7254 22.6837C27.4993 19.9479 26.9992 15.3008 23.6162 13.2498C23.2918 13.053 22.8851 13.0465 22.5548 13.2326C22.2248 13.4184 22.0199 13.769 22.0199 14.1475V17.6125L20.4615 19.1021L18.9801 17.6206V14.1475C18.9801 13.769 18.7752 13.4184 18.4452 13.2326C18.1149 13.0465 17.7079 13.0533 17.3832 13.2501C14.0565 15.2674 13.445 19.9257 16.3125 22.7096C16.7676 23.1516 17.2812 23.5123 17.8336 23.7879V25.8008C17.8336 26.1323 18.1027 26.4014 18.4342 26.4014C18.7661 26.4014 19.0348 26.1323 19.0348 25.8008V24.2346C20.003 24.4789 21.0143 24.4745 21.9652 24.238V29.8876C21.6808 29.9317 21.3924 29.963 21.1006 29.9811V26.6012C21.1006 26.2697 20.8316 26.0007 20.5 26.0007C20.1684 26.0007 19.8994 26.2697 19.8994 26.6012V29.9811C19.6076 29.9626 19.3192 29.9317 19.0348 29.8876V28.6035C19.0348 28.2716 18.7661 28.0029 18.4342 28.0029C18.1027 28.0029 17.8336 28.2716 17.8336 28.6035V29.6192C13.8889 28.464 10.9992 24.8132 10.9992 20.5C10.9992 15.2611 15.2611 10.9991 20.5 10.9991ZM18.7223 22.8751C18.6839 22.8541 18.6429 22.8379 18.6 22.8254C16.9475 22.1156 15.7682 20.5081 15.6878 18.6091C15.6168 16.9399 16.4126 15.3606 17.7789 14.4237V17.6929C17.7789 17.9672 17.8856 18.2249 18.0795 18.4189L19.733 20.0721C20.1243 20.4637 20.7681 20.4709 21.1678 20.0883L22.9039 18.4292C23.1054 18.2365 23.2208 17.9659 23.2208 17.6872V14.4234C24.5383 15.3237 25.3166 16.7904 25.3166 18.3986C25.3166 20.438 24.0635 22.1319 22.3562 22.8457C22.3371 22.8529 22.3183 22.8607 22.3002 22.8698C21.2022 23.3124 19.9113 23.3478 18.7223 22.8751Z"/>
                              <path d="M39.4729 15.9737L35.535 15.4982C35.4252 15.4851 35.3332 15.4091 35.2947 15.2999C35.1055 14.7616 34.8831 14.2267 34.6341 13.7093C34.5862 13.6098 34.5969 13.496 34.6623 13.4128L37.1165 10.2847C37.6577 9.59467 37.5982 8.60683 36.9783 7.98654L33.0135 4.02174C32.3932 3.40176 31.4053 3.34232 30.7153 3.88348L27.5872 6.33806C27.5037 6.40312 27.3902 6.41407 27.2907 6.3659C26.7736 6.11691 26.2384 5.8945 25.7004 5.70525C25.5909 5.66678 25.5149 5.57481 25.5018 5.46502L25.0263 1.52711C24.9212 0.656578 24.1805 0 23.3037 0H17.6963C16.8195 0 16.0788 0.656578 15.9737 1.52711L15.4982 5.46471C15.4851 5.57481 15.4091 5.66678 15.2999 5.70525C14.7616 5.8945 14.2264 6.11691 13.7096 6.3659C13.6098 6.41376 13.4963 6.40312 13.4131 6.33775L10.2847 3.88348C9.59467 3.34201 8.60683 3.40176 7.98685 4.02174L6.99526 5.01333C6.76066 5.24793 6.76066 5.6283 6.99526 5.86259C7.22987 6.0972 7.60992 6.0972 7.84453 5.86259L8.83612 4.87132C9.02693 4.6805 9.33067 4.66205 9.54337 4.82877L12.6714 7.28304C13.1178 7.63307 13.7153 7.69657 14.2308 7.4482C14.7081 7.21829 15.2017 7.01309 15.6984 6.83855C16.2421 6.64711 16.6225 6.17603 16.691 5.60891L17.1661 1.67101C17.1987 1.40324 17.4264 1.20117 17.6963 1.20117H23.3037C23.5733 1.20117 23.8013 1.40324 23.8339 1.67101L24.309 5.60891C24.3775 6.17603 24.7579 6.64711 25.3016 6.83823C25.7983 7.01309 26.2919 7.21829 26.7692 7.4482C27.2847 7.69626 27.8822 7.63307 28.3286 7.28304L31.4566 4.82877C31.669 4.66205 31.9731 4.6805 32.1639 4.87132L36.1287 8.83612C36.3195 9.02693 36.338 9.33098 36.1712 9.54337L33.717 12.6714C33.3669 13.1178 33.3037 13.7153 33.5518 14.2308C33.7817 14.7081 33.9869 15.202 34.1618 15.6984C34.3529 16.2421 34.8243 16.6225 35.3911 16.691L39.3287 17.1661C39.5968 17.1987 39.7988 17.4264 39.7988 17.6963V23.3037C39.7988 23.5736 39.5968 23.8013 39.329 23.8339L35.3911 24.3093C34.8243 24.3775 34.3529 24.7579 34.1618 25.3016C33.9869 25.7983 33.7817 26.2919 33.5518 26.7692C33.3037 27.2847 33.3669 27.8822 33.717 28.3286L36.1712 31.4569C36.338 31.6693 36.3195 31.9734 36.1287 32.1642L32.1639 36.129C31.9731 36.3198 31.669 36.338 31.4566 36.1715L28.3286 33.7173C27.8822 33.3669 27.2847 33.3037 26.7692 33.5521C26.2919 33.782 25.7983 33.9872 25.3016 34.1618C24.7579 34.3532 24.3775 34.8243 24.309 35.3914L23.8339 39.329C23.8013 39.5971 23.5736 39.7991 23.3037 39.7991H17.6963C17.4264 39.7991 17.1987 39.5971 17.1661 39.329L16.691 35.3914C16.6225 34.8243 16.2421 34.3532 15.6984 34.1618C15.2017 33.9872 14.7081 33.782 14.2308 33.5521C13.7153 33.3037 13.1178 33.3669 12.6714 33.7173L9.54337 36.1712C9.33098 36.3376 9.02693 36.3195 8.83612 36.1287L4.87132 32.1639C4.6805 31.9731 4.66205 31.669 4.82877 31.4566L7.28304 28.3286C7.63307 27.8822 7.69626 27.2847 7.4482 26.7692C7.21829 26.2919 7.01309 25.798 6.83823 25.3016C6.64711 24.7579 6.17571 24.3775 5.60891 24.309L1.67132 23.8339C1.40324 23.8013 1.20117 23.5736 1.20117 23.3037V17.6963C1.20117 17.4264 1.40324 17.1987 1.67101 17.1661L5.60891 16.6907C6.17571 16.6225 6.64711 16.2421 6.83823 15.6984C7.01309 15.2017 7.21829 14.7081 7.4482 14.2308C7.69626 13.7153 7.63307 13.1178 7.28304 12.6714L4.82877 9.54337C4.66205 9.33098 4.6805 9.02693 4.87132 8.83612L5.86291 7.84453C6.0972 7.60992 6.0972 7.22955 5.86291 6.99526C5.6283 6.76066 5.24793 6.76066 5.01333 6.99526L4.02205 7.98685C3.40176 8.60683 3.34232 9.59467 3.88379 10.2847L6.33806 13.4131C6.40343 13.4963 6.41407 13.6098 6.3659 13.7096C6.11691 14.2267 5.8945 14.7619 5.70525 15.2996C5.66678 15.4091 5.57481 15.4851 5.46502 15.4982L1.52711 15.9737C0.656578 16.0788 0 16.8195 0 17.6963V23.3037C0 24.1805 0.656578 24.9212 1.52711 25.0263L5.46502 25.5018C5.57481 25.5149 5.66678 25.5909 5.70525 25.7001C5.8945 26.2381 6.11691 26.7733 6.3659 27.2904C6.41407 27.3902 6.40312 27.5037 6.33806 27.5869L3.88379 30.7153C3.34232 31.4053 3.40176 32.3932 4.02205 33.0131L7.98685 36.978C8.60683 37.5982 9.59467 37.6577 10.2847 37.1162L13.4131 34.6619C13.4963 34.5966 13.6098 34.5859 13.7096 34.6341C14.2264 34.8831 14.7616 35.1052 15.2999 35.2947C15.4091 35.3329 15.4851 35.4252 15.4982 35.535L15.9737 39.4726C16.0788 40.3434 16.8195 41 17.6963 41H23.3037C24.1805 41 24.9212 40.3434 25.0263 39.4729L25.5018 35.535C25.5149 35.4252 25.5909 35.3332 25.7001 35.2947C26.2384 35.1055 26.7736 34.8831 27.2904 34.6341C27.3902 34.5859 27.5037 34.5969 27.5869 34.6623L30.7153 37.1165C31.405 37.6577 32.3932 37.5982 33.0131 36.9783L36.978 33.0135C37.5982 32.3932 37.6577 31.4053 37.1162 30.7153L34.6619 27.5872C34.5966 27.504 34.5859 27.3902 34.6341 27.2907C34.8831 26.7733 35.1052 26.2384 35.2947 25.7004C35.3329 25.5912 35.4252 25.5152 35.535 25.5018L39.4726 25.0263C40.3434 24.9212 41 24.1805 41 23.3037V17.6963C41 16.8195 40.3434 16.0788 39.4729 15.9737Z"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_672_2678">
                                <rect width="41" height="41" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <span>{t('mega_menu-3-credentials-verification')}</span>
                        </button>
                      </div>

                      <div className="tab-content" id="services-tabContent">
                        {/* Counseling */}
                        <div className="tab-pane fade show" id="counseling" role="tabpanel" aria-labelledby="counseling-tab" tabindex="0">
                          <li>
                            <Link href='/services/educational-and-career-counseling'>
                              {t('menu-services-1')}
                            </Link>
                          </li>
                          <li>
                            <Link href='/services/counseling-working-experience'>
                              {t('menu-services-2')}
                            </Link>
                          </li>

                          {/* Consultant */}
                          <div className="container">
                            <span>Need More Solutions?</span>
                            <div className='row'>
                              <div className="col-7">
                                <p>For teams of +300 with advanced security, control, and support</p>
                              </div>
                              <div className="col-5">
                                <Link href='tel:+16723996600'>Talk to sales</Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Course Description */}
                        <div className="tab-pane fade" id="course-description" role="tabpanel" aria-labelledby="course-description-tab" tabindex="0">
                          <li>
                            <Link href='/services/course-description'>
                              {t('menu-services-3')}
                            </Link>
                          </li>

                          {/* Consultant */}
                          <div className="container">
                            <span>Need More Solutions?</span>
                            <div className='row'>
                              <div className="col-7">
                                <p>For teams of +300 with advanced security, control, and support</p>
                              </div>
                              <div className="col-5">
                                <Link href='tel:+16723996600'>Talk to sales</Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Credentials Verification */}
                        <div className="tab-pane fade" id="credentials-verification" role="tabpanel" aria-labelledby="credentials-verification-tab" tabindex="0">
                          <li>
                            <Link href='/services/signing-documents'>
                              {t('menu-services-4')}
                            </Link>
                          </li>

                          {/* Credentials Verification */}
                          <div className="container">
                            <span>Need More Solutions?</span>
                            <div className='row'>
                              <div className="col-7">
                                <p>For teams of +300 with advanced security, control, and support</p>
                              </div>
                              <div className="col-5">
                                <Link href='tel:+16723996600'>Talk to sales</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>

              {/* Membership */}
              <li className='nav-item dropdown FNV-MegaMenu FNV-MainMega'>
                <Link className='nav-link' href='#' aria-expanded='false'>
                  {t('membership')}
                </Link>
                <ul className='dropdown-menu'>
                  <div className='row flex-row'>
                    <h2>{t('mega_menu-4-title')}</h2>
                    <h2>{t('mega_menu-4-desc')}</h2>
                  </div>
                  <div className='row'>
                    <div className='col-md-9'>
                      <div className='nav h-auto' id="membership-tab" role="tablist" aria-orientation="horizontal">
                        {/* Membership Overview */}
                        <button className="nav-link active" id="membership-overview-tab" data-bs-toggle="pill" data-bs-target="#membership-overview" type="button" role="tab" aria-controls="membership-overview" aria-selected="true">
                          <svg viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.0305 26.1278H23.512L23.0482 24.697C22.8256 24.0105 22.2159 23.5674 21.4945 23.5674C21.4938 23.5674 21.4931 23.5674 21.4924 23.5674C20.77 23.5682 20.1604 24.0132 19.9393 24.7008L19.4805 26.1278H17.9718C17.2497 26.1278 16.6396 26.5717 16.4175 27.2589C16.1954 27.946 16.4302 28.6631 17.0157 29.0857L18.2397 29.9695L17.7714 31.4065C17.5477 32.0927 17.7806 32.8102 18.3646 33.2343C18.6563 33.4461 18.9904 33.552 19.3246 33.552C19.6594 33.5519 19.9944 33.4455 20.2865 33.2328L21.5092 32.342L22.7224 33.2238C23.3065 33.6482 24.0611 33.648 24.6447 33.2225C25.2283 32.7974 25.4601 32.0793 25.2349 31.3931L24.7678 29.9695L25.9893 29.0838C26.5734 28.6603 26.8068 27.9434 26.5843 27.2573C26.3617 26.5711 25.7518 26.1278 25.0305 26.1278ZM23.2859 28.9693C22.9903 29.1836 22.8671 29.5642 22.9808 29.911L23.5943 31.781L22.0023 30.6241C21.7076 30.4097 21.3084 30.41 21.014 30.6246L19.4127 31.7913L20.0265 29.9075C20.1397 29.5604 20.0156 29.18 19.7196 28.9664L18.1149 27.8076H20.0925C20.4572 27.8076 20.7803 27.5721 20.892 27.2249L21.4945 25.3513L22.1025 27.2267C22.2148 27.573 22.5374 27.8076 22.9015 27.8076L24.8881 27.8076L23.2859 28.9693Z" />
                            <path d="M38.4045 15.2469C39.0199 14.5269 39.3927 13.5937 39.3927 12.5746V11.9187C39.3927 9.64737 37.5449 7.79946 35.2735 7.79946C34.5735 7.79946 33.9141 7.97549 33.3362 8.28481C32.7779 7.90973 32.1624 7.6283 31.5172 7.44799C32.1329 6.7279 32.506 5.7945 32.506 4.77493V4.11901C32.5059 1.84782 30.6581 0 28.3867 0C26.1154 0 24.2675 1.84782 24.2675 4.11918V4.7751C24.2675 5.79459 24.6406 6.7279 25.2563 7.44799C24.6111 7.62822 23.9959 7.9099 23.4378 8.28514C22.8598 7.97566 22.2002 7.79963 21.5001 7.79963C20.8 7.79963 20.1405 7.97566 19.5626 8.28506C19.0043 7.90998 18.389 7.62838 17.7437 7.44815C18.3595 6.72807 18.7325 5.79467 18.7325 4.77518V4.11927C18.7325 1.84782 16.8846 0 14.6133 0C12.3419 0 10.4941 1.84782 10.4941 4.11918V4.7751C10.4941 5.7945 10.8672 6.7279 11.4828 7.44799C10.8377 7.62822 10.2227 7.90998 9.66442 8.28514C9.08644 7.97566 8.42674 7.79955 7.72656 7.79955C5.4552 7.79955 3.60738 9.64745 3.60738 11.9188V12.5747C3.60738 13.5938 3.98019 14.5269 4.59554 15.2469C1.94819 15.987 0 18.4192 0 21.2995V23.0687C0 23.5324 0.375998 23.9085 0.839844 23.9085H3.82776C4.2916 23.9085 4.6676 23.5324 4.6676 23.0687C4.6676 22.6049 4.2916 22.2288 3.82776 22.2288H1.67969V21.2995C1.67969 18.76 3.74579 16.6939 6.28531 16.6939H6.88672V17.752C6.88672 18.2158 7.26272 18.5919 7.72656 18.5919C8.19041 18.5919 8.56641 18.2158 8.56641 17.752V16.6939H9.16782C11.7073 16.6939 13.7734 18.76 13.7734 21.2995V22.2288H11.3863C10.9225 22.2288 10.5465 22.6049 10.5465 23.0687C10.5465 23.5324 10.9225 23.9085 11.3863 23.9085H13.6914C12.7025 25.3939 12.1252 27.1757 12.1252 29.09C12.1252 34.2593 16.3308 38.4648 21.5 38.4648C26.6692 38.4648 30.8748 34.2593 30.8748 29.0901C30.8748 27.1757 30.2975 25.3939 29.3086 23.9086H42.1602C42.624 23.9086 43 23.5325 43 23.0687V21.2996C43 18.4192 41.0518 15.987 38.4045 15.2469ZM32.8339 11.9188C32.8339 10.5736 33.9283 9.47923 35.2734 9.47923C36.6185 9.47923 37.7129 10.5736 37.7129 11.9188V12.5747C37.7129 13.9199 36.6185 15.0143 35.2734 15.0143C33.9283 15.0143 32.8339 13.9199 32.8339 12.5747V11.9188ZM25.9472 4.11918C25.9472 2.774 27.0415 1.67969 28.3867 1.67969C29.7319 1.67969 30.8262 2.774 30.8262 4.11918V4.7751C30.8262 6.12028 29.7318 7.21468 28.3867 7.21468C27.0416 7.21468 25.9472 6.12028 25.9472 4.7751V4.11918ZM24.7832 9.43464C25.4449 9.08325 26.1886 8.89428 26.9455 8.89428H27.5469V9.9524C27.5469 10.4162 27.9229 10.7922 28.3867 10.7922C28.8506 10.7922 29.2266 10.4162 29.2266 9.9524V8.89428H29.828C30.597 8.89428 31.3315 9.07913 31.9917 9.4327C31.4666 10.1241 31.1542 10.9856 31.1542 11.9188V12.5747C31.1542 13.5938 31.527 14.5269 32.1423 15.2469C30.5431 15.6941 29.2001 16.7586 28.3867 18.1669C27.5733 16.7585 26.2303 15.6941 24.6311 15.2469C25.2465 14.5269 25.6193 13.5938 25.6193 12.5747V11.9188C25.6192 10.9864 25.3074 10.1258 24.7832 9.43464ZM21.5 18.5919C21.9638 18.5919 22.3398 18.2158 22.3398 17.752V16.6939H22.9413C25.4808 16.6939 27.5469 18.76 27.5469 21.2995V21.9325C25.9133 20.5503 23.8024 19.7154 21.5 19.7154C19.1976 19.7154 17.0867 20.5502 15.4531 21.9325V21.2995C15.4531 18.76 17.5192 16.6939 20.0587 16.6939H20.6602V17.752C20.6602 18.2159 21.0362 18.5919 21.5 18.5919ZM19.0605 11.9188C19.0605 10.5736 20.1549 9.47923 21.5 9.47923C22.8451 9.47923 23.9395 10.5736 23.9395 11.9188V12.5747C23.9395 13.9199 22.8451 15.0143 21.5 15.0143C20.1549 15.0143 19.0605 13.9199 19.0605 12.5747V11.9188ZM12.1738 4.11918C12.1738 2.774 13.2681 1.67969 14.6133 1.67969C15.9585 1.67969 17.0528 2.774 17.0528 4.11918V4.7751C17.0528 6.12028 15.9584 7.21468 14.6133 7.21468C13.2682 7.21468 12.1738 6.12028 12.1738 4.7751V4.11918ZM10.1661 12.5747C10.1661 13.9199 9.07166 15.0143 7.72656 15.0143C6.38147 15.0143 5.28707 13.9199 5.28707 12.5747V11.9188C5.28707 10.5736 6.38147 9.47923 7.72656 9.47923C9.07166 9.47923 10.1661 10.5736 10.1661 11.9188V12.5747ZM10.8577 15.2469C11.473 14.5269 11.8458 13.5937 11.8458 12.5746V11.9187C11.8458 10.9863 11.534 10.1257 11.0098 9.43455C11.6716 9.08316 12.4152 8.8942 13.1721 8.8942H13.7734V9.95232C13.7734 10.4161 14.1494 10.7922 14.6133 10.7922C15.0771 10.7922 15.4531 10.4161 15.4531 9.95232V8.8942H16.0545C16.8237 8.8942 17.5581 9.07905 18.2183 9.43254C17.6932 10.124 17.3807 10.9854 17.3807 11.9187V12.5746C17.3807 13.5937 17.7535 14.5269 18.3689 15.2469C16.7697 15.694 15.4267 16.7585 14.6133 18.1668C13.7999 16.7585 12.4569 15.694 10.8577 15.2469ZM21.5 36.7852C17.2569 36.7852 13.8049 33.3331 13.8049 29.0901C13.8049 24.8471 17.2569 21.3951 21.5 21.3951C25.7431 21.3951 29.1951 24.8471 29.1951 29.0901C29.1951 33.3331 25.7431 36.7852 21.5 36.7852ZM41.3203 22.2289H29.2266V21.2996C29.2266 18.7601 31.2927 16.694 33.8322 16.694H34.4336V17.7521C34.4336 18.2159 34.8096 18.592 35.2734 18.592C35.7373 18.592 36.1133 18.2159 36.1133 17.7521V16.694H36.7147C39.2542 16.694 41.3203 18.7601 41.3203 21.2996V22.2289Z" />
                            <path d="M7.6073 23.9086C8.07113 23.9086 8.44714 23.5326 8.44714 23.0688C8.44714 22.6049 8.07113 22.2289 7.6073 22.2289C7.14347 22.2289 6.76746 22.6049 6.76746 23.0688C6.76746 23.5326 7.14347 23.9086 7.6073 23.9086Z" />
                          </svg>
                          <span>{t('mega_menu-4-membership-overview')}</span>
                        </button>
                      </div>

                      <div className="tab-content" id="membership-tabContent">
                        {/* Membership Overview */}
                        <div className="tab-pane fade show" id="membership-overview" role="tabpanel" aria-labelledby="membership-overview-tab" tabindex="0">
                          <li>
                            <Link href='/membership/checkout'>
                              {t('menu-membership-button')}
                            </Link>
                          </li>
                          <li>
                            <Link href='#'>
                              {t('menu-membership-details')}
                            </Link>
                          </li>
                          <li>
                            <Link href='#'>
                              {t('menu-membership-faq')}
                            </Link>
                          </li>

                          {/* Consultant */}
                          <div className="container">
                            <span>Need More Solutions?</span>
                            <div className='row'>
                              <div className="col-7">
                                <p>For teams of +300 with advanced security, control, and support</p>
                              </div>
                              <div className="col-5">
                                <Link href='tel:+16723996600'>Talk to sales</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-md-3'>
                      <Link href="/membership/checkout">
                        <svg width="102" height="84" viewBox="0 0 102 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M76.915 83.1341H25.085C23.1962 83.1366 21.3609 82.5062 19.8723 81.3436C18.3838 80.1809 17.3277 78.5529 16.8727 76.7197L8.88382 44.7731C8.63363 43.7709 8.64715 42.7209 8.92307 41.7254C9.19899 40.73 9.72791 39.8229 10.4584 39.0924C11.1888 38.362 12.0959 37.8331 13.0914 37.5571C14.0868 37.2812 15.1368 37.2677 16.139 37.5179L28.8971 40.708C29.1695 40.7759 29.4556 40.7641 29.7214 40.674C29.9872 40.5839 30.2216 40.4194 30.3965 40.1999L44.3897 22.7092C45.2087 21.7584 46.2231 20.9954 47.3638 20.4723C48.5045 19.9492 49.7446 19.6783 50.9995 19.678C52.2544 19.6778 53.4946 19.9483 54.6355 20.471C55.7764 20.9937 56.791 21.7564 57.6103 22.7069L71.6035 40.2023C71.781 40.4197 72.0164 40.5826 72.2825 40.6721C72.5486 40.7616 72.8346 40.7741 73.1074 40.7081L85.8588 37.518C86.8609 37.2675 87.9109 37.2807 88.9064 37.5563C89.902 37.8319 90.8092 38.3605 91.5399 39.0908C92.2706 39.821 92.7998 40.7279 93.076 41.7233C93.3522 42.7187 93.3661 43.7686 93.1162 44.7709L85.1273 76.722C84.6719 78.5548 83.6156 80.1821 82.127 81.3444C80.6385 82.5066 78.8036 83.1367 76.915 83.1341ZM16.0866 44.7207L23.6631 75.0221C23.7415 75.3398 23.9242 75.6221 24.182 75.8237C24.4398 76.0252 24.7577 76.1345 25.085 76.1341H76.915C77.242 76.1346 77.5597 76.0256 77.8174 75.8245C78.0751 75.6233 78.258 75.3416 78.3369 75.0244L85.9134 44.7207L74.8028 47.4983C73.2303 47.889 71.5789 47.8212 70.0436 47.3032C68.5084 46.7851 67.1536 45.8384 66.1393 44.5748L52.1462 27.0795C51.3805 26.127 50.6195 26.1247 49.8538 27.0818L35.8607 44.5726C34.8473 45.836 33.4934 46.7829 31.959 47.3014C30.4246 47.8199 28.7738 47.8882 27.2018 47.4984L16.0866 44.7207Z" />
                          <path d="M7.83334 33.8333C11.6993 33.8333 14.8333 30.6993 14.8333 26.8333C14.8333 22.9674 11.6993 19.8333 7.83334 19.8333C3.96735 19.8333 0.833344 22.9674 0.833344 26.8333C0.833344 30.6993 3.96735 33.8333 7.83334 33.8333Z" />
                          <path d="M94.1667 33.8333C98.0327 33.8333 101.167 30.6993 101.167 26.8333C101.167 22.9674 98.0327 19.8333 94.1667 19.8333C90.3007 19.8333 87.1667 22.9674 87.1667 26.8333C87.1667 30.6993 90.3007 33.8333 94.1667 33.8333Z" />
                          <path d="M51 14C54.866 14 58 10.866 58 7C58 3.13401 54.866 0 51 0C47.134 0 44 3.13401 44 7C44 10.866 47.134 14 51 14Z" />
                        </svg>
                        <span>Become a Member</span>
                      </Link>
                    </div>
                  </div>
                </ul>
              </li>

              {/* Blog */}
              <li className='nav-item dropdown FNV-MegaMenu d-lg-none d-xl-block'>
                <Link className='nav-link' href='/blog' aria-expanded='false'>
                  {t('blog')}
                </Link>
              </li>

              {/* Webinars */}
              <li className='nav-item dropdown FNV-MegaMenu'>
                <Link className='nav-link' href='/webinars' aria-expanded='false'>
                  {t('webinars')}
                </Link>
              </li>

              {/* Contact Us */}
              <li className='nav-item dropdown FNV-MegaMenu d-lg-none d-xl-block'>
                <Link className='nav-link' href='/contact-us' aria-expanded='false'>
                  {t('contact-us')}
                </Link>
              </li>

              {/* About Us */}
              <li className='nav-item dropdown FNV-MegaMenu d-lg-none d-xl-block'>
                <Link className='nav-link' href='/about-us' aria-expanded='false'>
                  {t('about-us')}
                </Link>
              </li>

              {/* Appointment */}
              <li className='nav-item dropdown FNV-Appointment'>
                <a className='nav-link' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  {t('appointment')}
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item' href='/services/consultant'>
                      {t('menu-appointment1')}
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='/services/counseling-working-experience'>
                      {t('menu-appointment2')}
                    </Link>
                  </li>
                </ul>
              </li>
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

      {/* Modal */}
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

      {/* OffCanvas */}
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
