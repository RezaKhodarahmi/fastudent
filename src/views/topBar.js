import React, { useEffect } from 'react'
import Link from 'next/link'
import feather from 'feather-icons'

const TopBanner = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof feather !== 'undefined' && feather !== null) {
        feather.replace();
      }
    }, 1000); // 1 second delay

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <section className='FNV-TopBar'>
        <div className='container'>
          <div className='row'>
            {/* Info */}
            <div className='col-4'>
              <Link href='mailto:info@fanavaran.ca'>
                <i data-feather='mail'></i>
                info@fanavaran.ca
              </Link>

              <Link href='tel:+19055052323'>
                <i data-feather='phone'></i>
                (905) 505-2323
              </Link>
            </div>

            {/* Support */}
            <div className='col-4'>
              <Link href='mailto:support@fanavaran.ca'>
                <i data-feather='mail'></i>
                support@fanavaran.ca
              </Link>

              <Link href='tel:+16723996600'>
                <i data-feather='phone'></i>
                (672) 399-6600
              </Link>
            </div>

            {/* Iran Number */}
            <div className='col-4'>
              <Link href='tel:00989121433158'>
                <i data-feather='phone'></i>
                0912 143 3158
              </Link>
              <Link href='tel:00989121433158'>
                پشتیبانی ایران
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopBanner
