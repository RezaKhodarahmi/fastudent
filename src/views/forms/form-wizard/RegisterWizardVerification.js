import React, { Fragment, useState, useEffect } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import { Checkbox } from '@mui/material'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from 'src/hooks/useAuth'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'

const steps = [
  {
    title: 'Create Account',
    subtitle: 'Enter your Email and Company'
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
    subtitle: 'Read and Sign '
  }
]

const PasswordSection = {
  password: '',
  'confirm-password': ''
}

const PersonalInformationSection = {
  country: '',
  city: '',
  address: '',
  postalCode: ''
}

const ContractAgreementSection = {
  contract: false
}

const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must include at least one uppercase letter, one lowercase letter, one number and one special character'
    )
    .required('Password is required')
    .oneOf([yup.ref('confirm-password'), null], 'Passwords must match')
})

const personalSchema = yup.object().shape({
  country: yup.string().required(),
  city: yup.string().required(),
  postalCode: yup.string().required(),
  address: yup.string().required()
})

const contractSchema = yup.object().shape({
  contract: yup.boolean().oneOf([true])
})

const StepperLinearWithValidationVerification = props => {
  // ** States
  const [activeStep, setActiveStep] = useState(1)
  const [registerStep, setRegisterStep] = useState(null)
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState([])
  const [isSubmite, setIsSubmite] = useState(false)
  const { token } = props
  const [state, setState] = useState({ password: '', password2: '', showPassword: false, showPassword2: false })

  // ** Hooks
  const auth = useAuth()

  //validate token
  useEffect(() => {
    if (token) {
      auth.verification({ token })
    }
  }, [token])
  //give response
  useEffect(() => {
    if (auth.response) {
      setUser(auth.response)
      console.log(auth.response.registerStep)
      setRegisterStep(auth.response.registerStep)
      if (parseInt(auth.response.registerStep) !== 1) {
        setActiveStep(auth.response.registerStep - 1)
      }
    } else {
      setError('Server error. Please contact website support!')
    }
  }, [auth.response])

  //Send form to databace
  useEffect(() => {
    if (formData && isSubmite) {
      auth.registerPersonalInfo(formData)
      setIsSubmite(false)
    }
  }, [isSubmite, auth, formData])

  const {
    reset: SetPasswordSection,
    control: passwordControl,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors }
  } = useForm({
    defaultValues: PasswordSection,
    resolver: yupResolver(passwordSchema)
  })

  const {
    reset: PersonalSection,
    control: personalControl,
    handleSubmit: handlePersonalSubmit,
    formState: { errors: personalErrors }
  } = useForm({
    defaultValues: PersonalInformationSection,
    resolver: yupResolver(personalSchema)
  })

  const {
    reset: ContractSection,
    control: contractControl,
    handleSubmit: handleContractSubmit,
    formState: { errors: contractErrors }
  } = useForm({
    defaultValues: ContractAgreementSection,
    resolver: yupResolver(contractSchema)
  })

  const onSubmit = e => {
    setFormData({ registerStep, email: user.email, token, ...e })
    setActiveStep(activeStep + 1)
    setIsSubmite(true)
  }

  // Handle Password
  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword })
  }

  // Handle Confirm Password
  const handleClickShowConfirmPassword = () => {
    setState({ ...state, showPassword2: !state.showPassword2 })
  }

  const getStepContent = step => {
    switch (step) {
      case 1:
        return (
          <form key={0} onSubmit={handlePasswordSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {steps[1].title}
                </Typography>
                <Typography variant='caption' component='p'>
                  {steps[1].subtitle}
                </Typography>
              </Grid>

              {/* Password */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='stepper-linear-account-password'>Password</InputLabel>
                  <Controller
                    name='password'
                    control={passwordControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <OutlinedInput
                        value={value}
                        label='Password'
                        onChange={onChange}
                        id='stepper-linear-account-password'
                        type={state.showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onClick={handleClickShowPassword}
                              onMouseDown={e => e.preventDefault()}
                              aria-label='toggle password visibility'
                            >
                              <Icon icon={state.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                  {passwordErrors.password && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-password-helper'>
                      {passwordErrors.password.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              {/* Confirm Password */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='stepper-linear-account-confirm-password'>Confirm Password</InputLabel>
                  <Controller
                    name='confirm-password'
                    control={passwordControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <OutlinedInput
                        value={value}
                        onChange={onChange}
                        label='Confirm Password'
                        id='stepper-linear-account-confirm-password'
                        type={state.showPassword2 ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onMouseDown={e => e.preventDefault()}
                              aria-label='toggle password visibility'
                              onClick={handleClickShowConfirmPassword}
                            >
                              <Icon icon={state.showPassword2 ? 'tabler:eye' : 'tabler:eye-off'} />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                  {passwordErrors['confirm-password'] && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-confirm-password-helper'>
                      {passwordErrors['confirm-password'].message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item sm={12}>
                <Button size='large' type='submit' variant='contained'>
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        )

      case 2:
        return (
          <form key={1} onSubmit={handlePersonalSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {steps[2].title}
                </Typography>
                <Typography variant='caption' component='p'>
                  {steps[2].subtitle}
                </Typography>
              </Grid>

              {/* First Name */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='country'
                    control={personalControl}
                    rules={{ required: false }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='Country'
                        onChange={onChange}
                        placeholder='Canada'
                        aria-describedby='stepper-linear-personal-country'
                      />
                    )}
                  />
                  {personalErrors['country'] && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-country'>
                      {personalErrors.country.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              {/* Last Name */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='city'
                    control={personalControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='City'
                        onChange={onChange}
                        placeholder='Toronto'
                        aria-describedby='stepper-linear-personal-city'
                      />
                    )}
                  />
                  {personalErrors['city'] && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-city'>
                      {personalErrors.city.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              {/* Last Name */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='postalCode'
                    control={personalControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='Postal code'
                        onChange={onChange}
                        placeholder='Postal code'
                        aria-describedby='stepper-linear-personal-city'
                      />
                    )}
                  />
                  {personalErrors['postalCode'] && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-postalCode'>
                      {personalErrors.postalCode.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              {/* Last Name */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='address'
                    control={personalControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='Address'
                        onChange={onChange}
                        placeholder='Address'
                        aria-describedby='stepper-linear-personal-address'
                      />
                    )}
                  />
                  {personalErrors['address'] && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-city'>
                      {personalErrors.address.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              {/* Navigation */}
              <Grid item sm={12}>
                <Button size='large' type='submit' variant='contained'>
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        )

      case 3:
        return (
          <form key={2} onSubmit={handleContractSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                  Fanavaran Terms & Conditions.
                </Typography>
                <Typography variant='caption' component='p'>
                  Please Download & read the following Privacy and Policy carefully and check the box below.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item xs={1} sm={1}>
                  <FormControl fullWidth>
                    <Controller
                      name='contract'
                      control={contractControl}
                      rules={{ required: true }}
                      render={({ field: { value, onChange } }) => (
                        <Checkbox checked={value} onChange={e => onChange(e.target.checked)} color='primary' />
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={11} sm={11}>
                  <Typography variant='caption' component='p'>
                    Please Download & read the following Terms and Conditions carefully and check the box below.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={6} sm={6}>
                {contractErrors['contract'] && (
                  <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-social-twitter'>
                    To continue, you must read and accept the Terms and Conditions
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button size='large' variant='outlined' color='secondary'>
                  <Link href='/assets/Contract.pdf' download=''>
                    DOWNLOAD Terms and Conditions
                  </Link>
                </Button>
                <Button size='large' type='submit' variant='contained'>
                  Submit
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
    if (activeStep === steps.length) {
      return (
        <Fragment>
          <h2>You Are All Done!</h2>
          <Typography>Thank you for your time.</Typography>
          <Typography>Your registration has been successfully.</Typography>
          <Button marginTop={5} size='large' variant='outlined' color='secondary'>
            <Link href='/login'>Login to your account</Link>
          </Button>
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
              if (index === activeStep) {
                labelProps.error = false
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

export default StepperLinearWithValidationVerification
