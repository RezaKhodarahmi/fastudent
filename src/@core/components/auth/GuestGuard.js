// ** React Imports
import { useEffect } from 'react'

// ** Hooks Import
import { useAuth } from 'src/hooks/useAuth'
import Spinner from 'src/@core/components/spinner'

const GuestGuard = props => {
  const { children, fallback } = props
  const auth = useAuth()

  if (auth.loading) {
    return <Spinner />
  }

  return <>{children}</>
}

export default GuestGuard
