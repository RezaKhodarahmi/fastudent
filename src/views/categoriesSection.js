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
    </>
  )
}

export default CategoriesSection