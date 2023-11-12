// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import AccountSettings from 'src/views/pages/account-settings/AccountSettings'

const AccountSettingsTab = ({ tab, apiPricingPlanData }) => {
  return <AccountSettings tab={tab} apiPricingPlanData={apiPricingPlanData} />
}

export const getStaticPaths = () => {
  return {
    paths: [{ params: { tab: 'security' } }, { params: { tab: 'contract' } }, { params: { tab: 'account' } }],
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      tab: params?.tab,
      apiPricingPlanData: null
    }
  }
}

export default AccountSettingsTab
