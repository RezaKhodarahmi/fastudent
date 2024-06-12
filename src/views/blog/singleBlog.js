import React, { useEffect } from 'react'
import Link from 'next/link'
import feather from 'feather-icons'

// ** Format ISO date
import DateFormat from 'src/utils/isoDateToReadble'

// Import Translation
import { useTranslation } from 'react-i18next'

const SinglePost = ({ post }) => {
  const { t } = useTranslation()

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
      <div className='col-md-4'>
        <div className='card'>
          <img src={post.image} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h4 className='card-title'>{post.title}</h4>

            <span>
              {/* SVG and DateFormat component here */}
              <i data-feather="calendar"></i> <DateFormat date={post.createdAt} />
            </span>

            <Link href={`/blog/${post.slug}`} className='FNV-Btn BtnPrimary BtnLarge'>
              {t('blogs-section-readmore')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePost
