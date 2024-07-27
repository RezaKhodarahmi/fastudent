import React, { useState } from 'react'
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

      <div className='FNV-Slider-Object'>
        <div className='FNV-Slider-Object-Person'></div>
      </div>

      {/* Content */}
      <div className="FNV-Slider-Content carousel slide" id="FNV-Slider-Carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#FNV-Slider-Carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#FNV-Slider-Carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#FNV-Slider-Carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        {/* Carousel Inner */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='container'>
              <div className='row'>
                {/* Left */}
                <div className='col-12 col-md-5'>
                  <h1>{props.title}</h1>
                  <svg viewBox="0 0 305 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                      <path d="M31.9762 9.81575C31.9762 9.30375 32.2749 9.04775 32.8722 9.04775C33.5122 9.04775 34.3869 9.62375 35.4962 10.7757C36.6055 11.9277 37.6295 14.0824 38.5682 17.2397C39.1229 19.0744 39.5069 20.8664 39.7202 22.6158C39.9762 24.3224 40.1255 26.0291 40.1682 27.7358C40.2535 29.3997 40.2535 31.0851 40.1682 32.7918C40.1255 34.4984 40.0615 36.2691 39.9762 38.1038C39.9335 38.5304 39.8695 38.9998 39.7842 39.5118C39.7415 40.0238 39.6989 40.5144 39.6562 40.9838C39.6135 41.4958 39.5709 41.9864 39.5282 42.4558C39.4855 42.8824 39.4215 43.3517 39.3362 43.8638C39.1655 45.1011 38.9095 46.5944 38.5682 48.3438C38.2695 50.0931 37.8855 51.8851 37.4162 53.7198C36.9469 55.5971 36.3709 57.4318 35.6882 59.2238C35.0055 61.0584 34.1949 62.7011 33.2562 64.1518C32.3602 65.6024 31.3149 66.7758 30.1202 67.6718C28.9682 68.5677 27.6455 69.0158 26.1522 69.0158C25.3842 69.0158 24.6162 68.8451 23.8482 68.5038C23.0802 68.1624 22.4402 67.7144 21.9282 67.1598C20.9042 66.2211 20.1149 64.9838 19.5602 63.4478C18.5789 61.0584 18.0242 58.6264 17.8962 56.1518C17.8109 53.7198 17.7682 51.1811 17.7682 48.5358C17.7682 47.3411 17.8109 46.2318 17.8962 45.2078C17.9815 44.1411 18.0242 43.0318 18.0242 41.8798L17.4482 43.6077C17.3629 43.9064 17.2562 44.2264 17.1282 44.5678C17.0429 44.8664 16.9575 45.1438 16.8722 45.3998L13.8002 55.8958C13.5869 56.5784 13.2455 57.5171 12.7762 58.7118C12.3495 59.9491 11.8162 61.1651 11.1762 62.3598C10.5362 63.5544 9.83221 64.5997 9.06421 65.4958C8.29621 66.3918 7.46421 66.8398 6.56821 66.8398C5.67221 66.8398 4.90421 66.5624 4.26421 66.0078C3.66688 65.4531 3.13354 64.7704 2.66421 63.9598C2.23754 63.1491 1.89621 62.2958 1.64021 61.3998C1.42688 60.5038 1.25621 59.6931 1.12821 58.9678L0.616211 53.0798C0.658878 52.6958 0.701544 52.2264 0.744211 51.6718C0.744211 51.1171 0.765544 50.5624 0.808211 50.0078C0.850878 49.4531 0.893544 48.9198 0.936211 48.4078C0.936211 47.8958 0.957544 47.4904 1.00021 47.1918C1.55488 42.6264 2.38688 38.0398 3.49621 33.4318C4.64821 28.8238 6.44021 24.5571 8.87221 20.6318C9.85355 19.0104 10.7282 17.9011 11.4962 17.3038C12.2642 16.7064 12.8829 16.4078 13.3522 16.4078C13.9495 16.4078 14.3122 16.6638 14.4402 17.1758C14.5682 17.6877 14.4615 18.0718 14.1202 18.3278C13.9922 18.4131 13.8642 18.4558 13.7362 18.4558C13.6509 18.4558 13.5655 18.4558 13.4802 18.4558C13.4375 18.4131 13.3735 18.3918 13.2882 18.3918C13.1175 18.3918 12.9255 18.5411 12.7122 18.8398C12.2855 19.3944 11.9229 19.8638 11.6242 20.2478C11.3255 20.6318 11.0482 21.0158 10.7922 21.3998C10.5789 21.7838 10.3442 22.2104 10.0882 22.6798C9.83221 23.1491 9.53354 23.7038 9.19221 24.3438C8.50954 25.7091 7.80554 27.4584 7.08021 29.5918C6.39754 31.6824 5.75754 33.9864 5.16021 36.5038C4.56288 38.9784 4.05088 41.5598 3.62421 44.2478C3.24021 46.8931 3.00554 49.4531 2.92021 51.9278C2.87754 54.4451 3.00554 56.7491 3.30421 58.8398C3.64554 60.9304 4.24288 62.6371 5.09621 63.9598C5.52288 64.5571 5.97088 64.8558 6.44021 64.8558C7.03754 64.8558 7.61354 64.4504 8.16821 63.6398C8.76554 62.8718 9.34154 61.8904 9.89621 60.6958C10.4935 59.5011 11.0482 58.1784 11.5602 56.7278C12.0722 55.3198 12.5202 53.9544 12.9042 52.6318C13.3309 51.3091 13.6722 50.1357 13.9282 49.1118C14.2269 48.0878 14.4402 47.4051 14.5682 47.0638L18.3442 34.5838C18.5149 34.0718 18.6642 33.5598 18.7922 33.0478C18.9202 32.5358 19.0695 32.0238 19.2402 31.5118C19.4109 30.9998 19.5602 30.4664 19.6882 29.9118C19.8162 29.3571 20.1789 29.0798 20.7762 29.0798C20.9895 29.0798 21.1602 29.1651 21.2882 29.3358C21.4589 29.5064 21.5655 29.6984 21.6082 29.9118C21.6509 30.0398 21.6082 30.6371 21.4802 31.7038C21.3522 32.7704 21.1815 33.9651 20.9682 35.2878C20.7975 36.6104 20.6269 37.8904 20.4562 39.1278C20.2855 40.3651 20.2002 41.2184 20.2002 41.6878C20.2002 42.1571 20.1789 42.6264 20.1362 43.0958C20.1362 43.5224 20.1149 43.9704 20.0722 44.4398L19.7522 50.1358C19.7522 50.7331 19.7735 51.2451 19.8162 51.6718C19.9015 52.0984 19.9442 52.5464 19.9442 53.0158C19.9442 53.9544 20.0082 55.2131 20.1362 56.7918C20.3069 58.3704 20.6269 59.9278 21.0962 61.4638C21.5655 62.9998 22.2055 64.3224 23.0162 65.4318C23.8695 66.5411 24.9789 67.0957 26.3442 67.0957C27.1975 67.0957 27.9655 66.8398 28.6482 66.3278C30.1415 65.3464 31.4002 63.8531 32.4242 61.8478C33.4909 59.8424 34.3655 57.6878 35.0482 55.3838C35.7309 53.0798 36.2642 50.7758 36.6482 48.4718C37.0749 46.1678 37.3949 44.2051 37.6082 42.5838L38.0562 37.0798C38.0989 36.7384 38.1202 36.5251 38.1202 36.4398C38.1629 36.3544 38.2055 36.1411 38.2482 35.7998C38.3335 33.9224 38.3549 32.0238 38.3122 30.1038C38.3122 28.1411 38.1842 26.2211 37.9282 24.3438C37.7149 22.4238 37.3735 20.5678 36.9042 18.7758C36.4775 16.9411 35.8589 15.2344 35.0482 13.6558C34.8349 13.2718 34.4935 12.7384 34.0242 12.0558C33.5975 11.3731 33.1922 10.9251 32.8082 10.7118C32.5095 10.5411 32.2962 10.4344 32.1682 10.3918C32.0402 10.3064 31.9762 10.1144 31.9762 9.81575Z" />
                      <path d="M44.2177 42.3918C44.2177 42.1357 44.2604 41.7091 44.3457 41.1118C44.4737 40.5144 44.6444 39.9171 44.8577 39.3198C45.071 38.6798 45.3057 38.1251 45.5617 37.6558C45.8604 37.1437 46.159 36.8878 46.4577 36.8878C46.671 36.8878 46.8417 36.9731 46.9697 37.1438C47.0977 37.3144 47.1617 37.4424 47.1617 37.5278C47.1617 37.9971 47.119 38.2958 47.0337 38.4238C46.9484 38.5518 46.8417 38.8078 46.7137 39.1917C46.415 40.1731 46.159 41.1758 45.9457 42.1998C45.7324 43.2238 45.7964 44.2264 46.1377 45.2078C46.479 46.4024 47.183 46.9998 48.2497 46.9998C48.7617 46.9998 49.3164 46.8718 49.9137 46.6158C50.5537 46.3171 51.151 45.9757 51.7057 45.5918C52.303 45.1651 52.8577 44.7384 53.3697 44.3118C53.8817 43.8851 54.287 43.5224 54.5857 43.2238C54.671 43.1384 54.8417 42.9678 55.0977 42.7118C55.3537 42.4131 55.631 42.1358 55.9297 41.8798C56.2284 41.5811 56.527 41.3251 56.8257 41.1118C57.1244 40.8984 57.3804 40.7918 57.5937 40.7918C57.8497 40.7918 57.9777 40.9624 57.9777 41.3038C58.0204 41.4318 57.935 41.6451 57.7217 41.9438C57.5084 42.1998 57.2524 42.4771 56.9537 42.7758C56.6977 43.0744 56.4204 43.3731 56.1217 43.6718C55.823 43.9278 55.5884 44.1411 55.4177 44.3118C54.991 44.7384 54.479 45.2078 53.8817 45.7198C53.327 46.1891 52.7297 46.6158 52.0897 46.9998C51.4497 47.4264 50.7884 47.7677 50.1057 48.0238C49.4657 48.2798 48.8257 48.4078 48.1857 48.4078C46.9484 48.4078 45.967 47.9598 45.2417 47.0638C44.559 46.1678 44.2177 45.0584 44.2177 43.7358V42.3918ZM47.8657 33.2398C47.439 33.2398 47.119 33.0904 46.9057 32.7918C46.735 32.4504 46.671 32.0878 46.7137 31.7038C46.7564 31.2771 46.927 30.9144 47.2257 30.6158C47.5244 30.2744 47.951 30.1038 48.5057 30.1038C48.8897 30.1038 49.1884 30.2744 49.4017 30.6158C49.615 30.9144 49.7004 31.2771 49.6577 31.7038C49.615 32.0878 49.4444 32.4504 49.1457 32.7918C48.8897 33.0904 48.463 33.2398 47.8657 33.2398Z" />
                      <path d="M38.2902 28.1198C38.2902 27.7784 38.2475 27.5224 38.1622 27.3518C38.0769 27.1811 38.2475 26.9038 38.6742 26.5198C39.3142 25.9224 40.5089 25.3038 42.2582 24.6638C43.9649 24.0238 45.8209 23.4051 47.8262 22.8078C49.7889 22.2104 51.6875 21.6771 53.5222 21.2078C55.3569 20.7384 56.7222 20.3971 57.6182 20.1838C57.9595 20.0984 58.2795 20.0344 58.5782 19.9918C58.9195 19.9064 59.2395 19.8211 59.5382 19.7358C60.0502 19.6931 60.3489 19.6504 60.4342 19.6077C60.5622 19.5651 60.6902 19.3091 60.8182 18.8398C61.0315 18.3278 61.2662 17.7731 61.5222 17.1758C61.7782 16.5357 62.2049 16.2157 62.8022 16.2157C63.2715 16.2157 63.5489 16.3438 63.6342 16.5998C63.7195 16.8131 63.7195 17.0904 63.6342 17.4318C63.5915 17.7304 63.5062 18.0291 63.3782 18.3278C63.2502 18.6264 63.1862 18.8611 63.1862 19.0318C63.5702 19.0318 63.9755 18.9891 64.4022 18.9038C64.8715 18.8184 65.3409 18.7544 65.8102 18.7118C66.7915 18.5411 67.6875 18.4131 68.4982 18.3278C69.3089 18.1998 70.0982 18.1144 70.8662 18.0718C71.6769 18.0291 72.4875 18.0078 73.2982 18.0078C74.1515 17.9651 75.0902 17.9438 76.1142 17.9438C77.3942 17.9438 78.3969 18.1784 79.1222 18.6478C79.8902 19.0744 80.4022 19.5651 80.6582 20.1198C80.9142 20.6744 80.9569 21.1864 80.7862 21.6558C80.6155 22.0824 80.2529 22.2958 79.6982 22.2958C79.5275 22.2958 79.3782 22.2744 79.2502 22.2318C79.2502 21.5491 79.2289 21.1224 79.1862 20.9518C79.1862 20.7384 78.9089 20.5251 78.3542 20.3118C77.5435 20.0558 76.4129 19.9278 74.9622 19.9278C73.9809 19.9278 72.9355 19.9704 71.8262 20.0557C70.7169 20.1411 69.6289 20.2478 68.5622 20.3758C67.5382 20.5038 66.5995 20.6318 65.7462 20.7598C64.8929 20.8878 64.2315 20.9944 63.7622 21.0798C63.3782 21.1224 63.1009 21.1651 62.9302 21.2078C62.7595 21.2504 62.6315 21.3144 62.5462 21.3998C62.5035 21.4424 62.4609 21.5491 62.4182 21.7198C62.3755 21.8904 62.3115 22.1464 62.2262 22.4878L60.6902 29.9118C60.3489 31.2771 59.9649 33.0904 59.5382 35.3518C59.1115 37.6131 58.7275 39.9598 58.3862 42.3918C58.0875 44.7811 57.8955 47.0424 57.8102 49.1758C57.7249 51.3517 57.8315 52.9944 58.1302 54.1038C58.3009 54.7011 58.4502 55.1064 58.5782 55.3198C58.7489 55.5758 58.8769 55.7464 58.9622 55.8318C59.0902 55.9598 59.1755 56.0451 59.2182 56.0878C59.3035 56.1731 59.3462 56.3011 59.3462 56.4718C59.3462 56.9411 59.1115 57.1758 58.6422 57.1758C58.1302 57.1758 57.5329 56.6851 56.8502 55.7038C56.1675 54.7224 55.8262 53.0371 55.8262 50.6478C55.8262 46.8931 56.0609 43.1171 56.5302 39.3198C57.0422 35.5224 57.7035 31.8104 58.5142 28.1838L59.8582 21.8478C59.4742 21.8478 58.7489 21.9758 57.6822 22.2318C56.6582 22.4878 55.5702 22.7651 54.4182 23.0638C53.2235 23.3624 52.1142 23.6611 51.0902 23.9598C50.0235 24.2584 49.2769 24.4504 48.8502 24.5358L41.2342 27.0958C40.2529 27.5224 39.7195 27.8211 39.6342 27.9918C39.5062 28.1624 39.3355 28.2478 39.1222 28.2478C39.0369 28.2478 38.9302 28.2478 38.8022 28.2478C38.6742 28.2051 38.5035 28.1624 38.2902 28.1198Z" />
                      <path d="M62.9722 44.3758C62.9722 43.3518 63.0362 42.1358 63.1642 40.7278C63.2922 39.3198 63.4415 37.8691 63.6122 36.3758C63.8255 34.8824 64.0389 33.4318 64.2522 32.0238C64.5082 30.6157 64.7429 29.3998 64.9562 28.3758C65.0842 27.7358 65.3189 26.6904 65.6602 25.2398C66.0015 23.7891 66.4069 22.3384 66.8762 20.8878C67.3455 19.3944 67.8362 18.0931 68.3482 16.9838C68.9029 15.8318 69.4149 15.2558 69.8842 15.2558C70.3962 15.2558 70.6949 15.4264 70.7802 15.7677C70.9082 16.0664 70.9082 16.4291 70.7802 16.8558C70.6949 17.2824 70.5455 17.7304 70.3322 18.1998C70.1189 18.6691 69.9695 19.0744 69.8842 19.4158C69.3722 20.9091 68.9029 22.5518 68.4762 24.3438C68.0495 26.0931 67.6655 27.7571 67.3242 29.3358L65.5322 40.0238C65.4469 40.4504 65.3402 41.0264 65.2122 41.7518C65.0842 42.4344 65.0202 43.0104 65.0202 43.4798C65.1482 43.3518 65.2762 43.1811 65.4042 42.9678C65.6175 42.5411 65.9162 41.9864 66.3002 41.3038C66.6842 40.6211 67.1109 39.9598 67.5802 39.3198C68.0922 38.6798 68.6042 38.1251 69.1162 37.6558C69.6282 37.1864 70.1402 36.9518 70.6522 36.9518C71.0362 36.9518 71.3349 37.1651 71.5482 37.5918C71.8042 37.9757 71.9962 38.4451 72.1242 38.9998C72.2522 39.5544 72.3589 40.1304 72.4442 40.7278C72.5295 41.3251 72.6149 41.8371 72.7002 42.2638C73.0415 43.8424 73.5535 44.9518 74.2362 45.5918C74.9189 46.1891 75.6869 46.4878 76.5402 46.4878C77.6922 46.4878 78.9082 46.1038 80.1882 45.3358C81.4682 44.5251 82.5989 43.6718 83.5802 42.7758L85.8202 40.9198C86.0762 40.8344 86.2469 40.7918 86.3322 40.7918C86.7589 40.7918 86.9296 41.0904 86.8442 41.6878C86.7589 42.2424 86.0975 43.0104 84.8602 43.9918C84.4762 44.3331 84.1135 44.6531 83.7722 44.9518C83.4735 45.2504 83.0895 45.5491 82.6202 45.8478C81.9375 46.3171 81.0415 46.8504 79.9322 47.4478C78.8229 48.0878 77.7349 48.4078 76.6682 48.4078C75.4735 48.4078 74.4495 48.1304 73.5962 47.5758C72.7855 47.0638 72.1242 46.3811 71.6122 45.5278C71.1002 44.6318 70.7375 43.6291 70.5242 42.5198C70.3109 41.3678 70.2042 40.1944 70.2042 38.9998C69.6069 39.4691 68.9882 40.1518 68.3482 41.0478C67.7082 41.9438 67.2175 42.7971 66.8762 43.6077C66.7055 43.9917 66.5135 44.4824 66.3002 45.0798C66.0869 45.6771 65.8735 46.2531 65.6602 46.8078C65.4469 47.3624 65.2122 47.8318 64.9562 48.2158C64.7002 48.6424 64.4442 48.8558 64.1882 48.8558C63.8042 48.8558 63.5055 48.7064 63.2922 48.4078C63.1215 48.1091 63.0149 47.7251 62.9722 47.2558C62.9295 46.8291 62.9082 46.3598 62.9082 45.8478C62.9509 45.2931 62.9722 44.8024 62.9722 44.3758Z" />
                      <path d="M108.437 32.2158C108.522 32.4291 108.65 32.7491 108.821 33.1758C108.991 33.6024 109.162 34.0291 109.333 34.4557C109.546 34.8824 109.738 35.2664 109.909 35.6077C110.079 35.9491 110.207 36.1624 110.293 36.2477C110.293 35.3091 110.314 34.4771 110.357 33.7518C110.399 33.0264 110.421 32.2371 110.421 31.3838C109.866 31.6398 109.205 31.9171 108.437 32.2158ZM110.677 29.2718C110.677 28.3758 110.762 27.1598 110.933 25.6238C111.146 24.0878 111.381 22.4878 111.637 20.8238C111.893 19.1598 112.149 17.5598 112.405 16.0238C112.661 14.4451 112.874 13.1864 113.045 12.2477C113.215 11.3091 113.386 10.4131 113.557 9.55975C113.727 8.70642 113.919 7.85308 114.133 6.99975C113.962 6.99975 113.685 7.08508 113.301 7.25575C112.917 7.42642 112.511 7.61842 112.085 7.83175C111.658 8.04508 111.253 8.25842 110.869 8.47175C110.527 8.68508 110.271 8.83442 110.101 8.91975C109.034 9.64508 108.181 10.2851 107.541 10.8398C106.943 11.3944 106.218 12.1198 105.365 13.0158C103.573 14.9358 102.741 16.9624 102.869 19.0958C103.039 21.1864 103.679 23.2984 104.789 25.4318L107.541 30.4878C108.01 30.3598 108.522 30.1464 109.077 29.8478C109.631 29.5491 110.165 29.3571 110.677 29.2718ZM101.269 18.7758C101.269 17.1971 101.653 15.7251 102.421 14.3597C103.231 12.9517 104.234 11.6717 105.429 10.5197C106.623 9.36775 107.925 8.36508 109.333 7.51175C110.783 6.61575 112.17 5.89042 113.493 5.33575C114.09 5.07975 114.431 4.95175 114.517 4.95175C114.602 4.90908 114.687 4.75975 114.773 4.50375C114.943 4.16242 115.071 3.71442 115.157 3.15975C115.285 2.60508 115.519 1.96508 115.861 1.23975C115.989 1.02642 116.117 0.834417 116.245 0.66375C116.415 0.450417 116.671 0.34375 117.013 0.34375C117.397 0.34375 117.631 0.47175 117.717 0.727749C117.802 0.983751 117.802 1.30375 117.717 1.68775C117.674 2.07175 117.589 2.47708 117.461 2.90375C117.375 3.28775 117.311 3.60775 117.269 3.86375C117.567 3.82108 117.909 3.75708 118.293 3.67175C118.719 3.54375 119.061 3.43708 119.317 3.35175L125.653 1.87975C127.061 1.66642 128.554 1.47442 130.133 1.30375C131.754 1.09042 133.354 0.983749 134.933 0.983749C135.231 0.983749 135.807 1.00508 136.661 1.04775C137.557 1.09042 138.474 1.17575 139.413 1.30375C140.351 1.38908 141.183 1.53842 141.909 1.75175C142.677 1.96508 143.061 2.24242 143.061 2.58375C143.061 3.09575 142.698 3.35175 141.973 3.35175C141.589 3.35175 141.162 3.30908 140.693 3.22375C140.223 3.13842 139.797 3.05308 139.413 2.96775C138.815 2.88242 138.239 2.83975 137.685 2.83975C137.173 2.79708 136.682 2.77575 136.213 2.77575C133.141 2.77575 130.154 2.96775 127.253 3.35175C124.394 3.73575 121.493 4.37575 118.549 5.27175C118.293 5.35708 117.994 5.46375 117.653 5.59175C117.311 5.67708 117.013 5.76242 116.757 5.84775C116.757 6.18908 116.671 6.63708 116.501 7.19175C116.373 7.70375 116.266 8.17308 116.181 8.59975C115.839 10.0931 115.541 11.4158 115.285 12.5677C115.029 13.6771 114.794 15.0851 114.581 16.7917C114.538 17.2184 114.431 17.9864 114.261 19.0958C114.09 20.2051 113.919 21.3784 113.749 22.6158C113.621 23.8531 113.493 25.0264 113.365 26.1358C113.237 27.2024 113.173 27.9491 113.173 28.3758C113.514 28.2904 113.855 28.2051 114.197 28.1198C114.538 27.9918 114.922 27.8638 115.349 27.7358C118.037 26.9251 120.981 26.1998 124.181 25.5598C127.423 24.8771 130.453 24.5358 133.269 24.5358C133.653 24.5358 133.973 24.5784 134.229 24.6638C134.527 24.7491 134.677 24.9411 134.677 25.2398C134.677 25.7091 134.57 25.9438 134.357 25.9438C134.271 25.9438 134.143 25.9438 133.973 25.9438C133.802 25.9011 133.589 25.8798 133.333 25.8798C132.821 25.8798 132.01 25.9651 130.901 26.1358C129.834 26.3064 128.597 26.5411 127.189 26.8398C125.823 27.0958 124.373 27.3944 122.837 27.7358C121.343 28.0344 119.914 28.3544 118.549 28.6958C117.226 29.0371 116.053 29.3784 115.029 29.7198C114.005 30.0184 113.301 30.2744 112.917 30.4878C112.917 31.4691 112.831 32.4717 112.661 33.4958C112.533 34.4771 112.469 35.4798 112.469 36.5038L112.277 42.5198C112.234 42.6904 112.255 43.2238 112.341 44.1198C112.426 44.9731 112.533 45.9331 112.661 46.9998C112.789 48.1091 112.895 49.1758 112.981 50.1998C113.109 51.2664 113.173 52.0558 113.173 52.5678V56.9198C113.173 57.8158 113.066 58.3918 112.853 58.6478C112.682 58.9038 112.362 59.0318 111.893 59.0318C111.594 59.0318 111.338 58.6691 111.125 57.9438C110.954 57.2184 110.826 56.3651 110.741 55.3838C110.655 54.4451 110.591 53.5064 110.549 52.5678C110.506 51.6718 110.463 51.0317 110.421 50.6478C110.335 50.1357 110.271 49.4318 110.229 48.5358C110.229 47.6398 110.207 46.7224 110.165 45.7838C110.165 44.8451 110.143 43.9704 110.101 43.1598C110.101 42.3491 110.058 41.7944 109.973 41.4958C109.717 40.2584 109.375 39.0424 108.949 37.8478C108.565 36.6104 108.117 35.3944 107.605 34.1998C107.519 33.9864 107.413 33.7944 107.285 33.6238C107.157 33.4104 107.071 33.1971 107.029 32.9837C106.517 33.0691 106.026 33.2397 105.557 33.4958C105.087 33.7518 104.661 34.0291 104.277 34.3278C103.935 34.5838 103.637 34.8398 103.381 35.0958C103.167 35.3091 103.061 35.4158 103.061 35.4158C102.89 35.5438 102.698 35.6077 102.485 35.6077C102.101 35.6077 101.845 35.4371 101.717 35.0958C101.589 34.7544 101.674 34.3918 101.973 34.0078C102.314 33.5811 102.741 33.1971 103.253 32.8558C103.765 32.4718 104.277 32.1304 104.789 31.8318C105.343 31.5331 105.749 31.3198 106.005 31.1918L103.189 25.8158C102.591 24.7064 102.122 23.6398 101.781 22.6158C101.439 21.5918 101.269 20.3118 101.269 18.7758Z" />
                      <path d="M136.352 45.3358C136.736 45.1224 137.098 44.8024 137.44 44.3758C137.824 43.9064 138.186 43.3944 138.528 42.8398C138.869 42.2851 139.189 41.7304 139.488 41.1758C139.786 40.6211 140.042 40.1518 140.256 39.7678C139.914 39.7678 139.616 39.8531 139.36 40.0238C139.104 40.1944 138.869 40.3864 138.656 40.5998C138.4 40.7704 138.186 40.9624 138.016 41.1758C137.888 41.3891 137.717 41.6238 137.504 41.8798C137.162 42.3491 136.885 42.8398 136.672 43.3518C136.458 43.8638 136.352 44.5251 136.352 45.3358ZM140.896 38.4878C140.981 38.3171 141.109 38.1038 141.28 37.8478C141.493 37.5491 141.728 37.3997 141.984 37.3997C142.453 37.3997 142.709 37.5064 142.752 37.7197C142.837 37.9331 142.816 38.2744 142.688 38.7438C142.56 39.2131 142.41 39.8317 142.24 40.5998C142.069 41.3678 141.984 42.3278 141.984 43.4798C141.984 44.6318 142.389 45.6131 143.2 46.4238C144.053 47.1918 145.034 47.5758 146.144 47.5758C147.509 47.5758 148.81 47.2771 150.048 46.6798C151.328 46.0824 152.416 45.4638 153.312 44.8238L157.856 41.3038C158.197 40.9624 158.517 40.7918 158.816 40.7918C159.029 40.7918 159.178 40.8771 159.264 41.0478C159.349 41.1758 159.392 41.3038 159.392 41.4318C159.392 41.8158 159.136 42.2638 158.624 42.7758C158.154 43.2451 157.6 43.7358 156.96 44.2478C156.32 44.7171 155.701 45.1651 155.104 45.5918C154.506 45.9757 154.101 46.2318 153.888 46.3598C152.778 47.0851 151.541 47.7464 150.176 48.3438C148.81 48.9411 147.445 49.2398 146.08 49.2398C144.288 49.2398 142.858 48.7064 141.792 47.6398C140.768 46.5731 140.149 45.1864 139.936 43.4798C139.808 43.5651 139.637 43.7998 139.424 44.1838C139.21 44.5251 138.933 44.8878 138.592 45.2718C138.293 45.6558 137.952 46.0184 137.568 46.3598C137.184 46.6584 136.778 46.8078 136.352 46.8078C136.096 46.8078 135.84 46.7438 135.584 46.6158C135.072 46.3598 134.773 45.8904 134.688 45.2078C134.645 44.5251 134.752 43.7998 135.008 43.0318C135.264 42.2211 135.648 41.4531 136.16 40.7278C136.672 39.9598 137.226 39.3624 137.824 38.9358C138.634 38.3811 139.274 38.1038 139.744 38.1038C140.128 38.1038 140.512 38.2318 140.896 38.4878Z" />
                      <path d="M158.286 44.7598C158.286 44.5037 158.329 43.9491 158.414 43.0958C158.542 42.2424 158.692 41.3678 158.862 40.4718C159.076 39.5758 159.31 38.7864 159.566 38.1038C159.822 37.3784 160.121 37.0158 160.462 37.0158C160.59 37.0158 160.654 37.0371 160.654 37.0798C160.697 37.0798 160.804 37.1011 160.974 37.1438C161.06 37.3571 161.102 37.4638 161.102 37.4638C161.145 37.4638 161.166 37.5491 161.166 37.7197L160.334 42.0078C160.462 41.9224 160.654 41.7091 160.91 41.3678C161.166 41.0264 161.444 40.6851 161.742 40.3438C162.084 39.9598 162.425 39.6398 162.766 39.3838C163.15 39.0851 163.534 38.9358 163.918 38.9358C164.686 38.9358 165.284 39.2344 165.71 39.8318C166.137 40.4291 166.542 41.0904 166.926 41.8158C167.353 42.4984 167.844 43.1384 168.398 43.7358C168.953 44.3331 169.742 44.6318 170.766 44.6318C171.364 44.6318 172.025 44.4611 172.75 44.1198C173.476 43.7358 174.18 43.3304 174.862 42.9038C175.588 42.4344 176.228 42.0291 176.782 41.6878C177.38 41.3038 177.806 41.1118 178.062 41.1118C178.446 41.1118 178.66 41.2824 178.702 41.6238C178.745 41.9224 178.382 42.3064 177.614 42.7758C176.59 43.5011 175.481 44.2264 174.286 44.9518C173.092 45.6771 171.876 46.0398 170.638 46.0398C169.742 46.0398 168.91 45.8051 168.142 45.3358C167.545 44.9944 167.054 44.5891 166.67 44.1198C166.286 43.6504 165.945 43.1811 165.646 42.7118C165.39 42.2424 165.134 41.8158 164.878 41.4318C164.622 41.0051 164.324 40.6851 163.982 40.4718C163.641 40.5571 163.364 40.7064 163.15 40.9198C162.937 41.1331 162.724 41.3678 162.51 41.6238C162.254 41.9651 162.041 42.2638 161.87 42.5198C161.7 42.7331 161.529 42.9464 161.358 43.1598C161.23 43.3304 161.081 43.5438 160.91 43.7998C160.782 44.0558 160.612 44.3758 160.398 44.7598C159.886 45.5704 159.417 45.9758 158.99 45.9758C158.521 45.9758 158.286 45.5704 158.286 44.7598Z" />
                      <path d="M177.477 45.3358C177.861 45.1224 178.223 44.8024 178.565 44.3758C178.949 43.9064 179.311 43.3944 179.653 42.8398C179.994 42.2851 180.314 41.7304 180.613 41.1758C180.911 40.6211 181.167 40.1518 181.381 39.7678C181.039 39.7678 180.741 39.8531 180.485 40.0238C180.229 40.1944 179.994 40.3864 179.781 40.5998C179.525 40.7704 179.311 40.9624 179.141 41.1758C179.013 41.3891 178.842 41.6238 178.629 41.8798C178.287 42.3491 178.01 42.8398 177.797 43.3518C177.583 43.8638 177.477 44.5251 177.477 45.3358ZM182.021 38.4878C182.106 38.3171 182.234 38.1038 182.405 37.8478C182.618 37.5491 182.853 37.3997 183.109 37.3997C183.578 37.3997 183.834 37.5064 183.877 37.7197C183.962 37.9331 183.941 38.2744 183.813 38.7438C183.685 39.2131 183.535 39.8317 183.365 40.5998C183.194 41.3678 183.109 42.3278 183.109 43.4798C183.109 44.6318 183.514 45.6131 184.325 46.4238C185.178 47.1918 186.159 47.5758 187.269 47.5758C188.634 47.5758 189.935 47.2771 191.173 46.6798C192.453 46.0824 193.541 45.4638 194.437 44.8238L198.981 41.3038C199.322 40.9624 199.642 40.7918 199.941 40.7918C200.154 40.7918 200.303 40.8771 200.389 41.0478C200.474 41.1758 200.517 41.3038 200.517 41.4318C200.517 41.8158 200.261 42.2638 199.749 42.7758C199.279 43.2451 198.725 43.7358 198.085 44.2478C197.445 44.7171 196.826 45.1651 196.229 45.5918C195.631 45.9757 195.226 46.2318 195.013 46.3598C193.903 47.0851 192.666 47.7464 191.301 48.3438C189.935 48.9411 188.57 49.2398 187.205 49.2398C185.413 49.2398 183.983 48.7064 182.917 47.6398C181.893 46.5731 181.274 45.1864 181.061 43.4798C180.933 43.5651 180.762 43.7998 180.549 44.1838C180.335 44.5251 180.058 44.8878 179.717 45.2718C179.418 45.6558 179.077 46.0184 178.693 46.3598C178.309 46.6584 177.903 46.8078 177.477 46.8078C177.221 46.8078 176.965 46.7438 176.709 46.6158C176.197 46.3598 175.898 45.8904 175.813 45.2078C175.77 44.5251 175.877 43.7998 176.133 43.0318C176.389 42.2211 176.773 41.4531 177.285 40.7278C177.797 39.9598 178.351 39.3624 178.949 38.9358C179.759 38.3811 180.399 38.1038 180.869 38.1038C181.253 38.1038 181.637 38.2318 182.021 38.4878Z" />
                      <path d="M198.579 38.0398C198.878 37.8264 199.027 37.6984 199.027 37.6558C199.027 37.6131 199.219 37.5918 199.603 37.5918C200.115 37.5918 200.371 38.1038 200.371 39.1278C200.371 40.1091 200.286 41.2398 200.115 42.5198C199.987 43.7571 199.859 44.9518 199.731 46.1038C199.603 47.2131 199.667 47.8958 199.923 48.1518C200.009 48.2371 200.115 48.2798 200.243 48.2798C200.457 48.2798 200.691 48.1518 200.947 47.8958C201.203 47.6824 201.459 47.4051 201.715 47.0638C201.971 46.7651 202.206 46.4664 202.419 46.1678C202.633 45.8264 202.782 45.5918 202.867 45.4638C203.337 44.6958 203.635 44.1198 203.763 43.7358C203.934 43.3091 204.019 42.9891 204.019 42.7758C204.062 42.5198 204.062 42.3064 204.019 42.1357C203.977 41.9224 203.998 41.6024 204.083 41.1758C204.169 40.2798 204.339 39.6611 204.595 39.3198C204.894 38.9358 205.193 38.7438 205.491 38.7438C206.046 38.7438 206.323 39.1064 206.323 39.8318C206.323 40.3011 206.259 40.7064 206.131 41.0478C206.003 41.3891 205.897 41.7304 205.811 42.0718C205.769 42.3704 205.769 42.6904 205.811 43.0318C205.854 43.3304 206.025 43.6718 206.323 44.0558C207.219 44.9518 208.393 45.3998 209.843 45.3998C211.337 45.3998 212.873 44.9944 214.451 44.1838C216.073 43.3304 217.395 42.4558 218.419 41.5598C218.846 41.1331 219.251 40.9198 219.635 40.9198C219.934 40.9198 220.083 41.0691 220.083 41.3678C220.083 41.7944 219.785 42.2638 219.187 42.7758C218.633 43.2878 217.971 43.7784 217.203 44.2478C216.478 44.7171 215.731 45.1438 214.963 45.5278C214.238 45.8691 213.705 46.1038 213.363 46.2318C212.638 46.4878 211.977 46.6798 211.379 46.8078C210.782 46.8931 210.249 46.9358 209.779 46.9358C209.011 46.9358 208.329 46.8291 207.731 46.6158C207.177 46.4024 206.707 46.1678 206.323 45.9118C205.939 45.6558 205.619 45.4211 205.363 45.2078C205.107 44.9518 204.894 44.8024 204.723 44.7598C204.638 45.1864 204.403 45.6984 204.019 46.2958C203.635 46.8931 203.315 47.3624 203.059 47.7038C202.505 48.4291 202.014 48.9411 201.587 49.2398C201.161 49.5811 200.542 49.7518 199.731 49.7518C199.049 49.7518 198.558 49.3678 198.259 48.5998C198.003 47.8317 197.875 47.0851 197.875 46.3598C197.875 44.6531 197.982 43.2238 198.195 42.0718C198.451 40.8771 198.579 39.5331 198.579 38.0398Z" />
                      <path d="M219.602 45.3358C219.986 45.1224 220.348 44.8024 220.69 44.3758C221.074 43.9064 221.436 43.3944 221.778 42.8398C222.119 42.2851 222.439 41.7304 222.738 41.1758C223.036 40.6211 223.292 40.1518 223.506 39.7678C223.164 39.7678 222.866 39.8531 222.61 40.0238C222.354 40.1944 222.119 40.3864 221.906 40.5998C221.65 40.7704 221.436 40.9624 221.266 41.1758C221.138 41.3891 220.967 41.6238 220.754 41.8798C220.412 42.3491 220.135 42.8398 219.922 43.3518C219.708 43.8638 219.602 44.5251 219.602 45.3358ZM224.146 38.4878C224.231 38.3171 224.359 38.1038 224.53 37.8478C224.743 37.5491 224.978 37.3997 225.234 37.3997C225.703 37.3997 225.959 37.5064 226.002 37.7197C226.087 37.9331 226.066 38.2744 225.938 38.7438C225.81 39.2131 225.66 39.8317 225.49 40.5998C225.319 41.3678 225.234 42.3278 225.234 43.4798C225.234 44.6318 225.639 45.6131 226.45 46.4238C227.303 47.1918 228.284 47.5758 229.394 47.5758C230.759 47.5758 232.06 47.2771 233.298 46.6798C234.578 46.0824 235.666 45.4638 236.562 44.8238L241.106 41.3038C241.447 40.9624 241.767 40.7918 242.066 40.7918C242.279 40.7918 242.428 40.8771 242.514 41.0478C242.599 41.1758 242.642 41.3038 242.642 41.4318C242.642 41.8158 242.386 42.2638 241.874 42.7758C241.404 43.2451 240.85 43.7358 240.21 44.2478C239.57 44.7171 238.951 45.1651 238.354 45.5918C237.756 45.9757 237.351 46.2318 237.138 46.3598C236.028 47.0851 234.791 47.7464 233.426 48.3438C232.06 48.9411 230.695 49.2398 229.33 49.2398C227.538 49.2398 226.108 48.7064 225.042 47.6398C224.018 46.5731 223.399 45.1864 223.186 43.4798C223.058 43.5651 222.887 43.7998 222.674 44.1838C222.46 44.5251 222.183 44.8878 221.842 45.2718C221.543 45.6558 221.202 46.0184 220.818 46.3598C220.434 46.6584 220.028 46.8078 219.602 46.8078C219.346 46.8078 219.09 46.7438 218.834 46.6158C218.322 46.3598 218.023 45.8904 217.938 45.2078C217.895 44.5251 218.002 43.7998 218.258 43.0318C218.514 42.2211 218.898 41.4531 219.41 40.7278C219.922 39.9598 220.476 39.3624 221.074 38.9358C221.884 38.3811 222.524 38.1038 222.994 38.1038C223.378 38.1038 223.762 38.2318 224.146 38.4878Z" />
                      <path d="M239.936 38.1038C239.936 37.7198 240.043 37.2718 240.256 36.7598C240.47 36.2051 240.747 35.6931 241.088 35.2238C241.43 34.7544 241.792 34.3704 242.176 34.0718C242.603 33.7304 243.008 33.5598 243.392 33.5598C243.947 33.5598 244.31 33.7304 244.48 34.0718C244.694 34.3704 244.8 34.7331 244.8 35.1598C244.8 35.5864 244.715 36.0344 244.544 36.5038C244.416 36.9731 244.288 37.3358 244.16 37.5918L243.2 39.8318C244.438 39.8318 245.355 40.1731 245.952 40.8558C246.592 41.5384 246.912 42.4557 246.912 43.6077C246.912 44.7598 246.912 45.6771 246.912 46.3598C246.912 47.0424 246.976 47.5544 247.104 47.8958C247.275 48.2798 247.552 48.5144 247.936 48.5998C248.363 48.7277 248.982 48.7918 249.792 48.7918C250.475 48.7918 251.264 48.5998 252.16 48.2158C253.099 47.8744 254.038 47.4264 254.976 46.8718C255.915 46.3171 256.79 45.7411 257.6 45.1438C258.411 44.5464 259.072 43.9918 259.584 43.4798L260.864 42.1357C261.248 41.7944 261.483 41.5171 261.568 41.3038C261.654 41.0904 261.846 40.9838 262.144 40.9838C262.87 40.9838 263.19 41.2397 263.104 41.7518C263.019 42.2211 262.656 42.8184 262.016 43.5438C261.419 44.2264 260.587 44.9944 259.52 45.8478C258.496 46.7011 257.387 47.4691 256.192 48.1518C254.998 48.8771 253.782 49.4744 252.544 49.9438C251.307 50.4558 250.176 50.7118 249.152 50.7118C247.83 50.7118 246.87 50.3704 246.272 49.6878C245.718 49.0051 245.334 48.1944 245.12 47.2558C244.95 46.3171 244.864 45.3784 244.864 44.4398C244.907 43.4584 244.864 42.7118 244.736 42.1998C244.182 41.9438 243.606 41.7944 243.008 41.7518C242.454 41.6664 241.942 41.5384 241.472 41.3678C241.003 41.1971 240.619 40.8771 240.32 40.4078C240.064 39.9384 239.936 39.1704 239.936 38.1038ZM242.56 37.0158C242.56 37.0158 242.496 37.0158 242.368 37.0158V37.5278C242.368 37.5278 242.432 37.5278 242.56 37.5278V37.0158Z" />
                      <path d="M262.102 45.3358C262.486 45.1224 262.848 44.8024 263.19 44.3758C263.574 43.9064 263.936 43.3944 264.278 42.8398C264.619 42.2851 264.939 41.7304 265.238 41.1758C265.536 40.6211 265.792 40.1518 266.006 39.7678C265.664 39.7678 265.366 39.8531 265.11 40.0238C264.854 40.1944 264.619 40.3864 264.406 40.5998C264.15 40.7704 263.936 40.9624 263.766 41.1758C263.638 41.3891 263.467 41.6238 263.254 41.8798C262.912 42.3491 262.635 42.8398 262.422 43.3518C262.208 43.8638 262.102 44.5251 262.102 45.3358ZM266.646 38.4878C266.731 38.3171 266.859 38.1038 267.03 37.8478C267.243 37.5491 267.478 37.3997 267.734 37.3997C268.203 37.3997 268.459 37.5064 268.502 37.7197C268.587 37.9331 268.566 38.2744 268.438 38.7438C268.31 39.2131 268.16 39.8317 267.99 40.5998C267.819 41.3678 267.734 42.3278 267.734 43.4798C267.734 44.6318 268.139 45.6131 268.95 46.4238C269.803 47.1918 270.784 47.5758 271.894 47.5758C273.259 47.5758 274.56 47.2771 275.798 46.6798C277.078 46.0824 278.166 45.4638 279.062 44.8238L283.606 41.3038C283.947 40.9624 284.267 40.7918 284.566 40.7918C284.779 40.7918 284.928 40.8771 285.014 41.0478C285.099 41.1758 285.142 41.3038 285.142 41.4318C285.142 41.8158 284.886 42.2638 284.374 42.7758C283.904 43.2451 283.35 43.7358 282.71 44.2478C282.07 44.7171 281.451 45.1651 280.854 45.5918C280.256 45.9757 279.851 46.2318 279.638 46.3598C278.528 47.0851 277.291 47.7464 275.926 48.3438C274.56 48.9411 273.195 49.2398 271.83 49.2398C270.038 49.2398 268.608 48.7064 267.542 47.6398C266.518 46.5731 265.899 45.1864 265.686 43.4798C265.558 43.5651 265.387 43.7998 265.174 44.1838C264.96 44.5251 264.683 44.8878 264.342 45.2718C264.043 45.6558 263.702 46.0184 263.318 46.3598C262.934 46.6584 262.528 46.8078 262.102 46.8078C261.846 46.8078 261.59 46.7438 261.334 46.6158C260.822 46.3598 260.523 45.8904 260.438 45.2078C260.395 44.5251 260.502 43.7998 260.758 43.0318C261.014 42.2211 261.398 41.4531 261.91 40.7278C262.422 39.9598 262.976 39.3624 263.574 38.9358C264.384 38.3811 265.024 38.1038 265.494 38.1038C265.878 38.1038 266.262 38.2318 266.646 38.4878Z" />
                      <path d="M284.036 44.7598C284.036 44.5037 284.079 43.9491 284.164 43.0958C284.292 42.2424 284.442 41.3678 284.612 40.4718C284.826 39.5758 285.06 38.7864 285.316 38.1038C285.572 37.3784 285.871 37.0158 286.212 37.0158C286.34 37.0158 286.404 37.0371 286.404 37.0798C286.447 37.0798 286.554 37.1011 286.724 37.1438C286.81 37.3571 286.852 37.4638 286.852 37.4638C286.895 37.4638 286.916 37.5491 286.916 37.7197L286.084 42.0078C286.212 41.9224 286.404 41.7091 286.66 41.3678C286.916 41.0264 287.194 40.6851 287.492 40.3438C287.834 39.9598 288.175 39.6398 288.516 39.3838C288.9 39.0851 289.284 38.9358 289.668 38.9358C290.436 38.9358 291.034 39.2344 291.46 39.8318C291.887 40.4291 292.292 41.0904 292.676 41.8158C293.103 42.4984 293.594 43.1384 294.148 43.7358C294.703 44.3331 295.492 44.6318 296.516 44.6318C297.114 44.6318 297.775 44.4611 298.5 44.1198C299.226 43.7358 299.93 43.3304 300.612 42.9038C301.338 42.4344 301.978 42.0291 302.532 41.6878C303.13 41.3038 303.556 41.1118 303.812 41.1118C304.196 41.1118 304.41 41.2824 304.452 41.6238C304.495 41.9224 304.132 42.3064 303.364 42.7758C302.34 43.5011 301.231 44.2264 300.036 44.9518C298.842 45.6771 297.626 46.0398 296.388 46.0398C295.492 46.0398 294.66 45.8051 293.892 45.3358C293.295 44.9944 292.804 44.5891 292.42 44.1198C292.036 43.6504 291.695 43.1811 291.396 42.7118C291.14 42.2424 290.884 41.8158 290.628 41.4318C290.372 41.0051 290.074 40.6851 289.732 40.4718C289.391 40.5571 289.114 40.7064 288.9 40.9198C288.687 41.1331 288.474 41.3678 288.26 41.6238C288.004 41.9651 287.791 42.2638 287.62 42.5198C287.45 42.7331 287.279 42.9464 287.108 43.1598C286.98 43.3304 286.831 43.5438 286.66 43.7998C286.532 44.0558 286.362 44.3758 286.148 44.7598C285.636 45.5704 285.167 45.9758 284.74 45.9758C284.271 45.9758 284.036 45.5704 284.036 44.7598Z" />
                    </g>
                  </svg>

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
                    <h3>+12</h3>
                    <p>Years of Experience</p>
                  </div>
                  <div className='card'>
                    <h3>+38</h3>
                    <p>Specialized Instructor</p>
                  </div>
                  <div className='card'>
                    <h3>+9K</h3>
                    <p>Professional students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            s
          </div>
          <div className="carousel-item">
            s
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#FNV-Slider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#FNV-Slider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
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
