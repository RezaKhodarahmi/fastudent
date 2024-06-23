import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  FormHelperText,
  CircularProgress
} from '@mui/material'

import { styled } from '@mui/system'
import BASE_URL from 'src/api/BASE_URL'

const FileInput = styled('input')({
  display: 'none'
})

const UploadForm = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

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
      state: '',
      daneshname_l_file: null,
      score_l_file: null,
      daneshname_fl_file: null,
      score_fl_file: null,
      passport_file: null,
      message: ''
    }
  })

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('userData')))
  }, [])

  const onSubmit = async data => {
    setLoading(true)

    const files = [
      data.daneshname_l_file,
      data.score_l_file,
      data.daneshname_fl_file,
      data.score_fl_file,
      data.passport_file
    ].filter(file => file !== null)

    if (files.length === 0) {
      setError('files', { type: 'manual', message: 'برای ادامه یک فایل را آپلود کنید.' })
      setLoading(false)

      return
    } else {
      clearErrors('files')
    }

    if (!data.state) {
      setError('state', { type: 'manual', message: 'برای ادامه یک استان را انتخاب کنید' })
      setLoading(false)

      return
    }

    const formData = new FormData()
    formData.append('fullName', data.fullName)
    formData.append('state', data.state)
    formData.append('message', data.message)
    files.forEach(file => formData.append(file.fieldName, file.file))
    const token = window.localStorage.getItem('accessToken')

    const response = await fetch(`${BASE_URL}/student/signing-documents/create/${user}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData,
      credentials: 'include'
    })

    setLoading(false)

    if (response.ok) {
      toast.success('Document uploaded successfully')
    } else {
      toast.error('Failed to create course description')
      console.error('Failed to create course description', response.statusText)
    }
  }

  const fileLabels = {
    daneshname_l_file: 'آپلود دانشنامه لیسانس (PDF)',
    score_l_file: 'آپلود ریز نمرات لیسانس(PDF)',
    daneshname_fl_file: 'آپلود دانشنامه فوق لیسانس (PDF)',
    score_fl_file: 'آپلود ریز نمرات فوق لیسانس(PDF)',
    passport_file: 'آپلود گواهی نامه یا پاسپوت(PDF,JPG,PNG)'
  }

  const handleLogin = () => {
    router.push(`/login?returnUrl=/services/signing-documents`)
  }

  return (
    <>
      <section className='FNV-CourseDescription'>
        <div className='FNV-Heading'>
          <h1>تایید مدارک تحصیلی دانش آموختگان رشته های مهندسی</h1>
        </div>

        <div style={{ direction: 'rtl' }} className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div>
                <p>
                  تایید مدارک تحصیلی دانش آموختگان رشته های مهندسی بسیار با اهمیت است. فناوران در جهت ارائه خدمات بیشتر
                  به همه اعضای خود سرویس تایید مدارک تحصیلی دانش آموختگان رشته های مهندسی را راه اندازی کرده است. این
                  خدمات فقط برای اعضای VIP انجمن فناوران فعال می باشد لذا با ورود به صفحه ممبرشیپ وبسایت فناوران جهت
                  فعال کردن عضویت یک ساله تان اقدام نمایید.(برای عضویت VIP کلیک کنید.)
                </p>
                <h2>
                  لطفا جهت مهر و امضای مدارک تحصیلی جهت ارائه به مرکز مهندسی استانی خود، مراحل زیر را با دقت انجام
                  نمایید:
                </h2>
                <ol>
                  <li>
                    دقت فرمایید که فقط transcript ریز نمرات و همچنین دانشنامه graduation of Certificate باید توسط مهندس
                    .P.Eng تایید شود و مدارک دیگر شامل Course description و Grading rubric بدون امضا و فقط با ترجمه قابل
                    ارائه است.
                  </li>
                  <li>
                    مدارک خود را به فرمت PDF در بیاورید صفحه اول فارسی و صفحه دوم ترجمه انگلیسی آن صفحه (به کیفیت عکسها
                    و وضوح آنها دقت فرمایید).
                  </li>
                  <li>
                    دقت شود که روی هر صفحه باید Statement مناسب آن درج و سپس برای ما ارسال نمایید. این Statement ها برای
                    ارسال مدارک الزامیست و عدم درج آن سبب بازگشت پرونده و کندی پرونده شما میشود.
                  </li>
                  <li>برای صفحات با متن فارسی (فقط صفحاتی که از دانشگاه دریافت کرده اید) مطلب زیر را بنویسید.</li>

                  <div style={{ direction: 'ltr' }}>
                    <p>(For Persian documents)</p>
                    <p>
                      I, Mohammad Amani, holder of P.Eng. licence number (100534679) certify this to be a true copy of
                      the original document in the original language.
                    </p>
                  </div>
                  <li>برای صفحات ترجمه شده مطلب زیر را بنویسید.</li>
                  <div style={{ direction: 'ltr' }}>
                    <p>(For English documents)</p>
                    <p>
                      I, Mohammad Amani, holder of P.Eng. licence number (100534679) am fluent in Persian and English. I
                      have reviewed this document, Bachelor’s degree certificate of [ نام شخص ], and certify that the
                      translation is correct and accurate to the best of my knowledge and ability.
                    </p>
                  </div>
                  <li>.لطفا در هر صفحه به اندازه امضای مهندس و تاریخ فضای مناسب قرار دهید.</li>
                  <li>جهت احراز هویت یک عکس از گواهی نامه یا پاسپورت خود در فرم زیر آپلود نمایید.</li>
                  <li>تمامی مدارک خود را در فرم زیر آپلود نمایید.</li>
                </ol>
                <strong>
                  نکته: توجه داشته باشید که Statement ها حتما روی فایل pdf قرار داده شود و فضای کافی برای امضاء داشته
                  باشد.
                </strong>
                <br />
                <strong>نکته: توجه داشته باشید که مهر و امضای مدارک مهندسی شما ۳ تا ۵ روز کاری طول خواهد کشید.</strong>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ direction: 'rtl' }}>
                <Controller
                  name='fullName'
                  control={control}
                  rules={{
                    required: 'نام و نام خانوادگی الزامی میباشد.',
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: 'نام و نام خانوادگی باید فقط شامل حروف انگلیسی باشد.'
                    }
                  }}
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

                <FormControl fullWidth margin='normal' error={Boolean(errors.state)}>
                  <InputLabel id='state-label'>جهت ادامه لطفا استان مورد نظر جود را انتخاب کنید</InputLabel>
                  <Controller
                    name='state'
                    control={control}
                    rules={{ required: 'برای ادامه حداقل یک استان را انتخاب کنید' }}
                    render={({ field }) => (
                      <Select {...field} labelId='state-label' label='استان'>
                        <MenuItem value={'Ontario'}>انتاریو (Ontario)</MenuItem>
                        <MenuItem value={'Alberta'}>آلبرتا (Alberta)</MenuItem>
                        <MenuItem value={'British Columbia'}>بریتیش کلمبیا (British Columbia)</MenuItem>
                        <MenuItem value={'Prince Edward Island'}>جزیره پرنس ادوارد (Prince Edward Island)</MenuItem>
                        <MenuItem value={'Manitoba'}>مانیتوبا (Manitoba)</MenuItem>
                        <MenuItem value={'New Brunswick'}>نیوبرانزویک (New Brunswick)</MenuItem>
                        <MenuItem value={'Newfoundland and Labrador'}>
                          نیوفاندلند و لابرادور (Newfoundland and Labrador)
                        </MenuItem>
                        <MenuItem value={'Nova Scotia'}>نوا اسکوشیا (Nova Scotia)</MenuItem>
                        <MenuItem value={'Quebec'}>کبک (Quebec)</MenuItem>
                        <MenuItem value={'Saskatchewan'}>ساسکاچوان (Saskatchewan)</MenuItem>
                      </Select>
                    )}
                  />
                  <FormHelperText>{errors.state?.message}</FormHelperText>
                </FormControl>

                {Object.keys(fileLabels).map(fileKey => (
                  <Controller
                    key={fileKey}
                    name={fileKey}
                    control={control}
                    rules={{
                      required: `${fileLabels[fileKey]} الزامی میباشد.`,
                      validate: {
                        fileFormat: value =>
                          !value ||
                          (fileKey !== 'passport_file' && value.file.type === 'application/pdf') ||
                          (fileKey === 'passport_file' &&
                            ['application/pdf', 'image/jpeg', 'image/png'].includes(value.file.type)) ||
                          'فرمت فایل معتبر نیست.'
                      }
                    }}
                    render={({ field }) => (
                      <>
                        <Box display='flex' alignItems='center' mb={2}>
                          <FileInput
                            id={fileKey}
                            readOnly={true}
                            type='file'
                            onChange={e => {
                              const file = e.target.files[0] ? { file: e.target.files[0], fieldName: fileKey } : null
                              setValue(fileKey, file)
                            }}
                          />
                          <label htmlFor={fileKey}>
                            <Button
                              variant='contained'
                              component='span'
                              sx={{ mr: 2, backgroundColor: watch(fileKey) ? 'green' : undefined }}
                            >
                              {fileLabels[fileKey]}
                            </Button>
                          </label>
                          {watch(fileKey) && watch(fileKey).file && (
                            <Typography variant='body2'>{watch(fileKey).file.name}</Typography>
                          )}
                        </Box>
                        {errors[fileKey] && (
                          <Typography color='error' variant='body2'>
                            {errors[fileKey].message}
                          </Typography>
                        )}
                      </>
                    )}
                  />
                ))}

                <Controller
                  name='message'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label='پیام'
                      variant='outlined'
                      fullWidth
                      margin='normal'
                      multiline
                      rows={4}
                    />
                  )}
                />

                {errors.files && (
                  <Typography color='error' variant='body2'>
                    {errors.files.message}
                  </Typography>
                )}

                {user ? (
                  <Box display='flex' alignItems='center'>
                    <Button type='submit' variant='contained' color='primary' fullWidth disabled={loading}>
                      {loading ? 'در حال آپلود...' : 'ارسال'}
                    </Button>
                  </Box>
                ) : (
                  <Button type='button' onClick={handleLogin} variant='contained' color='primary' fullWidth>
                    برای ثبت درخواست وارد شوید.
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
