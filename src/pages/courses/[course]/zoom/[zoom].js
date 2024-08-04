import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ZoomMeeting = () => {
  const router = useRouter()
  const { zoom } = router.query
  const [zoomLink, setZoomLink] = useState('')

  useEffect(() => {
    if (zoom) {
      setZoomLink(zoom)
    }
  }, [zoom])

  if (!zoomLink) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        src={'https:/us02web.zoom.us/my/fanavaran'}
        style={{ width: '80%', height: '80%', border: 'none' }}
        allow='camera; microphone; fullscreen; speaker; display-capture'
      ></iframe>
    </div>
  )
}

export default ZoomMeeting
