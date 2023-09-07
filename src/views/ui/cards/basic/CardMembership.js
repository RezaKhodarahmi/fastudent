import React, { useState, useEffect } from 'react'
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import appConfig from 'src/configs/appConfig'
import { Toast, toast } from 'react-hot-toast'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const CardMembership = props => {
  //state
  const [credit, setCredit] = useState(0)
  const [referralCode, setReferralCode] = useState(null)

  //set state when props is change
  useEffect(() => {
    if (props.user) {
      console.log(props.user)
      setCredit(props.user?.credit)
      setReferralCode(props.user?.referralCode)
    }
  }, [props])

  //Handel copy code
  const handelCopyReferralCode = () => {
    navigator.clipboard
      .writeText(referralCode)
      .then(() => {
        // The referral code was successfully copied to the clipboard
        toast.success('Referral code copied to clipboard')
      })
      .catch(err => {
        // There was an error trying to copy the referral code to the clipboard
        toast.error('Could not copy referral code to clipboard: ', err)
      })
  }
  return (
    <Card>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={7}>
          <CardContent
            sx={{
              p: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important`,
              height: '100%',
              display: 'flex',
              textAlign: 'left',
              alignItems: 'start',
              justifyContent: 'center',
              flexFlow: 'column'
            }}
          >
            <Typography variant='h6' sx={{ mb: 3.5 }}>
              Share Your Unique Referral Link
            </Typography>
            <Typography variant='body2'>
              When you sign up for our referral program, you'll receive a unique referral link that you can share with
              your network. This link helps us track who you've referred.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          sm={5}
          xs={12}
          sx={{ pt: ['0 !important', '1.5rem !important'], pl: ['1.5rem !important', '0 !important'] }}
        >
          <CardContent
            sx={{
              height: '100%',
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'action.hover',
              p: theme => `${theme.spacing(18, 5, 16)} !important`
            }}
          >
            <div>
              <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <Typography variant='h6'>$</Typography>
                <Typography variant='h6' sx={{ lineHeight: 1, fontWeight: 600, fontSize: '3.75rem !important' }}>
                  {credit}
                </Typography>
                <Typography variant='h6'>CAD</Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 5, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ background: '#fff', padding: '5px', color: '#000' }}>{referralCode}</h3>
              </Typography>
              <Button variant='contained' onClick={handelCopyReferralCode} startIcon={<Icon icon='tabler:copy' />}>
                Copy Referral Code
              </Button>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMembership
