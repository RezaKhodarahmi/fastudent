import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  IconButton,
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
  { label: 'رد سیل برق ۳۰۹' },
  { label: 'ردسیل برق ۴۴۲' },
  { label: 'ردسیل پلامینگ ۳۰۶' },
  { label: 'میل رایت ۴۳۳' },
  { label: 'اچ وک ۳۱۳A , D' },
  { label: 'تکنسین گاز G2' },
  { label: 'تکنسین گاز G3' },
  { label: 'سایر', other: true }
]

const coupons = [
  { code: 'DISCOUNT10', discount: 10, expiration: '2024-12-31' },
  { code: 'SAVE15', discount: 15, expiration: '2024-11-30' }
]

const BookingForm = () => {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState(null)
  const [numCases, setNumCases] = useState(1)
  const [caseSelections, setCaseSelections] = useState([]);
  const [totalPrice, setTotalPrice] = useState(200)
  const [couponCode, setCouponCode] = useState('')
  const [discountedPrice, setDiscountedPrice] = useState(totalPrice)
  const [discountAmount, setDiscountAmount] = useState(0)
  const [clientSecret, setClientSecret] = useState(null)
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

  const handelInitiatePayment = () => {
    if (totalPrice > 0) {
      if (clientSecret === null) {
        if (userEmail) {
          const token = window.localStorage.getItem('accessToken')
          fetch(`${BASE_URL}/student/transaction/create-payment-intent`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              userEmail,
              totalPrice,
              caseSelections
            })
          })
            .then(res => res.json())
            .then(data => {
              const { clientSecret } = data
              setClientSecret(clientSecret)
            })
        } else {
          window.alert('Cart is Empty!')
        }
      }
    } else {
      window.alert('Error: Cart total is 0.')
    }
  }

  const handleNumCasesChange = (event) => {
    const count = Number(event.target.value);
    if (!isNaN(count) && count > 0) {
      setNumCases(count);
      setCaseSelections(Array.from({ length: count }, () => null));
    }
  };

  const handleCaseSelectionChange = (index, value) => {
    const updatedSelections = [...caseSelections]
    updatedSelections[index] = value
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

  const [isChecked, setIsChecked] = useState(false);
  const isReadyToPay = caseSelections.every(selection => selection)

  const handlePayment = type => {
    console.log(
      `${type} Payment - Amount: $${discountedPrice}, Email: ${userEmail}, Selected Cases: ${caseSelections}, Coupon Used: ${couponCode || 'None'
      }`
    )
  }

  const handlePayPartial = () => handlePayment('Partial')
  const handlePayFull = () => handlePayment('Full')

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

              <Typography variant='h1' >
                فرم رزرو پرونده
              </Typography>

              <InputLabel>تعداد پرونده های مورد نیاز خود را انتخاب کنید</InputLabel>
              <FormControl fullWidth margin='normal'>
                <Select
                  value={numCases}
                  onChange={handleNumCasesChange}
                  className='FNV-Form-Select'
                  displayEmpty
                  renderValue={(selected) =>
                    selected ? (
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Chip className='FNV-Form-Select-Chip' label={selected} />
                      </Box>
                    ) : (
                      'Select a value'
                    )
                  }
                >
                  {[1, 2, 3, 4].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {caseSelections.map((_, index) => (
                <Box key={index} sx={{ marginBottom: "1rem" }}>
                  <InputLabel>{`پرونده ${index + 1}`}</InputLabel>
                  <Box display='flex' alignItems='center'>
                    <FormControl fullWidth>
                      <Select
                        value={caseSelections[index] || ''}
                        className='FNV-Form-Select'
                        onChange={e => handleCaseSelectionChange(index, e.target.value)}
                      >
                        {caseOptions.map((option, idx) => (
                          <MenuItem key={idx} value={option.label}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <IconButton onClick={() => handleDeleteSelection(index)} className='FNV-Form-Icon' aria-label='delete'>
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_831_11197)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M2.93164 5.18701C3.20778 5.18701 3.43164 5.41087 3.43164 5.68701V18.5217C3.43164 19.1119 3.93382 19.6227 4.59393 19.6227H15.4076C16.0677 19.6227 16.5699 19.1119 16.5699 18.5217V5.68701C16.5699 5.41087 16.7937 5.18701 17.0699 5.18701C17.346 5.18701 17.5699 5.41087 17.5699 5.68701V18.5217C17.5699 19.6987 16.5847 20.6227 15.4076 20.6227H4.59393C3.41677 20.6227 2.43164 19.6987 2.43164 18.5217V5.68701C2.43164 5.41087 2.6555 5.18701 2.93164 5.18701Z" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M-0.0625 3.93701C-0.0625 3.66087 0.161358 3.43701 0.4375 3.43701H19.5626C19.8388 3.43701 20.0626 3.66087 20.0626 3.93701C20.0626 4.21315 19.8388 4.43701 19.5626 4.43701H0.4375C0.161358 4.43701 -0.0625 4.21315 -0.0625 3.93701Z" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.01701 0.9375C6.87321 0.9375 6.75586 1.05485 6.75586 1.19865V3.43706H13.2449V1.19865C13.2449 1.05485 13.1276 0.9375 12.9838 0.9375H7.01701ZM5.75586 1.19865C5.75586 0.502565 6.32092 -0.0625 7.01701 -0.0625H12.9838C13.6799 -0.0625 14.2449 0.502565 14.2449 1.19865V3.93706C14.2449 4.2132 14.0211 4.43706 13.7449 4.43706H6.25586C5.97972 4.43706 5.75586 4.2132 5.75586 3.93706V1.19865Z" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.86523 6.93652C8.14138 6.93652 8.36523 7.16038 8.36523 7.43652V16.1854C8.36523 16.4616 8.14138 16.6854 7.86523 16.6854C7.58909 16.6854 7.36523 16.4616 7.36523 16.1854V7.43652C7.36523 7.16038 7.58909 6.93652 7.86523 6.93652Z" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.0195 6.93652C12.2957 6.93652 12.5195 7.16038 12.5195 7.43652V16.1854C12.5195 16.4616 12.2957 16.6854 12.0195 16.6854C11.7434 16.6854 11.5195 16.4616 11.5195 16.1854V7.43652C11.5195 7.16038 11.7434 6.93652 12.0195 6.93652Z" />
                        </g>
                        <defs>
                          <clipPath id="clip0_831_11197">
                            <rect width="20" height="20.5599" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </IconButton>
                  </Box>
                </Box>
              ))}

              <Box className="FNV-Form-Total">
                <Typography variant='h2'>جمع خرید</Typography>

                <Box mt={3} sx={{ textAlign: 'right' }}>
                  <Typography variant='body1'><span>{t('cart-subtotal-text')}: </span> <span>CA$ {totalPrice}</span></Typography>
                  <Typography variant='body1'><span>{t('cart-tax-text')}: </span> <span>CA$ 0</span></Typography>
                  <Typography variant='body1'><span>{t('cart-coupon-discount')}: </span> <span>CA$ {discountAmount}</span></Typography>

                  <Typography variant='body1'>
                    <span>{t('cart-total-text')}:</span>
                    <span>CA$ {discountedPrice}</span>
                  </Typography>
                </Box>

                <Box className="FNV-Form-Discount">
                  <InputLabel>{t('cart-coupon-text-question')}</InputLabel>

                  <Box className="FNV-Form-Discount-Input">
                    <TextField
                      value={couponCode}
                      placeholder='کد تخفیف'
                      className='FNV-Form-Discount-Input-Field'
                      onChange={e => setCouponCode(e.target.value)}
                      inputProps={{ pattern: '^[\\u0600-\\u06FF0-9]*$' }}
                    />
                    <Button onClick={handleCouponApply}>
                      ثبت
                    </Button>
                  </Box>
                </Box>
              </Box>

              <Box className="FNV-Form-Terms">
                <Typography variant='h3'>لطفاً شرایط زیر را بخوانید و با آن موافقت کنید:</Typography>
                <Typography variant='body1'>
                  ۱- مدت زمان اخذ تاییدیه شرکت در ازمون از زمان دریافت نامه سوابق کاری ۲ الی ۴ ماه خواهد بود.<br />
                  ۲- هزینه های دولتی اعم از تایید مدارک و هزینه ازمون و صدور لایسنس جداگانه توسط متقاضی به سازمان های مربوطه پرداخت خواهد شد. <br />
                  ۳- مسولیت هرگونه ارایه مدارک غیرواقعی و بیان اظهارات خلاف واقع بر عهده شخص متقاضی خواهد بود ( حالا جمله بندیش باد درست بشه). <br />
                  ۴- مسولیت تاخیر در روال انجام کار به دلیل عدم ارایه مدارک درخواست شده در استاندارد اعلام شده بر عهده متقاضی خواهد بود.
                </Typography>
              </Box>

              <Box className="FNV-Form-Terms-Agreement">
                <FormControlLabel
                  control={
                    <Checkbox
                      className='FNV-Form-Terms-Agreement-Checkbox'
                      onChange={(event) => setIsChecked(event.target.checked)}
                    />
                  }
                  label="موافقت میکنم"
                />
              </Box>

              {isChecked && userEmail && (
                <Box mt={3} display='flex' justifyContent='space-between' gap={5}>
                  <Button className='FNV-Btn BtnOutline PrimaryColor BtnMedium w-100' onClick={handlePayPartial} disabled={!isReadyToPay}>
                    پرداخت اقساطی
                  </Button>

                  <Button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={handelInitiatePayment} disabled={!isReadyToPay}>
                    پرداخت کامل وجه
                  </Button>
                </Box>
              )}

              {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm userEmail={userEmail} name='name' />
                </Elements>
              )}
            </div>
            {/* Image */}
            <div className='col-12 col-md-7'>
              <img src="/images/pages/reservation-form/ReservationForm-bg.webp" className='img-fluid w-100' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
BookingForm.guestGuard = true

export default BookingForm
