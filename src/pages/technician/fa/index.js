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
    <section className='FNV-SinglePage'>
      <div className='container'>
        <div className='row FNV-Header'>
          <h1>تکنسین فنی در کانادا (Tradesperson)</h1>
        </div>

        <div className='row'>
          <div className='col-12'>
            <p>
              یک تکنسین فنی کسی است که در یک زمینه خاص مرتبط با فناوری یا ماشین‌آلات، مهارت دارد و کارهای اجرایی در این زمینه انجام داده است. تکنسین‌های فنی توانایی درک، نگهداری، تعمیر یا عملکرد تجهیزات یا سیستم‌ها در زمینه تخصصی خود را دارند. این افراد می‌توانند در صنایع مختلفی مانند فناوری اطلاعات، ارتباطات، خودروسازی، بهداشت٬ درمان،‌ تولیدی و تاسیساتی و کانستراکشن کار کنند. وظایف آن‌ها معمولا این است که مشکلات را تشخیص دهند، امور نگهداری‌های روزانه را پیش ببرند، تجهیزات را نصب کنند و مطمئن شوند که سیستم‌ها به درستی کار می‌کنند. وظایف و مسئولیت‌های خاص تکنسین ممکن است بسته به تخصص و صنعتی که در آن کار می‌کنند، متفاوت باشد.
            </p>

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
                <Link href='#FAQ'>سوالات متداول</Link>
              </li>
            </ol>
          </div>
        </div>

        <div id='P1' className='row'>
          <h3>وظایف تکنسین&zwnj;های فنی</h3>

          <div className='col-12'>
            <p>وظایف کلیدی تکنسین&zwnj;های فنی عبارتند از:</p>
            <ul>
              <li>
                <strong>بازرسی و عیب&zwnj;یابی</strong>
                <p>تکنسین&zwnj;های فنی، ماشین&zwnj;آلات و تجهیزات را بازرسی و عیب&zwnj;یابی می&zwnj;کنند تا منشأ نقص یا مشکل
                  را پیدا کرده و راه&zwnj;حل ارائه دهند. این شامل پرسیدن سوالات از کاربران و بررسی اجزای داخلی
                  دستگاه&zwnj;هاست. برای مثال، پوزیشن شغلی میلرایت در این زمینه فعالیت و درآمد بسیار خوبی دارد.</p>
              </li>

              <li>
                <strong>تعمیر ماشین&zwnj;آلات یا تجهیزات معیوب</strong>
                <p>تکنسین&zwnj;های فنی با دانش تخصصی خود، تجهیزات و ماشین&zwnj;آلات معیوب را تعمیر یا در صورت غیرقابل تعمیر
                  بودن، جایگزین می&zwnj;کنند. آنها با برآورد زمان تعمیر و برقراری ارتباط موثر با مشتریان، فرآیند تعمیر یا
                  تعویض را مدیریت می&zwnj;کنند.</p>
              </li>

              <li>
                <strong>نوشتن رویه&zwnj;های ایمنی و برنامه&zwnj;های نگهداری</strong>
                <p>تکنسین&zwnj;ها رویه&zwnj;های ایمنی و دستورالعمل&zwnj;های نگهداری تجهیزات را تهیه می&zwnj;کنند تا از
                  عملکرد ایمن و طول عمر مفید دستگاه&zwnj;ها اطمینان حاصل کنند. آن&zwnj;ها با تدوین پروتکل&zwnj;های کاری و
                  برنامه&zwnj;های سرویس و نگهداری، ایمنی کارکنان و حفظ تجهیزات را تضمین می&zwnj;کنند.</p>
              </li>

              <li>
                <strong>مذاکره با مشتریان و تامین&zwnj;کنندگان</strong>
                <p>مذاکره در مورد قراردادهای خدمات با تامین&zwnj;کنندگان و مشتریان، یک مسئولیت معمولی تکنسین فنی است. خرید
                  ابزار، قطعات ماشین&zwnj;آلات، باتری&zwnj;ها و سایر محصولات لازم برای ایفای نقش تکنسین فنی مستلزم مذاکره با
                  تامین&zwnj;نندگان است.</p>
              </li>

              <li>
                <strong>مشاغل Compulsory و Non-Compulsory</strong>
                <p>در کانادا، مشاغل به دو دسته تقسیم می&zwnj;شوند: مشاغل اجباری (Compulsory Trades) و مشاغل غیراجباری
                  (Non-Compulsory Trades).</p>
              </li>

              <li>
                <strong>مشاغل اجباری (Compulsory Trades):</strong>
                <p>این مشاغل توسط قوانین استانی یا فدرال تنظیم می&zwnj;شوند و برای اشتغال در آن&zwnj;ها، داشتن مدرک یا
                  گواهینامه تخصصی (لایسنس- Certificate of Trade) الزامی است. افرادی که در این حرفه&zwnj;ها فعالیت
                  می&zwnj;کنند، باید آموزش&zwnj;های تخصصی را گذرانده و در آزمون&zwnj;های مربوطه قبول شوند (یا تجربه کاری
                  خوبی داشته باشند و از طریق TEA برای دریافت لایسنس اقدام کنند). مشاغل اجباری معمولا در زمینه&zwnj;هایی
                  مانند برق، لوله&zwnj;کشی، تاسیسات، جوشکاری و غیره هستند که ایمنی و سلامت عمومی را تحت تاثیر قرار
                  می&zwnj;دهند.</p>
              </li>

              <li>
                <strong>مشاغل غیراجباری (Non-Compulsory Trades):</strong>
                <p>در این مشاغل، داشتن مدرک یا گواهینامه تخصصی الزامی نیست، اگرچه ممکن است برای برخی از کارفرمایان مطلوب
                  باشد. افراد می&zwnj;توانند از طریق تجربه کاری، آموزش در محل کار یا دوره&zwnj;های آموزشی کوتاه&zwnj;مدت،
                  مهارت&zwnj;های لازم را کسب کنند.</p>
              </li>

              <li>
                <strong>Certificate of qualification یا گواهینامه اثبات مهارت</strong>
                <p>در کانادا، گواهینامه مهارت (که به آن certificate of tarde هم گفته می&zwnj;شود) تشخیص رسمی این است که یک
                  فرد سطح خاصی از توانایی را در یک حرفه تعیین شده به دست آورده است. این گواهی معمولاً توسط نهاد نظارتی
                  استانی یا قلمرویی که مسئول نظارت بر برنامه&zwnj;های کارآموزی و گواهی&zwnj;نامه&zwnj;دهی است، صادر
                  می&zwnj;شود. برای مثال، در استان انتاریو، Skilled Trade of Ontario مسئول بررسی پرونده متقاضیان و صدور این
                  گواهینامه است.</p>

                <p>برای دریافت Certificate of qualification به عنوان یک تکنسین در کانادا، افراد عموما باید ترکیبی از آموزش
                  عملی و تحصیلی فنی را از طریق یک برنامه کارآموزی کامل کنند. در صورتی که پوزیشن شغلی مورد نظر آن&zwnj;ها
                  دارای قابلیت Exam باشد، این افراد می&zwnj;توانند چلنج کرده و با پاس کردن آزمون، به لایسنس خود برند. بعضی
                  از پوزیشن&zwnj;ها نیز دارای قابلیت چلنج نیستند و متقاضیان باید دوره کارآموزی (Apprenticeship) را طی کنند.
                </p>

                <p>پیش&zwnj;نیازهای دریافت گواهینامه مهارت (Certificate of Trade) بسته به حرفه و استان یا Territory که گواهی
                  مورد نظر در آن درخواست می&zwnj;شود، متفاوت است. با این حال، داشتن این گواهینامه می&zwnj;تواند برای قانونی
                  انجام دادن فعالیت به عنوان یک تکنسین در کانادا اساسی باشد و برای فرصت&zwnj;های شغلی خاصی نیز الزامی است.
                </p>
              </li>
            </ul>

          </div>
        </div>

        <div id='P2' className='row'>
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

        <div id='P3' className='row'>
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

        <div id='P4' className='row'>
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
          </div>
        </div>

        <div id='FAQ' className='row'>
          <h3>سوالات متداول </h3>

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
                  آیا امتحان Gold Seal Designationحضوری است؟
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
  )
}
Index.guestGuard = true

export default Index