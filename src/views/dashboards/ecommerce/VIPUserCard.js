import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { autoRenewal } from 'src/store/apps/profile'
import { useDispatch } from 'react-redux'
import { appConfig } from 'src/configs/appConfig'
import { styled, useTheme } from '@mui/material/styles'

// ** Custom Components Imports
import Icon from 'src/@core/components/icon'
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import CustomAvatar from 'src/@core/components/mui/avatar'

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    paddingTop: '0 !important'
  }
}))

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
    <>
    <Card>
        <CardHeader
          sx={{ pb: 0 }}
          title={`Welcome ${user?.firstName || ''}! 🎉`}
          subheader='In this panel, start your journey towards success'
          action={
            <OptionsMenu
              options={['Last Week', 'Last Month', 'Last Year']}
              iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
            />
          }
        />
        <CardContent>
          <Grid container>
            <StyledGrid
              item
              sm={5}
              xs={12}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', mt: 5, mb: 5 }}
            >
              <Box sx={{ mb: 3, rowGap: 1, columnGap: 2.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                Your Current Plan is <CustomChip rounded size='small' skin='light' color='error' label='VIP' />
              </Box>
              <Typography variant='body2'>Explore Amazing Features</Typography>
            </StyledGrid>
          </Grid>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' variant='rounded' sx={{ mr: 3, width: 55, height: 55 }}>
              <Icon icon='tabler:crown' />
            </CustomAvatar>
            <Box
                sx={{
                  rowGap: 1,
                  columnGap: 4,
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {loading ? (
              <LinearProgress />
            ) : (
              <>
                <Grid container spacing={5}>
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
            </Box>
          </Box>

        </CardContent>
      </Card>
    </>
  )
}

export default FreeUserCard
