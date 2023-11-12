import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import themeConfig from 'src/configs/themeConfig'
import Link from 'next/link'
import BASE_URL from 'src/api/BASE_URL'

const stripePromise = loadStripe(themeConfig.stripePublicKey)

const StripeCheckoutButton = () => {
  //set state

  const [email, setEmail] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const userEmail = window.localStorage.getItem('userData')
    const email = JSON.parse(userEmail)
    setEmail(email)
  }, [])

  const buyMembership = async () => {
    setIsLoading(true)

    try {
      const token = window.localStorage.getItem('accessToken')

      // Fetch the session ID from your backend
      const response = await fetch(`${BASE_URL}/student/membership/buy/${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      const { sessionId } = await response.json()

      const stripe = await stripePromise

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId
      })

      if (error) {
        console.error(error)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='FNV-Membership'>
      <section className='FNV-Header'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1>Fanavaran Membership</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Membership-Page'>
        <div className='container'>
          <div className='row'>
            <div class="col-12 col-md-6">
              <div className='card'>
                <div className='card-body'>
                  <h2 className='card-title'>Want to take your career to the next level? Join the club.</h2>
                  <p className='card-text'>Enjoy exclusive benefits with our VIP membership.</p>
                  <p className='card-text mt-3'>
                    <price>Price: $60 CAD/year</price>
                  </p>
                  {email ? (
                    <button
                      disabled={isLoading}
                      id='submit'
                      onClick={buyMembership}
                      className='FNV-Btn BtnPrimary BtnLarge'
                    >
                      <span id='button-text'>
                        {isLoading ? (
                          <div class='spinner-border' role='status'>
                            <span class='visually-hidden'>Loading...</span>
                          </div>
                        ) : (
                          'Pay now'
                        )}
                      </span>
                    </button>
                  ) : (
                    <Link className='FNV-Btn BtnPrimary BtnLarge' href='/login/?returnUrl=membership/checkout'>
                      Become a Member
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <h3>Become part of a global community dedicated to the advancement of the project management profession and making ideas into reality.</h3>

            <div className='col-12 col-sm-6 col-md-3'>Almost 2k</div>
            <div className='col-12 col-sm-6 col-md-3'>+150</div>
            <div className='col-12 col-sm-6 col-md-3'>$60</div>
            <div className='col-12 col-sm-6 col-md-3'>+500</div>
          </div>
        </div>
      </section>
    </div>
  )
}

StripeCheckoutButton.guestGuard = true

export default StripeCheckoutButton
