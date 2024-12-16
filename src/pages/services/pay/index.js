import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  IconButton
} from '@mui/material'

import BASE_URL from 'src/api/BASE_URL'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useRouter } from 'next/router'
import themeConfig from 'src/configs/themeConfig'
import CheckoutForm from 'src/utils/stripeCheckout'

// ** Import Translation
import { useTranslation } from 'react-i18next'

const stripePromise = loadStripe(themeConfig.stripePublicKey)

const caseOptions = [
  { id: 1690, label: 'رد سیل برق ۳۰۹' },
  { id: 1691, label: 'ردسیل برق ۴۴۲' },
  { id: 1692, label: 'ردسیل پلامینگ ۳۰۶' },
  { id: 1693, label: 'میل رایت ۴۳۳' },
  { id: 1694, label: 'اچ وک ۳۱۳A , D' },
  { id: 1695, label: 'تکنسین گاز G2' },
  { id: 1696, label: 'تکنسین گاز G3' },
  { id: 1697, label: 'سایر', other: true }
]

const coupons = [
  { code: 'DISCOUNT10', discount: 10, expiration: '2024-12-31' },
  { code: 'SAVE15', discount: 15, expiration: '2024-11-30' }
]

const BookingForm = () => {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState(null)
  const [numCases, setNumCases] = useState(1)
  const [caseSelections, setCaseSelections] = useState([caseOptions[0]?.id || null])
  const [totalPrice, setTotalPrice] = useState(200)
  const [couponCode, setCouponCode] = useState('')
  const [discountedPrice, setDiscountedPrice] = useState(totalPrice)
  const [discountAmount, setDiscountAmount] = useState(0)
  const [clientSecret, setClientSecret] = useState(null)
  const [paymentType, setPaymentType] = useState(null) // Track selected payment type
  const { t } = useTranslation()

  useEffect(() => {
    const calculatedTotal = numCases * 200
    setTotalPrice(calculatedTotal)
    setDiscountedPrice(calculatedTotal)
    setDiscountAmount(0)
  }, [numCases])

  useEffect(() => {
    setUserEmail(localStorage.getItem('userData') || null)
  }, [])

  const appearance = {
    theme: 'flat'
  }

  const options = {
    clientSecret,
    appearance
  }

  const handlePayPartial = () => {
    setPaymentType('partial') // Set payment type to partial
    const token = window.localStorage.getItem('accessToken')
    fetch(`${BASE_URL}/student/transaction/partial_intent_client_secret`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        email: JSON.parse(userEmail),
        cartTotal: totalPrice, // Example: Partial payment is 50% of total
        items: caseSelections,
        couponCode
      })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
      })
      .then(data => {
        const { redirectURL } = data
        if (redirectURL) {
          router.push(redirectURL)
        } else {
          throw new Error('Redirect URL not found in response.')
        }
      })
      .catch(error => {
        console.error('Partial payment error:', error)
        alert('An error occurred while initiating partial payment. Please try again.')
      })
  }
  const handelInitiatePayment = () => {
    setPaymentType('full') // Set payment type to full
    const token = window.localStorage.getItem('accessToken')
    fetch(`${BASE_URL}/student/transaction/payment_intent_client_secret`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        email: JSON.parse(userEmail),
        cartTotal: totalPrice,
        items: caseSelections, // Pass IDs to the API
        couponCode
      })
    })
      .then(res => res.json())
      .then(data => {
        const { clientSecret } = data
        setClientSecret(clientSecret)
      })
  }

  const handleNumCasesChange = event => {
    const count = Number(event.target.value)
    if (!isNaN(count) && count > 0) {
      const updatedSelections = [...caseSelections]

      while (updatedSelections.length < count) {
        updatedSelections.push(caseOptions[0]?.id || null)
      }

      while (updatedSelections.length > count) {
        updatedSelections.pop()
      }

      setNumCases(count)
      setCaseSelections(updatedSelections)
    }
  }

  const handleCaseSelectionChange = (index, id) => {
    const updatedSelections = [...caseSelections]
    updatedSelections[index] = id
    setCaseSelections(updatedSelections)
  }

  const handleDeleteSelection = index => {
    const updatedSelections = caseSelections.filter((_, i) => i !== index)
    setCaseSelections(updatedSelections)
    setNumCases(updatedSelections.length)
  }

  const handleCouponApply = () => {
    const coupon = coupons.find(c => c.code === couponCode && new Date(c.expiration) >= new Date())
    if (coupon) {
      const discount = (totalPrice * coupon.discount) / 100
      setDiscountAmount(discount)
      setDiscountedPrice(totalPrice - discount)
    } else {
      alert('کد تخفیف معتبر نیست یا تاریخ آن گذشته است')
      setDiscountAmount(0)
      setDiscountedPrice(totalPrice)
    }
  }

  const [isChecked, setIsChecked] = useState(false)
  const isReadyToPay = caseSelections.every(selection => selection)

  const redirectToLogin = () => {
    router.push('/login?returnUrl=/services/pay')
  }

  return (
    <>
      <main className='FNV-ReservationForm'>
        <div className='container-fluid'>
          <div className='row'>
            {/* Form */}
            <div className='col-12 col-md-5'>
              {!userEmail && (
                <>
                  <Typography variant='h1' align='center' color='error' gutterBottom>
                    لطفاً ابتدا وارد حساب کاربری خود شوید
                  </Typography>
                  <Button variant='contained' color='primary' fullWidth onClick={redirectToLogin} sx={{ mb: 2 }}>
                    ورود به حساب کاربری
                  </Button>
                </>
              )}

              <Typography variant='h1'>فرم رزرو پرونده</Typography>

              <InputLabel>تعداد پرونده های مورد نیاز خود را انتخاب کنید</InputLabel>
              <FormControl fullWidth margin='normal'>
                <Select value={numCases} onChange={handleNumCasesChange} className='FNV-Form-Select' displayEmpty>
                  {[1, 2, 3, 4].map(num => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {caseSelections.map((selection, index) => (
                <Box key={index} sx={{ marginBottom: '1rem' }}>
                  <InputLabel>{`پرونده ${index + 1}`}</InputLabel>
                  <Box display='flex' alignItems='center'>
                    <FormControl fullWidth>
                      <Select value={selection || ''} onChange={e => handleCaseSelectionChange(index, e.target.value)}>
                        {caseOptions.map(option => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <IconButton
                      onClick={() => handleDeleteSelection(index)}
                      disabled={caseSelections.length === 1}
                      style={{ color: 'red' }}
                    >
                      Delete
                    </IconButton>
                  </Box>
                </Box>
              ))}

              <Box className='FNV-Form-Total'>
                <Typography variant='h2'>جمع خرید</Typography>

                <Box mt={3} sx={{ textAlign: 'right' }}>
                  <Typography variant='body1'>
                    <span>{t('cart-subtotal-text')}: </span> <span>CA$ {totalPrice}</span>
                  </Typography>
                  <Typography variant='body1'>
                    <span>{t('cart-tax-text')}: </span> <span>CA$ 0</span>
                  </Typography>
                  <Typography variant='body1'>
                    <span>{t('cart-coupon-discount')}: </span> <span>CA$ {discountAmount}</span>
                  </Typography>

                  <Typography variant='body1'>
                    <span>{t('cart-total-text')}:</span>
                    <span>CA$ {discountedPrice}</span>
                  </Typography>
                </Box>

                <Box className='FNV-Form-Discount'>
                  <InputLabel>{t('cart-coupon-text-question')}</InputLabel>

                  <Box className='FNV-Form-Discount-Input'>
                    <TextField
                      value={couponCode}
                      placeholder='کد تخفیف'
                      className='FNV-Form-Discount-Input-Field'
                      onChange={e => setCouponCode(e.target.value)}
                      inputProps={{ pattern: '^[\\u0600-\\u06FF0-9]*$' }}
                    />
                    <Button onClick={handleCouponApply}>ثبت</Button>
                  </Box>
                </Box>
              </Box>

              <Box className='FNV-Form-Terms'>
                <Typography variant='h3'>لطفاً شرایط زیر را بخوانید و با آن موافقت کنید:</Typography>
                <Typography variant='body1'>
                  ۱- مدت زمان اخذ تاییدیه شرکت در ازمون از زمان دریافت نامه سوابق کاری ۲ الی ۴ ماه خواهد بود.
                  <br />
                  ۲- هزینه های دولتی اعم از تایید مدارک و هزینه ازمون و صدور لایسنس جداگانه توسط متقاضی به سازمان های
                  مربوطه پرداخت خواهد شد. <br />
                  ۳- مسولیت هرگونه ارایه مدارک غیرواقعی و بیان اظهارات خلاف واقع بر عهده شخص متقاضی خواهد بود ( حالا
                  جمله بندیش باد درست بشه). <br />
                  ۴- مسولیت تاخیر در روال انجام کار به دلیل عدم ارایه مدارک درخواست شده در استاندارد اعلام شده بر عهده
                  متقاضی خواهد بود.
                </Typography>
              </Box>

              <Box className='FNV-Form-Terms-Agreement'>
                <FormControlLabel
                  control={
                    <Checkbox
                      className='FNV-Form-Terms-Agreement-Checkbox'
                      onChange={event => setIsChecked(event.target.checked)}
                    />
                  }
                  label='موافقت میکنم'
                />
              </Box>

              <Box mt={3} display='flex' justifyContent='space-between' gap={5}>
                {!paymentType || paymentType === 'full' ? (
                  <Button
                    className='FNV-Btn BtnOutline PrimaryColor BtnMedium w-100'
                    onClick={handlePayPartial}
                    disabled={paymentType === 'partial'}
                  >
                    پرداخت اقساطی
                  </Button>
                ) : null}
                {!paymentType || paymentType === 'partial' ? (
                  <Button
                    className='FNV-Btn BtnPrimary BtnMedium w-100'
                    onClick={handelInitiatePayment}
                    disabled={paymentType === 'full'}
                  >
                    پرداخت کامل وجه
                  </Button>
                ) : null}
              </Box>

              {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm userEmail={userEmail} name='name' />
                </Elements>
              )}
            </div>
            {/* Image */}
            <div className='col-12 col-md-7'>
              <img src='/images/pages/reservation-form/ReservationForm-bg.webp' className='img-fluid w-100' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
BookingForm.guestGuard = true

export default BookingForm
