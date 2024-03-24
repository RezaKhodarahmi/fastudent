import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getWebinarWithSlug, enrollUser } from 'src/store/apps/webinar'
import { Box, Card, Typography, Button, Container, CardContent, Grid } from '@mui/material'
import { Helmet } from 'react-helmet'
import DOMPurify from 'dompurify'
import feather from 'feather-icons'
import toast from 'react-hot-toast'

const SingleWebinar = () => {
  const [webinar, setWebinar] = useState(null)
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
      setLoading(true)
    }
  }, [slug, userLoggedIn])

  useEffect(() => {
    setLoading(false)
    if (webinarData?.data?.data) {
      setWebinar(webinarData.data.data[0])
      setEnrolled(webinarData.data.enrolled)
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
        console.error('Enrollment failed:', error)
        toast.error('Failed to enroll in the webinar.')
        setEnrollButtonDisabled(false) // Re-enable if there was an error
      })
  }

  const redirectToLogin = () => {
    router.push('/login?returnUrl=/services/educational-and-career-counseling')
  }

  if (loading) {
    return <Typography>Loading...</Typography>
  }

  if (!webinar) {
    return <Typography variant='h6'>Webinar not found</Typography>
  }

  // Helper function to generate icons with specified attributes
  const generateIconHTML = (iconName, attrs = {}) => {
    return { __html: feather.icons[iconName].toSvg({ ...attrs, style: `color: #003BBF; ${attrs.style || ''}` }) }
  }

  return (
    <Container maxWidth='md' sx={{ my: 4 }}>
      <Helmet>
        <title>{webinar.title}</title>
      </Helmet>

      <Card raised sx={{ p: 2, borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
        <Box sx={{ textAlign: 'center' }}>
          {webinar.video ? (
            <video controls src={webinar.video} style={{ width: '100%', borderRadius: '16px' }} />
          ) : (
            <img
              src={webinar.image}
              alt='Webinar'
              style={{ width: '50%', maxHeight: '500px', objectFit: 'cover', margin: 'auto' }}
            />
          )}
        </Box>
        <CardContent sx={{ mt: 2, direction: 'ltr' }}>
          <Typography dir='rtl' gutterBottom variant='h4' component='div' sx={{ textAlign: 'center' }}>
            {webinar.title}
          </Typography>
          <Box sx={{ backgroundColor: '#003BBF', p: 2, borderRadius: '16px' }}>
            <Grid container spacing={2} justifyContent='center'>
              {/* Date */}
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFF',
                    padding: 2,
                    borderRadius: '8px'
                  }}
                >
                  <Box
                    sx={{ textAlign: 'center', marginRight: 2 }}
                    dangerouslySetInnerHTML={generateIconHTML('calendar')}
                  />
                  <Typography variant='body1' gutterBottom sx={{ color: '#003BBF' }}>
                    {new Date(webinar.date).toLocaleDateString()}
                  </Typography>
                </Box>
              </Grid>
              {/* Time */}
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFF',
                    padding: 2,
                    borderRadius: '8px'
                  }}
                >
                  <Box
                    sx={{ textAlign: 'center', marginRight: 2 }}
                    dangerouslySetInnerHTML={generateIconHTML('clock')}
                  />
                  <Typography variant='body1' gutterBottom sx={{ color: '#003BBF' }}>
                    {new Date(`2023-01-01T${webinar.time}`).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </Typography>
                </Box>
              </Grid>
              {/* Instructor */}
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFF',
                    padding: 2,
                    borderRadius: '8px'
                  }}
                >
                  <Box
                    sx={{ textAlign: 'center', marginRight: 2 }}
                    dangerouslySetInnerHTML={generateIconHTML('user')}
                  />
                  <Typography variant='body1' gutterBottom sx={{ color: '#003BBF' }}>
                    {webinar.instructor}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Typography
            variant='body1'
            gutterBottom
            sx={{ mt: 2, color: '#000', textAlign: 'center' }}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(webinar.description) }}
          />
          <Box mt={2} display='flex' justifyContent='center'>
            {enrolled || enrollButtonDisabled ? (
              <Button variant='contained' disabled>
                Enrolled
              </Button>
            ) : userLoggedIn ? (
              <Button variant='contained' color='primary' onClick={handleEnroll}>
                Enroll
              </Button>
            ) : (
              <Button variant='contained' color='secondary' onClick={redirectToLogin}>
                Login to Enroll
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

SingleWebinar.guestGuard = true

export default SingleWebinar
