import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

// ** Import Translation
import { useTranslation } from 'react-i18next'

// ** Import blog section
import SingleDeskBlog from 'src/views/blog/singleDeskPost'
import SingleMobileBlog from 'src/views/blog/singleMobileBlog'

const BlogSection = () => {
  //Hooks
  const router = useRouter()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  return (
    <>
      <section className='FNV-NewBlogs'>
        <div className='container'>
          <h3>
            {t('blogs-section-title')}

            <Link href="/blog/">
              {t('blogs-section-button')}

              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 2L2 11L11 20"
                  stroke="#223885"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 11H21"
                  stroke="#223885"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </h3>

          {/* Blogs Desktop */}
          <SingleDeskBlog />
        </div>
      </section>
    </>
  )
}

export default BlogSection
