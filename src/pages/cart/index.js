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

  const cartItems = localStorage.getItem('cartItems')
  const pageDirection = localStorage.getItem('direction')

  useEffect(() => {
    if (!cartItems) {
      localStorage.setItem('cartItems', JSON.stringify([]))
      setCartCourses([])
    }
  }, [cartItems])

  const [termsChecked, setTermsChecked] = useState(false)

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

    return now >= discountStart && now <= discountEnd
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

  useEffect(() => {
    const localCartItems = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('cartItems')) : []
    dispatch(setCartItems(localCartItems || []))
    setLocalCartItem(localCartItems)

    const handleStorage = () => {
      const updatedCartItems = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('cartItems')) : []
      dispatch(setCartItems(updatedCartItems || []))
    }

    window.addEventListener('storage', handleStorage)

    return () => window.removeEventListener('storage', handleStorage)
  }, [cartCourses, cartTotal, dispatch])

  useEffect(() => {
    if (appliedCoupon?.data?.data && loading && appliedCoupon?.data?.data?.code === coupon) {
      const checkCoupon = usedCoupon.filter(coupon => coupon.code !== 'VIP MEMBER' && coupon.code != null)
      const individualUsed = usedCoupon.filter(coupon => coupon.individualUseOnly === true)
      if (appliedCoupon?.data?.data?.individual_use_only === 1 && checkCoupon.length) {
        window.alert("This coupon can't be used with other coupon")
        setLoading(false)
      } else {
        if (individualUsed.length) {
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
                cartTotal,
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
        window.alert('error ')
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
        window.alert('error ')
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
        window.alert('error ')
      }
    }
  }

  const appearance = {
    theme: 'flat'
  }

  const options = {
    clientSecret,
    appearance
  }

  useEffect(() => {
    const appliedCouponData = JSON.parse(localStorage.getItem('appliedCoupon'))
    if (appliedCouponData) {
      setCoupon(appliedCouponData.coupon)
      setCouponDiscount(appliedCouponData.couponDiscount)
      setCouponDiscountAmount(appliedCouponData.couponDiscountAmount)
      setUsedCoupon(appliedCouponData.usedCoupon)
    }
  }, [])

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
    const totalDiscount = calculateTotalCouponDiscount()
    const finalTotal = cartSubTotal - totalDiscount
    setCartTotal(Math.max(0, finalTotal))
  }, [cartSubTotal, usedCoupon])

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

  useEffect(() => {
    if (cartCourses) {
      const isVipMembershipInCart =
        Array.isArray(courses?.data?.data) && courses.data.data.some(course => course?.course?.id === 150000)

      const prices = cartCourses?.map(item => {
        if (!isRenew) {
          if (user?.data?.isVipValid || isVipMembershipInCart) {
            return item?.vipPrice || 0
          } else {
            return item?.regularPrice || 0
          }
        } else {
          return item?.regularPrice || 0
        }
      })

      const sumOfCoursePrice = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      setCartTotal(sumOfCoursePrice)
      setCartSubTotal(sumOfCoursePrice)

      if (isVipMembershipInCart) {
        setIsVIP(true)
      }
    }
  }, [cartCourses, setCartCourses, setCartTotal, user, isRenew, courses?.data?.data])

  const handelRemoveCoupon = code => {
    const oldUsedCoupon = [...usedCoupon]
    const confirmation = window.confirm('Are you sure you want to delete this coupon ?')
    if (confirmation) {
      const newCoupon = oldUsedCoupon.filter(coupon => coupon.code !== code)
      setUsedCoupon(newCoupon)
    }
  }

  const handleInputChange = e => {
    const capitalizedValue = e.target.value.toUpperCase()
    setCoupon(capitalizedValue)
  }

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
                    className='FNV-Btn BtnPrimary BtnMedium'
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
                          className='FNV-Btn BtnOutline SecondaryColor BtnMedium'
                        >
                          {t('cart-head-product-remove')}
                        </Link>
                      </div>
                    </div>
                    <div className='col-2 col-md-4'>
                      <span>C${getDiscountedPrice(cycle)}</span>
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
                <button type='button' onClick={handelClearCart} className='FNV-Btn BtnOutline SecondaryColor BtnMedium'>
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
                  <p className='text-center'>C$0</p>
                </div>
              </div>

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
                  <span>C${cartTotal || 0}</span>
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
                  style={{ direction: pageDirection, textAlign: pageDirection === 'rtl' ? 'right' : 'left' }}
                >
                  <li sx={{ display: 'list-item' }}>
                    <Typography>{t('agree-terms-first')}</Typography>
                  </li>
                  <li sx={{ display: 'list-item' }}>
                    <Typography>{t('agree-terms-second')}</Typography>
                  </li>
                  <li sx={{ display: 'list-item' }}>
                    <Typography>{t('agree-terms-third')}</Typography>
                  </li>
                  <li sx={{ display: 'list-item' }}>
                    <Typography>{t('agree-terms-fourth')}</Typography>
                  </li>
                  <li sx={{ display: 'list-item' }}>
                    <Typography>{t('agree-terms-fifth')}</Typography>
                  </li>
                  <li sx={{ display: 'list-item' }}>
                    <Typography>{t('agree-terms-sixth')}</Typography>
                  </li>
                </ul>

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

              <div className='col-md-12 d-flex justify-content-end gap-2'>
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
                        <button onClick={handelInitiatePayment} className='FNV-Btn SecondaryColor BtnXLarge'>
                          {t('cart-full-payment-button')}
                        </button>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={handleEnrollNow}
                      disabled={!termsChecked || cartCourses.length <= 0}
                      className='FNV-Btn BtnPrimary BtnXLarge'
                    >
                      {cartCourses.length <= 0 ? 'Cart is empty!' : 'Enroll Now'}
                    </button>
                  )
                ) : (
                  <Link href='/login/?returnUrl=cart' className='FNV-Btn BtnPrimary BtnMedium'>
                    Login
                  </Link>
                )}
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
