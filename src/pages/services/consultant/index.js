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
  InputLabel,
  Autocomplete
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
  const dir = window.localStorage.getItem('direction') || 'ltr'

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

    // Return false to disable dates that are not allowed
    return !(isInRange && isAllowedDay)
  }

  const fetchAvailableTimes = async formattedDate => {
    try {
      const response = await fetch(`${BASE_URL}/student/counseling/vip/times/${formattedDate}`)
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

  // Handle date selection and formatting
  useEffect(() => {
    if (selectedDate) {
      // Format the date manually to ensure it's in YYYY-MM-DD format without timezone shift
      const formattedDate = selectedDate.toLocaleDateString('en-CA') // 'en-CA' ensures the format is YYYY-MM-DD
      fetchAvailableTimes(formattedDate)
    }
  }, [selectedDate])

  const handleBookAppointment = () => {
    if (!userLoggedIn) {
      // Optionally handle user not logged in
    } else if (selectedDate && selectedTime) {
      setIsLoading(true)
      const formattedDate = selectedDate.toLocaleDateString('en-CA') // Format date without timezone shift
      dispatch(createNewAppointment({ email: userLoggedIn, date: formattedDate, time: selectedTime }))
      setButtonDisable(true)
    } else {
      window.alert(`${t('please-select-a-date-and-time')}`)
    }
  }

  const handleLogin = () => {
    router.push('/login?returnUrl=/services/consultant')
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
              <h1>{t("consultation-mo-title")} <br /><small>{t("consultation-mo-title-small")}</small></h1>

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
                <img src='/images/consultant/mo.webp' alt={t("consultation-mo-title")} className='img-fluid' />
                <h2>{t('consultation-consultant')}</h2>
                <h3>{t('consultation-consultant-mo')}</h3>
                <h4>{t('consultation-consultant-mo-title')}</h4>
                <p>{t('consultation-consultant-mo-about')}</p>
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
