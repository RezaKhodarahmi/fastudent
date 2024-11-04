import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCourseCycleStudent } from 'src/store/apps/teacher-student'
import { fetchTeacherCourses } from 'src/store/apps/teacher'
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
  Modal
} from '@mui/material'
import axios from 'axios'
import BASE_URL from 'src/api/BASE_URL'

const TeacherCourses = () => {
  const [students, setStudents] = useState([])
  const [attendanceHistory, setAttendanceHistory] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [selectedCycleId, setSelectedCycleId] = useState(null) // State to store the selected cycleId
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

  const handleShowStudents = async cycleId => {
    setSelectedCycleId(cycleId)
    dispatch(getCourseCycleStudent(cycleId))
  }

  const handleShowAttendanceHistory = async studentId => {
    setSelectedStudent(studentId)
    try {
      const response = await axios.get(
        `${BASE_URL}/student/teachers/result/${selectedCycleId}/${studentId}`
      )

      setAttendanceHistory(response.data.data)
      setIsModalOpen(true)

    } catch (error) {
      console.error('Error fetching attendance history:', error)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setAttendanceHistory(null)
  }

  if (!teacherCourse.data) {
    return (
      <Box display='flex' justifyContent='center'>
        <CircularProgress />
      </Box>
    )
  }

  const activeCourses = teacherCourse?.data?.data?.filter(course => {
    const courseUpdatedAt = new Date(course.updatedAt)
    const oneMonthAgo = new Date()
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)

    return courseUpdatedAt >= oneMonthAgo
  })

  return (
    <Box p={3}>
      <Typography variant='h4' gutterBottom>
        Teacher Courses
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='teacher courses table'>
          <TableHead>
            <TableRow>
              <TableCell>Course Name</TableCell>
              <TableCell>Show Student List</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activeCourses?.map(course => (
              <TableRow key={course.courseId}>
                <TableCell>
                  {course.course.title} {course.course.cycles[0].name && `(${course.course.cycles[0].name})`}
                </TableCell>
                <TableCell>
                  <Button variant='contained' onClick={() => handleShowStudents(course.course.cycles[0].id)}>
                    Show Student List
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant='h5' gutterBottom mt={3}>
        Student List
      </Typography>
      {students?.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='students table'>
            <TableHead>
              <TableRow>
                <TableCell>Student Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Attendance History</TableCell>
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
                    <Button variant='outlined' onClick={() => handleShowAttendanceHistory(student.id)}>
                      View Attendance History
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant='body1' mt={2}>
          No students enrolled in this cycle.
        </Typography>
      )}

      {/* Modal for Attendance History */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box p={4} sx={{ backgroundColor: 'white', margin: 'auto', marginTop: '10%', maxWidth: 500 }}>
          <Typography variant='h6' gutterBottom>
            Attendance History for Student {selectedStudent}
          </Typography>
          {attendanceHistory ? (
            <TableContainer component={Paper}>
              <Table aria-label='attendance history table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Arrival Time</TableCell>
                    <TableCell>Leave Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attendanceHistory.map(record => (
                    <TableRow key={record.createdAt}>
                      <TableCell>{record.createdAt}</TableCell>
                      <TableCell>{record.timeArrive}</TableCell>
                      <TableCell>{record.timeLeave}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography>Loading attendance history...</Typography>
          )}
        </Box>
      </Modal>
    </Box>
  )
}

export default TeacherCourses
