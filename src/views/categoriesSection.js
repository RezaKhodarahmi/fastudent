import React from 'react'

// ** Hook Imports
import Link from 'next/link'

// ** Import Translation
import { useTranslation } from 'react-i18next'

// ** Sections
import CategoriesLogo from 'src/views/categoriesLogo'

const CategoriesSection = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className='FNV-Top_Categories'>
        <div className='container'>
          <div className='row'>
            <h2>{t('category-title')}</h2>

            {/* Engineering */}
            <div className='col-6 col-md-3'>
              <Link href='/engineering' className='card'>
                <svg width="78" height="95" viewBox="0 0 78 95" fill="none">
                  <path
                    d="M60.55 31.22V27.38L56.71 25.46V21.62C56.71 11.94 50.76 6.6 43.27 2.42V12.02L43.04 12.25H37.51V0.5H25.99V12.25H20.46L20.23 12.02V2.42C12.55 6.6 6.79 11.94 6.79 21.62V25.46L2.95 27.38V31.22L1.03 36.1H62.46L60.54 31.22H60.55Z"
                    fill="url(#paint0_linear)"
                  />
                  <path
                    d="M47.11 64.01V83.21"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M60.55 31.22V27.38L56.71 25.46V21.62C56.71 11.94 50.76 6.6 43.27 2.42V12.02L43.04 12.25H37.51V0.5H25.99V12.25H20.46L20.23 12.02V2.42C12.55 6.6 6.79 11.94 6.79 21.62V25.46L2.95 27.38V31.22L1.03 36.1H62.46L60.54 31.22H60.55Z"
                    fill="url(#paint1_linear)"
                  />
                  <path
                    d="M59.67 86.01V78.33C59.67 76.41 58.79 75.65 57.75 74.49L51.99 68.73"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M52.87 80.06L37.51 89.66V93.5"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.39 64.01V83.21"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.84 86.01V78.33C3.84 76.41 4.72 75.65 5.76 74.49L11.52 68.73"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.63 80.06L25.99 89.66V93.5"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M52.87 38.01V49.53C52.87 52.04 52.27 57.15 50.95 59.13C49.63 61.11 43.27 66.81 43.27 66.81C40.53 69.44 37.03 70.65 33.67 70.65H29.83C26.47 70.65 22.97 69.44 20.23 66.81C20.23 66.81 13.87 61.11 12.55 59.13C11.23 57.15 10.63 52.04 10.63 49.53V38.01"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M60.55 31.22V27.38L56.71 25.46V21.62C56.71 11.94 50.76 6.6 43.27 2.42V12.02L43.04 12.25H37.51V0.5H25.99V12.25H20.46L20.23 12.02V2.42C12.55 6.6 6.79 11.94 6.79 21.62V25.46L2.95 27.38V31.22L1.03 36.1H62.46L60.54 31.22H60.55Z"
                    stroke="url(#paint2_linear)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M64.15 90.74C71.22 90.74 76.96 85.00 76.96 77.93C76.96 70.86 71.22 65.12 64.15 65.12C57.08 65.12 51.34 70.86 51.34 77.93C51.34 85.00 57.08 90.74 64.15 90.74Z"
                    fill="#40DDA9"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M57.47 78.36L62.72 83.42L70.97 73.24"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="paint0_linear" x1="6.09" y1="1.77" x2="31.56" y2="27.65" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#40DDA9" stopOpacity="0" />
                      <stop offset="1" stopColor="#40DDA9" />
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="16.04" y1="11.89" x2="41.51" y2="37.77" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#40DDA9" stopOpacity="0" />
                      <stop offset="1" stopColor="#40DDA9" />
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="11.94" y1="7.72" x2="51.34" y2="47.75" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#40DDA9" stopOpacity="0" />
                      <stop offset="1" stopColor="#40DDA9" />
                    </linearGradient>
                  </defs>
                </svg>
                <h3>{t('engineering')}</h3>
              </Link>
            </div>

            {/* Project Management */}
            <div className='col-6 col-md-3'>
              <Link href='/project-management' className='card'>
                <svg width="90" height="96" viewBox="0 0 90 96" fill="none">
                  <path
                    d="M74.49 82.3V90.46C74.49 92.71 72.66 94.54 70.41 94.54H5.15C2.9 94.54 1.07 92.71 1.07 90.46V15.01C1.07 12.76 2.9 10.93 5.15 10.93H13.31"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M62.25 10.93H70.41C72.66 10.93 74.49 12.76 74.49 15.01V25.21"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M66.33 82.3V86.38H9.23V19.09H13.31"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M62.25 19.09H66.33V25.2"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M51.04 9.04H45.36C45.36 4.86 41.97 1.46 37.78 1.46C33.59 1.46 30.2 4.85 30.2 9.04H24.52C21.38 9.04 18.84 11.58 18.84 14.72V20.4H56.72V14.72C56.72 11.58 54.18 9.04 51.04 9.04Z"
                    stroke="url(#paint0_linear)"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M51.04 9.04H45.36C45.36 4.86 41.97 1.46 37.78 1.46C33.59 1.46 30.2 4.85 30.2 9.04H24.52C21.38 9.04 18.84 11.58 18.84 14.72V20.4H56.72V14.72C56.72 11.58 54.18 9.04 51.04 9.04Z"
                    fill="url(#paint1_linear)"
                  />
                  <path
                    d="M68.37 74.3C79.72 74.3 88.92 65.1 88.92 53.75C88.92 42.4 79.72 33.2 68.37 33.2C57.02 33.2 47.82 42.4 47.82 53.75C47.82 65.1 57.02 74.3 68.37 74.3Z"
                    fill="#40DDA9"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M68.37 39.98V55.39L75.22 63.95"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.43 39.48L23.51 43.56L31.66 33.36"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.43 55.79L23.51 59.87L31.66 49.68"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.43 72.11L23.51 76.19L31.66 65.99"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="21.36"
                      y1="7.15"
                      x2="55.65"
                      y2="24.09"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#40DDA9" stopOpacity="0" />
                      <stop offset="1" stopColor="#40DDA9" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear"
                      x1="20.87"
                      y1="6.82"
                      x2="54.84"
                      y2="23.59"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#40DDA9" stopOpacity="0" />
                      <stop offset="1" stopColor="#40DDA9" />
                    </linearGradient>
                  </defs>
                </svg>
                <h3>{t('project-management')}</h3>
              </Link>
            </div>

            {/* Self Employed */}
            <div className='col-6 col-md-3'>
              <Link href='/technical-self-employment' className='card'>
                <svg width="100" height="89" viewBox="0 0 100 89" fill="none">
                  <path
                    d="M90.67 7.16L63.7 33.2L74.2 35.46C71.23 48.1 64.12 56.43 54.24 64.75L46.89 70.26C42.68 73.08 38.22 75.53 33.6 77.61C26.02 81.03 17.82 83.4 9.81 85.58L1 88.03H35.21C63.58 83.58 85.45 57.7 90.05 39.89C92.52 40.55 99 41.62 99 41.62L90.67 7.15V7.16Z"
                    fill="url(#paint0_linear)"
                  />
                  <path
                    d="M33.24 45.34H11.55V61.6H33.24V45.34Z"
                    fill="#40DDA9"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35.21 88.03C63.58 83.58 85.45 57.7 90.05 39.89C92.52 40.55 99 41.62 99 41.62L90.67 7.15L63.7 33.19L74.2 35.45C71.23 48.09 64.12 56.42 54.24 64.74L46.89 70.25C42.68 73.07 38.22 75.52 33.6 77.6C26.02 81.02 17.82 83.39 9.81 85.57L1 88.02"
                    stroke="url(#paint1_linear)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.2 61.6L17.11 79.67"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36.99 16.43C40.98 16.43 44.22 13.19 44.22 9.2C44.22 5.21 40.98 1.97 36.99 1.97C32.99 1.97 29.76 5.21 29.76 9.2C29.76 13.19 32.99 16.43 36.99 16.43Z"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M38.8 34.58L49.5 40.48"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.34 79.67L31.36 61.6"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M53.11 68.83L51.23 52.57L38.65 45.34V27.27C38.65 23.88 36.36 23.42 33.3 21.85C30.36 20.34 27.49 20.09 24.3 21.85C22.4 22.89 20.65 24.15 20.65 24.15C19.41 25.18 18.77 26.4 18.77 28.01V45.35M33.25 52.94L44.03 57.09L45.78 68.84M25.99 30.1V44.26C25.99 44.63 26 45 26.03 45.37"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="34.12"
                      y1="80.71"
                      x2="103.41"
                      y2="11.42"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#40DDA9" stopOpacity="0" />
                      <stop offset="1" stopColor="#40DDA9" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear"
                      x1="13.55"
                      y1="101.29"
                      x2="99.53"
                      y2="15.31"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.18" stopColor="#40DDA9" stopOpacity="0" />
                      <stop offset="0.26" stopColor="#40DDA9" stopOpacity="0.03" />
                      <stop offset="0.38" stopColor="#40DDA9" stopOpacity="0.1" />
                      <stop offset="0.5" stopColor="#40DDA9" stopOpacity="0.22" />
                      <stop offset="0.64" stopColor="#40DDA9" stopOpacity="0.39" />
                      <stop offset="0.78" stopColor="#40DDA9" stopOpacity="0.61" />
                      <stop offset="0.93" stopColor="#40DDA9" stopOpacity="0.87" />
                      <stop offset="1" stopColor="#40DDA9" />
                    </linearGradient>
                  </defs>
                </svg>
                <h3>{t('self-employed')}</h3>
              </Link>
            </div>

            {/* Architect */}
            <div className='col-6 col-md-3'>
              <Link href='/architect' className='card'>
                <svg width="96" height="92" viewBox="0 0 96 92" fill="none">
                  <path
                    d="M51.87 45.16L69.94 34.78L68.87 56.16L51.87 66.07L51.1 45.48L51.87 45.16Z"
                    fill="#40DDA9"
                  />
                  <path
                    d="M45.62 27.63L51.1 24.52L69.14 34.78L51.1 45.03"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M33.37 50.28L33.48 55.53L51.1 65.78V45.03"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M51.1 65.78L68.73 55.53L69.14 34.78"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40.75 31.76L11.11 1.7C9.73 0.3 6.45 1.29 3.79 3.91C1.13 6.53 0.09 9.79 1.48 11.19L31.11 41.25L45.62 46.34L40.74 31.76H40.75Z"
                    fill="url(#paint0_linear)"
                  />
                  <path
                    d="M40.75 31.76L11.11 1.7C9.73 0.3 6.45 1.29 3.79 3.91C1.13 6.53 0.09 9.79 1.48 11.19L31.11 41.25L45.62 46.34L40.74 31.76H40.75Z"
                    stroke="url(#paint1_linear)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.42 56.64H18.96"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.42 63.78H18.96"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.74 27.4V81.54"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M79.94 15.67H37.57"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M80.66 53.08H86.22C91 53.08 94.88 56.96 94.88 61.74"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M94.87 63.23C94.87 68.01 90.99 71.89 86.21 71.89L13.39 72.14C8.61 72.14 4.73 76.02 4.73 80.8V82.29C4.73 87.07 8.61 90.95 13.39 90.95H26.05V77.44"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M94.87 63.23V24.11C94.87 17.05 89.15 11.33 82.09 11.33H80.66V53.09"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="0.87"
                      y1="23.7"
                      x2="45.62"
                      y2="23.7"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#40DDA9" stopOpacity="0" />
                      <stop offset="1" stopColor="#40DDA9" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear"
                      x1="0.37"
                      y1="23.7"
                      x2="46.12"
                      y2="23.7"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.18" stopColor="#40DDA9" stopOpacity="0" />
                      <stop offset="0.26" stopColor="#40DDA9" stopOpacity="0.03" />
                      <stop offset="0.38" stopColor="#40DDA9" stopOpacity="0.1" />
                      <stop offset="0.5" stopColor="#40DDA9" stopOpacity="0.22" />
                      <stop offset="0.64" stopColor="#40DDA9" stopOpacity="0.39" />
                      <stop offset="0.78" stopColor="#40DDA9" stopOpacity="0.61" />
                      <stop offset="0.93" stopColor="#40DDA9" stopOpacity="0.87" />
                      <stop offset="1" stopColor="#40DDA9" />
                    </linearGradient>
                  </defs>
                </svg>
                <h3>{t('architect')}</h3>
              </Link>
            </div>

            {/* Language */}
            <div className='col-6 col-md-3'>
              <Link href='/english' className='card'>
                <svg width="98" height="97" viewBox="0 0 98 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.98 44.8997L37.27 21.6797L46.56 44.8997" stroke="#273B83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M31.0801 37.1597H43.4701" stroke="#273B83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M56.3999 21.5601V44.8701" stroke="#273B83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M62.8599 21.3799H56.3999V31.4199H62.8599C65.6199 31.4199 67.8799 29.1599 67.8799 26.3999C67.8799 23.6399 65.6199 21.3799 62.8599 21.3799Z" stroke="#273B83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M64.0699 44.8699H56.3999V31.4199H64.0699C67.3499 31.4199 70.0299 34.4499 70.0299 38.1399C70.0299 41.8299 67.3499 44.8599 64.0699 44.8599V44.8699Z" stroke="#273B83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M93.9 65.0298C95.61 65.0298 97 66.4198 97 68.1298V72.7798H1V68.1298C1 66.4198 2.39 65.0298 4.1 65.0298" fill="url(#paint0_linear_11_2935)" />
                  <path d="M22.6799 95.45L36.6099 73.77H27.3199L13.3899 95.45" stroke="#273B83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M84.6099 95.45L70.6799 73.77H61.3899L75.3199 95.45" stroke="#273B83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M28.8699 86.1602H69.1299" stroke="#273B83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M93.9 65.0298C94.25 65.1098 95.2 65.3598 96 66.2098C96.7 66.9498 96.92 67.7698 97 68.1298V72.7798H1V68.1298C1 66.4198 2.39 65.0298 4.1 65.0298H93.91H93.9Z" stroke="url(#paint1_linear_11_2935)" stroke-width="2" stroke-miterlimit="10" />
                  <path d="M7.19009 65.0298C5.48009 65.0298 4.09009 63.6398 4.09009 61.9298V10.5898C4.09009 5.5998 8.14009 1.5498 13.1301 1.5498H83.3601C89.1801 1.5498 93.9001 6.2698 93.9001 12.0898V61.9398C93.9001 63.6498 92.5101 65.0398 90.8001 65.0398H18.0301" stroke="#273B83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M71.1299 58.8398H82.6099C83.7099 58.8398 84.6099 59.7398 84.6099 60.8398V65.0298H69.1299V60.8398C69.1299 59.7398 70.0299 58.8398 71.1299 58.8398Z" fill="#40DDA9" stroke="#273B83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_11_2935" x1="-26.06" y1="68.8998" x2="69.94" y2="68.8998" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#40DDA9" stop-opacity="0" />
                      <stop offset="1" stop-color="#40DDA9" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_11_2935" x1="3.04232e-08" y1="68.8998" x2="98" y2="68.8998" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#40DDA9" stop-opacity="0" />
                      <stop offset="1" stop-color="#40DDA9" />
                    </linearGradient>
                  </defs>
                </svg>
                <h3>{t('english')}</h3>
              </Link>
            </div>

            {/* Technician */}
            <div className='col-6 col-md-3'>
              <Link href='/technician' className='card'>
                <svg width="88" height="99" viewBox="0 0 88 99" fill="none">
                  <path
                    d="M60.72 74.9C64.86 78.99 69 83.09 73.14 87.18C75.64 89.68 80.18 89.04 83.52 85.7L83.67 85.55C87.01 82.21 87.51 77.83 85.01 75.32C81.06 71.37 77.1 67.41 73.15 63.46"
                    fill="#40DDA9"
                  />
                  <path
                    d="M60.72 74.9C64.86 78.99 69 83.09 73.14 87.18C75.64 89.68 80.18 89.04 83.52 85.7L83.67 85.55C87.01 82.21 87.51 77.83 85.01 75.32C81.06 71.37 77.1 67.41 73.15 63.46"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M65.34 40.46L66.82 38.98C67.64 38.16 67.64 36.83 66.82 36.02L62.37 31.57C61.55 30.75 60.22 30.75 59.41 31.57L56.45 34.53"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M52 38.98L56.45 34.53C57.27 33.71 57.27 32.38 56.45 31.57L52 27.12C51.18 26.3 49.85 26.3 49.04 27.12L44.59 31.57"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M55.55 54.47L59.41 58.27C60.23 59.08 61.55 59.07 62.36 58.26L72.75 47.87C73.57 47.05 73.57 45.72 72.75 44.91L68.3 40.46C67.48 39.64 66.15 39.64 65.34 40.46L59.41 46.39"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.11 83.45L46.07 80.49C48.62 77.94 54.34 81.12 57.93 77.53C61.52 73.94 62.38 73.08 62.38 73.08"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40.14 65.66C46.53 59.27 46.82 48.62 41.62 43.42C42.59 44.39 45.02 46.82 47.55 49.35C52.69 54.49 59.64 51.15 60.89 47.87C59.27 46.25 44.58 31.56 44.58 31.56C42.61 29.59 40.72 29.27 37.6 29.75C34.48 30.23 29.47 30.73 27.72 32.02C25.97 33.31 24.42 39.69 24.42 44.6C24.42 50.56 23.59 55.51 22.35 56.76L19.39 59.72"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M72.76 47.87L78.69 53.8C79.51 54.62 79.51 55.95 78.69 56.76L68.31 67.14C67.49 67.96 66.16 67.96 65.35 67.14L60.9 62.69C60.08 61.87 60.08 60.54 60.9 59.73L62.38 58.25"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M46.07 86.4L16.42 56.77L4.57 68.62L34.22 98.26L46.07 86.4Z"
                    fill="url(#paint0_linear)"
                  />
                  <path
                    d="M46.07 86.4L16.42 56.77L4.57 68.62L34.22 98.26L46.07 86.4Z"
                    stroke="url(#paint1_linear)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M74.62 76.81L79.07 81.25"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.94 67.14L17.91 70.11"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M39.37 29.31L32.15 22.09C33.81 16.7 32.52 10.6 28.25 6.33C23.42 1.49 16.21 0.49 10.37 3.27L21.58 14.48L14.17 21.89L2.96 10.68C0.17 16.52 1.18 23.72 6.02 28.56C9.65 32.19 14.62 33.66 19.35 32.99L24.55 38.19C24.74 36.67 25.37 33.69 27.79 31.8C29.31 30.62 30.95 30.32 33.79 29.8C36.08 29.38 38.01 29.29 39.37 29.29V29.31Z"
                    fill="#40DDA9"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="4.57"
                      y1="77.52"
                      x2="46.07"
                      y2="77.52"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#40DDA9" stopOpacity="0" />
                      <stop offset="1" stopColor="#40DDA9" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear"
                      x1="4.07"
                      y1="-0.005"
                      x2="46.57"
                      y2="-0.005"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#40DDA9" stopOpacity="0" />
                      <stop offset="1" stopColor="#40DDA9" />
                    </linearGradient>
                  </defs>
                </svg>
                <h3>{t('technician')}</h3>
              </Link>
            </div>

            {/* Job Seeking */}
            <div className='col-6 col-md-3'>
              <Link href='/job-seeking' className='card'>
                <svg width="97" height="87" viewBox="0 0 97 87" fill="none">
                  <path
                    d="M83.22 19.29H6.43C3.6 19.29 1.3 21.58 1.3 24.42V35.79C1.3 38.09 1.91 40.25 2.98 42.11C5.18 45.94 9.3 48.52 14.03 48.52H31.25C40.28 48.64 49.32 48.75 58.35 48.87C58.37 48.75 58.38 48.64 58.4 48.52H75.62C80.35 48.52 84.48 45.94 86.67 42.11C87.74 40.25 88.35 38.09 88.35 35.79V24.42C88.35 21.59 86.05 19.29 83.22 19.29Z"
                    fill="url(#paint0_linear)"
                  />
                  <path
                    d="M83.22 19.29H6.43C3.6 19.29 1.3 21.58 1.3 24.42V35.79C1.3 38.09 1.91 40.25 2.98 42.11C5.18 45.94 9.3 48.52 14.03 48.52H31.25C40.28 48.64 49.32 48.75 58.35 48.87C58.37 48.75 58.38 48.64 58.4 48.52H75.62C80.35 48.52 84.48 45.94 86.67 42.11C87.74 40.25 88.35 38.09 88.35 35.79V24.42C88.35 21.59 86.05 19.29 83.22 19.29Z"
                    stroke="url(#paint1_linear)"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M55.16 80.41H9.26C5.79 80.41 2.98 77.6 2.98 74.13V54.1"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.04 15.29V7.36C21.04 4.07 23.72 1.39 27.02 1.39H62.62C65.91 1.39 68.6 4.07 68.6 7.36V15.29"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M47.99 57.02H41.65C40.32 57.02 39.23 55.37 39.23 53.34V43.69C39.23 41.66 40.31 40.01 41.65 40.01H47.99C49.32 40.01 50.41 41.66 50.41 43.69V53.34C50.41 55.37 49.33 57.02 47.99 57.02Z"
                    fill="#F5F7FF"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M78.3 85.05C73.36 83.5 69.12 80.71 65.97 76.93C62.58 72.85 60.78 68 60.78 62.92V47.79C67.08 47.18 73.11 45.14 78.29 41.87C80.97 43.56 83.88 44.93 86.98 45.95C89.84 46.89 92.79 47.5 95.8 47.79V62.92C95.8 68.01 94.01 72.85 90.61 76.93C87.46 80.71 83.22 83.51 78.28 85.05H78.3Z"
                    fill="#40DDA9"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M68.49 62.36C68.49 62.36 74.93 71.07 74.93 70.65C74.93 70.23 88.12 55.4 88.12 55.4"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-10.27"
                      y1="12.83"
                      x2="71.58"
                      y2="42.45"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#40DDA9" stopOpacity="0" />
                      <stop offset="1" stopColor="#40DDA9" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear"
                      x1="0.8"
                      y1="34.08"
                      x2="88.84"
                      y2="34.08"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#40DDA9" stopOpacity="0" />
                      <stop offset="1" stopColor="#40DDA9" />
                    </linearGradient>
                  </defs>
                </svg>
                <h3>{t('job-seeker')}</h3>
              </Link>
            </div>

            {/* Accounting */}
            <div className='col-6 col-md-3'>
              <Link href='/accounting' className='card'>
                <svg width="97" height="84" viewBox="0 0 97 84" fill="none">
                  <path
                    d="M6.15 10.07V3.72C6.15 2.7 6.97 1.88 7.99 1.88H65.27C66.29 1.88 67.11 2.7 67.11 3.72V26.08"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.15 55.51V48.26"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.15 70.98V76.88C6.15 77.9 6.97 78.73 7.99 78.73H46.56"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M67.11 39.28V46.73"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.15 32.79V25.54"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M67.33 39.28H56.7C53.06 39.28 50.11 36.33 50.11 32.69C50.11 29.05 53.06 26.1 56.7 26.1H67.33C68.78 26.1 69.96 27.28 69.96 28.73V36.65C69.96 38.1 68.78 39.28 67.33 39.28Z"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M53.46 9.63H19.8V20.77H53.46V9.63Z"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <mask
                    id="mask0_11_2869"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="13"
                    width="13"
                    height="55"
                  >
                    <path
                      d="M9.23 13.99H4.12C2.37 13.99 0.96 15.41 0.96 17.15V18.46C0.96 20.21 2.38 21.62 4.12 21.62H9.23C10.98 21.62 12.39 20.2 12.39 18.46V17.15C12.39 15.4 10.97 13.99 9.23 13.99ZM9.23 36.71H4.12C2.37 36.71 0.96 38.13 0.96 39.87V41.18C0.96 42.93 2.38 44.34 4.12 44.34H9.23C10.98 44.34 12.39 42.92 12.39 41.18V39.87C12.39 38.12 10.97 36.71 9.23 36.71ZM9.23 59.43H4.12C2.37 59.43 0.96 60.85 0.96 62.59V63.9C0.96 65.65 2.38 67.06 4.12 67.06H9.23C10.98 67.06 12.39 65.64 12.39 63.9V62.59C12.39 60.84 10.97 59.43 9.23 59.43Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_11_2869)">
                    <path
                      d="M-13 75.4H20V-3.6H-13V75.4Z"
                      fill="url(#paint0_linear_11_2869)"
                    />
                  </g>
                  <path
                    d="M83.74 49.62C90.33 49.62 95.68 47.26 95.68 44.35C95.68 41.44 90.33 39.08 83.74 39.08C77.15 39.08 71.8 41.44 71.8 44.35C71.8 47.26 77.15 49.62 83.74 49.62Z"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M95.68 53.49C94.06 55.68 89.39 57.26 83.89 57.26C83.13 57.26 82.39 57.23 81.67 57.17"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M85.91 67.52C90.51 67.19 94.26 65.74 95.68 63.82"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M81.66 76.99C82.33 77.04 83.02 77.07 83.73 77.07C90.33 77.07 95.67 74.71 95.67 71.8V44.35"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M64.76 82.12C72.94 82.12 79.58 75.48 79.58 67.3C79.58 59.12 72.94 52.48 64.76 52.48C56.58 52.48 49.94 59.12 49.94 67.3C49.94 75.48 56.58 82.12 64.76 82.12Z"
                    fill="#40DDA9"
                  />
                  <path
                    d="M60.46 72.95C61.29 74.03 62.74 74.75 64.4 74.75C66.97 74.75 69.06 73.02 69.06 70.89C69.06 68.87 67.18 67.28 64.8 67.04C62.64 66.88 60.94 65.38 60.94 63.54C60.94 61.6 62.83 60.03 65.17 60.03C66.65 60.03 67.96 60.66 68.72 61.62"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M64.76 74.92V77.65"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M64.76 56.94V59.79"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M64.76 82.12C72.94 82.12 79.58 75.48 79.58 67.3C79.58 59.12 72.94 52.48 64.76 52.48C56.58 52.48 49.94 59.12 49.94 67.3C49.94 75.48 56.58 82.12 64.76 82.12Z"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.21 35.17H46.05"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.21 50.94H46.05"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.86 43.05H49.4"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M60.46 72.95C61.29 74.03 62.74 74.75 64.4 74.75C66.97 74.75 69.06 73.02 69.06 70.89C69.06 68.87 67.18 67.28 64.8 67.04C62.64 66.88 60.94 65.38 60.94 63.54C60.94 61.6 62.83 60.03 65.17 60.03C66.65 60.03 67.96 60.66 68.72 61.62"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M64.76 74.92V77.65"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M64.76 56.94V59.79"
                    stroke="#273B83"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_11_2869"
                      x1="3.5"
                      y1="-3.6"
                      x2="3.5"
                      y2="75.4"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#40DDA9" stopOpacity="0" />
                      <stop offset="1" stopColor="#40DDA9" />
                    </linearGradient>
                  </defs>
                </svg>
                <h3>{t('accounting')}</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Mission'>
        {/* Canvas Top */}
        <div className='FNV-Canvas-Top'>
          <svg viewBox="0 0 1454 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1453 0.999987L1 99L1 0.999987L1453 0.999987Z" fill="white" stroke="white" />
          </svg>
        </div>

        {/* Content */}
        <div className='container'>
          <div className='row'>
            <h2>{t('mission-title')}</h2>

            <div className='col-12 col-md-4 Top1'>
              <div className='card'>
                {/* Icon */}
                <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.285645" width="52" height="52" fill="white" />
                  <g clip-path="url(#clip0_280_270)">
                    <path
                      d="M25.934 12.1143C26.3468 12.1143 26.6814 11.7797 26.6814 11.3669V8.0331C26.6814 7.6203 26.3468 7.28564 25.934 7.28564C25.5212 7.28564 25.1865 7.6203 25.1865 8.0331V11.3669C25.1866 11.7797 25.5212 12.1143 25.934 12.1143Z"
                      fill="#0074FF" />
                    <path
                      d="M44.2044 32.9641L42.884 31.6474C42.4143 31.1782 41.7882 30.9198 41.1212 30.9198C40.6946 30.9198 40.2852 31.0259 39.9223 31.2247L37.434 28.7395L37.5552 28.6184C38.5647 27.607 38.5643 25.9634 37.5552 24.9553C37.1945 24.594 36.7446 24.3531 36.254 24.2517C36.3216 24.0186 36.3571 23.7744 36.3571 23.5246C36.3571 22.8302 36.0874 22.1792 35.5992 21.693C35.2385 21.3317 34.7886 21.0908 34.2981 20.9894C34.3656 20.7563 34.4012 20.5122 34.4012 20.2622C34.4012 19.5678 34.1315 18.9168 33.6424 18.4299C33.2731 18.061 32.8191 17.8275 32.3424 17.7281C32.5974 16.8489 32.3795 15.8596 31.6878 15.1667C31.112 14.5934 30.3307 14.347 29.5778 14.4268L24.647 13.4935C23.8951 13.3509 22.956 13.2565 22.3632 13.7972C22.3258 13.8314 22.2876 13.8706 22.2501 13.9143C21.331 13.5793 20.2589 13.7788 19.5229 14.514C19.0346 15.0017 18.7657 15.6525 18.7657 16.3464C18.7657 16.5964 18.8011 16.8405 18.8685 17.0737C18.3785 17.175 17.9291 17.4156 17.5697 17.7757C17.0804 18.263 16.8107 18.913 16.8101 19.6061C16.8099 19.8567 16.8455 20.1016 16.9133 20.3354C16.4231 20.4365 15.9734 20.6766 15.6128 21.0367C15.1236 21.5255 14.8542 22.1766 14.8542 22.8702C14.8542 23.4014 15.0128 23.9075 15.3067 24.335C14.9356 24.4608 14.5957 24.6702 14.311 24.9545C13.3009 25.9634 13.3006 27.607 14.3117 28.62L14.4325 28.7402L11.9439 31.2242C11.0191 30.7888 9.87959 30.9519 9.1164 31.7141L7.79516 33.0317C7.32521 33.501 7.06648 34.1271 7.06641 34.7946C7.06641 35.4621 7.32521 36.0883 7.79516 36.5577L9.44408 38.2047C9.73613 38.4964 10.2094 38.4961 10.5011 38.2041C10.7929 37.912 10.7926 37.4387 10.5005 37.147L8.85159 35.5001C8.66441 35.3132 8.56132 35.0626 8.56132 34.7947C8.56132 34.5268 8.66441 34.2763 8.85114 34.0898L10.1725 32.7722C10.5026 32.4425 11.0079 32.3933 11.3916 32.6227C11.4186 32.6633 11.4498 32.7019 11.4856 32.7378C11.5497 32.802 11.6228 32.8512 11.7004 32.8872L19.2776 40.4533C19.3136 40.5317 19.363 40.6056 19.4275 40.6701C19.4903 40.733 19.5619 40.7816 19.6379 40.8174C19.7982 40.9985 19.8867 41.23 19.8867 41.4768C19.8867 41.7447 19.7836 41.9952 19.5965 42.1822L18.2765 43.5006C17.8865 43.8889 17.252 43.8888 16.8632 43.5018L15.2143 41.8527C14.9224 41.5608 14.4492 41.5608 14.1573 41.8527C13.8654 42.1446 13.8654 42.6178 14.1573 42.9097L15.8074 44.56C16.2931 45.0437 16.9309 45.2854 17.569 45.2854C18.2073 45.2854 18.8459 45.0433 19.3322 44.5592L20.653 43.2399C21.1229 42.7705 21.3817 42.1444 21.3817 41.4768C21.3817 41.0004 21.2492 40.5454 21.0029 40.1531L23.8036 37.3558C23.8066 37.3528 23.8096 37.3497 23.8126 37.3467C24.1333 37.0151 25.0264 37.0772 25.8901 37.1372C26.5037 37.1798 27.1879 37.2273 27.8563 37.1502L30.9233 40.2136C30.7246 40.5759 30.6185 40.9848 30.6185 41.4107C30.6185 42.0775 30.8773 42.7033 31.3473 43.1727L32.6682 44.4919C33.1378 44.9611 33.7639 45.2195 34.4309 45.2195C35.0979 45.2195 35.724 44.9612 36.1937 44.4919L44.2049 36.4904C44.6749 36.0211 44.9337 35.395 44.9337 34.7274C44.9336 34.06 44.6748 33.4339 44.2044 32.9641ZM24.3687 14.9623L27.6111 15.576L25.6704 17.516C25.3702 17.3717 24.9587 17.1026 24.5073 16.6708C23.8894 16.0797 23.4474 15.3973 23.4072 14.9717C23.4071 14.9714 23.4071 14.9712 23.4071 14.971C23.4071 14.9709 23.4071 14.9708 23.4071 14.9708C23.4042 14.9402 23.4034 14.9158 23.4038 14.8971C23.5016 14.8734 23.7612 14.847 24.3687 14.9623ZM20.5793 15.5717C20.9579 15.1934 21.5462 15.1498 21.9741 15.4395C22.2165 16.4562 23.0838 17.3776 23.4739 17.7509C23.7631 18.0276 24.6909 18.8572 25.6274 19.0852C25.7541 19.2668 25.823 19.4833 25.823 19.7117C25.823 20.006 25.7099 20.2811 25.5036 20.4872C25.2979 20.6932 25.0224 20.8066 24.7276 20.8066C24.4327 20.8066 24.1571 20.6932 23.9505 20.4862L23.9504 20.4861L23.9501 20.4857L20.5792 17.121C20.3737 16.9157 20.2605 16.6406 20.2605 16.3464C20.2606 16.0521 20.3738 15.777 20.5793 15.5717ZM18.6261 18.8334C18.8318 18.6275 19.1071 18.514 19.4014 18.514C19.6961 18.514 19.9723 18.6277 20.1793 18.8344L22.8936 21.5434C23.3211 21.9715 23.3211 22.6681 22.8951 23.0947C22.6883 23.3006 22.4118 23.414 22.1165 23.414C21.8212 23.414 21.5446 23.3006 21.3387 23.0956L21.3387 23.0955L19.2795 21.0367C19.2763 21.0335 19.2728 21.0306 19.2695 21.0273L18.6253 20.3834C18.4186 20.1769 18.3048 19.9013 18.3051 19.6072C18.3054 19.3141 18.4188 19.0399 18.6261 18.8334ZM16.6693 22.0944C16.8751 21.8889 17.151 21.7757 17.4462 21.7757C17.739 21.7757 18.0125 21.8873 18.2174 22.0892L20.2829 24.1538C20.4889 24.3589 20.6023 24.6338 20.6023 24.9277C20.6023 25.2215 20.4889 25.4963 20.2821 25.7023C20.0764 25.9077 19.8008 26.0209 19.5061 26.0209C19.2109 26.0209 18.9344 25.9074 18.7284 25.7023L17.9796 24.9544C17.9795 24.9542 17.9792 24.954 17.9791 24.9539L16.6693 23.6457C16.4629 23.4394 16.3492 23.1639 16.3492 22.87C16.3492 22.5762 16.4629 22.3006 16.6693 22.0944ZM15.3675 26.0121C15.5742 25.8057 15.8504 25.692 16.1453 25.692C16.4401 25.692 16.7163 25.8056 16.9229 26.0119L17.6727 26.7609C17.8787 26.966 17.9921 27.2408 17.9921 27.5347C17.9921 27.8286 17.8787 28.1034 17.6712 28.3102C17.4655 28.5161 17.1899 28.6296 16.8951 28.6296C16.6003 28.6296 16.3247 28.5162 16.1175 28.3087L16.0236 28.2152C16.0224 28.2139 16.0214 28.2126 16.0202 28.2114C16.0188 28.2101 16.0173 28.2089 16.0159 28.2075L15.3682 27.5624C14.9408 27.134 14.9404 26.4387 15.3675 26.0121ZM30.5997 34.5071C30.3079 34.2149 29.8346 34.2147 29.5427 34.5064L28.8777 35.1706C28.2458 35.8025 27.1008 35.7229 25.9935 35.6461C24.7911 35.5625 23.5477 35.4763 22.7431 36.3023L19.99 39.0522L13.1052 32.1775L15.5417 29.7454C15.9444 29.9923 16.4091 30.1246 16.8953 30.1246C17.5899 30.1246 18.2412 29.8553 18.7277 29.3679C19.2175 28.8802 19.4873 28.2292 19.4873 27.5348C19.4873 27.5284 19.4868 27.522 19.4868 27.5155C19.4933 27.5156 19.4998 27.516 19.5062 27.516C20.1999 27.516 20.8507 27.2475 21.3379 26.7609C21.8276 26.2732 22.0974 25.6221 22.0974 24.9278C22.0974 24.9214 22.097 24.915 22.097 24.9085C22.1035 24.9085 22.11 24.909 22.1166 24.909C22.8101 24.909 23.4613 24.6408 23.9517 24.1524C24.4608 23.6424 24.7127 22.971 24.7078 22.3011C24.7145 22.3011 24.7212 22.3015 24.7279 22.3015C25.4225 22.3014 26.0738 22.0322 26.561 21.5441C27.0493 21.0564 27.3183 20.4057 27.3183 19.7117C27.3183 19.2264 27.1863 18.7625 26.9403 18.3606L29.0758 16.226C29.2349 16.0675 29.4311 15.968 29.6368 15.927C29.659 15.9246 29.681 15.9211 29.7028 15.9168C30.0327 15.8713 30.3793 15.9731 30.6316 16.2244C31.059 16.6526 31.059 17.3492 30.6332 17.7758L29.9828 18.4235C29.9806 18.4257 29.9783 18.4276 29.9762 18.4297L29.2271 19.1776C28.935 19.4692 28.9347 19.9425 29.2264 20.2346C29.5182 20.5267 29.9915 20.5269 30.2834 20.2353L30.9364 19.5832C30.9366 19.583 30.9367 19.5829 30.9369 19.5827L31.0356 19.4844C31.4642 19.0597 32.1586 19.0606 32.5867 19.4882C32.7928 19.6933 32.9063 19.9681 32.9063 20.262C32.9063 20.5559 32.7928 20.8307 32.5851 21.0375L31.931 21.6929C31.9309 21.693 31.9309 21.6931 31.9308 21.6932L31.1818 22.4392C30.8893 22.7305 30.8883 23.2038 31.1796 23.4962C31.4709 23.7887 31.9442 23.7896 32.2367 23.4984L32.9891 22.749C33.1947 22.5429 33.4703 22.4295 33.7651 22.4295C34.06 22.4295 34.3356 22.5429 34.5428 22.7505C34.7488 22.9557 34.8622 23.2305 34.8622 23.5244C34.8622 23.8182 34.7488 24.0931 34.5416 24.2994L33.2376 25.6039C32.9457 25.8959 32.9458 26.3691 33.2377 26.661C33.3837 26.8069 33.5749 26.8798 33.7662 26.8798C33.9575 26.8798 34.1488 26.8067 34.2947 26.6607L34.9338 26.0214C34.9375 26.0179 34.9414 26.0149 34.945 26.0113C35.1507 25.8052 35.4263 25.6918 35.7211 25.6918C36.0159 25.6918 36.2915 25.8052 36.4979 26.012C36.9249 26.4385 36.9245 27.134 36.4979 27.5613L35.8481 28.2104C35.8479 28.2106 35.8476 28.2108 35.8474 28.211C35.8472 28.2112 35.847 28.2115 35.8467 28.2118L34.8154 29.2418C34.5233 29.5336 34.523 30.0069 34.8147 30.2989C34.9607 30.4451 35.1522 30.5182 35.3436 30.5182C35.5347 30.5182 35.7259 30.4453 35.8718 30.2996L36.3763 29.7957L38.7941 32.2107L31.9099 39.0865L29.4434 36.6229C29.6153 36.5123 29.7799 36.3823 29.9343 36.2278L30.5989 35.564C30.8911 35.2724 30.8914 34.7991 30.5997 34.5071ZM43.1484 35.4327L35.1372 43.4343C34.9498 43.6214 34.6989 43.7245 34.4309 43.7245C34.1628 43.7245 33.9119 43.6214 33.7244 43.4342L32.4036 42.1149C32.2164 41.9281 32.1133 41.6779 32.1133 41.4107C32.1133 41.1435 32.2164 40.8934 32.4036 40.7064L40.4148 32.7049C40.6023 32.5176 40.8531 32.4145 41.1212 32.4145C41.3893 32.4145 41.6402 32.5176 41.8281 32.7053L43.1485 34.0221C43.3357 34.209 43.4388 34.4594 43.4388 34.7274C43.4387 34.9954 43.3356 35.2458 43.1484 35.4327Z"
                      fill="#0074FF" />
                    <path
                      d="M16.0086 11.4841C16.1545 11.6297 16.3455 11.7024 16.5365 11.7024C16.728 11.7024 16.9196 11.6293 17.0656 11.483C17.3572 11.1908 17.3567 10.7176 17.0645 10.426L14.3409 7.70769C14.0487 7.41609 13.5754 7.41646 13.2838 7.70873C12.9922 8.00093 12.9927 8.47415 13.2849 8.76576L16.0086 11.4841Z"
                      fill="#0074FF" />
                    <path
                      d="M35.3304 11.7024C35.5216 11.7024 35.7127 11.6295 35.8587 11.4838L38.5803 8.7655C38.8723 8.47383 38.8726 8.00053 38.5809 7.70848C38.2892 7.41643 37.816 7.41613 37.5238 7.70789L34.8022 10.4262C34.5102 10.7179 34.5099 11.1912 34.8016 11.4832C34.9476 11.6294 35.139 11.7024 35.3304 11.7024Z"
                      fill="#0074FF" />
                    <path
                      d="M11.6627 39.4373C11.3733 39.7317 11.3773 40.205 11.6717 40.4943L11.6739 40.4964C11.8191 40.6392 12.0077 40.7103 12.1962 40.7103C12.3897 40.7103 12.5832 40.6354 12.7298 40.4863C13.0192 40.192 13.014 39.7176 12.7197 39.4283C12.4254 39.1389 11.9522 39.143 11.6627 39.4373Z"
                      fill="#0074FF" />
                    <path
                      d="M32.4281 33.4305C32.5418 33.4305 32.6571 33.4046 32.7654 33.3501C33.134 33.1641 33.282 32.7147 33.0962 32.3461C32.9103 31.9775 32.4607 31.8294 32.0922 32.0153L32.0881 32.0174C31.7195 32.2033 31.5735 32.6517 31.7594 33.0203C31.8906 33.2807 32.1545 33.4305 32.4281 33.4305Z"
                      fill="#0074FF" />
                  </g>
                  <defs>
                    <clipPath id="clip0_280_270">
                      <rect width="38" height="38" fill="white" transform="translate(7 7.28564)" />
                    </clipPath>
                  </defs>
                </svg>
                {/* Title */}
                <h3>{t('category-section-one')}</h3>
                {/* Description */}
                <p>
                  {t('category-section-one-description')}
                </p>
                {/* Link */}
                <Link href='/about-us' className='FNV-Btn BtnOutline PrimaryColor BtnMedium'>
                  <span>{t('category-section-one-button')}</span>
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 3.78564C0.723858 3.78564 0.5 4.0095 0.5 4.28564C0.5 4.56179 0.723858 4.78564 1 4.78564L1 3.78564ZM15.3536 4.6392C15.5488 4.44394 15.5488 4.12735 15.3536 3.93209L12.1716 0.750112C11.9763 0.554849 11.6597 0.554849 11.4645 0.750112C11.2692 0.945374 11.2692 1.26196 11.4645 1.45722L14.2929 4.28565L11.4645 7.11407C11.2692 7.30933 11.2692 7.62592 11.4645 7.82118C11.6597 8.01644 11.9763 8.01644 12.1716 7.82118L15.3536 4.6392ZM1 4.78564L15 4.78565L15 3.78565L1 3.78564L1 4.78564Z"
                      fill="white" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className='col-12 col-md-4 Top2'>
              <div className='card'>
                {/* Icon */}
                <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.285645" width="52" height="52" fill="white" />
                  <g clip-path="url(#clip0_280_283)">
                    <path
                      d="M38.6781 38.0062L35.4016 30.8311C35.7208 30.599 36.0188 30.326 36.2653 29.9873C36.8349 29.2046 36.986 28.2607 37.1193 27.4279C37.1891 26.9916 37.2551 26.5795 37.371 26.2225C37.4792 25.8892 37.663 25.5313 37.8575 25.1523C38.2469 24.3936 38.6884 23.5337 38.6884 22.5278C38.6884 21.5219 38.247 20.662 37.8574 19.9032C37.6629 19.5243 37.4791 19.1663 37.3709 18.8331C37.255 18.4762 37.1891 18.0641 37.1193 17.6278C36.986 16.795 36.835 15.8511 36.2653 15.0683C35.6909 14.279 34.8374 13.8443 34.0844 13.4608C33.6935 13.2616 33.3242 13.0736 33.0263 12.8567C32.7347 12.6445 32.4462 12.3545 32.1407 12.0474C31.5415 11.4451 30.8624 10.7625 29.9213 10.4569C29.0157 10.1628 28.0786 10.3095 27.2518 10.439C26.8072 10.5085 26.3872 10.5743 25.9995 10.5743C25.6117 10.5743 25.1918 10.5085 24.7471 10.439C23.9203 10.3095 22.9831 10.1629 22.0777 10.4569C21.1366 10.7625 20.4574 11.4451 19.8582 12.0474C19.5528 12.3545 19.2642 12.6445 18.9727 12.8567C18.6748 13.0735 18.3056 13.2616 17.9147 13.4607C17.1617 13.8443 16.3082 14.279 15.7338 15.0683C15.1641 15.8511 15.0131 16.795 14.8797 17.6279C14.8099 18.0641 14.7439 18.4763 14.628 18.8331C14.5199 19.1665 14.3361 19.5244 14.1415 19.9034C13.752 20.6621 13.3106 21.522 13.3106 22.5279C13.3106 23.5338 13.752 24.3937 14.1415 25.1524C14.3361 25.5314 14.5199 25.8893 14.628 26.2227C14.7439 26.5795 14.8099 26.9917 14.8797 27.428C15.013 28.2608 15.1641 29.2047 15.7338 29.9875C15.9802 30.3261 16.2782 30.5992 16.5974 30.8312L13.3211 38.0062C13.1696 38.3379 13.2242 38.7274 13.4611 39.0046C13.698 39.2819 14.0742 39.3966 14.4254 39.2988L18.1409 38.264L19.7921 41.7495C19.9473 42.0771 20.2773 42.2857 20.6393 42.2857H20.646C21.0106 42.2831 21.3407 42.0693 21.4922 41.7376L24.7436 34.6173C24.7448 34.6171 24.746 34.6169 24.7472 34.6167C25.1918 34.5471 25.6118 34.4814 25.9995 34.4814C26.3873 34.4814 26.8073 34.5471 27.2519 34.6167C27.2531 34.6169 27.2543 34.6171 27.2555 34.6173L30.5069 41.7375C30.6584 42.0693 30.9884 42.283 31.3531 42.2856H31.3597C31.7218 42.2856 32.0518 42.077 32.207 41.7495L33.8583 38.2639L37.5737 39.2988C37.9246 39.3965 38.3011 39.2818 38.538 39.0046C38.7749 38.7273 38.8296 38.3379 38.6781 38.0062ZM20.6238 39.1253L19.4973 36.7475C19.302 36.3351 18.838 36.1234 18.3985 36.2458L15.8639 36.9517L18.2349 31.7595C18.5055 31.9009 18.7578 32.0424 18.9728 32.1989C19.2644 32.4111 19.5529 32.7011 19.8583 33.0082C20.4575 33.6104 21.1367 34.2931 22.0777 34.5986C22.2617 34.6584 22.447 34.6994 22.6324 34.7266L20.6238 39.1253ZM24.4574 32.7642C23.7779 32.8705 23.1361 32.971 22.6569 32.8153C22.1466 32.6496 21.6808 32.1814 21.1877 31.6857C20.8439 31.3402 20.4884 30.9829 20.0761 30.6828C19.6582 30.3787 19.2046 30.1476 18.7658 29.9241C18.1456 29.6083 17.5599 29.3099 17.2499 28.884C16.9447 28.4645 16.841 27.817 16.7313 27.1315C16.6532 26.6436 16.5725 26.1391 16.4115 25.6435C16.2568 25.1669 16.0295 24.7242 15.8097 24.296C15.4888 23.6709 15.1857 23.0805 15.1857 22.5278C15.1857 21.9751 15.4888 21.3847 15.8097 20.7596C16.0295 20.3314 16.2568 19.8887 16.4115 19.412C16.5724 18.9165 16.6532 18.412 16.7313 17.9241C16.841 17.2385 16.9447 16.591 17.2499 16.1715C17.5598 15.7456 18.1456 15.4472 18.7658 15.1313C19.2045 14.9078 19.6582 14.6767 20.0761 14.3725C20.4883 14.0726 20.8438 13.7152 21.1876 13.3697C21.6807 12.874 22.1465 12.4058 22.6568 12.2401C22.8347 12.1823 23.0349 12.1598 23.2512 12.1598C23.6176 12.1598 24.03 12.2244 24.4572 12.2913C24.9531 12.3688 25.4659 12.4491 25.9995 12.4491C26.5331 12.4491 27.0458 12.3688 27.5417 12.2913C28.2211 12.1849 28.863 12.0845 29.3423 12.2401C29.8526 12.4058 30.3183 12.874 30.8115 13.3696C31.1552 13.7152 31.5108 14.0726 31.923 14.3725C32.341 14.6767 32.7945 14.9078 33.2333 15.1313C33.8535 15.4472 34.4393 15.7456 34.7492 16.1715C35.0545 16.5909 35.1581 17.2384 35.2678 17.9239C35.3459 18.4118 35.4266 18.9163 35.5875 19.412C35.7423 19.8886 35.9696 20.3313 36.1894 20.7594C36.5103 21.3845 36.8134 21.9749 36.8134 22.5276C36.8134 23.0803 36.5103 23.6707 36.1894 24.2958C35.9696 24.724 35.7424 25.1667 35.5876 25.6433C35.4267 26.139 35.3459 26.6435 35.2678 27.1314C35.1581 27.817 35.0545 28.4644 34.7492 28.8839C34.4393 29.3097 33.8535 29.6081 33.2333 29.924C32.7945 30.1475 32.341 30.3786 31.923 30.6827C31.5108 30.9827 31.1553 31.3401 30.8115 31.6856C30.3183 32.1813 29.8526 32.6495 29.3423 32.8152C28.8631 32.9707 28.2213 32.8703 27.5418 32.764C27.0459 32.6864 26.5331 32.6061 25.9995 32.6061C25.466 32.6063 24.9532 32.6865 24.4574 32.7642ZM33.6007 36.2458C33.1613 36.1233 32.6973 36.3353 32.5019 36.7475L31.3754 39.1253L29.3668 34.7264C29.5522 34.6992 29.7375 34.6584 29.9215 34.5986C30.8626 34.2931 31.5418 33.6104 32.1409 33.0082C32.4464 32.7011 32.735 32.4111 33.0265 32.1989C33.2414 32.0424 33.4939 31.9009 33.7644 31.7595L36.1354 36.9516L33.6007 36.2458Z"
                      fill="#0074FF" />
                    <path
                      d="M31.1049 27.1855V25.3422C31.1049 24.153 30.392 23.0977 29.2886 22.6538L29.0999 22.5779C29.5098 21.9771 29.75 21.2516 29.75 20.471L29.7495 19.3197C29.7493 17.2642 28.0765 15.5829 26.0152 15.5718H25.9789C23.9227 15.5833 22.2498 17.2648 22.2498 19.3197L22.2494 20.4714C22.2494 21.2519 22.4896 21.9771 22.8995 22.578L22.7107 22.6539C21.6074 23.0978 20.8945 24.1531 20.8945 25.3423V27.1855C20.8945 27.7033 21.3143 28.1231 21.8321 28.1231H30.1673C30.6851 28.123 31.1049 27.7032 31.1049 27.1855ZM24.1249 19.3201C24.1249 18.293 24.9613 17.4526 25.9842 17.4469H26.0102C27.0382 17.4525 27.8745 18.2927 27.8745 19.3201V19.3204L27.875 20.4714C27.875 21.5044 27.0338 22.3449 25.9997 22.3449C24.9658 22.3449 24.1246 21.5044 24.1246 20.4717L24.1249 19.3201ZM29.2298 26.2479H22.7695V25.3422C22.7695 24.9225 23.0212 24.5501 23.4105 24.3934L24.5583 23.9316C25.0023 24.1171 25.4891 24.2199 25.9996 24.2199C26.5101 24.2199 26.9969 24.1171 27.4409 23.9316L28.5887 24.3934C28.9781 24.55 29.2298 24.9225 29.2298 25.3422V26.2479H29.2298Z"
                      fill="#0074FF" />
                  </g>
                  <defs>
                    <clipPath id="clip0_280_283">
                      <rect width="32" height="32" fill="white" transform="translate(10 10.2856)" />
                    </clipPath>
                  </defs>
                </svg>

                {/* Title */}
                <h3>{t('category-section-two')}</h3>
                {/* Description */}
                <p>
                  {t('category-section-two-description')}
                </p>
                {/* Link */}
                <Link href='/membership/checkout' className='FNV-Btn BtnOutline PrimaryColor BtnMedium'>
                  <span>{t('category-section-two-button')}</span>
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 3.78564C0.723858 3.78564 0.5 4.0095 0.5 4.28564C0.5 4.56179 0.723858 4.78564 1 4.78564L1 3.78564ZM15.3536 4.6392C15.5488 4.44394 15.5488 4.12735 15.3536 3.93209L12.1716 0.750112C11.9763 0.554849 11.6597 0.554849 11.4645 0.750112C11.2692 0.945374 11.2692 1.26196 11.4645 1.45722L14.2929 4.28565L11.4645 7.11407C11.2692 7.30933 11.2692 7.62592 11.4645 7.82118C11.6597 8.01644 11.9763 8.01644 12.1716 7.82118L15.3536 4.6392ZM1 4.78564L15 4.78565L15 3.78565L1 3.78564L1 4.78564Z"
                      fill="white" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className='col-12 col-md-4'>
              <div className='card'>
                {/* Icon */}
                <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.285645" width="52" height="52" fill="white" />
                  <g clip-path="url(#clip0_280_293)">
                    <path
                      d="M26.5906 44.3329H8.97183C8.64207 44.333 8.31733 44.2522 8.02604 44.0976C7.73474 43.9431 7.48577 43.7194 7.30091 43.4464C7.11606 43.1733 7.00095 42.8591 6.96568 42.5312C6.9304 42.2033 6.97603 41.8718 7.09857 41.5657L7.70804 40.0417C8.03949 39.2109 8.54839 38.4626 9.19917 37.849C9.84995 37.2354 10.6269 36.7714 11.4757 36.4893L13.6572 35.7626C12.3303 34.3054 11.6055 32.3992 11.6289 30.4286C11.6289 26.4667 14.3891 23.2432 17.7812 23.2432C21.1734 23.2432 23.9336 26.4667 23.9336 30.4286C23.9568 32.3992 23.232 34.3053 21.9052 35.7626L24.0861 36.4893C24.9348 36.7714 25.7123 37.2353 26.3631 37.8488C27.0139 38.4623 27.5228 39.2105 27.8544 40.0411L28.4639 41.5657C28.5864 41.8718 28.632 42.2034 28.5967 42.5312C28.5615 42.8591 28.4464 43.1733 28.2615 43.4464C28.0766 43.7194 27.8277 43.9431 27.5364 44.0976C27.2451 44.2522 26.9204 44.333 26.5906 44.3329ZM17.7812 25.212C15.4741 25.212 13.5976 27.5524 13.5976 30.4286C13.5769 31.2481 13.7352 32.0623 14.0616 32.8143C14.3879 33.5663 14.8743 34.238 15.487 34.7827C15.6986 34.956 15.8599 35.1828 15.9543 35.4395C16.0486 35.6962 16.0725 35.9735 16.0234 36.2426C15.9741 36.5041 15.8556 36.7476 15.6804 36.9479C15.5051 37.1482 15.2795 37.2979 15.0268 37.3814L12.0981 38.3568C11.5208 38.5488 10.9925 38.8644 10.5499 39.2817C10.1074 39.699 9.76125 40.208 9.53579 40.7729L8.92633 42.2963L26.5906 42.3642L26.0266 40.7723C25.801 40.2074 25.4548 39.6986 25.0121 39.2814C24.5695 38.8641 24.0411 38.5486 23.4638 38.3568L20.5356 37.3814C20.283 37.2979 20.0573 37.1482 19.8821 36.9479C19.7068 36.7476 19.5884 36.5041 19.5391 36.2426C19.49 35.9738 19.5137 35.6967 19.6078 35.4401C19.7019 35.1835 19.8629 34.9567 20.0742 34.7833C20.6872 34.2388 21.174 33.567 21.5005 32.8148C21.827 32.0627 21.9855 31.2483 21.9648 30.4286C21.9648 27.5524 20.0883 25.212 17.7812 25.212Z"
                      fill="#0074FF" />
                    <path
                      d="M32.6112 28.5828H25.0656C24.8045 28.5828 24.5542 28.479 24.3696 28.2944C24.1849 28.1098 24.0812 27.8594 24.0812 27.5984C24.0812 27.3373 24.1849 27.0869 24.3696 26.9023C24.5542 26.7177 24.8045 26.614 25.0656 26.614H32.6112C34.7369 26.6471 36.7952 25.8679 38.366 24.4353C39.9368 23.0027 40.9019 21.0248 41.0642 18.905C41.1506 17.5157 40.8821 16.1273 40.284 14.8704C39.686 13.6135 38.7779 12.5295 37.6454 11.7203C36.5128 10.9111 35.193 10.4033 33.8101 10.2447C32.4273 10.0862 31.0268 10.2821 29.7405 10.814C28.4542 11.3459 27.3243 12.1963 26.4573 13.2852C25.5902 14.3741 25.0145 15.6657 24.7842 17.0385C24.554 18.4112 24.6767 19.82 25.141 21.1323C25.6053 22.4445 26.3957 23.617 27.4381 24.5395C27.5353 24.6252 27.6146 24.7293 27.6715 24.8457C27.7283 24.9621 27.7617 25.0886 27.7696 25.218C27.7775 25.3473 27.7598 25.4769 27.7175 25.5994C27.6752 25.7219 27.6092 25.8348 27.5231 25.9317C27.4371 26.0286 27.3328 26.1076 27.2162 26.1641C27.0996 26.2206 26.973 26.2536 26.8436 26.261C26.7143 26.2685 26.5847 26.2504 26.4624 26.2077C26.34 26.165 26.2273 26.0986 26.1307 26.0123C24.842 24.8681 23.8653 23.4151 23.2923 21.7898C22.7193 20.1645 22.5688 18.4202 22.8551 16.7208C23.1413 15.0214 23.8549 13.4227 24.9287 12.0747C26.0024 10.7268 27.4012 9.67395 28.9937 9.01507C30.5861 8.35619 32.3199 8.11292 34.0321 8.30809C35.7444 8.50327 37.3789 9.13049 38.7822 10.1308C40.1855 11.1312 41.3115 12.4718 42.0544 14.0268C42.7973 15.5818 43.1327 17.3002 43.0291 19.0204C42.8372 21.6413 41.6523 24.0903 39.7163 25.8673C37.7802 27.6444 35.2389 28.6156 32.6112 28.5828Z"
                      fill="#0074FF" />
                    <path
                      d="M36.8125 19.7231C37.5374 19.7231 38.125 19.1355 38.125 18.4106C38.125 17.6858 37.5374 17.0981 36.8125 17.0981C36.0876 17.0981 35.5 17.6858 35.5 18.4106C35.5 19.1355 36.0876 19.7231 36.8125 19.7231Z"
                      fill="#0074FF" />
                    <path
                      d="M32.875 19.7231C33.5999 19.7231 34.1875 19.1355 34.1875 18.4106C34.1875 17.6858 33.5999 17.0981 32.875 17.0981C32.1501 17.0981 31.5625 17.6858 31.5625 18.4106C31.5625 19.1355 32.1501 19.7231 32.875 19.7231Z"
                      fill="#0074FF" />
                    <path
                      d="M28.9375 19.7231C29.6624 19.7231 30.25 19.1355 30.25 18.4106C30.25 17.6858 29.6624 17.0981 28.9375 17.0981C28.2126 17.0981 27.625 17.6858 27.625 18.4106C27.625 19.1355 28.2126 19.7231 28.9375 19.7231Z"
                      fill="#0074FF" />
                  </g>
                  <defs>
                    <clipPath id="clip0_280_293">
                      <rect width="38" height="38" fill="white" transform="translate(7 7.28564)" />
                    </clipPath>
                  </defs>
                </svg>
                {/* Title */}
                <h3>{t('category-section-three')}</h3>
                {/* Description */}
                <p>
                  {t('category-section-three-description')}
                </p>
                {/* Link */}
                <Link href='/services/consultant' className='FNV-Btn BtnOutline PrimaryColor BtnMedium'>
                  <span>{t('category-section-three-button')}</span>
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 3.78564C0.723858 3.78564 0.5 4.0095 0.5 4.28564C0.5 4.56179 0.723858 4.78564 1 4.78564L1 3.78564ZM15.3536 4.6392C15.5488 4.44394 15.5488 4.12735 15.3536 3.93209L12.1716 0.750112C11.9763 0.554849 11.6597 0.554849 11.4645 0.750112C11.2692 0.945374 11.2692 1.26196 11.4645 1.45722L14.2929 4.28565L11.4645 7.11407C11.2692 7.30933 11.2692 7.62592 11.4645 7.82118C11.6597 8.01644 11.9763 8.01644 12.1716 7.82118L15.3536 4.6392ZM1 4.78564L15 4.78565L15 3.78565L1 3.78564L1 4.78564Z"
                      fill="white" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Canvas Bottom */}
        <div className='FNV-Canvas-Bottom'>
          <svg viewBox="0 0 1454 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1453 0.999987L1 99L1 0.999987L1453 0.999987Z" fill="white" stroke="white" />
          </svg>
        </div>
      </section>
    </>
  )
}

export default CategoriesSection