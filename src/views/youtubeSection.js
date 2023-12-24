import Link from 'next/link'
import React from 'react'

const YoutubeSection = () => {
  return (
    <>
      <section className='FNV-YoutubeCTA'>
        <div className='container d-flex justify-content-center align-items-center flex-column'>
          <svg width='42' height='30' viewBox='0 0 42 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M41.1346 4.69428C40.6507 2.85867 39.232 1.41168 37.433 0.917412C34.1463 0 20.9995 0 20.9995 0C20.9995 0 7.85323 0 4.56659 0.88263C2.80214 1.37638 1.3489 2.85894 0.864919 4.69428C0 8.04697 0 15 0 15C0 15 0 21.9881 0.864919 25.3057C1.34942 27.1411 2.76753 28.5881 4.56684 29.0823C7.88783 30 21 30 21 30C21 30 34.1463 30 37.433 29.1174C39.2323 28.6234 40.6507 27.1764 41.1352 25.341C41.9998 21.9881 41.9998 15.0353 41.9998 15.0353C41.9998 15.0353 42.0344 8.04697 41.1346 4.69428ZM16.8139 21.4235V8.57655L27.7461 15L16.8139 21.4235Z'
              fill='white'
            />
          </svg>

          <p>
            We at Fanavaran provide useful and diverse content for your further information
            <br />
            We have collected about Canadian courses, designations and certificates.
            <br />
            It is enough to visit the YouTube channel of the technicians.
          </p>

          <Link
            href='https://www.youtube.com/channel/UCKbfvGZBXPn2Y3LGb9YDiIA'
            target='_blank'
            className='FNV-Btn BtnOutline BtnLarge'
          >
            FANAVARAN Youtube Channel
          </Link>
        </div>
      </section>
    </>
  )
}

export default YoutubeSection
