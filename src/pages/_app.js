import React, { useEffect, useState } from 'react'

// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import { useRouter } from 'next/router'
import MainLayout from 'src/layouts/MainLayout'
import nextI18NextConfig from 'src/configs/i18n'

// ** Store Imports
import { store } from 'src/store'
import { Provider } from 'react-redux'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'

// ** Config Imports
import 'src/configs/i18n'
import { defaultACLObj } from 'src/configs/acl'
import themeConfig from 'src/configs/themeConfig'

// ** Third Party Import
import { Toaster } from 'react-hot-toast'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import AclGuard from 'src/@core/components/auth/AclGuard'
import ThemeComponent from 'src/@core/theme/ThemeComponent'
import AuthGuard from 'src/@core/components/auth/AuthGuard'
import GuestGuard from 'src/@core/components/auth/GuestGuard'
import WindowWrapper from 'src/@core/components/window-wrapper'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Contexts
import { AuthProvider } from 'src/context/AuthContext'
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Styled Components
import ReactHotToast from 'src/@core/styles/libs/react-hot-toast'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** Prismjs Styles
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'src/iconify-bundle/icons-bundle-react'

// ** Global css styles
import './global.css'
import '../../styles/globals.css'
import '../../styles/main.css'
import '../../styles/main.scss'
import '../../styles/_root.scss'
import '../../styles/_button.scss'
import '../../styles/_events.scss'
import '../../styles/_footer.scss'
import '../../styles/_header.scss'
import '../../styles/_membership.scss'
import '../../styles/_variables.scss'
import '../../styles/_courses.scss'
import '../../styles/_cart.scss'
import '../../styles/_single-course.scss'
import '../../styles/_alert.scss'
import '../../styles/_homeCategory.scss'
import '../../styles/_social.scss'
import '../../styles/_youtube.scss'
import '../../styles/_content.scss'
import 'bootstrap/dist/css/bootstrap.css'

// ** Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const Guard = ({ children, authGuard, guestGuard }) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  }
}

// ** Configure JSS & ClassName
const App = props => {
  const [redirectUri, setRedirectUri] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setRedirectUri(window.location.origin)
  }, [])

  useEffect(() => {
    const lng = localStorage.getItem('i18nextLng' || 'en')
    document.documentElement.dir = lng === 'fa' ? 'rtl' : 'ltr'
    setLoading(false)
  }, [])

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle')
  }, [])

  const { Component, emotionCache = clientSideEmotionCache, session, ...pageProps } = props

  // Variables
  const contentHeightFixed = Component.contentHeightFixed ?? false

  const router = useRouter()

  const getLayout = router.pathname.startsWith('/app')
    ? Component.getLayout ?? (page => <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>)
    : Component.getLayout ?? (page => <MainLayout>{page}</MainLayout>)

  const setConfig = Component.setConfig ?? undefined
  const authGuard = false
  const guestGuard = Component.guestGuard ?? false
  const aclAbilities = Component.acl ?? defaultACLObj

  if (loading) return <Spinner />

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>
            {pageProps.post
              ? pageProps.post.metaTitle
              : `${themeConfig.templateName} - Institute of Technology and Engineering`}
          </title>
          <meta
            name='description'
            content={
              pageProps.post
                ? pageProps.post.metaDescription
                : `${themeConfig.templateName} – Our main goal at Fanavaran Technical and Engineering Institute is to provide quality education for Iranian immigrants in Canada to advance their careers and obtain the required licenses.`
            }
          />
          <meta
            name='keywords'
            content={
              pageProps.post
                ? pageProps.post.keywords
                : 'Fanavaran, Engineering, Mechanical, Plumbing, Electrician, Architectural'
            }
          />
          <meta
            property='og:title'
            content={
              pageProps.post
                ? pageProps.post.metaTitle
                : `${themeConfig.templateName} - Institute of Technology and Engineering`
            }
          />
          <meta
            property='og:description'
            content={
              pageProps.post
                ? pageProps.post.metaDescription
                : `${themeConfig.templateName} – Our main goal at Fanavaran Technical and Engineering Institute is to provide quality education for Iranian immigrants in Canada to advance their careers and obtain the required licenses.`
            }
          />
          <meta property='og:image' content={pageProps.post ? pageProps.post.image : '/default-image.jpg'} />
          <meta
            property='og:url'
            content={pageProps.post ? `https://fanavaran.ca/blog/${pageProps.post.slug}` : 'https://fanavaran.ca'}
          />
          <meta property='og:type' content='article' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='twitter:title'
            content={
              pageProps.post
                ? pageProps.post.metaTitle
                : `${themeConfig.templateName} - Institute of Technology and Engineering`
            }
          />
          <meta
            name='twitter:description'
            content={
              pageProps.post
                ? pageProps.post.metaDescription
                : `${themeConfig.templateName} – Our main goal at Fanavaran Technical and Engineering Institute is to provide quality education for Iranian immigrants in Canada to advance their careers and obtain the required licenses.`
            }
          />
          <meta name='twitter:image' content={pageProps.post ? pageProps.post.image : '/default-image.jpg'} />
          <meta property='og:site_name' content='Fanavaran' />
          <meta
            property='og:image:alt'
            content={
              pageProps.post
                ? pageProps.post.metaTitle
                : `${themeConfig.templateName} - Institute of Technology and Engineering`
            }
          />
           <script async src="https://www.googletagmanager.com/gtag/js?id=GT-KT42WV2"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GT-KT42WV2');
            `}
          </script>
        </Head>
        <AuthProvider>
          <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <ThemeComponent settings={settings}>
                    <WindowWrapper>
                      <Guard guestGuard={guestGuard}>
                        <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard}>
                          {getLayout(<Component {...pageProps} />)}
                        </AclGuard>
                      </Guard>
                    </WindowWrapper>
                    <ReactHotToast>
                      <Toaster position={settings.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
                    </ReactHotToast>
                  </ThemeComponent>
                )
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </AuthProvider>
      </CacheProvider>
    </Provider>
  )
}

export default App
