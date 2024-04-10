import React, { useState, useEffect } from 'react'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CircularProgress } from '@mui/material'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
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
import { createEXAppointment } from 'src/store/apps/appointment'
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
    const endAllowedDate = new Date('2024-12-28')
    const day = date.getDay()

    // Check if the date is between the allowed range
    const isInRange = date > startAllowedDate && date <= endAllowedDate

    // Check if the day is Tuesday (2), Wednesday (3), or Friday (5)
    const isAllowedDay = day === 1 || day === 2 || day === 3 || day === 4 || day === 5

    // Otherwise, return true to disable the date
    return !(isInRange && isAllowedDay)
  }

  const fetchAvailableTimes = async selectedDate => {
    try {
      const response = await fetch(`${BASE_URL}/student/counseling/ex/times/${selectedDate}`)
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
      dispatch(createEXAppointment({ email: userLoggedIn, date: selectedDate, time: selectedTime }))
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
        رزرو وقت مشاوره برای نوشتن تجربه کاری مهندسی و تکنسین(ویژه اعضای VIP)
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
          image='/img/babak_babaee.png' // Update the path to your image
          alt='Consultant'
          sx={{ width: 150, height: 150, borderRadius: '50%', margin: 'auto', marginTop: '5px', marginBottom: '2px' }}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' textAlign='center'>
            Babak Babaee, P.Eng. MBA​
          </Typography>

          <Typography variant='body2' color='text.secondary'>
            Babak Babaee, P.Eng, MBA, is a seasoned Engineer, Consultant and Instructor with more than 18 years of
            experience working in different sectors such as Power Generation,
          </Typography>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <Typography variant='body2' color='text.secondary'>
              Oil & Gas and Mining in Canada and Iran. He graduated from the University of Tehran, Concordia University
              and the University of Toronto. He was a member of the board of directors of the Canadian Society for
              Mechanical Engineering (CSME), a contributor to many Codes and Standards at CSA Group and a volunteer at
              the Professional Engineering Ontario (PEO) to assess engineering documents. At Fanavaran, he teaches the
              NPPE course to help engineers to get their licenses and help technicians to get their electrician and
              plumbing licenses.09:08 PM
            </Typography>
          </Collapse>
          <Box textAlign='center' mt={2}>
            <Button onClick={handleExpandClick}>{expanded ? `${t('show-less')}` : `${t('show-more')}`}</Button>
          </Box>
        </CardContent>
      </Card>
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
