// ** Next Import
import Link from 'next/link'
import * as yup from 'yup'
import Logo from 'src/views/logoMain.js'

// ** MUI Components
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from 'src/hooks/useAuth'
import { useState } from 'react'

// Styled Components
const ForgotPasswordIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 650,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const defaultValues = {
  email: ''
}

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  fontSize: '1rem',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  color: theme.palette.primary.main
}))

const schema = yup.object().shape({
  email: yup.string().email().required()
})

const ForgotPassword = () => {
  const [successMessage, setSuccessMessage] = useState('')

  // // ** Hooks
  const auth = useAuth()
  const theme = useTheme()

  // ** Vars
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  const {
    control,
    setError,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const { email } = data
    auth.requestfpass(
      { email },
      () => {
        setError('email', {
          type: 'manual',
          message: 'User not found , Please Enter Another Email.'
        })
      },
      () => {
        reset()
        setSuccessMessage(
          "Thank you for submitting your email address. We've sent a message to your email with instructions on how to reset your password. Please check your inbox and follow the steps provided. If you don't receive an email within a few minutes, please check your spam folder or contact our support team for assistance."
        )
      }
    )
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
            overflow: 'hidden',
            objectFit: 'cover',
            justifyContent: 'center',
            backgroundImage: 'url("/images/pages/login/Michelle_Maria.jpg")',
            backgroundSize: 'cover',
            margin: theme => theme.spacing(8, 0, 8, 8)
          }}
        ></Box>
      ) : null}
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Logo />
            {!successMessage && (
              <Box sx={{ my: 6 }}>
                <Typography sx={{ mb: 1.5, fontWeight: 500, fontSize: '1.625rem', lineHeight: 1.385 }}>
                  Forgot Password? 🔒
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Enter your email and we&prime;ll send you instructions to reset your password
                </Typography>
              </Box>
            )}
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              {/* <TextField autoFocus type='email' label='Email' sx={{ display: 'flex', mb: 4 }} /> */}
              {!successMessage ? (
                <>
                  <FormControl fullWidth sx={{ mb: 4 }}>
                    <Controller
                      name='email'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField
                          autoFocus
                          label='Email'
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          error={Boolean(errors.email)}
                          placeholder='info@fanavaran.ca'
                        />
                      )}
                    />
                    {errors.email && (
                      <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>
                    )}
                  </FormControl>
                  <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
                    Send reset link
                  </Button>
                </>
              ) : (
                <p style={{ color: 'green' }}>{successMessage}</p>
              )}
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}>
                <LinkStyled href='/login'>
                  <Icon fontSize='1.25rem' icon='tabler:chevron-left' />
                  <span>Back to login</span>
                </LinkStyled>
              </Typography>
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}
ForgotPassword.getLayout = page => <BlankLayout>{page}</BlankLayout>
ForgotPassword.guestGuard = true

export default ForgotPassword
