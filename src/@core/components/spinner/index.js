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
      <svg width="150" height="150" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">

        <path d="M8.58862 7.27324L30.672 0V8.9903L8.58862 16.2635V7.27324Z" fill="#FFA600">
          <animate attributeName="opacity"
            values="0;1;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            calcMode="spline" />
        </path>

        <path d="M3.5813 17.9905L20.7587 14.4263V23.4166L3.5813 26.9808V17.9905Z" fill="#223885">
          <animate attributeName="opacity"
            values="0;1;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.1s"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            calcMode="spline" />
        </path>

        <path d="M0 28.0099L8.5887 27.4419V37.0002H0V28.0099Z" fill="#223885">
          <animate attributeName="opacity"
            values="0;1;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.3s"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            calcMode="spline" />
        </path>
      </svg>

    </Box>
  )
}

export default FallbackSpinner
