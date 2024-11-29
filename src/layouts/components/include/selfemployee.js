// React
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'

// Hooks
import { Grid, LinearProgress } from '@mui/material'

function Selfemployee() {
  const [course, setCourse] = useState([])
  const [page, setPage] = useState(1)
  const [title, setTitle] = useState('فناوران')

  // Hooks
  const router = useRouter()
  const { slug } = router.query
  const courseData = useSelector(state => state.course)

  useEffect(() => {
    if (courseData?.data) {
      const manualSlug = 'energy' // manually set slug

      // Filter courses by category slug and featured = 1
      const filteredCourses =
        Array.isArray(courseData?.data?.data) &&
        courseData?.data?.data?.filter(
          course =>
            course?.categories?.some(category => category.slug === manualSlug) && // Filter by category
            course?.featured === 1 // Filter by featured
        )

      setCourse(filteredCourses)
    }
  }, [courseData])

  return (
    <>
      {Array.isArray(course) ? (
        (() => {
          const filteredCourses = course.slice((page - 1) * 6, page * 6)

          return filteredCourses.length ? (
            filteredCourses
              .filter(item => item?.id != 150000)
              .map(course =>
                course.cycles?.length ? (
                  <li key={course.id}>
                    <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                  </li>
                ) : null
              )
          ) : (
            <>
              <li>
                <Link href='#'>No courses found.</Link>
              </li>
            </>
          )
        })()
      ) : (
        <LinearProgress />
      )}
    </>
  )
}

export default Selfemployee
