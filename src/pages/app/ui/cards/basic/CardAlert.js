// ** MUI Imports
import Alert from '@mui/material/Alert'

const CardAlert = () => {
  return (
    <Alert variant='filled' severity='error'>
      Please Complete Your Profile ! <a href='/app/pages/account-settings/general/'>Go to Profile Details</a>
    </Alert>
  )
}

export default CardAlert
