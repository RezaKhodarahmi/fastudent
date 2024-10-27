// ** React Imports
import { Fragment, useState, useCallback, useEffect } from 'react'

// ** Import Translation
import { useTranslation } from 'react-i18next'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Link from '@mui/material/Link'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from 'src/hooks/useAuth'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'

const steps = [
  {
    title: 'Create Account',
    subtitle: 'Enter your Email and Phone number'
  },
  {
    title: 'Set Password',
    subtitle: 'Enter your Password'
  },
  {
    title: 'Personal Info',
    subtitle: 'Setup Information'
  },
  {
    title: 'Terms and Condition',
    subtitle: 'Read and Sign'
  }
]

const EmailPhoneSection = {
  email: '',
  firstName: '',
  lastName: '',
  phone: ''
}

const EmailPhoneSchema = yup.object().shape({
  email: yup.string().email().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phone: yup
    .string()
    .matches(/^\+[1-9]\d{10,14}$/, 'Phone number must be a valid international phone number')
    .required('Phone number is required')
})

const StepperLinearWithValidation = () => {
  const { t } = useTranslation()

  // ** States
  const [activeStep, setActiveStep] = useState(0)
  const [Email, setEmail] = useState(null)
  const [error, setError] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [formData, setFormData] = useState(null)

  // const { executeRecaptcha } = useGoogleReCaptcha()
  // // Create an event handler so you can call the verification on button click event or form submit
  // const handleReCaptchaVerify = useCallback(async () => {
  //   // if (!executeRecaptcha) {
  //   //   setError('Execute recaptcha not yet available!')
  //   //   return
  //   // }
  //   // setCaptchaToken(await executeRecaptcha('register'))
  //   // Do whatever you want with the token
  // }, [executeRecaptcha])
  // // ** Hooks
  const auth = useAuth()

  const {
    reset: detailsSection,
    control: detailsControl,
    handleSubmit: handleDetailsSubmit,
    formState: { errors: detailErrors }
  } = useForm({
    defaultValues: EmailPhoneSection,
    resolver: yupResolver(EmailPhoneSchema)
  })

  const onSubmit = e => {
    setError(null)
    setFormData({ email: e.email, firstName: e.firstName, lastName: e.lastName, phone: e.phone })
    setFormSubmitted(true)
  }
  useEffect(() => {
    if (auth.error) {
      setError(auth.error)
    }
  }, [auth.error])
  useEffect(() => {
    if (formSubmitted && formData) {
      auth.register(formData, () => {
        setError('Email or Password is invalid')
      })
    }
  }, [formSubmitted, formData])

  useEffect(() => {
    if (auth.response) {
      if (auth.response.data?.error) {
        setError(auth.response.data.message)
      } else if (auth.response.data?.data) {
        setEmail(auth.response.data.data.Email)
      }
    }
  }, [auth.response])

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <>
            <section className='FNV-Register'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-12 col-lg-4'>
                    <h1>{t('register-heading')}</h1>
                    <form key={0} onSubmit={handleDetailsSubmit(onSubmit)}>
                      <div className='row px-1'>
                        <div className='col-6 px-1'>
                          {/* First name */}
                          <InputLabel htmlFor='firstName'>{t('register-first-name')}</InputLabel>
                          <FormControl fullWidth sx={{ mb: 4 }}>
                            <Controller
                              name='firstName'
                              id='firstName'
                              control={detailsControl}
                              rules={{ required: true }}
                              render={({ field: { value, onChange } }) => (
                                <TextField
                                  value={value}
                                  onChange={onChange}
                                  placeholder={t('register-first-name')}
                                  error={Boolean(detailErrors.firstName)}
                                  aria-describedby='stepper-linear-account-username'
                                />
                              )}
                            />

                            {detailErrors.firstName && (
                              <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-username'>
                                This field is required
                              </FormHelperText>
                            )}
                          </FormControl>
                        </div>

                        <div className='col-6 px-2'>
                          {/* Last name */}
                          <InputLabel htmlFor='lastName'>{t('register-last-name')}</InputLabel>
                          <FormControl fullWidth sx={{ mb: 4 }}>
                            <Controller
                              name='lastName'
                              id='lastName'
                              control={detailsControl}
                              rules={{ required: true }}
                              render={({ field: { value, onChange } }) => (
                                <TextField
                                  value={value}
                                  onChange={onChange}
                                  placeholder={t('register-last-name')}
                                  error={Boolean(detailErrors.lastName)}
                                  aria-describedby='stepper-linear-account-lastName'
                                />
                              )}
                            />

                            {detailErrors.lastName && (
                              <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-lastName'>
                                This field is required
                              </FormHelperText>
                            )}
                          </FormControl>
                        </div>
                      </div>

                      {/* Email */}
                      <InputLabel htmlFor='email'>{t('register-user-email')}</InputLabel>
                      <FormControl fullWidth sx={{ mb: 4 }}>
                        <Controller
                          name='email'
                          id='email'
                          control={detailsControl}
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => (
                            <TextField
                              type='email'
                              value={value}
                              onChange={onChange}
                              error={Boolean(detailErrors.email)}
                              placeholder={t('register-user-email')}
                              aria-describedby='stepper-linear-account-email'
                            />
                          )}
                        />
                        {detailErrors.email && (
                          <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-email'>
                            {detailErrors.email.message}
                          </FormHelperText>
                        )}
                      </FormControl>

                      {/* Phone */}
                      <InputLabel htmlFor='phone'>{t('register-user-phone')}</InputLabel>
                      <FormControl fullWidth sx={{ mb: 8 }} className='FNV-Phone'>
                        <Controller
                          name='phone'
                          id='phone'
                          control={detailsControl}
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => (
                            <PhoneInput
                              defaultCountry='CA'
                              placeholder={t('register-user-phone')}
                              value={value}
                              onChange={onChange}
                              aria-describedby='stepper-linear-personal-phone'
                            />
                          )}
                        />
                        {detailErrors['phone'] && (
                          <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-lastname'>
                            {detailErrors.phone.message}
                          </FormHelperText>
                        )}
                      </FormControl>

                      <Button className='FNV-SendEmail' size='small' type='submit'>
                        {t('register-step-one')}
                      </Button>
                    </form>
                  </div>
                  <div className='col-12 col-lg-8 d-md-none d-lg-block'></div>
                </div>
              </div>
            </section>
          </>

        )

      default:
        return null
    }
  }

  const renderContent = () => {
    if (formSubmitted) {
      return (
        <Fragment>
          {error ? (
            <>
              <h2>{error}</h2>
              <Button size='large' variant='outlined' color='secondary'>
                <Link href='/login'>Login</Link>
              </Button>
            </>
          ) : (
            <>
              <section className='FNV-Register-Verification-Sent'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-12 col-lg-12'>
                      <img src='/images/pages/register/email.webp' className='img-fluid mb-4' />
                      <h1 className='mb-4'>{t('register-email-verification-title')}</h1>
                      <p className='mb-4'>{t('register-email-verification-text')}</p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </Fragment>
      )
    } else {
      return getStepContent(activeStep)
    }
  }

  return (
    <>
      {renderContent()}
    </>
  )
}

export default StepperLinearWithValidation
