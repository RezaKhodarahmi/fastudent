// ** React Imports
import { Fragment, useState, useCallback, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
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
          <form key={0} onSubmit={handleDetailsSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {steps[0].title}
                </Typography>
                <Typography variant='caption' component='p'>
                  {steps[0].subtitle}
                </Typography>
              </Grid>

              {/* Email */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='email'
                    control={detailsControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        type='email'
                        value={value}
                        label='Email'
                        onChange={onChange}
                        error={Boolean(detailErrors.email)}
                        placeholder='example@gmail.com'
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
              </Grid>

              {/* Phone */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='phone'
                    control={detailsControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <PhoneInput
                        defaultCountry='CA'
                        style={{ padding: '1.5px 14px', borderRadius: '6px', border: ' 1px solid #c7c7c7' }}
                        placeholder='+372 699 1515'
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
              </Grid>
              {/* First name */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='firstName'
                    control={detailsControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='First name'
                        onChange={onChange}
                        placeholder='Your name'
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
              </Grid>
              {/* First name */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='lastName'
                    control={detailsControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='Last name'
                        onChange={onChange}
                        placeholder='Your last name'
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
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button size='large' type='submit' variant='contained'>
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
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
              {' '}
              <h2>Verification Email Sent!</h2>
              <p>
                To verify your account please click on the link in the email we have sent to {Email} and follow the
                steps there after.
              </p>
            </>
          )}
        </Fragment>
      )
    } else {
      return getStepContent(activeStep)
    }
  }

  return (
    <Card>
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps = {}
              if (index === 0) {
                {
                  error ? (labelProps.error = true) : (labelProps.error = false)
                }
              }

              return (
                <Step key={index}>
                  <StepLabel {...labelProps} StepIconComponent={StepperCustomDot}>
                    <div className='step-label'>
                      <Typography className='step-number'>{`0${index + 1}`}</Typography>
                      <div>
                        <Typography className='step-title'>{step.title}</Typography>
                        <Typography className='step-subtitle'>{step.subtitle}</Typography>
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </CardContent>

      <Divider sx={{ m: '0 !important' }} />

      <CardContent>{renderContent()}</CardContent>
    </Card>
  )
}

export default StepperLinearWithValidation
