import React, { useState, useEffect } from 'react'
import Input from '@mui/material/Input'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseSearchData } from 'src/store/apps/search'
import feather from 'feather-icons'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from 'next/link'

// ** Import Translation
import { useTranslation } from 'react-i18next'

const SearchSection = props => {
  // State
  const [courses, setCourses] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [searchInput, setSearchInput] = useState('')

  // Hooks
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const searchData = useSelector(state => state.search)

  useEffect(() => {
    dispatch(fetchCourseSearchData())
  }, [dispatch])

  const searchCourses = query => {
    if (query) {
      const filteredCourses = searchData?.data?.data.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase())
      )
      setCourses(filteredCourses)
    } else {
      setCourses([])
    }

    setSelectedIndex(null)
    feather.replace()
  }

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

  const handleSearchInputChange = e => {
    setSearchInput(e.target.value)
    searchCourses(e.target.value)
  }

  return (
    <div>
      <section className='FNV-Header'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 FNV-HCard'>
              <h1>{props.title}</h1>
              <div className='FNV-HSearch input-group mb-3'>
                <Input
                  type='text'
                  placeholder={t('search-placeholder')}
                  className='form-control FNV-HSearchInput'
                  aria-describedby='button-addon1'
                  fullWidth
                  autoFocus
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <button className='FNV-Btn BtnMedium PrimaryColor' type='button' id='button-addon1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='feather feather-search'
                  >
                    <circle cx='11' cy='11' r='8'></circle>
                    <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SearchSection
