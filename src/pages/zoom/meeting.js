import dynamic from 'next/dynamic'

const ZoomMeeting = dynamic(() => import('src/views/zoom/ZoomMeeting'), {
  ssr: false
})

ZoomMeeting.guestGuard = true

export default ZoomMeeting
