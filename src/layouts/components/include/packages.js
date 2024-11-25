// React
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'

// Hooks
import { Grid, LinearProgress } from '@mui/material'

function Packages() {
  const [course, setCourse] = useState([])
  const [page, setPage] = useState(1)
  const [title, setTitle] = useState('فناوران')

  // Hooks
  const router = useRouter()
  const { slug } = router.query
  const courseData = useSelector(state => state.course)

  useEffect(() => {
    if (courseData?.data) {
      const manualSlug = 'packages' // manually set slug

      const filteredCourses =
        Array.isArray(courseData?.data?.data) &&
        courseData?.data?.data?.filter(course => course?.categories?.some(category => category.slug === manualSlug))
      setCourse(filteredCourses)
    }
  }, [courseData])

  return (
    <>
      <li className='col-12 col-md-6'>
        <Link href='https://fanavaran.ca/courses/nppe-package'>P.Eng Package</Link>
      </li>

      <li className='col-12 col-md-6'>
        <Link href='https://fanavaran.ca/courses/pmp-package'>Project Management Package I</Link>
      </li>

      <li className='col-12 col-md-6'>
        <Link href='https://fanavaran.ca/courses/pmp-package-ii'>Project Management Package II</Link>
      </li>

      <li className='col-12 col-md-6'>
        <Link href='https://fanavaran.ca/courses/accounting-package'>Accounting Package</Link>
      </li>

      <li className='col-12 col-md-6'>
        <Link href='https://fanavaran.ca/courses/electrical-redseal-309a-package'>Electrical Redseal Package</Link>
      </li>

      <li className='col-12 col-md-6'>
        <Link href='https://fanavaran.ca/courses/ele-redseal-package-bc'>Electrical Redseal Package - British Columbia</Link>
      </li>

      <li className='col-12 col-md-6'>
        <Link href='https://fanavaran.ca/courses/plumbing-redseal-306a-package'>Plumbing Redseal Package</Link>
      </li>

      <li className='col-12 col-md-6'>
        <Link href='https://fanavaran.ca/courses/gas-technician-g2-g3-package'>Gas Technician Package</Link>
      </li>

      <li className='col-12 col-md-6'>
        <Link href='https://fanavaran.ca/courses/millwright-package'>Millwright Redseal Package</Link>
      </li>

      <li className='col-12 col-md-6'>
        <Link href='https://fanavaran.ca/courses/hvac-313a-package'>HVAC Redseal Package</Link>
      </li>

      <li className='col-12 col-md-6'>
        <Link href='https://fanavaran.ca/courses/energy-advisory-package'>Energy Advisory Package</Link>
      </li>
    </>
  )
}

export default Packages
