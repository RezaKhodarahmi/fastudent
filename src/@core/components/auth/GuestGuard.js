// ** React Imports
import { useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'src/hooks/useAuth'
import Spinner from 'src/@core/components/spinner'

const GuestGuard = props => {
  const { children, fallback } = props
  const auth = useAuth()
  const router = useRouter()
  if (auth.loading) {
    return <Spinner />
  }
  return <>{children}</>
}

export default GuestGuard
