// ** MUI Imports
import Alert from '@mui/material/Alert'
import Link from 'next/link'

const CardAlert = () => {
  return (
    <Alert variant='filled' severity='error'>
      Please Complete Your Profile ! <Link href='/app/pages/account-settings/general/'>Go to Profile Details</Link>
    </Alert>
  )
}

export default CardAlert
