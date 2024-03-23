// ** React Imports
import { useState } from 'react'
import { useRouter } from 'next/router'

// ** Next Import
import Logo from 'src/views/logoMain.js'

// ** MUI Components
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

import RegisterWizardVerification from 'src/views/forms/form-wizard/RegisterWizardVerification'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports

const defaultValues = {
  email: '',
  username: '',
  password: '',
  terms: false
}

const TokenVerification = () => {
  const router = useRouter()
  const { token } = router.query

  // ** States
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const theme = useTheme()
  const { register } = useAuth()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const schema = yup.object().shape({
    password: yup.string().min(5).required(),
    username: yup.string().min(3).required(),
    email: yup.string().email().required(),
    terms: yup.bool().oneOf([true], 'You must accept the privacy policy & terms')
  })

  const {
    setError,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const { email, username, password } = data
    register({ email, username, password }, err => {
      if (err.email) {
        setError('email', {
          type: 'manual',
          message: err.email
        })
      }
      if (err.username) {
        setError('username', {
          type: 'manual',
          message: err.username
        })
      }
    })
  }

  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            backgroundColor: 'customColors.bodyBg',
            margin: theme => theme.spacing(8, 8, 8, 8)
          }}
        >
          <Box sx={{ width: '70%' }}>
            <Logo />
            <Box sx={{ my: 6 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 500, fontSize: '1.625rem', lineHeight: 1.385 }}>
                Sign Up For The Fanavaran
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                No cost for registration. Competitive commission. Highest value. Take 4 simple steps right now to gain
                access to our arsenal of hundreds of adventures all on one booking platform, all ready to satisfy
                everything a travel agent needs!
              </Typography>
            </Box>

            <RegisterWizardVerification token={token} />
          </Box>
        </Box>
      ) : null}
    </Box>
  )
}
TokenVerification.getLayout = page => <BlankLayout>{page}</BlankLayout>
TokenVerification.guestGuard = true

export default TokenVerification
