import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCourseCycleStudent } from 'src/store/apps/teacher-student'
import { fetchTeacherCourses } from 'src/store/apps/teacher'
import { submitUsersStatus } from 'src/store/apps/attendance'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Box,
  Typography,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  TextField
} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const TeacherCourses = () => {
  const [selectedCycle, setSelectedCycle] = useState({})
  const [students, setStudents] = useState([])
  const [attendance, setAttendance] = useState({})
  const [selectedDate, setSelectedDate] = useState(null) // State for the selected date

  const dispatch = useDispatch()
  const teacherEmail = localStorage.getItem('userData')
  const teacherCourse = useSelector(state => state.teacher)
  const studentList = useSelector(state => state.teacherStudent)

  useEffect(() => {
    setStudents(studentList?.data?.data)
  }, [studentList])

  useEffect(() => {
    dispatch(fetchTeacherCourses(JSON.parse(teacherEmail)))
  }, [teacherEmail, dispatch])

  const handleCycleChange = (courseId, cycleId) => {
    setSelectedCycle({ ...selectedCycle, [courseId]: cycleId })
  }

  const handleShowStudents = async cycleId => {
    dispatch(getCourseCycleStudent(cycleId))
  }

  const handleAttendanceChange = (studentId, status) => {
    setAttendance({ ...attendance, [studentId]: status })
  }

  const handleSubmitAttendance = async () => {
    const attendanceData = Object.entries(attendance).map(([studentId, status]) => {
      const cycleId = selectedCycle[teacherCourse.data.data[0].courseId]
      const courseId = teacherCourse.data.data[0].courseId
      const classNo = 1 // Example class number, you might want to pass this as a parameter

      let timeArrive = null
      if (status && selectedDate) {
        const dateWithTime = new Date(selectedDate)
        dateWithTime.setHours(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds())
        timeArrive = dateWithTime.toISOString()
      }

      return {
        studentId,
        cycleId,
        courseId,
        classNo,
        timeArrive,
        timeLeave: null
      }
    })

    // Dispatch an action to save the attendance data, or send it to your backend directly
    dispatch(submitUsersStatus(attendanceData))
  }

  if (!teacherCourse.data) {
    return (
      <Box display='flex' justifyContent='center'>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box p={3}>
        <Typography variant='h4' gutterBottom>
          Teacher Courses
        </Typography>

        {/* Date Picker */}
        <Box mb={3}>
          <DatePicker
            label='Select Date'
            value={selectedDate}
            onChange={newValue => setSelectedDate(newValue)}
            renderInput={params => <TextField {...params} fullWidth />}
          />
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='teacher courses table'>
            <TableHead>
              <TableRow>
                <TableCell>Course Name</TableCell>
                <TableCell>Select Cycle</TableCell>
                <TableCell>Show Student List</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teacherCourse?.data?.data?.map(course => (
                <TableRow key={course.courseId}>
                  <TableCell>{course.course.title}</TableCell>
                  <TableCell>
                    <Select
                      value={selectedCycle[course.courseId] || ''}
                      onChange={e => handleCycleChange(course.courseId, e.target.value)}
                      displayEmpty
                      fullWidth
                    >
                      <MenuItem value=''>
                        <em>Select Cycle</em>
                      </MenuItem>
                      {course.course.cycles.map(cycle => (
                        <MenuItem key={cycle.id} value={cycle.id}>
                          {cycle.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant='contained'
                      onClick={() => handleShowStudents(selectedCycle[course.courseId])}
                      disabled={!selectedCycle[course.courseId]}
                    >
                      Show Student List
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='h5' gutterBottom mt={3}>
          Attendance Form
        </Typography>
        {students?.length > 0 ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='students table'>
              <TableHead>
                <TableRow>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Present</TableCell>
                  <TableCell>Absent</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map(student => (
                  <TableRow key={student?.id}>
                    <TableCell>
                      {student?.firstName} {student?.lastName}
                    </TableCell>
                    <TableCell>{student?.email}</TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={attendance[student?.id] === true}
                            onChange={() => handleAttendanceChange(student?.id, true)}
                            color='primary'
                          />
                        }
                        label='Present'
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={attendance[student?.id] === false}
                            onChange={() => handleAttendanceChange(student?.id, false)}
                            color='secondary'
                          />
                        }
                        label='Absent'
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Box mt={2} textAlign='right'>
              <Button variant='contained' color='primary' onClick={handleSubmitAttendance} disabled={!selectedDate}>
                Submit Attendance
              </Button>
            </Box>
          </TableContainer>
        ) : (
          <Typography variant='body1' mt={2}>
            No students enrolled in this cycle.
          </Typography>
        )}
      </Box>
    </LocalizationProvider>
  )
}

export default TeacherCourses
