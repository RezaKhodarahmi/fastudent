import React, { useState, useEffect } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import { Toast, toast } from 'react-hot-toast'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    paddingTop: '0 !important'
  }
}))

const CardMembership = props => {
  //state
  const [credit, setCredit] = useState(0)
  const [referralCode, setReferralCode] = useState(null)

  //set state when props is change
  useEffect(() => {
    if (props.user) {
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
    <>
      <Card sx={{ paddingTop: 0, paddingBottom: 5 }}>
      <Grid container>
        <StyledGrid
          item
          sm={7}
          xs={12}
          sx={{
            '& .apexcharts-series[rel="1"]': { transform: 'translateY(-6px)' },
            '& .apexcharts-series[rel="2"]': { transform: 'translateY(-9px)' },
          }}
        >
          <CardHeader title='Referral Link'  sx={{ marginBottom: 5, }} />
          <CardContent>
            <Typography variant='h6' sx={{ mb: 3.5 }}>
              Share Your Unique Referral Link
            </Typography>
            <Typography variant='body2'>
              When you sign up for our referral program, you'll receive a unique referral link that you can share with
              your network. This link helps us track who you've referred.
            </Typography>
          </CardContent>
        </StyledGrid>
        
        <Grid item xs={12} sm={5}>
          <CardContent
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            {/* Revenue */}
            <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              <Typography variant='h6'>$</Typography>
              <Typography variant='h6' sx={{ lineHeight: 1, fontWeight: 600, fontSize: '3.75rem !important' }}>
                {credit}
              </Typography>
              <Typography variant='h6'>CAD</Typography>
            </Box>
            {/* Referal Code */}
            <Box sx={{ mb: 8, gap: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant='h4'>{referralCode}</Typography>
            </Box>
            {/* Button */}
            <Button variant='contained' onClick={handelCopyReferralCode} startIcon={<Icon icon='tabler:copy' />}>
              Copy Referral Code
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
    </>
  )
}

export default CardMembership
