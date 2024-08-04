// components/ZoomMeeting.js
import { useEffect } from 'react'
import { ZoomMtg } from '@zoomus/websdk'

// Add Zoom credentials and meeting information
const API_KEY = 'YOUR_ZOOM_API_KEY'
const API_SECRET = 'YOUR_ZOOM_API_SECRET'
const MEETING_NUMBER = 'YOUR_MEETING_NUMBER'
const MEETING_PASSWORD = 'YOUR_MEETING_PASSWORD'
const USER_NAME = 'YOUR_USER_NAME' // could be dynamically set to the user's name
const USER_EMAIL = 'YOUR_USER_EMAIL' // could be dynamically set to the user's email

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.4.0/lib', '/av')
ZoomMtg.preLoadWasm()
ZoomMtg.prepareJssdk()

const ZoomMeeting = () => {
  useEffect(() => {
    const meetConfig = {
      apiKey: API_KEY,
      apiSecret: API_SECRET,
      meetingNumber: MEETING_NUMBER,
      userName: USER_NAME,
      passWord: MEETING_PASSWORD,
      leaveUrl: 'http://localhost:3000',
      role: 0,
    }

    const signature = ZoomMtg.generateSignature({
      meetingNumber: meetConfig.meetingNumber,
      apiKey: meetConfig.apiKey,
      apiSecret: meetConfig.apiSecret,
      role: meetConfig.role,
      success: (res) => {
        console.log(res.result)
      },
    })

    ZoomMtg.init({
      leaveUrl: meetConfig.leaveUrl,
      isSupportAV: true,
      success: () => {
        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetConfig.meetingNumber,
          userName: meetConfig.userName,
          apiKey: meetConfig.apiKey,
          userEmail: USER_EMAIL,
          passWord: meetConfig.passWord,
          success: (res) => {
            console.log('join meeting success')
          },
          error: (res) => {
            console.log(res)
          },
        })
      },
      error: (res) => {
        console.log(res)
      },
    })
  }, [])

  return <div id='zmmtg-root'></div>
}

export default ZoomMeeting
