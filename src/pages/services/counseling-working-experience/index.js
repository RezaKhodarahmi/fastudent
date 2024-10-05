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
  InputLabel,
  Autocomplete
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

  const handleLogin = () => {
    router.push('/login?returnUrl=/services/counseling-working-experience')
  }

  const handleByVIP = () => {
    router.push('/membership/checkout')
  }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <section className='FNV-Consultation'>
        <div className='FNV-Canvas-Top'>
          <svg viewBox="0 0 1454 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1453 0.999987L1 99L1 0.999987L1453 0.999987Z" fill="white" stroke="white" />
          </svg>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-8'>
              <h1>{t("consultation-babak-title")} <br /><small>{t("consultation-babak-title-small")}</small></h1>

              <Card className='card'>
                <CardContent className='card-body'>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid container style={{ marginTop: '10px' }} spacing={3}>
                      {/* Information text */}
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">{t('all-show-in-bc-time')}</Typography>
                      </Grid>

                      {/* Select Date */}
                      <Grid item xs={12} md={4} className="card-body-grid">
                        <FormControl fullWidth className="card-body-grid-input">
                          <DatePicker
                            value={selectedDate}
                            onChange={setSelectedDate}
                            shouldDisableDate={isDateAllowed} // Use the function here
                            renderInput={(params) => <TextField {...params} fullWidth />}
                          />
                        </FormControl>
                      </Grid>

                      {/* Select Time */}
                      <Grid item xs={12} md={4} className="card-body-grid">
                        <FormControl fullWidth className="card-body-grid-input-time">
                          <Autocomplete
                            id="time-select"
                            options={availableTimes.length > 0 ? availableTimes : []}
                            getOptionLabel={(option) => option}
                            value={selectedTime}
                            onChange={(event, newValue) => setSelectedTime(newValue)}
                            noOptionsText={t('no-options-available')} // A message when no options are available
                            renderInput={(params) => (
                              <TextField {...params} label={t('select-time')} fullWidth />
                            )}
                          />
                        </FormControl>
                      </Grid>

                      {/* Button */}
                      <Grid item xs={12} md={4}>
                        {userLoggedIn ? (
                          VIP ? (
                            <Button
                              variant="contained"
                              onClick={handleBookAppointment}
                              disabled={buttonDisable}
                              size="large"
                              fullWidth
                              className="SubmitButton"
                            >
                              {isLoading ? (
                                <CircularProgress style={{ color: '#fff' }} size={24} />
                              ) : (
                                t('submit-appointment')
                              )}
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              color="secondary"
                              onClick={handleByVIP}
                              size="large"
                              fullWidth
                            >
                              By VIP membership
                            </Button>
                          )
                        ) : (
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleLogin}
                            size="large"
                            fullWidth
                          >
                            {t('log-in-to-book')}
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </LocalizationProvider>
                </CardContent>
              </Card>
            </div>

            <div className='col-12 col-md-4'>
              <div className='card'>
                <img src='/images/consultant/babak.webp' alt={t("consultation-babak-title")} className='img-fluid' />
                <h2>{t('consultation-consultant')}</h2>
                <h3>{t('consultation-consultant-babak')}</h3>
                <h4>{t('consultation-consultant-babak-title')}</h4>
                <p>{t('consultation-consultant-babak-about')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='FNV-Canvas-Bottom'>
          <svg viewBox="0 0 1454 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1453 0.999987L1 99L1 0.999987L1453 0.999987Z" fill="white" stroke="white" />
          </svg>
        </div>
      </section>
    </>
  )
}
AppointmentBooking.guestGuard = true

export default AppointmentBooking
