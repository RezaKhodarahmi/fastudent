import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

const ZoomMtg = dynamic(() => import('@zoomus/websdk').then(mod => mod.ZoomMtg), { ssr: false })

const ZoomMeeting = ({ meetingNumber, userName, userEmail, passWord, signature, apiKey }) => {
  useEffect(() => {
    async function initializeZoom() {
      const { ZoomMtg } = await import('@zoomus/websdk')
      ZoomMtg.setZoomJSLib('https://source.zoom.us/2.0.1/lib', '/av')
      ZoomMtg.preLoadWasm()
      ZoomMtg.prepareJssdk()

      ZoomMtg.init({
        leaveUrl: 'http://localhost:3000',
        isSupportAV: true,
        success: success => {
          console.log('Zoom Init Success ', success)
          ZoomMtg.join({
            meetingNumber,
            userName,
            signature,
            apiKey,
            userEmail,
            passWord,
            success: success => {
              console.log('Join Meeting Success', success)
            },
            error: error => {
              console.log('Join Meeting Error', error) // Log detailed error
            }
          })
        },
        error: error => {
          console.log('Zoom Init Error', error) // Log detailed error
        }
      })
    }

    initializeZoom()
  }, [meetingNumber, userName, userEmail, passWord, signature, apiKey])

  return (
    <div id='zoom-meeting-container'>
      <div id='zmmtg-root'></div>
    </div>
  )
}

export default ZoomMeeting
