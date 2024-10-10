import React, { useState, useEffect } from 'react'
import { appConfig } from 'src/configs/appConfig'
import Link from 'next/link'

import Input from '@mui/material/Input'
import CircularProgress from '@mui/material/CircularProgress'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const SearchSection = props => {
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
    <div className='FNV-Slider'>
      <div className='FNV-Canvas-Top'>
        <svg viewBox="0 0 1454 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1453 0.999987L1 99L1 0.999987L1453 0.999987Z" fill="white" stroke="white" />
        </svg>
      </div>

      {/* Content data-bs-ride="carousel" */}
      <div className="FNV-Slider-Content carousel slide" id="FNV-Slider-Carousel" >
        {/* Carousel Inner */}
        <div className="carousel-inner">
          {/* Slide */}
          <div className="carousel-item active">
            {/* Object 
              <div className='FNV-Slider-Object'>
                <div className='FNV-Slider-Object-Person'></div>
              </div>
            */}

            <div className='container'>
              <div className='row'>
                {/* Left */}
                <div className='col-12 col-md-5 pt-5'>
                  <h2>ریسک‌ها ر و مدیریت کن</h2>
                  <h3>کلی درآمد کسب کن!</h3>
                  <Link href="/courses/rmp-exam-prep" className='FNV-Slider-ACB'>
                    <h4>ثبت نام در دوره مدیریت ریسک (PMI-RMP)</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </Link>

                  <form onSubmit={handleSearchSubmit} className='FNV-Search input-group'>
                    <Input
                      type='text'
                      placeholder={t('search-placeholder')}
                      className='form-control'
                      aria-describedby='button-addon1'
                      fullWidth
                      autoFocus
                      value={searchInput}
                      onChange={handleSearchInputChange}
                    />

                    <button className='FNV-Btn BtnMedium PrimaryColor' type='submit' id='button-addon1' disabled={loading}>
                      {loading ? (
                        <CircularProgress size={22} />
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='feather feather-search'
                        >
                          <circle cx='11' cy='11' r='8'></circle>
                          <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                        </svg>
                      )}
                    </button>
                  </form>
                </div>
                {/* Right */}
                <div className='col-12 col-md-7'>
                  <div className='card'>
                    <Link href="https://www.credly.com/badges/652e555d-4a36-44ae-9f94-c1ebd26b863f/public_url" target="_blank">
                      <img src="images/certificate/pmi.png" className='img-fluid' />
                      <p>PMI Authorized Training Partner</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide */}
          <div className="carousel-item">
            <div className='container'>
              <div className='row'>
                {/* Left */}
                <div className='col-12 col-md-5 pt-5'>
                  <h2>با استانداردهای کانادایی</h2>
                  <h3>لوله‌کشی کن!</h3>
                  <Link href="/courses/workshop-of-renovation-plumbing-toronto" className='FNV-Slider-ACB'>
                    <h4>ثبت نام در کارگاه لوله‌کشی تورنتو</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </Link>

                  <form onSubmit={handleSearchSubmit} className='FNV-Search input-group'>
                    <Input
                      type='text'
                      placeholder={t('search-placeholder')}
                      className='form-control'
                      aria-describedby='button-addon1'
                      fullWidth
                      autoFocus
                      value={searchInput}
                      onChange={handleSearchInputChange}
                    />

                    <button className='FNV-Btn BtnMedium PrimaryColor' type='submit' id='button-addon1' disabled={loading}>
                      {loading ? (
                        <CircularProgress size={22} />
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='feather feather-search'
                        >
                          <circle cx='11' cy='11' r='8'></circle>
                          <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                        </svg>
                      )}
                    </button>
                  </form>
                </div>

                {/* Right */}
                <div className='col-12 col-md-7'></div>
              </div>
            </div>
          </div>

          {/* Slide */}
          <div className="carousel-item">
            <div className='container'>
              <div className='row'>
                {/* Left */}
                <div className='col-12 col-md-5 pt-5'>
                  <h2>برق کانادا</h2>
                  <h3>رو وصل کن!</h3>
                  <Link href="/courses/workshop-of-renovation-electrical-work-toronto" className='FNV-Slider-ACB'>
                    <h4>ثبت نام در کارگاه برق تورنتو</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </Link>

                  <form onSubmit={handleSearchSubmit} className='FNV-Search input-group'>
                    <Input
                      type='text'
                      placeholder={t('search-placeholder')}
                      className='form-control'
                      aria-describedby='button-addon1'
                      fullWidth
                      autoFocus
                      value={searchInput}
                      onChange={handleSearchInputChange}
                    />

                    <button className='FNV-Btn BtnMedium PrimaryColor' type='submit' id='button-addon1' disabled={loading}>
                      {loading ? (
                        <CircularProgress size={22} />
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='feather feather-search'
                        >
                          <circle cx='11' cy='11' r='8'></circle>
                          <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                        </svg>
                      )}
                    </button>
                  </form>
                </div>

                {/* Right */}
                <div className='col-12 col-md-7'></div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <section>
          <div className='container'>
            <div className="carousel-indicators">
              {/* Navigation 
              <button className="carousel-control-prev" type="button" data-bs-target="#FNV-Slider" data-bs-slide="prev">
                <svg viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659729 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM14 4.5C14.2761 4.5 14.5 4.27614 14.5 4C14.5 3.72386 14.2761 3.5 14 3.5L14 4.5ZM1 4.5L14 4.5L14 3.5L1 3.5L1 4.5Z" />
                </svg>
              </button>*/}
              {/* Indicators */}
              <button type="button" data-bs-target="#FNV-Slider-Carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#FNV-Slider-Carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#FNV-Slider-Carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              {/* Navigation 
              <button className="carousel-control-next" type="button" data-bs-target="#FNV-Slider" data-bs-slide="next">
                <svg viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464467C11.9763 0.269205 11.6597 0.269205 11.4645 0.464467C11.2692 0.659729 11.2692 0.976312 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM1 4.5L15 4.5L15 3.5L1 3.5L1 4.5Z" />
                </svg>
              </button>*/}
            </div>
          </div>
        </section>
      </div>

      <div className='FNV-Canvas-Bottom'>
        <svg viewBox="0 0 1454 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1453 0.999987L1 99L1 0.999987L1453 0.999987Z" fill="white" stroke="white" />
        </svg>
      </div>
    </div>
  )
}

export default SearchSection
