// ** Next Import
import Link from 'next/link'
import * as yup from 'yup'
import Logo from 'src/views/logo.js'

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
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'

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
  pass1: yup.string().min(5).required(),
  pass2: yup
    .string()
    .oneOf([yup.ref('pass1'), null], 'Passwords must match')
    .required()
})

const defaultValues = {
  pass1: '',
  pass2: ''
}

const ForgotPassword = () => {
  const router = useRouter()
  const { token } = router.query
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [changePassword, setChangePassword] = useState('')

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()

  // ** Vars
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  if (token) {
    auth.verifyfpass(
      { token },
      () => {
        setMessage('The reset password link has wrong or expired. Please request a new link to reset your password.')
      },
      () => {
        setStatus(true)
      }
    )
  }

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const { pass1 } = data
    if (status) {
      auth.resetpass(
        { token: token, password: pass1 },
        () => {
          setError('pass2', {
            type: 'manual',
            message: 'something is wrong , please try again'
          })
        },

        () => {
          setChangePassword(
            'Congratulations! Your password has been changed successfully. You can now log in to your account with your new password.'
          )
        }
      )
    }
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

            {status ? (
              <>
                {!changePassword && (
                  <Box sx={{ my: 6 }}>
                    <Typography sx={{ mb: 1.5, fontWeight: 500, fontSize: '1.625rem', lineHeight: 1.385 }}>
                      Reset Password
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Enter your new password to reset your password
                    </Typography>
                  </Box>
                )}
                <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                  {/* <TextField autoFocus type='email' label='Email' sx={{ display: 'flex', mb: 4 }} /> */}
                  {!changePassword ? (
                    <>
                      <FormControl fullWidth sx={{ mb: 4 }}>
                        <InputLabel htmlFor='auth-reset-v2-password2' error={Boolean(errors.pass1)}>
                          Password
                        </InputLabel>
                        <Controller
                          name='pass1'
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange, onBlur } }) => (
                            <OutlinedInput
                              value={value}
                              onBlur={onBlur}
                              label='Password'
                              onChange={onChange}
                              id='auth-reset-v2-password2'
                              error={Boolean(errors.pass1)}
                              type={showPassword ? 'text' : 'password'}
                              endAdornment={
                                <InputAdornment position='end'>
                                  <IconButton
                                    edge='end'
                                    onMouseDown={e => e.preventDefault()}
                                    onClick={() => setShowPassword(!showPassword)}
                                  >
                                    <Icon icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                                  </IconButton>
                                </InputAdornment>
                              }
                            />
                          )}
                        />

                        {errors.pass1 && (
                          <FormHelperText sx={{ color: 'error.main' }} id=''>
                            {errors.pass1.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                      <FormControl fullWidth sx={{ mb: 4 }}>
                        <InputLabel htmlFor='auth-reset-v2-password1' error={Boolean(errors.pass2)}>
                          re-type Password
                        </InputLabel>
                        <Controller
                          name='pass2'
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange, onBlur } }) => (
                            <OutlinedInput
                              value={value}
                              onBlur={onBlur}
                              label='Password'
                              onChange={onChange}
                              id='auth-reset-v2-password1'
                              error={Boolean(errors.pass2)}
                              type={showPassword2 ? 'text' : 'password'}
                              endAdornment={
                                <InputAdornment position='end'>
                                  <IconButton
                                    edge='end'
                                    onMouseDown={e => e.preventDefault()}
                                    onClick={() => setShowPassword2(!showPassword2)}
                                  >
                                    <Icon icon={showPassword2 ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                                  </IconButton>
                                </InputAdornment>
                              }
                            />
                          )}
                        />
                        {errors.pass2 && (
                          <FormHelperText sx={{ color: 'error.main' }} id=''>
                            {errors.pass2.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                      <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
                        SUbmit
                      </Button>
                    </>
                  ) : (
                    <p style={{ color: 'green' }}>{changePassword}</p>
                  )}
                  <Typography
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}
                  >
                    <LinkStyled href='/login'>
                      <Icon fontSize='1.25rem' icon='tabler:chevron-left' />
                      <span>Back to login</span>
                    </LinkStyled>
                  </Typography>
                </form>
              </>
            ) : (
              <Box sx={{ my: 6 }}>
                <Typography sx={{ color: 'error.main', marginBottom: '10px' }}>{message}</Typography>
                <Typography
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}
                >
                  <LinkStyled href='/login'>
                    <Icon fontSize='1.25rem' icon='tabler:chevron-left' />
                    <span>Back to login</span>
                  </LinkStyled>
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}
ForgotPassword.getLayout = page => <BlankLayout>{page}</BlankLayout>
ForgotPassword.guestGuard = true

export default ForgotPassword
