import React, { useState, useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// ** Demo Components Imports
import CardUser from 'src/views/ui/cards/basic/CardUser'
import CardMembership from 'src/views/ui/cards/basic/CardMembership'
import FreeUserCard from 'src/views/dashboards/ecommerce/FreeUserCard'
import VIPUserCard from 'src/views/dashboards/ecommerce/VIPUserCard'
import ListEnrolledCourses from 'src/views/components/list/ListEnrolledCourses'

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardSnippet from 'src/@core/components/card-snippet'
import { getProfileInfo } from 'src/store/apps/profile'
import { useSelector, useDispatch } from 'react-redux'

const AnalyticsDashboard = () => {
  //state
  const [user, setUser] = useState()
  const [courses, setCourses] = useState()
  const [subscription, setSubscription] = useState()
  const [isUserVIP, setIsUserVIP] = useState(false)

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
      setSubscription(profileDetails?.data?.subscription)
      setCourses(profileDetails?.data?.courses)
      setIsUserVIP(profileDetails?.data?.isVipValid)
    }
  }, [profileDetails])

  return (
    <ApexChartWrapper dir='ltr'>
      <KeenSliderWrapper>
        <Grid container spacing={6}>
          {/* VIP User Card */}
          {!isUserVIP ? (
            <Grid item xs={12} md={6}>
              <FreeUserCard user={user} />
            </Grid>
          ) : (
            <Grid item xs={12} md={6}>
              <VIPUserCard user={user} subscription={subscription} />
            </Grid>
          )}

          <Grid item xs={12} md={6}>
            <CardMembership user={user} />
          </Grid>

          {/* Popular Courses */}
          <Grid item xs={12} sm={6} md={12}>
            <Grid title='Enrolled Courses' code={{ tsx: null, jsx: null }}>
              <Typography component='span' variant='h4' sx={{ my: 1, fontWeight: 500, marginBottom: '20px' }}>
                Enrolled Courses
              </Typography>
              <Divider sx={{ my: '20px !important' }} />
              <ListEnrolledCourses courses={courses} />
            </Grid>
          </Grid>
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
