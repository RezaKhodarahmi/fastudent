// ** MUI Imports
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'
import { appConfig } from 'src/configs/appConfig'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Styled Components
const LoginMainLogo = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 680,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const FallbackSpinner = ({ sx }) => {
  // ** Hook
  const theme = useTheme()
  const { settings } = useSettings()

  // ** Vars
  const { skin } = settings

  const imageSource = skin === 'bordered' ? 'loading' : 'loading'

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
                 <img src={appConfig.appUrl + '/img/logo.png'} alt='logo' width='200' height='50' />


      <CircularProgress color='warning' disableShrink sx={{ mt: 6 }} />
    </Box>
  )
}

export default FallbackSpinner
