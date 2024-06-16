import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import { loadStripe } from '@stripe/stripe-js'
import themeConfig from 'src/configs/themeConfig'

import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  FormHelperText
} from '@mui/material'

// ** MUI Imports
import Grid from '@mui/material/Grid'

import { styled } from '@mui/system'
import BASE_URL from 'src/api/BASE_URL'

const FileInput = styled('input')({
  display: 'none'
})
const stripePromise = loadStripe(themeConfig.stripePublicKey)

const UploadForm = () => {
  const [user, setUser] = useState(null)
  const router = useRouter()
  const [totalPrice, setTotalPrice] = useState(0)

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: '',
      types: [],
      kardani_file: null,
      karshenasiNP_file: null,
      karshenasiP_file: null,
      karshenasiA_file: null,
      master_file: null
    }
  })

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('userData')))
  }, [])

  const calculatePrice = selectedTypes => {
    let price = 0
    selectedTypes.forEach(type => {
      if (type === 3) {
        price += 80
      } else {
        price += 40
      }
    })
    return price
  }

  const onSubmit = async data => {
    const files = [
      data.kardani_file,
      data.karshenasiNP_file,
      data.karshenasiP_file,
      data.karshenasiA_file,
      data.master_file
    ].filter(file => file !== null)

    if (files.length === 0) {
      setError('files', { type: 'manual', message: 'برای ادامه یک فایل را آپلود کنید.' })
      return
    } else {
      clearErrors('files')
    }

    if (data.types.length === 0) {
      setError('types', { type: 'manual', message: 'برای ادامه حداقل یک مقطع را انتخاب کنید' })
      return
    }

    const price = calculatePrice(data.types)

    const formData = new FormData()
    formData.append('fullName', data.fullName)
    formData.append('price', price) // Add the calculated price to the form data
    data.types.forEach(type => formData.append('types', type))
    files.forEach(file => formData.append(file.fieldName, file.file))
    const token = window.localStorage.getItem('accessToken')

    const response = await fetch(`${BASE_URL}/student/course-description/create/${user}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData,
      credentials: 'include'
    })

    if (response.ok) {
      const result = await response.json()
      const { sessionId } = result

      if (sessionId) {
        const stripe = await stripePromise
        stripe.redirectToCheckout({ sessionId })
      }
    } else {
      console.error('Failed to create course description', response.statusText)
    }
  }

  const selectedTypes = watch('types', [])
  const fileFields = {
    1: 'kardani_file',
    2: 'karshenasiNP_file',
    3: 'karshenasiP_file',
    4: 'karshenasiA_file',
    5: 'master_file'
  }

  const fileLabels = {
    kardani_file: 'Upload Kardani File',
    karshenasiNP_file: 'Upload Karshenasi N.P. File',
    karshenasiP_file: 'Upload Karshenasi P. File',
    karshenasiA_file: 'Upload Karshenasi A. File',
    master_file: 'Upload Master File'
  }

  useEffect(() => {
    const price = calculatePrice(selectedTypes)
    setTotalPrice(price)
  }, [selectedTypes])

  const handleLogin = () => {
    router.push('/login?returnUrl=/services/course-description')
  }

  return (
    <>
      <section className='FNV-CourseDescription'>
        <div className='FNV-Heading'>
          <h1>
            فرم درخواست کورس دیسکریپشن
          </h1>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <p>
              کورس دیسکریپشن یا سیلابس دروس گذرانده شده یکی از مدارک مورد نیاز جهت عضویت در سازمان یا انجمن مهندسی در استان های مختلف کانادا و یا دریافت لایسنس P.Eng و CACB در کانادا و یا لایسنس های معماری و عمران در امریکا (NAAB) می باشد. آماده سازی این فایل را با بهترین کیفیت به ما بسپارید. ما این مدرک را طبق ریزنمرات فارسی و انگلیسی شما و دقیقا طبق سرفصل های وزارت علوم و تحقیقات ایران به زبان انگلیسی آماده خواهیم کرد و در فرمت های Word و Pdf در اختیار شما قرار خواهیم داد.
              </p>
            </div>
            <div className='col-12 col-md-6'>
              <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ direction: 'rtl' }}>
                <Controller
                  name='fullName'
                  control={control}
                  rules={{ required: 'نام و نام خانوادگی الزامی میباشد.' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label='نام و نام خانوادگی'
                      variant='outlined'
                      fullWidth
                      margin='normal'
                      error={Boolean(errors.fullName)}
                      helperText={errors.fullName?.message}
                    />
                  )}
                />

                <FormControl fullWidth margin='normal' error={Boolean(errors.types)}>
                  <InputLabel id='type-label'>کورس دیسکریپشن کدام یک از مقاطع زیر مورد نیاز است؟</InputLabel>
                  <Controller
                    name='types'
                    control={control}
                    rules={{ required: 'برای ادامه حداقل یک مقطع را انتخاب کنید' }}
                    render={({ field }) => (
                      <Select {...field} labelId='type-label' label='Type' multiple>
                        <MenuItem value={1}>کاردانی</MenuItem>
                        <MenuItem value={2}>کارشناسی ناپیوسته</MenuItem>
                        <MenuItem value={3}>کارشناسی پیوسته</MenuItem>
                        <MenuItem value={4}>کارشناسی ارشد</MenuItem>
                        <MenuItem value={5}>دکتری</MenuItem>
                      </Select>
                    )}
                  />
                  <FormHelperText>{errors.types?.message}</FormHelperText>
                </FormControl>

                {selectedTypes.map(type => (
                  <Controller
                    key={fileFields[type]}
                    name={fileFields[type]}
                    control={control}
                    render={({ field }) => (
                      <>
                        <Box display='flex' alignItems='center' mb={2}>
                          <FileInput
                            id={fileFields[type]}
                            readOnly={true}
                            type='file'
                            onChange={e => {
                              const file = e.target.files[0] ? { file: e.target.files[0], fieldName: fileFields[type] } : null
                              setValue(fileFields[type], file)
                            }}
                          />
                          <label htmlFor={fileFields[type]}>
                            <Button
                              variant='contained'
                              component='span'
                              sx={{ mr: 2, backgroundColor: watch(fileFields[type]) ? 'green' : undefined }}
                            >
                              {fileLabels[fileFields[type]]}
                            </Button>
                          </label>
                          {watch(fileFields[type]) && watch(fileFields[type]).file && (
                            <Typography variant='body2'>{watch(fileFields[type]).file.name}</Typography>
                          )}
                        </Box>
                      </>
                    )}
                  />
                ))}

                {errors.files && (
                  <Typography color='error' variant='body2'>
                    {errors.files.message}
                  </Typography>
                )}
                <Typography variant='h6'>Total Price: ${totalPrice}</Typography>
                {user ? (
                  <Button type='submit' variant='contained' color='primary' fullWidth>
                    Submit
                  </Button>
                ) : (
                  <Button type='button' onClick={handleLogin} variant='contained' color='primary' fullWidth>
                    Login to submit
                  </Button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

UploadForm.guestGuard = true

export default UploadForm
