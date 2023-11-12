// ** React Imports
import { useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'src/hooks/useAuth'
import Spinner from 'src/@core/components/spinner'

const AuthGuard = props => {
  const { children, fallback } = props
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady || auth.loading) {
      return
    }
    if (auth.user === null && !window.localStorage.getItem('userData')) {
      if (router.asPath !== '/') {
        router.replace({
          pathname: '/login',
          query: { returnUrl: router.asPath }
        })
      } else {
        router.replace('/login')
      }
    }
  }, [router.route, router, auth.loading, auth.user])

  if (auth.loading) {
    return <Spinner />
  }

  if (auth.user === null) {
    return fallback
  }

  return <>{children}</>
}

export default AuthGuard
