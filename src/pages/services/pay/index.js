import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  IconButton,
  Container
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import BASE_URL from 'src/api/BASE_URL'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useRouter } from 'next/router'
import themeConfig from 'src/configs/themeConfig'
import CheckoutForm from 'src/utils/stripeCheckout'
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
  const [caseSelections, setCaseSelections] = useState([])
  const [totalPrice, setTotalPrice] = useState(200)
  const [couponCode, setCouponCode] = useState('')
  const [discountedPrice, setDiscountedPrice] = useState(totalPrice)
  const [discountAmount, setDiscountAmount] = useState(0)
  const [clientSecret, setClientSecret] = useState(null)

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

  const handleNumCasesChange = event => {
    const count = parseInt(event.target.value, 10)
    setNumCases(count)
    setCaseSelections(Array(count).fill(null))
  }

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

  const isReadyToPay = caseSelections.every(selection => selection)

  const handlePayment = type => {
    console.log(
      `${type} Payment - Amount: $${discountedPrice}, Email: ${userEmail}, Selected Cases: ${caseSelections}, Coupon Used: ${
        couponCode || 'None'
      }`
    )
  }

  const handlePayPartial = () => handlePayment('Partial')
  const handlePayFull = () => handlePayment('Full')

  const redirectToLogin = () => {
    router.push('/login?returnUrl=/services/pay')
  }

  return (
    <Container maxWidth='sm'>
      <Card className='mt-5' sx={{ padding: 3, boxShadow: 4 }}>
        <CardContent>
          {!userEmail && (
            <>
              <Typography variant='h6' align='center' color='error' gutterBottom>
                لطفاً ابتدا وارد حساب کاربری خود شوید
              </Typography>
              <Button variant='contained' color='primary' fullWidth onClick={redirectToLogin} sx={{ mb: 2 }}>
                ورود به حساب کاربری
              </Button>
            </>
          )}

          <Typography variant='h6' gutterBottom align='center'>
            فرم رزرو پرونده
          </Typography>

          <FormControl fullWidth margin='normal'>
            <InputLabel>تعداد پرونده های مورد نیاز خود را انتخاب کنید</InputLabel>
            <Select value={numCases} onChange={handleNumCasesChange}>
              {[1, 2, 3, 4].map(num => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {caseSelections.map((_, index) => (
            <Box key={index} display='flex' alignItems='center' marginBottom={2}>
              <FormControl fullWidth>
                <InputLabel>{`پرونده ${index + 1}`}</InputLabel>
                <Select
                  value={caseSelections[index] || ''}
                  onChange={e => handleCaseSelectionChange(index, e.target.value)}
                >
                  {caseOptions.map((option, idx) => (
                    <MenuItem key={idx} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <IconButton onClick={() => handleDeleteSelection(index)} color='secondary' aria-label='delete'>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}

          <Box mt={3}>
            <TextField
              label='کد تخفیف را وارد کنید'
              value={couponCode}
              onChange={e => setCouponCode(e.target.value)}
              fullWidth
              margin='normal'
              inputProps={{ pattern: '^[\\u0600-\\u06FF0-9]*$' }}
            />
            <Button variant='outlined' onClick={handleCouponApply} fullWidth sx={{ mb: 3 }}>
              اعمال کد تخفیف
            </Button>
          </Box>

          <Box mt={3} sx={{ textAlign: 'right' }}>
            <Typography variant='body1'>Subtotal: ${totalPrice}</Typography>
            <Typography variant='body1'>Tax: $0</Typography>
            <Typography variant='body1'>Discount: ${discountAmount}</Typography>
            <Typography variant='h6' mt={1}>
              Total: ${discountedPrice}
            </Typography>
          </Box>

          {userEmail && (
            <Box mt={3} display='flex' justifyContent='space-between'>
              <Button variant='contained' color='primary' onClick={handlePayPartial} disabled={!isReadyToPay}>
                پرداخت پارشالی
              </Button>
              <Button variant='contained' color='secondary' onClick={handelInitiatePayment} disabled={!isReadyToPay}>
                پرداخت کامل
              </Button>
            </Box>
          )}

          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm userEmail={userEmail} name='name' />
            </Elements>
          )}
        </CardContent>
      </Card>
    </Container>
  )
}
BookingForm.guestGuard = true

export default BookingForm
