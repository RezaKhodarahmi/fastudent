import React, { useEffect, useState } from 'react'
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
  AddressElement
} from '@stripe/react-stripe-js'
import { appConfig } from 'src/configs/appConfig'

export default function CheckoutForm(props) {
  //Set state's
  const { user, fullName, termsChecked } = props
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  //Hooks
  const stripe = useStripe()
  const elements = useElements()
  useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret')

    if (!clientSecret) {
      return
    }

    //Handel Payment messages
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!')
          break
        case 'processing':
          setMessage('Your payment is processing.')
          break
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.')
          break
        default:
          setMessage('Something went wrong.')
          break
      }
    })
  }, [stripe])

  //Initialing Payment
  const handleSubmit = async e => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${appConfig.appUrl}/thank-you/`
        }
      })

      if (error && (error.type === 'card_error' || error.type === 'validation_error')) {
        setMessage(error.message)
      } else if (paymentIntent) {
        if (response.ok) {
          setMessage('Payment succeeded!')
        } else {
          setMessage('An error occurred during payment confirmation.')
        }
      } else {
        setMessage('An unexpected error occurred.')
      }
    } catch (error) {
      setMessage('An error occurred during payment confirmation.')
    }

    setIsLoading(false)
  }

  //Stripe Config
  const paymentElementOptions = {
    layout: 'tabs'
  }

  return (
    <>
      {user ? (
        <form id='payment-form' onSubmit={handleSubmit}>
          <LinkAuthenticationElement id='link-authentication-element' options={{ defaultValues: { email: user } }} />
          <PaymentElement id='payment-element' options={paymentElementOptions} />
          <AddressElement
            options={{
              mode: 'billing',
              defaultValues: { name: fullName }
            }}
          />

          <button
            disabled={isLoading || !stripe || !elements || !termsChecked}
            id='submit'
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

          {/* Show any error or success messages */}
          {message && <div id='payment-message'>{message}</div>}
        </form>
      ) : null}
    </>
  )
}
