import React, { useState, useEffect } from 'react'

// ** Hook Imports
import Link from 'next/link'

// ** Import translation
import { useTranslation } from 'react-i18next'

// ** Loader
import Loader from 'src/views/components/loader/loader.js'

const CourseDeskSingle = ({ courses, addToCart }) => {
  const { t } = useTranslation()

  // Ensure courses is always treated as an array
  const validCourses = Array.isArray(courses) ? courses : []

  // Lazy loading images with a loader
  const LazyImage = ({ src, alt, className, width, height }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
      <div style={{ position: 'relative', width, height }}>
        {!isLoaded && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f0f0f0' // Adjust as needed
            }}
          >
            <Loader />
          </div>
        )}
        <img
          src={src}
          className={className}
          alt={alt}
          style={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    )
  }

  return (
    <>
      <div className="row FNV-LoopItem FNV-LoopItem-Course">
        {validCourses
          .filter(item => item.id !== 150000)
          .slice(0, 3)
          .map(course => (
            <div className="col-12 col-md-4" key={course.id}>
              <div className="card">
                <Link
                  href={`/courses/${course?.slug}`}
                >
                  <LazyImage
                    src={course?.image}
                    alt={course.title}
                    className="FNV-LoopItem-Course-Image"
                  />
                </Link>

                <div className="card-body">
                  <Link
                    href={`/courses/${course?.slug}`}
                  >
                    <h4>{course.title}</h4>
                  </Link>

                  <div className="row FNV-LoopItem-Course-Details">
                    <price className="col-4">
                      <svg
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.6902 1.01922C20.232 0.827001 21.5994 2.10302 21.422 3.66775L20.5392 11.4251L20.5389 11.4282C20.4685 12.0146 20.199 12.5663 19.7754 12.9814L11.1666 21.4176C10.3742 22.1941 9.0855 22.1941 8.29312 21.4176L1.09852 14.3673C0.300493 13.5852 0.300493 12.3051 1.09852 11.5231L9.78329 3.02177C10.1599 2.65277 10.651 2.40125 11.1769 2.30963L18.5807 1.02599C18.6172 1.01968 18.6539 1.01747 18.6902 1.01922ZM18.6561 2.02785L11.3486 3.29479C11.3485 3.2948 11.3486 3.29478 11.3486 3.29479C11.0204 3.352 10.714 3.50987 10.4832 3.736L1.79843 12.2373C1.40052 12.6272 1.40052 13.2631 1.79843 13.653L8.99303 20.7033C9.39659 21.0988 10.0631 21.0988 10.4667 20.7033L19.0755 12.2672C19.335 12.0129 19.5021 11.6722 19.5458 11.3104C19.5459 11.3099 19.5459 11.3095 19.546 11.309L20.4283 3.55508C20.5316 2.64457 19.708 1.85974 18.7491 2.02102C18.7181 2.02623 18.687 2.02847 18.6561 2.02785ZM17.4892 4.512C17.2725 4.45225 17.0321 4.45225 16.8153 4.512L16.8124 4.51279C15.5783 4.84503 15.5783 6.50754 16.8124 6.83978L16.8153 6.84055C17.0321 6.9003 17.2725 6.90031 17.4892 6.84056L17.4921 6.83978C18.6989 6.51489 18.7256 4.90908 17.5722 4.52748C17.5444 4.52469 17.5166 4.51955 17.4892 4.512ZM17.648 3.52133C17.2882 3.44126 16.9059 3.44999 16.551 3.54755C14.3321 4.14623 14.3321 7.20631 16.551 7.80501C16.9408 7.91216 17.3637 7.91216 17.7535 7.80501C19.9729 7.20619 19.9724 4.13561 17.7521 3.53786C17.7177 3.52861 17.6829 3.52314 17.648 3.52133Z"
                          fill="#6574A9"
                        />
                      </svg>
                      ${course?.cycles?.[course?.cycles?.length - 1]?.regularPrice || 'N/A'}
                    </price>

                    <hour className="col-4">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.525 4C10.8149 4 11.05 4.23505 11.05 4.525V10.7172L15.7723 15.2287C15.982 15.429 15.9895 15.7613 15.7892 15.971C15.5889 16.1806 15.2566 16.1882 15.047 15.9879L10 11.1662V4.525C10 4.23505 10.2351 4 10.525 4Z"
                          fill="#6574A9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.5 19.95C15.7886 19.95 19.9969 15.6744 19.9969 10.5C19.9969 5.32557 15.7886 1.05 10.5 1.05C5.21138 1.05 1.00314 5.32557 1.00314 10.5C1.00314 15.6744 5.21138 19.95 10.5 19.95ZM10.5 21C16.299 21 21 16.299 21 10.5C21 4.70101 16.299 0 10.5 0C4.70101 0 0 4.70101 0 10.5C0 16.299 4.70101 21 10.5 21Z"
                          fill="#6574A9"
                        />
                      </svg>
                      {course?.cycles?.[course?.cycles?.length - 1]?.duration || '0 ساعت'}
                    </hour>
                  </div>

                  <div className="row FNV-LoopItem-Course-Button">
                    <div className="col-6">
                      <Link
                        href={`/courses/${course?.slug}`}
                        className="FNV-Btn BtnPrimary w-100"
                      >
                        {t('see-details')}
                      </Link>
                    </div>

                    <div className="col-6">
                      <Link
                        href="javascript:void(0);"
                        onClick={e => {
                          e.preventDefault()
                          addToCart(course?.cycles[parseInt(course?.cycles?.length) - 1].id)
                        }}
                        className="FNV-Btn BtnOutline PrimaryColor w-100"
                      >
                        {t('add-to-cart')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

// Define default props
CourseDeskSingle.defaultProps = {
  courses: []
}

export default CourseDeskSingle