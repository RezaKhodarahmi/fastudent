// ** React Imports
import React, { useEffect, useState } from 'react'

// ** MUI Imports
import {
  MenuItem,
  Box,
  Card,
  Grid,
  Select,
  Divider,
  Checkbox,
  FormHelperText,
  Button,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  Typography,
  TextField
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileInfo, updateProfileDetails } from 'src/store/apps/profile'

import LinearProgress from '@mui/material/LinearProgress'

import * as yup from 'yup'

// ** Third Party Imports
import { useForm } from 'react-hook-form'

const validationSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  address: yup.string().nullable(),
  postalCode: yup.string().nullable(),
  country: yup.string().required('Country is required'),
  language: yup.string().required('language is required'),
  timezone: yup.string().required('timezone is required')
})

const ImgStyled = styled('img')(({ theme }) => ({
  width: 100,
  height: 100,
  marginRight: theme.spacing(6),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const TabAccount = () => {
  // ** State

  const [timezone, setTimezone] = useState(null)
  const [city, setCity] = useState(null)
  const [language, setLanguage] = useState(null)
  const [country, setCountry] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [loading, setLoading] = useState(false)
  const [avatarURL, setAvatarURL] = useState(null)

  //Hooks
  const dispatch = useDispatch()
  const profileDetails = useSelector(state => state.profile)

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors: detailErrors }
  } = useForm({ resolver: yupResolver(validationSchema) })

  useEffect(() => {
    setLoading(true)
    dispatch(getProfileInfo()).finally(() => setLoading(false))
  }, [dispatch])

  //Set data
  useEffect(() => {
    if (profileDetails?.data?.user) {
      reset(profileDetails?.data?.user)
      setTimezone(profileDetails?.data?.user?.timezone)
      setLanguage(profileDetails?.data?.user?.language)
      setCity(profileDetails?.data?.user?.city)
      setCountry(profileDetails?.data?.user?.country)
      if (!avatarURL) {
        setAvatarURL(profileDetails?.data?.user?.avatar)
      }
    }
  }, [profileDetails, dispatch, reset, avatarURL])

  const onSubmit = data => {
    const formData = new FormData()
    if (avatar) {
      formData.append('avatar', avatar)
    }
    for (const key in data) {
      formData.append(key, data[key])
    }
    dispatch(updateProfileDetails(formData))
  }

  //Handle upload new avatar
  const handleAvatarChange = e => {
    setAvatar(e.target.files[0])
    setAvatarURL(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          {loading ? (
            <LinearProgress />
          ) : (
            <>
              <CardHeader title='Account Management' />
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent sx={{ pt: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {avatarURL ? <ImgStyled src={avatarURL} alt='Profile Pic' /> : null}
                    <div>
                      <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                        Upload New Photo
                        <input
                          hidden
                          type='file'
                          accept='image/png, image/jpeg'
                          onChange={handleAvatarChange}
                          id='account-settings-upload-image'
                        />
                      </ButtonStyled>

                      <Typography sx={{ mt: 4, color: 'text.disabled' }}>
                        Allowed PNG or JPEG. Max size of 800K.
                      </Typography>
                    </div>
                  </Box>
                </CardContent>
                <Divider />
                <CardContent>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <TextField fullWidth {...register('firstName')} label='First Name' placeholder='John' />
                        {detailErrors.firstName && (
                          <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-firstName'>
                            {detailErrors.firstName.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <TextField fullWidth {...register('lastName')} label='Last Name' placeholder='Doe' />

                        {detailErrors.lastName && (
                          <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-lastName'>
                            {detailErrors.lastName.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <TextField
                          fullWidth
                          type='email'
                          label='Email'
                          {...register('email')}
                          placeholder='john.doe@example.com'
                        />
                        {detailErrors.email && (
                          <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-email'>
                            {detailErrors.email.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <TextField fullWidth label='Address' placeholder='Address' {...register('address')} />
                        {detailErrors.address && (
                          <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-address'>
                            {detailErrors.address.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    {city ? (
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            fullWidth
                            label='City'
                            placeholder='California'
                            {...register('city')}
                            defaultValue={city}
                          />

                          {detailErrors.city && (
                            <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-city'>
                              {detailErrors.city.message}
                            </FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    ) : null}
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <TextField
                          fullWidth
                          type='text'
                          label='Postal Code'
                          placeholder='231465'
                          {...register('postalCode')}
                        />
                        {detailErrors.postalCode && (
                          <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-postalCode'>
                            {detailErrors.postalCode.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    {country ? (
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <InputLabel>Country</InputLabel>
                          <Select label='Country' {...register('country')} defaultValue={country}>
                            <MenuItem value='canada'>Canada</MenuItem>
                            <MenuItem value='iran'>Iran</MenuItem>
                            <MenuItem value='france'>France</MenuItem>
                            <MenuItem value='united-kingdom'>United Kingdom</MenuItem>
                            <MenuItem value='united-states'>United States</MenuItem>
                            <MenuItem value='others'>Others</MenuItem>
                          </Select>
                          {detailErrors.country && (
                            <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-country'>
                              {detailErrors.country.message}
                            </FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    ) : null}
                    {language ? (
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <InputLabel>Language</InputLabel>
                          <Select label='Language' {...register('language')} defaultValue={language}>
                            <MenuItem value='en'>English</MenuItem>
                            <MenuItem value='fa'>Persian</MenuItem>
                          </Select>
                          {detailErrors.language && (
                            <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-language'>
                              {detailErrors.language.message}
                            </FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    ) : null}
                    {timezone ? (
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <InputLabel>Timezone</InputLabel>
                          <Select label='Timezone' {...register('timezone')} defaultValue={timezone}>
                            <MenuItem value='gmt-12'>(GMT-12:00) International Date Line West</MenuItem>
                            <MenuItem value='gmt-11'>(GMT-11:00) Midway Island, Samoa</MenuItem>
                            <MenuItem value='gmt-10'>(GMT-10:00) Hawaii</MenuItem>
                            <MenuItem value='gmt-09'>(GMT-09:00) Alaska</MenuItem>
                            <MenuItem value='gmt-08'>(GMT-08:00) Pacific Time (US & Canada)</MenuItem>
                            <MenuItem value='gmt-07'>(GMT-07:00) Mountain Time (US & Canada)</MenuItem>
                            <MenuItem value='gmt-06'>(GMT-06:00) Central Time (US & Canada)</MenuItem>
                            <MenuItem value='gmt-05'>(GMT-05:00) Eastern Time (US & Canada)</MenuItem>
                            <MenuItem value='gmt-04'>(GMT-04:00) Atlantic Time (Canada)</MenuItem>
                            <MenuItem value='gmt-03'>(GMT-03:00) Buenos Aires, Georgetown</MenuItem>
                            <MenuItem value='gmt-02'>(GMT-02:00) Mid-Atlantic</MenuItem>
                            <MenuItem value='gmt-01'>(GMT-01:00) Cape Verde Islands</MenuItem>
                            <MenuItem value='gmt+00'>
                              (GMT+00:00) Greenwich Mean Time, Dublin, Edinburgh, Lisbon, London
                            </MenuItem>
                            <MenuItem value='gmt+01'>(GMT+01:00) Amsterdam, Berlin, Brussels, Madrid, Paris</MenuItem>
                            <MenuItem value='gmt+02'>(GMT+02:00) Athens, Bucharest, Istanbul</MenuItem>
                            <MenuItem value='gmt+03'>(GMT+03:00) Moscow, St. Petersburg, Volgograd</MenuItem>
                            <MenuItem value='gmt+04'>(GMT+04:00) Abu Dhabi, Muscat, Baku, Tbilisi</MenuItem>
                            <MenuItem value='gmt+05'>(GMT+05:00) Ekaterinburg, Islamabad, Karachi, Tashkent</MenuItem>
                            <MenuItem value='gmt+06'>(GMT+06:00) Almaty, Dhaka, Colombo</MenuItem>
                            <MenuItem value='gmt+07'>(GMT+07:00) Bangkok, Hanoi, Jakarta</MenuItem>
                          </Select>
                          {detailErrors.timezone && (
                            <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-timezone'>
                              {detailErrors.timezone.message}
                            </FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    ) : null}

                    <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(6.5)} !important` }}>
                      <Button type='submit' size='large' variant='contained' color='success'>
                        Update
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </form>
            </>
          )}
        </Card>
      </Grid>
    </Grid>
  )
}

export default TabAccount
