// React
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

          <div className='collapse navbar-collapse' id='FNV-Toggle'>
            <ul className='navbar-nav mb-2 mb-lg-0'>
              {/* Courses */}
              <li className='nav-item dropdown FNV-MegaMenu FNV-MainMega'>
                <Link className='nav-link' href='/courses' aria-expanded='false'>
                  {t('menu-courses')}
                </Link>
                <ul className='dropdown-menu'>
                  <div className='row flex-row'>
                    <h2>{t('mega_menu-1-title')}</h2>
                    <h2>{t('courses')}</h2>
                  </div>
                  <div className='row'>
                    <div className='col-12 col-md-9'>
                      <div className='nav' id="v-pills-tab" role="tablist" aria-orientation="horizontal">
                        {/* Engineering */}
                        <button className="nav-link active" id="engineering-tab" data-bs-toggle="pill" data-bs-target="#engineering" type="button" role="tab" aria-controls="engineering" aria-selected="true">
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

                        {/* Project Management */}
                        <button className="nav-link" id="project-tab" data-bs-toggle="pill" data-bs-target="#project" type="button" role="tab" aria-controls="project" aria-selected="true">
                          <svg viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.0466 29.4856V32.3601C27.0466 33.1539 26.3993 33.7968 25.6 33.7968H2.44662C1.64737 33.7968 1 33.1539 1 32.3601V5.77356C1 4.97982 1.64737 4.33691 2.44662 4.33691H5.34111" />
                            <path d="M22.7041 4.33716H25.5986C26.3978 4.33716 27.0452 4.98006 27.0452 5.7738V9.36665" />
                            <path d="M24.1526 29.4853V30.922H3.89368V7.21118H5.3403" />
                            <path d="M22.7041 7.21118H24.152V9.36615" />
                            <path d="M18.7271 3.66929H16.7116C16.7116 2.19555 15.5077 1 14.0238 1C12.5398 1 11.3359 2.19555 11.3359 3.66929H9.32037C8.20739 3.66929 7.30481 4.56565 7.30481 5.67095V7.6726H20.7439V5.67095C20.7439 4.56565 19.8414 3.66929 18.7284 3.66929H18.7271Z" />
                            <path d="M14.0219 2.90015V4.33679" />
                            <path d="M24.8753 27.0805C29.132 27.0805 32.5827 23.6536 32.5827 19.4262C32.5827 15.1989 29.132 11.772 24.8753 11.772C20.6186 11.772 17.1678 15.1989 17.1678 19.4262C17.1678 23.6536 20.6186 27.0805 24.8753 27.0805Z" />
                            <path d="M24.8754 13.6851V19.4267L27.4449 22.6152" />
                            <path d="M7.51111 14.3959L8.95773 15.8338L11.8522 12.241" />
                            <path d="M7.51111 20.145L8.95773 21.5816L11.8522 17.9888" />
                            <path d="M7.51111 25.8928L8.95773 27.3294L11.8522 23.7378" />
                          </svg>
                          <span>{t('project-management')}</span>
                        </button>

                        {/* Technician */}
                        <button className="nav-link" id="technician-tab" data-bs-toggle="pill" data-bs-target="#technician" type="button" role="tab" aria-controls="technician" aria-selected="true">
                          <svg viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.9189 29.4771C25.5196 31.0708 27.1187 32.663 28.7193 34.2567C29.6875 35.2316 31.4387 34.9792 32.7306 33.6799L32.7873 33.6228C34.0776 32.3235 34.2715 30.6157 33.3034 29.6408C31.7759 28.1027 30.2468 26.563 28.7193 25.0249" />
                            <path d="M25.7079 16.0693L26.2808 15.4925C26.597 15.174 26.597 14.6573 26.2808 14.3389L24.5623 12.6085C24.246 12.29 23.7329 12.29 23.4166 12.6085L22.271 13.7621" />
                            <path d="M20.551 15.4924L22.2695 13.762C22.5857 13.4436 22.5857 12.9268 22.2695 12.6084L20.551 10.878C20.2348 10.5595 19.7216 10.5595 19.4054 10.878L17.6869 12.6084" />
                            <path d="M21.9219 21.5234L23.4151 23.003C23.7328 23.3169 24.2415 23.3154 24.5563 22.9985L28.572 18.9549C28.8882 18.6364 28.8882 18.1197 28.572 17.8013L26.8535 16.0709C26.5373 15.7524 26.0241 15.7524 25.7079 16.0709L23.4151 18.3781" />
                            <path d="M17.1119 32.8027L18.2576 31.6491C19.2436 30.6563 21.4529 31.8925 22.8417 30.4955C24.229 29.0986 24.5601 28.7651 24.5601 28.7651" />
                            <path d="M15.9668 25.8778C18.4371 23.3904 18.5475 19.2446 16.5396 17.2228C16.9141 17.5998 17.8553 18.5477 18.8324 19.53C20.8209 21.5323 23.506 20.2315 23.9893 18.9532C23.3643 18.3238 17.6868 12.6069 17.6868 12.6069C16.9245 11.8393 16.1965 11.7177 14.9882 11.9024C13.7799 12.0872 11.8437 12.284 11.1679 12.7857C10.4922 13.2874 9.894 15.7703 9.894 17.6825C9.894 20.0017 9.57477 21.9304 9.09145 22.417L7.9458 23.5706" />
                            <path d="M28.5716 18.9546L30.8629 21.2618C31.1792 21.5802 31.1792 22.097 30.8629 22.4154L26.8517 26.4545C26.5354 26.7729 26.0223 26.7729 25.706 26.4545L23.9876 24.7241C23.6713 24.4057 23.6713 23.8889 23.9876 23.5705L24.5604 22.9937" />
                            <path d="M18.2537 33.9529L6.79431 22.418L2.21407 27.0316L13.6734 38.5665L18.2537 33.9529Z" />
                            <path d="M29.2938 30.2173L31.0138 31.9492" />
                            <path d="M6.22546 26.4561L7.37111 27.6097" />
                            <path d="M15.6685 11.7312L12.879 8.92235C13.5204 6.82393 13.0207 4.44914 11.3708 2.78783C9.5002 0.904213 6.71664 0.512168 4.45817 1.59667L8.79312 5.96174L5.92752 8.84724L1.59256 4.48218C0.515532 6.75634 0.904873 9.55923 2.7755 11.4428C4.18071 12.8578 6.10056 13.4271 7.92643 13.1672L9.93728 15.1921" />
                          </svg>
                          <span>{t('technician')}</span>
                        </button>

                        {/* Architect */}
                        <button className="nav-link" id="architect-tab" data-bs-toggle="pill" data-bs-target="#architect" type="button" role="tab" aria-controls="architect" aria-selected="true">
                          <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.60306 30.9206C5.28338 30.3765 4.62712 30.1537 4.06922 30.1537C2.374 30.1537 1 31.5277 1 33.2229V12.5099C1 10.8147 2.374 9.44067 4.06922 9.44067C4.62865 9.44067 5.34024 9.57285 5.60306 10.2076V30.9221V30.9206Z" />
                            <path d="M13.2755 13.2751H5.60327" />
                            <path d="M31.688 13.2751H24.0157" />
                            <path d="M36.2906 33.2214C36.2906 34.9167 34.9166 36.2907 33.2214 36.2907H4.06922C2.374 36.2907 1 34.9167 1 33.2214" />
                            <path d="M31.688 30.9208C32.0077 30.3768 32.6639 30.1539 33.2218 30.1539C34.917 30.1539 36.291 31.5279 36.291 33.2231V12.5101C36.291 10.8149 34.917 9.44092 33.2218 9.44092C32.6624 9.44092 31.9508 9.57309 31.688 10.2078V30.9224V30.9208Z" />
                            <path d="M18.6452 1L17.1113 2.53538V5.60306L18.6452 7.13843L20.179 5.60306V2.53538L18.6452 1Z" />
                            <path d="M16.3449 14.042L9.43958 30.9204" />
                            <path d="M27.0847 30.9204L20.9478 14.042" />
                            <path d="M18.6453 19.4121V26.3175" />
                            <path d="M18.6455 14.8092C20.7641 14.8092 22.4816 13.0917 22.4816 10.9731C22.4816 8.85446 20.7641 7.13696 18.6455 7.13696C16.5268 7.13696 14.8093 8.85446 14.8093 10.9731C14.8093 13.0917 16.5268 14.8092 18.6455 14.8092Z" />
                            <path d="M26.3182 18.645C24.2818 20.8151 21.8565 22.4812 18.6459 22.4812C15.4353 22.4812 13.01 20.8151 10.9736 18.645" />
                          </svg>

                          <span>{t('architect')}</span>
                        </button>

                        {/* Accounting */}
                        <button className="nav-link" id="accounting-tab" data-bs-toggle="pill" data-bs-target="#accounting" type="button" role="tab" aria-controls="accounting" aria-selected="true">
                          <svg viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6387 17.6174H5.10525C4.83679 17.6174 4.61926 17.835 4.61926 18.1034C4.61926 18.3718 4.83679 18.5894 5.10525 18.5894H11.6387C11.9072 18.5894 12.1247 18.3718 12.1247 18.1034C12.1247 17.835 11.9072 17.6174 11.6387 17.6174Z" />
                            <path d="M11.6387 21.856H5.10525C4.83679 21.856 4.61926 22.0735 4.61926 22.3419C4.61926 22.6103 4.83679 22.8279 5.10525 22.8279H11.6387C11.9072 22.8279 12.1247 22.6103 12.1247 22.3419C12.1247 22.0735 11.9072 21.856 11.6387 21.856Z" />
                            <path d="M11.6387 26.0947H5.10525C4.83679 26.0947 4.61926 26.3123 4.61926 26.5807C4.61926 26.8491 4.83679 27.0667 5.10525 27.0667H11.6387C11.9072 27.0667 12.1247 26.8491 12.1247 26.5807C12.1247 26.3123 11.9072 26.0947 11.6387 26.0947Z" />
                            <path d="M17.0889 22.7779H18.1203C18.3888 22.7779 18.6063 22.5603 18.6063 22.2919C18.6063 22.0235 18.3888 21.8059 18.1203 21.8059H17.0889C16.8204 21.8059 16.6029 22.0235 16.6029 22.2919C16.6029 22.5603 16.8205 22.7779 17.0889 22.7779Z" />
                            <path d="M21.2538 21.8059H20.2223C19.9539 21.8059 19.7363 22.0235 19.7363 22.2919C19.7363 22.5603 19.9539 22.7779 20.2223 22.7779H21.2538C21.5222 22.7779 21.7397 22.5603 21.7397 22.2919C21.7397 22.0235 21.5222 21.8059 21.2538 21.8059Z" />
                            <path d="M24.3871 21.8059H23.3556C23.0872 21.8059 22.8696 22.0235 22.8696 22.2919C22.8696 22.5603 23.0872 22.7779 23.3556 22.7779H24.3871C24.6555 22.7779 24.873 22.5603 24.873 22.2919C24.873 22.0235 24.6555 21.8059 24.3871 21.8059Z" />
                            <path d="M27.5204 21.8059H26.489C26.2206 21.8059 26.0031 22.0235 26.0031 22.2919C26.0031 22.5603 26.2206 22.7779 26.489 22.7779H27.5204C27.7889 22.7779 28.0064 22.5603 28.0064 22.2919C28.0064 22.0235 27.7888 21.8059 27.5204 21.8059Z" />
                            <path d="M17.0889 26.305H18.1203C18.3888 26.305 18.6063 26.0874 18.6063 25.819C18.6063 25.5506 18.3888 25.333 18.1203 25.333H17.0889C16.8204 25.333 16.6029 25.5506 16.6029 25.819C16.6029 26.0874 16.8205 26.305 17.0889 26.305Z" />
                            <path d="M21.2538 25.333H20.2223C19.9539 25.333 19.7363 25.5506 19.7363 25.819C19.7363 26.0874 19.9539 26.305 20.2223 26.305H21.2538C21.5222 26.305 21.7397 26.0874 21.7397 25.819C21.7397 25.5506 21.5222 25.333 21.2538 25.333Z" />
                            <path d="M24.3871 25.333H23.3556C23.0872 25.333 22.8696 25.5506 22.8696 25.819C22.8696 26.0874 23.0872 26.305 23.3556 26.305H24.3871C24.6555 26.305 24.873 26.0874 24.873 25.819C24.873 25.5506 24.6555 25.333 24.3871 25.333Z" />
                            <path d="M27.5204 25.333H26.489C26.2206 25.333 26.0031 25.5506 26.0031 25.819C26.0031 26.0874 26.2206 26.305 26.489 26.305H27.5204C27.7889 26.305 28.0064 26.0874 28.0064 25.819C28.0064 25.5506 27.7888 25.333 27.5204 25.333Z" />
                            <path d="M6.17714 12.7776C5.95268 12.6307 5.65137 12.6937 5.50441 12.9182C5.35745 13.1428 5.42043 13.4441 5.64509 13.591C6.35644 14.0564 6.83672 14.185 7.4742 14.2143V14.8685C7.4742 15.1369 7.69172 15.3544 7.96018 15.3544C8.22864 15.3544 8.44616 15.1369 8.44616 14.8685V14.1779C9.67972 13.9597 10.4 12.9536 10.5579 12.0143C10.7577 10.8261 10.1357 9.79285 8.97336 9.38197C8.78363 9.3149 8.60868 9.25069 8.44616 9.18855V6.47073C8.91912 6.56327 9.20235 6.80541 9.22503 6.82531C9.42234 7.00454 9.72773 6.99132 9.90891 6.79498C10.0909 6.59767 10.0785 6.29021 9.88118 6.10826C9.85007 6.07955 9.31698 5.60011 8.44616 5.48658V4.90127C8.44616 4.63287 8.22864 4.41528 7.96018 4.41528C7.69172 4.41528 7.4742 4.63287 7.4742 4.90127V5.52397C7.37856 5.54348 7.28065 5.56804 7.1806 5.59817C6.4178 5.82794 5.84771 6.48143 5.69271 7.30364C5.55184 8.05128 5.78991 8.77112 6.31419 9.18233C6.60513 9.41048 6.96962 9.61939 7.4742 9.84152V13.2421C7.00163 13.2164 6.69649 13.1174 6.17714 12.7776ZM8.44616 10.2256C8.51232 10.2496 8.57984 10.2738 8.64944 10.2984C9.71043 10.6735 9.64479 11.5832 9.59944 11.8532C9.50762 12.3994 9.1152 12.9814 8.44616 13.1793V10.2256ZM6.91396 8.41745C6.67634 8.23116 6.57442 7.87328 6.6479 7.48359C6.71645 7.11975 6.96605 6.67783 7.46091 6.52873C7.46538 6.52737 7.46973 6.52633 7.4742 6.52503V8.76607C7.24527 8.64807 7.06221 8.53377 6.91396 8.41745Z"  stroke="#0074FF" stroke-width="0.5" />
                            <path d="M26.457 31.3166C26.1885 31.3166 25.971 31.5341 25.971 31.8025V32.15C25.971 32.7315 25.498 33.2045 24.9165 33.2045H3.02642C2.44493 33.2045 1.97197 32.7315 1.97197 32.15V3.02642C1.97197 2.44499 2.44493 1.97197 3.02642 1.97197H20.0299C20.0813 1.97197 20.1319 1.97696 20.182 1.98428V6.04794C20.182 6.9925 20.9505 7.76094 21.895 7.76094H25.9587C25.966 7.81109 25.971 7.86163 25.971 7.91302V10.233C25.971 10.5014 26.1885 10.719 26.457 10.719C26.7254 10.719 26.943 10.5014 26.943 10.233V7.91302C26.943 7.35751 26.677 6.80621 26.3597 6.4909C26.1603 6.29139 21.4681 1.59873 21.4628 1.59355L21.4517 1.5826C21.4514 1.58221 21.4509 1.58175 21.4504 1.58137L21.4502 1.58111C21.4489 1.57981 21.4476 1.57858 21.4462 1.57722C21.081 1.22044 20.5773 1 20.0299 1H3.02642C1.90905 1 1 1.90905 1 3.02642V32.15C1 33.2674 1.90905 34.1764 3.02642 34.1764H24.9165C26.0339 34.1764 26.9429 33.2674 26.9429 32.15V31.8025C26.943 31.5341 26.7254 31.3166 26.457 31.3166ZM21.154 2.65934C21.516 3.02137 24.7948 6.30001 25.2837 6.78897H21.895C21.4863 6.78897 21.1539 6.45656 21.1539 6.04794V2.65934H21.154Z" />
                            <path d="M28.8475 12.0271H15.7618C14.8316 12.0271 14.0747 12.7839 14.0747 13.7142V15.3492C14.0747 15.6175 14.2922 15.8351 14.5607 15.8351C14.8291 15.8351 15.0467 15.6175 15.0467 15.3492V13.7142C15.0467 13.3199 15.3675 12.9991 15.7618 12.9991H28.8475C29.2418 12.9991 29.5626 13.3199 29.5626 13.7142V28.3322C29.5626 28.7265 29.2418 29.0473 28.8475 29.0473H15.7618C15.3675 29.0473 15.0467 28.7265 15.0467 28.3322V17.6212C15.0467 17.3528 14.8291 17.1352 14.5607 17.1352C14.2922 17.1352 14.0747 17.3528 14.0747 17.6212V28.3322C14.0747 29.2624 14.8316 30.0193 15.7618 30.0193H28.8475C29.7777 30.0193 30.5346 29.2625 30.5346 28.3322V13.7142C30.5346 12.7839 29.7778 12.0271 28.8475 12.0271Z" />
                            <path d="M28.0063 15.8597C28.0063 15.3857 27.6207 15 27.1466 15H17.4627C16.9886 15 16.6029 15.3857 16.6029 15.8597V18.3469C16.6029 18.821 16.9886 19.2067 17.4627 19.2067H27.1466C27.6206 19.2067 28.0063 18.821 28.0063 18.3469V15.8597ZM27.0344 18.2347H17.5749V15.972H27.0343V18.2347H27.0344Z" />
                          </svg>
                          <span>{t('accounting')}</span>
                        </button>

                        {/* English */}
                        <button className="nav-link" id="english-tab" data-bs-toggle="pill" data-bs-target="#english" type="button" role="tab" aria-controls="english" aria-selected="true">
                          <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3477 18.5938C13.8978 18.5938 14.3438 18.1478 14.3438 17.5977V14.1648L17.0099 18.0255C17.296 18.439 17.7759 18.614 18.2324 18.4714C18.6969 18.3263 18.9971 17.8956 18.9971 17.3739C18.9971 17.3707 18.9971 17.3675 18.997 17.3642L18.9349 10.9474C18.9298 10.4005 18.4848 9.96094 17.9392 9.96094C17.9359 9.96094 17.9326 9.96094 17.9294 9.961C17.3793 9.96632 16.9376 10.4166 16.943 10.9667L16.9768 14.4717L14.1673 10.4034C13.9196 10.0447 13.4675 9.88869 13.0512 10.0184C12.635 10.1482 12.3516 10.5335 12.3516 10.9694V17.5977C12.3516 18.1478 12.7975 18.5938 13.3477 18.5938Z" />
                            <path d="M7.23828 18.5938H10.0364C10.5865 18.5938 11.0325 18.1478 11.0325 17.5977C11.0325 17.0475 10.5865 16.6016 10.0364 16.6016H8.23438V15.2734H9.83005C10.3802 15.2734 10.8261 14.8275 10.8261 14.2773C10.8261 13.7272 10.3802 13.2812 9.83005 13.2812H8.23438V11.9531H10.0364C10.5865 11.9531 11.0325 11.5071 11.0325 10.957C11.0325 10.4069 10.5865 9.96094 10.0364 9.96094H7.23828C6.68817 9.96094 6.24219 10.4069 6.24219 10.957V17.5977C6.24219 18.1478 6.68817 18.5938 7.23828 18.5938Z" />
                            <path d="M24.4268 18.5938C26.7008 18.5938 28.2891 16.8188 28.2891 14.2773C28.2891 13.7272 27.8431 13.2812 27.293 13.2812H25.3064C24.7563 13.2812 24.3103 13.7272 24.3103 14.2773C24.3103 14.8275 24.7563 15.2734 25.3064 15.2734H26.1541C25.923 16.0125 25.3926 16.6016 24.4268 16.6016C23.1452 16.6016 22.1025 15.5589 22.1025 14.2773C22.1025 12.9958 23.1452 11.9531 24.4268 11.9531C24.8926 11.9531 25.3417 12.0902 25.7256 12.3495C26.1815 12.6576 26.8007 12.5374 27.1086 12.0817C27.4166 11.6258 27.2966 11.0066 26.8408 10.6987C26.1262 10.2161 25.2914 9.96094 24.4268 9.96094C22.0467 9.96094 20.1104 11.8973 20.1104 14.2773C20.1104 16.6574 22.0467 18.5938 24.4268 18.5938Z" />
                            <path d="M33.0039 0H0.996094C0.445984 0 0 0.445984 0 0.996094V4.98047C0 5.53058 0.445984 5.97656 0.996094 5.97656H2.05859V23.5742C2.05859 24.1243 2.50458 24.5703 3.05469 24.5703H12.7319L8.738 32.5582C8.49197 33.0502 8.69138 33.6486 9.18345 33.8946C9.67552 34.1406 10.2738 33.9412 10.5199 33.4492L12.303 29.8828H21.697L23.4802 33.4492C23.7262 33.9412 24.3245 34.1406 24.8166 33.8946C25.3086 33.6486 25.5081 33.0503 25.2621 32.5582L21.2681 24.5703H30.9453C31.4954 24.5703 31.9414 24.1243 31.9414 23.5742V5.97656H33.0039C33.554 5.97656 34 5.53058 34 4.98047V0.996094C34 0.445984 33.554 0 33.0039 0ZM20.7009 27.8906H13.2991L14.9593 24.5703H19.0407L20.7009 27.8906ZM29.9492 22.5781H4.05078V5.97656H29.9492V22.5781ZM32.0078 3.98438H1.99219V1.99219H32.0078V3.98438Z" />
                          </svg>
                          <span>{t('english')}</span>
                        </button>

                        {/* Self Employed */}
                        <button className="nav-link" id="self-tab" data-bs-toggle="pill" data-bs-target="#self" type="button" role="tab" aria-controls="self" aria-selected="true">
                          <svg viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.9754 20.479V23.0192H28.3506C28.0499 24.4095 27.5074 25.7043 26.7715 26.8643L29.3384 29.461L25.7866 33.0541L23.2197 30.4574C22.073 31.2018 20.7918 31.7507 19.4189 32.0548V35.7217H14.3954V32.0548C13.0211 31.7507 11.7412 31.2018 10.5945 30.4574L8.02765 33.0541L4.47587 29.461L7.04272 26.8643C6.30688 25.7043 5.7643 24.4081 5.46367 23.0192H1.83887V20.479" />
                            <path d="M10.2095 20.479C10.2095 24.2213 13.2087 27.2539 16.9065 27.2539C20.6043 27.2539 23.6035 24.2198 23.6035 20.479" />
                            <path d="M32.8129 14.5498V17.9387H16.9065H1V14.5498" />
                            <path d="M13.5577 10.3151V1H20.2547V10.3151" />
                            <path d="M10.2096 7.775V2.69312C6.19395 4.95817 3.51257 8.45277 3.51257 13.7026V15.3971" />
                            <path d="M30.3017 15.3971V13.7026C30.3017 8.42815 27.6776 4.94803 23.6047 2.69312V7.775" />
                          </svg>

                          <span>{t('self-employed')}</span>
                        </button>

                        {/* Job Seeker */}
                        <button className="nav-link" id="jobseeker-tab" data-bs-toggle="pill" data-bs-target="#jobseeker" type="button" role="tab" aria-controls="jobseeker" aria-selected="true">
                          <svg viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.5548 13.9054V10.1404C35.5548 9.01704 34.6425 8.10474 33.5176 8.10474H3.03562C1.9123 8.10474 1 9.01545 1 10.1404V14.6527C1 15.565 1.24116 16.4217 1.66479 17.1595C2.53584 18.6795 4.17322 19.7044 6.05176 19.7044H12.8853" />
                            <path d="M22.3814 32.3674H4.16078C2.78201 32.3674 1.66663 31.252 1.66663 29.8732V21.9211" />
                            <path d="M8.83752 6.51823V3.37198C8.83752 2.06461 9.90214 1 11.2095 1H25.343C26.6504 1 27.715 2.06461 27.715 3.37198V6.51823" />
                            <path d="M19.5349 23.0826H17.0201C16.4902 23.0826 16.0618 22.4289 16.0618 21.6213V17.7896C16.0618 16.9836 16.4918 16.3284 17.0201 16.3284H19.5349C20.0648 16.3284 20.4932 16.9821 20.4932 17.7896V21.6213C20.4932 22.4273 20.0633 23.0826 19.5349 23.0826Z" />
                            <path d="M31.5662 35.6231C29.2831 34.9076 27.322 33.6161 25.8671 31.8676C24.2979 29.9811 23.4681 27.7408 23.4681 25.3895V18.3941C26.3796 18.1117 29.1704 17.1693 31.5646 15.6572C32.8037 16.441 34.1492 17.0725 35.5819 17.5437C36.9035 17.9768 38.2696 18.2624 39.6611 18.3957V25.3911C39.6611 27.7424 38.8313 29.9827 37.2621 31.8692C35.8072 33.6177 33.8462 34.9091 31.563 35.6247L31.5662 35.6231Z" />
                            <path d="M27.0283 25.1294C27.0283 25.1294 30.0047 29.1546 30.0047 28.9642C30.0047 28.7738 36.1021 21.9133 36.1021 21.9133" />
                          </svg>

                          <span>{t('job-seeker')}</span>
                        </button>
                      </div>

                      <div className="tab-content" id="v-pills-tabContent">
                        {/* Engineering */}
                        <div className="tab-pane fade show" id="engineering" role="tabpanel" aria-labelledby="engineering-tab" tabindex="0">
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

                        {/* Project Management */}
                        <div className="tab-pane fade" id="project" role="tabpanel" aria-labelledby="project-tab" tabindex="0">
                          <ProjectManagment />

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

                        {/* Technician */}
                        <div className="tab-pane fade" id="technician" role="tabpanel" aria-labelledby="technician-tab" tabindex="0">
                          <Technician />

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

                        {/* Accounting */}
                        <div className="tab-pane fade" id="accounting" role="tabpanel" aria-labelledby="accounting-tab" tabindex="0">
                          <Accounting />

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
          </div>

          <div className='FNV_QuickAccess justify-content-end'>
            {user ? (
              <>
                {/* Account */}
                <div className='dropdown'>
                  <Link className='nav-link' href='javascript:void(0);' data-bs-toggle='dropdown' aria-expanded='false'>
                    <svg width="16" height="18" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.236 19.3599C16.236 15.7579 12.22 12.8299 8.618 12.8299C5.016 12.8299 1 15.7579 1 19.3599M8.618 9.56586C9.77249 9.56586 10.8797 9.10725 11.696 8.2909C12.5124 7.47455 12.971 6.36735 12.971 5.21286C12.971 4.05838 12.5124 2.95117 11.696 2.13483C10.8797 1.31848 9.77249 0.859863 8.618 0.859863C7.46351 0.859863 6.35631 1.31848 5.53996 2.13483C4.72362 2.95117 4.265 4.05838 4.265 5.21286C4.265 6.36735 4.72362 7.47455 5.53996 8.2909C6.35631 9.10725 7.46351 9.56586 8.618 9.56586Z" stroke-linejoin="round" />
                    </svg>
                  </Link>
                  <ul className='dropdown-menu'>
                    {/* Title */}
                    <span>User Information</span>

                    {/* User */}
                    <Link href='/app/pages/account-settings/account' className='FNV-User'>
                      {/* User Avatar */}
                      {userImage === null || userImage === '' || userImage === 'null' ? (
                        <div className='FNV-UserAvatar'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='icon icon-tabler icon-tabler-user'
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
                        <div className='FNV-UserAvatar'>
                          <img src={userImage} className='img-fluid' />
                        </div>
                      )}

                      <span>
                        <p>{userName}</p>

                        <span>
                          <svg viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4335 12.7435H4.56647C4.27977 12.7439 4.00121 12.6482 3.77527 12.4718C3.54932 12.2953 3.38902 12.0482 3.31996 11.7699L2.10736 6.92089C2.06939 6.76876 2.07144 6.6094 2.11332 6.4583C2.1552 6.3072 2.23548 6.16951 2.34636 6.05864C2.45723 5.94777 2.59491 5.86749 2.74601 5.82561C2.89711 5.78373 3.05648 5.78168 3.2086 5.81965L5.1451 6.30386C5.18644 6.31417 5.22987 6.31238 5.27021 6.29871C5.31056 6.28503 5.34613 6.26005 5.37268 6.22674L7.49665 3.5719C7.62096 3.42758 7.77493 3.31177 7.94807 3.23237C8.12121 3.15297 8.30944 3.11185 8.49992 3.11182C8.6904 3.11178 8.87865 3.15284 9.05181 3.23218C9.22498 3.31152 9.379 3.42728 9.50336 3.57156L11.6273 6.2271C11.6543 6.26011 11.69 6.28483 11.7304 6.29842C11.7708 6.312 11.8142 6.31389 11.8556 6.30388L13.7911 5.81967C13.9432 5.78164 14.1025 5.78365 14.2537 5.82548C14.4048 5.86732 14.5425 5.94755 14.6534 6.05839C14.7643 6.16923 14.8446 6.30688 14.8865 6.45797C14.9285 6.60905 14.9306 6.76842 14.8926 6.92056L13.68 11.7703C13.6109 12.0485 13.4506 12.2955 13.2246 12.4719C12.9987 12.6483 12.7202 12.7439 12.4335 12.7435ZM3.20064 6.91293L4.35065 11.5123C4.36255 11.5605 4.39028 11.6033 4.42941 11.6339C4.46854 11.6645 4.5168 11.6811 4.56647 11.681H12.4335C12.4832 11.6811 12.5314 11.6646 12.5705 11.634C12.6096 11.6035 12.6374 11.5608 12.6494 11.5126L13.7994 6.91293L12.1129 7.33454C11.8742 7.39383 11.6236 7.38355 11.3906 7.30492C11.1575 7.22628 10.9519 7.08258 10.7979 6.89079L8.67398 4.23525C8.55776 4.09068 8.44224 4.09033 8.32603 4.2356L6.20207 6.89045C6.04825 7.08222 5.84275 7.22595 5.60985 7.30465C5.37695 7.38334 5.12639 7.39372 4.88778 7.33454L3.20064 6.91293Z" />
                            <path d="M1.94791 5.26025C2.53471 5.26025 3.01041 4.78456 3.01041 4.19775C3.01041 3.61095 2.53471 3.13525 1.94791 3.13525C1.3611 3.13525 0.885406 3.61095 0.885406 4.19775C0.885406 4.78456 1.3611 5.26025 1.94791 5.26025Z" />
                            <path d="M15.0521 5.26025C15.6389 5.26025 16.1146 4.78456 16.1146 4.19775C16.1146 3.61095 15.6389 3.13525 15.0521 3.13525C14.4653 3.13525 13.9896 3.61095 13.9896 4.19775C13.9896 4.78456 14.4653 5.26025 15.0521 5.26025Z" />
                            <path d="M8.5 2.25C9.0868 2.25 9.5625 1.7743 9.5625 1.1875C9.5625 0.600697 9.0868 0.125 8.5 0.125C7.9132 0.125 7.4375 0.600697 7.4375 1.1875C7.4375 1.7743 7.9132 2.25 8.5 2.25Z" />
                          </svg>
                          <small>VIP Member</small>
                        </span>
                      </span>
                    </Link>

                    {/* Dashboard */}
                    <Link href='/app/dashboards/main/' className='FNV-UserMenu'>
                      <div className='FNV-UserIcon'>
                        <svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.2501 15.3406H3.42085C2.59527 15.3406 1.8187 15.0183 1.23461 14.4325C0.661117 13.8639 0.330002 13.0674 0.330002 12.2502V3.42049C0.330002 2.59491 0.651404 1.81833 1.23461 1.2338C1.81605 0.651039 2.59262 0.330078 3.42085 0.330078H12.2501C13.0779 0.330078 13.8545 0.651039 14.4364 1.2338C15.0196 1.81877 15.3406 2.59491 15.3406 3.42049V12.2502C15.3406 13.067 15.0099 13.8634 14.4333 14.4356C13.8514 15.0183 13.0753 15.3406 12.2501 15.3406ZM3.42085 2.09603C3.06501 2.09603 2.73257 2.23289 2.4849 2.48144C2.23369 2.73221 2.09595 3.06597 2.09595 3.42049V12.2502C2.09595 12.5994 2.23634 12.9389 2.48137 13.1818C2.73566 13.4365 3.0681 13.5747 3.42085 13.5747H12.2501C12.6029 13.5747 12.9353 13.4365 13.1865 13.1849C13.4342 12.9394 13.5746 12.5994 13.5746 12.2502V3.42049C13.5746 3.06597 13.4369 2.73221 13.1861 2.48144C12.9384 2.23289 12.606 2.09603 12.2501 2.09603H3.42085Z" />
                          <path d="M12.2501 32.9998H3.42085C2.59527 32.9998 1.8187 32.6775 1.23461 32.0917C0.661117 31.523 0.330002 30.7266 0.330002 29.9094V21.0797C0.330002 20.2541 0.651404 19.4775 1.23461 18.893C1.81605 18.3102 2.59262 17.9893 3.42085 17.9893H12.2501C13.0779 17.9893 13.8545 18.3102 14.4364 18.893C15.0196 19.478 15.3406 20.2541 15.3406 21.0797V29.9094C15.3406 30.7262 15.0099 31.5226 14.4333 32.0948C13.8514 32.6775 13.0753 32.9998 12.2501 32.9998ZM3.42085 19.7552C3.06501 19.7552 2.73257 19.8921 2.4849 20.1406C2.23369 20.3914 2.09595 20.7252 2.09595 21.0797V29.9094C2.09595 30.2586 2.23634 30.5981 2.48137 30.8409C2.73566 31.0957 3.0681 31.2339 3.42085 31.2339H12.2501C12.6029 31.2339 12.9353 31.0957 13.1865 30.844C13.4342 30.5986 13.5746 30.2586 13.5746 29.9094V21.0797C13.5746 20.7252 13.4369 20.3914 13.1861 20.1406C12.9384 19.8921 12.606 19.7552 12.2501 19.7552H3.42085Z" />
                          <path d="M29.9096 15.3406H21.0803C20.2547 15.3406 19.4781 15.0183 18.8941 14.4325C18.3206 13.8639 17.9895 13.0674 17.9895 12.2502V3.42049C17.9895 2.59491 18.3109 1.81833 18.8941 1.2338C19.4755 0.651039 20.2521 0.330078 21.0803 0.330078H29.9096C30.7374 0.330078 31.514 0.651039 32.0958 1.2338C32.679 1.81877 33 2.59491 33 3.42049V12.2502C33 13.067 32.6693 13.8634 32.0928 14.4356C31.5109 15.0183 30.7347 15.3406 29.9096 15.3406ZM21.0803 2.09603C20.7245 2.09603 20.392 2.23289 20.1444 2.48144C19.8931 2.73221 19.7554 3.06597 19.7554 3.42049V12.2502C19.7554 12.5994 19.8958 12.9389 20.1408 13.1818C20.3951 13.4365 20.7276 13.5747 21.0803 13.5747H29.9096C30.2623 13.5747 30.5948 13.4365 30.846 13.1849C31.0937 12.9394 31.2341 12.5994 31.2341 12.2502V3.42049C31.2341 3.06597 31.0963 2.73221 30.8456 2.48144C30.5979 2.23289 30.2654 2.09603 29.9096 2.09603H21.0803Z" />
                          <path d="M29.9096 32.9998H21.0803C20.2547 32.9998 19.4781 32.6775 18.8941 32.0917C18.3206 31.523 17.9895 30.7266 17.9895 29.9094V21.0797C17.9895 20.2541 18.3109 19.4775 18.8941 18.893C19.4755 18.3102 20.2521 17.9893 21.0803 17.9893H29.9096C30.7374 17.9893 31.514 18.3102 32.0958 18.893C32.679 19.478 33 20.2541 33 21.0797V29.9094C33 30.7262 32.6693 31.5226 32.0928 32.0948C31.5109 32.6775 30.7347 32.9998 29.9096 32.9998ZM21.0803 19.7552C20.7245 19.7552 20.392 19.8921 20.1444 20.1406C19.8931 20.3914 19.7554 20.7252 19.7554 21.0797V29.9094C19.7554 30.2586 19.8958 30.5981 20.1408 30.8409C20.3951 31.0957 20.7276 31.2339 21.0803 31.2339H29.9096C30.2623 31.2339 30.5948 31.0957 30.846 30.844C31.0937 30.5986 31.2341 30.2586 31.2341 29.9094V21.0797C31.2341 20.7252 31.0963 20.3914 30.8456 20.1406C30.5979 19.8921 30.2654 19.7552 29.9096 19.7552H21.0803Z" />
                        </svg>
                      </div>

                      <span>
                        <p>Dashboard</p>

                        <span>
                          <small>Student Portal</small>
                        </span>
                      </span>
                    </Link>

                    {/* Certificate */}
                    <Link href='/app/dashboards/certificates/' className='FNV-UserMenu'>
                      <div className='FNV-UserIcon'>
                        <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_679_7159)">
                            <path d="M10.0553 22.5133C9.72663 22.2851 9.36925 22.1011 8.99249 21.9662C8.22796 21.7427 7.55822 21.2736 7.0869 20.6314C6.77032 19.9086 6.70006 19.1018 6.88684 18.3351C6.97632 17.892 6.98734 17.4366 6.91935 16.9897C6.75945 16.5875 6.53055 16.2164 6.24288 15.8931C5.68294 15.3102 5.33221 14.558 5.2457 13.7543C5.33182 12.9503 5.68232 12.1976 6.24226 11.6143C6.53024 11.2908 6.75937 10.9195 6.91935 10.517C6.98734 10.0701 6.97632 9.61472 6.88684 9.17162C6.70053 8.40552 6.77086 7.59948 7.0869 6.87715C7.55939 6.23421 8.23069 5.765 8.99687 5.54236C9.41833 5.40247 9.81173 5.18936 10.1591 4.91279C10.4353 4.56549 10.6482 4.17232 10.7881 3.75117C11.0107 2.985 11.4799 2.31369 12.1228 1.8412C12.8457 1.52438 13.6525 1.45413 14.4192 1.64114C14.8623 1.73093 15.3177 1.74195 15.7646 1.67365C16.1659 1.51454 16.5363 1.28665 16.8593 1.00031C17.4423 0.438809 18.1953 0.0869803 19 0C19.804 0.0861207 20.5567 0.436621 21.14 0.996561C21.4635 1.28454 21.8349 1.51368 22.2373 1.67365C22.6842 1.74195 23.1396 1.73093 23.5827 1.64114C24.3488 1.45452 25.155 1.52477 25.8771 1.8412C26.5201 2.31369 26.9893 2.985 27.2119 3.75117C27.3518 4.17263 27.5649 4.56604 27.8415 4.91341C28.1888 5.18959 28.582 5.40255 29.0031 5.54236C29.7693 5.765 30.4406 6.23421 30.9131 6.87715C31.2297 7.59995 31.2999 8.40677 31.1132 9.17349C31.0237 9.6166 31.0127 10.072 31.0806 10.5189C31.2398 10.9202 31.4676 11.2906 31.754 11.6136C32.3155 12.1966 32.6673 12.9496 32.7543 13.7543C32.6682 14.5583 32.3177 15.311 31.7577 15.8943C31.4698 16.2178 31.2406 16.5892 31.0806 16.9916C31.0127 17.4385 31.0237 17.8939 31.1132 18.337C31.2995 19.1031 31.2291 19.9091 30.9131 20.6314C30.4406 21.2744 29.7693 21.7436 29.0031 21.9662C28.6263 22.1009 28.2688 22.2849 27.9403 22.5133L35.0137 34.2801L30.2348 33.548L28.4973 38L21.4564 26.2738C21.3526 26.3495 21.2482 26.4295 21.1438 26.5114C20.5595 27.0724 19.8054 27.4232 19 27.5086C18.196 27.4225 17.4433 27.072 16.86 26.512C16.7524 26.4295 16.6474 26.3495 16.5436 26.2732L9.50265 38L7.76524 33.548L2.98624 34.2801L10.0553 22.5133ZM28.2585 35.1729L29.4364 32.16L32.5724 32.6408L27.2213 23.7374L27.2119 23.7587C26.989 24.5244 26.5198 25.1952 25.8771 25.6674C25.1543 25.984 24.3475 26.0542 23.5808 25.8675C23.2638 25.8188 22.9437 25.7931 22.623 25.7906L28.2585 35.1729ZM17.6221 25.5211C18.0005 25.8948 18.4791 26.1509 19 26.2582C19.5216 26.1511 20.0008 25.8946 20.3792 25.5198C20.8278 25.125 21.3495 24.8217 21.9147 24.6271C22.1636 24.5634 22.4198 24.5327 22.6768 24.5358C23.0327 24.5438 23.3876 24.5745 23.7396 24.6277C24.2376 24.7566 24.762 24.7419 25.2519 24.5852C25.6389 24.2355 25.918 23.7826 26.0566 23.2798C26.2516 22.7033 26.5577 22.1707 26.9575 21.7118C27.4161 21.3121 27.9486 21.0063 28.5248 20.8115C29.0278 20.6729 29.4808 20.3936 29.8303 20.0063C29.9869 19.5171 30.0019 18.9937 29.8734 18.4964C29.7549 17.8928 29.7549 17.272 29.8734 16.6683C30.0679 16.1028 30.3714 15.581 30.7668 15.1322C31.1405 14.7538 31.3966 14.2752 31.5039 13.7543C31.3968 13.2327 31.1403 12.7535 30.7655 12.3751C30.3707 11.9265 30.0674 11.4048 29.8728 10.8396C29.7543 10.236 29.7543 9.61519 29.8728 9.01157C30.0012 8.51461 29.9867 7.9914 29.8309 7.50234C29.4812 7.11543 29.0283 6.83628 28.5255 6.69772C27.949 6.50266 27.4164 6.19655 26.9575 5.79681C26.5578 5.33823 26.2519 4.80572 26.0572 4.22945C25.9186 3.72648 25.6393 3.27352 25.2519 2.92404C24.7629 2.76704 24.2393 2.75203 23.7421 2.8809C23.1385 2.99906 22.5177 2.99906 21.914 2.8809C21.3477 2.68686 20.8249 2.38348 20.3754 1.98812C19.9978 1.61457 19.5201 1.35832 19 1.25039C18.4783 1.35753 17.9992 1.61402 17.6208 1.98875C17.1722 2.38364 16.6505 2.68693 16.0853 2.88153C15.4817 2.99937 14.8609 2.99937 14.2573 2.88153C13.7603 2.75274 13.2371 2.76727 12.748 2.92341C12.3611 3.27313 12.082 3.72601 11.9434 4.22882C11.7484 4.80525 11.4422 5.33792 11.0425 5.79681C10.5839 6.19647 10.0514 6.50234 9.47515 6.69709C8.97218 6.83565 8.51922 7.11504 8.16974 7.50234C8.01305 7.99148 7.99804 8.51493 8.1266 9.01219C8.24507 9.61582 8.24507 10.2366 8.1266 10.8403C7.93255 11.4066 7.62918 11.9294 7.23382 12.3789C6.86027 12.7565 6.60401 13.2342 6.49609 13.7543C6.60323 14.2759 6.85972 14.7551 7.23445 15.1335C7.62933 15.5821 7.93263 16.1038 8.12722 16.669C8.2457 17.2726 8.2457 17.8934 8.12722 18.497C7.99874 18.994 8.01328 19.5172 8.16911 20.0063C8.51883 20.3932 8.97171 20.6723 9.47452 20.8109C10.051 21.006 10.5836 21.3121 11.0425 21.7118C11.4422 22.1704 11.748 22.7029 11.9428 23.2792C12.0813 23.7821 12.3607 24.2351 12.748 24.5846C13.2372 24.7412 13.7606 24.7562 14.2579 24.6277C14.8615 24.5092 15.4823 24.5092 16.086 24.6277C16.6515 24.8222 17.1733 25.1257 17.6221 25.5211ZM8.56549 32.16L9.74148 35.1729L15.3739 25.7906C15.0531 25.7931 14.733 25.8188 14.4161 25.8675C13.6504 26.0535 12.8448 25.9832 12.1228 25.6674C11.4799 25.1949 11.0107 24.5236 10.7881 23.7574L10.7787 23.7362L5.42951 32.6396L8.56549 32.16Z" />
                            <path d="M23.397 6.81022C23.2859 6.81054 23.1767 6.78115 23.0807 6.7252C22.59 6.4398 22.0707 6.2066 21.5314 6.02935C21.5264 6.02779 21.5215 6.02615 21.5166 6.02451C21.1899 5.91268 21.0157 5.55718 21.1275 5.23051C21.2394 4.90385 21.5949 4.72965 21.9215 4.84148C22.544 5.04577 23.1433 5.31483 23.7096 5.64423C23.9021 5.75591 24.0207 5.96144 24.0211 6.18393C24.0217 6.5292 23.7423 6.8096 23.397 6.81022Z" />
                            <path d="M16.5148 6.01249C15.9746 6.18638 15.4543 6.41692 14.9625 6.70021C14.8675 6.75507 14.7596 6.78375 14.6499 6.78336L14.6518 6.78461C14.4276 6.785 14.2204 6.66536 14.1086 6.47092C13.9365 6.17153 14.0398 5.78938 14.3392 5.61737C14.9076 5.29149 15.5086 5.02578 16.1322 4.82462C16.4378 4.74679 16.7534 4.90863 16.8685 5.20216C16.9947 5.52359 16.8363 5.88644 16.5148 6.01249Z" />
                            <path d="M26.0947 9.25274C25.894 9.25306 25.7055 9.15701 25.5877 8.99454C25.2547 8.53439 24.8747 8.11036 24.4536 7.72914C24.4528 7.72844 24.452 7.72774 24.4512 7.72703C24.1959 7.49454 24.1775 7.0991 24.41 6.84387C24.6425 6.58863 25.0379 6.57011 25.2931 6.8026C25.7784 7.24211 26.2165 7.73094 26.6004 8.26118C26.6773 8.36755 26.7188 8.49548 26.7191 8.62677C26.7195 8.97203 26.44 9.25227 26.0947 9.25274Z" />
                            <path d="M11.5852 10.4201C11.3521 10.9374 11.1741 11.4779 11.0544 12.0325C10.9923 12.3201 10.7381 12.5255 10.4439 12.5258C10.3992 12.5256 10.3546 12.5208 10.311 12.5114C9.97374 12.4384 9.75937 12.1059 9.83205 11.7687C9.97061 11.1281 10.176 10.5039 10.4447 9.9062C10.5867 9.59133 10.957 9.45105 11.2719 9.59297C11.5869 9.73489 11.7271 10.1052 11.5852 10.4201Z" />
                            <path d="M13.5814 7.6947C13.1583 8.07349 12.7757 8.49526 12.4398 8.95322C12.3224 9.11319 12.1358 9.20767 11.9375 9.20814C11.8053 9.20775 11.6766 9.16555 11.57 9.0874C11.2915 8.88335 11.2311 8.49213 11.4352 8.21361C11.8216 7.6861 12.2616 7.20001 12.7481 6.76316C12.7564 6.75526 12.765 6.74768 12.7737 6.74026C13.0372 6.51722 13.4317 6.55004 13.6548 6.81356C13.8778 7.07716 13.8449 7.47166 13.5814 7.6947Z" />
                            <path d="M27.6946 12.5649C27.6524 12.5736 27.6095 12.5779 27.5664 12.578H27.5652C27.2699 12.5772 27.0155 12.37 26.955 12.081C26.8385 11.5258 26.6642 10.9843 26.4348 10.4655C26.4326 10.4605 26.4303 10.4555 26.4281 10.4504C26.2923 10.133 26.4394 9.7655 26.7569 9.62968C27.0743 9.49385 27.4418 9.64101 27.5776 9.95845C27.8429 10.5579 28.0445 11.1837 28.179 11.8253C28.2495 12.1634 28.0326 12.4945 27.6946 12.5649Z" />
                            <path d="M17.487 5.10837C17.4525 4.76483 17.703 4.45833 18.0466 4.42378C18.6978 4.35931 19.3539 4.36142 20.0047 4.43004C20.3196 4.46458 20.5588 4.72911 20.5617 5.04585C20.5649 5.39112 20.2875 5.67355 19.9422 5.67668C19.9182 5.67683 19.8941 5.67558 19.8703 5.67293C19.3057 5.61345 18.7366 5.61173 18.1716 5.66792C17.8281 5.70247 17.5216 5.45192 17.487 5.10837Z" />
                            <path d="M10.7462 16.7419C11.0616 16.6012 11.4314 16.7428 11.5721 17.0582C11.8034 17.5769 12.0884 18.07 12.4223 18.5293C12.4998 18.636 12.5417 18.7645 12.5418 18.8964C12.5421 19.2417 12.2624 19.5218 11.9172 19.5221C11.7167 19.5222 11.5284 19.4262 11.4108 19.2639C11.0256 18.7342 10.6968 18.1658 10.4298 17.5678C10.2892 17.2524 10.4308 16.8826 10.7462 16.7419Z" />
                            <path d="M13.552 19.7934C13.9744 20.1739 14.4354 20.5092 14.9275 20.7937C15.12 20.9054 15.2386 21.1109 15.239 21.3334C15.2396 21.6787 14.9601 21.9591 14.6149 21.9597L14.6174 21.9578C14.5054 21.9598 14.395 21.9313 14.2979 21.8753C13.7312 21.5471 13.2005 21.1605 12.7143 20.7218C12.4579 20.4905 12.4376 20.0951 12.669 19.8387C12.9003 19.5823 13.2956 19.5621 13.552 19.7934Z" />
                            <path d="M27.5602 16.2175C27.516 16.2176 27.472 16.2129 27.4288 16.2037C27.0911 16.1316 26.8759 15.7993 26.9481 15.4617C27.0664 14.9067 27.1265 14.341 27.1275 13.7736C27.1275 13.4284 27.4075 13.1484 27.7527 13.1484C28.098 13.1484 28.3779 13.4284 28.3779 13.7736C28.377 14.4282 28.3076 15.0809 28.171 15.7211C28.1096 16.0096 27.8551 16.216 27.5602 16.2163V16.2175Z" />
                            <path d="M16.4798 21.4862C17.0193 21.6616 17.5756 21.78 18.1397 21.8394C18.4546 21.874 18.6939 22.1385 18.6968 22.4553C18.6999 22.8005 18.4226 23.083 18.0772 23.0861V23.0842C18.056 23.0842 18.0341 23.083 18.0097 23.0817C17.3582 23.0133 16.7158 22.8766 16.0928 22.6741C16.0763 22.6694 16.0599 22.6641 16.0437 22.6581C15.7201 22.5376 15.5554 22.1777 15.6758 21.8541C15.7963 21.5304 16.1562 21.3658 16.4798 21.4862Z" />
                            <path d="M9.62223 13.7061C9.63051 13.3692 9.91037 13.1027 10.2473 13.111C10.5959 13.1199 10.8736 13.4057 10.8725 13.7544C10.8725 14.3222 10.9314 14.8885 11.0481 15.4443V15.4443C11.1194 15.7822 10.9033 16.1138 10.5655 16.1851C10.5229 16.1938 10.4795 16.1982 10.4361 16.1982H10.4348C10.14 16.1975 9.88567 15.9909 9.82464 15.7025C9.68983 15.0619 9.622 14.409 9.62208 13.7544V13.7181C9.62208 13.714 9.62215 13.71 9.62223 13.7061Z" />
                            <path d="M19.8396 21.8405C20.4043 21.7824 20.9612 21.6653 21.5014 21.4911C21.5225 21.4829 21.5441 21.476 21.566 21.4702C21.8997 21.3818 22.2419 21.5808 22.3303 21.9146C22.4187 22.2485 22.2198 22.5906 21.8859 22.679C21.2622 22.8802 20.6191 23.0153 19.9672 23.0823C19.9464 23.0847 19.9255 23.0859 19.9047 23.086L19.9022 23.091C19.5569 23.1083 19.263 22.8423 19.2457 22.4971C19.2284 22.1517 19.4944 21.8578 19.8396 21.8405Z" />
                            <path d="M25.5683 18.5413C25.9031 18.0831 26.1889 17.5911 26.4211 17.0733C26.5645 16.7709 26.9206 16.635 27.2291 16.7651C27.5472 16.8993 27.6963 17.2661 27.5621 17.5841C27.2943 18.1819 26.9648 18.75 26.5786 19.279C26.4607 19.4404 26.2727 19.5357 26.0728 19.5354C25.9403 19.5353 25.8112 19.4932 25.7042 19.4149C25.4254 19.2112 25.3646 18.8201 25.5683 18.5413Z" />
                            <path d="M23.055 20.8046C23.547 20.5198 24.0079 20.1845 24.4304 19.8042C24.4352 19.7999 24.44 19.7955 24.4449 19.7913C24.7054 19.5646 25.1003 19.592 25.327 19.8525C25.5536 20.1129 25.5262 20.5078 25.2658 20.7345C24.7785 21.1719 24.2472 21.5574 23.6803 21.8849C23.5853 21.94 23.4775 21.9689 23.3677 21.9687V21.9712C23.1443 21.9712 22.9379 21.852 22.8263 21.6586C22.6536 21.3596 22.756 20.9772 23.055 20.8046Z" />
                          </g>
                          <defs>
                            <clipPath id="clip0_679_7159">
                              <rect width="38" height="38" fill="white" transform="matrix(-1 0 0 1 38 0)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <span>
                        <p>Certificate</p>

                        <span>
                          <small>Completion Certificate</small>
                        </span>
                      </span>
                    </Link>

                    {/* Logout */}
                    <Link href='javascript:void(0);' className='FNV-UserMenu' onClick={handleLogout}>
                      <div className='FNV-UserIcon'>
                        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.0766 23.5675H5.55598C3.78391 23.5675 2.34609 22.1244 2.34609 20.3576V4.6424C2.34609 2.87033 3.78921 1.43251 5.55598 1.43251H12.1827C12.5806 1.43251 12.8989 1.11418 12.8989 0.716256C12.8989 0.318336 12.5806 0 12.1827 0H5.55598C2.99337 0 0.913574 2.0851 0.913574 4.6424V20.3576C0.913574 22.9202 2.99868 25 5.55598 25H12.0766C12.4745 25 12.7928 24.6817 12.7928 24.2837C12.7928 23.8858 12.4692 23.5675 12.0766 23.5675Z" />
                          <path d="M23.8762 11.996L19.324 7.44381C19.0428 7.16261 18.5918 7.16261 18.3106 7.44381C18.0294 7.725 18.0294 8.17598 18.3106 8.45718L21.6426 11.7891H7.11051C6.71259 11.7891 6.39426 12.1074 6.39426 12.5054C6.39426 12.9033 6.71259 13.2216 7.11051 13.2216H21.6426L18.3106 16.5535C18.0294 16.8347 18.0294 17.2857 18.3106 17.5669C18.4486 17.7048 18.6343 17.7791 18.8147 17.7791C18.9951 17.7791 19.1808 17.7101 19.3187 17.5669L23.8709 13.0147C24.1574 12.7282 24.1574 12.2719 23.8762 11.996Z" />
                        </svg>
                      </div>

                      <span>
                        <p>Logout</p>

                        <span>
                          <small>Get back soon</small>
                        </span>
                      </span>
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <>
                {/* Account */}
                <div className='dropdown'>
                  <Link className='nav-link' href='javascript:void(0);' data-bs-toggle='dropdown' aria-expanded='false'>
                    <svg width="16" height="18" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.236 19.3599C16.236 15.7579 12.22 12.8299 8.618 12.8299C5.016 12.8299 1 15.7579 1 19.3599M8.618 9.56586C9.77249 9.56586 10.8797 9.10725 11.696 8.2909C12.5124 7.47455 12.971 6.36735 12.971 5.21286C12.971 4.05838 12.5124 2.95117 11.696 2.13483C10.8797 1.31848 9.77249 0.859863 8.618 0.859863C7.46351 0.859863 6.35631 1.31848 5.53996 2.13483C4.72362 2.95117 4.265 4.05838 4.265 5.21286C4.265 6.36735 4.72362 7.47455 5.53996 8.2909C6.35631 9.10725 7.46351 9.56586 8.618 9.56586Z" stroke-linejoin="round" />
                    </svg>
                  </Link>
                  <ul className='dropdown-menu'>
                    {/* Title */}
                    <span>User Information</span>

                    {/* Links */}
                    <Link href='/login'>
                      <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0766 23.5675H5.55598C3.78391 23.5675 2.34609 22.1244 2.34609 20.3576V4.6424C2.34609 2.87033 3.78921 1.43251 5.55598 1.43251H12.1827C12.5806 1.43251 12.8989 1.11418 12.8989 0.716256C12.8989 0.318336 12.5806 0 12.1827 0H5.55598C2.99337 0 0.913574 2.0851 0.913574 4.6424V20.3576C0.913574 22.9202 2.99868 25 5.55598 25H12.0766C12.4745 25 12.7928 24.6817 12.7928 24.2837C12.7928 23.8858 12.4692 23.5675 12.0766 23.5675Z" />
                        <path d="M6.60446 13.0162L11.1567 17.5684C11.4379 17.8496 11.8888 17.8496 12.17 17.5684C12.4512 17.2872 12.4512 16.8362 12.17 16.555L8.83812 13.2231L23.3702 13.2231C23.7681 13.2231 24.0864 12.9048 24.0864 12.5069C24.0864 12.1089 23.7681 11.7906 23.3702 11.7906L8.83812 11.7906L12.17 8.45868C12.4512 8.17748 12.4512 7.72651 12.17 7.44531C12.0321 7.30737 11.8464 7.23309 11.666 7.23309C11.4856 7.23309 11.2999 7.30206 11.162 7.44531L6.60977 11.9975C6.32327 12.284 6.32327 12.7403 6.60446 13.0162Z" />
                      </svg>

                      {t('menu-login')}
                    </Link>

                    <Link href='/register'>
                      <svg width="25" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 25C20 20.3271 14.9919 16.5286 10.5 16.5286C6.00814 16.5286 1 20.3271 1 25M10.5 12.2943C11.9397 12.2943 13.3204 11.6993 14.3385 10.6403C15.3565 9.58122 15.9284 8.14485 15.9284 6.64714C15.9284 5.14942 15.3565 3.71305 14.3385 2.65401C13.3204 1.59496 11.9397 1 10.5 1C9.0603 1 7.67957 1.59496 6.66155 2.65401C5.64353 3.71305 5.07161 5.14942 5.07161 6.64714C5.07161 8.14485 5.64353 9.58122 6.66155 10.6403C7.67957 11.6993 9.0603 12.2943 10.5 12.2943Z" stroke-width="1.5" fill='none' />
                      </svg>

                      {t('menu-register')}
                    </Link>
                  </ul>
                </div>
              </>
            )}

            {/* Cart */}
            <Link className='nav-link' href='/cart'>
              <svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_678_6984)">
                  <path d="M7.50033 18.7131C7.96056 18.7131 8.33366 18.34 8.33366 17.8797C8.33366 17.4195 7.96056 17.0464 7.50033 17.0464C7.04009 17.0464 6.66699 17.4195 6.66699 17.8797C6.66699 18.34 7.04009 18.7131 7.50033 18.7131Z" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.6663 18.7131C17.1266 18.7131 17.4997 18.34 17.4997 17.8797C17.4997 17.4195 17.1266 17.0464 16.6663 17.0464C16.2061 17.0464 15.833 17.4195 15.833 17.8797C15.833 18.34 16.2061 18.7131 16.6663 18.7131Z" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M0.833008 1.21338H4.16634L6.39967 12.3717C6.47588 12.7554 6.6846 13.1 6.9893 13.3453C7.29399 13.5906 7.67526 13.7209 8.06634 13.7134H16.1663C16.5574 13.7209 16.9387 13.5906 17.2434 13.3453C17.5481 13.1 17.7568 12.7554 17.833 12.3717L19.1663 5.38005H4.99967" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_678_6984">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.379883)" />
                  </clipPath>
                </defs>
              </svg>

              <span>
                {cartItems?.length ? <i data-feather="circle"></i> : ""}
              </span>
            </Link>

            {/* Search */}
            <div className='dropdown'>
              <Link className='nav-link' href='javascript:void(0);' data-bs-toggle='dropdown' aria-expanded='false'>
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.36361 1C6.90722 1 5.48355 1.43187 4.27261 2.24099C3.06167 3.05011 2.11786 4.20015 1.56052 5.54567C1.00319 6.8912 0.857367 8.37177 1.14149 9.80017C1.42562 11.2286 2.12693 12.5406 3.15675 13.5705C4.18657 14.6003 5.49864 15.3016 6.92704 15.5857C8.35544 15.8698 9.83601 15.724 11.1815 15.1667C12.5271 14.6093 13.6771 13.6655 14.4862 12.4546C15.2953 11.2437 15.7272 9.81998 15.7272 8.3636C15.7271 6.41069 14.9512 4.5378 13.5703 3.15689C12.1894 1.77597 10.3165 1.00012 8.36361 1Z" stroke-width="1.5" stroke-miterlimit="10" />
                  <path d="M13.8572 13.8574L18.9999 19.0001" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                </svg>
              </Link>
              <ul className='dropdown-menu'>
                {/* Title */}
                <span>Search</span>

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
                        <Link
                          onClick={() => {
                            handleClose()
                            storeClickedCourse({ title: course.title, slug: course.slug })
                          }}
                          href={`${appConfig.appUrl}/courses/${course.slug}`}
                        >
                          {course.title}
                        </Link>
                      </ListItem>
                    ))
                  ) : (
                    <h5>{searchInput.length ? 'No result' : null} </h5>
                  )}
                </List>

                <List>
                  <>
                    <p>Popular Search Terms</p>
                    {JSON.parse(localStorage.getItem('searchHistory') || '[]').map((course, index) => (
                      <ListItem key={index}>
                        <Link onClick={handleClose} href={`${appConfig.appUrl}/courses/${course.slug}`}>
                          {course.title}
                        </Link>
                      </ListItem>
                    ))}
                  </>
                </List>
              </ul>
            </div>

            {/* Phone */}
            <Link href='tel:+19055052323'>
              <i data-feather='phone'></i>
            </Link>

            <Button onClick={e => changeLanguage()}>
              {t('menu-language')}
            </Button>
          </div>
        </div>
      </nav>

      {/*  
      <svg width="1454" height="100" viewBox="0 0 1454 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1453 0.999987L1 99L1 0.999987L1453 0.999987Z" fill="white" stroke="white"/>
      </svg>
      */}

    </>
  )
}

export async function getStaticProps() {
  return { props: {} }
}

export default Header
