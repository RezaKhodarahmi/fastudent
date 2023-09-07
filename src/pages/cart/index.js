import React, { useState, useEffect } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './checkout'
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

// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(themeConfig.stripePublicKey)

const Index = () => {
  //initial state
  const cartCoupon = [{ code: null, discount: null }]

  //Set states
  const dispatch = useDispatch()
  const [cartCourses, setCartCourses] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [cartSubTotal, setCartSubTotal] = useState(0)
  const [clientSecret, setClientSecret] = useState(null)
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
  //Hooks
  const courses = useSelector(state => state.course)
  const appliedCoupon = useSelector(state => state.coupon)
  const referralDiscount = useSelector(state => state.referral)
  const user = useSelector(state => state.user)
  //Get the cart item's from the API
  useEffect(() => {
    const cartItems = window.localStorage.getItem('cartItems')
    if (cartItems != 'null' && cartItems?.length > 0) {
      dispatch(getCartItems(cartItems))
    }
    setEmail(JSON.parse(localStorage.getItem('userData')) || null)
    setFullName(JSON.parse(localStorage.getItem('userName')) || null)
  }, [])
  //give the user info
  useEffect(() => {
    if (email) {
      dispatch(fetchVipData())
    }
  }, [email])

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
    if (cartTotal > 0) {
      if (clientSecret === null) {
        if (cartCourses.length && email) {
          const token = window.localStorage.getItem('accessToken')
          // Create PaymentIntent as soon as the page loads
          fetch(`${BASE_URL}/student/transaction/create-payment-intent`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ items: cartCourses, email: email, coupon: usedCoupon, referralUser: referralUser })
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)

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
    if (!coupon) {
      window.alert('Please insert a valid coupon!')
    } else {
      if (cartCourses.length) {
        setLoading(true)
        dispatch(verifyCouponCode({ coupon: coupon, user: email, cycles: cartCourses, referred: referralUser }))
      } else {
        window.alert('Cart is empty!')
      }
    }
  }
  const applyReferralHandler = e => {
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
  const handelRemoveItem = id => {
    if (cartCourses.length) {
      const confirmation = window.confirm('Are you sure you want to delete this item from the cart?')
      if (confirmation) {
        // Filter the cartCourses array based on the id
        const newItems = cartCourses.filter(item => item.course.id !== id)

        // Update the local storage with the updated cart items
        const updatedCartItems = newItems.map(item => ({
          id: item.course.id
          // Add other necessary properties from the item object
          // For example: title, image, regularPrice, etc.
        }))
        if (updatedCartItems.length) {
          localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
        } else {
          localStorage.setItem('cartItems', null)
        }

        // Update the state with the new items
        setCartCourses(newItems)
        setCoupon(null)
        setCouponDiscountAmount(null)
        setCouponDiscount(null)
        setUsedCoupon(cartCoupon)
        setCheckout(false)
        setCartSubTotal(0)
        setCartTotal(0)

        const prices = newItems.map(item => item?.regularPrice || 0)
        const sumOfCoursePrice = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

        setCartTotal(sumOfCoursePrice)
        setCartSubTotal(sumOfCoursePrice)
      }
    } else {
      window.alert('Cart is Empty')
    }
  }
  // Function to calculate the total coupon discount
  const calculateTotalCouponDiscount = () => {
    let totalDiscount = 0

    if (cartCourses.length > 0) {
      usedCoupon?.forEach(coupon => {
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
    }

    return totalDiscount
  }

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
    if (courses?.data?.data) {
      setCartCourses(courses?.data?.data)
      var prices = 0
      if (user?.data?.isVipValid) {
        setIsVIP(true)
        prices = Array.isArray(courses?.data?.data)
          ? courses.data.data.map(item => item?.vipPrice || item?.vipPrice == 0)
          : 0
      } else {
        prices = Array.isArray(courses?.data?.data)
          ? courses.data.data.map(item => item?.regularPrice || item?.regularPrice == 0)
          : 0
      }

      const sumOfCoursePrice = Array.isArray(prices)
        ? prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        : 0
      setCartTotal(sumOfCoursePrice)
      setCartSubTotal(sumOfCoursePrice)
    }
  }, [courses, setCartCourses, setCartTotal, user])

  const handelRemoveCoupon = code => {
    const oldUsedCoupon = [...usedCoupon]
    const confirmation = window.confirm('Are you sure you want to delete this coupon ?')
    if (confirmation) {
      const newCoupon = oldUsedCoupon.filter(coupon => coupon.code != code)
      setUsedCoupon(newCoupon)
    }
  }
  const handelRemoveVip = code => {
    const oldUsedCoupon = [...usedCoupon]
    const newCoupon = oldUsedCoupon.filter(coupon => coupon.code != code)
    setUsedCoupon(newCoupon)
  }
  useEffect(() => {
    if (cartCourses.length) {
      setLoading(true)
      dispatch(verifyReferralCode({ referral: referral, user: email }))
    }
  }, [])
  return (
    <div className='FNV-Cart'>
      <section className='FNV-Header'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>Cart ( {cartCourses?.length || 0} Items )</h2>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Cart-Detail'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-8'>
              <div className='FNV-Coupon'>
                <div className='accordion' id='CouponCodeSection'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#CouponForm'
                        aria-controls='CouponForm'
                      >
                        Do you have coupon code ?
                      </button>
                    </h2>
                    <div
                      id='CouponForm'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#CouponCodeSection'
                    >
                      <div className='accordion-body'>
                        <div className='row'>
                          <div className='col-7 col-md-6'>
                            <input type='text' onChange={e => setCoupon(e.target.value)} className='form-control' />
                          </div>

                          <div className='col-5 col-md-6'>
                            <input
                              type='button'
                              onClick={applyCouponHandler}
                              className='FNV-Btn BtnPrimary BtnMedium'
                              value='Apply Coupon'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='FNV-Cart-Header container-fluid'>
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <h3>
                      <i data-feather='shopping-bag'></i> My Cart
                    </h3>
                  </div>

                  <div className='col-12 col-md-6 d-flex justify-content-end'>
                    <a href='#' className='FNV-Btn'>
                      <i data-feather='heart'></i> Move All to WishList
                    </a>
                    <button type='button' onClick={handelClearCart} className='FNV-Btn'>
                      <i data-feather='trash'></i> Remove All
                    </button>
                  </div>
                </div>
              </div>

              <div className='FNV-Cart'>
                <div className='FNV-Cart-Content'>
                  <div className='FNV-Cart-Content-Header'>
                    <div className='row'>
                      <div className='col-4'>Item</div>
                      <div className='col-2'>Regular Price</div>
                      <div className='col-2'>Members Price</div>
                      <div className='col-2'>Total</div>
                      <div className='col-2'></div>
                    </div>
                  </div>

                  <div className='FNV-Cart-Content-Body'>
                    {cartCourses.length > 0
                      ? cartCourses?.map(course => (
                          <div key={course?.course?.id} className='row p-3'>
                            <div className='col-4'>
                              <div className='row'>
                                <div className='col-4'>
                                  <img width={100} src={course?.course?.image} className='img-fluid' />
                                </div>
                                <div className='col-8'>
                                  <h4>{course.course?.title}</h4>
                                </div>
                              </div>
                            </div>
                            <div className='col-2'>
                              <div className='FNV-Cart-Price'>
                                <span>${course?.regularPrice || 0}</span>
                              </div>
                            </div>
                            <div className='col-2'>
                              <div className='FNV-Cart-Price'>
                                {isVIP ? (
                                  <span>${course?.vipPrice || 0}</span>
                                ) : (
                                  <>
                                    <span style={{ textDecoration: 'line-through', fontWeight: '900' }}>
                                      ${course?.vipPrice || 0}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                            <div className='col-2'>
                              <div className='FNV-Cart-Total'>
                                {isVIP ? (
                                  <span>${course?.vipPrice || 0}</span>
                                ) : (
                                  <span>${course?.regularPrice || 0}</span>
                                )}
                              </div>
                            </div>
                            <div className='col-2'>
                              <div className='FNV-Cart-Total'>
                                <span
                                  onClick={e => handelRemoveItem(course.course?.id)}
                                  style={{ color: 'red', fontWeight: 'bold', cursor: 'pointer' }}
                                >
                                  X
                                </span>
                              </div>
                            </div>
                          </div>
                        ))
                      : 'Cart is empty'}
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-4 d-sm-none d-md-block'>
              <div className='FNV-Coupon'>
                <div className='accordion' id='ReferrCodeSection'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#RefferForm'
                        aria-controls='ReferralForm'
                      >
                        Do you have Referral code ?
                      </button>
                    </h2>
                    <div
                      id='RefferForm'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#ReferrCodeSection'
                    >
                      <div className='accordion-body'>
                        <div className='row'>
                          <div className='col-7 col-md-6'>
                            <input type='text' onChange={e => setReferral(e.target.value)} className='form-control' />
                          </div>

                          <div className='col-5 col-md-6'>
                            <input
                              type='button'
                              onClick={applyReferralHandler}
                              className='FNV-Btn BtnPrimary BtnMedium'
                              value='Apply Code'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='FNV-Cart-Direct'>
                <h5 className='d-flex justify-content-between'>
                  Subtotal: <span>${cartSubTotal || 0}</span>
                </h5>

                <h5 className='d-flex justify-content-between'>
                  Tax: <span>$0</span>
                </h5>
                {usedCoupon
                  ? usedCoupon.map((coupon, index) =>
                      coupon.code ? (
                        <h6 key={index} className='d-flex justify-content-between'>
                          Coupon:{coupon.code}
                          <span>{coupon.discount}</span>
                          <span
                            onClick={e => handelRemoveCoupon(coupon.code)}
                            style={{ color: 'red', cursor: 'pointer' }}
                          >
                            Remove
                          </span>
                        </h6>
                      ) : null
                    )
                  : null}

                <h5 className='d-flex justify-content-between FNV-Total'>
                  Total: <span>${cartTotal || 0}</span>
                </h5>

                {email ? (
                  checkout && clientSecret ? (
                    <Elements options={options} stripe={stripePromise}>
                      <CheckoutForm items={cartCourses} user={email} coupon={coupon} fullName={fullName} />
                    </Elements>
                  ) : (
                    <button onClick={handelInitiatePayment} className='FNV-Btn BtnPrimary BtnMedium'>
                      Checkout
                    </button>
                  )
                ) : (
                  <Link href='/login/?returnUrl=cart' className='FNV-Btn BtnPrimary BtnMedium'>
                    Login
                  </Link>
                )}

                <a href='/courses' className='d-block text-center mt-2'>
                  Apply for other courses
                </a>
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
        <div className='offcanvas-body'>
          <h5>Fanavaran Sections</h5>

          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Engineering</li>
            <li className='list-group-item'>Project Management</li>
            <li className='list-group-item'>Architect</li>
            <li className='list-group-item'>Technician</li>
            <li className='list-group-item'>Job Seeker</li>
            <li className='list-group-item'>Freelancer</li>
            <li className='list-group-item'>Plumbing</li>
            <li className='list-group-item'>Electrician</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
Index.guestGuard = true
export default Index
