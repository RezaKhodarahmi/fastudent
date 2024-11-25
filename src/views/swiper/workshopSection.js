import React, { useState, useEffect } from 'react'

// ** Hook Imports
import Link from 'next/link'

// ** Import translation
import { useTranslation } from 'react-i18next'

// ** Loader
import Loader from 'src/views/components/loader/loader.js'

const WorkshopSection = ({ courseData, addToCart }) => {
  const { t } = useTranslation()

  const [filteredCourses, setFilteredCourses] = useState([])

  // Filter courses based on the specified category
  useEffect(() => {
    if (courseData?.data) {
      const manualSlug = 'workshop'
      const courses =
        Array.isArray(courseData?.data?.data) &&
        courseData?.data?.data?.filter(course =>
          course?.categories?.some(category => category.slug === manualSlug)
        )
      console.log('Filtered Courses:', courses) // Debug
      setFilteredCourses(courses || [])
    }
  }, [courseData])

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
        {filteredCourses.slice(0, 3).map(course => (
          <div className="col-12 col-md-4" key={course.id}>
            <div className="card">
              <Link href={`/courses/${course?.slug}`}>
                <LazyImage
                  src={course?.image}
                  alt={course.title}
                  className="FNV-LoopItem-Course-Image"
                />
              </Link>

              <div className="card-body">
                <Link href={`/courses/${course?.slug}`}>
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

                  <location className="col-4">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.92379 18.3432C6.31923 16.8575 4.62354 15.1013 3.31111 13.2971C1.90123 11.359 1.04272 9.51217 1.04272 7.96328C1.04272 6.13645 1.76843 4.38444 3.0602 3.09267C4.35196 1.8009 6.10398 1.0752 7.93081 1.0752C8.83537 1.0752 9.73107 1.25336 10.5668 1.59952C11.4025 1.94568 12.1618 2.45305 12.8014 3.09267C13.441 3.73229 13.9484 4.49163 14.2946 5.32732C14.6407 6.16302 14.8189 7.05872 14.8189 7.96328C14.8189 9.57615 14.0413 11.2946 12.6952 13.1312C11.42 14.871 9.71645 16.6087 7.92379 18.3432ZM7.52427 19.3343L7.94294 19.7165L8.34949 19.3221C12.1297 15.6815 15.8189 11.8163 15.8189 7.96328C15.8189 6.9274 15.6149 5.90167 15.2185 4.94464C14.822 3.98762 14.241 3.11804 13.5085 2.38557C12.7761 1.65309 11.9065 1.07205 10.9494 0.675638C9.99242 0.279225 8.96669 0.0751953 7.93081 0.0751953C5.83876 0.0751953 3.83239 0.906262 2.35309 2.38557C0.873787 3.86487 0.0427246 5.87123 0.0427246 7.96328C0.0427246 11.7132 4.10812 16.2154 7.52427 19.3343ZM7.93081 11.9972C7.13299 11.9972 6.35307 11.7606 5.6897 11.3173C5.02634 10.8741 4.50931 10.2441 4.20399 9.50698C3.89867 8.76988 3.8188 7.95879 3.97444 7.1763C4.13009 6.3938 4.51428 5.67505 5.07842 5.1109C5.64257 4.54676 6.36134 4.16256 7.14384 4.00691C7.92633 3.85126 8.7374 3.93113 9.47451 4.23645C10.2116 4.54177 10.8416 5.0588 11.2849 5.72217C11.7281 6.38554 11.9647 7.16546 11.9647 7.96328C11.9647 9.03313 11.5397 10.0592 10.7832 10.8157C10.0267 11.5722 9.00067 11.9972 7.93081 11.9972ZM6.24528 10.4859C6.74419 10.8192 7.33077 10.9972 7.93081 10.9972C8.73545 10.9972 9.50713 10.6775 10.0761 10.1086C10.6451 9.53959 10.9647 8.76792 10.9647 7.96328C10.9647 7.36324 10.7868 6.77666 10.4534 6.27774C10.12 5.77882 9.64619 5.38996 9.09182 5.16033C8.53745 4.9307 7.92745 4.87063 7.33893 4.98769C6.75042 5.10476 6.20983 5.39372 5.78553 5.81801C5.36124 6.24231 5.07229 6.78288 4.95523 7.37139C4.83817 7.95991 4.89824 8.56993 5.12787 9.1243C5.3575 9.67867 5.74636 10.1525 6.24528 10.4859Z" fill="#6574A9" />
                    </svg>

                  </location>
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
WorkshopSection.defaultProps = {
  courseData: null
}

export default WorkshopSection
