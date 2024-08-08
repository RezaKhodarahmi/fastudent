import React, { useState } from 'react'
import axios from 'axios'
import BASE_URL from 'src/api/BASE_URL'

const CreateMeeting = () => {
  const [meetingData, setMeetingData] = useState(null)
  const [error, setError] = useState(null)

  const handleCreateMeeting = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/zoom/meetings`)
      setMeetingData(response.data)
    } catch (err) {
      setError('Failed to create meeting')
      console.error(err)
    }
  }

  return (
    <div>
      <button onClick={handleCreateMeeting}>Create Zoom Meeting</button>
      {meetingData && (
        <div>
          <h2>Meeting Created Successfully</h2>
          <p>
            Join URL:{' '}
            <a href={meetingData.join_url} target='_blank' rel='noopener noreferrer'>
              {meetingData.join_url}
            </a>
          </p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  )
}
CreateMeeting.guestGuard = true

export default CreateMeeting
