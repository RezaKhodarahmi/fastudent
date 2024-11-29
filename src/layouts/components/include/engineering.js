// React
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

// Hooks
import { LinearProgress } from '@mui/material'

function Engineering() {
  const [course, setCourse] = useState([])
  const [page, setPage] = useState(1)

  // Redux state for course data
  const courseData = useSelector(state => state.course)

  useEffect(() => {
    if (courseData?.data) {
      const manualSlug = 'engineering' // manually set slug

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
          // Paginate the filtered courses
          const paginatedCourses = course.slice((page - 1) * 6, page * 6)

          return paginatedCourses.length ? (
            paginatedCourses
              .filter(item => item?.id !== 150000) // Exclude specific courses by ID if needed
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

export default Engineering
