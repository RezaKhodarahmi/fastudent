import * as React from 'react'
import { Box, Button, Modal, Typography, TextField, MenuItem, Grid, IconButton } from '@mui/material'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

const provinces = [
  { label: 'Pacific Time (Vancouver)', zone: 'America/Vancouver' },
  { label: 'Mountain Time (Calgary)', zone: 'America/Edmonton' },
  { label: 'Central Time (Winnipeg)', zone: 'America/Winnipeg' },
  { label: 'Eastern Time (Toronto)', zone: 'America/Toronto' },
  { label: 'Atlantic Time (Halifax)', zone: 'America/Halifax' },
  { label: "Newfoundland Time (St. John's)", zone: 'America/St_Johns' }
]

const iranTimeZone = 'Asia/Tehran'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  zIndex: 1300, // Ensure it's on top of other components
  borderRadius: '8px'
}

export default function TimeConverterModal() {
  const [open, setOpen] = useState(false)
  const [iranTime, setIranTime] = useState('')
  const [selectedProvince, setSelectedProvince] = useState(provinces[0].zone) // Default to Vancouver
  const [convertedTime, setConvertedTime] = useState('')
  const [reverseConversion, setReverseConversion] = useState(false)

  const lan = localStorage.getItem('i18nextLng') || 'fa'

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleConvert = () => {
    if (!iranTime || !selectedProvince) return

    const currentDate = dayjs().format('YYYY-MM-DD')
    const fullTime = `${currentDate} ${iranTime}`

    if (!reverseConversion) {
      // Iran to Canada conversion
      const iranTimeObj = dayjs.tz(fullTime, iranTimeZone)
      const converted = iranTimeObj.tz(selectedProvince).format('YYYY-MM-DD HH:mm')
      setConvertedTime(converted)
    } else {
      // Canada to Iran conversion
      const provinceTimeObj = dayjs.tz(fullTime, selectedProvince)
      const converted = provinceTimeObj.tz(iranTimeZone).format('YYYY-MM-DD HH:mm')
      setConvertedTime(converted)
    }
  }

  return (
    <div dir={lan == 'fa' ? 'rtl' : 'ltr'}>
      <Button variant='contained' color='primary' onClick={handleOpen}>
        Open Time Converter
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby='modal-title' aria-describedby='modal-description'>
        <Box sx={style}>
          <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>

          <Typography id='modal-title' variant='h6' component='h2'>
            {reverseConversion ? 'Convert Canada Time to Iran Time' : 'Convert Iran Time to Canada Time'}
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <TextField
                label={reverseConversion ? 'Canada Time (HH:mm)' : 'Iran Time (HH:mm)'}
                type='time'
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={iranTime}
                onChange={e => setIranTime(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                label='Select Canadian Province'
                fullWidth
                value={selectedProvince}
                onChange={e => setSelectedProvince(e.target.value)}
              >
                {provinces.map(province => (
                  <MenuItem key={province.zone} value={province.zone}>
                    {province.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' color='secondary' fullWidth onClick={handleConvert}>
                Convert Time
              </Button>
            </Grid>

            <Grid item xs={12} textAlign='center'>
              <Button variant='text' onClick={() => setReverseConversion(!reverseConversion)}>
                {reverseConversion ? 'Convert Canada to Iran' : 'Convert Iran to Canada'}
              </Button>
            </Grid>

            {convertedTime && (
              <Grid item xs={12}>
                <Box sx={{ p: 2, backgroundColor: 'green', borderRadius: '8px', textAlign: 'center' }}>
                  <Typography variant='h5' color='white'>
                    Converted Time: {convertedTime}
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}
