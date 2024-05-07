import React from 'react'
import { appConfig } from 'src/configs/appConfig'

const TopBanner = () => {
  return (
    <img src={appConfig.appUrl + '/images/top_banner.png'} className='img-fluid' />
  )
}

export default TopBanner
