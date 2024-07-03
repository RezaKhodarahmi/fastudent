import React from 'react'

// ** Hook Imports
import Link from 'next/link'

// ** Import Translation
import { useTranslation } from 'react-i18next'

const CategoriesSection = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className='FNV-Top_Categories'>
        <div className='container'>
          <div className='row'>
            {/* Engineering */}
            <div className='col-6 col-sm-12 col-md d-flex justify-content-center align-items-center'>
              <Link href='/engineering'>
                <svg width='54' height='54' viewBox='0 0 54 54' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M52.4274 27.1126H52.0296L50.589 19.9117C50.4411 19.1723 49.7915 18.6399 49.0371 18.6399H48.3562C46.6134 11.1337 41.0216 5.07179 33.6681 2.72848V1.58203C33.6681 0.708329 32.9595 0 32.0855 0H21.9145C21.0405 0 20.3319 0.708329 20.3319 1.58203V2.72848C12.9784 5.07179 7.38662 11.1337 5.64394 18.6398H4.963C4.20862 18.6398 3.559 19.1721 3.41108 19.9116L1.97037 27.1126H1.57261C-0.524994 27.1904 -0.523411 30.1996 1.57261 30.2767H4.47713V34.2766C4.47713 35.0744 5.07146 35.7474 5.8634 35.8464L9.29874 36.2756C9.70832 37.793 10.3102 39.2433 11.0968 40.6081L8.96945 43.3423C8.47936 43.972 8.53528 44.868 9.09964 45.4321L13.0482 49.3792C13.6125 49.9435 14.5088 49.9992 15.1388 49.5093L17.8741 47.3827C19.2396 48.1689 20.6901 48.7705 22.208 49.1801L22.6375 52.6142C22.7364 53.4059 23.4097 54 24.2078 54H29.7918C30.59 54 31.2633 53.4059 31.3622 52.6142L31.7916 49.1802C33.3096 48.7707 34.7603 48.169 36.1256 47.3827L38.8609 49.5092C39.491 49.9991 40.3873 49.9433 40.9515 49.3791L44.9 45.432C45.4644 44.8679 45.5202 43.9719 45.0302 43.3422L42.9028 40.6079C43.6892 39.2431 44.2913 37.7928 44.7008 36.2755L48.1363 35.8463C48.9282 35.7473 49.5225 35.0743 49.5225 34.2765V30.2766H52.4274C54.525 30.1988 54.5234 27.1897 52.4274 27.1126ZM20.3319 6.0806V8.36021C20.4098 10.457 23.42 10.4555 23.4971 8.36021V3.16407H30.5029V8.36021C30.5807 10.457 33.591 10.4555 33.6681 8.36021V6.0806C39.2534 8.20148 43.5125 12.8767 45.0926 18.6399H8.90741C10.4875 12.8767 14.7466 8.20148 20.3319 6.0806ZM46.3576 32.8799L43.2187 33.2722C42.5449 33.3563 41.9999 33.8609 41.8643 34.526C41.4766 36.4271 40.7347 38.2146 39.6594 39.8388C39.2845 40.4051 39.3128 41.1472 39.7298 41.6832L41.6743 44.1824L39.7017 46.1544L37.2014 44.2106C36.6651 43.7937 35.9227 43.7653 35.3561 44.1402C33.7315 45.2154 31.9436 45.9569 30.0419 46.3442C29.3765 46.4797 28.8717 47.0246 28.7874 47.6981L28.3949 50.836H25.6052L25.2128 47.6982C25.1286 47.0247 24.6239 46.48 23.9585 46.3443C22.0569 45.9568 20.2687 45.2152 18.6438 44.1401C18.0773 43.7654 17.3348 43.7938 16.7987 44.2106L14.2985 46.1544L12.3259 44.1824L14.2704 41.6832C14.6874 41.1472 14.7157 40.4048 14.3407 39.8387C13.2653 38.2148 12.5235 36.4273 12.1359 34.5261C12.0004 33.8609 11.4554 33.3563 10.7815 33.2722L7.64258 32.8799V30.2767H15.8173C15.0699 36.8586 20.3681 42.77 27 42.7286C33.6312 42.7701 38.9309 36.8582 38.1828 30.2766H46.3575V32.8799H46.3576ZM18.9179 31.4855C18.9179 31.0789 18.948 30.6749 19.0078 30.2767H34.9922C35.7577 35.0994 31.8907 39.6063 27 39.5647C22.5436 39.5647 18.9179 35.9404 18.9179 31.4855ZM5.19828 27.1126L6.26032 21.804H47.7397L48.8017 27.1126H5.19828Z'
                    fill='#FF772C'
                  />
                </svg>
                <h3>{t('engineering')}</h3>
              </Link>
            </div>

            {/* Project Management */}
            <div className='col-6 col-sm-12 col-md d-flex justify-content-center align-items-center'>
              <Link href='/project-management'>
                <svg width='54' height='54' viewBox='0 0 54 54' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M49.043 10.7578C46.426 10.7578 44.2969 12.8869 44.2969 15.5039V28.9044C42.4355 27.4692 39.7539 27.6035 38.0476 29.3099L27.6292 39.7288C27.3623 39.9958 27.1178 40.279 26.8945 40.5753C26.6714 40.279 26.4268 39.9958 26.1598 39.7288L15.7414 29.3099C14.0351 27.6035 11.3536 27.4692 9.49219 28.9044V15.5039C9.49219 12.8869 7.36309 10.7578 4.74609 10.7578C2.1291 10.7578 0 12.8869 0 15.5039V35.9763C0 37.9139 0.643043 39.8325 1.81058 41.3787L10.8663 53.3713C11.1653 53.7672 11.6328 54 12.1289 54H41.6602C42.1563 54 42.6237 53.7672 42.9227 53.3713L51.9785 41.3787C53.146 39.8325 53.7891 37.9139 53.7891 35.9763V15.5039C53.7891 12.8869 51.66 10.7578 49.043 10.7578ZM25.3125 50.8359H12.9167L4.33561 39.472C3.58014 38.4715 3.16406 37.2302 3.16406 35.9763V15.5039C3.16406 14.6316 3.87376 13.9219 4.74609 13.9219C5.61843 13.9219 6.32812 14.6316 6.32812 15.5039V30.0447C6.32812 32.1576 7.15089 34.144 8.64496 35.6381L14.9422 41.9351C15.56 42.5529 16.5617 42.5528 17.1795 41.9351C17.7973 41.3173 17.7973 40.3156 17.1795 39.6978L11.2664 33.7848C10.6484 33.1669 10.6484 32.165 11.2665 31.5472C11.8844 30.9293 12.8862 30.9293 13.504 31.5473L23.9225 41.9662C24.8125 42.8562 25.3125 44.0634 25.3125 45.322V50.8359ZM50.625 35.9763C50.625 37.23 50.2089 38.4715 49.4535 39.472L40.8724 50.8359H28.4766V45.322C28.4766 44.0634 28.9766 42.8562 29.8665 41.9661L40.2851 31.5472C40.9029 30.9292 41.9047 30.9292 42.5226 31.5471C43.1405 32.1649 43.1405 33.1669 42.5227 33.7847L36.6096 39.6977C35.9917 40.3154 35.9917 41.3172 36.6096 41.935C37.2274 42.5527 38.229 42.5528 38.8469 41.935L45.1441 35.638C46.6382 34.1439 47.4609 32.1575 47.4609 30.0446V15.5039C47.4609 14.6316 48.1706 13.9219 49.043 13.9219C49.9153 13.9219 50.625 14.6316 50.625 15.5039V35.9763Z'
                    fill='#FF772C'
                  />
                  <path
                    d='M26.8949 18.9844C29.5118 18.9844 31.6409 16.8553 31.6409 14.2383C31.6409 11.6213 29.5118 9.49219 26.8949 9.49219C24.2779 9.49219 22.1488 11.6213 22.1488 14.2383C22.1488 16.8553 24.2779 18.9844 26.8949 18.9844ZM26.8949 12.6562C27.7672 12.6562 28.4769 13.3659 28.4769 14.2383C28.4769 15.1106 27.7672 15.8203 26.8949 15.8203C26.0225 15.8203 25.3128 15.1106 25.3128 14.2383C25.3128 13.3659 26.0225 12.6562 26.8949 12.6562Z'
                    fill='#FF772C'
                  />
                  <path
                    d='M12.9817 18.6172L16.1459 24.0977C16.5827 24.8543 17.5502 25.1136 18.3068 24.6767L20.6082 23.348C21.0962 23.6847 21.6105 23.9812 22.1484 24.2358V26.8947C22.1484 27.7684 22.8567 28.4767 23.7304 28.4767H30.0586C30.9323 28.4767 31.6405 27.7684 31.6405 26.8947V24.2357C32.1784 23.9811 32.6928 23.6847 33.1807 23.3479L35.4821 24.6766C36.2387 25.1135 37.2062 24.8542 37.6431 24.0976L40.8072 18.6171C41.2441 17.8605 40.9848 16.893 40.2282 16.4562L37.9306 15.1296C37.9561 14.8303 37.9686 14.5342 37.9686 14.2382C37.9686 13.9421 37.9561 13.6462 37.9306 13.3468L40.2282 12.0202C40.9848 11.5833 41.2441 10.6159 40.8072 9.85922L37.6431 4.37875C37.2062 3.62211 36.2387 3.36287 35.4821 3.79972L33.1807 5.12842C32.6927 4.79176 32.1783 4.49529 31.6405 4.24069V1.58193C31.6406 0.708223 30.9324 0 30.0587 0H23.7305C22.8567 0 22.1484 0.708223 22.1484 1.58193V4.2409C21.6107 4.49539 21.0963 4.79187 20.6082 5.12863L18.3068 3.79993C17.5502 3.36308 16.5827 3.62232 16.1459 4.37896L12.9817 9.85943C12.5449 10.6161 12.8041 11.5835 13.5608 12.0204L15.8584 13.347C15.8329 13.6463 15.8203 13.9422 15.8203 14.2383C15.8203 14.5343 15.8329 14.8303 15.8584 15.1297L13.5608 16.4563C12.8041 16.893 12.5449 17.8605 12.9817 18.6172ZM19.1232 15.6826C19.0298 15.1765 18.9844 14.7041 18.9844 14.2383C18.9844 13.7724 19.0298 13.3 19.1232 12.794C19.2448 12.1354 18.9385 11.4716 18.3584 11.1368L16.5128 10.0712L18.0949 7.33103L19.941 8.39689C20.5217 8.73218 21.2507 8.66489 21.7602 8.22909C22.4956 7.60008 23.336 7.11555 24.2582 6.78913C24.89 6.56554 25.3123 5.96805 25.3123 5.29791V3.16406H28.4763V5.2978C28.4763 5.96795 28.8986 6.56543 29.5304 6.78902C30.4526 7.11545 31.293 7.59997 32.0283 8.22888H32.0284C32.538 8.66479 33.267 8.73207 33.8477 8.39679L35.6939 7.33092L37.2759 10.0711L35.4303 11.1367C34.8504 11.4715 34.5441 12.1352 34.6656 12.7939C34.7592 13.3 34.8047 13.7724 34.8047 14.2383C34.8047 14.7041 34.7592 15.1765 34.6659 15.6826C34.5443 16.3411 34.8506 17.0049 35.4306 17.3398L37.2762 18.4054L35.6942 21.1455L33.848 20.0797C33.2673 19.7444 32.5383 19.8117 32.0286 20.2476C31.2935 20.8764 30.453 21.3609 29.5306 21.6875C28.8989 21.9112 28.4767 22.5086 28.4767 23.1788V25.3125H25.3126V23.1788C25.3126 22.5086 24.8903 21.9111 24.2587 21.6875C23.3362 21.3609 22.4959 20.8765 21.7606 20.2476C21.2511 19.8117 20.522 19.7444 19.9413 20.0797L18.0952 21.1455L16.5131 18.4054L18.3587 17.3398C18.9385 17.0049 19.2448 16.3411 19.1232 15.6826Z'
                    fill='#FF772C'
                  />
                </svg>
                <h3>{t('project-management')}</h3>
              </Link>
            </div>

            {/* Architect */}
            <div className='col-6 col-sm-12 col-md d-flex justify-content-center align-items-center'>
              <Link href='/architect'>
                <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M51.0781 8.96875H45.6094C44.7033 8.96875 43.9688 9.70331 43.9688 10.6094V15.5312H36.2031V12.7969C36.2031 8.83542 33.3804 5.52103 29.6406 4.7588V1.64062C29.6406 0.734562 28.9061 0 28 0C27.0939 0 26.3594 0.734562 26.3594 1.64062V4.7588C22.6196 5.52092 19.7969 8.83542 19.7969 12.7969V15.5312H1.64062C0.734562 15.5312 0 16.2658 0 17.1719V43.4219C0 43.857 0.172922 44.2742 0.480594 44.5819L11.4181 55.5194C11.7258 55.8271 12.143 56 12.5781 56H51.0781C53.792 56 56 53.792 56 51.0781V13.8906C56 11.1767 53.792 8.96875 51.0781 8.96875ZM28 7.875C30.7139 7.875 32.9219 10.083 32.9219 12.7969C32.9219 15.5108 30.7139 17.7188 28 17.7188C25.2861 17.7188 23.0781 15.5108 23.0781 12.7969C23.0781 10.083 25.2861 7.875 28 7.875ZM23.0781 19.3549C24.4501 20.3872 26.1547 21 28 21C29.8453 21 31.5499 20.3872 32.9219 19.3549V38.5H29.6406V36.8594C29.6406 35.9533 28.9061 35.2188 28 35.2188C27.0939 35.2188 26.3594 35.9533 26.3594 36.8594V38.5H23.0781V19.3549ZM10.9375 50.3986L5.60142 45.0625H10.9375V50.3986ZM51.0781 52.7188H14.2188V43.4219C14.2188 42.5158 13.4842 41.7812 12.5781 41.7812H3.28125V18.8125H19.7969V46.7031C19.7969 47.6092 20.5314 48.3438 21.4375 48.3438C22.3436 48.3438 23.0781 47.6092 23.0781 46.7031V41.7812H26.3594V43.4219C26.3594 44.3279 27.0939 45.0625 28 45.0625C28.9061 45.0625 29.6406 44.3279 29.6406 43.4219V41.7812H32.9219V46.7031C32.9219 47.6092 33.6564 48.3438 34.5625 48.3438C35.4686 48.3438 36.2031 47.6092 36.2031 46.7031V18.8125H43.9688V47.7969C43.9688 48.7029 44.7033 49.4375 45.6094 49.4375H51.0781C51.9828 49.4375 52.7188 50.1735 52.7188 51.0781C52.7188 51.9828 51.9828 52.7188 51.0781 52.7188ZM52.7188 46.4373C52.2055 46.2553 51.6531 46.1562 51.0781 46.1562H47.25V12.25H51.0781C51.9828 12.25 52.7188 12.986 52.7188 13.8906V46.4373Z'
                    fill='#FF772C'
                  />
                  <path
                    d='M28 14.4375C28.9061 14.4375 29.6406 13.703 29.6406 12.7969C29.6406 11.8908 28.9061 11.1562 28 11.1562C27.0939 11.1562 26.3594 11.8908 26.3594 12.7969C26.3594 13.703 27.0939 14.4375 28 14.4375Z'
                    fill='#FF772C'
                  />
                </svg>
                <h3>{t('architect')}</h3>
              </Link>
            </div>

            {/* Accounting */}
            <div className='col-6 col-sm-12 col-md d-flex justify-content-center align-items-center'>
              <Link href='/accounting'>
              <svg width="56" height="56" viewBox="0 0 84 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.8601 47.0791H13.1362C12.408 47.0791 11.8179 47.6694 11.8179 48.3975C11.8179 49.1255 12.408 49.7158 13.1362 49.7158H30.8601C31.5883 49.7158 32.1784 49.1255 32.1784 48.3975C32.1784 47.6694 31.5883 47.0791 30.8601 47.0791Z" fill="#FF772C" stroke="#FF772C" stroke-width="2"/>
                <path d="M30.8601 58.5776H13.1362C12.408 58.5776 11.8179 59.1679 11.8179 59.896C11.8179 60.6241 12.408 61.2144 13.1362 61.2144H30.8601C31.5883 61.2144 32.1784 60.6241 32.1784 59.896C32.1784 59.1679 31.5883 58.5776 30.8601 58.5776Z" fill="#FF772C" stroke="#FF772C" stroke-width="2"/>
                <path d="M30.8601 70.0762H13.1362C12.408 70.0762 11.8179 70.6664 11.8179 71.3945C11.8179 72.1226 12.408 72.7129 13.1362 72.7129H30.8601C31.5883 72.7129 32.1784 72.1226 32.1784 71.3945C32.1784 70.6664 31.5883 70.0762 30.8601 70.0762Z" fill="#FF772C" stroke="#FF772C" stroke-width="2"/>
                <path d="M45.6455 56.9355H48.4436C49.1719 56.9355 49.762 56.3453 49.762 55.6172C49.762 54.8891 49.1719 54.2988 48.4436 54.2988H45.6455C44.9172 54.2988 44.3271 54.8891 44.3271 55.6172C44.3271 56.3453 44.9174 56.9355 45.6455 56.9355Z" fill="#FF772C" stroke="#FF772C"/>
                <path d="M56.9436 54.2988H54.1455C53.4172 54.2988 52.8271 54.8891 52.8271 55.6172C52.8271 56.3453 53.4172 56.9355 54.1455 56.9355H56.9436C57.6719 56.9355 58.262 56.3453 58.262 55.6172C58.262 54.8891 57.6717 54.2988 56.9436 54.2988Z" fill="#FF772C" stroke="#FF772C"/>
                <path d="M65.4436 54.2988H62.6455C61.9172 54.2988 61.3271 54.8891 61.3271 55.6172C61.3271 56.3453 61.9172 56.9355 62.6455 56.9355H65.4436C66.1719 56.9355 66.762 56.3453 66.762 55.6172C66.762 54.8891 66.1719 54.2988 65.4436 54.2988Z" fill="#FF772C" stroke="#FF772C"/>
                <path d="M73.9434 54.2988H71.1455C70.4172 54.2988 69.8271 54.8891 69.8271 55.6172C69.8271 56.3453 70.4172 56.9355 71.1455 56.9355H73.9434C74.6717 56.9355 75.2618 56.3453 75.2618 55.6172C75.2618 54.8891 74.6715 54.2988 73.9434 54.2988Z" fill="#FF772C" stroke="#FF772C"/>
                <path d="M45.6455 63.791H48.4436C49.1719 63.791 49.762 63.2007 49.762 62.4727C49.762 61.7446 49.1719 61.1543 48.4436 61.1543H45.6455C44.9172 61.1543 44.3271 61.7446 44.3271 62.4727C44.3271 63.2007 44.9174 63.791 45.6455 63.791Z" fill="#FF772C" stroke="#FF772C"/>
                <path d="M56.9436 61.1543H54.1455C53.4172 61.1543 52.8271 61.7446 52.8271 62.4727C52.8271 63.2007 53.4172 63.791 54.1455 63.791H56.9436C57.6719 63.791 58.262 63.2007 58.262 62.4727C58.262 61.7446 57.6717 61.1543 56.9436 61.1543Z" fill="#FF772C" stroke="#FF772C"/>
                <path d="M65.4436 61.1543H62.6455C61.9172 61.1543 61.3271 61.7446 61.3271 62.4727C61.3271 63.2007 61.9172 63.791 62.6455 63.791H65.4436C66.1719 63.791 66.762 63.2007 66.762 62.4727C66.762 61.7446 66.1719 61.1543 65.4436 61.1543Z" fill="#FF772C" stroke="#FF772C"/>
                <path d="M73.9434 61.1543H71.1455C70.4172 61.1543 69.8271 61.7446 69.8271 62.4727C69.8271 63.2007 70.4172 63.791 71.1455 63.791H73.9434C74.6717 63.791 75.2618 63.2007 75.2618 62.4727C75.2618 61.7446 74.6715 61.1543 73.9434 61.1543Z" fill="#FF772C" stroke="#FF772C"/>
                <path d="M45.6455 70.6465H48.4436C49.1719 70.6465 49.762 70.0562 49.762 69.3281C49.762 68.6 49.1719 68.0098 48.4436 68.0098H45.6455C44.9172 68.0098 44.3271 68.6 44.3271 69.3281C44.3271 70.0562 44.9174 70.6465 45.6455 70.6465Z" fill="#FF772C" stroke="#FF772C"/>
                <path d="M56.9436 68.0098H54.1455C53.4172 68.0098 52.8271 68.6 52.8271 69.3281C52.8271 70.0562 53.4172 70.6465 54.1455 70.6465H56.9436C57.6719 70.6465 58.262 70.0562 58.262 69.3281C58.262 68.6 57.6717 68.0098 56.9436 68.0098Z" fill="#FF772C" stroke="#FF772C"/>
                <path d="M65.4436 68.0098H62.6455C61.9172 68.0098 61.3271 68.6 61.3271 69.3281C61.3271 70.0562 61.9172 70.6465 62.6455 70.6465H65.4436C66.1719 70.6465 66.762 70.0562 66.762 69.3281C66.762 68.6 66.1719 68.0098 65.4436 68.0098Z" fill="#FF772C" stroke="#FF772C"/>
                <path d="M73.9434 68.0098H71.1455C70.4172 68.0098 69.8271 68.6 69.8271 69.3281C69.8271 70.0562 70.4172 70.6465 71.1455 70.6465H73.9434C74.6717 70.6465 75.2618 70.0562 75.2618 69.3281C75.2618 68.6 74.6715 68.0098 73.9434 68.0098Z" fill="#FF772C" stroke="#FF772C"/>
                <path d="M16.0442 33.9502C15.4352 33.5516 14.6179 33.7226 14.2192 34.3317C13.8205 34.9409 13.9914 35.7581 14.6008 36.1566C16.5305 37.4191 17.8334 37.768 19.5628 37.8475V39.6222C19.5628 40.3503 20.1529 40.9405 20.8811 40.9405C21.6094 40.9405 22.1995 40.3503 22.1995 39.6222V37.7489C25.5458 37.157 27.4998 34.4277 27.9282 31.8794C28.4701 28.6561 26.7828 25.8532 23.6296 24.7386C23.115 24.5567 22.6403 24.3825 22.1995 24.2139V16.8411C23.4825 17.0921 24.2509 17.749 24.3124 17.803C24.8476 18.2892 25.6761 18.2533 26.1676 17.7207C26.6613 17.1854 26.6276 16.3514 26.0923 15.8578C26.008 15.7799 24.5618 14.4793 22.1995 14.1713V12.5835C22.1995 11.8554 21.6094 11.2651 20.8811 11.2651C20.1529 11.2651 19.5628 11.8554 19.5628 12.5835V14.2728C19.3033 14.3257 19.0377 14.3923 18.7663 14.474C16.697 15.0973 15.1505 16.8701 14.73 19.1006C14.3479 21.1287 14.9937 23.0815 16.4159 24.197C17.2052 24.8159 18.194 25.3827 19.5628 25.9852V35.2102C18.2808 35.1406 17.453 34.8719 16.0442 33.9502ZM22.1995 27.0273C22.379 27.0923 22.5621 27.158 22.7509 27.2247C25.6292 28.2421 25.4511 30.7101 25.328 31.4424C25.079 32.9242 24.0144 34.5031 22.1995 35.0397V27.0273ZM18.043 22.1221C17.3984 21.6167 17.1219 20.6459 17.3212 19.5887C17.5072 18.6017 18.1843 17.4029 19.5267 16.9984C19.5389 16.9947 19.5506 16.9919 19.5628 16.9884V23.0678C18.9417 22.7477 18.4452 22.4376 18.043 22.1221Z" fill="#FF772C" stroke="#FF772C"/>
                <path d="M71.0588 84.2417C70.3306 84.2417 69.7405 84.832 69.7405 85.5601V86.5028C69.7405 88.0801 68.4573 89.3633 66.88 89.3633H7.49721C5.91975 89.3633 4.63672 88.0801 4.63672 86.5028V7.49721C4.63672 5.91992 5.91975 4.63672 7.49721 4.63672H53.6236C53.763 4.63672 53.9003 4.65025 54.0364 4.67012V15.6939C54.0364 18.2563 56.1209 20.3408 58.6833 20.3408H69.7071C69.7269 20.4769 69.7405 20.614 69.7405 20.7534V27.0471C69.7405 27.7752 70.3306 28.3654 71.0588 28.3654C71.7871 28.3654 72.3772 27.7752 72.3772 27.0471V20.7534C72.3772 19.2464 71.6556 17.7509 70.795 16.8955C70.2539 16.3543 57.5251 3.62422 57.5108 3.61016L57.4808 3.58045C57.4797 3.57939 57.4785 3.57816 57.4773 3.57711L57.4766 3.57641C57.473 3.57289 57.4695 3.56955 57.4657 3.56586C56.475 2.59801 55.1086 2 53.6236 2H7.49721C4.46604 2 2 4.46604 2 7.49721V86.5026C2 89.5338 4.46604 91.9998 7.49721 91.9998H66.8798C69.911 91.9998 72.377 89.5338 72.377 86.5026V85.5599C72.3772 84.832 71.7869 84.2417 71.0588 84.2417ZM56.6731 6.50141C57.6552 7.4835 66.5497 16.3777 67.876 17.7041H58.6831C57.5747 17.7041 56.6729 16.8024 56.6729 15.6939V6.50141H56.6731Z" fill="#FF772C" stroke="#FF772C" stroke-width="3"/>
                <path d="M77.5439 31.9141H42.0456C39.5221 31.9141 37.4688 33.9672 37.4688 36.4909V40.926C37.4688 41.6541 38.0588 42.2444 38.7871 42.2444C39.5154 42.2444 40.1055 41.6541 40.1055 40.926V36.4909C40.1055 35.4213 40.9758 34.5508 42.0456 34.5508H77.5439C78.6135 34.5508 79.4838 35.4211 79.4838 36.4909V76.1459C79.4838 77.2155 78.6135 78.086 77.5439 78.086H42.0456C40.9758 78.086 40.1055 77.2157 40.1055 76.1459V47.0894C40.1055 46.3614 39.5154 45.7711 38.7871 45.7711C38.0588 45.7711 37.4688 46.3614 37.4688 47.0894V76.1459C37.4688 78.6694 39.5221 80.7227 42.0456 80.7227H77.5439C80.0674 80.7227 82.1205 78.6696 82.1205 76.1459V36.4907C82.1205 33.9672 80.0676 31.9141 77.5439 31.9141Z" fill="#FF772C" stroke="#FF772C" stroke-width="3"/>
                <path d="M75.262 40.6365C75.262 39.3505 74.2158 38.3042 72.9297 38.3042H46.6596C45.3736 38.3042 44.3271 39.3505 44.3271 40.6365V47.3837C44.3271 48.6697 45.3734 49.7159 46.6596 49.7159H72.9297C74.2156 49.7159 75.262 48.6697 75.262 47.3837V40.6365ZM72.6253 47.0792H46.9639V40.9409H72.6251V47.0792H72.6253Z" fill="#FF772C" stroke="#FF772C"/>
              </svg>

                <h3>{t('accounting')}</h3>
              </Link>
            </div>

            {/* Technician */}
            <div className='col-6 col-sm-12 col-md d-flex justify-content-center align-items-center'>
              <Link href='/technician'>
                <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M44.5153 33.0308C43.8687 33.0308 43.2176 33.0962 42.5147 33.2338L37.2803 27.9994L42.4908 22.7889C46.164 23.4418 49.9761 22.2645 52.6361 19.6043C56.0724 16.168 56.9744 10.9146 54.8806 6.53177C54.6509 6.05118 54.2025 5.71201 53.6776 5.62199C53.1524 5.53176 52.6167 5.70227 52.2401 6.07896L47.9957 10.3234C47.3558 10.9632 46.3152 10.9631 45.6754 10.3234C45.0357 9.68363 45.0357 8.64281 45.6754 8.00308L49.9199 3.75857C50.2965 3.38199 50.4669 2.84606 50.3769 2.32117C50.2869 1.79628 49.9476 1.34773 49.4671 1.11815C45.0842 -0.975721 39.8306 -0.0738161 36.3944 3.36252C33.7342 6.02274 32.557 9.83555 33.2098 13.5078L27.9993 18.7184L22.7887 13.5078C23.4415 9.83555 22.2644 6.02263 19.6041 3.36252C15.1264 -1.11528 7.84022 -1.11528 3.36263 3.36252C-1.11528 7.84033 -1.11528 15.1266 3.36263 19.6043C6.02285 22.2645 9.83544 23.4418 13.5077 22.7888L18.7183 27.9993L13.5078 33.2099C9.83533 32.5572 6.02252 33.7344 3.36252 36.3946C-0.0738161 39.8308 -0.975721 45.0842 1.11815 49.4671C1.34773 49.9477 1.79628 50.2869 2.32117 50.3769C2.84595 50.4669 3.38199 50.2966 3.75857 49.9199L8.00297 45.6755C8.6427 45.0358 9.68352 45.0358 10.3233 45.6755C10.963 46.3152 10.9629 47.3561 10.3233 47.9958L6.07885 52.2402C5.70227 52.6168 5.53187 53.1527 5.62188 53.6776C5.7119 54.2025 6.05118 54.651 6.53166 54.8806C10.9329 56.9832 16.1827 56.0577 19.6041 52.6361C22.2644 49.9759 23.4415 46.1631 22.7888 42.4908L27.9993 37.2803L33.2337 42.5146C33.0962 43.2174 33.0308 43.8686 33.0308 44.5151C33.0308 50.8477 38.1828 55.9997 44.5154 55.9997C50.848 55.9997 56 50.8477 56 44.5151C56 38.1826 50.848 33.0308 44.5153 33.0308ZM15.1925 19.8333C14.7784 19.4192 14.1749 19.2572 13.6091 19.4083C10.7844 20.1626 7.74736 19.3488 5.6828 17.2842C2.48424 14.0856 2.48424 8.88136 5.6828 5.68291C8.88125 2.48446 14.0855 2.48446 17.284 5.68291C19.3484 7.74736 20.1625 10.7847 19.408 13.6094C19.257 14.1752 19.419 14.7786 19.8331 15.1928L25.679 21.0387L21.0385 25.6793L15.1925 19.8333ZM26.8395 33.8L26.8393 33.8001L26.8392 33.8002L19.8331 40.8062C19.419 41.2203 19.257 41.8238 19.408 42.3897C20.1623 45.2144 19.3484 48.2516 17.284 50.3162C15.4283 52.1717 12.8314 52.9928 10.3223 52.6375L12.6435 50.3162C14.5626 48.3972 14.5626 45.2745 12.6435 43.3554C10.7247 41.4365 7.60189 41.4364 5.6828 43.3554L3.36154 45.6768C3.00607 43.1675 3.82737 40.5705 5.6828 38.715C7.74736 36.6506 10.7846 35.8364 13.6093 36.5909C14.1754 36.7422 14.7785 36.5801 15.1927 36.1659L22.1985 29.1602L22.1988 29.1599L22.1992 29.1596L29.1595 22.1993L29.1597 22.1992L29.1598 22.199L36.1658 15.1931C36.5799 14.779 36.742 14.1755 36.5908 13.6096C35.8366 10.7849 36.6504 7.74769 38.7149 5.68313C40.5704 3.82759 43.1673 3.00607 45.6766 3.36176L43.3553 5.68313C41.4362 7.60211 41.4362 10.7248 43.3553 12.6439C45.2788 14.5674 48.3924 14.5677 50.3161 12.6439L52.6374 10.3225C52.9928 12.8318 52.1716 15.4288 50.3161 17.2843C48.2516 19.3488 45.214 20.1628 42.3896 19.4084C41.8238 19.2572 41.2203 19.4193 40.8061 19.8334L33.8004 26.8391L33.8 26.8394L33.7997 26.8397L26.8395 33.8ZM44.5153 52.7187C39.992 52.7187 36.3119 49.0387 36.3119 44.5154C36.3119 43.8834 36.4106 43.2173 36.6227 42.4191C36.7728 41.8538 36.6107 41.2514 36.1971 40.8379L30.3194 34.9603L34.9599 30.3197L40.8375 36.1973C41.251 36.6108 41.8531 36.7729 42.4188 36.6229C43.217 36.4109 43.8832 36.3121 44.515 36.3121C49.0383 36.3121 52.7184 39.9922 52.7184 44.5155C52.7185 49.0387 49.0387 52.7187 44.5153 52.7187Z'
                    fill='#FF772C'
                  />
                </svg>
                <h3>{t('technician')}</h3>
              </Link>
            </div>

            {/* English */}
            <div className='col-6 col-sm-12 col-md d-flex justify-content-center align-items-center'>
              <Link href='/english'>
              <svg width="56" height="56" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_634_301)">
                <path d="M35.7246 49.7656C37.197 49.7656 38.3906 48.572 38.3906 47.0996V37.9116L45.5265 48.2448C46.2922 49.3513 47.5766 49.8198 48.7986 49.4382C50.0418 49.0499 50.8452 47.8969 50.8452 46.5008C50.8452 46.4923 50.8452 46.4836 50.845 46.4749L50.6788 29.3004C50.665 27.8368 49.474 26.6602 48.0137 26.6602C48.005 26.6602 47.9961 26.6602 47.9874 26.6603C46.5152 26.6746 45.3331 27.8796 45.3473 29.3521L45.438 38.7331L37.9184 27.8444C37.2554 26.8845 36.0454 26.4668 34.9312 26.8141C33.8172 27.1614 33.0586 28.1926 33.0586 29.3592V47.0996C33.0586 48.572 34.2523 49.7656 35.7246 49.7656Z" fill="#FF772C"/>
                <path d="M19.373 49.7656H26.8621C28.3344 49.7656 29.5281 48.572 29.5281 47.0996C29.5281 45.6273 28.3344 44.4336 26.8621 44.4336H22.0391V40.8789H26.3098C27.7822 40.8789 28.9759 39.6852 28.9759 38.2129C28.9759 36.7405 27.7822 35.5469 26.3098 35.5469H22.0391V31.9922H26.8621C28.3344 31.9922 29.5281 30.7985 29.5281 29.3262C29.5281 27.8538 28.3344 26.6602 26.8621 26.6602H19.373C17.9007 26.6602 16.707 27.8538 16.707 29.3262V47.0996C16.707 48.572 17.9007 49.7656 19.373 49.7656Z" fill="#FF772C"/>
                <path d="M65.3774 49.7656C71.464 49.7656 75.7148 45.015 75.7148 38.2129C75.7148 36.7405 74.5212 35.5469 73.0488 35.5469H67.7319C66.2595 35.5469 65.0659 36.7405 65.0659 38.2129C65.0659 39.6852 66.2595 40.8789 67.7319 40.8789H70.0005C69.382 42.8569 67.9624 44.4336 65.3774 44.4336C61.9473 44.4336 59.1567 41.643 59.1567 38.2129C59.1567 34.7828 61.9473 31.9922 65.3774 31.9922C66.6242 31.9922 67.8263 32.359 68.8537 33.0531C70.0739 33.8776 71.7313 33.5561 72.5552 32.3363C73.3796 31.1161 73.0584 29.4589 71.8384 28.6348C69.926 27.343 67.6917 26.6602 65.3774 26.6602C59.0073 26.6602 53.8247 31.8427 53.8247 38.2129C53.8247 44.5831 59.0073 49.7656 65.3774 49.7656Z" fill="#FF772C"/>
                <path d="M88.334 0H2.66602C1.19366 0 0 1.19366 0 2.66602V13.3301C0 14.8024 1.19366 15.9961 2.66602 15.9961H5.50977V63.0957C5.50977 64.5681 6.70343 65.7617 8.17578 65.7617H34.0767L23.387 87.141C22.7285 88.4579 23.2622 90.0594 24.5792 90.7179C25.8963 91.3764 27.4976 90.8427 28.1561 89.5257L32.9287 79.9805H58.0713L62.844 89.5257C63.5025 90.8427 65.1039 91.3764 66.4209 90.7179C67.7378 90.0594 68.2717 88.458 67.6132 87.141L56.9233 65.7617H82.8242C84.2966 65.7617 85.4902 64.5681 85.4902 63.0957V15.9961H88.334C89.8063 15.9961 91 14.8024 91 13.3301V2.66602C91 1.19366 89.8063 0 88.334 0ZM55.4053 74.6484H35.5947L40.038 65.7617H50.9618L55.4053 74.6484ZM80.1582 60.4297H10.8418V15.9961H80.1582V60.4297ZM85.668 10.6641H5.33203V5.33203H85.668V10.6641Z" fill="#FF772C"/>
                </g>
                <defs>
                <clipPath id="clip0_634_301">
                <rect width="91" height="91" fill="white"/>
                </clipPath>
                </defs>
              </svg>

                <h3>{t('english')}</h3>
              </Link>
            </div>

            {/* Job Seeker */}
            <div className='col-6 col-sm-12 col-md d-flex justify-content-center align-items-center'>
              <Link href='/job-seeking'>
                <svg width='58' height='58' viewBox='0 0 58 58' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M53.4518 27.4142V32.0584C53.4518 33.3098 54.4656 34.3243 55.7166 34.3243C56.9675 34.3243 57.9813 33.3098 57.9813 32.0584V18.2427C57.9813 13.2457 53.9173 9.17998 48.9219 9.17998H39.1744V6.22622C39.1744 2.79308 36.3822 0 32.9502 0H25.0311C21.5991 0 18.8069 2.79308 18.8069 6.22622V9.17998H9.05939C4.06396 9.17998 0 13.2452 0 18.2422V44.6366C0 49.6336 4.06396 53.6993 9.05939 53.6993H28.1981C29.4491 53.6993 30.4629 52.6847 30.4629 51.4334C30.4629 50.1825 29.4491 49.1679 28.1981 49.1679H9.05939C6.56189 49.1679 4.52991 47.1353 4.52991 44.6366V27.4142H26.8392V30.8168C26.8392 32.0677 27.853 33.0823 29.1039 33.0823C30.3549 33.0823 31.3687 32.0677 31.3687 30.8168V27.4142H53.4518ZM23.3368 6.22622C23.3368 5.2918 24.097 4.53134 25.0311 4.53134H32.9502C33.8843 4.53134 34.6445 5.29136 34.6445 6.22622V9.17998H23.3368V6.22622ZM4.52991 18.2427C4.52991 15.7439 6.56189 13.7113 9.05939 13.7113H48.9219C51.4194 13.7113 53.4518 15.7439 53.4518 18.2427V22.8829H4.52991V18.2427ZM57.3366 54.1322L52.119 48.913C53.1062 47.3434 53.678 45.4874 53.678 43.4999C53.678 37.8783 49.106 33.3045 43.4862 33.3045C37.8664 33.3045 33.294 37.8783 33.294 43.4999C33.294 49.1215 37.8664 53.6953 43.4862 53.6953C45.4823 53.6953 47.3462 53.1176 48.9202 52.1213L54.1333 57.336C54.5758 57.7787 55.1555 58 55.7352 58C56.3148 58 56.8941 57.7787 57.3366 57.336C58.2211 56.4512 58.2211 55.017 57.3366 54.1322ZM37.8239 43.4999C37.8239 40.3766 40.3639 37.8358 43.4862 37.8358C46.6081 37.8358 49.1485 40.3766 49.1485 43.4999C49.1485 46.6232 46.6081 49.164 43.4862 49.164C40.3639 49.164 37.8239 46.6227 37.8239 43.4999Z'
                    fill='#FF772C'
                  />
                </svg>
                <h3>{t('job-seeker')}</h3>
              </Link>
            </div>

            {/* Self Employed */}
            <div className='col-6 col-sm-12 col-md d-flex justify-content-center align-items-center'>
              <Link href='/technical-self-employment'>
                <svg width='54' height='60' viewBox='0 0 54 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M14.0729 21.4272V11.8494H10.5653V21.4272C8.51575 22.1519 7.043 24.1079 7.043 26.4025C7.043 28.6971 8.51575 30.6531 10.5653 31.3778V33.9184H14.0729V31.3778C16.1224 30.6531 17.5952 28.6971 17.5952 26.4025C17.5952 24.1079 16.1223 22.1518 14.0729 21.4272ZM12.3191 28.1709C11.344 28.1709 10.5507 27.3776 10.5507 26.4025C10.5507 25.4274 11.344 24.6341 12.3191 24.6341C13.2942 24.6341 14.0875 25.4274 14.0875 26.4025C14.0875 27.3776 13.2942 28.1709 12.3191 28.1709Z'
                    fill='#FF772C'
                  />
                  <path
                    d='M35.2066 21.4272V11.8494H31.6989V21.4272C29.6494 22.1519 28.1766 24.1079 28.1766 26.4025C28.1766 28.6971 29.6494 30.6531 31.6989 31.3778V33.9184H35.2066V31.3778C37.2561 30.6531 38.7288 28.6971 38.7288 26.4025C38.7288 24.1079 37.256 22.1518 35.2066 21.4272ZM33.4527 28.1709C32.4776 28.1709 31.6843 27.3776 31.6843 26.4025C31.6843 25.4274 32.4776 24.6341 33.4527 24.6341C34.4279 24.6341 35.2212 25.4274 35.2212 26.4025C35.2212 27.3776 34.4279 28.1709 33.4527 28.1709Z'
                    fill='#FF772C'
                  />
                  <path
                    d='M46.4334 19.596C45.8609 18.6382 45.6039 17.5213 45.69 16.366C45.8905 13.6772 45.1442 10.8284 44.6495 9.28897C46.8017 7.06886 47.9723 4.35756 47.8934 1.7018L47.8429 0H22.8874C10.2674 0 0 10.2673 0 22.8874C0 27.8073 1.62568 32.6842 4.57749 36.6199L8.01557 41.2042C9.54152 43.2386 10.0629 45.8206 9.44611 48.2878L6.55218 59.864H35.2188L35.2073 50.1048L40.1941 51.3989C43.7339 52.4344 47.7554 49.4538 47.6455 45.6343V34.6145L53.8369 31.9823L46.4334 19.596ZM44.138 32.2942V38.4536H40.0165V41.9612H44.138V45.6343C44.1757 47.1119 42.6507 48.4081 41.0752 48.0038L29.8347 45.0869C29.1024 44.8969 28.4327 44.5138 27.8978 43.9787L25.5307 41.6116L23.0504 44.092L25.4174 46.459C26.394 47.4356 27.6169 48.1352 28.9537 48.4821L31.6987 49.1944L31.7071 56.3563H11.0447L12.8491 49.1385C13.7233 45.6419 12.9843 41.9829 10.8218 39.0996L7.38373 34.5153C4.88429 31.1828 3.50777 27.0532 3.50777 22.8874C3.50777 12.2014 12.2015 3.50765 22.8876 3.50765H44.1552C43.7469 5.17999 42.0908 7.07716 40.525 8.29291C41.3297 10.2913 42.2929 12.7134 42.1922 16.1053C42.0522 17.9849 42.4776 19.8142 43.4226 21.3954L48.762 30.3282L44.138 32.2942Z'
                    fill='#FF772C'
                  />
                  <path
                    d='M24.6398 14.39V11.8494H21.1321V14.39C19.0826 15.1146 17.6098 17.0706 17.6098 19.3652C17.6098 21.6598 19.0826 23.6158 21.1321 24.3405V33.9184H24.6398V24.3405C26.6893 23.6158 28.162 21.6598 28.162 19.3652C28.162 17.0706 26.6892 15.1146 24.6398 14.39ZM22.8859 21.1337C21.9108 21.1337 21.1175 20.3403 21.1175 19.3652C21.1175 18.3901 21.9108 17.5968 22.8859 17.5968C23.8611 17.5968 24.6544 18.3901 24.6544 19.3652C24.6544 20.3403 23.8611 21.1337 22.8859 21.1337Z'
                    fill='#FF772C'
                  />
                </svg>
                <h3>{t('self-employed')}</h3>
              </Link>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-4'>
              <h3>{t('category-section-one')}</h3>

              <p>
                {t('category-section-one-description')}
              </p>

              <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnMedium'>
                {t('category-section-one-button')}
              </Link>
            </div>

            <div className='col-12 col-md-4'>
              <h3>{t('category-section-two')}</h3>

              <p>
                {t('category-section-two-description')}
              </p>

              <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnMedium'>
                {t('category-section-two-button')}
              </Link>
            </div>

            <div className='col-12 col-md-4'>
              <h3>{t('category-section-three')}</h3>

              <p>
                {t('category-section-three-description')}
              </p>

              <Link href='/membership/checkout/' className='FNV-Btn BtnOutline PrimaryColor BtnMedium'>
                {t('category-section-three-button')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CategoriesSection
