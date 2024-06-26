import React, { useState, useEffect } from 'react'

// Stripe
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

// Checkout Form
import CheckoutForm from './checkout'

// Components
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from 'src/store/apps/course'
import { fetchVipData } from 'src/store/apps/user'
import themeConfig from 'src/configs/themeConfig'
import { verifyCouponCode } from 'src/store/apps/coupon'
import { verifyReferralCode } from 'src/store/apps/referral'
import { setCartItems } from 'src/store/apps/cart'
import BASE_URL from 'src/api/BASE_URL'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { Checkbox, FormControlLabel, Typography, Box } from '@mui/material'

// ** Import Translation
import { useTranslation } from 'react-i18next'

// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(themeConfig.stripePublicKey)

const Index = () => {
  //initial state
  const cartCoupon = [{ code: null, discount: null }]

  const { t } = useTranslation()

  //Set states
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

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false
  })

  const handleChangeCheckBox = event => {
    setCheckboxes({
      ...checkboxes,
      [event.target.name]: event.target.checked
    })
  }

  const allChecked = Object.values(checkboxes).every(Boolean)

  //Hooks
  const courses = useSelector(state => state.course)
  const appliedCoupon = useSelector(state => state.coupon)
  const referralDiscount = useSelector(state => state.referral)
  const user = useSelector(state => state.user)
  const router = useRouter()

  //Get the cart item's from the API
  useEffect(() => {
    const cartItems = window.localStorage.getItem('cartItems')
    if (cartItems != 'null' && cartItems?.length > 0) {
      dispatch(getCartItems(cartItems, email, newVIP))
    }
    setEmail(JSON.parse(localStorage.getItem('userData')) || null)
    setFullName(JSON.parse(localStorage.getItem('userName')) || null)
  }, [email, newVIP])

  //give the user info
  useEffect(() => {
    if (email) {
      dispatch(fetchVipData())
    }
  }, [email])

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
    return isDiscountActive(cycle) ? cycle.discountPrice : cycle.regularPrice
  }

  //Check if coupon is applied
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

    //Store cart items in localStorage
    const handleStorage = () => {
      const updatedCartItems = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('cartItems')) : []
      dispatch(setCartItems(updatedCartItems || []))
    }

    window.addEventListener('storage', handleStorage)

    return () => window.removeEventListener('storage', handleStorage)
  }, [cartCourses, cartTotal])
  useEffect(() => {
    if (appliedCoupon?.data?.data && loading && appliedCoupon?.data?.data?.code === coupon) {
      const checkCoupon = usedCoupon.filter(coupon => coupon.code != 'VIP MEMBER' && coupon.code != null)
      const individualUsed = usedCoupon.filter(coupon => coupon.individualUseOnly === true)
      if (appliedCoupon?.data?.data?.individual_use_only == 1 && checkCoupon.length) {
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
  }, [appliedCoupon, referralDiscount, user])

  //Initiate The payment
  const handelInitiatePayment = () => {
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
              email: email,
              coupon: usedCoupon,
              referralUser: referralUser,
              cartTotal: cartTotal,
              isVIP: isVIP,
              oldVIP: oldVIP
            })
          })
            .then(res => res.json())
            .then(data => {
              const { clientSecret } = data // Make sure to retrieve the correct clientSecret from the response
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

  const handelInitiatePartiallyPayment = () => {
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
              email: email,
              coupon: usedCoupon,
              referralUser: referralUser,
              cartTotal: cartTotal,
              isVIP: isVIP,
              oldVIP: oldVIP
            })
          })
            .then(res => res.json())
            .then(data => {
              const { redirectURL } = data // Make sure to retrieve the correct clientSecret from the response
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

  const handleEnrollNow = () => {
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
              email: email,
              coupon: usedCoupon,
              referralUser: referralUser,
              cartTotal: cartTotal,
              isVIP: isVIP,
              oldVIP: oldVIP
            })
          })
            .then(res => res.json())
            .then(data => {
              const { redirectURL } = data // Make sure to retrieve the correct clientSecret from the response
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

  //Payment config(stripe)
  const appearance = {
    theme: 'flat'
  }

  const options = {
    clientSecret, // Pass the clientSecret obtained from the server
    appearance
  }
  useEffect(() => {
    const appliedCouponData = JSON.parse(localStorage.getItem('appliedCoupon'))
    if (appliedCouponData) {
      // Update the coupon states with the data from local storage
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
      const uppercaseCoupon = coupon.toUpperCase()

      dispatch(verifyCouponCode({ coupon: coupon, user: email, cycles: cartCourses, referred: referralUser }))
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
        dispatch(verifyReferralCode({ referral: referral, user: email }))
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
        localStorage.setItem('cartItems', null)
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
        const updatedCartItems = newItems?.map(course => course.id)
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
        setCartCourses(newItems) // Update cartCourses with the filtered array
        // If VIP course is removed, switch pricing to regular and set isVIP to false
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
    // Recalculate total prices whenever cartCourses changes
    const isVipMembershipInCart = cartCourses.some(course => course.id === 150000)

    const prices = cartCourses.map(course => {
      // Determine the correct price based on discount eligibility and VIP status
      let finalPrice
      if (isDiscountActive(course)) {
        finalPrice =
          user?.data?.isVipValid || isVipMembershipInCart
            ? course.discountVipPrice || course.discountPrice
            : course.discountPrice
      } else {
        finalPrice =
          user?.data?.isVipValid || isVipMembershipInCart ? course.vipPrice || course.regularPrice : course.regularPrice
      }

      return finalPrice
    })

    const newSubTotal = prices.reduce((acc, price) => acc + price, 0)
    setCartSubTotal(newSubTotal)

    const totalDiscount = calculateTotalCouponDiscount() // This function needs to calculate the discount based on the subtotal
    setCartTotal(newSubTotal - totalDiscount)

    // If VIP membership is no longer in the cart, switch pricing back to regular
    if (!isVipMembershipInCart) {
      setIsVIP(false)
    }
  }, [cartCourses, user?.data?.isVipValid, usedCoupon]) // Include `usedCoupon` if coupons affect pricing

  // Function to calculate the total coupon discount
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

    return Math.min(totalDiscount, cartSubTotal) // Ensure discount does not exceed subtotal
  }

  useEffect(() => {
    const totalDiscount = calculateTotalCouponDiscount()
    const finalTotal = cartSubTotal - totalDiscount
    setCartTotal(Math.max(0, finalTotal)) // Ensure total never goes negative

    // Further logic can be placed here to determine whether to show payment form
  }, [cartSubTotal, usedCoupon])

  useEffect(() => {
    if (cartCourses.length) {
      const newSubTotal = cartCourses.reduce((acc, cycle) => {
        const price = getDiscountedPrice(cycle)

        return acc + price
      }, 0)

      setCartSubTotal(newSubTotal)

      // Recalculate discount based on the updated subtotal
      const totalDiscount = calculateTotalCouponDiscount()
      setCartTotal(newSubTotal - totalDiscount)
    }
  }, [cartCourses, usedCoupon]) // Include usedCoupon to recalculate when coupons change

  // Update the useEffect hook for applying coupon discount on cart total
  useEffect(() => {
    const totalCouponDiscount = calculateTotalCouponDiscount()
    setCartTotal(cartSubTotal - totalCouponDiscount)

    // Save the applied coupon data to local storage
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

      // If VIP membership is added to the cart, switch to VIP pricing
      if (isVipMembershipInCart) {
        setIsVIP(true)
      }
    }
  }, [cartCourses, setCartCourses, setCartTotal, user])

  const handelRemoveCoupon = code => {
    const oldUsedCoupon = [...usedCoupon]
    const confirmation = window.confirm('Are you sure you want to delete this coupon ?')
    if (confirmation) {
      const newCoupon = oldUsedCoupon.filter(coupon => coupon.code != code)
      setUsedCoupon(newCoupon)
    }
  }

  useEffect(() => {
    // Recalculate total prices whenever cartCourses changes
    const isVipMembershipInCart = cartCourses.some(course => course.id === 150000)

    const prices = cartCourses.map(course => {
      // Determine the correct price based on discount eligibility and VIP status
      let finalPrice
      if (isDiscountActive(course)) {
        finalPrice =
          user?.data?.isVipValid || isVipMembershipInCart
            ? course.discountVipPrice || course.discountPrice
            : course.discountPrice
      } else {
        finalPrice =
          user?.data?.isVipValid || isVipMembershipInCart ? course.vipPrice || course.regularPrice : course.regularPrice
      }

      return finalPrice
    })

    const newSubTotal = prices.reduce((acc, price) => acc + price, 0)

    setCartSubTotal(newSubTotal)

    const totalDiscount = calculateTotalCouponDiscount() // This function needs to calculate the discount based on the subtotalt
    setCartTotal(newSubTotal - totalDiscount)

    // If VIP membership is no longer in the cart, switch pricing back to regular
    if (!isVipMembershipInCart) {
      setIsVIP(false)
    }
  }, [cartCourses, user?.data?.isVipValid, usedCoupon]) // Include `usedCoupon` if coupons affect pricing

  useEffect(() => {
    if (cartCourses.length) {
      setLoading(true)
      dispatch(verifyReferralCode({ referral: referral, user: email }))
    }
  }, [])

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
                  <input type='text' onChange={e => setCoupon(e.target.value)} className='form-control FNV-Text' />
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

          {cartCourses.map(cycle => (
            <div key={cycle.id} className='row FNV-CartItems'>
              <div className='col-3 col-md-2'>
                <img src={cycle?.course?.image} className='img-fluid' />
              </div>

              <div className='col-9 col-md-10'>
                <div className='row'>
                  <div className='col-10 col-md-8'>
                    <div className='row'>
                      <p>{cycle.name}</p>
                    </div>

                    <div className='row'>
                      <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnMedium'>
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
                        cycle.id != 150000 &&
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
            <div className='col-md-4'>
              <button type='button' onClick={handelClearCart} className='FNV-Btn BtnOutline SecondaryColor BtnMedium'>
                <i data-feather='trash'></i> {t('cart-head-cart-clear')}
              </button>
            </div>
            <div className='col-md-8'>
              <div className='row'>
                <div className='col-md-6'>
                  <span>{t('cart-head-coupon-head')}</span>
                </div>
                <div className='col-md-6'>
                  <div className='row'>
                    <div className='col-7 col-md-6'>
                      <input type='text' onChange={e => setCoupon(e.target.value)} className='form-control FNV-Text' />
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

          <div className='row FNV-Terms'>
            <div className='col-md-12'>
              <Box sx={{ marginBottom: '2rem', padding: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant='h6' gutterBottom>
                  {t('agree-following-terms')}
                </Typography>
                <FormControlLabel
                  control={<Checkbox name='checkbox1' checked={checkboxes.checkbox1} onChange={handleChangeCheckBox} />}
                  label={t('agree-terms-first')}
                />
                <FormControlLabel
                  control={<Checkbox name='checkbox2' checked={checkboxes.checkbox2} onChange={handleChangeCheckBox} />}
                  label={t('agree-terms-second')}
                />
                <FormControlLabel
                  control={<Checkbox name='checkbox3' checked={checkboxes.checkbox3} onChange={handleChangeCheckBox} />}
                  label={t('agree-terms-third')}
                />
                <FormControlLabel
                  control={<Checkbox name='checkbox4' checked={checkboxes.checkbox4} onChange={handleChangeCheckBox} />}
                  label={t('agree-terms-fourth')}
                />
              </Box>

              <div className='col-md-12 d-flex justify-content-end gap-2'>
                {email ? (
                  cartTotal > 0 ? (
                    <>
                      {partially && (
                        <button
                          disabled={!allChecked}
                          onClick={handelInitiatePartiallyPayment}
                          className='FNV-Btn BtnOutline SecondaryColor BtnXLarge'
                        >
                          {t('cart-partial-button')}
                        </button>
                      )}
                      {checkout && stripePay && clientSecret ? (
                        <Elements options={options} stripe={stripePromise}>
                          <CheckoutForm
                            allChecked={allChecked}
                            items={cartCourses}
                            user={email}
                            coupon={coupon}
                            fullName={fullName}
                          />
                        </Elements>
                      ) : (
                        <button
                          disabled={!allChecked}
                          onClick={handelInitiatePayment}
                          className='FNV-Btn SecondaryColor BtnXLarge'
                        >
                          {t('cart-full-payment-button')}
                        </button>
                      )}
                    </>
                  ) : (
                    <button onClick={handleEnrollNow} disabled={!allChecked} className='FNV-Btn BtnPrimary BtnXLarge'>
                      Enroll Now
                    </button>
                  )
                ) : (
                  <Link href='/login/?returnUrl=cart' className='FNV-Btn BtnPrimary BtnMedium'>
                    Login
                  </Link>
                )}
              </div>

              <Link href='/courses' className='d-block text-center mt-2'>
                Apply for other courses
              </Link>
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
