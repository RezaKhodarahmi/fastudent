import React from 'react'

// ** MUI Imports
import {
  Card,
  Grid,
  FormHelperText,
  Button,
  CardContent,
  CardHeader,
  FormControl,
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { updatePassword } from 'src/store/apps/profile'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*]/, 'Password must contain at least one special character (!@#$%^&*)'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required')
})

const TabSecurity = () => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = React.useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] = React.useState(false)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors: detailErrors }
  } = useForm({ resolver: yupResolver(validationSchema) })

  const onSubmit = data => {
    const user = window.localStorage.getItem('userData')
    const userEmail = JSON.parse(user)
    dispatch(
      updatePassword({
        password: data.password,
        email: userEmail
      })
    )
    reset()
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Account Management' />
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      fullWidth
                      {...register('password')}
                      label='New password'
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              aria-label='toggle password visibility'
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                    {detailErrors.password && (
                      <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-password'>
                        {detailErrors.password.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      fullWidth
                      {...register('password_confirmation')}
                      label='Confirm password'
                      type={showPasswordConfirmation ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              aria-label='toggle password confirmation visibility'
                              onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                            >
                              {showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />

                    {detailErrors.password_confirmation && (
                      <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-confirmation'>
                        {detailErrors.password_confirmation.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(6.5)} !important` }}>
                  <Button type='submit' size='large' variant='contained' color='success'>
                    Change password
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </form>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TabSecurity
