import React from 'react'
import Link from 'next/link'

// Import Translation
import { useTranslation } from 'react-i18next'

const SingleWebinar = ({ webinar }) => {
  const { t } = useTranslation()

  return (
    <>
      <Link className='col-md-4' href={`/webinars/${webinar.slug}`} key={webinar.id} passHref>
        <div className='card'>
          {/* <badge>درحال برگزاری</badge>  */}
          <img src={webinar.image} className='card-img-top' alt={webinar.title} />
          <div className='card-body'>
            <h4 className='card-title'>{webinar.title}</h4>

            <div className='d-flex justify-content-between'>
              <Link href={`/webinars/${webinar.slug}`} className='FNV-Btn BtnOutline PrimaryColor BtnLarge'>
                {t('see-detail')}
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default SingleWebinar
