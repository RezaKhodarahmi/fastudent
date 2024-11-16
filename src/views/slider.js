import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const Slider = props => {
  const [searchInput, setSearchInput] = useState('')
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation()
  const router = useRouter()

  const handleSearchInputChange = e => {
    setSearchInput(e.target.value)
  }

  useEffect(() => {
    // This will ensure that the bootstrap carousel is initialized
    if (typeof window !== 'undefined') {
      const bootstrap = require('bootstrap');

      new bootstrap.Carousel('#FNV-Slider-Carousel', {
        interval: 10000,  // Adjust the interval as needed
        ride: 'carousel'
      });
    }
  }, []);

  const handleSearchSubmit = e => {
    e.preventDefault()
    if (searchInput.trim() !== '') {
      setLoading(true)
      router.push(`/search/?s=${searchInput}`).then(() => setLoading(false))
    } else {
      toast.error(t('empty-search-input'))
    }
  }

  return (
    <>
      <section className='FNV-Slider'>
        <div className='container'>
          <div className='row'>
            {/* Content data-bs-ride="carousel" */}
            <div className="FNV-Slider-Content carousel slide" id="FNV-Slider-Carousel" >
              {/* Carousel Inner */}
              <div className="carousel-inner">
                {/* Slide */}
                <div className="carousel-item active">
                  <img src='/images/slider/main-slider.webp' className='img-fluid' />
                </div>
              </div>

              {/* Indicators */}
              <div className="carousel-indicators">
                {/* Next */}
                <button className="carousel-control-next" type="button" data-bs-target="#FNV-Slider" data-bs-slide="next">
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.28127 7.99172C9.28127 8.30839 9.16461 8.62505 8.92294 8.86672L2.85627 15.0834C2.37294 15.5751 1.58127 15.5834 1.08961 15.1084C0.597941 14.6251 0.589608 13.8334 1.06461 13.3417L6.28127 8.00005L1.06461 2.65839C0.581274 2.16672 0.589607 1.37505 1.08961 0.891721C1.58127 0.408388 2.37294 0.416721 2.85627 0.916721L8.92294 7.13339C9.15627 7.37505 9.28127 7.69172 9.28127 8.00839L9.28127 7.99172Z" fill="#223885" />
                  </svg>
                </button>

                {/* Indicators */}
                <button type="button" data-bs-target="#FNV-Slider-Carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">1</button>

                {/* Previous */}
                <button className="carousel-control-prev" type="button" data-bs-target="#FNV-Slider" data-bs-slide="prev">
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.708228 8.00193C0.708228 7.68526 0.824895 7.3686 1.06656 7.12693L7.13323 0.910264C7.61656 0.418597 8.40823 0.410264 8.89989 0.885264C9.39156 1.3686 9.39989 2.16026 8.92489 2.65193L3.70823 7.9936L8.92489 13.3353C9.40823 13.8269 9.39989 14.6186 8.89989 15.1019C8.40823 15.5853 7.61656 15.5769 7.13323 15.0769L1.06656 8.86026C0.833228 8.6186 0.708228 8.30193 0.708228 7.98526L0.708228 8.00193Z" fill="#223885" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Slider
