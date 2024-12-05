import React, { useEffect, useState } from 'react'
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
import { fetchCourseVideos } from 'src/store/apps/course-material'
import Link from 'next/link'
import Spinner from 'src/@core/components/spinner'
import { TRUE } from 'sass'

const VideoPage = () => {
  //Hooks
  const dispatch = useDispatch()
  const router = useRouter()

  //States
  const [StoredVideos, setVideos] = useState(null)
  const [loading, setLoading] = useState(true)
  const [enrolled, setEnrolled] = useState(false)
  const [currentVideoURL, setCurrentVideoURL] = useState(null)
  const [courseId, setCourseId] = useState(null)
  const [courseCycle, setCourseCycle] = useState(null)

  //Give the course Id
  const { id, course } = router.query
  const courseData = useSelector(state => state.course)
  const { videos } = useSelector(state => state.materials)

  const userData = window.localStorage.getItem('userData')

  useEffect(() => {
    if (course && id) {
      setLoading(true)
      dispatch(checkEnrollInCourse({ course, user: userData }))
    }
  }, [id, course, userData])

  useEffect(() => {
    if (courseData?.data?.data?.id) {
      setCourseId(courseData?.data?.data?.id)
      if (courseData?.data?.enrolled === true) {
        setEnrolled(TRUE)
      } else {
        setEnrolled(403)
      }
      setCourseCycle(courseData?.data?.cycleId)
    }
  }, [courseData])

  useEffect(() => {
    if (courseId) {
      dispatch(fetchCourseVideos(courseId))
    }
  }, [courseId])

  useEffect(() => {
    if (videos?.length) {
      const filteredVideos = videos.filter(video => video.cycleId == courseCycle)

      setVideos(filteredVideos)

      const currentVideo = filteredVideos.find(video => video.id.toString() === id.toString())

      if (currentVideo) {
        let videoUrl = currentVideo.url

        // Check if the URL is in a shareable format and convert it to an embeddable format
        if (videoUrl.includes('vimeo.com') && !videoUrl.includes('player.vimeo.com')) {
          const videoId = videoUrl.split('/').pop().split('?')[0] // Extracts the video ID
          videoUrl = `https://player.vimeo.com/video/${videoId}` // Constructs the embeddable URL
        }
        setCurrentVideoURL(videoUrl) // Set the corrected URL
      }
      setLoading(false)
    }
  }, [videos, id])

  // Handler to disable right-click
  const handleContextMenu = e => {
    e.preventDefault() // Prevent the context menu from appearing
  }

  if (loading) return <Spinner />

  if (enrolled === 403)
    return (
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

  return (
    <Container onContextMenu={handleContextMenu}>
      {/* Video Player */}
      <Box onContextMenu={handleContextMenu} sx={{ my: 3, position: 'relative', width: '100%', height: '564px' }}>
        <iframe
          src={currentVideoURL}
          width='100%'
          height='100%'
          frameborder='0'
          allow='autoplay; fullscreen'
          allowfullscreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
          onContextMenu={handleContextMenu}
        ></iframe>
        <div
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '2rem',
            color: 'rgba(0, 0, 0, 0.2)',
            whiteSpace: 'nowrap',
            zIndex: 2,
            pointerEvents: 'none'
          }}
          onContextMenu={handleContextMenu}
        >
          {userData && JSON.parse(userData)}
        </div>
      </Box>

      {/* Next Courses List */}
      <Paper elevation={3}>
        <Box p={3}>
          <Typography variant='h5' gutterBottom>
            <ListIcon size={24} strokeWidth={1.5} style={{ verticalAlign: 'middle' }} />
            Courses
          </Typography>
          <Divider />
          <List>
            {StoredVideos?.map((video, index) => (
              <Link href={`/courses/${course}/session/${video?.id}`} key={index}>
                <ListItem
                  alignItems='flex-start'
                  style={{
                    backgroundColor: video?.id === parseInt(id) ? '#f5f5f5' : 'transparent', // Highlight if active
                    cursor: 'pointer'
                  }}
                  onContextMenu={handleContextMenu}
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
    </Container>
  )
}

export default VideoPage
