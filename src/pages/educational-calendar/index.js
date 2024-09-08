// React
import React from 'react'
import Link from 'next/link'
// Date
import { getCurrentMonthDays } from 'src/@core/utils/getCurrentMonthDays'
import { specialDates } from 'src/@core/utils/specialDates'
import { format, isBefore, parseISO, getDate, getMonth, getYear, format as formatDate } from 'date-fns'
// ** Import Translation
import { useTranslation } from 'react-i18next'

function Index() {
  const days = getCurrentMonthDays()
  const today = format(new Date(), 'yyyy-MM-dd')

  return (
    <>
      <section className='FNV-SinglePage FNV-SinglePage-Header'>
        <div className='container'>
          <div className='row FNV-Header'>
            <div className='col-12'>
              <h1 className='mb-0'>تقویم آموزشی فناوران</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Calendar'>
        <div className='container'>
          <Link className='FNV-Btn BtnPrimary BtnLarge mb-4' href='#FNV-Today'>
            برو به امروز
          </Link>
          <div className='row'>
            {days.map(day => {
              const isToday = day === today
              const isPassed = isBefore(parseISO(day), new Date()) && !isToday
              const specialDay = specialDates.find(special => special.date === day)

              const date = parseISO(day)
              const dayValue = getDate(date)
              const monthValue = getMonth(date) + 1 // getMonth() returns 0-indexed month
              const yearValue = getYear(date)
              const monthName = formatDate(date, 'MMMM') // Get month name
              const dayName = formatDate(date, 'EEEE') // Get day name

              return (
                <div key={day} className='col-4 col-md-3'>
                  <div
                    className={`${isToday ? 'card FNV-CurrentDate' : 'card'} ${isPassed ? 'card FNV-PassedDate' : ''}`}
                    id={`${isToday ? 'FNV-Today' : ''}`}
                  >
                    <div className='card-day'>
                      <span>{dayValue}</span>
                    </div>

                    <div className='card-header'>
                      <h3>
                        {dayName}, {dayValue}, {monthName}
                      </h3>
                    </div>

                    <div className='card-body'>
                      {specialDay && (
                        <div className='card row'>
                          {specialDay.events.map((event, index) => (
                            <div className='col' key={index}>
                              <div className='card-header'>
                                <Link href={event.link} key={index}>
                                  <img src={event.image} alt={event.text} className='img-fluid' />
                                </Link>
                              </div>

                              <div className='card-body'>
                                <Link href={event.link} key={index}>
                                  <h4>{event.text}</h4>
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
Index.guestGuard = true
export default Index
