import React, { useEffect } from 'react'
import { ZoomMtg } from '@zoom/meetingsdk'
import axios from 'axios'
import NoHeaderFooterLayout from 'src/layouts/components/NoHeaderFooterLayout'

const ZoomMeeting = ({ meetingId }) => {
  useEffect(() => {
    console.log(meetingId)
  }, [meetingId])

  useEffect(() => {
    const initializeZoom = async () => {
      const SDK_KEY = 'DYfpXbQaQNq4kFStDhOidQ' // Your SDK Key
      const SDK_SECRET = 'PAYE3FfVR8b7RMGV2obIZr5ZmLF0qDLg' // Your SDK Secret

      try {
        // Request the signature from the server
        const {
          data: { signature }
        } = await axios.get('https://fanavaran:3200/api/zoom/signature', {
          params: {
            meetingNumber: meetingId,
            role: 0
          }
        })

        // SDK Initialization
        ZoomMtg.preLoadWasm()
        ZoomMtg.prepareWebSDK()

        ZoomMtg.init({
          leaveUrl: 'http://localhost:8585',
          isSupportAV: true,
          success: () => {
            ZoomMtg.join({
              signature,
              sdkKey: SDK_KEY,
              meetingNumber: meetingId,
              userName: 'Reza Khodarahmi',
              passWord: 'Meeting Password',
              success: res => {
                console.log('Join meeting success:', res)
              },
              error: error => {
                console.log('Join meeting error:', error)
              }
            })
          },
          error: error => {
            console.log('Init SDK error:', error)
          }
        })
      } catch (error) {
        console.error('Error initializing Zoom SDK:', error)
      }
    }

    initializeZoom()

    return () => {
      // Cleanup logic if needed
    }
  }, [])

  return (
    <NoHeaderFooterLayout>
      <div id='meetingSDKElement' style={{ width: '100%', height: '100vh', zIndex: "9999" }}></div>
    </NoHeaderFooterLayout>
  )
}

export default ZoomMeeting
