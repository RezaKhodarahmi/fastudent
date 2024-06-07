import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'

// ** Import Translation
import { useTranslation } from 'react-i18next'

function Index() {
//Hooks
  const router = useRouter()
  const { t } = useTranslation()

  // Check website lang
  useEffect(() => {
    const lng = window.localStorage.getItem('i18nextLng')
    if (lng == 'fa') {
      router.push('/fanavaran-certificate/fa')
    }
  }, [])

  return (
    <div>index</div>
  )
}

Index.guestGuard = true
export default Index