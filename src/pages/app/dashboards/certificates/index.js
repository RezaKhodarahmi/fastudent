import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProfileInfo } from 'src/store/apps/profile'
import {
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box
} from '@mui/material'
import { jsPDF } from 'jspdf'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
  maxHeight: '90vh'
}

const Index = () => {
  const [open, setOpen] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [certificates, setCertificates] = useState([])
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const canvasRef = useRef(null)

  // Get the profile details from the Redux store
  const profileDetails = useSelector(state => state.profile)

  useEffect(() => {
    dispatch(getProfileInfo())
  }, [dispatch])

  function formatDate(isoDateString) {
    const date = new Date(isoDateString)

    let year = date.getFullYear()
    let month = date.getMonth() + 1 // getMonth() returns 0-11
    let day = date.getDate()

    // Ensure month and day are 2 digits
    month = month.toString().padStart(2, '0')
    day = day.toString().padStart(2, '0')

    return `${year}${month}${day}`
  }

  useEffect(() => {
    if (profileDetails?.data?.courses) {
      const courseCertificates = profileDetails.data.courses
        .filter(course => course.certificate && course.id != 150000)
        .map(course => ({
          certificateUrl: course.certificate,
          courseName: course.title,
          userName: profileDetails.data.user.firstName,
          lastName: profileDetails.data.user.lastName,
          userID: profileDetails.data.user.id + formatDate(course.createdAt)
        }))
      setCertificates(courseCertificates)
    }
  }, [profileDetails])

  const handleOpen = certificate => {
    setSelectedCertificate(certificate)
    setLoading(true)
    setTimeout(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const image = new Image()
        image.crossOrigin = 'anonymous' // This should be set before the src attribute

        image.onload = () => {
          canvas.width = image.width
          canvas.height = image.height
          ctx.drawImage(image, 0, 0)

          // Set font size and color for the user's name
          ctx.font = '60px Arial'
          ctx.fillStyle = 'black'
          ctx.fillText(`${certificate.userName} ${certificate.lastName}`, 770, 430)

          // Change font size and color for the userID
          ctx.font = '30px Arial' // Smaller font size for userID
          ctx.fillStyle = 'white' // Different color for userID
          ctx.fillText(`${certificate.userID}`, 445, 832)

          setLoading(false)
        }

        image.onerror = () => {
          console.error('Failed to load image:', certificate.certificateUrl)
          setLoading(false)
        }
        // image.crossOrigin = 'anonymous'
        image.src = certificate.certificateUrl
      }
    }, 0)

    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setLoading(false)
  }

  const handleDownload = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
      })

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)
      pdf.save('certificate.pdf')
    }
  }

  return (
    <div>
      <h2>Your Certificates</h2>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Certificate Name</TableCell>
              <TableCell align='right'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {certificates.map((certificate, index) => (
              <TableRow key={index} hover>
                <TableCell component='th' scope='row'>
                  {certificate.courseName}
                </TableCell>
                <TableCell align='right'>
                  <Button variant='contained' onClick={() => handleOpen(certificate)}>
                    Show
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <canvas ref={canvasRef} style={{ width: '100%', height: 'auto' }}></canvas>
          <Button onClick={handleDownload} sx={{ mt: 2 }}>
            Download Certificate
          </Button>
          <Button onClick={handleClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  )
}

export default Index
