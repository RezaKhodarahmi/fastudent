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

        <div className='container-fluid'>
          <div className='collapse navbar-collapse' id='FNV-Toggle'>
            <ul className='navbar-nav mb-2 mb-lg-0'>
              {/* Courses */}
              <li className='nav-item dropdown FNV-MegaMenu FNV-Courses'>
                <Link className='nav-link' href='/courses' aria-expanded='false'>
                  {t('menu-courses')}
                </Link>
                <ul className='dropdown-menu'>
                  <div className='container-fluid'>
                    <a>
                      {t('courses')} <span>{t('fanavaran-motto')}</span>
                    </a>
                    <div className='row'>
                      {/* Engineering */}
                      <div className='col'>
                        <span>
                          <i data-feather='package'></i> {t('engineering')}
                        </span>
                        <li>
                          <Link className='dropdown-item' href='/courses/nppe-package'>
                            {t('engineering-1')}
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/nppe-exam-preparation-test'>
                            {t('engineering-2')}
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/nppe-exam-preparation-test-recorded'>
                            {t('engineering-3')}
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/cba-writing-practical-workshop'>
                            {t('engineering-4')}
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/user-profile-creation-service'>
                            {t('engineering-5')}
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/category/engineering'>
                            {t('see-all')}
                          </Link>
                        </li>
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

                      {/* Architect */}
                      <div className='col'>
                        <span>
                          <i data-feather='package'></i> {t('architect')}
                        </span>
                        <li>
                          <Link className='dropdown-item' href='/courses/bcin-house-2'>
                            BCIN-HOUSE II
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/bcin-house'>
                            BCIN - OBC HOUSE EXAM PREP
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/general-legal-bcin'>
                            GENERAL LEGAL BCIN
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/civil-construction-estimator'>
                            CONSTRUCTION ESTIMATION TRAINING COURSE
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/revit-course'>
                            REVIT SOFTWARE TRAINING COURSE
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/category/architecture'>
                            {t('see-all')}
                          </Link>
                        </li>
                      </div>

                      {/* Technician */}
                      <div className='col'>
                        <span>
                          <i data-feather='package'></i> {t('technician')}
                        </span>
                        <li>
                          <Link className='dropdown-item' href='/courses/gas-technician-g2-g3'>
                            GAS TECHNICIAN (G2-G3) EXAM PREP
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/canadian-wood-framing-construction'>
                            CANADIAN WOOD FRAMING CONSTRUCTION (CWF)
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/electrician-exam-prep-quebec-province'>
                            QUEBEC ELECTRICIAN EXAM PREP (RECORDED)
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/plumbing-redseal-306a-package'>
                            PLUMBING REDSEAL PACKAGE
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/electrical-redseal-309a-package'>
                            ELECTRICAL REDSEAL PACKAGE
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/category/technician'>
                            {t('see-all')}
                          </Link>
                        </li>
                      </div>

                      {/* Job Seeker */}
                      <div className='col'>
                        <span>
                          <i data-feather='package'></i> {t('job-seeker')}
                        </span>
                        <li>
                          <Link className='dropdown-item' href='/courses/category/job-seekers'>
                            {t('see-all')}
                          </Link>
                        </li>
                      </div>

                      {/* Self Employed */}
                      <div className='col'>
                        <span>
                          <i data-feather='package'></i> {t('self-employed')}
                        </span>
                        <li>
                          <Link className='dropdown-item' href='/courses/energy-advisory-package'>
                            ENERGY ADVISORY PACKAGE
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/courses/category/self-employee'>
                            {t('see-all')}
                          </Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>

              {/* Learning */}
              <li className='nav-item dropdown FNV-MegaMenu FNV-Learning'>
                <Link className='nav-link' href='#' aria-expanded='false'>
                  {t('menu-learning')}
                </Link>
                <ul className='dropdown-menu'>
                  <div className='container-fluid'>
                    <a>
                      {t('menu-learning')} <span>{t('fanavaran-motto')}</span>
                    </a>
                    <div className='row'>
                      {/* Engineering */}
                      <div className='col'>
                        <span>
                          <i data-feather='package'></i> {t('engineering')}
                        </span>
                        <li>
                          <Link className='dropdown-item' href='/engineering/electrical-peng/'>
                            Electrical P.Eng
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/engineering/basic-level-peng/'>
                            Basic Level P.Eng
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/engineering/peng-technical-exams/'>
                            P.Eng Technical Exams
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/engineering/mechanical-course-peng/'>
                            Mechanical Course P.Eng
                          </Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>

              {/* Membership */}
              <li className='nav-item dropdown FNV-MegaMenu FNV-VIPMemberShip'>
                <Link className='nav-link' href='javascript:void(0);' data-bs-toggle='dropdown' aria-expanded='false'>
                  {t('membership')}
                </Link>
                <ul className='dropdown-menu p-0'>
                  <div className='container-fluid'>
                    <a>
                      {t('membership')} <span>{t('menu-membership-slogan')}</span>
                    </a>
                    <div className='row'>
                      <div className='col-md-6 pb-4'>
                        <span>
                          <i data-feather='users'></i> {t('menu-membership-overview')}
                        </span>
                        <li>
                          <Link className='dropdown-item' href='/membership/checkout'>
                            {t('menu-membership-button')}
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='#'>
                            {t('menu-membership-details')}
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='#'>
                            {t('menu-membership-faq')}
                          </Link>
                        </li>
                      </div>
                      <div className='col-md-6'>
                        <div className='row FNV-QuickAction'>
                          <div className='col-12'>
                            <Link className='dropdown-item' href='/membership/checkout'>
                              <i data-feather='user'></i>
                              <span>{t('menu-membership-button')}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>

              {/* Services */}
              <li className='nav-item dropdown FNV-MegaMenu FNV-VIPMemberShip'>
                <Link className='nav-link' href='javascript:void(0);' data-bs-toggle='dropdown' aria-expanded='false'>
                  {t('menu-services')}
                </Link>
                <ul className='dropdown-menu p-0'>
                  <div className='container-fluid'>
                    <a>
                      {t('menu-services')} <span>{t('menu-services-slogan')}</span>
                    </a>
                    <div className='row'>
                      <div className='col-md-6 pb-4'>
                        <span>
                          <i data-feather='list'></i> {t('menu-services')}
                        </span>
                        <li>
                          <Link className='dropdown-item' href='/services/educational-and-career-counseling'>
                            {t('menu-services-1')}
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/services/counseling-working-experience'>
                            {t('menu-services-2')}
                          </Link>
                        </li>
                        <li>
                          <Link className='dropdown-item' href='/services/course-description'>
                            {t('menu-services-3')}
                          </Link>
                          <Link className='dropdown-item' href='/services/signing-documents'>
                            {t('menu-services-4')}
                          </Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>

              {/* Blog */}
              <li className='nav-item dropdown FNV-MegaMenu'>
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
              <li className='nav-item dropdown FNV-MegaMenu'>
                <Link className='nav-link' href='/contact-us' aria-expanded='false'>
                  {t('contact-us')}
                </Link>
              </li>

              {/* About Us */}
              <li className='nav-item dropdown FNV-MegaMenu'>
                <Link className='nav-link' href='/about-us' aria-expanded='false'>
                  {t('about-us')}
                </Link>
              </li>

              {/* Appointment */}
              <li class='nav-item dropdown FNV-Appointment'>
                <a class='nav-link' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  {t('appointment')}
                </a>
                <ul class='dropdown-menu'>
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
