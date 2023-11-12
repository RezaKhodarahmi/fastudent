import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Container,
  Paper,
  Divider,
  Grid,
  Button
} from '@mui/material'
import { Clock, PlayCircle, List as ListIcon } from 'feather-icons-react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { checkEnrollInCourse } from 'src/store/apps/course'
import Link from 'next/link'
import Spinner from 'src/@core/components/spinner'

const VideoPage = () => {
  //Hooks
  const dispatch = useDispatch()
  const router = useRouter()

  //States
  const [videos, setVideos] = useState(null)
  const [loading, setLoading] = useState(true)
  const [enrolled, setEnrolled] = useState(false)
  const [currentVideoURL, setCurrentVideoURL] = useState(null)

  //Give the course Id
  const { id, course } = router.query
  const userData = window.localStorage.getItem('userData')

  //Give data from state
  const courseData = useSelector(state => state.course)

  useEffect(() => {
    if (course && id) {
      setLoading(true)
      dispatch(checkEnrollInCourse({ course, user: userData }))
    }
  }, [id, course, userData])

  useEffect(() => {
    if (courseData?.data?.data?.videos) {
      setVideos(courseData?.data?.data?.videos)
      setCurrentVideoURL(courseData?.data?.data?.videos[id - 1]?.url)
      setLoading(false)
      setEnrolled(courseData?.data?.enrolled)
    }
  }, [courseData])

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {enrolled ? (
            <>
              {/* Video Player */}
              <Box sx={{ my: 3 }}>
                <ReactPlayer url={currentVideoURL} controls width='100%' height='600px' />
              </Box>

              {/* Next Courses List */}
              <Paper elevation={3}>
                <Box p={3}>
                  <Typography variant='h5' gutterBottom>
                    <ListIcon size={24} strokeWidth={1.5} style={{ verticalAlign: 'middle' }} /> Next Courses
                  </Typography>
                  <Divider />
                  <List>
                    {videos?.map((video, index) => (
                      <Link href={`/courses/${course}/session/${video?.id}`} key={index}>
                        <ListItem
                          alignItems='flex-start'
                          style={{
                            backgroundColor: video?.id === parseInt(id) ? '#f5f5f5' : 'transparent', // Highlight if active
                            cursor: 'pointer'
                          }}
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <PlayCircle size={24} strokeWidth={1.5} />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={video.title}
                            secondary={
                              <>
                                <Box display='flex' alignItems='center' mt={1}>
                                  <Clock size={16} strokeWidth={1.5} style={{ marginRight: '5px' }} />
                                  {video.time} min
                                </Box>
                              </>
                            }
                          />
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Box>
              </Paper>
            </>
          ) : (
            <>
              <Grid container alignItems='center' justifyContent='center' style={{ height: '100%' }}>
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} style={{ padding: '2rem', textAlign: 'center' }}>
                    <Typography variant='h4' style={{ paddingTop: '50px' }} gutterBottom>
                      Access Denied
                    </Typography>
                    <Typography variant='h6' gutterBottom>
                      You need to enroll in this course to access its content.
                    </Typography>
                    <Box mt={3} display='flex' flexDirection='column' minHeight='100vh'>
                      <Link href={`/courses/${course}`} passHref>
                        <Button variant='contained' color='primary'>
                          Enroll Now
                        </Button>
                      </Link>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
              )
            </>
          )}
        </>
      )}
    </Container>
  )
}

export default VideoPage
