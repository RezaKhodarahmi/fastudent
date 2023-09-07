// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** MUI Import
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import Select from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import format from 'date-fns/format'
import DatePicker from 'react-datepicker'
import { getProfileInfo } from 'src/store/apps/profile'
// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'

import OptionsMenu from 'src/@core/components/option-menu'
import TableHeader from 'src/views/apps/invoice/list/TableHeader'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** renders client colum

/* eslint-enable */
const InvoiceList = () => {
  // ** State
  const [courses, setCourses] = useState([])
  const [pageSize, setPageSize] = useState(10)
  const [statusValue, setStatusValue] = useState('')
  const profileData = useSelector(state => state.profile)
  const [selectedRows, setSelectedRows] = useState([])

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.invoice)
  useEffect(() => {
    dispatch(getProfileInfo())
  }, [dispatch])
  useEffect(() => {
    if (profileData?.data) {
      setCourses(profileData?.data?.courses)
    }
  }, [profileData])

  const columns = [
    {
      flex: 0.1,
      minWidth: 140,
      sortable: false,
      field: 'slug',
      headerName: 'slug'
    }
  ]

  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <DataGrid
              autoHeight
              pagination
              rowHeight={62}
              rows={courses}
              columns={columns}
              disableSelectionOnClick
              pageSize={Number(pageSize)}
              rowsPerPageOptions={[10, 25, 50]}
              onSelectionModelChange={rows => setSelectedRows(rows)}
              onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default InvoiceList
