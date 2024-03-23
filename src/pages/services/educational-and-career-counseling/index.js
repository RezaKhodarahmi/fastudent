import React, { useState, useEffect } from 'react'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CircularProgress } from '@mui/material'
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
import { createNewFreeAppointment } from 'src/store/apps/appointment'
import { useDispatch, useSelector } from 'react-redux'

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [availableTimes, setAvailableTimes] = useState([])
  const [buttonDisable, setButtonDisable] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const fetchAvailableTimes = async selectedDate => {
    try {
      const response = await fetch(`http://localhost:3200/api/v1/student/counseling/times/${selectedDate}`)
      const times = await response.json()
      setAvailableTimes(times)
    } catch (error) {
      console.error('Error fetching available times:', error)
    }
  }

  const dispatch = useDispatch()
  const appointmentData = useSelector(state => state.appointment)

  useEffect(() => {
    if (appointmentData?.data?.error === false) {
      setButtonDisable(true)
    }
  }, [appointmentData])

  // Assuming `selectedDate` state changes on date selection
  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0] // Format date as YYYY-MM-DD
      fetchAvailableTimes(formattedDate)
    }
  }, [selectedDate])
  const [selectedTime, setSelectedTime] = useState(new Date())
  const [expanded, setExpanded] = useState(false)
  const userLoggedIn = localStorage.getItem('userData') // Example check for user login

  const handleBookAppointment = () => {
    if (!userLoggedIn) {
      console.log('Redirect to login')
    } else {
      setIsLoading(true)
      console.log('Booking appointment for:', selectedDate, selectedTime)
      dispatch(createNewFreeAppointment({ email: userLoggedIn, date: selectedDate, time: selectedTime }))
    }
  }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Container maxWidth='sm' sx={{ mt: 5 }}>
      <Typography variant='h4' sx={{ mb: 4, textAlign: 'center' }}>
        Book Your Appointment
      </Typography>
      {/* Consultant Info Card */}
      <Card raised sx={{ mb: 4, mt: 5, borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
        <CardMedia
          component='img'
          height='140'
          image='/img/mo_amani.jpg' // Update the path to your image
          alt='Consultant'
          sx={{ width: 150, height: 150, borderRadius: '50%', margin: 'auto', marginTop: '5px', marginBottom: '2px' }}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' textAlign='center'>
            Mo Amani, P.Eng, PMP, PMI-RMP​
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
            <Button onClick={handleExpandClick}>{expanded ? 'Show Less' : 'Show More'}</Button>
          </Box>
        </CardContent>
      </Card>
      {/* Appointment Booking Card */}
      <Card>
        <CardContent>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <DatePicker
                  label='Choose a Date'
                  value={selectedDate}
                  onChange={setSelectedDate}
                  renderInput={params => <TextField {...params} fullWidth />}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='time-select-label'>Select Time</InputLabel>
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
            <Button
              variant='contained'
              onClick={handleBookAppointment}
              disabled={buttonDisable}
              color='primary'
              size='large'
            >
              Submit Appointment
              {isLoading ? <CircularProgress size={24} /> : 'Submit Appointment'}
            </Button>
          ) : (
            <Button variant='contained' color='secondary' size='large'>
              Log In to Book
            </Button>
          )}
        </CardActions>
      </Card>
    </Container>
  )
}
AppointmentBooking.guestGuard = true

export default AppointmentBooking
