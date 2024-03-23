import React from 'react'
import Link from 'next/link'

// Import Translation
import { useTranslation } from 'react-i18next'

const SinglePost = ({ post }) => {
  const { t } = useTranslation()

  return (
    <>
      <Link className='col-md-4' href={`/blog/${post.slug}`} key={post.id} passHref>
        <div className='card'>
          {/* <badge>درحال برگزاری</badge>  */}
          <img src={post.image} className='card-img-top' alt={post.title} />
          <div className='card-body'>
            <h4 className='card-title'>{post.title}</h4>

            <div className='d-flex justify-content-between'>
              <Link href={`/blog/${post.slug}`} className='FNV-Btn BtnOutline PrimaryColor BtnLarge'>
                {t('read-more')}
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default SinglePost
