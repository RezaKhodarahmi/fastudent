// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components
import CurrentPlanCard from 'src/views/pages/account-settings/billing/CurrentPlanCard'
import PaymentMethodCard from 'src/views/pages/account-settings/billing/PaymentMethodCard'
import BillingAddressCard from 'src/views/pages/account-settings/billing/BillingAddressCard'
import BillingHistoryTable from 'src/views/pages/account-settings/billing/BillingHistoryTable'

const TabBooking = ({ apiPricingPlanData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Booking & Finance' />
        </Card>
        <CurrentPlanCard data={apiPricingPlanData} />
      </Grid>

      <Grid item xs={12}>
        <PaymentMethodCard />
      </Grid>

      <Grid item xs={12}>
        <BillingAddressCard />
      </Grid>

      <Grid item xs={12}>
        <BillingHistoryTable />
      </Grid>
    </Grid>
  )
}

export default TabBooking
