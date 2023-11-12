// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import LinearProgress from '@mui/material/LinearProgress'
import { appConfig } from 'src/configs/appConfig'

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
      console.log(props.courses)
    }
  }, [props])

  return (
    <StyledList disablePadding>
      {courses?.map(course => (
        <ListItem key={course?.id}>
          <ListItemAvatar>
            <Avatar src={course?.image} alt={course?.title} />
          </ListItemAvatar>
          <div>
            <ListItemText primary={course?.title} />
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <Box sx={{ mr: 3, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'success.main' } }}>
                <Icon icon='mdi:circle' fontSize='0.625rem' />
                <Typography variant='caption'>Active</Typography>
              </Box>
              <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                Instructor:
              </Typography>
              <Typography variant='caption' sx={{ pl: 1 }}>
                {course?.teachers[0]?.firstName + ' ' + course?.teachers[0]?.lastName}
              </Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
              <LinearProgress color='success' value={85} sx={{ height: 5 }} variant='determinate' />
            </Box>
          </div>
          <ListItemSecondaryAction>
            <Link href={`${appConfig.appUrl}/courses/${course?.slug}`} passHref variant='contained' size='small'>
              <Button variant='contained' size='small'>
                View Course
              </Button>
            </Link>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </StyledList>
  )
}

export default ListCourses
