// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const CardMembership = () => {
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
              flexFlow: 'column',
            }}
          >
            <Typography variant='h6' sx={{ mb: 3.5 }}>
              Share Your Unique Referral Link
            </Typography>
            <Typography variant='body2'>
              When you sign up for our referral program, you'll receive a unique referral link that you can share with your network. This link helps us track who you've referred.
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
                  0
                </Typography>
                <Typography variant='h6'>CAD</Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 5, display: 'flex', flexDirection: 'column' }}>
                <span>REFERAL LINK or CODE</span>
              </Typography>
              <Button variant='contained' startIcon={<Icon icon='tabler:copy' />}>Copy Referal Link</Button>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMembership
