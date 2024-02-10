import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getWebinarWithSlug, enrollUser } from 'src/store/apps/webinar'
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid, Paper } from '@mui/material'
import { Helmet } from 'react-helmet'
import SearchBox from 'src/views/searchBar.js'
import DOMPurify from 'dompurify'

const SingleWebinar = () => {
  const [webinar, setWebinar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [enrolled, setEnrolled] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const { slug } = router.query
  const webinarData = useSelector(state => state.webinar)
  const userLoggedIn = localStorage.getItem('userData') || null

  const createMarkup = htmlContent => {
    return { __html: DOMPurify.sanitize(htmlContent) }
  }

  useEffect(() => {
    if (slug) {
      if (userLoggedIn) {
        dispatch(getWebinarWithSlug({ slug: slug, email: JSON.parse(userLoggedIn) }))
      } else {
        dispatch(getWebinarWithSlug({ slug: slug }))
      }
      setLoading(true)
    }
  }, [slug, dispatch])

  useEffect(() => {
    if (webinarData?.data?.data) {
      setWebinar(webinarData.data.data[0])
      setEnrolled(webinarData.data.enrolled) // Assuming the response is an array with one element
      setLoading(false)
    }
  }, [webinarData])

  const handleEnroll = () => {
    console.log({ id: webinar.id, email: JSON.parse(userLoggedIn) })
    dispatch(enrollUser({ id: webinar.id, email: JSON.parse(userLoggedIn) }))
  }

  if (loading) {
    return <Typography>Loading...</Typography>
  }

  if (!webinar) {
    return <Typography variant='h6'>Webinar not found</Typography>
  }

  return (
    <div className='FNV-Courses-page FNV-Courses'>
      <Helmet>
        <title>{webinar.title}</title>
      </Helmet>

      <SearchBox title={webinar.title} />

      <section className='FNV-CourseList'>
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <h1 gutterBottom variant='h4' component='div'>
                    {webinar.title}
                  </h1>
                  <Typography variant='subtitle1' color='text.secondary' gutterBottom>
                    {webinar.subTitle}
                  </Typography>
                  <Typography variant='subtitle1' color='text.secondary' gutterBottom>
                    <div dangerouslySetInnerHTML={createMarkup(webinar.description)} />
                  </Typography>
                  <Typography variant='body1' gutterBottom>
                    Instructor: {webinar.instructor}
                  </Typography>
                  <Typography variant='body1' gutterBottom>
                    Date: {new Date(webinar.date).toLocaleDateString()}
                  </Typography>
                  <Typography variant='body1' gutterBottom>
                    Regular Price: ${webinar.regularPrice.toFixed(2)}
                  </Typography>
                  <Typography variant='body1' gutterBottom>
                    VIP Price: ${webinar.vipPrice.toFixed(2)}
                  </Typography>
                  {enrolled ? (
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={e => window.alert('You have already enrolled for this webinar')}
                      sx={{ mt: 2 }}
                    >
                      You have already enrolled for this webinar
                    </Button>
                  ) : (
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleEnroll}
                      disabled={!userLoggedIn}
                      sx={{ mt: 2 }}
                    >
                      {userLoggedIn ? 'Enroll' : 'Login to Enroll'}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <img src={webinar.image} width={400} />
            </Grid>
          </Grid>
        </Box>
      </section>
    </div>
  )
}
SingleWebinar.guestGuard = true

export default SingleWebinar
