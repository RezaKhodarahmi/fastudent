import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getWebinarWithSlug, enrollUser } from 'src/store/apps/webinar'
import { Box, Card, Typography, Button, Container, CardContent, Grid } from '@mui/material'
import { Helmet } from 'react-helmet'
import DOMPurify from 'dompurify'
import feather from 'feather-icons'
import toast from 'react-hot-toast'
import Spinner from 'src/@core/components/spinner'

// ** Import translation
import { useTranslation } from 'react-i18next'

const SingleWebinar = () => {

  const timer = setTimeout(() => {
    if (typeof feather !== 'undefined' && feather !== null) {
      feather.replace()
    }
  }, 1000) // 1 second delay

  //Hooks
  const { t } = useTranslation()

  const [webinar, setWebinar] = useState(null)
  const [notFoundError, setNotFoundError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [enrolled, setEnrolled] = useState(false)
  const [enrollButtonDisabled, setEnrollButtonDisabled] = useState(false)

  const dispatch = useDispatch()
  const router = useRouter()
  const { slug } = router.query
  const webinarData = useSelector(state => state.webinar)
  const userLoggedIn = localStorage.getItem('userData') || null

  useEffect(() => {
    if (slug) {
      dispatch(getWebinarWithSlug({ slug: slug, email: userLoggedIn ? JSON.parse(userLoggedIn) : null }))
    }
  }, [slug, userLoggedIn])

  useEffect(() => {
    if (webinarData?.data?.data) {
      setWebinar(webinarData.data.data[0])
      setEnrolled(webinarData.data.enrolled)
      setLoading(false)
    } else if (webinarData?.error?.status === 404) {
      setNotFoundError(true)
      setLoading(false)
    } else if (webinarData?.error?.status === 500) {
      window.alert('ERROR')
      setLoading(false)
    }
  }, [webinarData])

  const handleEnroll = () => {
    setEnrollButtonDisabled(true) // Disable the button immediately to prevent multiple clicks
    dispatch(enrollUser({ id: webinar.id, email: JSON.parse(userLoggedIn) }))
      .then(() => {
        toast.success('Successfully enrolled in the webinar!')
        setEnrolled(true) // Update enrolled state
      })
      .catch(error => {
        toast.error('Failed to enroll in the webinar.')
        setEnrollButtonDisabled(false) // Re-enable if there was an error
      })
  }

  const redirectToLogin = () => {
    router.push('/login?returnUrl=/services/educational-and-career-counseling')
  }

  if (loading) return <Spinner />

  if (notFoundError) {
    router.push('/404')
  }

  // Helper function to generate icons with specified attributes
  const generateIconHTML = (iconName, attrs = {}) => {
    return { __html: feather.icons[iconName].toSvg({ ...attrs, style: `color: #003BBF; ${attrs.style || ''}` }) }
  }

  const handelStatus = webinar => {
    switch (webinar.status) {
      case 1:
        return t('webinar-home-status-active');
        break
      case '2':
        return t('webinar-home-status-recorded');
        break
      case '3':
        return t('webinar-home-status-postponed');
        break
      default:
        return t('webinar-home-status-not-active');
    }
  }

  const handelType = webinar => {
    switch (webinar.type) {
      case 1:
        return '$' + webinar.regularPrice + ' ' + 'CAD'
        break
      case 2:
        return 'Free'
        break
      default:
        return 'Free'
    }
  }

  return (
    <>
      <section className='FNV-SingleWebinar'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              {webinar.video ? (
                <iframe
                  width='560'
                  height='315'
                  src={webinar.video}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerpolicy='strict-origin-when-cross-origin'
                  allowfullscreen
                ></iframe>
              ) : (
                <img
                  src={webinar.image}
                  alt='Webinar'
                  className='img-fluid'
                />
              )}
            </div>
            <div className='col-12 col-md-6'>
              <badge className='PrimaryColor'>{handelType(webinar)}</badge>
              <badge className='SecondaryColor'>{handelStatus(webinar)}</badge>
              <h1>{webinar.title}</h1>

              <h2>
                <span>{t('single-webinar-instructor')}:</span> 
                <span>{webinar.instructor}</span>
              </h2>

              <p>
                <i data-feather='calendar'></i> 

                {t('single-webinar-startingdate')} : {webinar.date}
              </p>

              <p>
                <i data-feather='clock'></i> 

                {t('single-webinar-startingtime')} :
                <span>
                  {new Date(`2023-01-01T${webinar.time}`).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </p>

              {/* <Typography
                variant='p'
                gutterBottom
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(webinar.description) }}
              /> */}

              {webinar.video ? (
                <p>The registration deadline for this webinar is over</p>
              ) : (
                <Box mt={2} display='flex' justifyContent='center'>
                  {enrolled || enrollButtonDisabled ? (
                    <Button className='FNV-Btn SecondaryColor BtnMedium w-100' disabled>
                      {t('single-webinar-enrolled')}
                    </Button>
                  ) : userLoggedIn ? (
                    <Button className='FNV-Btn SecondaryColor BtnMedium w-100' onClick={handleEnroll}>
                      {t('single-webinar-enroll')}
                    </Button>
                  ) : (
                    <Button className='FNV-Btn SecondaryColor BtnMedium w-100' onClick={redirectToLogin}>
                      {t('single-webinar-loginenroll')}
                    </Button>
                  )}
                </Box>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

SingleWebinar.guestGuard = true

export default SingleWebinar
