import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  Typography
} from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'

const UserTestResults = () => {
  const [testResults, setTestResults] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const dispatch = useDispatch()

  // Fetch user test results
  useEffect(() => {
    const fetchTestResults = async () => {
      const userEmail = localStorage.getItem('userData')
      if (userEmail) {
        try {
          const response = await axios.get(`http://localhost:3200/api/v1/student/test/result/user/${JSON.parse(userEmail)}`)

          setTestResults(response.data.results)
          setLoading(false)
        } catch (error) {
          console.error('Error fetching test results:', error)
          setLoading(false)
        }
      }
    }
    fetchTestResults()
  }, [dispatch])

  // Navigate to the test review page
  const handleReviewClick = testId => {
    router.push(`http://localhost:3200/api/v1/user/test-review/${testId}`)
  }

  if (loading) {
    return (
      <Box display='flex' justifyContent='center'>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant='h5' style={{ marginBottom: '20px' }}>
        My Test Results
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Test Title</TableCell>
              <TableCell align='right'>Date Taken</TableCell>
              <TableCell align='right'>Grade</TableCell>
              <TableCell align='right'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testResults.map(result => (
              <TableRow key={result.id}>
                <TableCell>{result.testTitle}</TableCell>
                <TableCell align='right'>{new Date(result.dateTaken).toLocaleDateString()}</TableCell>
                <TableCell align='right'>{result.percentage}%</TableCell>
                <TableCell align='right'>
                  <Button variant='contained' onClick={() => handleReviewClick(result.testID)}>
                    Review Test
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default UserTestResults
