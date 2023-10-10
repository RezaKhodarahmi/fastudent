// ** React Imports
import { useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hook Imports
import { useAuth } from 'src/hooks/useAuth'
import Link from 'next/link'
import { appConfig } from 'src/configs/appConfig'
import Input from '@mui/material/Input'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

/**
 *  Set Home URL based on User Roles
 */
const Home = () => {
  return (
    <>
      {/* Header */}
      <section className='FNV-Header'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 FNV-HCard'>
              <h2>You will succeed again <mark>in Canada</mark> with FANAVARAN!</h2>

              <div className="FNV-HSearch input-group mb-3">
                <Input
                  type='text'
                  placeholder='Search for the desired word...'
                  className='form-control FNV-HSearchInput'
                  aria-describedby="button-addon1"
                  fullWidth
                  autoFocus
                />
                <button className="FNV-Btn BtnMedium PrimaryColor" type="button" id="button-addon1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className='FNV-Top_Categories'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 col-sm-12 col-md-2 d-flex justify-content-center align-items-center'>
              <Link href='/engineering'>
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M52.4274 27.1126H52.0296L50.589 19.9117C50.4411 19.1723 49.7915 18.6399 49.0371 18.6399H48.3562C46.6134 11.1337 41.0216 5.07179 33.6681 2.72848V1.58203C33.6681 0.708329 32.9595 0 32.0855 0H21.9145C21.0405 0 20.3319 0.708329 20.3319 1.58203V2.72848C12.9784 5.07179 7.38662 11.1337 5.64394 18.6398H4.963C4.20862 18.6398 3.559 19.1721 3.41108 19.9116L1.97037 27.1126H1.57261C-0.524994 27.1904 -0.523411 30.1996 1.57261 30.2767H4.47713V34.2766C4.47713 35.0744 5.07146 35.7474 5.8634 35.8464L9.29874 36.2756C9.70832 37.793 10.3102 39.2433 11.0968 40.6081L8.96945 43.3423C8.47936 43.972 8.53528 44.868 9.09964 45.4321L13.0482 49.3792C13.6125 49.9435 14.5088 49.9992 15.1388 49.5093L17.8741 47.3827C19.2396 48.1689 20.6901 48.7705 22.208 49.1801L22.6375 52.6142C22.7364 53.4059 23.4097 54 24.2078 54H29.7918C30.59 54 31.2633 53.4059 31.3622 52.6142L31.7916 49.1802C33.3096 48.7707 34.7603 48.169 36.1256 47.3827L38.8609 49.5092C39.491 49.9991 40.3873 49.9433 40.9515 49.3791L44.9 45.432C45.4644 44.8679 45.5202 43.9719 45.0302 43.3422L42.9028 40.6079C43.6892 39.2431 44.2913 37.7928 44.7008 36.2755L48.1363 35.8463C48.9282 35.7473 49.5225 35.0743 49.5225 34.2765V30.2766H52.4274C54.525 30.1988 54.5234 27.1897 52.4274 27.1126ZM20.3319 6.0806V8.36021C20.4098 10.457 23.42 10.4555 23.4971 8.36021V3.16407H30.5029V8.36021C30.5807 10.457 33.591 10.4555 33.6681 8.36021V6.0806C39.2534 8.20148 43.5125 12.8767 45.0926 18.6399H8.90741C10.4875 12.8767 14.7466 8.20148 20.3319 6.0806ZM46.3576 32.8799L43.2187 33.2722C42.5449 33.3563 41.9999 33.8609 41.8643 34.526C41.4766 36.4271 40.7347 38.2146 39.6594 39.8388C39.2845 40.4051 39.3128 41.1472 39.7298 41.6832L41.6743 44.1824L39.7017 46.1544L37.2014 44.2106C36.6651 43.7937 35.9227 43.7653 35.3561 44.1402C33.7315 45.2154 31.9436 45.9569 30.0419 46.3442C29.3765 46.4797 28.8717 47.0246 28.7874 47.6981L28.3949 50.836H25.6052L25.2128 47.6982C25.1286 47.0247 24.6239 46.48 23.9585 46.3443C22.0569 45.9568 20.2687 45.2152 18.6438 44.1401C18.0773 43.7654 17.3348 43.7938 16.7987 44.2106L14.2985 46.1544L12.3259 44.1824L14.2704 41.6832C14.6874 41.1472 14.7157 40.4048 14.3407 39.8387C13.2653 38.2148 12.5235 36.4273 12.1359 34.5261C12.0004 33.8609 11.4554 33.3563 10.7815 33.2722L7.64258 32.8799V30.2767H15.8173C15.0699 36.8586 20.3681 42.77 27 42.7286C33.6312 42.7701 38.9309 36.8582 38.1828 30.2766H46.3575V32.8799H46.3576ZM18.9179 31.4855C18.9179 31.0789 18.948 30.6749 19.0078 30.2767H34.9922C35.7577 35.0994 31.8907 39.6063 27 39.5647C22.5436 39.5647 18.9179 35.9404 18.9179 31.4855ZM5.19828 27.1126L6.26032 21.804H47.7397L48.8017 27.1126H5.19828Z" fill="#FF772C" />
                </svg>

                <h3>Engineering</h3>
              </Link>
            </div>
            <div className='col-6 col-sm-12 col-md-2 d-flex justify-content-center align-items-center'>
              <Link href='/project-management'>
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M49.043 10.7578C46.426 10.7578 44.2969 12.8869 44.2969 15.5039V28.9044C42.4355 27.4692 39.7539 27.6035 38.0476 29.3099L27.6292 39.7288C27.3623 39.9958 27.1178 40.279 26.8945 40.5753C26.6714 40.279 26.4268 39.9958 26.1598 39.7288L15.7414 29.3099C14.0351 27.6035 11.3536 27.4692 9.49219 28.9044V15.5039C9.49219 12.8869 7.36309 10.7578 4.74609 10.7578C2.1291 10.7578 0 12.8869 0 15.5039V35.9763C0 37.9139 0.643043 39.8325 1.81058 41.3787L10.8663 53.3713C11.1653 53.7672 11.6328 54 12.1289 54H41.6602C42.1563 54 42.6237 53.7672 42.9227 53.3713L51.9785 41.3787C53.146 39.8325 53.7891 37.9139 53.7891 35.9763V15.5039C53.7891 12.8869 51.66 10.7578 49.043 10.7578ZM25.3125 50.8359H12.9167L4.33561 39.472C3.58014 38.4715 3.16406 37.2302 3.16406 35.9763V15.5039C3.16406 14.6316 3.87376 13.9219 4.74609 13.9219C5.61843 13.9219 6.32812 14.6316 6.32812 15.5039V30.0447C6.32812 32.1576 7.15089 34.144 8.64496 35.6381L14.9422 41.9351C15.56 42.5529 16.5617 42.5528 17.1795 41.9351C17.7973 41.3173 17.7973 40.3156 17.1795 39.6978L11.2664 33.7848C10.6484 33.1669 10.6484 32.165 11.2665 31.5472C11.8844 30.9293 12.8862 30.9293 13.504 31.5473L23.9225 41.9662C24.8125 42.8562 25.3125 44.0634 25.3125 45.322V50.8359ZM50.625 35.9763C50.625 37.23 50.2089 38.4715 49.4535 39.472L40.8724 50.8359H28.4766V45.322C28.4766 44.0634 28.9766 42.8562 29.8665 41.9661L40.2851 31.5472C40.9029 30.9292 41.9047 30.9292 42.5226 31.5471C43.1405 32.1649 43.1405 33.1669 42.5227 33.7847L36.6096 39.6977C35.9917 40.3154 35.9917 41.3172 36.6096 41.935C37.2274 42.5527 38.229 42.5528 38.8469 41.935L45.1441 35.638C46.6382 34.1439 47.4609 32.1575 47.4609 30.0446V15.5039C47.4609 14.6316 48.1706 13.9219 49.043 13.9219C49.9153 13.9219 50.625 14.6316 50.625 15.5039V35.9763Z" fill="#FF772C" />
                  <path d="M26.8949 18.9844C29.5118 18.9844 31.6409 16.8553 31.6409 14.2383C31.6409 11.6213 29.5118 9.49219 26.8949 9.49219C24.2779 9.49219 22.1488 11.6213 22.1488 14.2383C22.1488 16.8553 24.2779 18.9844 26.8949 18.9844ZM26.8949 12.6562C27.7672 12.6562 28.4769 13.3659 28.4769 14.2383C28.4769 15.1106 27.7672 15.8203 26.8949 15.8203C26.0225 15.8203 25.3128 15.1106 25.3128 14.2383C25.3128 13.3659 26.0225 12.6562 26.8949 12.6562Z" fill="#FF772C" />
                  <path d="M12.9817 18.6172L16.1459 24.0977C16.5827 24.8543 17.5502 25.1136 18.3068 24.6767L20.6082 23.348C21.0962 23.6847 21.6105 23.9812 22.1484 24.2358V26.8947C22.1484 27.7684 22.8567 28.4767 23.7304 28.4767H30.0586C30.9323 28.4767 31.6405 27.7684 31.6405 26.8947V24.2357C32.1784 23.9811 32.6928 23.6847 33.1807 23.3479L35.4821 24.6766C36.2387 25.1135 37.2062 24.8542 37.6431 24.0976L40.8072 18.6171C41.2441 17.8605 40.9848 16.893 40.2282 16.4562L37.9306 15.1296C37.9561 14.8303 37.9686 14.5342 37.9686 14.2382C37.9686 13.9421 37.9561 13.6462 37.9306 13.3468L40.2282 12.0202C40.9848 11.5833 41.2441 10.6159 40.8072 9.85922L37.6431 4.37875C37.2062 3.62211 36.2387 3.36287 35.4821 3.79972L33.1807 5.12842C32.6927 4.79176 32.1783 4.49529 31.6405 4.24069V1.58193C31.6406 0.708223 30.9324 0 30.0587 0H23.7305C22.8567 0 22.1484 0.708223 22.1484 1.58193V4.2409C21.6107 4.49539 21.0963 4.79187 20.6082 5.12863L18.3068 3.79993C17.5502 3.36308 16.5827 3.62232 16.1459 4.37896L12.9817 9.85943C12.5449 10.6161 12.8041 11.5835 13.5608 12.0204L15.8584 13.347C15.8329 13.6463 15.8203 13.9422 15.8203 14.2383C15.8203 14.5343 15.8329 14.8303 15.8584 15.1297L13.5608 16.4563C12.8041 16.893 12.5449 17.8605 12.9817 18.6172ZM19.1232 15.6826C19.0298 15.1765 18.9844 14.7041 18.9844 14.2383C18.9844 13.7724 19.0298 13.3 19.1232 12.794C19.2448 12.1354 18.9385 11.4716 18.3584 11.1368L16.5128 10.0712L18.0949 7.33103L19.941 8.39689C20.5217 8.73218 21.2507 8.66489 21.7602 8.22909C22.4956 7.60008 23.336 7.11555 24.2582 6.78913C24.89 6.56554 25.3123 5.96805 25.3123 5.29791V3.16406H28.4763V5.2978C28.4763 5.96795 28.8986 6.56543 29.5304 6.78902C30.4526 7.11545 31.293 7.59997 32.0283 8.22888H32.0284C32.538 8.66479 33.267 8.73207 33.8477 8.39679L35.6939 7.33092L37.2759 10.0711L35.4303 11.1367C34.8504 11.4715 34.5441 12.1352 34.6656 12.7939C34.7592 13.3 34.8047 13.7724 34.8047 14.2383C34.8047 14.7041 34.7592 15.1765 34.6659 15.6826C34.5443 16.3411 34.8506 17.0049 35.4306 17.3398L37.2762 18.4054L35.6942 21.1455L33.848 20.0797C33.2673 19.7444 32.5383 19.8117 32.0286 20.2476C31.2935 20.8764 30.453 21.3609 29.5306 21.6875C28.8989 21.9112 28.4767 22.5086 28.4767 23.1788V25.3125H25.3126V23.1788C25.3126 22.5086 24.8903 21.9111 24.2587 21.6875C23.3362 21.3609 22.4959 20.8765 21.7606 20.2476C21.2511 19.8117 20.522 19.7444 19.9413 20.0797L18.0952 21.1455L16.5131 18.4054L18.3587 17.3398C18.9385 17.0049 19.2448 16.3411 19.1232 15.6826Z" fill="#FF772C" />
                </svg>

                <h3>Project Management</h3>
              </Link>
            </div>
            <div className='col-6 col-sm-12 col-md-2 d-flex justify-content-center align-items-center'>
              <Link href='/architecture'>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M51.0781 8.96875H45.6094C44.7033 8.96875 43.9688 9.70331 43.9688 10.6094V15.5312H36.2031V12.7969C36.2031 8.83542 33.3804 5.52103 29.6406 4.7588V1.64062C29.6406 0.734562 28.9061 0 28 0C27.0939 0 26.3594 0.734562 26.3594 1.64062V4.7588C22.6196 5.52092 19.7969 8.83542 19.7969 12.7969V15.5312H1.64062C0.734562 15.5312 0 16.2658 0 17.1719V43.4219C0 43.857 0.172922 44.2742 0.480594 44.5819L11.4181 55.5194C11.7258 55.8271 12.143 56 12.5781 56H51.0781C53.792 56 56 53.792 56 51.0781V13.8906C56 11.1767 53.792 8.96875 51.0781 8.96875ZM28 7.875C30.7139 7.875 32.9219 10.083 32.9219 12.7969C32.9219 15.5108 30.7139 17.7188 28 17.7188C25.2861 17.7188 23.0781 15.5108 23.0781 12.7969C23.0781 10.083 25.2861 7.875 28 7.875ZM23.0781 19.3549C24.4501 20.3872 26.1547 21 28 21C29.8453 21 31.5499 20.3872 32.9219 19.3549V38.5H29.6406V36.8594C29.6406 35.9533 28.9061 35.2188 28 35.2188C27.0939 35.2188 26.3594 35.9533 26.3594 36.8594V38.5H23.0781V19.3549ZM10.9375 50.3986L5.60142 45.0625H10.9375V50.3986ZM51.0781 52.7188H14.2188V43.4219C14.2188 42.5158 13.4842 41.7812 12.5781 41.7812H3.28125V18.8125H19.7969V46.7031C19.7969 47.6092 20.5314 48.3438 21.4375 48.3438C22.3436 48.3438 23.0781 47.6092 23.0781 46.7031V41.7812H26.3594V43.4219C26.3594 44.3279 27.0939 45.0625 28 45.0625C28.9061 45.0625 29.6406 44.3279 29.6406 43.4219V41.7812H32.9219V46.7031C32.9219 47.6092 33.6564 48.3438 34.5625 48.3438C35.4686 48.3438 36.2031 47.6092 36.2031 46.7031V18.8125H43.9688V47.7969C43.9688 48.7029 44.7033 49.4375 45.6094 49.4375H51.0781C51.9828 49.4375 52.7188 50.1735 52.7188 51.0781C52.7188 51.9828 51.9828 52.7188 51.0781 52.7188ZM52.7188 46.4373C52.2055 46.2553 51.6531 46.1562 51.0781 46.1562H47.25V12.25H51.0781C51.9828 12.25 52.7188 12.986 52.7188 13.8906V46.4373Z" fill="#FF772C" />
                  <path d="M28 14.4375C28.9061 14.4375 29.6406 13.703 29.6406 12.7969C29.6406 11.8908 28.9061 11.1562 28 11.1562C27.0939 11.1562 26.3594 11.8908 26.3594 12.7969C26.3594 13.703 27.0939 14.4375 28 14.4375Z" fill="#FF772C" />
                </svg>

                <h3>Architect</h3>
              </Link>
            </div>
            <div className='col-6 col-sm-12 col-md-2 d-flex justify-content-center align-items-center'>
              <Link href='/technician'>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44.5153 33.0308C43.8687 33.0308 43.2176 33.0962 42.5147 33.2338L37.2803 27.9994L42.4908 22.7889C46.164 23.4418 49.9761 22.2645 52.6361 19.6043C56.0724 16.168 56.9744 10.9146 54.8806 6.53177C54.6509 6.05118 54.2025 5.71201 53.6776 5.62199C53.1524 5.53176 52.6167 5.70227 52.2401 6.07896L47.9957 10.3234C47.3558 10.9632 46.3152 10.9631 45.6754 10.3234C45.0357 9.68363 45.0357 8.64281 45.6754 8.00308L49.9199 3.75857C50.2965 3.38199 50.4669 2.84606 50.3769 2.32117C50.2869 1.79628 49.9476 1.34773 49.4671 1.11815C45.0842 -0.975721 39.8306 -0.0738161 36.3944 3.36252C33.7342 6.02274 32.557 9.83555 33.2098 13.5078L27.9993 18.7184L22.7887 13.5078C23.4415 9.83555 22.2644 6.02263 19.6041 3.36252C15.1264 -1.11528 7.84022 -1.11528 3.36263 3.36252C-1.11528 7.84033 -1.11528 15.1266 3.36263 19.6043C6.02285 22.2645 9.83544 23.4418 13.5077 22.7888L18.7183 27.9993L13.5078 33.2099C9.83533 32.5572 6.02252 33.7344 3.36252 36.3946C-0.0738161 39.8308 -0.975721 45.0842 1.11815 49.4671C1.34773 49.9477 1.79628 50.2869 2.32117 50.3769C2.84595 50.4669 3.38199 50.2966 3.75857 49.9199L8.00297 45.6755C8.6427 45.0358 9.68352 45.0358 10.3233 45.6755C10.963 46.3152 10.9629 47.3561 10.3233 47.9958L6.07885 52.2402C5.70227 52.6168 5.53187 53.1527 5.62188 53.6776C5.7119 54.2025 6.05118 54.651 6.53166 54.8806C10.9329 56.9832 16.1827 56.0577 19.6041 52.6361C22.2644 49.9759 23.4415 46.1631 22.7888 42.4908L27.9993 37.2803L33.2337 42.5146C33.0962 43.2174 33.0308 43.8686 33.0308 44.5151C33.0308 50.8477 38.1828 55.9997 44.5154 55.9997C50.848 55.9997 56 50.8477 56 44.5151C56 38.1826 50.848 33.0308 44.5153 33.0308ZM15.1925 19.8333C14.7784 19.4192 14.1749 19.2572 13.6091 19.4083C10.7844 20.1626 7.74736 19.3488 5.6828 17.2842C2.48424 14.0856 2.48424 8.88136 5.6828 5.68291C8.88125 2.48446 14.0855 2.48446 17.284 5.68291C19.3484 7.74736 20.1625 10.7847 19.408 13.6094C19.257 14.1752 19.419 14.7786 19.8331 15.1928L25.679 21.0387L21.0385 25.6793L15.1925 19.8333ZM26.8395 33.8L26.8393 33.8001L26.8392 33.8002L19.8331 40.8062C19.419 41.2203 19.257 41.8238 19.408 42.3897C20.1623 45.2144 19.3484 48.2516 17.284 50.3162C15.4283 52.1717 12.8314 52.9928 10.3223 52.6375L12.6435 50.3162C14.5626 48.3972 14.5626 45.2745 12.6435 43.3554C10.7247 41.4365 7.60189 41.4364 5.6828 43.3554L3.36154 45.6768C3.00607 43.1675 3.82737 40.5705 5.6828 38.715C7.74736 36.6506 10.7846 35.8364 13.6093 36.5909C14.1754 36.7422 14.7785 36.5801 15.1927 36.1659L22.1985 29.1602L22.1988 29.1599L22.1992 29.1596L29.1595 22.1993L29.1597 22.1992L29.1598 22.199L36.1658 15.1931C36.5799 14.779 36.742 14.1755 36.5908 13.6096C35.8366 10.7849 36.6504 7.74769 38.7149 5.68313C40.5704 3.82759 43.1673 3.00607 45.6766 3.36176L43.3553 5.68313C41.4362 7.60211 41.4362 10.7248 43.3553 12.6439C45.2788 14.5674 48.3924 14.5677 50.3161 12.6439L52.6374 10.3225C52.9928 12.8318 52.1716 15.4288 50.3161 17.2843C48.2516 19.3488 45.214 20.1628 42.3896 19.4084C41.8238 19.2572 41.2203 19.4193 40.8061 19.8334L33.8004 26.8391L33.8 26.8394L33.7997 26.8397L26.8395 33.8ZM44.5153 52.7187C39.992 52.7187 36.3119 49.0387 36.3119 44.5154C36.3119 43.8834 36.4106 43.2173 36.6227 42.4191C36.7728 41.8538 36.6107 41.2514 36.1971 40.8379L30.3194 34.9603L34.9599 30.3197L40.8375 36.1973C41.251 36.6108 41.8531 36.7729 42.4188 36.6229C43.217 36.4109 43.8832 36.3121 44.515 36.3121C49.0383 36.3121 52.7184 39.9922 52.7184 44.5155C52.7185 49.0387 49.0387 52.7187 44.5153 52.7187Z" fill="#FF772C" />
                </svg>

                <h3>Technician</h3>
              </Link>
            </div>
            <div className='col-6 col-sm-12 col-md-2 d-flex justify-content-center align-items-center'>
              <Link href='/Job-Seeking'>
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M53.4518 27.4142V32.0584C53.4518 33.3098 54.4656 34.3243 55.7166 34.3243C56.9675 34.3243 57.9813 33.3098 57.9813 32.0584V18.2427C57.9813 13.2457 53.9173 9.17998 48.9219 9.17998H39.1744V6.22622C39.1744 2.79308 36.3822 0 32.9502 0H25.0311C21.5991 0 18.8069 2.79308 18.8069 6.22622V9.17998H9.05939C4.06396 9.17998 0 13.2452 0 18.2422V44.6366C0 49.6336 4.06396 53.6993 9.05939 53.6993H28.1981C29.4491 53.6993 30.4629 52.6847 30.4629 51.4334C30.4629 50.1825 29.4491 49.1679 28.1981 49.1679H9.05939C6.56189 49.1679 4.52991 47.1353 4.52991 44.6366V27.4142H26.8392V30.8168C26.8392 32.0677 27.853 33.0823 29.1039 33.0823C30.3549 33.0823 31.3687 32.0677 31.3687 30.8168V27.4142H53.4518ZM23.3368 6.22622C23.3368 5.2918 24.097 4.53134 25.0311 4.53134H32.9502C33.8843 4.53134 34.6445 5.29136 34.6445 6.22622V9.17998H23.3368V6.22622ZM4.52991 18.2427C4.52991 15.7439 6.56189 13.7113 9.05939 13.7113H48.9219C51.4194 13.7113 53.4518 15.7439 53.4518 18.2427V22.8829H4.52991V18.2427ZM57.3366 54.1322L52.119 48.913C53.1062 47.3434 53.678 45.4874 53.678 43.4999C53.678 37.8783 49.106 33.3045 43.4862 33.3045C37.8664 33.3045 33.294 37.8783 33.294 43.4999C33.294 49.1215 37.8664 53.6953 43.4862 53.6953C45.4823 53.6953 47.3462 53.1176 48.9202 52.1213L54.1333 57.336C54.5758 57.7787 55.1555 58 55.7352 58C56.3148 58 56.8941 57.7787 57.3366 57.336C58.2211 56.4512 58.2211 55.017 57.3366 54.1322ZM37.8239 43.4999C37.8239 40.3766 40.3639 37.8358 43.4862 37.8358C46.6081 37.8358 49.1485 40.3766 49.1485 43.4999C49.1485 46.6232 46.6081 49.164 43.4862 49.164C40.3639 49.164 37.8239 46.6227 37.8239 43.4999Z" fill="#FF772C" />
                </svg>

                <h3>Job Seeker</h3>
              </Link>
            </div>
            <div className='col-6 col-sm-12 col-md-2 d-flex justify-content-center align-items-center'>
              <Link href='/technical-self-employment'>
                <svg width="54" height="60" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.0729 21.4272V11.8494H10.5653V21.4272C8.51575 22.1519 7.043 24.1079 7.043 26.4025C7.043 28.6971 8.51575 30.6531 10.5653 31.3778V33.9184H14.0729V31.3778C16.1224 30.6531 17.5952 28.6971 17.5952 26.4025C17.5952 24.1079 16.1223 22.1518 14.0729 21.4272ZM12.3191 28.1709C11.344 28.1709 10.5507 27.3776 10.5507 26.4025C10.5507 25.4274 11.344 24.6341 12.3191 24.6341C13.2942 24.6341 14.0875 25.4274 14.0875 26.4025C14.0875 27.3776 13.2942 28.1709 12.3191 28.1709Z" fill="#FF772C" />
                  <path d="M35.2066 21.4272V11.8494H31.6989V21.4272C29.6494 22.1519 28.1766 24.1079 28.1766 26.4025C28.1766 28.6971 29.6494 30.6531 31.6989 31.3778V33.9184H35.2066V31.3778C37.2561 30.6531 38.7288 28.6971 38.7288 26.4025C38.7288 24.1079 37.256 22.1518 35.2066 21.4272ZM33.4527 28.1709C32.4776 28.1709 31.6843 27.3776 31.6843 26.4025C31.6843 25.4274 32.4776 24.6341 33.4527 24.6341C34.4279 24.6341 35.2212 25.4274 35.2212 26.4025C35.2212 27.3776 34.4279 28.1709 33.4527 28.1709Z" fill="#FF772C" />
                  <path d="M46.4334 19.596C45.8609 18.6382 45.6039 17.5213 45.69 16.366C45.8905 13.6772 45.1442 10.8284 44.6495 9.28897C46.8017 7.06886 47.9723 4.35756 47.8934 1.7018L47.8429 0H22.8874C10.2674 0 0 10.2673 0 22.8874C0 27.8073 1.62568 32.6842 4.57749 36.6199L8.01557 41.2042C9.54152 43.2386 10.0629 45.8206 9.44611 48.2878L6.55218 59.864H35.2188L35.2073 50.1048L40.1941 51.3989C43.7339 52.4344 47.7554 49.4538 47.6455 45.6343V34.6145L53.8369 31.9823L46.4334 19.596ZM44.138 32.2942V38.4536H40.0165V41.9612H44.138V45.6343C44.1757 47.1119 42.6507 48.4081 41.0752 48.0038L29.8347 45.0869C29.1024 44.8969 28.4327 44.5138 27.8978 43.9787L25.5307 41.6116L23.0504 44.092L25.4174 46.459C26.394 47.4356 27.6169 48.1352 28.9537 48.4821L31.6987 49.1944L31.7071 56.3563H11.0447L12.8491 49.1385C13.7233 45.6419 12.9843 41.9829 10.8218 39.0996L7.38373 34.5153C4.88429 31.1828 3.50777 27.0532 3.50777 22.8874C3.50777 12.2014 12.2015 3.50765 22.8876 3.50765H44.1552C43.7469 5.17999 42.0908 7.07716 40.525 8.29291C41.3297 10.2913 42.2929 12.7134 42.1922 16.1053C42.0522 17.9849 42.4776 19.8142 43.4226 21.3954L48.762 30.3282L44.138 32.2942Z" fill="#FF772C" />
                  <path d="M24.6398 14.39V11.8494H21.1321V14.39C19.0826 15.1146 17.6098 17.0706 17.6098 19.3652C17.6098 21.6598 19.0826 23.6158 21.1321 24.3405V33.9184H24.6398V24.3405C26.6893 23.6158 28.162 21.6598 28.162 19.3652C28.162 17.0706 26.6892 15.1146 24.6398 14.39ZM22.8859 21.1337C21.9108 21.1337 21.1175 20.3403 21.1175 19.3652C21.1175 18.3901 21.9108 17.5968 22.8859 17.5968C23.8611 17.5968 24.6544 18.3901 24.6544 19.3652C24.6544 20.3403 23.8611 21.1337 22.8859 21.1337Z" fill="#FF772C" />
                </svg>

                <h3>Self Employed</h3>
              </Link>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-4'>
              <h3>How do we help you at FANAVARAN?</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnMedium'>About FANAVARAN</Link>
            </div>

            <div className='col-12 col-md-4'>
              <h3>If you have recently migrated, we are here for you.</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnMedium'>I Am Newbie</Link>
            </div>

            <div className='col-12 col-md-4'>
              <h3>Quickly and easily become a special at Fanavaran!</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnMedium'>FANAVARAN VIP Membership</Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Courses */}
      <section className='FNV-NewCourses'>
        <h3>New Courses</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              {/* Courses Desktop */}
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                centeredSlides={false}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}

                navigation={false}

                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}

                modules={[Autoplay, Pagination, Navigation]}
                className="FNV-NewCoursesSwiper d-none d-sm-none d-md-block"
              >
                <SwiperSlide>
                  <div className="card">
                    <badge>درحال برگزاری</badge>
                    <img src="img/course1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">LEED GA Exam Preparation</h4>
                      <price>$680.00</price>
                      
                      <div className='d-flex justify-content-between'>
                        <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnLarge'>See Details</Link>
                        <Link href='#' className='FNV-Btn SecondaryColor BtnLarge'>Add to Cart</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card">
                    <badge>درحال ثبت نام</badge>
                    <img src="img/course2.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">LEED GA Exam Preparation</h4>
                      <price>$680.00</price>
                      
                      <div className='d-flex justify-content-between'>
                        <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnLarge'>See Details</Link>
                        <Link href='#' className='FNV-Btn SecondaryColor BtnLarge'>Add to Cart</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card">
                    <badge>درحال ثبت نام</badge>
                    <img src="img/course3.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">LEED GA Exam Preparation</h4>
                      <price>$680.00</price>
                      
                      <div className='d-flex justify-content-between'>
                        <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnLarge'>See Details</Link>
                        <Link href='#' className='FNV-Btn SecondaryColor BtnLarge'>Add to Cart</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card">
                    <badge>درحال ثبت نام</badge>
                    <img src="img/course1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">LEED GA Exam Preparation</h4>
                      <price>$680.00</price>
                      
                      <div className='d-flex justify-content-between'>
                        <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnLarge'>See Details</Link>
                        <Link href='#' className='FNV-Btn SecondaryColor BtnLarge'>Add to Cart</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                centeredSlides={false}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}

                navigation={false}

                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}

                modules={[Autoplay, Pagination]}
                className="FNV-NewCoursesSwiper d-block d-sm-block d-md-none"
              >
                <SwiperSlide>
                  <div className="card">
                    <badge>درحال برگزاری</badge>
                    <img src="img/course1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">LEED GA Exam Preparation</h4>
                      <price>$680.00</price>
                      
                      <div className='d-flex justify-content-between'>
                        <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnLarge'>See Details</Link>
                        <Link href='#' className='FNV-Btn SecondaryColor BtnLarge'>Add to Cart</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card">
                    <badge>درحال ثبت نام</badge>
                    <img src="img/course2.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">LEED GA Exam Preparation</h4>
                      <price>$680.00</price>
                      
                      <div className='d-flex justify-content-between'>
                        <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnLarge'>See Details</Link>
                        <Link href='#' className='FNV-Btn SecondaryColor BtnLarge'>Add to Cart</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card">
                    <badge>درحال ثبت نام</badge>
                    <img src="img/course3.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">LEED GA Exam Preparation</h4>
                      <price>$680.00</price>
                      
                      <div className='d-flex justify-content-between'>
                        <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnLarge'>See Details</Link>
                        <Link href='#' className='FNV-Btn SecondaryColor BtnLarge'>Add to Cart</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card">
                    <badge>درحال ثبت نام</badge>
                    <img src="img/course1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">LEED GA Exam Preparation</h4>
                      <price>$680.00</price>
                      
                      <div className='d-flex justify-content-between'>
                        <Link href='#' className='FNV-Btn BtnOutline PrimaryColor BtnLarge'>See Details</Link>
                        <Link href='#' className='FNV-Btn SecondaryColor BtnLarge'>Add to Cart</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* New Webinars */}
      <section className='FNV-NewWebinars'>
        <h3>New Webinarsz</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-7'>
              {/* Courses Desktop */}
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                centeredSlides={false}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}

                navigation={false}

                modules={[Autoplay, Pagination, Navigation]}
                className="FNV-NewCoursesSwiper d-none d-sm-none d-md-block"
              >
                <SwiperSlide>
                  <div className='d-flex flex-row'>
                    <div className='col-md-4'>
                      <badge className="PrimaryColor">FREE</badge>
                      <badge className="SecondaryColor">REGISTERING</badge>
                      <h4>Professional Project Management (PMP) Webinar</h4>
                      <p>Sample Description About Webinar or Features and Oppotunities in webinar</p>
                      <span><i data-feather="calendar"></i> 27 September 2023</span>
                      <span><i data-feather="time"></i> 20:00 Toronto Time | 17:00 Vancouver</span>
                    </div>
                    <div className='col-md-8'>
                      <img src='img/course3.jpg' className='img-fluid w-100' />
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>

            <div className='col-5'></div>
          </div>
        </div>
      </section>

      <div className='FNV-FixedSocial'>
        <a href='https://www.instagram.com/fanavaran_ca/' className='FNV-Instagram'>
          <i data-feather='instagram'></i>
        </a>
        <a href='https://www.facebook.com/fanavaran.ca' className='FNV-Facebook'>
          <i data-feather='facebook'></i>
        </a>
        <a href='https://www.linkedin.com/company/fanavaran-ca/' className='FNV-Linkedin'>
          <i data-feather='linkedin'></i>
        </a>
        <a href='https://www.youtube.com/channel/UCKbfvGZBXPn2Y3LGb9YDiIA' className='FNV-Youtube'>
          <i data-feather='youtube'></i>
        </a>
        <a href='https://fanavaran.ca/telegram-groups/' className='FNV-Telegram'>
          <i data-feather='send'></i>
        </a>
      </div>
    </>
  )
}

export default Home
