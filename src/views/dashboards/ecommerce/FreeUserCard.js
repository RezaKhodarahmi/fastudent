// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { appConfig } from 'src/configs/appConfig'
import { styled, useTheme } from '@mui/material/styles'

// ** Custom Components Imports
import Icon from 'src/@core/components/icon'
import CustomChip from 'src/@core/components/mui/chip'
import { useEffect, useState } from 'react'
import OptionsMenu from 'src/@core/components/option-menu'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [{ data: [37, 76, 65, 41, 99, 53, 70] }]

const data = [
  {
    progress: 64,
    stats: '$545.69',
    title: 'Earnings',
    avatarIcon: 'tabler:currency-dollar'
  },
  {
    progress: 59,
    title: 'Profit',
    stats: '$256.34',
    avatarColor: 'info',
    progressColor: 'info',
    avatarIcon: 'tabler:chart-pie-2'
  },
  {
    progress: 22,
    stats: '$74.19',
    title: 'Expense',
    avatarColor: 'error',
    progressColor: 'error',
    avatarIcon: 'tabler:brand-paypal'
  }
]

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    paddingTop: '0 !important'
  }
}))

const FreeUserCard = props => {
  // ** Hook
  const theme = useTheme()

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        distributed: true,
        columnWidth: '42%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16)
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      show: false,
      padding: {
        top: -28,
        left: -9,
        right: -10,
        bottom: -12
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      labels: {
        style: {
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize
        }
      }
    },
    yaxis: { show: false }
  }

  //state
  const [user, setUser] = useState(null)

  // hooks
  useEffect(() => {
    if (props.user) {
      setUser(props.user)
    }
  }, [props])

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
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                mt: 5,
                mb: 5
              }}
            >
              <Box sx={{ mb: 3, rowGap: 1, columnGap: 2.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                Your Current Plan is <CustomChip rounded size='small' skin='light' color='primary' label='FREE' />
              </Box>
              <Typography variant='body2'>Upgrade to Premium Membership</Typography>
            </StyledGrid>
          </Grid>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' variant='rounded' sx={{ mr: 3, width: 55, height: 55 }}>
              <Icon icon='tabler:currency-dollar' />
            </CustomAvatar>
            <Box
              sx={{
                rowGap: 1,
                columnGap: 4,
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography sx={{ fontWeight: 700, fontSize: 22 }}>$80 </Typography>
                <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                  Annually <CustomChip rounded size='small' skin='light' color='error' label='Popular' />
                </Typography>
              </Box>

              <Button variant='contained'>
                <Link href={`${appConfig.appUrl}/membership/checkout`} sx={{ color: '#ffffff' }}>
                  UPGRADE PLAN
                </Link>
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default FreeUserCard
