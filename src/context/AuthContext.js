// ** React Imports
import { createContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Cookies from 'js-cookie'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  response: null,
  error: null,
  setError: () => null,
  setResponse: () => null,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  verification: () => Promise.resolve(),
  registerPersonalInfo: () => Promise.resolve(),
  requestfpass: () => Promise.resolve(),
  verifyfpass: () => Promise.resolve(),
  resetpass: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem(authConfig.onTokenExpiration)
      if (storedToken) {
        setLoading(true)
        await axios
          .post(authConfig.meEndpoint, {
            refreshToken: storedToken
          })
          .then(async response => {
            setLoading(false)
            setUser({ Roles: response.data.data.role })
            localStorage.setItem('userImage', response.data.data.avatar)
            localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
            Cookies.set(authConfig.storageTokenKeyName, response.data.accessToken)
          })
          .catch(err => {
            localStorage.removeItem('userData')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            localStorage.removeItem('userImage')

            Cookies.remove(authConfig.storageTokenKeyName)
            Cookies.remove('userData')
            setUser(null)
            setLoading(false)
            if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
              router.replace('/login')
            }
          })
      } else {
        setLoading(false)
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (params, errorCallback) => {
    axios
      .post(authConfig.loginEndpoint, params)
      .then(async response => {
        localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
        Cookies.set(authConfig.storageTokenKeyName, response.data.accessToken)
        Cookies.set('userData', JSON.stringify(params.email))
        localStorage.setItem(authConfig.onTokenExpiration, response.data.refreshToken)
        localStorage.setItem('userImage', response.data.data.avatar)

        const returnUrl = router.query.returnUrl
        setUser({ Roles: response.data.data.role })
        localStorage.setItem('userData', JSON.stringify(params.email))
        localStorage.setItem(
          'userName',
          JSON.stringify(response.data.data.firstName + ' ' + response.data.data.lastName)
        )
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        toast.success('Login was successful')

        router.replace(redirectURL)
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
        toast.error(err?.response?.data?.message || 'Email or Password is wrong!')
      })
  }

  const handleLogout = () => {
    const storedToken = localStorage.getItem(authConfig.onTokenExpiration)
    setLoading(true)
    axios
      .delete(authConfig.meEndpoint, {
        data: {
          refreshToken: storedToken
        }
      })
      .then(async response => {
        setLoading(false)
        setUser(null)
        localStorage.removeItem('userData')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('accessToken')
        Cookies.remove(authConfig.storageTokenKeyName)
        Cookies.remove('userData')
        router.replace('/login')
        localStorage.removeItem('userImage')
      })
      .catch(err => {
        console.log(err)
        localStorage.removeItem('userData')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('accessToken')
        setUser(null)
        setLoading(false)
        router.replace('/login')
      })
  }

  const handleRegister = params => {
    setResponse(null)
    axios
      .post(authConfig.registerEndpoint, params, {
        headers: { 'Content-Type': 'application/json', Authorization: true },
        withCredentials: true
      })
      .then(res => {
        setResponse(res)
      })
      .catch(err => {
        setError(err.response.data.message)
        toast.error(err.response.data.message)

        setResponse(null)
      })
  }

  // Verify User Emil with URL token
  const handelVerification = params => {
    setResponse(null)
    axios
      .post(authConfig.verifyRegisterEndpoint, params)
      .then(res => {
        if (!res.data.data.email) {
          router.push('/register')
        } else {
          setResponse(res.data.data)
        }
      })
      .catch(err => {
        setResponse(null)
        router.push('/register')
      })
  }

  // Store user meta after successfull verification
  const handleRegisterInfo = params => {
    console.log(params)
    setResponse(null)
    axios
      .post(authConfig.registerPersonalInfo, params)
      .then(res => {
        setResponse(res.data.user)
      })
      .catch(err => {
        setResponse(null)
      })
  }

  const handleRequestForgetpassword = (params, errorCallback, successCallback) => {
    console.log(params)
    axios
      .post(authConfig.requestfogetpasswordEndpoint, params)
      .then(res => {
        if (res.data.error) {
          if (errorCallback) errorCallback(res.data.error)
        } else {
          successCallback(res.data.message)
        }
      })
      .catch(err => (errorCallback ? errorCallback(err) : null))
  }

  const handleVerifyForgetpassword = (params, errorCallback, successCallback) => {
    axios
      .post(authConfig.verifyfogetpasswordEndpoint, params)
      .then(res => {
        if (res.data.error) {
          setLoading(true)
          router.replace('/500')
          if (errorCallback) errorCallback(res.data.error)
        } else {
          successCallback(res.data.message)
          setLoading(false)
        }
      })
      .catch(err => (errorCallback ? errorCallback(err) : null))
  }

  const handleResetpassword = (params, errorCallback, successCallback) => {
    console.log(params)
    axios
      .post(authConfig.resetpasswordEndpoint, params)
      .then(res => {
        if (res.data.error) {
          if (errorCallback) errorCallback(res.data.error)
        } else {
          successCallback(res.data.message)
        }
      })
      .catch(err => (errorCallback ? errorCallback(err) : null))
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    response,
    setResponse,
    error,
    setError,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
    verification: handelVerification,
    registerPersonalInfo: handleRegisterInfo,
    requestfpass: handleRequestForgetpassword,
    verifyfpass: handleVerifyForgetpassword,
    resetpass: handleResetpassword
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
