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
            <div className='col-6 col-md-3'>
              <Link href='tel:+19055052323'>
                <i data-feather='phone'></i>
                (905) 505-2323
              </Link>
              <Link href='tel:+19055052323'>
                همکاری و ارتباط با مدیریت
              </Link>
            </div>

            {/* Support */}
            <div className='col-6 col-md-3'>
              <Link href='tel:+989121433158'>
                <i data-feather='phone'></i>
                0912 143 3158
              </Link>
              <Link href='tel:+989121433158'>
                مشاوره و فروش ایران
              </Link>
            </div>

            {/* Iran Number */}
            <div className='col-6 col-md-3'>
              <Link href='tel:+16723996600'>
                <i data-feather='phone'></i>
                (672) 399-6600
              </Link>
              <Link href='tel:+16723996600'>
                مشاوره و فروش بریتیش کلمبیا
              </Link>
            </div>

            {/* Iran Number */}
            <div className='col-6 col-md-3'>
              <Link href='tel:+14168932110'>
                <i data-feather='phone'></i>
                (416) 893-2110
              </Link>
              <Link href='tel:+14168932110'>
                مشاوره و فروش اونتاریو
              </Link>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default TopBanner
