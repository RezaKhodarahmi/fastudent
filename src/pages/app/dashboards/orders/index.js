import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProfileInfo } from 'src/store/apps/profile'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Box,
  Modal,
  Typography,
  styled
} from '@mui/material'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

// Styled components for the invoice
const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const ModalContent = styled(Box)({
  backgroundColor: 'white',
  padding: '40px',
  outline: 'none',
  borderRadius: '4px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: 'auto',
  maxWidth: '800px',
  maxHeight: '90vh',
  overflowY: 'auto'
})

const InvoiceHeader = styled(Box)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 'bold',
  textAlign: 'center',
  margin: theme.spacing(2, 0),
  paddingTop: theme.spacing(2)
}))

const Section = styled(Box)({
  marginBottom: '24px'
})

const TwoColumnLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  '& > div': {
    width: '48%'
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    '& > div': {
      width: '100%'
    }
  }
}))

const LineItemTable = styled(Table)({
  marginBottom: '24px'
})

const InvoiceFooter = styled(Typography)({
  marginTop: '24px',
  textAlign: 'center'
})

const SignatureImage = styled('img')({
  maxWidth: '100px',
  marginTop: '16px'
})

const Index = () => {
  const [orders, setOrders] = useState([])
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const profileDetails = useSelector(state => state.profile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfileInfo())
  }, [dispatch])

  useEffect(() => {
    if (profileDetails?.data?.transactions) {
      setOrders(profileDetails.data.transactions)
      setUser(profileDetails.data.user)
      setLoading(false)
    }
  }, [profileDetails])

  const handleOpenModal = order => {
    setSelectedOrder(order)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const downloadPDF = async () => {
    const input = document.getElementById('modal-content')

    const canvas = await html2canvas(input, {
      scale: 2
    })

    const imgData = canvas.toDataURL('image/png')

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4'
    })

    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('invoice.pdf')
  }

  if (loading) {
    return (
      <Box display='flex' justifyContent='center'>
        <CircularProgress />
      </Box>
    )
  }

  const getStatusStyle = status => ({
    color: status === 'succeeded' ? 'green' : 'red'
  })

  // Updated calculateSubtotal to use regularPrice from cycles
  const calculateSubtotal = items => {
    return items
      .reduce((acc, item) => {
        const price = item.cycles.length > 0 ? item.cycles[0].regularPrice : 0

        return acc + parseFloat(price)
      }, 0)
      .toFixed(2)
  }

  // Updated renderLineItems to display regularPrice from cycles
  const renderLineItems = items => {
    return items.map((item, index) => (
      <TableRow key={index}>
        <TableCell>1</TableCell> {/* Quantity is assumed to be 1 for each course */}
        <TableCell>{item.title}</TableCell>
        <TableCell>${item.cycles.length > 0 ? `${item.cycles[0].regularPrice.toFixed(2)}` : 'N/A'}</TableCell>
        <TableCell>${item.cycles.length > 0 ? `${item.cycles[0].regularPrice.toFixed(2)}` : 'N/A'}</TableCell>
      </TableRow>
    ))
  }

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell align='right'>Transaction Date</TableCell>
              <TableCell align='right'>Amount</TableCell>
              <TableCell align='right'>Status</TableCell>
              <TableCell align='right'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(row => (
              <TableRow key={row.Transaction_ID}>
                <TableCell component='th' scope='row'>
                  {row.courses.map(course => course.title).join(', ')}
                </TableCell>
                <TableCell align='right'>{new Date(row.Transaction_Date).toLocaleDateString()}</TableCell>
                <TableCell align='right'>{`$${row.Amount} ${row.Currency}`}</TableCell>
                <TableCell align='right' style={getStatusStyle(row.Transaction_Status)}>
                  {row.Transaction_Status == 'succeeded' ? 'succeeded' : 'Canceled'}
                </TableCell>
                <TableCell align='right'>
                  <Button variant='contained' onClick={() => handleOpenModal(row)}>
                    Show
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedOrder && (
        <StyledModal open={openModal} onClose={handleCloseModal}>
          <ModalContent id='modal-content'>
            <InvoiceHeader>INVOICE</InvoiceHeader>
            {/* Invoice Header - logo and invoice details */}
            <Section>
              <TwoColumnLayout>
                <div>
                  {/* Left side - Bill To */}
                  <Typography variant='subtitle1' gutterBottom>
                    <strong>Customer details</strong>
                  </Typography>
                  <Typography>Customer Name: {user?.firstName + ' ' + user?.lastName || 'John Smith'}</Typography>
                  <Typography>Customer Address: {user?.address || '2 Court Square'}</Typography>
                  <Typography>Customer City: {user?.city || 'Canada'}</Typography>
                  <Typography>Customer Email: {user?.email || 'example@fanavaran.ca'}</Typography>
                </div>
                <div>
                  {/* Right side - Invoice details */}
                  <Typography variant='subtitle1' gutterBottom>
                    <strong>Invoice </strong>
                  </Typography>
                  <Typography>#{selectedOrder?.Transaction_ID || 'US-001'}</Typography>
                  <Typography style={getStatusStyle(selectedOrder.Transaction_Status)}>
                    Status: {selectedOrder.Transaction_Status == 'succeeded' ? 'Paid' : 'Not Paid'}
                  </Typography>
                  <Typography variant='subtitle1' gutterBottom>
                    <strong>Invoice Date</strong>
                  </Typography>
                  <Typography>
                    {selectedOrder ? new Date(selectedOrder.Transaction_Date).toLocaleDateString() : '11/02/2019'}
                  </Typography>
                </div>
              </TwoColumnLayout>
            </Section>
            {/* Line Items Table */}
            <LineItemTable>
              <TableHead>
                <TableRow>
                  <TableCell>QTY</TableCell>
                  <TableCell>DESCRIPTION</TableCell>
                  <TableCell>UNIT PRICE</TableCell>
                  <TableCell>AMOUNT</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderLineItems(selectedOrder.courses)}</TableBody>
            </LineItemTable>
            {/* Subtotal, Taxes, Total */}

            <Section>
              <TwoColumnLayout>
                <div />
                <div>
                  <Typography variant='subtitle1' gutterBottom>
                    <strong>Subtotal</strong>
                  </Typography>
                  <Typography>${calculateSubtotal(selectedOrder.courses)}</Typography>
                  {/* No Sales Tax */}
                  <Typography variant='subtitle1' gutterBottom>
                    <strong>TOTAL</strong>
                  </Typography>
                  <Typography>${calculateSubtotal(selectedOrder.courses)}</Typography>
                </div>
              </TwoColumnLayout>
            </Section>
            {/* Signature and Footer */}
            <Section>
              <TwoColumnLayout>
                <div>
                  <Typography variant='subtitle1' gutterBottom>
                    <strong>Terms & Conditions</strong>
                  </Typography>
                  <Typography>Payment is due within 15 days</Typography>
                  <Typography>Please make checks payable to: East Repair Inc.</Typography>
                </div>
                <div>
                  <SignatureImage src='/images/favicon.png' alt='Signature' />
                </div>
              </TwoColumnLayout>
            </Section>
            <InvoiceFooter variant='subtitle1'>Thank you</InvoiceFooter>
            {/* Download as PDF Button */}
            <Button onClick={downloadPDF} variant='contained' color='primary'>
              Download as PDF
            </Button>
            {/* Close Button */}
            <Button onClick={handleCloseModal} variant='text'>
              Close
            </Button>
          </ModalContent>
        </StyledModal>
      )}
    </Box>
  )
}

export default Index
