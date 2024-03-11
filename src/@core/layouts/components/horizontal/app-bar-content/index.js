// ** Next Import
import Link from 'next/link'
import { appConfig } from 'src/configs/appConfig'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

// ** Styled Components
const LoginMainLogo = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 680,
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const AppBarContent = props => {
  // ** Props
  const { appBarContent: userAppBarContent, appBarBranding: userAppBarBranding } = props

  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()

  // ** Vars
  const { skin } = settings

  const imageSource = skin === 'bordered' ? 'MainLogo' : 'MainLogo'

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {userAppBarBranding ? (
        userAppBarBranding(props)
      ) : (
        <LinkStyled href='/'>
                     <img src={appConfig.appUrl + '/img/logo.png'} alt='logo' width='200' height='50' />

        </LinkStyled>
      )}
      {userAppBarContent ? userAppBarContent(props) : null}
    </Box>
  )
}

export default AppBarContent
