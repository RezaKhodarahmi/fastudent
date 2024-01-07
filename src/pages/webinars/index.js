import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import WebinarsPagination from '@mui/material/Pagination'
import { Grid } from '@mui/material'
import feather from 'feather-icons'
import { fetchWebinarData } from 'src/store/apps/webinar'
import { useSelector, useDispatch } from 'react-redux'
import YoutubeSection from 'src/views/youtubeSection'
import SingleWebinar from 'src/views/webinar/singleWebinar'

// Import Translation
import { useTranslation } from 'react-i18next'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const WebinarPage = () => {
  const [page, setPage] = useState(1)
  const [webinars, setwebinars] = useState([])

  //Hooks
  const dispatch = useDispatch()
  const webinarData = useSelector(state => state.webinar)

  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchWebinarData())
  }, [])

  useEffect(() => {
    feather.replace()
    if (webinarData?.data) {
      setwebinars(webinarData?.data?.data)
    }
  }, [webinarData])

  const handleChangePage = (event, value) => {
    setPage(value)
  }

  return (
    <>
      <div className='FNV-Courses'>
        <Helmet>
          <title>{t('fanavaran-webinar-page')}</title>
        </Helmet>

        <section className='FNV-Header'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 FNV-HCard'>
                <h1>{t('fanavaran-webinar-page')}</h1>
              </div>
            </div>
          </div>
        </section>

        <section className='FNV-CourseList'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-9'></div>
              {/* <CourseFilters /> */}
              <div class='tab-content' id='pills-tabContent'>
                <div
                  class='tab-pane fade show active'
                  id='All-Courses'
                  role='tabpanel'
                  aria-labelledby='All-Courses-tab'
                  tabWebinarPage='0'
                >
                  <div className='row'>
                    {Array.isArray(webinars) ? (
                      (() => {
                        const filteredWebinars = webinars.slice((page - 1) * 5, page * 5)

                        return filteredWebinars.length ? (
                          filteredWebinars.map(webinar => (
                            <>
                              <SingleWebinar webinar={webinar} />
                            </>
                          ))
                        ) : (
                          <Grid p={5} mt={5} mb={5} container justifyContent='center'>
                            <h3>No Webinar found matching the selected filters.</h3>
                          </Grid>
                        )
                      })()
                    ) : (
                      <h3>Loading...</h3>
                    )}

                    <Grid container justifyContent='center' marginTop={'3rem'}>
                      <WebinarsPagination
                        count={Math.ceil(webinarData?.data?.data?.length / 5)}
                        page={page}
                        onChange={handleChangePage}
                        color='primary'
                      />
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <YoutubeSection />
    </>
  )
}
WebinarPage.guestGuard = true

export default WebinarPage
