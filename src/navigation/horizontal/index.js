const navigation = () => {
  return [
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
      title: 'Quizzes',
      icon: 'tabler:checkbox',
      path: '/app/dashboards/quizzes'
    },
    {
      title: 'Orders',
      icon: 'tabler:file-dollar',
      path: '/app/dashboards/orders'
    },
    {
      icon: 'tabler:settings',
      title: 'Settings',
      children: [
        {
          title: 'Account Setting',
          path: '/app/pages/account-settings/account'
        }
      ]
    }
  ]
}

export default navigation
