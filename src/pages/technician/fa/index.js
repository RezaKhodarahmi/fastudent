import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// ** Import Translation
import { useTranslation } from 'react-i18next'

// ** Import course section
import CourseDeskSingle from 'src/views/swiper/courseDeskSingle'
import CourseMobileSingle from 'src/views/swiper/courseMobileSingle'

// ** Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { fetchCourseData } from 'src/store/apps/course'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

const Index = () => {
  const [courses, setCourses] = useState([])

  //Hooks
  const router = useRouter()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const courseData = useSelector(state => state.course)

  // Check website lang
  useEffect(() => {
    const lng = window.localStorage.getItem('i18nextLng')
    if (lng == 'en') {
      router.push('/technician')
    }
  }, [])

  useEffect(() => {
    dispatch(fetchCourseData())
  }, [])

  useEffect(() => {
    if (courseData?.data) {
      setCourses(courseData?.data?.data)
    }
  }, [courseData])

  const addToCart = id => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const existInCart = cartItems.includes(id)
    router.push('/cart')

    if (existInCart) {
      window.alert('Item is already in cart!')
      router.push('/cart')
    } else {
      cartItems.push(id)
    }

    const updatedCartItems = [...cartItems]
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  return (
    <>
      <section className='FNV-SinglePage FNV-SinglePage-Header'>
        <div className='container'>
          <div className='row FNV-Header'>
            <div className='col-12'>
              <h1>تکنسین فنی در کانادا (Tradesperson)</h1>
            </div>

            <div className='col-12 col-md-6'>
              <span>پیش از هر اقدامی، این ویدئو را ببینید</span>
              <iframe
                src='https://www.youtube.com/embed/Pj7qRvwwNYs?si=q8_UOnfjFhVuYB8m'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>

            <div className='col-12 col-md-6'>
              <p>
                یک تکنسین فنی کسی است که در یک زمینه خاص مرتبط با فناوری یا ماشین‌آلات، مهارت دارد و کارهای اجرایی در این زمینه انجام داده است. تکنسین‌های فنی توانایی درک، نگهداری، تعمیر یا عملکرد تجهیزات یا سیستم‌ها در زمینه تخصصی خود را دارند. این افراد می‌توانند در صنایع مختلفی مانند فناوری اطلاعات، ارتباطات، خودروسازی، بهداشت٬ درمان،‌ تولیدی و تاسیساتی و کانستراکشن کار کنند. وظایف آن‌ها معمولا این است که مشکلات را تشخیص دهند، امور نگهداری‌های روزانه را پیش ببرند، تجهیزات را نصب کنند و مطمئن شوند که سیستم‌ها به درستی کار می‌کنند. وظایف و مسئولیت‌های خاص تکنسین ممکن است بسته به تخصص و صنعتی که در آن کار می‌کنند، متفاوت باشد.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-ContentList'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <p>فهرست مطالب:</p>
              <ol>
                <li>
                  <Link href='#P1'>وظایف تکنسین‌های فنی</Link>
                </li>
                <li>
                  <Link href='#P2'>لیست تکنسین‌های فنی که داشتن trade certification برای آن‌ها اجباری است</Link>
                </li>
                <li>
                  <Link href='#P3'>لیست تکنسین‌های فنی که داشتن Trade Certification برای آن‌ها غیر اجباری است</Link>
                </li>
                <li>
                  <Link href='#P4'>Trade Equivalency Assessment یا TEA</Link>
                </li>
                <li>
                  <Link href='#P5'>«Red Seal» یک استاندارد ملی حرفه‌ای</Link>
                </li>
                <li>
                  <Link href='#P6'>دوره کارآموزی تکنسین‌های فنی در کانادا</Link>
                </li>
                <li>
                  <Link href='#P7'>نقشه راه برای تکنسین‌ها</Link>
                </li>
                <li>
                  <Link href='#FAQ'>سوالات متداول</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P1'>
        <div className='container'>
          <div className='row'>
            <h3>وظایف تکنسین&zwnj;های فنی</h3>

            <div className='col-12'>
              <p>یک پروژه شامل اقدامات اختصاصی است که برای دستیابی به مجموعه&zwnj;ای از اهداف برنامه&zwnj;ریزی شده و تعریف آن، می&zwnj;تواند خروجی&zwnj;ها، نتایج یا منافع متفاوت ایجاد کند. پروژه معمولا در صورتی موفق تلقی می&zwnj;شود که به اهداف خود دست یافته و مطابق با معیارهای مورد پذیرش در یک بازه زمانی و بودجه توافق شده عمل کند. زمان، هزینه و کیفیت، اجزای سازنده هر پروژه هستند.</p>
              <p>زمان: زمان&zwnj;بندی، مجموعه&zwnj;ای از تکنیک&zwnj;های مورد استفاده برای توسعه و ارایه برنامه&zwnj;هایی است که نشان می&zwnj;دهد چه زمانی کار انجام خواهد شد.</p>
              <p>هزینه: وجوه لازم چگونه به دست آمده و مدیریت مالی به چه صورت انجام می&zwnj;شود؟</p>
              <p>کیفیت: تناسب بین محصولات و پروسه مدیریتی تا چه میزان تضمین می&zwnj;&zwnj;شود؟</p>
              <p>نحوه مدیریت نیز به فاکتورهای مختلفی بستگی دارد. مقیاس، اهمیت و پیچیدگی یک پروژه عوامل اصلی هستند. برای مثال، جابجایی یک دفتر کوچک یا سازماندهی مسابقات المپیک در بسیاری از اصول اساسی دارای اشتراکاتی هستند، اما چالش&zwnj;های مدیریتی بسیار متفاوتی را نمایان می&zwnj;کنند.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P2'>
        <div className='container'>
          <div className='row'>
            <h3>لیست تکنسین‌های فنی که داشتن Trade Certification برای آن‌ها اجباری است</h3>

            <div className='col-12'>
              <p>لیست تکنسین&zwnj;هایی که به Trade Certification نیاز دارند بر اساس استان یا قلمرو مختلف متغیر است، زیرا هر
                ناحیه دارای یک نهاد نظارتی است که مسئولیت برنامه&zwnj;های کارآموزی و گواهی&zwnj;نامه&zwnj;دهی را بر عهده دارد.
                این نهادها معمولاً یک فهرست از حرفه&zwnj;های Compulsory تعیین می&zwnj;کنند، به این معنی که افرادی که در این
                حرفه&zwnj;ها کار می&zwnj;کنند، باید گواهینامه داشته یا ثبت&zwnj;نام کرده باشند تا بتوانند به طور قانونی فعالیت
                کنند.</p>

              <p>با این حال، برخی از حرفه&zwnj;ها به طور معمول در اکثریت استان&zwnj;ها و قلمروهای کانادا به عنوان Compulsory
                Trades شناخته می&zwnj;شوند. برخی از این حرفه&zwnj;ها به شرح زیر است:</p>

              <ul>
                <li>تکنسین برقکاری</li>
                <li>تکنسین لوله&zwnj;کشی</li>
                <li>تکنسین جوشکاری</li>
                <li>تکنسین نجاری</li>
                <li>تکنسین تعمیرات خودرو</li>
                <li>تکنسین تجهیزات سنگین</li>
                <li>مکانیک یخچال و تهویه مطبوع</li>
                <li>مکانیک صنعتی (میلرایت)</li>
              </ul>

              <p>لازم به ذکر است که فهرست دقیق حرفه&zwnj;های اجباری ممکن است به مرور زمان تغییر کند. پس قبل از هر اقدامی، بهتر
                است که فهرست کاری استان خود را بررسی کنید. برای استان انتاریو، این لیست را در سایت <a
                  href="https://www.skilledtradesontario.ca/about-trades/trades-information/">trade information</a> بررسی
                کنید.</p>

              <p>در لیست زیر می‌توانید compulsory trade ها را با نام معمول آن‌ها ببینید (در استان انتاریو و بعضی از استان‌های
                دیگر مانند BC):</p>

              <div class="table-responsive">
                <table className='table table-striped table-hover'>
                  <thead>
                    <tr>
                      <th>
                        <p>نام شغل یا مهارت</p>
                      </th>
                      <th>
                        <p>کد شغلی</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>Alignment and Brakes Technician</p>
                      </td>
                      <td>
                        <p>310E</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Auto Body and Collision Damage Repairer</p>
                      </td>
                      <td>
                        <p>310B</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Auto Body Repairer</p>
                      </td>
                      <td>
                        <p>310Q</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Automotive Electronic Accessory Technician</p>
                      </td>
                      <td>
                        <p>310K</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Automotive Service Technician</p>
                      </td>
                      <td>
                        <p>310S</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Electrician &mdash; Construction and Maintenance</p>
                      </td>
                      <td>
                        <p>309A</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Electrician &mdash; Domestic and Rural</p>
                      </td>
                      <td>
                        <p>309C</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Fuel and Electrical Systems Technician</p>
                      </td>
                      <td>
                        <p>310C</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Hair Stylist</p>
                      </td>
                      <td>
                        <p>332A</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Hoisting Engineer &mdash; Mobile Crane Operator 1</p>
                      </td>
                      <td>
                        <p>339A</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Hoisting Engineer &mdash; Mobile Crane Operator 2</p>
                      </td>
                      <td>
                        <p>339C</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Hoisting Engineer &mdash; Tower Crane Operator</p>
                      </td>
                      <td>
                        <p>339B</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Motorcycle Technician</p>
                      </td>
                      <td>
                        <p>310G</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Plumber</p>
                      </td>
                      <td>
                        <p>306A</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Refrigeration and Air Conditioning Systems Mechanic</p>
                      </td>
                      <td>
                        <p>313A</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Residential (Low Rise) Sheet Metal Installer</p>
                      </td>
                      <td>
                        <p>308R</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Residential Air Conditioning Systems Mechanic</p>
                      </td>
                      <td>
                        <p>313D</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Sheet Metal Worker</p>
                      </td>
                      <td>
                        <p>308A</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Sprinkler and Fire Protection Installer</p>
                      </td>
                      <td>
                        <p>427A</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Steamfitter</p>
                      </td>
                      <td>
                        <p>307A</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Transmission Technician</p>
                      </td>
                      <td>
                        <p>310D</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Truck and Coach Technician</p>
                      </td>
                      <td>
                        <p>310T</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Truck-Trailer Service Technician</p>
                      </td>
                      <td>
                        <p>310J</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P3'>
        <div className='container'>
          <div className='row'>
            <h3>لیست تکنسین‌های فنی که داشتن Trade Certification برای آن‌ها غیر اجباری است</h3>

            <div className='col-12'>
              <p>
                لیست حرفه‌های non compulsory در کانادا بسیار گسترده است و می‌تواند شامل یک طیف گسترده از شغل‌ها باشد که توسط نهادهای نظارتی استانی یا قلمرویی به عنوان اجباری تعیین نشده‌اند. این حرفه‌ها معمولا نیازی به گواهینامه یا ثبت‌نام برای انجام کار به صورت قانونی ندارند، اگرچه افراد ممکن است هنوز برای توسعه حرفه‌ای خود گواهینامه یا آموزش داوطلبانه را دنبال کنند. دریافت گواهینامه اثبات مهارت برای این مشاغل به معنای کاریابی بهتر و درآمد بیشتر است.
                برخی از مثال‌های حرفه‌های non compulsory در کانادا شامل موارد زیر می‌شود:
              </p>

              <div class="table-responsive">
                <table className='table table-striped table-hover'>
                  <tbody>
                    <tr>
                      <td>
                        <p>نام شغل یا مهارت</p>
                      </td>
                      <td>
                        <p>کد شغلی</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Agricultural Equipment Technician</p>
                      </td>
                      <td>
                        <p>425A</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Alignment and Brakes Technician</p>
                      </td>
                      <td>
                        <p>310E</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Appliance Service Technician</p>
                      </td>
                      <td>
                        <p>445A</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Architectural Glass and Metal Technician</p>
                      </td>
                      <td>
                        <p>424A</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Automotive Electronic Accessory Technician</p>
                      </td>
                      <td>
                        <p>310K</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Automotive Service Technician</p>
                      </td>
                      <td>
                        <p>310S</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Computer Numerical Control (CNC) Programmer</p>
                      </td>
                      <td>
                        <p>670C</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Construction Boilermaker</p>
                      </td>
                      <td>
                        <p>428A</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Cabinet maker</p>
                      </td>
                      <td>
                        <p>438A</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Concrete Pump Operator</p>
                      </td>
                      <td>
                        <p>637C</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>لازم به ذکر است که طبقه‌بندی حرفه‌ها به عنوان اجباری یا غیراجباری می‌تواند بین استان‌ها و قلمروها متغیر باشد و برخی از حرفه‌ها ممکن است به مرور زمان به دلیل تغییرات در مقررات و استانداردهای صنعتی به عنوان اجباری تعیین شوند.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P4'>
        <div className='container'>
          <div className='row'>
            <h3>Trade Equivalency Assessment یا TEA</h3>

            <div className='col-12'>
              <p>Trade Equivalency Assessment یک فرایند است که در کشورهای مختلف از جمله کانادا برای ارزیابی مهارت&zwnj;ها و صلاحیت&zwnj;های افرادی که تخصص خود را از طریق یادگیری غیررسمی یا تجربه کاری به دست آورده&zwnj;اند، مورد استفاده قرار می&zwnj;گیرد.</p>
              <p>به عنوان مثال، تکنسین فنی که برق&zwnj;کاری را از طریق کارآموزی، آموزش در محل کار یا خودآموزی فرا گرفته باشد، ممکن است از طریق فرآیند TEA برای دریافت گواهی&zwnj;نامه یا مجوز رسمی در زمینه خود، برای ارزیابی مهارت&zwnj;های خود اقدام کند.</p>
              <p>TEA معمولا شامل ارزیابی دانش، مهارت&zwnj;ها و تجربه فرد نسبت به استانداردها یا معیارهای مشخص برای یک حرفه یا صنعت خاص می&zwnj;شود. این ارزیابی می&zwnj;تواند شامل آزمون، اثبات عملی، مصاحبه و یا بررسی پرونده است.</p>
              <p>هدف از TEA اطمینان حاصل کردن از این است که افرادی که مهارت&zwnj;های خود را از طریق راه&zwnj;های جایگزین به دست آورده&zwnj;اند، فرصت ارزیابی و نشان دادن توانمندی&zwnj;های خود را داشته باشند و به عنوان پاداش، تاییدیه برای توانایی&zwnj;هایشان دریافت کنند و از طریق آن، وارد بازار کار شوند.</p>
              <p>این را بدانید که اگر تجربه کاری مربوط به کانادا نیست، ابتدا باید آزمون (TEA) را بگذرانید.</p>
              <p>نقشه راه زیر، فرایند TEA در کانادا را نشان می&zwnj;دهد. توجه داشته باشید که استان&zwnj;ها و قلمروهای کانادا رویه&zwnj;ها و بوروکراسی&zwnj;های خود را برای این موضوع دارند.</p>

              <ol>
                <li>تکمیل فرم درخواست TEA</li>
                <li>آماده سازی سوابق کاری (دریافت نامه از شرکتی که در آن کار کرده&zwnj;اید مطابق با استانداردهای کانادایی)</li>
                <li>استاندارد آموزشی برای حرفه&zwnj;ای که می&zwnj;خواهید به آن بپیوندید را بررسی کنید. استانداردهای آموزشی به 4 بخش تقسیم شده است:
                  <ul>
                    <li><strong>ساختمان</strong></li>
                    <li><strong>صنعتی</strong></li>
                    <li><strong>نیروی محرک</strong></li>
                    <li><strong>خدمات</strong></li>
                  </ul>
                </li>
              </ol>
              <ol>
                <li>هزینه ارزیابی. حرفه&zwnj;های مختلف هزینه&zwnj;های متفاوتی پرداخت می&zwnj;کنند.</li>
                <li>کپی از مدارک هویتی</li>
                <li>پرونده تجزیه و تحلیل شایستگی (CAP) کامل شده اگر ۱وزیشن شغلی شما آن را نیاز داشته باشد.</li>
                <li>کپی&zwnj;های گواهی&zwnj;نامه&zwnj;های تجاری، دیپلم&zwnj;ها یا مجوزها</li>
                <li>کپی&zwnj;های رسمی از سوابق تحصیلی</li>
                <li>ارسال مدرک برای مرکز ارزیابی (هر استان ارگان خاص خود را برای بررسی و ارزیابی دارد. برای مثال، در انتاریو Skilled trade of Ontario و در بریتیش کلمبیا، Skilled Trae of BC مسئولیت این کار را عهده&zwnj;دار هستند.)</li>
                <li>اگر سند&zwnj;های شما به زبان انگلیسی یا فرانسوی نباشد، باید آن&zwnj;ها را ترجمه کرده و توسط یک مترجم رسمی که اصل را دیده باشد، امضا کنید.</li>
                <li>با دریافت یک TEA تایید شده، می&zwnj;توانید تاییدیه آزمون گواهی صلاحیت را بگیرید و در آزمون شرکت کنید. توجه داشته باشید که این آزمون&zwnj;ها از طرف دولت برگزار می&zwnj;شود.</li>
              </ol>

              <p>
                <strong>نکته: چنانچه سابقه کار در حوزه فنی دارید، اما به شرکتی که از آن سابقه کار دارید دسترسی پیدا نمی‌کنید، برای مثال شرکت منحل شده است، چه راهی برای شما وجود دارد؟
                  شما می‌توانید با رجوع به Notary Public (همانند دفتر اسناد رسمی در ایران)، داکیومنتی به نام statutory declaration affidavit را دریافت کنید. براساس این داکیومنت، شما اعلام می‌کنید، شرکتی که در آن کار کرده‌اید برای مثال منحل شده و شما امکان دسترسی به آن را برای دریافت نامه سوابق کاری ندارید (State کردن). سپس این داکیومنت را در Notary Public رسمی کرده و آن را به ارگان استانی خود ارائه می‌دهید.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P5'>
        <div className='container'>
          <div className='row'>
            <h3>«Red Seal» یک استاندارد ملی حرفه‌ای</h3>

            <div className='col-12'>
              <p>در کانادا، لایسنس &laquo;Red Seal&raquo; یک استاندارد ملی حرفه&zwnj;ای است که به تکنسین&zwnj;های ماهر در زمینه&zwnj;های مختلف اعطا می&zwnj;شود. این نشان تضمین می&zwnj;کند که یک تکنسین ماهر می&zwnj;تواند مهارت&zwnj;های لازم برای انجام کار در حرفه&zwnj;ای خاص را به طور استاندارد و با کیفیت داشته باشد.</p>
              <p>برنامه &laquo;Red Seal&raquo; که همچنین به عنوان &laquo;Interprovincial Standards Red Seal Program&raquo; شناخته می&zwnj;شود، در سراسر کانادا توسط National Occupational Certification Council اداره می&zwnj;شود.</p>
              <p>کسب لایسنس Red Seal نشانگر این است که یک تکنسین موفق به اخذ یک آزمون استاندارد ملی در زمینه حرفه&zwnj;ای خاص خود شده است و مهارت&zwnj;های لازم برای انجام کار در آن حرفه را دارا است.</p>
              <p>تکنسین&zwnj;هایی که لایسنس Red Seal دریافت کرده&zwnj;اند، می&zwnj;توانند در تمامی استان&zwnj;ها بدون نیاز به آزمون مجدد و یا اخذ Certificate of Trade همان استان، فعالیت داشته باشند. به عبارتی، این لایسنس در سراسر استان&zwnj;های کانادا تایید شده است و افراد می&zwnj;توانند به راحتی در استان&zwnj;های مختلف حرفه خود را پیش ببرند.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P6'>
        <div className='container'>
          <div className='row'>
            <h3>دوره کارآموزی تکنسین‌های فنی در کانادا</h3>

            <div className='col-12'>
              <p>کارآموزی یک فرآیند آموزشی است که به شخص اجازه می&zwnj;دهد تا مهارت&zwnj;های حرفه&zwnj;ای را از یک استاد یا متخصص در یک حرفه خاص یاد بگیرد. در طول دوره کارآموزی، فرد به عنوان یک کارآموز یا شاگرد در یک محیط واقعی کاری فعالیت می&zwnj;کند و تحت نظارت و راهنمایی یک مربی یا استاد ماهر قرار می&zwnj;گیرد.</p>
              <p>دوره کارآموزی ممکن است مدت زمانی مشخصی داشته باشد که شامل چند سال یا ماه می&zwnj;شود و در طول این مدت، کارآموز مهارت&zwnj;های عملی و تئوری مربوط به حرفه&zwnj;اش را یاد می&zwnj;گیرد. این مهارت&zwnj;ها می&zwnj;توانند شامل استفاده از ابزارها و تجهیزات، اجرای فرآیندهای کاری، ایمنی و بهداشت حرفه&zwnj;ای و دیگر موارد مرتبط با حرفه مورد نظر باشند.</p>
              <p>پس از اتمام دوره کارآموزی، کارآموز می&zwnj;تواند به عنوان یک تکنسین ماهر یا فنی&zwnj;کار در حرفه&zwnj;ای خاص فعالیت کند و مهارت&zwnj;هایی که در طول کارآموزی یاد گرفته است، را به کار بگیرد. در برخی موارد، پس از اتمام کارآموزی، کارآموز ممکن است موفق به دریافت یک گواهینامه یا مدرک رسمی در حرفه&zwnj;اش شود که از سوی مراجع مختص اعطا می&zwnj;شود.</p>

              <p>
                <strong>
                  نکته: چنانچه قصد دارید در یک زمینه فنی در کانادا فعالیت کنید اما سابقه کاری در آن ندارید، نیاز است که دوره کارآموزی بگذرانید و یا به مدت زمان مورد نیاز (برای مثال، برقکاری- 9000 ساعت) به عنوان هلپر فعالیت کنید.
                </strong>
              </p>

              <h4 className='my-4'>مراحل کارآموزی در کانادا</h4>
              <p>مراحل کارآموزی در کانادا معمولا شامل چند مرحله کلیدی است:</p>
              <ul>
                <li><strong>تحقیق و آماده&zwnj;سازی</strong></li>
              </ul>
              <ul>
                <li><strong>یافتن یک کارفرمای حامی</strong></li>
              </ul>
              <ul>
                <li><strong>ثبت&zwnj;نام به عنوان یک کارآموز</strong></li>
              </ul>
              <p>هنگامی که با یک کارفرما حامی قرارداد کاری بسته&zwnj;اید، باید به عنوان یک کارآموز با مراجع مربوط به کارآموزی در استان یا منطقه&zwnj;ای که زندگی می&zwnj;کنید، ثبت&zwnj;نام کنید، فرم&zwnj;های لازم را پر کنید و هرگونه مدارک مورد نیاز را ارائه دهید.</p>
              <ul>
                <li><strong>آغاز آموزش عملی</strong></li>
              </ul>
              <ul>
                <li><strong>کامل کردن دوره تئوری (آموزش در کلاس)</strong></li>
              </ul>
              <ul>
                <li><strong>ثبت ساعت&zwnj;های کارآموزی</strong></li>
              </ul>
              <ul>
                <li><strong>شرکت در آزمون گواهی</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P7'>
        <div className='container'>
          <div className='row'>
            <h3>نقشه راه برای تکنسین‌ها</h3>

            <div className='col-12'>
              <p>تحقیق در مورد شرایط کاری، بازار کاری، درآمد و سطح زبان انگلیسی مورد نیاز برای پوزیشن شغلی فنی شما</p>
              <p><strong>در صورتی که سابقه کار دارید:</strong></p>
              <ul>
                <li>بررسی کنید که به میزان مورد نیاز، کار کرده باشید. (برای مثال، استان انتاریو برای ارائه لایسنس برقکاری، از شما ۹۰۰۰ ساعت معادل ۵ سال سابقه کار درخواست خواهد کرد.)</li>
                <li>در صورتی که سابقه کار دارید، تشکیل پرونده در ارگان صادرکننده لایسنس (برای مثال، ارگان صادر کننده لایسنس برای اکثر مشاغل فنی در استان انتاریو، Skilled Trade of Ontario است.)</li>
                <li>ارائه سابقه کار طبق استانداردهای کانادایی به ارگان صادرکننده لایسنس و دریافت تاییدیه شرکت در آزمون.</li>
                <li>دریافت لایسنس، تکمیل رزومه، تقویت زبان انگلیسی و یادگیری روش&zwnj;های تقویت رزومه و یا کاریابی در استان محل زندگی.</li>
              </ul>
              <p><strong>در صورتی که سابقه کار ندارید:</strong></p>
              <ul>
                <li>شرکت در دوره&zwnj;های کارآموزی، کالج و یا فعالیت به عنوان هلپر جهت تکمیل میزان ساعت کاری درخواست برای هر پوزیشن شغلی.</li>
                <li>پاس کردن آزمون و دریافت لایسنس</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage' id='FAQ'>
        <div className='container'>
          <div className='row'>
            <h3>سوالات متداول</h3>

            <div className='accordion p-0' id='FAQEngineering'>
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#Question1'
                    aria-expanded='true' aria-controls='Question1'>
                    آیا میتوان برای GSI اقدام نکرد و به طور مستقیم برای GSC اقدام کرد؟
                  </button>
                </h2>
                <div id='Question1' className='accordion-collapse collapse show' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      بله اما اگر بخواهید مستقیما برای GSC اقدام کنید لازم است که حداقل ۵ سال سابقه کار حرفه ای داشته
                      باشید که حداقل ۴ سال آن را باید در کانادا کار کرده باشید و می توانید فقط یک سال از آن را از سوابق
                      کاری خود در ایران و یا امتیاز تحصیلات مربوطه استفاده کنید.
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                    data-bs-target='#Question2' aria-expanded='false' aria-controls='Question2'>
                    آیا امتحان Gold Seal Designation حضوری است؟
                  </button>
                </h2>
                <div id='Question2' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>به خاطر شرایط ویروس کرونا امتحان در حال حاضر به صورت آنلاین برگزار میشود.</p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                    data-bs-target='#Question3' aria-expanded='false' aria-controls='Question3'>
                    کدام مراکز تحصیلی دروس اجباری مشخص شده برای هر رشته را ارائه میدهند؟
                  </button>
                </h2>
                <div id='Question3' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      شما میتوانید با کلیک بر روی تمامی درس های اجباری مشخص شده برای هر رشته در سایت Gold Seal Designation
                      ، لیست کالج ها و دانشگاه هایی که آن درس ها را ارائه میدهند را مشاهده کنید.
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                    data-bs-target='#Question4' aria-expanded='false' aria-controls='Question4'>
                    آیا کسانی که در بخش محاسبات و طراحی کار میکنند میتوانند سابقه کار خود را ارائه دهند؟
                  </button>
                </h2>
                <div id='Question4' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      این امتحان و Designation مربوط به بخش عملی و اجرای پروژه های ساختمانی می باشد. بنابراین سابقه کار
                      مهندسی مثل طراحی و محاسبات لحاظ نخواهد شد.
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                    data-bs-target='#Question5' aria-expanded='false' aria-controls='Question5'>
                    آیا باید عضو سازمان بود تا بتوان برای Gold Seal Designation اقدام کرد؟
                  </button>
                </h2>
                <div id='Question5' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      خیر.شما میتوانید بدون عضویت در سازمان و به طور مستقیم مدارک خود را برای سازمان فرستاده و برای Gold
                      Seal Designation اقدام کنید.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
Index.guestGuard = true

export default Index