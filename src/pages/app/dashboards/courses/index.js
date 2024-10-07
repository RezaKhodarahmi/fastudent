import React, { useState, useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Components Imports
import ListEnrolledCourses from 'src/views/components/list/ListEnrolledCourses'

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardSnippet from 'src/@core/components/card-snippet'
import { useSelector, useDispatch } from 'react-redux'
import { getProfileInfo } from 'src/store/apps/profile'

const AnalyticsDashboard = () => {
  //state

  const [courses, setCourses] = useState()
  const [user, setUser] = useState()

  //Hooks
  const dispatch = useDispatch()

  //give user data from state
  const profileDetails = useSelector(state => state.profile)

  //fetch user data
  useEffect(() => {
    dispatch(getProfileInfo())
  }, [dispatch])

  useEffect(() => {
    if (profileDetails?.data.user) {
      setUser(profileDetails?.data?.user)
      setCourses(profileDetails?.data?.courses)
    }
  }, [profileDetails])

  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6}>
          {/* Popular Courses */}
          <Grid item xs={12} sm={6} md={12}>
            <CardSnippet title='Enrolled Courses' code={{ tsx: null, jsx: null }}>
              <ListEnrolledCourses courses={courses} user={user} />
            </CardSnippet>
          </Grid>
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
