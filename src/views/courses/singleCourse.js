import React from 'react'
import Link from 'next/link'

// Import Translation
import { useTranslation } from 'react-i18next'

const SingleCourse = ({ course, addToCart }) => {
  const { t } = useTranslation()
  return (
    <>
      <Link className='col-md-4' href={`/courses/${course.slug}`} key={course.id} passHref>
        <div className='card'>
          {/* <badge>درحال برگزاری</badge>  */}
          <img src={course.image} className='card-img-top' alt={course.title} />
          <div className='card-body'>
            <h4 className='card-title'>{course.title}</h4>
            <price>{course.cycles[parseInt(course.cycles?.length) - 1]?.regularPrice}</price>
            <div className='d-flex justify-content-between'>
              <Link href={`/courses/${course.slug}`} className='FNV-Btn BtnOutline PrimaryColor BtnLarge'>
                {t('see-details')}
              </Link>

              <Link
                href='#'
                onClick={e => {
                  e.preventDefault()
                  addToCart(course.cycles[parseInt(course.cycles?.length) - 1].id)
                }}
                className='FNV-Btn SecondaryColor BtnLarge'
              >
                {t('add-to-cart')}
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default SingleCourse
