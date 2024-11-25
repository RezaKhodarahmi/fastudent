import React from 'react'

// ** Hook Imports
import Link from 'next/link'

// ** Import Translation
import { useTranslation } from 'react-i18next'

const WhyFanavaran = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className='FNV-HomeWhy'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <h2>{t('why-fanavaran')}</h2>
              <p>{t('why-fanavaran-1')}</p>
              <p>{t('why-fanavaran-2')}</p>
              <p>{t('why-fanavaran-3')}</p>
            </div>

            <div className='col-12 col-md-6'>
              {/* Feature */}
              <div className='row card'>
                {/* Icon */}
                <div className='col-2'>
                  <svg
                    width="60"
                    height="57"
                    viewBox="0 0 60 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6603 36.8711V37.7011C17.6603 39.1711 16.9203 40.5511 15.7003 41.3711C15.1503 41.7411 14.5603 42.0411 13.9503 42.2711C13.1803 42.5611 12.3703 42.7311 11.5403 42.7911L10.7003 42.8511L9.48027 42.9311C4.87027 43.2411 1.28027 47.0711 1.28027 51.6911V54.0511"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27.6309 36.8711V37.7011C27.6309 39.1711 28.3709 40.5511 29.5909 41.3711C30.1409 41.7411 30.7309 42.0411 31.3409 42.2711C32.1109 42.5611 32.9209 42.7311 33.7509 42.7911L34.5909 42.8511L35.8109 42.9311C40.4209 43.2411 44.0109 47.0711 44.0109 51.6911V55.4711"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27.9902 40.3984L16.4102 51.1484L13.9502 42.2584"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.0205 40.4902L28.3505 50.8502L31.2605 42.2902"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.67969 54.9508V53.3008"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M35.3496 54.9508V53.3008"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.3203 52.0586L19.9703 55.4686"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.1104 55.4686L25.5204 52.0586"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.7207 2.86984C23.7207 2.86984 25.6407 1.04984 26.3807 1.52984C27.1207 2.00984 57.2507 1.52984 57.2507 1.52984L58.7307 4.18984L58.6107 26.4698L57.6107 27.8998L54.0407 28.3998L40.3507 37.3498V28.3998C38.2807 28.2698 36.2007 28.1498 34.1307 28.0198L33.8207 22.9698L33.1707 19.4398L30.8007 16.5498L29.1207 14.3898L25.1207 11.8998L23.7407 11.3798V2.86984H23.7207Z"
                      fill="#40DDA9"
                    />
                    <path
                      d="M14.3398 31.6094C15.9498 35.7994 19.0898 38.6394 22.6998 38.6394C26.3098 38.6394 29.4498 35.7994 31.0598 31.6094"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M33.4908 27.2109C33.7608 27.8109 33.8008 28.6509 33.5408 29.5109C33.1108 30.9609 31.9908 31.9009 31.0508 31.6209"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.4199 24.1903C14.7299 22.0903 15.9399 20.2203 17.7499 19.0703C21.2799 20.7303 25.2599 21.1103 29.0399 20.1703H29.0799C28.7999 21.7003 29.1499 23.2703 30.0099 24.5303"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.3399 31.61C13.3999 31.89 12.2799 30.95 11.8499 29.5C11.7199 29.07 11.6699 28.64 11.6799 28.25"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.5702 27.9007C11.1702 26.5507 10.6302 24.0406 11.2702 21.0906C11.3702 20.6206 13.1002 13.2406 19.4402 11.6706C22.8202 10.8306 26.7202 11.8406 29.1202 14.3906C29.8002 15.1206 30.2502 15.8406 30.5302 16.3806C30.5802 16.4006 30.6702 16.4606 30.8002 16.5506C32.8402 17.9706 33.9702 20.4306 33.8202 22.9706C33.7402 24.3006 33.5002 26.3806 33.5002 27.2106"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M38.2609 28.3913H40.3409V37.3413L54.0309 28.3913H56.0609C57.5309 28.3913 58.7209 27.2013 58.7209 25.7313V4.19125C58.7209 2.72125 57.5309 1.53125 56.0609 1.53125H26.3709C24.9009 1.53125 23.7109 2.72125 23.7109 4.19125V6.56125"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M36.9502 16.2895L39.6802 19.0195L48.2502 10.4395"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Text */}
                <div className='col-9'>
                  <h3>{t('why-fanavaran-4')}</h3>
                  <p>{t('why-fanavaran-4-text')}</p>
                </div>
              </div>

              {/* Feature */}
              <div className='row card'>
                {/* Icon */}
                <div className='col-2'>
                  <svg
                    width="59"
                    height="59"
                    viewBox="0 0 59 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 45.4797L6.89 42.4497C7.26 42.2597 7.56 41.9697 7.77 41.6097L16.99 25.8297C17.08 25.6797 17.19 25.5297 17.31 25.3997L24.95 17.5597C25.91 16.5697 27.51 16.7397 28.26 17.8997L33.14 25.4197C33.22 25.5397 33.31 25.6497 33.41 25.7597L41.57 34.1397C41.76 34.3397 41.92 34.5697 42.03 34.8297L44.93 41.7797C45.04 42.0397 45.19 42.2697 45.39 42.4697L54.59 51.9197C54.71 52.0497 54.82 52.1897 54.91 52.3497L58 57.6397"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M35.4199 27.8088L40.0799 23.0288C41.0199 22.0588 42.5799 22.1988 43.3499 23.3088L47.1499 28.7688C47.2199 28.8688 47.2999 28.9588 47.3799 29.0488L53.6199 35.4588C53.6799 35.5188 53.7299 35.5788 53.7799 35.6388L58.0099 41.0688"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.4502 25.0605L27.8202 30.6305C27.8702 30.9605 27.9802 31.2705 28.1602 31.5405L31.9102 37.3205C32.1002 37.6105 32.2102 37.9305 32.2502 38.2705L33.2202 46.2105C33.2502 46.4605 33.3202 46.7005 33.4302 46.9205L38.6402 57.6305"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.2803 37.75L16.3603 42.74C16.1603 43.09 16.0503 43.48 16.0503 43.88V45.82C16.0503 46.32 15.8803 46.8 15.5803 47.19L12.3203 51.36C12.2403 51.47 12.1403 51.56 12.0403 51.65L5.07031 57.63"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 35.5393L4.05 33.4493C4.17 33.3693 4.28 33.2793 4.38 33.1693L5.19 32.3393C5.89 31.6193 6.97 31.4893 7.82 32.0093L11.76 34.4393"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.45 16.92V1H39.7099L35.7299 6.31L39.7099 11.61H26.45"
                      fill="#40DDA9"
                    />
                    <path
                      d="M26.45 16.92V1H39.7099L35.7299 6.31L39.7099 11.61H26.45"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.3701 48.4688L23.3201 54.1488C23.3701 54.4288 23.4701 54.6987 23.6301 54.9387L25.4201 57.6287"
                      stroke="#223885"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Text */}
                <div className='col-9'>
                  <h3>{t('why-fanavaran-5')}</h3>
                  <p>{t('why-fanavaran-5-text')}</p>
                </div>
              </div>

              {/* Feature */}
              <div className='row card'>
                {/* Icon */}
                <div className='col-2'>
                  <svg width="64" height="58" viewBox="0 0 64 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.2097 33.6509L57.8197 22.9809C58.3397 21.4609 59.5297 19.0709 61.0697 19.5509C63.0297 20.1509 62.9797 22.1609 62.4697 23.6809L58.9597 38.0709C58.9597 38.0709 58.8097 39.8209 55.7197 42.5309C52.6297 45.2409 44.9197 51.7009 44.9197 51.7009" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M46.3101 40.621L50.2901 36.131C51.4801 35.051 52.5801 33.421 51.0701 31.841C49.6301 30.341 47.5301 31.681 46.3401 32.761L40.4801 38.921C40.4801 38.921 37.3701 41.841 36.8601 48.451" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M37.3996 29.2509C37.3996 29.2509 37.5796 27.7709 39.3896 26.3309L39.8996 25.8609C41.8596 24.0009 43.0896 21.3609 43.0896 18.4409C43.0896 12.7909 38.5096 8.21094 32.8596 8.21094C27.2096 8.21094 22.6296 12.7909 22.6296 18.4409C22.6296 21.4009 23.8796 24.0609 25.8896 25.9309L26.3696 26.3309C28.1796 27.7709 28.3596 29.2509 28.3596 29.2509" fill="#40DDA9" />
                    <path d="M37.3996 29.2509C37.3996 29.2509 37.5796 27.7709 39.3896 26.3309L39.8996 25.8609C41.8596 24.0009 43.0896 21.3609 43.0896 18.4409C43.0896 12.7909 38.5096 8.21094 32.8596 8.21094C27.2096 8.21094 22.6296 12.7909 22.6296 18.4409C22.6296 21.4009 23.8796 24.0609 25.8896 25.9309L26.3696 26.3309C28.1796 27.7709 28.3596 29.2509 28.3596 29.2509" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M36.7396 23.7107C37.1996 23.1507 37.4696 21.9207 37.4696 21.1007C37.4696 19.3707 36.2396 17.9707 34.7196 17.9707C33.1996 17.9707 31.9696 19.3707 31.9696 21.1007C31.9696 21.1007 31.9696 23.0007 33.1296 23.0007C34.2896 23.0007 34.2896 21.1007 34.2896 21.1007C34.2896 19.3707 33.0596 17.9707 31.5396 17.9707C30.0196 17.9707 28.7896 19.3707 28.7896 21.1007C28.7896 21.9107 29.0595 23.1307 29.5095 23.6907" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M37.2399 30.1406C37.2399 32.1906 35.3199 33.8506 32.9499 33.8506C30.5799 33.8506 28.6599 32.1906 28.6599 30.1406H37.2499H37.2399Z" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M35.0801 33.4707C35.0801 35.0207 34.1201 36.2707 32.9501 36.2707C31.7801 36.2707 30.8201 35.0107 30.8201 33.4707" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32.6899 4.02V1" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.77 17.8398H14.74" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M50.4104 17.8398H47.3904" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.3103 24.4199L16.6003 25.7599" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M48.5503 9.91016L45.8403 11.2602" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.79 29.7598L21.99 32.1898" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M43.1599 3.49023L41.3699 5.92023" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24.4098 5.48094L22.7498 2.96094" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M42.4097 32.7212L40.7397 30.2012" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.67 10.5798L17.03 9.08984" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M48.12 26.5796L45.48 25.0996" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M44.9103 51.6992H36.0603C35.4859 51.6992 35.0203 52.1648 35.0203 52.7392V55.5792C35.0203 56.1536 35.4859 56.6192 36.0603 56.6192H44.9103C45.4846 56.6192 45.9503 56.1536 45.9503 55.5792V52.7392C45.9503 52.1648 45.4846 51.6992 44.9103 51.6992Z" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.2599 33.6509L6.64995 22.9809C6.12995 21.4609 4.93995 19.0709 3.39995 19.5509C1.43995 20.1509 1.48995 22.1609 1.99995 23.6809L5.50995 38.0709C5.50995 38.0709 5.65995 39.8209 8.74995 42.5309C11.8399 45.2409 19.5499 51.7009 19.5499 51.7009" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.1599 40.621L14.1799 36.131C12.9899 35.051 11.8899 33.421 13.3999 31.841C14.8399 30.341 16.9399 31.681 18.1299 32.761L23.9899 38.921C23.9899 38.921 27.0999 41.841 27.6099 48.451" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28.3995 51.7012H19.5495C18.9751 51.7012 18.5095 52.1668 18.5095 52.7412V55.5812C18.5095 56.1555 18.9751 56.6212 19.5495 56.6212H28.3995C28.9739 56.6212 29.4395 56.1555 29.4395 55.5812V52.7412C29.4395 52.1668 28.9739 51.7012 28.3995 51.7012Z" stroke="#223885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Text */}
                <div className='col-9'>
                  <h3>{t('why-fanavaran-6')}</h3>
                  <p>{t('why-fanavaran-6-text')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyFanavaran