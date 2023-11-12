// ** React Imports
import { useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Hook Imports
import { useAuth } from 'src/hooks/useAuth'

/**
 *  Set Home URL based on User Roles
 */
export const getHomeRoute = Roles => {
  if (Roles === 'client') return '/app/acl'
  else return '/app/dashboards/main'
}

const Home = () => {
  // ** Hooks
  const auth = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (auth.user) {
      const homeRoute = getHomeRoute(auth.user.Roles)

      // Redirect user to Home URL
      router.replace(homeRoute)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Spinner sx={{ height: '100%' }} />
}

export default Home
