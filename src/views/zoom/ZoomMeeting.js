import React, { useEffect } from 'react'
import { ZoomMtg } from '@zoom/meetingsdk'
import axios from 'axios'
import NoHeaderFooterLayout from 'src/layouts/components/NoHeaderFooterLayout'

const ZoomMeeting = ({ meetingId, email }) => {
  useEffect(() => {
    const initializeZoom = async () => {
      const SDK_KEY = 'DYfpXbQaQNq4kFStDhOidQ' // Your SDK Key
      const SDK_SECRET = 'PAYE3FfVR8b7RMGV2obIZr5ZmLF0qDLg' // Your SDK Secret

      try {
        // Request the signature from the server
        const {
          data: { signature }
        } = await axios.get('https://fanavaran.ca:3200/api/zoom/signature', {
          params: {
            meetingNumber: meetingId,
            role: 0
          }
        })

        // SDK Initialization
        ZoomMtg.preLoadWasm()
        ZoomMtg.prepareWebSDK()

        ZoomMtg.init({
          leaveUrl: 'https://fanavaran.ca/app/dashboards/courses',
          isSupportAV: true,
          success: () => {
            ZoomMtg.join({
              signature,
              sdkKey: SDK_KEY,
              meetingNumber: meetingId,
              userName: email,
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
    <>
      <style>
        {`
        header {
          display: none!important;
        }
      `}
      </style>
      <div id='meetingSDKElement' style={{ width: '100%', height: '100vh', zIndex: '9999' }}></div>
    </>
  )
}

export default ZoomMeeting
