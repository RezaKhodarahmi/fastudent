import React, { useState, useEffect } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './checkout'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from 'src/store/apps/cartItem'
import { fetchVipData } from 'src/store/apps/user'
import themeConfig from 'src/configs/themeConfig'
import { verifyCouponCode } from 'src/store/apps/coupon'
import { verifyReferralCode } from 'src/store/apps/referral'
import { setCartItems } from 'src/store/apps/cart'
import BASE_URL from 'src/api/BASE_URL'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { Checkbox, FormControlLabel, Typography, Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SimpleDateFormatter from 'src/utils/simple-date-readble'

const stripePromise = loadStripe(themeConfig.stripePublicKey)

const Index = () => {
  const cartCoupon = [{ code: null, discount: null }]
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [cartCourses, setCartCourses] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [cartSubTotal, setCartSubTotal] = useState(0)
  const [clientSecret, setClientSecret] = useState(null)
  const [redirectURL, setRedirectURL] = useState(null)
  const [email, setEmail] = useState(null)
  const [fullName, setFullName] = useState(null)
  const [coupon, setCoupon] = useState(null)
  const [referral, setReferral] = useState(null)
  const [couponDiscountAmount, setCouponDiscountAmount] = useState(0)
  const [couponDiscount, setCouponDiscount] = useState(0)
  const [usedCoupon, setUsedCoupon] = useState(cartCoupon)
  const [vipPlan, setVipPlan] = useState(0)
  const [loading, setLoading] = useState(false)
  const [checkout, setCheckout] = useState(false)
  const [referralUser, setReferralUser] = useState({})
  const [isVIP, setIsVIP] = useState(false)
  const [localCartItem, setLocalCartItem] = useState([])
  const [newVIP, setNewVip] = useState(true)
  const [oldVIP, setOldVIP] = useState(false)
  const [partially, setPartially] = useState(true)
  const [stripePay, setStripePay] = useState(true)
  const [isRenew, setIsRenew] = useState(false)
  const [agreeAlert, setAgreeAlert] = useState(false)
  const [termsChecked, setTermsChecked] = useState(false)
  const [stripeDiscount, setStripeDiscount] = useState(0)
  const cartItems = localStorage.getItem('cartItems')
  const pageDirection = localStorage.getItem('direction')

  // Check if there is any course of type 2 in the cart
  const hasCourseType2 = cartCourses.some(course => course.course.type == 2) || null

  useEffect(() => {
    if (!cartItems) {
      localStorage.setItem('cartItems', JSON.stringify([]))
      setCartCourses([])
    } else {
    }
  }, [cartItems])

  // Calculate Stripe Discount

  const handleChangeCheckBox = event => {
    setTermsChecked(event.target.checked)
  }

  const courses = useSelector(state => state.cartItem)
  const appliedCoupon = useSelector(state => state.coupon)
  const referralDiscount = useSelector(state => state.referral)
  const user = useSelector(state => state.user)
  const router = useRouter()

  useEffect(() => {
    const cartItems = window.localStorage.getItem('cartItems')
    if (cartItems && cartItems.length > 0) {
      dispatch(getCartItems(cartItems, email, newVIP))
    }
    setEmail(JSON.parse(localStorage.getItem('userData')) || null)
    setFullName(JSON.parse(localStorage.getItem('userName')) || null)
  }, [email, newVIP, dispatch])

  useEffect(() => {
    if (email) {
      dispatch(fetchVipData())
    }
  }, [email, dispatch])

  useEffect(() => {
    setNewVip(localStorage.getItem('newVIP') || true)
  }, [cartCourses])

  const isDiscountActive = cycle => {
    const now = new Date()
    const discountStart = new Date(cycle.discountDate)
    const discountEnd = new Date(cycle.discountDateEnd)
    const result = now >= discountStart && now <= discountEnd

    return result
  }

  const getDiscountedPrice = cycle => {
    return isDiscountActive(cycle)
      ? isVIP || oldVIP
        ? vipPlan === 2
          ? cycle.discountVipPLPrice
          : cycle.discountVipPrice
        : cycle.discountPrice
      : isVIP || oldVIP
      ? vipPlan === 2
        ? cycle.vipPLPrice
        : cycle.vipPrice
      : cycle.regularPrice
  }

  function areCouponApplied(obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) {
      return false
    }

    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }

    return true
  }

  const appearance = {
    theme: 'flat'
  }

  const options = {
    clientSecret,
    appearance
  }

  useEffect(() => {
    if (appliedCoupon?.data?.data && loading && appliedCoupon?.data?.data?.code === coupon) {
      const checkCoupon = usedCoupon.filter(coupon => coupon.code !== 'VIP MEMBER' && coupon.code != null)
      const individualUsed = usedCoupon.filter(coupon => coupon.individualUseOnly === true)
      if (appliedCoupon?.data?.data?.individual_use_only === 1 && checkCoupon.length) {
        window.alert("This coupon can't be used with other coupons")
        setLoading(false)
      } else if (individualUsed.length) {
        window.alert(`This coupon can't be used with ${individualUsed[0].code}`)
        setLoading(false)
      } else {
        const oldCoupons = [...usedCoupon]
        if (appliedCoupon?.data?.data?.discount_percentage) {
          const newCoupon = {
            code: appliedCoupon?.data?.data?.code,
            discount: '$' + (cartSubTotal / 100) * appliedCoupon?.data?.data?.discount_percentage,
            individualUseOnly: appliedCoupon?.data?.data?.individual_use_only
          }
          const exists = oldCoupons.some(obj => areCouponApplied(obj, newCoupon))

          if (!exists) {
            setCouponDiscount(appliedCoupon?.data?.data?.discount_percentage)
            oldCoupons.push(newCoupon)
            setUsedCoupon(oldCoupons)
            setLoading(false)
            toast.success('Coupon applied!')
          }
        } else if (appliedCoupon?.data?.data?.discount_amount) {
          const newCoupon = {
            code: appliedCoupon?.data?.data?.code,
            discount: '$' + appliedCoupon?.data?.data?.discount_amount,
            individualUseOnly: appliedCoupon?.data?.data?.individual_use_only
          }
          const exists = oldCoupons.some(obj => areCouponApplied(obj, newCoupon))
          if (!exists) {
            setCouponDiscountAmount(appliedCoupon?.data?.data?.discount_amount)
            oldCoupons.push(newCoupon)
            setUsedCoupon(oldCoupons)
            setLoading(false)
            toast.success('Coupon applied!')
          }
        } else {
          setCouponDiscountAmount(null)
          setCouponDiscount(null)
        }
      }
    }

    if (referralDiscount?.data?.data?.referralCode) {
      setReferralUser(referralDiscount?.data?.data)
      const oldCoupons = [...usedCoupon]

      const newCoupon = {
        code: referralDiscount?.data?.data?.referralCode,
        discount: '$' + '5'
      }
      setReferralUser(referralDiscount?.data?.data)
      const exists = oldCoupons.some(obj => areCouponApplied(obj, newCoupon))
      if (!exists) {
        setCouponDiscountAmount('5')
        oldCoupons.push(newCoupon)
        setUsedCoupon(oldCoupons)
        setLoading(false)
      }
    }
  }, [appliedCoupon, referralDiscount, user, loading, coupon, cartSubTotal, usedCoupon])

  const handelInitiatePayment = () => {
    if (!termsChecked) {
      window.alert('Please read and agree to the terms of use!')
      setAgreeAlert(true)
    } else {
      setPartially(false)
      if (cartTotal > 0) {
        if (clientSecret === null) {
          if (cartCourses.length && email) {
            const token = window.localStorage.getItem('accessToken')

            fetch(`${BASE_URL}/student/transaction/create-payment-intent`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify({
                items: cartCourses,
                email,
                coupon: usedCoupon,
                referralUser,
                cartTotal: cartTotal - stripeDiscount,
                isVIP,
                oldVIP,
                vipPlan
              })
            })
              .then(res => res.json())
              .then(data => {
                const { clientSecret } = data
                setClientSecret(clientSecret)
              })
            setCheckout(true)
          } else {
            window.alert('Cart is Empty!')
          }
        }
      } else {
        window.alert('Error: Cart total is 0.')
      }
    }
  }

  const handelInitiatePartiallyPayment = () => {
    if (!termsChecked) {
      window.alert('Please read and agree to the terms of use!')
      setAgreeAlert(true)
    } else {
      setStripePay(false)
      if (cartTotal > 0) {
        if (clientSecret === null) {
          if (cartCourses.length && email) {
            const token = window.localStorage.getItem('accessToken')

            fetch(`${BASE_URL}/student/transaction/partially/intent`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify({
                items: cartCourses,
                email,
                coupon: usedCoupon,
                referralUser,
                cartTotal,
                isVIP,
                oldVIP,
                vipPlan,
                hasCourseType2
              })
            })
              .then(res => res.json())
              .then(data => {
                const { redirectURL } = data
                setRedirectURL(redirectURL)
                router.push(redirectURL)
              })
            setCheckout(true)
          } else {
            window.alert('Cart is Empty!')
          }
        }
      } else {
        window.alert('Error: Cart total is 0.')
      }
    }
  }

  const handleEnrollNow = () => {
    if (!termsChecked) {
      window.alert('Please read and agree to the terms of use!')
      setAgreeAlert(true)
    } else {
      setStripePay(false)
      setPartially(false)
      if (cartTotal === 0) {
        if (clientSecret === null) {
          if (cartCourses.length && email) {
            const token = window.localStorage.getItem('accessToken')

            fetch(`${BASE_URL}/student/transaction/free/intent`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify({
                items: cartCourses,
                email,
                coupon: usedCoupon,
                referralUser,
                cartTotal,
                isVIP,
                oldVIP,
                vipPlan
              })
            })
              .then(res => res.json())
              .then(data => {
                const { redirectURL } = data
                setRedirectURL(redirectURL)
                router.push(redirectURL)
              })
            setCheckout(true)
          } else {
            window.alert('Cart is Empty!')
          }
        }
      } else {
        window.alert('Error: Cart total is greater than 0.')
      }
    }
  }

  const handleInputChange = e => {
    const capitalizedValue = e.target.value.toUpperCase()
    setCoupon(capitalizedValue)
  }

  const applyCouponHandler = e => {
    if (!email) {
      window.alert('You must be logged in to use the discount code!')

      return
    }

    if (!coupon) {
      window.alert('Please insert a valid coupon!')

      return
    }

    if (cartCourses.length) {
      setLoading(true)
      dispatch(verifyCouponCode({ coupon, user: email, cycles: cartCourses, referred: referralUser }))
    } else {
      window.alert('Cart is empty!')
    }
  }

  const applyReferralHandler = e => {
    if (!email) {
      window.alert('You must be logged in to use the discount code!')
    }

    if (!referral) {
      window.alert('Please insert a valid Code!')
    } else {
      if (cartCourses.length) {
        setLoading(true)
        dispatch(verifyReferralCode({ referral, user: email }))
      } else {
        window.alert('Cart is empty!')
      }
    }
  }

  const handelClearCart = e => {
    if (cartCourses.length) {
      const conformation = window.confirm('Are you sure you want to clear cart?')
      if (conformation) {
        setCartCourses([])
        setCoupon(null)
        setCouponDiscountAmount(null)
        setCouponDiscount(null)
        setUsedCoupon(cartCoupon)
        setCheckout(false)
        setCartSubTotal(0)
        setCartTotal(0)
        localStorage.setItem('cartItems', JSON.stringify([]))
      }
    } else {
      window.alert('Cart is Empty')
    }
  }

  const handleRemoveItem = item => {
    if (cartCourses.length) {
      const confirmation = window.confirm('Are you sure you want to delete this item from the cart?')
      if (confirmation) {
        const newItems = cartCourses.filter(course => course.id !== item.id)
        const updatedCartItems = newItems.map(course => course.id)
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
        setCartCourses(newItems)
        if (item.id === 150000) {
          setIsVIP(false)
          localStorage.setItem('newVIP', false)
        }
      }
    } else {
      window.alert('Cart is Empty')
    }
  }

  useEffect(() => {
    const isVipMembershipInCart = cartCourses.some(course => course.id === 150000)

    const prices = cartCourses.map(course => {
      let finalPrice
      if (isDiscountActive(course)) {
        finalPrice =
          user?.data?.isVipValid || isVipMembershipInCart
            ? vipPlan === 2
              ? course.discountVipPLPrice
              : course.discountVipPrice || course.discountPrice
            : course.discountPrice
      } else {
        finalPrice =
          user?.data?.isVipValid || isVipMembershipInCart
            ? vipPlan === 2
              ? course.vipPLPrice
              : course.vipPrice || course.regularPrice
            : course.regularPrice
      }

      return finalPrice
    })

    const newSubTotal = prices.reduce((acc, price) => acc + price, 0)

    setCartSubTotal(newSubTotal)

    const totalDiscount = calculateTotalCouponDiscount()
    setCartTotal(newSubTotal - totalDiscount)

    if (!isVipMembershipInCart) {
      setIsVIP(false)
    }
  }, [cartCourses, user?.data?.isVipValid, usedCoupon, vipPlan])

  const calculateTotalCouponDiscount = () => {
    let totalDiscount = 0

    usedCoupon.forEach(coupon => {
      if (coupon.discount) {
        if (coupon.discount.includes('%')) {
          const percentage = parseFloat(coupon.discount.replace('%', ''))
          totalDiscount += (cartSubTotal / 100) * percentage
        } else if (coupon.discount.includes('$')) {
          const amount = parseFloat(coupon.discount.replace('$', ''))
          totalDiscount += amount
        }
      }
    })

    return Math.min(totalDiscount, cartSubTotal)
  }

  useEffect(() => {
    if (cartCourses.length) {
      const newSubTotal = cartCourses.reduce((acc, cycle) => {
        const price = getDiscountedPrice(cycle)

        return acc + price
      }, 0)

      setCartSubTotal(newSubTotal)
      const totalDiscount = calculateTotalCouponDiscount()
      setCartTotal(newSubTotal - totalDiscount)
    }
  }, [cartCourses, usedCoupon])

  useEffect(() => {
    const totalCouponDiscount = calculateTotalCouponDiscount()
    setCartTotal(cartSubTotal - totalCouponDiscount)

    const appliedCouponData = {
      coupon,
      couponDiscount,
      couponDiscountAmount,
      usedCoupon
    }

    localStorage.setItem('appliedCoupon', JSON.stringify(appliedCouponData))
  }, [cartSubTotal, usedCoupon])

  useEffect(() => {
    if (courses?.data?.data && courses?.data?.data?.length) {
      setVipPlan(courses?.data.vipPlan)
      setCartCourses(courses?.data?.data)
      setIsRenew(courses?.data?.isRenew)

      if (!courses?.data?.isRenew) {
        setOldVIP(user?.data?.isVipValid)
      }
    }
  }, [courses, user])

  const handelRemoveCoupon = code => {
    const oldUsedCoupon = [...usedCoupon]
    const confirmation = window.confirm('Are you sure you want to delete this coupon ?')
    if (confirmation) {
      const newCoupon = oldUsedCoupon.filter(coupon => coupon.code !== code)
      setUsedCoupon(newCoupon)
    }
  }

  useEffect(() => {
    if (stripePay && cartSubTotal > 0) {
      const discount = Math.floor(cartSubTotal * 0.05)
      setStripeDiscount(discount)
    } else {
      setStripeDiscount(0)
    }
  }, [stripePay, cartSubTotal])

  useEffect(() => {
    const totalDiscount = calculateTotalCouponDiscount() + stripeDiscount

    const finalTotal = cartSubTotal - totalDiscount

    setCartTotal(finalTotal)
  }, [cartSubTotal, usedCoupon, stripeDiscount])

  return (
    <div className='FNV-Cart'>
      <section className='FNV-Cart-Detail'>
        <div className='container'>
          <div className='row FNV-ReferalCode'>
            <div className='col-md-6'>
              <h2>{t('cart-referal-title')}</h2>
              <strong data-bs-toggle='tooltip' title='Tooltip text here'>
                <i data-feather='alert-circle'></i> {t('cart-referal-desc')}
              </strong>
            </div>

            <div className='col-md-6'>
              <div className='row'>
                <div className='col-7 col-md-6'>
                  <input type='text' onChange={e => setReferral(e.target.value)} className='form-control FNV-Text' />
                </div>

                <div className='col-5 col-md-6'>
                  <input
                    type='button'
                    onClick={applyReferralHandler}
                    className='FNV-Btn ThirdColor BtnMedium'
                    value={t('cart-referal-button')}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='row FNV-Heading'>
            <div className='col-3 col-md-2'>
              <h2>{t('cart-head-title')}</h2>
            </div>
            <div className='col-9 col-md-10'>
              <div className='row'>
                <div className='col-7 col-md-8'>
                  <span>{t('cart-head-product-title')}</span>
                </div>
                <div className='col-5 col-md-4'>
                  <span>{t('cart-head-product-price')}</span>
                </div>
              </div>
            </div>
          </div>

          {cartCourses &&
            cartCourses.length > 0 &&
            cartCourses.map(cycle => (
              <div key={cycle.id} className='row FNV-CartItems'>
                <div className='col-3 col-md-2'>
                  <img src={cycle?.course?.image} className='img-fluid' />
                </div>

                <div className='col-9 col-md-10'>
                  <div className='row'>
                    <div className='col-10 col-md-8'>
                      <div className='row'>
                        <p>{cycle?.course?.title || 'Course Name'}</p>
                      </div>

                      <div className='row'>
                        <Link
                          href={`/courses/${cycle?.course?.slug || 'undefined'}`}
                          className='FNV-Btn BtnOutline PrimaryColor BtnMedium'
                        >
                          {t('cart-head-product-details')}
                        </Link>
                        <Link
                          href='#'
                          onClick={() => handleRemoveItem(cycle)}
                          className='FNV-Btn SecondaryColor BtnMedium'
                        >
                          {t('cart-head-product-remove')}
                        </Link>
                      </div>
                    </div>
                    <div className='col-2 col-md-4'>
                      <span>CA$ {getDiscountedPrice(cycle)}</span>
                      <p>
                        {isVIP &&
                          cycle.id !== 150000 &&
                          `Member Price: $${getDiscountedPrice(cycle)} Save $${(
                            cycle.regularPrice - getDiscountedPrice(cycle)
                          ).toFixed(2)} By being a FANAVARAN member`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          <div className='row FNV-Coupon'>
            {cartCourses.length > 0 && (
              <div className='col-md-4'>
                <button type='button' onClick={handelClearCart} className='FNV-Btn SecondaryColor BtnMedium px-5'>
                  <i data-feather='trash'></i> {t('cart-head-cart-clear')}
                </button>
              </div>
            )}

            <div className='col-md-8'>
              <div className='row'>
                <div className='col-md-6'>
                  <span>{t('cart-head-coupon-head')}</span>
                </div>
                <div className='col-md-6'>
                  <div className='row'>
                    <div className='col-7 col-md-6'>
                      <input type='text' onChange={handleInputChange} className='form-control FNV-Text' />
                    </div>

                    <div className='col-5 col-md-6'>
                      <input
                        type='button'
                        onClick={applyCouponHandler}
                        className='FNV-Btn BtnPrimary BtnMedium'
                        value={t('cart-head-coupon-button')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row FNV-Total'>
            <div className='col-4 col-md-4'></div>
            <div className='col-12 col-md-8'>
              {/* Subtotal */}
              <div className='row'>
                <div className='col-6 col-md-6'>
                  <p>{t('cart-subtotal-text')}</p>
                </div>
                <div className='col-6 col-md-6'>
                  <p className='text-center'>C${cartSubTotal || 0}</p>
                </div>
              </div>
              {/* Tax */}
              <div className='row'>
                <div className='col-6 col-md-6'>
                  <p>{t('cart-tax-text')}</p>
                </div>
                <div className='col-6 col-md-6'>
                  <p className='text-center'>CA$ 0</p>
                </div>
              </div>
              {/* Stripe Discount */}
              {stripePay && stripeDiscount > 0 && (
                <div className='row'>
                  <div className='col-6 col-md-6'>
                    <p>{t('cart-stripe-discount-text')}</p>
                  </div>
                  <div className='col-6 col-md-6'>
                    <p className='text-center'>-CA$ {stripeDiscount}</p>
                  </div>
                </div>
              )}
              {usedCoupon
                ? usedCoupon?.map((coupon, index) =>
                    coupon.code ? (
                      <div key={index} className='row'>
                        <div className='col-6 col-md-6'>
                          <p>{t('cart-coupon-text')}</p>
                        </div>
                        <div className='col-6 col-md-6 text-center'>
                          <p className='pb-0'>
                            {coupon.code}
                            <small
                              onClick={e => handelRemoveCoupon(coupon.code)}
                              style={{ cursor: 'pointer' }}
                              className='FNV-Remove'
                            >
                              {t('cart-coupon-remove')}
                            </small>
                          </p>
                          <p>{coupon.discount}</p>
                        </div>
                      </div>
                    ) : null
                  )
                : null}

              {/* Total */}
              <div className='row'>
                <div className='col-6 col-md-6'>
                  <p>{t('cart-total-text')}</p>
                </div>
                <div className='col-6 col-md-6'>
                  <span>CA$ {cartTotal || 0}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className='row FNV-Terms'
            style={{ direction: pageDirection, textAlign: pageDirection === 'rtl' ? 'right' : 'left' }}
          >
            <div className='col-md-12'>
              <Box sx={{ marginBottom: '2rem', padding: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant='h6' gutterBottom>
                  {t('agree-following-terms')}
                </Typography>

                <ul
                  sx={{ listStyleType: 'disc', pl: 2 }}
                  style={{
                    direction: pageDirection,
                    textAlign: pageDirection === 'rtl' ? 'right' : 'left',
                    fontSize: '16px'
                  }}
                >
                  <li sx={{ display: 'list-item' }}>
                    <Typography style={{ fontSize: '16px' }}>{t('agree-terms-first')}</Typography>
                  </li>
                  <li sx={{ display: 'list-item' }}>
                    <Typography style={{ fontSize: '16px' }}>{t('agree-terms-second')}</Typography>
                  </li>
                  <li sx={{ display: 'list-item' }}>
                    <Typography style={{ fontSize: '16px' }}>{t('agree-terms-third')}</Typography>
                  </li>
                  <li sx={{ display: 'list-item' }}>
                    <Typography style={{ fontSize: '16px' }}>{t('agree-terms-fourth')}</Typography>
                  </li>
                  <li sx={{ display: 'list-item' }}>
                    <Typography style={{ fontSize: '16px' }}>{t('agree-terms-fifth')}</Typography>
                  </li>
                  <li sx={{ display: 'list-item' }}>
                    <Typography style={{ fontSize: '16px' }}>{t('agree-terms-sixth')}</Typography>
                  </li>
                </ul>
                {hasCourseType2 && (
                  <Box
                    sx={{
                      height: '150px',
                      overflowY: 'scroll',
                      padding: 5,
                      backgroundColor: '#f5f5f5',
                      borderRadius: 2,
                      border: '1px solid #C9D4EF'
                    }}
                  >
                    <h2>Workshop Waiver and Release Agreement</h2>
                    <p style={{ fontSize: '16px' }}>
                      This Workshop Waiver and Release Agreement is made and entered into by and between “Fanavaran" and
                      the undersigned participant on Date:{' '}
                      <strong>{<SimpleDateFormatter dateString={Date.now()} />}</strong>
                    </p>
                    <h2>1. Assumption of Risk</h2>
                    <p style={{ fontSize: '16px' }}>
                      Participant understands and acknowledges that the workshop provided by Fanavaran involves certain
                      risks and dangers, including but not limited to, the risk of personal injury, property damage, and
                      other dangers that may arise from participation in plumbing, electrical, and HVAC activities.
                      Participant voluntarily assumes all risks associated with participation in the workshop.
                    </p>
                    <h2>2. Waiver and Release</h2>
                    <p style={{ fontSize: '16px' }}>
                      Participant hereby waives, releases, and discharges Fanavaran, its officers, directors, employees,
                      agents, and representatives (collectively, the "Released Parties") from any and all claims,
                      liabilities, damages, losses, demands, actions, or causes of action that Participant may have
                      against the Released Parties arising out of or in any way related to participation in the
                      workshop, including, but not limited to, any claims for negligence, breach of contract, or
                      personal injury.
                    </p>
                    <h2>3. Indemnification</h2>
                    <p style={{ fontSize: '16px' }}>
                      Participant agrees to indemnify, defend, and hold harmless the Released Parties from and against
                      any and all claims, liabilities, damages, losses, demands, actions, or causes of action, including
                      reasonable attorneys' fees, arising out of or in any way related to Participant's participation in
                      the workshop or any breach of this Agreement.
                    </p>
                    <h2>4. Entire Agreement</h2>
                    <p style={{ fontSize: '16px' }}>
                      This Agreement constitutes the entire agreement between Fanavaran and Participant regarding the
                      subject matter hereof and supersedes all prior or contemporaneous agreements, representations,
                      warranties, and understandings, whether written or oral, relating to such subject matter.
                    </p>
                    <h2>5. Acknowledgment</h2>
                    <p style={{ fontSize: '16px' }}>
                      Participant acknowledges that Participant has read this Agreement, understands its terms, and
                      agrees to be bound by its terms voluntarily.
                    </p>
                    <p style={{ fontSize: '16px' }}>© 2023 All rights reserved by Fanavaran.</p>
                    <p style={{ fontSize: '16px' }}>
                      The participant's signature below indicates the Participant's agreement to the terms and
                      conditions set forth in this Agreement.
                    </p>
                    <p style={{ fontSize: '16px' }}>
                      By signing below, Participant acknowledges and agrees to the terms and conditions set forth in
                      this Agreement.
                    </p>
                    <p style={{ fontSize: '16px' }}>Participant's Full Name:{fullName ? fullName : 'Student Name'}</p>
                    <p style={{ fontSize: '16px' }}>
                      Date: <strong>{<SimpleDateFormatter dateString={Date.now()} />}</strong>
                    </p>
                  </Box>
                )}

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={termsChecked}
                      onChange={handleChangeCheckBox}
                      sx={{
                        transform: 'scale(1.5)',
                        padding: '5px',
                        borderRadius: '4px',
                        backgroundColor: agreeAlert ? 'lightcoral' : 'transparent',
                        '&.Mui-checked': {
                          backgroundColor: 'lightgreen'
                        }
                      }}
                    />
                  }
                  label={t('agree-terms')}
                />
              </Box>

              <div className='col-md-12 gap-2 g-2'>
                {email ? (
                  cartTotal > 0 ? (
                    <>
                      {partially && cartTotal > 300 && (
                        <button
                          onClick={handelInitiatePartiallyPayment}
                          className='FNV-Btn BtnOutline SecondaryColor BtnXLarge'
                        >
                          {t('cart-partial-button')}
                        </button>
                      )}
                      {checkout && stripePay && clientSecret ? (
                        <Elements options={options} stripe={stripePromise}>
                          <CheckoutForm
                            termsChecked={termsChecked}
                            items={cartCourses}
                            user={email}
                            coupon={coupon}
                            fullName={fullName}
                          />
                        </Elements>
                      ) : (
                        <button onClick={handelInitiatePayment} className='FNV-Btn SuccessColor BtnXLarge'>
                          {t('cart-full-payment-button')}
                        </button>
                      )}
                    </>
                  ) : (
                    <>
                      <div className='col-md-3'>
                        <p>{t('cart-total-text')}</p>
                        <span>CA$ {cartTotal || 0}</span>
                      </div>

                      <button
                        onClick={handleEnrollNow}
                        disabled={!termsChecked || cartCourses.length <= 0}
                        className='FNV-Btn BtnPrimary BtnXLarge'
                      >
                        {cartCourses.length <= 0 ? 'Cart is empty!' : 'Enroll Now'}
                      </button>
                    </>
                  )
                ) : (
                  <Link href='/login/?returnUrl=cart' className='FNV-Btn DangerColor BtnXLarge'>
                    {t('cart-login-button')}
                  </Link>
                )}
              </div>

              <div className='FNV-Cart-Payment sd'>
                <div className='container'>
                  <div className='row'>
                    {email ? (
                      cartTotal > 0 ? (
                        <>
                          <div className='col-md-3'>
                            <p>{t('cart-total-text')}</p>
                            <span>CA$ {cartTotal || 0}</span>
                          </div>

                          {partially && cartTotal > 300 && (
                            <button
                              onClick={handelInitiatePartiallyPayment}
                              className='FNV-Btn BtnOutline SecondaryColor BtnXLarge'
                            >
                              {t('cart-partial-button')}
                            </button>
                          )}
                          {checkout && stripePay && clientSecret ? (
                            <Elements options={options} stripe={stripePromise}>
                              <CheckoutForm
                                termsChecked={termsChecked}
                                items={cartCourses}
                                user={email}
                                coupon={coupon}
                                fullName={fullName}
                              />
                            </Elements>
                          ) : (
                            <button onClick={handelInitiatePayment} className='FNV-Btn SuccessColor BtnXLarge'>
                              {t('cart-full-payment-button')}
                            </button>
                          )}
                        </>
                      ) : (
                        <>
                          <div className='col-md-3'>
                            <p>{t('cart-total-text')}</p>
                            <span>CA$ {cartTotal || 0}</span>
                          </div>

                          <button
                            onClick={handleEnrollNow}
                            disabled={!termsChecked || cartCourses.length <= 0}
                            className='FNV-Btn BtnPrimary BtnXLarge'
                          >
                            {cartCourses.length <= 0 ? 'Cart is empty!' : 'Enroll Now'}
                          </button>
                        </>
                      )
                    ) : (
                      <Link href='/login/?returnUrl=cart' className='FNV-Btn DangerColor BtnXLarge'>
                        {t('cart-login-button')}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className='offcanvas offcanvas-start'
        tabIndex='-1'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <div className='offcanvas-header'>
          <a className='navbar-brand' href='#'>
            <img src='/img/MainLogo.png' className='img-fluid' />
          </a>
          <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
        </div>
      </div>
    </div>
  )
}

Index.guestGuard = true

export default Index
