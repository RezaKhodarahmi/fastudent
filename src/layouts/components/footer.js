import React, { useEffect } from 'react'
import Input from '@mui/material/Input'
import feather from 'feather-icons'
import Logo from 'src/views/logoWhite.js'

// ** Import Translation
import { useTranslation } from 'react-i18next'

// ** Hook Imports
import Link from 'next/link'

const Footer = props => {
  //Hooks
  const { t } = useTranslation()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof feather !== 'undefined' && feather !== null) {
        feather.replace();
      }
    }, 1000); // 1 second delay

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      {/* Fixed Social */}
      <div className='FNV-FixedSocial'>
        <Link href='https://www.instagram.com/fanavaran_ca/' className='FNV-Instagram'>
          <i data-feather='instagram'></i>
        </Link>
        <Link href='https://www.facebook.com/fanavaran.ca' className='FNV-Facebook'>
          <i data-feather='facebook'></i>
        </Link>
        <Link href='https://www.linkedin.com/company/fanavaran-ca/' className='FNV-Linkedin'>
          <i data-feather='linkedin'></i>
        </Link>
        <Link href='https://www.youtube.com/channel/UCKbfvGZBXPn2Y3LGb9YDiIA' className='FNV-Youtube'>
          <i data-feather='youtube'></i>
        </Link>
        <Link href='https://t.me/fanavaran_ca' className='FNV-Telegram'>
          <i data-feather='send'></i>
        </Link>
      </div>

      {/* NewsLetter */}
      <newsletter>
        <div class='container'>
          <div class='row'>
            <div class='col-12 col-md-6'>
              <h3>{t('newsletter-section-title')}</h3>
              <p>{t('newsletter-section-caption')}</p>
            </div>
            <div class='col-12 col-md-6'>
              <div class='FNV-Newsletter input-group mb-3'>
                <Input
                  type='text'
                  placeholder={t('newsletter-section-input')}
                  class='form-control FNV-NewsletterInput'
                  aria-describedby='button-addon1'
                  fullWidth
                />
                <button class='FNV-Btn BtnMedium PrimaryColor' type='button' id='button-addon1'>
                  <i data-feather={t('newsletter-section-button')}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </newsletter>

      {/* Footer content */}
      <footer className='FNV-Footer'>
        {/* Footer Content */}
        <div className='container'>
          <div className='row'>
            {/* First Section */}
            <div className='col-12 col-sm-4 col-md-4'>
              <Logo />

              <div class='d-flex gap-2'>
                <a href='tel:+16723996600'>(672) 399-6600</a>
                <a href='tel:+19055052323'>(905) 505-2323</a>
              </div>

              <div class='FNV-Social'>
                {/* Email */}
                <a href='mailto:info@fanavaran.ca'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>

                {/* Facebook */}
                <a href='https://www.facebook.com/fanavaran.ca'>
                  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M17.0703 0H2.92969C1.31439 0 0 1.31439 0 2.92969V17.0703C0 18.6856 1.31439 20 2.92969 20H8.82812V12.9297H6.48438V9.41406H8.82812V7.03125C8.82812 5.09262 10.4051 3.51562 12.3438 3.51562H15.8984V7.03125H12.3438V9.41406H15.8984L15.3125 12.9297H12.3438V20H17.0703C18.6856 20 20 18.6856 20 17.0703V2.92969C20 1.31439 18.6856 0 17.0703 0Z'
                      fill='white'
                    />
                  </svg>
                </a>

                {/* Telegram */}
                <a href='https://t.me/fanavaran_ca'>
                  <svg width='20' height='20' viewBox='0 0 21 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M0.360588 8.52285L5.06459 10.2785L6.88533 16.134C7.00183 16.509 7.46042 16.6477 7.76481 16.3988L10.3869 14.2612C10.6618 14.0373 11.0532 14.0261 11.3405 14.2346L16.0698 17.6682C16.3954 17.9049 16.8567 17.7264 16.9384 17.333L20.4029 0.668212C20.492 0.23841 20.0697 -0.120144 19.6604 0.0381394L0.355076 7.48557C-0.121341 7.66931 -0.117189 8.34381 0.360588 8.52285ZM6.5919 9.34394L15.7853 3.68173C15.9505 3.58026 16.1205 3.80367 15.9786 3.93528L8.39141 10.988C8.12472 11.2362 7.95269 11.5684 7.90397 11.929L7.64552 13.8443C7.61129 14.1001 7.25205 14.1255 7.18149 13.878L6.18748 10.3853C6.07364 9.98694 6.23954 9.56143 6.5919 9.34394Z'
                      fill='white'
                    />
                  </svg>
                </a>

                {/* Youtube */}
                <a href='https://www.youtube.com/channel/UCKbfvGZBXPn2Y3LGb9YDiIA'>
                  <svg width='20' height='20' viewBox='0 0 21 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M19.6192 1.23332C18.8823 0.357327 17.5217 0 14.9234 0H5.49135C2.83353 0 1.44992 0.380376 0.715774 1.31301C0 2.22233 0 3.56214 0 5.41647V8.95082C0 12.5433 0.849261 14.3672 5.49135 14.3672H14.9234C17.1767 14.3672 18.4253 14.0519 19.2331 13.2789C20.0615 12.4861 20.4149 11.1917 20.4149 8.95082V5.41647C20.4149 3.46092 20.3595 2.11321 19.6192 1.23332ZM13.1064 7.6716L8.82339 9.91006C8.72764 9.96011 8.62293 9.98494 8.51836 9.98494C8.39995 9.98494 8.28181 9.95306 8.17716 9.88971C7.98013 9.77032 7.85981 9.55675 7.85981 9.32639V4.86382C7.85981 4.63386 7.9798 4.42049 8.17644 4.30103C8.37315 4.18157 8.6178 4.1734 8.82188 4.27943L13.1049 6.50347C13.3228 6.61661 13.4597 6.84157 13.46 7.08701C13.4603 7.33264 13.324 7.55793 13.1064 7.6716Z'
                      fill='white'
                    />
                  </svg>
                </a>

                {/* Linkedin */}
                <a href='https://www.linkedin.com/company/fanavaran-ca/'>
                  <svg width='20' height='20' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M2.321 0C0.917583 0 0 0.921555 0 2.13281C0 3.31732 0.890248 4.26515 2.26715 4.26515H2.29378C3.72465 4.26515 4.61513 3.31732 4.61513 2.13281C4.58838 0.921555 3.72465 0 2.321 0Z'
                      fill='white'
                    />
                    <path d='M0.242493 5.95044H4.34527V18.2938H0.242493V5.95044Z' fill='white' />
                    <path
                      d='M14.4157 5.66089C12.2024 5.66089 10.7183 7.74067 10.7183 7.74067V5.95059H6.61536V18.294H10.718V11.4009C10.718 11.0319 10.7448 10.6635 10.8532 10.3996C11.1498 9.66274 11.8247 8.89935 12.9582 8.89935C14.4428 8.89935 15.0366 10.0313 15.0366 11.6907V18.294H19.139V11.2165C19.139 7.42515 17.1148 5.66089 14.4157 5.66089Z'
                      fill='white'
                    />
                  </svg>
                </a>

                {/* Instagram */}
                <a href='https://www.instagram.com/fanavaran_ca/'>
                  <svg width='20' height='20' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M20.3591 6.00204C20.3113 4.91732 20.1359 4.17158 19.8846 3.52539C19.6253 2.83947 19.2265 2.22537 18.704 1.71487C18.1935 1.19642 17.5754 0.793563 16.8974 0.538389C16.2475 0.28711 15.5056 0.111697 14.4209 0.0638714C13.3281 0.0119954 12.9812 0 10.2095 0C7.43775 0 7.09082 0.0119954 6.00204 0.059821C4.91732 0.107647 4.17158 0.283215 3.52555 0.534339C2.83947 0.793563 2.22537 1.19237 1.71487 1.71487C1.19642 2.22537 0.793719 2.84352 0.538389 3.5215C0.28711 4.17158 0.111697 4.91327 0.0638714 5.99799C0.0119954 7.09082 0 7.43775 0 10.2095C0 12.9812 0.0119954 13.3281 0.059821 14.4169C0.107647 15.5016 0.283215 16.2473 0.534495 16.8935C0.793719 17.5794 1.19642 18.1935 1.71487 18.704C2.22537 19.2225 2.84352 19.6253 3.5215 19.8805C4.17158 20.1318 4.91327 20.3072 5.99815 20.355C7.08677 20.403 7.43385 20.4149 10.2056 20.4149C12.9773 20.4149 13.3242 20.403 14.413 20.355C15.4977 20.3072 16.2434 20.1318 16.8895 19.8805C18.2615 19.3501 19.3462 18.2654 19.8766 16.8935C20.1278 16.2434 20.3033 15.5016 20.3511 14.4169C20.399 13.3281 20.411 12.9812 20.411 10.2095C20.411 7.43775 20.4069 7.09082 20.3591 6.00204ZM18.5207 14.3371C18.4768 15.3341 18.3093 15.8725 18.1697 16.2314C17.8267 17.1208 17.1208 17.8267 16.2314 18.1697C15.8725 18.3093 15.3302 18.4768 14.3371 18.5205C13.2603 18.5685 12.9374 18.5803 10.2135 18.5803C7.48962 18.5803 7.16263 18.5685 6.08975 18.5205C5.09273 18.4768 4.55434 18.3093 4.19542 18.1697C3.75283 18.0061 3.34998 17.7469 3.02299 17.4079C2.684 17.0769 2.42478 16.6781 2.2612 16.2355C2.12162 15.8766 1.95415 15.3341 1.91038 14.3412C1.8624 13.2644 1.85056 12.9413 1.85056 10.2174C1.85056 7.49352 1.8624 7.16653 1.91038 6.0938C1.95415 5.09678 2.12162 4.55839 2.2612 4.19947C2.42478 3.75673 2.684 3.35403 3.02704 3.02688C3.35792 2.6879 3.75673 2.42867 4.19947 2.26525C4.55839 2.12567 5.10083 1.9582 6.0938 1.91427C7.17058 1.86645 7.49367 1.85445 10.2174 1.85445C12.9453 1.85445 13.2683 1.86645 14.3412 1.91427C15.3382 1.9582 15.8766 2.12567 16.2355 2.26525C16.6781 2.42867 17.0809 2.6879 17.4079 3.02688C17.7469 3.35792 18.0061 3.75673 18.1697 4.19947C18.3093 4.55839 18.4768 5.10068 18.5207 6.0938C18.5685 7.17058 18.5805 7.49352 18.5805 10.2174C18.5805 12.9413 18.5685 13.2603 18.5207 14.3371Z'
                      fill='white'
                    />
                    <path
                      d='M10.2095 4.96509C7.31421 4.96509 4.96515 7.314 4.96515 10.2094C4.96515 13.1048 7.31421 15.4537 10.2095 15.4537C13.1049 15.4537 15.4538 13.1048 15.4538 10.2094C15.4538 7.314 13.1049 4.96509 10.2095 4.96509ZM10.2095 13.6113C8.33117 13.6113 6.80761 12.0878 6.80761 10.2094C6.80761 8.33096 8.33117 6.80754 10.2095 6.80754C12.0879 6.80754 13.6113 8.33096 13.6113 10.2094C13.6113 12.0878 12.0879 13.6113 10.2095 13.6113Z'
                      fill='white'
                    />
                    <path
                      d='M16.8856 4.75775C16.8856 5.43386 16.3374 5.98206 15.6611 5.98206C14.985 5.98206 14.4368 5.43386 14.4368 4.75775C14.4368 4.0815 14.985 3.53345 15.6611 3.53345C16.3374 3.53345 16.8856 4.0815 16.8856 4.75775Z'
                      fill='white'
                    />
                  </svg>
                </a>
              </div>

              <p className='FNV-Address'>
                <span>
                  <i data-feather="map-pin"></i> British Columbia:
                </span>

                <Link href="https://maps.app.goo.gl/ea37TSxFnQh95GLZ6" target='_blank'>
                  Unit 4 - 839 W 1st St, North Vancouver, BC V7P 1A4
                </Link>
              </p>

              <p className='FNV-Address'>
                <span>
                  <i data-feather="map-pin"></i> Ontario:
                </span>

                <Link href="https://maps.app.goo.gl/noHtxRDKu23mmQFx5" target='_blank'>
                  Unit 3 - 33 Glen Cameron Road, Markham, ON L3T 1N9
                </Link>
              </p>
            </div>

            {/* Second Section */}
            <div className='col-4 col-sm-4 col-md'>
              <h4>{t('footer-one')}</h4>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <Link href='/about-us'>{t('footer-one-about')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/contact-us/'>{t('footer-one-contact')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/app/dashboards/main'>{t('footer-one-profile')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/blog'>{t('footer-one-blog')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>{t('footer-one-training')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>{t('footer-one-instructors')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/webinars'>{t('footer-one-webinars')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>{t('footer-one-newcomers')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>{t('footer-one-brochure')}</Link>
                </li>
              </ul>
            </div>

            {/* Third Section */}
            <div className='col-4 col-sm-4 col-md'>
              <h4>{t('footer-two')}</h4>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <Link href='/engineering/'>{t('footer-two-engineering')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/project-management/'>{t('footer-two-project')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/architecture/'>{t('footer-two-architect')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/technician/'>{t('footer-two-technician')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/Job-Seeking/'>{t('footer-two-job')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/technical-self-employment/'>{t('footer-two-technical')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/plumbing/'>{t('footer-two-plumbing')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/electrician/'>{t('footer-two-electrician')}</Link>
                </li>
              </ul>
            </div>

            {/* Fourth Section */}
            <div className='col-4 col-sm-4 col-md'>
              <h4>{t('footer-three')}</h4>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <Link href='#'>{t('footer-three-registration')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>{t('footer-three-watching')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>{t('footer-three-mock')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>{t('footer-three-certificate')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>{t('footer-three-privacy')}</Link>
                </li>
                <li className='list-group-item'>
                  <Link href='#'>{t('footer-three-faq')}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <section className='FNV-Copyright'>
        {/* Copyright */}
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <small>&copy; 2020 - {new Date().getFullYear()} Fanavaran. All rights reserved.</small>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  return { props: {} }
}

export default Footer
