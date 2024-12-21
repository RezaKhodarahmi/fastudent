import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Paper, Typography } from '@mui/material'
import BASE_URL from 'src/api/BASE_URL'

const ReviewTest = () => {
  const router = useRouter()
  const { testId } = router.query
  const [testDetails, setTestDetails] = useState(null)

  useEffect(() => {
    if (testId) {
      axios.get(`${BASE_URL}/test/result/${testId}`).then(response => {
        setTestDetails(response.data)
      })
    }
  }, [testId])

  if (!testDetails) {
    return <Typography>Loading...</Typography>
  }

  return (
    <div className='container py-5'>
      <Typography variant='h4' style={{ marginBottom: '20px' }}>
        Review Test: {testDetails.testTitle}
      </Typography>
      {testDetails.questions.map((question, index) => (
        <Paper key={question.id} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant='h6'>
            Question {index + 1}: {question.questionText}
          </Typography>
          <Typography style={{ color: 'green' }}>Correct Answer: {question.correctAnswerText}</Typography>
          <Typography style={{ color: question.isCorrect ? 'green' : 'red' }}>
            Your Answer: {question.userAnswerText || 'Not Answered'}
          </Typography>
        </Paper>
      ))}
    </div>
  )
}

export default ReviewTest
