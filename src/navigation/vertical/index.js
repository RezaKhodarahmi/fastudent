const navigation = () => {
  return [
    {
      title: 'Pages',
      icon: 'tabler:file',
      children: [
        {
          title: 'User Profile',
          children: [
            {
              icon: 'tabler:smart-home',
              title: 'Dashboard',
              path: '/app/dashboards/main'
            },
            {
              title: 'Courses',
              icon: 'tabler:file-text',
              path: '/app/dashboards/courses'
            },
            {
              title: 'Certificates',
              icon: 'tabler:id',
              path: '/app/dashboards/certificates'
            },

            {
              title: 'Orders',
              icon: 'tabler:file-dollar',
              path: '/app/dashboards/orders'
            }
          ]
        },
        {
          title: 'Account Settings',
          children: [
            {
              title: 'Account',
              path: '/app/pages/account-settings/account'
            },
            {
              title: 'Security',
              path: '/app/pages/account-settings/security'
            }
          ]
        }
      ]
    }
  ]
}

export default navigation
