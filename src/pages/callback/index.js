import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth0 } from '@auth0/auth0-react'

const Callback = () => {
  const { handleRedirectCallback } = useAuth0()
  const router = useRouter()

  useEffect(() => {
    const processAuth = async () => {
      await handleRedirectCallback()
      router.push('/secure-page') // Redirect to a secured page after handling the callback
    }
    processAuth()
  }, [])

  return <div>Loading...</div>
}

Callback.guestGuard = true

export default Callback
