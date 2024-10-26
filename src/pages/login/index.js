// ** React Imports
import { useState } from 'react'

// ** Import Translation
import { useTranslation } from 'react-i18next'

// ** Next Imports
import Link from 'next/link'
import { appConfig } from 'src/configs/appConfig'

// ** MUI Components
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import { useSession, signIn, signOut } from 'next-auth/react'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

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
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  user: yup.string().email().required(),
  pass: yup.string().min(5).required()
})

const defaultValues = {
  user: '',
  pass: ''
}

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgColors = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const { t } = useTranslation()

  // ** Vars
  const { skin } = settings

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const handleGoogleLogin = () => {
    window.location.href = 'https://fanavaran.ca:3200/api/v1/google/login' // The URL to start the OAuth flow
  }

  const onSubmit = data => {
    const { user, pass } = data
    auth.login({ email: user, password: pass })
  }
  const imageSource = skin === 'bordered' ? 'MainLogo' : 'MainLogo'

  return (
    <>
      <section className='FNV-Login'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 col-lg-4'>
              <h1>{t('login-heading')}</h1>
              {/* Login Form */}
              <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                {/* Username or Email */}
                <InputLabel htmlFor='auth-login-v2-username'>{t('login-email-address')}</InputLabel>
                <FormControl fullWidth sx={{ mb: 1.5 }}>
                  <Controller
                    name='user'
                    control={control}
                    className='form-control'
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <TextField
                        id='auth-login-v2-username'
                        autoFocus
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.user)}
                        placeholder='info@fanavaran.com'
                      />
                    )}
                  />
                  {errors.user && <FormHelperText sx={{ color: 'error.main' }}>{errors.user.message}</FormHelperText>}
                </FormControl>

                {/* Password */}
                <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.pass)}>
                  {t('login-user-password')}
                </InputLabel>

                <FormControl fullWidth>
                  <Controller
                    name='pass'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <OutlinedInput
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        id='auth-login-v2-password'
                        error={Boolean(errors.pass)}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onMouseDown={e => e.preventDefault()}
                              onClick={() => setShowPassword(!showPassword)}
                              className='FNV-Login_PassEye'
                            >
                              <Icon icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                  {errors.pass && (
                    <FormHelperText sx={{ color: 'error.main' }} id=''>
                      {errors.pass.message}
                    </FormHelperText>
                  )}
                </FormControl>

                <div className='d-flex justify-content-between'>
                  <LinkStyled href='/forgot-password' className='FNV-Login_Forgot'>{t('login-forgot-password')}</LinkStyled>

                  <FormControlLabel
                    label={t('login-remember-me')}
                    className='FNV-Login_Remember'
                    control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
                  />
                </div>

                <Button fullWidth type='submit' className='FNV-Login_Submit'>
                  {t('login-login-submit')}
                </Button>

                <Box className="d-flex justify-content-center">
                  <Typography sx={{ color: 'text.secondary', mx: 2 }}> {t('login-register-one')} </Typography>
                  <Typography variant='body2'>
                    <LinkStyled href='/register' sx={{ fontSize: '1rem' }}>
                      {t('login-register-two')}
                    </LinkStyled>
                  </Typography>
                </Box>

                <Divider
                  sx={{
                    fontSize: '0.875rem',
                    color: 'text.disabled',
                    '& .MuiDivider-wrapper': { px: 6 },
                    my: theme => `${theme.spacing(2)} !important`
                  }}
                >
                  {t('login-or')}
                </Divider>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                  <Link href='#' className='FNV-Login_Google' onClick={handleGoogleLogin}>
                    {t('login-with-google')}

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.8684 10.2281C19.8693 9.54663 19.8113 8.8664 19.695 8.19482H10.1992V12.046H15.638C15.5267 12.6611 15.2911 13.2475 14.9455 13.7697C14.5999 14.292 14.1513 14.7393 13.6269 15.0848V17.5846H16.8728C18.7734 15.8444 19.8684 13.271 19.8684 10.2281Z" fill="#4285F4"/>
                      <path d="M10.1997 19.9998C12.9169 19.9998 15.2049 19.1137 16.8733 17.586L13.6274 15.0861C12.7239 15.6944 11.5604 16.0416 10.1997 16.0416C7.57328 16.0416 5.34408 14.2834 4.54693 11.9141H1.20312V14.4903C2.0412 16.1465 3.32629 17.5387 4.91494 18.5116C6.50358 19.4844 8.33324 19.9997 10.1997 19.9998Z" fill="#34A853"/>
                      <path d="M4.54686 11.9141C4.12543 10.6726 4.12543 9.32806 4.54686 8.08651V5.51025H1.20305C0.498032 6.90345 0.130859 8.44108 0.130859 10.0003C0.130859 11.5595 0.498032 13.0972 1.20305 14.4904L4.54686 11.9141Z" fill="#FBBC04"/>
                      <path d="M10.1997 3.95879C11.6356 3.93549 13.0231 4.47429 14.0623 5.45872L16.9362 2.60469C15.1139 0.904883 12.6996 -0.0283412 10.1997 0.000656061C8.33324 0.000740536 6.50358 0.515984 4.91494 1.48886C3.32629 2.46174 2.0412 3.85397 1.20312 5.5101L4.54693 8.08636C5.34408 5.71704 7.57328 3.95879 10.1997 3.95879Z" fill="#EA4335"/>
                    </svg>
                  </Link>
                </Box>
              </form>
            </div>

            <div className='col-12 col-lg-8 d-md-none d-lg-block'></div>
          </div>
        </div>
      </section>
    </>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
