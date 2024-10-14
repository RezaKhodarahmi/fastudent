import { useEffect, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import ZoomButton from 'src/views/zoom/zoomButton'

// Dynamically load ZoomMeeting without SSR
const ZoomMeeting = dynamic(() => import('src/views/zoom/ZoomMeeting'), {
  ssr: false
})

const ListCourses = props => {
  const [courses, setCourses] = useState([])
  const [user, setUser] = useState([])
  const [selectedZoomLink, setSelectedZoomLink] = useState(null)

  useEffect(() => {
    if (props?.courses) {
      setCourses(props.courses)
    }
    if (props?.user) {
      setUser(props.user)
    }
  }, [props])

  // Function to handle zoom button click and set the selected zoom link
  const handleZoomClick = zoomLink => {
    setSelectedZoomLink(zoomLink) // Set the selected zoom link when button is clicked
  }

  return (
    <Grid container spacing={6}>
      {courses
        ?.filter(item => item?.id != 150000)
        .map(course => (
          <Grid item xs={12} md={6} lg={4} key={course?.id}>
            <Card>
              <CardHeader
                avatar={<Avatar src={course?.image} alt={course?.title} />}
                title={
                  <Typography
                    href='/'
                    variant='p'
                    component={Link}
                    onClick={e => e.preventDefault()}
                    sx={{
                      fontSize: '14px',
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    {course?.title + ' ' + course?.cycles[0]?.name}
                  </Typography>
                }
                subheader={
                  <Typography sx={{ display: 'flex', flexDirection: 'column', color: 'text.secondary' }}>
                    <Typography component='span' sx={{ mr: 1, fontWeight: 500 }}>
                      Instructor:
                    </Typography>
                    {course?.teachers[0]?.firstName + ' ' + course?.teachers[0]?.lastName}
                  </Typography>
                }
              />
              <CardContent>
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link href={`/courses/${course?.slug}`} passHref>
                    <Button variant='contained' size='small' style={{ fontSize: '11px' }}>
                      View Courses
                    </Button>
                  </Link>

                  {parseInt(user?.role) === 1000 ? (
                    <ZoomButton courseId={course?.cycles[0].id} />
                  ) : (
                    <>
                      {course?.cycles[0]?.zoomLinks[0]?.zoomId && (
                        <Button
                          variant='contained'
                          size='small'
                          color='success'
                          style={{ fontSize: '11px' }}
                          onClick={() => handleZoomClick(course?.cycles[0]?.zoomLinks[0]?.zoomId)} // Set zoom link on click
                        >
                          Join the class
                        </Button>
                      )}
                    </>
                  )}

                  {parseInt(user?.role) !== 1000 && course?.cycles[0]?.groupLink && (
                    <Link href={course?.cycles[0]?.groupLink || '#'} passHref>
                      <Button variant='contained' size='small' color='info' style={{ fontSize: '11px' }}>
                        Telegram Group
                      </Button>
                    </Link>
                  )}
                </Box>

                <LinearProgress color='success' value={85} sx={{ height: 5 }} variant='determinate' />
              </CardContent>
            </Card>
          </Grid>
        ))}

      {/* Conditionally render the ZoomMeeting component when selectedZoomLink is set */}
      {selectedZoomLink && <ZoomMeeting meetingId={selectedZoomLink} email={user?.email} />}
    </Grid>
  )
}

export default ListCourses
