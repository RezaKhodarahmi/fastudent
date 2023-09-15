import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { paymentResult } from 'src/store/apps/stripe'
import Link from 'next/link'

const Index = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [paymentIntent, setPaymentIntent] = useState(null)
  useEffect(() => {
    const { payment_intent } = router.query
    if (payment_intent) {
      setPaymentIntent(payment_intent)
    }
  }, [router])

  useEffect(() => {
    if (paymentIntent != null) {
      dispatch(paymentResult({ paymentIntentId: paymentIntent }))
      window.localStorage.setItem('cartItems', null)
      window.localStorage.setItem('appliedCoupon', null)
    }
  }, [paymentIntent])

  return (
    <div className='FNV-Cart'>
      <section className='FNV-Header'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>Order Success: Thank You for Your Purchase</h2>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Content-Detail py-4'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-sm-12 col-md-8'>
              <div className='FNV-Card-Header container-fluid'>
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <h3>
                      <i data-feather='check-circle'></i> Order Success
                    </h3>
                  </div>
                </div>
              </div>

              <div className='FNV-Card'>
                <div className='FNV-Card-Content'>
                  <h4 className='text-center py-5'>Thank You for Your Purchase</h4>

                  <div className='FNV-Card-Content-Body d-flex justify-content-center flex-column align-items-center'>
                    <p>
                      Congratulations! Your payment has been successfully processed, and we sincerely thank you for
                      choosing Fanavaran for your purchase. We greatly appreciate your trust in our courses.
                    </p>
                    <p>
                      For any inquiries or assistance, contact our support team at{' '}
                      <a href='tel:+16473552255'>647 355 2255</a>
                    </p>
                    <Link href='/' className='FNV-Btn BtnOutline PrimaryColor w-25'>
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Index.guestGuard = true

export default Index
