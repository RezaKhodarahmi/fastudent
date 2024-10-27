import React, { Fragment, useState, useEffect } from 'react'

// ** Import Translation
import { useTranslation } from 'react-i18next'

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
import FormControlLabel from '@mui/material/FormControlLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import { Checkbox } from '@mui/material'
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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState([])
  const [isSubmite, setIsSubmite] = useState(false)
  const { token } = props
  const [state, setState] = useState({ password: '', password2: '', showPassword: false, showPassword2: false })

  // ** Hooks
  const auth = useAuth()
  const { t } = useTranslation()

  //validate token
  useEffect(() => {
    if (token) {
      auth.verification({ token })
      setLoading(true)
    }
  }, [token])

  //give response
  useEffect(() => {
    if (auth.response) {
      setUser(auth.response)
      setRegisterStep(auth.response.registerStep)

      if (parseInt(auth.response.registerStep) !== 1) {
        setActiveStep(auth.response.registerStep - 1)
      }
    } else {
      setError('Server error. Please contact website support!')
    }
    setLoading(false)
  }, [auth.response])

  //Send form to database
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
          <>
            <section className='FNV-Register'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-12 col-lg-4'>
                    <h1>{t('register-email-title')}</h1>
                    <form key={0} onSubmit={handlePasswordSubmit(onSubmit)}>
                      {/* Password */}
                      <InputLabel htmlFor='password'>{t('register-email-pass')}</InputLabel>
                      <FormControl fullWidth sx={{ mb: 4 }}>
                        <Controller
                          name='password'
                          control={passwordControl}
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => (
                            <OutlinedInput
                              value={value}
                              onChange={onChange}
                              placeholder={t('register-email-pass')}
                              id='password'
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

                      {/* Confirm Password */}
                      <InputLabel htmlFor='confirm-passwor'>{t('register-email-pass-confirm')}</InputLabel>
                      <FormControl fullWidth sx={{ mb: 4 }}>
                        <Controller
                          name='confirm-password'
                          control={passwordControl}
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => (
                            <OutlinedInput
                              value={value}
                              onChange={onChange}
                              id='confirm-password'
                              placeholder={t('register-email-pass-confirm')}
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

                      <Button className='FNV-SendEmail' size='small' type='submit'>
                        {t('register-email-pass-button')}
                      </Button>
                    </form>
                  </div>
                  <div className='col-12 col-lg-8 d-md-none d-lg-block'></div>
                </div>
              </div>
            </section>
          </>
        )

      // case 2:
      //   return (
      //     <>
      //       <section className='FNV-Register'>
      //         <div className='container-fluid'>
      //           <div className='row'>
      //             <div className='col-12 col-lg-4'>
      //               <form key={1} onSubmit={handlePersonalSubmit(onSubmit)}>
      //                 {/* City */}
      //                 <FormControl fullWidth sx={{ mb: 4 }}>
      //                   <Controller
      //                     name='country'
      //                     control={personalControl}
      //                     rules={{ required: false }}
      //                     render={({ field: { value, onChange } }) => (
      //                       <TextField
      //                         value={value}
      //                         label='Country'
      //                         onChange={onChange}
      //                         placeholder='Canada'
      //                         aria-describedby='stepper-linear-personal-country'
      //                       />
      //                     )}
      //                   />
      //                   {personalErrors['country'] && (
      //                     <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-country'>
      //                       {personalErrors.country.message}
      //                     </FormHelperText>
      //                   )}
      //                 </FormControl>

      //                 {/* Country */}
      //                 <FormControl fullWidth sx={{ mb: 4 }}>
      //                   <Controller
      //                     name='city'
      //                     control={personalControl}
      //                     rules={{ required: true }}
      //                     render={({ field: { value, onChange } }) => (
      //                       <TextField
      //                         value={value}
      //                         label='City'
      //                         onChange={onChange}
      //                         placeholder='Toronto'
      //                         aria-describedby='stepper-linear-personal-city'
      //                       />
      //                     )}
      //                   />
      //                   {personalErrors['city'] && (
      //                     <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-city'>
      //                       {personalErrors.city.message}
      //                     </FormHelperText>
      //                   )}
      //                 </FormControl>

      //                 {/* Address */}
      //                 <FormControl fullWidth sx={{ mb: 4 }}>
      //                   <Controller
      //                     name='postalCode'
      //                     control={personalControl}
      //                     rules={{ required: true }}
      //                     render={({ field: { value, onChange } }) => (
      //                       <TextField
      //                         value={value}
      //                         label='Postal code'
      //                         onChange={onChange}
      //                         placeholder='Postal code'
      //                         aria-describedby='stepper-linear-personal-city'
      //                       />
      //                     )}
      //                   />
      //                   {personalErrors['postalCode'] && (
      //                     <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-postalCode'>
      //                       {personalErrors.postalCode.message}
      //                     </FormHelperText>
      //                   )}
      //                 </FormControl>

      //                 {/* Postal Code */}
      //                 <FormControl fullWidth sx={{ mb: 4 }}>
      //                   <Controller
      //                     name='address'
      //                     control={personalControl}
      //                     rules={{ required: true }}
      //                     render={({ field: { value, onChange } }) => (
      //                       <TextField
      //                         value={value}
      //                         label='Address'
      //                         onChange={onChange}
      //                         placeholder='Address'
      //                         aria-describedby='stepper-linear-personal-address'
      //                       />
      //                     )}
      //                   />
      //                   {personalErrors['address'] && (
      //                     <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-city'>
      //                       {personalErrors.address.message}
      //                     </FormHelperText>
      //                   )}
      //                 </FormControl>

      //                 {/* Button */}
      //                 <Button className='FNV-SendEmail' size='small' type='submit'>
      //                   Next
      //                 </Button>
      //               </form>
      //             </div>
      //             <div className='col-12 col-lg-8 d-md-none d-lg-block'></div>
      //           </div>
      //         </div>
      //       </section>
      //     </>
      //   )

      case 2:
        return (
          <>
            <section className='FNV-Register'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-12 col-lg-4'>
                    <h1>{t('register-terms')}</h1>

                    <p>{t('register-terms-text')}</p>

                    <form key={2} onSubmit={handleContractSubmit(onSubmit)}>
                      <Button className='mb-4' size='large' variant='outlined' color='secondary'>
                        <Link href='/assets/terms-and-conditions.pdf' download=''>
                          {t('register-terms-download')}
                        </Link>
                      </Button>

                      {contractErrors['contract'] && (
                        <FormHelperText fullWidth sx={{ color: 'error.main', textAlign: 'center', fontSize: '16px', fontWeight: '700' }}>
                          {t('register-terms-download-checkbox-warning')}
                        </FormHelperText>
                      )}
                      <FormControl fullWidth sx={{ mb: 4 }}>
                        <Controller
                          name='contract'
                          control={contractControl}
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={value}
                                  onChange={e => onChange(e.target.checked)}
                                  color='primary'
                                />
                              }
                              label={t('register-terms-download-checkbox')}
                            />
                          )}
                        />
                      </FormControl>

                      <Button className='FNV-SendEmail' size='small' type='submit'>
                        {t('register-complete')}
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
  if (loading) return <p>Loading</p>

  return (
    <>
      {renderContent()}
    </>
  )
}

export default StepperLinearWithValidationVerification
