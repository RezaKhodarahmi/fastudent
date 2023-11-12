// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Select from '@mui/material/Select'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardHeader from '@mui/material/CardHeader'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Alert from '@mui/material/Alert'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const initialData = {
  company: '',
  marketing_contact_email: '',
  bdm: '',
  username: '',
  password: ''
}

const ImgStyled = styled('img')(({ theme }) => ({
  width: 100,
  height: 100,
  marginRight: theme.spacing(6),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(2)
  }
}))

const TabGeneral = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [userInput, setUserInput] = useState('yes')
  const [formData, setFormData] = useState(initialData)
  const [imgSrc, setImgSrc] = useState('/images/avatars/15.png')
  const [secondDialogOpen, setSecondDialogOpen] = useState(false)

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { checkbox: false } })
  const handleClose = () => setOpen(false)
  const handleSecondDialogClose = () => setSecondDialogOpen(false)
  const onSubmit = () => setOpen(true)

  const handleConfirmation = value => {
    handleClose()
    setUserInput(value)
    setSecondDialogOpen(true)
  }

  const handleInputImageChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
      if (reader.result !== null) {
        setInputValue(reader.result)
      }
    }
  }

  const handleInputImageReset = () => {
    setInputValue('')
    setImgSrc('/images/avatars/15.png')
  }

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <Grid container spacing={6}>
      {/* Account Details Card */}
      <Grid item xs={12}>
        <Card>
          <CardHeader title='General Account Data' />
          <form>
            <Divider />
            <CardContent>
              <Grid container spacing={5}>
                {/* Company Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Company Name'
                    placeholder='Touroogle'
                    value={formData.company}
                    onChange={e => handleFormChange('Company', e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Alert severity='info' color='secondary'>
                    Your company name
                  </Alert>
                </Grid>

                {/* Contact Email */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type='email'
                    label='Contact Email'
                    placeholder='info@toirantour.com'
                    value={formData.marketing_contact_email}
                    onChange={e => handleFormChange('marketing_contact_email', e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Alert severity='info' color='secondary'>
                    Your email - the main account manager for the company
                  </Alert>
                </Grid>

                {/* BDM */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Business Development Manager (BDM)'
                    value={formData.bdm}
                    placeholder='Touroogle'
                    onChange={e => handleFormChange('email', e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Alert severity='info' color='secondary'>
                    Your Touroogle Account Manager
                  </Alert>
                </Grid>

                {/* Username */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Username'
                    placeholder='Touroogle'
                    value={formData.username}
                    onChange={e => handleFormChange('username', e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Alert severity='info' color='secondary'>
                    User to login to Touroogle's Operator Dashboard
                  </Alert>
                </Grid>
              </Grid>
            </CardContent>

            {/* Password Section */}
            <Divider />

            <CardHeader title='Password' />

            <CardContent>
              <Grid container spacing={5}>
                {/* Password */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type='password'
                    label='Password'
                    placeholder='Touroogle'
                    value={formData.password}
                    onChange={e => handleFormChange('password', e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Alert severity='info' color='secondary'>
                    This is the password you will use to login to your Touroogle's Operator Dashboard
                  </Alert>
                </Grid>

                {/* Repeat Password */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type='password'
                    label='Repeat Password'
                    placeholder='Touroogle'
                    value={formData.password}
                    onChange={e => handleFormChange('password', e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Alert severity='info' color='secondary'>
                    Must be Match with Password
                  </Alert>
                </Grid>
              </Grid>
            </CardContent>

            <Divider />
            <CardContent>
              <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(0)} !important` }}>
                <Button variant='contained' sx={{ mr: 4 }}>
                  Save Changes
                </Button>
                <Button type='reset' variant='outlined' color='secondary' onClick={() => setFormData(initialData)}>
                  Reset
                </Button>
              </Grid>
            </CardContent>
          </form>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TabGeneral
