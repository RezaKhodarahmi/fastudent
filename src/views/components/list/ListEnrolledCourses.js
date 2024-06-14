// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import LinearProgress from '@mui/material/LinearProgress'
import { appConfig } from 'src/configs/appConfig'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const StyledList = styled(List)(({ theme }) => ({
  '& .MuiListItem-container': {
    border: `1px solid ${theme.palette.divider}`,
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    },
    '&:last-child': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    },
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '& .MuiListItem-root': {
      paddingRight: theme.spacing(24)
    },
    '& .MuiListItemText-root': {
      marginTop: 0,
      '& .MuiTypography-root': {
        fontWeight: 500
      }
    }
  }
}))

const ListCourses = props => {
  //state
  const [courses, setCourses] = useState([])

  //set state if props
  useEffect(() => {
    if (props.courses) {
      setCourses(props.courses)
    }
  }, [props])

  return (
    <Grid container spacing={6}>
      {courses
        ?.filter(item => item.id != 150000)
        .map(course => (
          <>
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar src={course?.image} alt={course?.title} />
                  }
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    '& .MuiCardHeader-avatar': { mr: 3 }
                  }}
                  subheader={
                    <Typography sx={{ display: 'flex', flexDirectionL: 'column', color: 'text.secondary' }}>
                      <Typography component='span' sx={{ mr: 1, fontWeight: 500 }}>
                        Instructor:
                      </Typography>{' '}
                      {course?.teachers[0]?.firstName + ' ' + course?.teachers[0]?.lastName}
                    </Typography>
                  }
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
                      {course?.title}
                    </Typography>
                  }
                />
                <CardContent>
                  <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link href={`${appConfig.appUrl}/courses/${course?.slug}`} passHref>
                  <Button variant='contained' size='small' style={{ fontSize: '11px' }}>
                    View Courses
                  </Button>
                </Link>
                
                {course?.cycles[0]?.zoomLink && (
                  <Link
                    href={course?.cycles[0]?.zoomLink || '#'}
                    passHref
                    variant='contained'
                    style={{ margin: '0 5px' }}
                    size='small'
                  >
                    <Button variant='contained' size='small' color='success' style={{ fontSize: '11px' }}>
                      Join the class
                    </Button>
                  </Link>
                )}
                {course?.cycles[0]?.groupLink && (
                  <Link
                    href={course?.cycles[0]?.groupLink || '#'}
                    passHref
                    variant='contained'
                    style={{ margin: '0 0px ' }}
                    size='small'
                  >
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
          </>
        ))}
    </Grid>
  )
}

export default ListCourses
