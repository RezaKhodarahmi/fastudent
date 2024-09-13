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

  // useEffect(() => {
  //   // This will ensure that the bootstrap carousel is initialized
  //   if (typeof window !== 'undefined') {
  //     const bootstrap = require('bootstrap');
  //     new bootstrap.Carousel('#FNV-Announcement', {
  //       interval: 10000,  // Adjust the interval as needed
  //       ride: 'carousel'
  //     });

  //     new bootstrap.Carousel('#FNV-Slider-Carousel', {
  //       interval: 10000,  // Adjust the interval as needed
  //       ride: 'carousel'
  //     });
  //   }
  // }, []);

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
      {/* <div className='FNV-Canvas-Top'>
        <svg viewBox="0 0 1454 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1453 0.999987L1 99L1 0.999987L1453 0.999987Z" fill="white" stroke="white" />
        </svg>
      </div> */}

      <div className='FNV-Slider-Announce'>
        <div className='container'>
          <div class="col-12 col-md-3">
            <div className="carousel slide" data-bs-ride="carousel" id="FNV-Announcement">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#FNV-Announcement" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#FNV-Announcement" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#FNV-Announcement" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                {/* Item */}
                <div className="carousel-item active">
                  <Link href="/courses/category/packages">
                    <svg width="51" height="35" viewBox="0 0 51 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M25.5522 22.1783L3 12.287L25.5522 2L48.1043 12.287L25.5522 22.1783Z" stroke="#0074FF" stroke-width="2" />
                        <path d="M8.53906 15.0566V25.7393L25.5521 33.2566L40.9825 25.7393V15.4523" stroke="#0074FF" stroke-width="2" />
                        <path d="M48.5 12.2871V30.0915" stroke="#0074FF" stroke-width="2" />
                      </g>
                    </svg>
                    <span>{t('slider-announce-1')}</span>
                  </Link>
                </div>

                {/* Item */}
                <div className="carousel-item">
                  <Link href="/engineering/peng-technical-exams">
                    <svg width="51" height="35" viewBox="0 0 51 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M25.5522 22.1783L3 12.287L25.5522 2L48.1043 12.287L25.5522 22.1783Z" stroke="#0074FF" stroke-width="2" />
                        <path d="M8.53906 15.0566V25.7393L25.5521 33.2566L40.9825 25.7393V15.4523" stroke="#0074FF" stroke-width="2" />
                        <path d="M48.5 12.2871V30.0915" stroke="#0074FF" stroke-width="2" />
                      </g>
                    </svg>
                    <span>{t('slider-announce-2')}</span>
                  </Link>
                </div>

                {/* Item */}
                <div className="carousel-item">
                  <Link href="/courses">
                    <svg width="51" height="35" viewBox="0 0 51 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M25.5522 22.1783L3 12.287L25.5522 2L48.1043 12.287L25.5522 22.1783Z" stroke="#0074FF" stroke-width="2" />
                        <path d="M8.53906 15.0566V25.7393L25.5521 33.2566L40.9825 25.7393V15.4523" stroke="#0074FF" stroke-width="2" />
                        <path d="M48.5 12.2871V30.0915" stroke="#0074FF" stroke-width="2" />
                      </g>
                    </svg>
                    <span>{t('slider-announce-3')}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <div className='col-12 col-md-5'>
                  <svg viewBox="0 0 405 343" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.878 328.179C19.364 324.857 13.0542 317.415 8.77105 309.347C-1.69999 289.621 -1.65473 265.828 2.95922 243.983C8.36363 218.398 19.7505 194.107 35.8836 173.521C41.0373 166.942 46.6507 160.729 52.4625 154.731C71.5973 134.991 92.7692 117.481 116.295 103.185C130.652 94.4633 145.727 86.9242 161.327 80.6897C169.061 77.6003 177.304 74.5631 182.607 68.1408C184.373 71.2823 181.966 75.0258 179.922 77.9934C174.159 86.371 170.573 96.2306 169.611 106.351C169.559 106.904 169.528 107.52 169.869 107.962C170.583 108.88 172.049 108.244 172.947 107.506C177.83 103.491 181.322 98.0815 184.777 92.7899C205.625 60.8487 227.953 29.8746 251.67 0C254.257 10.1067 247.422 19.9802 240.976 28.1873C222.064 52.2658 203.156 76.3409 184.247 100.419C183.457 101.425 182.631 102.747 183.217 103.881C183.85 105.109 185.574 105.088 186.859 105.607C189.777 106.783 190.223 110.71 189.822 113.831C188.597 123.343 183.701 132.333 176.37 138.522C174.507 140.095 172.359 141.545 169.925 141.702C165.896 141.963 162.393 138.456 161.299 134.573C160.202 130.691 160.944 126.551 161.783 122.602C164.399 110.258 167.884 98.0954 172.206 86.2388C172.185 86.2945 168.605 86.6598 168.222 86.7572C166.634 87.1677 165.217 87.8496 163.786 88.6254C151.514 95.2809 138.386 100.221 126.146 107.023C113.802 113.883 101.91 121.555 90.572 129.974C77.4266 139.736 64.9463 150.274 53.7231 162.228C48.1167 168.198 42.7854 174.426 37.7571 180.89C21.1016 202.286 7.51397 226.921 3.87156 253.783C0.229158 280.641 7.79951 309.956 27.885 328.179M174.978 115.345C174.957 115.411 174.936 115.48 174.915 115.546C174.037 115.644 173.142 115.661 172.289 115.856C171.262 116.089 170.252 116.43 169.26 116.795C167.083 117.599 166.373 118.691 166.258 121.04C166.157 123.092 166.735 125.002 167.4 126.888C168.219 129.205 169.277 129.929 171.746 130.019C174.424 130.12 176.865 129.473 179.013 127.796C181.12 126.154 183.077 124.394 184.244 121.923C185.261 119.777 184.449 117.669 182.168 117.015C179.804 116.34 177.377 115.887 174.974 115.341" fill="#223885" />
                    <path d="M367.726 106.511C368.464 102.841 371.692 100.016 375.276 98.8886C378.883 97.7544 382.794 98.0849 386.502 98.8294C391.552 99.8453 396.622 101.898 401.828 100.84C402.702 100.663 403.677 100.416 404.432 100.893C406.609 102.263 401.922 105.335 401.117 105.909C398.815 107.555 396.367 108.999 394.111 110.7C390.392 113.501 386.739 116.385 383.132 119.328C378.02 123.503 373.131 127.963 367.869 131.933C360.999 137.109 353.923 142.032 346.795 146.854C342.79 149.561 338.319 151.488 333.893 153.458C327.628 156.244 321.207 158.596 314.612 160.433C311.551 161.285 308.393 161.797 305.269 162.402C297.619 163.891 289.561 164.984 281.761 164.559C275.399 164.211 268.956 162.573 263.792 158.843C262.316 157.779 260.669 156.29 260.164 154.47C259.558 152.289 261.087 150.379 260.697 148.176C260.491 147.007 259.889 146.552 258.705 146.593C257.716 146.628 256.675 146.733 255.762 147.077C251.406 148.712 247.071 150.42 242.746 152.142C221.546 160.593 200.691 170.488 181.246 182.556C169.629 189.765 158.42 197.718 148.276 206.903C143.203 211.502 138.397 216.411 134.024 221.678C129.782 226.786 126.426 232.23 123.166 238.079C116.797 249.511 111.49 261.848 109.161 274.797C107.099 286.27 107.608 298.416 112.176 309.142C118.479 323.945 131.527 335.68 145.613 343.003C132.763 339.507 121.261 331.286 113.799 320.271C105.703 308.321 103.035 294.036 104.665 279.841C107.702 253.359 121.345 227.791 138.767 207.978C142.611 203.608 146.73 199.482 151.114 195.659C158.981 188.798 167.133 182.334 175.56 176.169C185.397 168.971 195.969 162.976 206.719 157.33C212.652 154.213 218.962 151.781 225.195 149.279C234.225 145.654 243.355 142.279 252.412 138.731C255.978 137.332 259.492 135.798 262.984 134.229C264.207 133.679 265.317 132.872 266.439 132.117C267.104 131.668 267.703 131.254 268.532 131.731C269.301 132.173 269.51 132.837 269.472 133.669C269.364 136.083 268.107 138.018 266.867 139.959C266.39 140.703 265.815 141.389 265.394 142.158C264.311 144.137 265.049 146.51 267.16 147.317C269.74 148.302 272.334 149.224 275.197 149.224C280.859 149.22 286.517 149.446 292.179 149.453C304.701 149.471 316.76 146.903 328.617 143.034C351.294 135.634 371.271 123.284 389.4 107.892C389.884 107.482 390.413 106.835 390.082 106.292C389.929 106.045 389.643 105.923 389.372 105.815C385.788 104.417 381.968 103.13 378.1 102.935C374.311 102.743 370.275 103.808 367.712 106.602C367.719 106.574 367.723 106.546 367.73 106.515" fill="#223885" />
                    <path d="M176.956 150.302C175.807 150.076 174.64 149.923 173.526 149.585C173.115 149.46 172.666 148.945 172.561 148.528C172.502 148.284 173.028 147.741 173.4 147.574C175.117 146.795 176.879 146.11 178.613 145.376C183.718 143.212 188.809 140.996 193.507 138.031C195.384 136.849 197.118 135.394 198.765 133.895C200.68 132.152 202.362 130.155 204.26 128.391C206.872 125.966 208.836 123.012 211.123 120.323C214.428 116.437 218.44 113.313 222.406 110.157C224.471 108.515 226.038 106.518 227.521 104.368C229.255 101.853 231.164 99.4382 233.176 97.1386C235.851 94.084 238.64 91.1233 241.492 88.2322C243.933 85.7586 247.13 84.6314 250.427 83.8486C252.179 83.4311 253.763 84.4192 254.505 86.2109C254.867 87.0772 255.076 88.0061 255.358 88.9037C256.65 93.0403 262.838 87.3381 264.983 86.0404C267.459 84.5479 270.011 82.9928 271.979 80.8427C274.159 78.4596 275.454 75.1718 277.031 72.3782C277.261 71.9676 277.543 71.5849 277.784 71.1814C278.658 69.7306 279.932 69.0174 281.628 69.167C283.623 69.3409 285.619 69.5323 287.607 69.7724C290.967 70.1794 291.995 72.8478 290.629 75.725C288.944 79.2737 285.375 81.8238 281.938 83.4972C278.24 85.2994 274.228 86.3535 270.356 87.7486C268.754 88.3262 268.58 89.3003 268.685 90.8554C268.702 91.1477 268.695 91.4573 268.786 91.7322C269.625 94.3101 268.678 96.4532 267.556 98.7772C265.968 102.068 263.35 104.086 260.421 105.895C256.814 108.125 252.83 109.315 248.728 110.3C242.537 111.789 236.422 113.57 230.46 115.842C228.921 116.43 227.351 116.952 225.773 117.432C218.551 119.634 212.931 123.983 208.609 130.103C207.624 131.498 206.645 132.9 205.635 134.281C204.02 136.494 201.955 138.233 199.792 139.893C198.441 140.926 197.139 142.053 195.972 143.288C194.026 145.351 191.766 146.802 189.091 147.776C184.502 149.45 180.995 149.909 176.963 150.312M229.611 107.75C230.223 107.607 231.24 107.485 232.163 107.127C234.416 106.261 236.624 105.28 238.856 104.351C243.466 102.434 246.854 98.9999 250.009 95.3051C251.524 93.5308 251.075 91.7252 249.041 90.6362C246.221 89.1263 243.989 89.3803 241.593 91.5025C241.018 92.0105 240.454 92.5323 239.939 93.0959C236.394 96.9577 232.859 100.83 229.332 104.706C228.938 105.14 228.548 105.596 228.249 106.101C227.615 107.165 228.005 107.781 229.614 107.75M245.914 107.663C246.05 107.642 246.287 107.624 246.513 107.565C251.207 106.341 255.769 104.74 259.944 102.242C261.448 101.341 262.786 100.141 264.105 98.9721C265.331 97.8866 265.293 96.8429 264.182 95.6182C263.472 94.8355 262.563 94.3867 261.529 94.3797C259.467 94.3658 257.406 94.4249 255.348 94.5015C254.219 94.5432 253.373 95.1033 252.701 96.0323C251.698 97.41 250.626 98.739 249.564 100.075C248.317 101.64 247.032 103.175 245.796 104.751C245.437 105.21 245.12 105.728 244.904 106.268C244.539 107.172 244.873 107.631 245.918 107.663" fill="#223885" />
                    <path d="M337.811 89.7525C339.374 90.8762 339.12 93.4612 338.215 94.9363C337.194 96.5923 335.401 97.6221 333.594 98.3492C329.067 100.176 324.07 100.551 319.195 100.301C317.297 100.204 315.375 100.009 313.602 99.3268C309.354 97.6882 307.474 93.2107 308.626 88.9071C309.26 86.5274 310.667 84.4086 312.331 82.5891C315.866 78.7204 320.716 76.1355 325.849 75.1474C329.363 74.4725 337.651 73.14 338.232 78.3864C338.382 79.7398 337.974 81.0896 337.456 82.3456C336.693 84.1999 336.097 86.1238 334.725 87.6268C334.224 88.173 333.949 88.9419 333.629 89.6342C333.312 90.3161 333.235 91.0293 333.914 91.5581C334.555 92.0591 335.283 91.9164 335.906 91.5511C336.352 91.2902 336.714 90.8692 337.069 90.4831C337.341 90.1874 337.435 89.916 337.818 89.7455M319.463 94.0178C321.406 93.8717 322.935 93.7882 324.456 93.6247C325.595 93.5029 326.744 93.1619 327.423 92.2226C328.935 90.1282 330.313 87.9399 331.741 85.7864C331.804 85.6924 331.828 85.5672 331.86 85.4558C332.375 83.7685 331.839 82.8535 330.115 82.5474C328.607 82.2795 327.096 82.0046 325.574 81.8237C320.407 81.2079 316.19 83.0205 312.948 87.0214C310.956 89.4811 311.802 92.2052 314.835 93.1028C316.458 93.5829 318.167 93.7708 319.463 94.0178Z" fill="#223885" />
                    <path d="M189.773 48.2823C189.209 52.3076 187.959 55.5605 185.549 58.2985C184.759 59.1961 184.348 59.3005 183.617 58.6882C182.314 57.5992 181.047 56.4616 179.824 55.2822C178.735 54.2315 178.578 52.9338 179.118 51.5422C179.988 49.2947 180.852 47.0473 181.743 44.8102C182.649 42.5314 184.007 42.0896 185.95 43.5508C187.026 44.3579 188.053 45.2764 188.913 46.3062C189.439 46.9324 189.603 47.8614 189.777 48.2858" fill="#223885" />
                    <path d="M274.855 117.526C274.66 118.117 274.507 118.74 274.256 119.325C273.42 121.262 272.543 123.183 271.689 125.117C271.139 126.366 270.29 126.947 269.036 126.418C267.264 125.674 265.578 124.693 263.931 123.691C263.116 123.197 263.116 122.285 263.513 121.478C263.952 120.584 264.46 119.721 264.986 118.876C265.958 117.31 266.71 115.685 266.79 113.793C266.811 113.285 266.978 112.739 267.229 112.297C267.643 111.577 268.319 111.173 269.165 111.504C271.359 112.359 273.18 113.713 274.371 115.779C274.649 116.266 274.688 116.893 274.855 117.522" fill="#223885" />
                    <path d="M328.653 225.502C328.684 229.068 326.49 231.339 323.972 233.371C323.116 234.064 322.144 233.893 321.232 233.083C320.048 232.028 318.927 230.908 317.795 229.795C317.14 229.148 316.97 228.361 317.388 227.533C318.387 225.54 319.411 223.557 320.452 221.584C321.089 220.374 322.242 220.137 323.464 220.161C326.264 220.213 328.667 222.708 328.649 225.502" fill="#223885" />
                    <path d="M221.031 21.3891L190.213 65.4165C190.213 65.4165 192.469 67.5909 198.494 61.1407C204.518 54.6906 229.283 19.4408 229.283 19.4408C229.283 19.4408 232.313 7.69898 221.031 21.3891Z" fill="#223885" />
                  </svg>

                  <h2>جشن مهرگان</h2>
                  <h3>11 اکتبر، تورنتو، ساعت <span dir="ltr">6:30 PM</span></h3>

                  <Link className='FNV-Slider-ACB' href="https://mehregan.vip/ticket/" target='_blank'>
                    <h4>خرید بلیط جشن مهرگان</h4>
                  </Link>
                </div>
                {/* Right */}
                <div className='col-12 col-md-3'>
                  <span>فرصت بسیار محدود است!</span>
                  <span><strong>50%</strong> تخفیف برای کودکان زیر ۱۲ سال</span>
                  <span>تخفیف 200 دلاری خرید دوره از فناوران</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slide */}
          <div className="carousel-item">
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
              <button type="button" data-bs-target="#FNV-Slider-Carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
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

      {/* <div className='FNV-Canvas-Bottom'>
        <svg viewBox="0 0 1454 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1453 0.999987L1 99L1 0.999987L1453 0.999987Z" fill="white" stroke="white" />
        </svg>
      </div> */}
    </div>
  )
}

export default SearchSection
