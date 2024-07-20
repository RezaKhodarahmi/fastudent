import React from 'react'
import { appConfig } from 'src/configs/appConfig'

const TopBanner = () => {
  return (
    <img src={appConfig.appUrl + '/images/top_banner.png'} alt="25SAVE" className='FNV-TopBanner img-fluid' />
  )
}

export default TopBanner
