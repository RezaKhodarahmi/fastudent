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
      }) // Update the route to point to your API route

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
    <div className='FNV-Cart'>
      <section className='FNV-Header'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>Fanavaran VIP Membership</h2>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage'>
        <div className='container'>
          <div className='row'>
            <div className='card' style={{ width: '18rem' }}>
              <div className='card-body'>
                <h5 className='card-title'>VIP Membership</h5>
                <p className='card-text'>Enjoy exclusive benefits with our VIP membership.</p>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>Sole bullet point</li>
                </ul>
                <p className='card-text mt-3'>
                  <strong>Price: $60 CAD/year</strong>
                </p>
                {email ? (
                  <button
                    disabled={isLoading}
                    id='submit'
                    onClick={buyMembership}
                    className='FNV-Btn BtnPrimary BtnMedium'
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
                  <Link className='btn btn-primary' href='/login/?returnUrl=membership/checkout'>
                    Login or Register
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
StripeCheckoutButton.guestGuard = true
export default StripeCheckoutButton
