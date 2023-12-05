import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { autoRenewal } from 'src/store/apps/profile'
import { useDispatch } from 'react-redux'

const FreeUserCard = props => {
  //Hooks
  const dispatch = useDispatch()

  //State
  const [loading, setLoading] = useState(true)
  const [autoRenew, setAutoRenew] = useState(true)
  const [user, setUser] = useState(null)
  const [totalDays, setTotalDays] = useState(null)
  const [daysPassed, setDaysPassed] = useState(null)
  const [daysLeft, setDaysLeft] = useState(null)

  //Set state
  useEffect(() => {
    if (props.user) {
      setLoading(true)
      setAutoRenew(props.subscription)
      setUser(props.user)

      //calculate user vip days
      if (props.user?.vip) {
        const expirationDate = new Date(props.user?.vip)
        const startDate = new Date(expirationDate)
        startDate.setFullYear(startDate.getFullYear() - 1)
        const currentDate = new Date()
        const totalDays = Math.round((expirationDate - startDate) / (1000 * 60 * 60 * 24))
        const daysPassed = Math.round((currentDate - startDate) / (1000 * 60 * 60 * 24))
        const daysLeft = Math.round((expirationDate - currentDate) / (1000 * 60 * 60 * 24))
        setTotalDays(totalDays)
        setDaysPassed(daysPassed)
        setDaysLeft(daysLeft)
      }

      setLoading(false)
    }
  }, [props])

  //HandleChange userAuto renewal
  const handleAutoRenewal = () => {
    setLoading(true)
    dispatch(autoRenewal({ customerId: user?.stripeCustomerId }))
    setLoading(false)
  }

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        {loading ? (
          <LinearProgress />
        ) : (
          <>
            <Typography variant='h6' sx={{ mb: 5, fontWeight: 500 }}>
              Welcome {user?.firstName}! 🎉
            </Typography>
            <Grid container spacing={5}>
              <Grid item xs={12} md={12}>
                <Box sx={{ mb: 4 }}>
                  <Typography sx={{ mb: 1.5, fontWeight: 500 }}>Your Current Plan is Premium</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Explore Amazing Features</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                <div>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: 500 }}>Days</Typography>
                    <Typography sx={{ fontWeight: 500 }}>
                      {daysPassed} of {totalDays} Days
                    </Typography>
                  </Box>
                  <LinearProgress
                    value={(daysPassed / totalDays) * 100}
                    variant='determinate'
                    sx={{ my: 1.5, height: 10 }}
                  />
                  <Typography sx={{ color: 'text.secondary' }}>
                    {daysLeft} days remaining until your plan requires update
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControlLabel
                  onClick={handleAutoRenewal}
                  control={<Switch defaultChecked={autoRenew} />}
                  label='Auto Renew Membership'
                />
              </Grid>
            </Grid>
          </>
        )}
      </CardContent>
    </Card>
  )
}

export default FreeUserCard
