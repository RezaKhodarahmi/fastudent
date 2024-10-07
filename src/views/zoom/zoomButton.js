import React, { useState } from 'react'
import axios from 'axios'
import BASE_URL from 'src/api/BASE_URL'
import Button from '@mui/material/Button'

const CreateMeeting = ({ courseId }) => {
  const [meetingData, setMeetingData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false) // Loading state

  const handleCreateMeeting = async () => {
    setLoading(true) // Set loading to true when creating the meeting
    setError(null) // Reset error before the request

    try {
      const response = await axios.post(`${BASE_URL}/zoom/meetings`, {
        courseId // Send courseId in the request body
      })
      setMeetingData(response.data)

      // Open the meeting URL in a new tab if the meeting is created successfully
      if (response.data && response.data.join_url) {
        window.open(response.data.join_url, '_blank')
      }
    } catch (err) {
      setError('Failed to create meeting')
      console.error(err)
    } finally {
      setLoading(false) // Set loading to false after the request completes
    }
  }

  return (
    <div>
      <Button
        onClick={handleCreateMeeting}
        disabled={loading} // Disable button when loading
        variant='contained'
        color='success'
        size='small'
        style={{ fontSize: '11px' }}
      >
        {loading ? 'Creating Meeting...' : 'Create ZOOM Host'}
      </Button>

      {error && <p>{error}</p>}
    </div>
  )
}

CreateMeeting.guestGuard = true

export default CreateMeeting
