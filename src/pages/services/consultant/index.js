import React, { useState, useEffect } from 'react'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CircularProgress } from '@mui/material'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  CardActions,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material'
import { createNewAppointment } from 'src/store/apps/appointment'
import { getProfileInfo } from 'src/store/apps/profile'
import BASE_URL from 'src/api/BASE_URL'

import { useDispatch, useSelector } from 'react-redux'

const AppointmentBooking = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const appointmentData = useSelector(state => state.appointment)
  const userProfile = useSelector(state => state.profile)
  const router = useRouter()
  const dir = window.localStorage.getItem('direction' || 'ltr')

  const [selectedDate, setSelectedDate] = useState(null)
  const [availableTimes, setAvailableTimes] = useState([])
  const [buttonDisable, setButtonDisable] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [VIP, setVIP] = useState(false)
  const [selectedTime, setSelectedTime] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const userLoggedIn = localStorage.getItem('userData') // Example check for user login

  const isDateAllowed = date => {
    const startAllowedDate = new Date()
    const endAllowedDate = new Date('2024-12-08')
    const day = date.getDay()

    // Check if the date is between the allowed range
    const isInRange = date > startAllowedDate && date <= endAllowedDate

    // Check if the day is Tuesday (2), Wednesday (3), or Friday (5)
    const isAllowedDay = day === 2 || day === 3 || day === 5

    // Otherwise, return true to disable the date
    return !(isInRange && isAllowedDay)
  }

  const fetchAvailableTimes = async selectedDate => {
    try {
      const response = await fetch(`${BASE_URL}/student/counseling/vip/times/${selectedDate}`)
      const times = await response.json()
      setAvailableTimes(times)
    } catch (error) {
      console.error('Error fetching available times:', error)
    }
  }

  useEffect(() => {
    dispatch(getProfileInfo())
  }, [userLoggedIn])

  useEffect(() => {
    if (userProfile?.data) {
      setVIP(userProfile?.data.isVipValid)
    }
  }, [userProfile])

  useEffect(() => {
    if (appointmentData?.data) {
      setIsLoading(false)
      if (appointmentData?.data?.error === false) {
        setButtonDisable(true)
      }
    }
  }, [appointmentData])

  // Assuming `selectedDate` state changes on date selection
  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0] // Format date as YYYY-MM-DD
      fetchAvailableTimes(formattedDate)
    }
  }, [selectedDate])

  const handleBookAppointment = () => {
    if (!userLoggedIn) {
    } else if ((selectedDate, selectedTime)) {
      setIsLoading(true)
      dispatch(createNewAppointment({ email: userLoggedIn, date: selectedDate, time: selectedTime }))
      setButtonDisable(true)
    } else {
      window.alert(`${t('please-select-a-date-and-time')}`)
    }
  }

  const handelLogin = () => {
    router.push('/login?returnUrl=/services/educational-and-career-counseling')
  }

  const handelByVIP = () => {
    router.push('/membership/checkout')
  }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Container maxWidth='sm' sx={{ mt: 5 }}>
      <Typography variant='h4' sx={{ mb: 4, textAlign: 'center' }}>
        رزرو وقت مشاوره کاری و تحصیلی(ویژه اعضای VIP)
      </Typography>
      {/* Consultant Info Card */}
      <Card
        style={{ direction: 'ltr' }}
        raised
        sx={{ mb: 4, mt: 5, borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
      >
        <CardMedia
          component='img'
          height='140'
          image='/img/mo_amani.jpg' // Update the path to your image
          alt='Consultant'
          sx={{ width: 150, height: 150, borderRadius: '50%', margin: 'auto', marginTop: '5px', marginBottom: '2px' }}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' textAlign='center'>
            Mo Amani, P.Eng, PMP, PMI-RMP
          </Typography>

          <Typography variant='body2' color='text.secondary'>
            Mo is a serial entrepreneur in a variety of industries...
          </Typography>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <Typography variant='body2' color='text.secondary'>
              He is holding positions in CONFIX Construction, Genius Camp, Genius Math, and SCON Residential, and
              volunteering as the president of Fanavaran (a non-for-profit education institution.) He moved to Canada
              back in 2015 and resident of Halifax, Nova Scotia. He had practiced engineering for 15 years in different
              companies as a mechanical engineer. His experience in design and project management in HVAC, fire
              suppression, and energy modeling in residential, commercial, and mission-critical facilities made him a
              top ranked engineer in HVAC systems. His last position was as a lead mechanical engineer at SNC Lavalin.
              Besides his engineering and management background, he is well-reputed in designing creative coaching
              courses and providing educational experts’ opinions for targeted aims.
            </Typography>
          </Collapse>
          <Box textAlign='center' mt={2}>
            <Button onClick={handleExpandClick}>{expanded ? `${t('show-less')}` : `${t('show-more')}`}</Button>
          </Box>
        </CardContent>
      </Card>
      {/* Appointment Booking Card */}

      <Card>
        <CardContent>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container style={{ marginTop: '10px' }} spacing={3}>
              <Typography variant='subtitle1'>{t('all-show-in-bc-time')}</Typography>
              <Grid item xs={12}>
                <DatePicker
                  label={t('select-date')}
                  value={selectedDate}
                  onChange={setSelectedDate}
                  shouldDisableDate={isDateAllowed} // Use the function here
                  renderInput={params => <TextField {...params} fullWidth />}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='time-select-label'>{t('select-time')}</InputLabel>
                  <Select
                    labelId='time-select-label'
                    id='time-select'
                    value={selectedTime}
                    label='Select Time'
                    onChange={event => setSelectedTime(event.target.value)}
                    fullWidth
                  >
                    {availableTimes.map((time, index) => (
                      <MenuItem key={index} value={time}>
                        {time}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </LocalizationProvider>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
          {userLoggedIn ? (
            VIP ? (
              <Button
                variant='contained'
                onClick={handleBookAppointment}
                disabled={buttonDisable}
                color='primary'
                size='large'
              >
                {isLoading ? <CircularProgress style={{ color: '#fff' }} size={24} /> : `${t('submit-appointment')}`}
              </Button>
            ) : (
              <Button variant='contained' color='secondary' onClick={handelByVIP} size='large'>
                By VIP membership
              </Button>
            )
          ) : (
            <Button variant='contained' color='secondary' onClick={handelLogin} size='large'>
              {t('log-in-to-book')}
            </Button>
          )}
        </CardActions>
      </Card>
    </Container>
  )
}
AppointmentBooking.guestGuard = true

export default AppointmentBooking
