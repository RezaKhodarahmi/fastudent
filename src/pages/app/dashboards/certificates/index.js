import React, { useState, useRef, useEffect } from 'react'
// import '../../../../../styles/Index.css' // Import your CSS file

const Index = ({ firstName, lastName }) => {
  const [showFullCertificate, setShowFullCertificate] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (showFullCertificate) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const image = new Image()
      image.src = '/images/memberships.jpg'
      image.onload = () => {
        canvas.width = image.width
        canvas.height = image.height
        ctx.drawImage(image, 0, 0)
        ctx.font = '60px Roboto' // Using Roboto font
        ctx.fillText(`Reza Khodarahmi`, 1800, 400) // Adjust x, y coordinates here
      }
    }
  }, [showFullCertificate, firstName, lastName])

  const handleThumbnailClick = () => {
    setShowFullCertificate(true)
  }

  const handleDownload = () => {
    const canvas = canvasRef.current
    const image = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = image
    link.download = 'certificate.png'
    link.click()
  }

  return (
    <div>
      <h2>Your Certificate</h2>
      <img
        src='path/to/certificate-thumbnail.jpg'
        alt='Certificate Thumbnail'
        onClick={handleThumbnailClick}
        style={{ cursor: 'pointer' }}
      />

      {showFullCertificate && (
        <div className='certificate-modal'>
          <div className='modal-content'>
            <canvas ref={canvasRef}></canvas>
            <button onClick={handleDownload}>Download Certificate</button>
            <button onClick={() => setShowFullCertificate(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Index
