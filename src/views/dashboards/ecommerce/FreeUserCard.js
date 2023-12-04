// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { appConfig } from 'src/configs/appConfig'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import { useEffect, useState } from 'react'

const FreeUserCard = props => {
  //state
  const [user, setUser] = useState(null)

  // hooks
  useEffect(() => {
    if (props.user) {
      setUser(props.user)
    }
  }, [props])

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6' sx={{ mb: 5, fontWeight: 500 }}>
          Welcome {user?.firstName}! 🎉
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={12}>
            <Box sx={{ mb: 4 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 500 }}>Your Current Plan is Free</Typography>
              <Typography sx={{ color: 'text.secondary' }}>Upgrade to Premium Membership</Typography>
            </Box>
            <div>
              <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ mr: 2.5, fontWeight: 500 }}>$60 Per Year</Typography>
                <CustomChip rounded label='Popular' size='small' color='primary' skin='light' />
              </Box>
            </div>
          </Grid>
        </Grid>
        <Button variant='contained' sx={{ mt: 5 }}>
          <a href={`${appConfig.appUrl}/membership/checkout`}>Buy Plan</a>
        </Button>
      </CardContent>
    </Card>
  )
}

export default FreeUserCard
