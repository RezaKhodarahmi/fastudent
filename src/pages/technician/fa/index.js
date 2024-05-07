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
          <h1>تکنسین</h1>
        </div>

        <div className='row'>
          <div className='col-12'>
            <p>
              معماری در کانادا جزو مشاغل نظام‌مند یا رگولیتد است و هر کسی نمی‌تواند از عنوان Architect کنار اسم خود استفاده کند. این قانون همانند عنوان مهندسی در کانادا است. معماران، متخصصان حرفه‌ای هستند که از انجمن معماری یک یا چند استان مجوز مورد نیاز برای انجام فعالیت‌های معماری را اخذ کرده‌اند. معماری در کانادا شامل نقشه‌کشی، طراحی و توسعه طرح‌های ساختمانی یا نوسازی ساختمان‌های تجاری، مسکونی و سازمانی است.
            </p>
            <p>
              فهرست مطالب:</p>
            <ol>
              <li>
                <a href='#P1'>چشم انداز و وضعیت شغلی معماری در کانادا</a>
              </li>
              <li>
                <a href='#P2'>وظایف شغلی معماران در کانادا</a>
              </li>
              <li>
                <a href='#P3'>آزمون ویژه معماران در کانادا Examination for Architects in Canada (EXAC)</a>
              </li>
              <li>
                <a href='#P4'>مزایای مدرک معماری در کانادا چیست؟</a>
              </li>
              <li>
                <a href='#P5'>معماری در استان انتاریو؛ سازمان OAA کجاست؟</a>
              </li>
              <li>
                <a href='#P6'>
                  نحوه دریافت مدرک معماری OAA برای افرادی که خارج از کانادا تحصیل یا کار کرده اند
                </a>
              </li>
              <li>
                <a href='#P7'>برنامه کارآموزی در معماری Internship in Architecture Program (IAP)</a>
              </li>
              <li>
                <a href='#P8'>تایید مدرک معماری در کانادا</a>
              </li>
              <li>
                <a href='#P9'>مراحل دریافت BEFA</a>
              </li>
              <li>
                <a href='#FAQ'>سوالات متداول</a>
              </li>
            </ol>
            <p>
              برای یک معمار در این کشور، شرکت‌های معماری، شرکت‌های خصوصی و بخش‌های دولتی فرصت‌های شغلی بسیاری ارائه می‌کنند و معامران می‌توانند به صورت خود اشتغالی نیز فعالیت داشته باشند.

            </p>
            <p>
              معماران به عنوان اعضای انجمن‌های معماری کانادا موظفند تا به صورت کامل قانون معماران و آیین نامه‌های استانی را رعایت کنند و انتظار می‌رود که منشور اخلاقی انجمن خود را نیز دنبال کنند. پس از دریافت مجوز، همه معماران باید تلاش کنند تا عضویت خود را در استان مربوطه حفظ کنند.

            </p>
          </div>
        </div>

        <div className='row'>
          <h3>Before you start</h3>
          <div className='col-12'>
            <iframe
              style={{ height: '700px' }}
              src='https://www.youtube.com/embed/wNse1OrGuds'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div id='P1' className='row'>
          <h3>چشم انداز و وضعیت شغلی معماری در کانادا </h3>

          <div className='col-12'>
            <p>
              به طور کلی برای آنکه شخصی به عنوان یک معمار در کانادا شناخته شود و اجازه کار حرفه‌ای داشته باشد باید چندین مرحله را طی کند. اگرچه مدرک تحصیلی از اهمیت بالایی برخوردار است، اما کانادا جزو کشورهایی است که صرفا فارغ‌التحصیلی در رشته‌های معماری یا مهندسی را به عنوان قدم کافی برای فعالیت در این رشته‌ها به شمار نمی‌آورد. به طور کلی، کسانی که میخواهند در این حرفه‌ فعالیت کنند باید:
            </p>
            <ul>
              <li>در رشته معماری تحصیل کرده باشند </li>
              <li>سابقه کاری کافی داشته باشند     </li>
              <li>آزمون Examination for Architects in Canada (ExAC) را بگذراند .</li>
            </ul>
            <p>
              نحوه گذراندن این مراحل برای هر استان می‌تواند متفاوت باشد. شما می‌توانید برای اطلاع دقیق‌تر از عملکرد هر استان به سایت رسمی انجمن معماران استانی که در زیر آمده است مراجعه کنید.
            </p>

            <ul>
              <li>آنتاریو</li>
              <li>آلبرتا</li>
              <li>بریتیش کلمبیا</li>
              <li>نواسکوشا</li>
              <li>ساسکچوان</li>
              <li>نیو برازنویک</li>
              <li>جزیره پرنس ادوارد</li>
              <li>مانیتوبا</li>
              <li>نیوفاندلند و لابرادور</li>
              <li>کبک</li>
            </ul>


            <p>
              مجموعه فناوران هیچگونه  خدماتی مربوط به استان کبک ارائه نکرده و هیچگونه اطلاعاتی درباره این استان ندارد.
            </p>
          </div>
        </div>

        <div id='P2' className='row'>
          <h3>وظایف شغلی معماران در کانادا</h3>

          <div className='col-12'>
            <ul>
              <li>
                معماران برای شناسایی نوعیت، سبک و هدف بازسازی یک ساختمان در کانادا باید با کارفرما مشورت کنند.

              </li>
              <li>
                مفهوم‌سازی و طراحی ساختمان‌ها و ارائه طرح ساختمانی با جزئیات کامل طراحی، مصالح ساختمانی، هزینه‌ها و برنامه‌های ساخت‌وساز با رعایت استانداردهای معماری در کانادا

              </li>
              <li>آماده‌سازی طرح‌ها و مدل‌ها برای مشتریان
              </li>
              <li>
                تهیه یا نظارت بر آماده‌سازی نقشه‌ها، ویژگی‌ها و دیگر اسناد ساختمانی برای استفاده پیمانکاران و تکنسین‌ها

              </li>
              <li>
                تهیه اسناد مناقصه، شرکت در مذاکرات پیش از عقد قرارداد و اعطای قراردادهای ساخت‌وساز

              </li>
              <li>
                نظارت بر فعالیت‌ها در سایت‌های ساخت‌وساز برای اطمینان از مطابقت با طرح کلی

              </li>
              <li>
                انجام مطالعات امکان‌سنجی و تحلیل‌های مالی پروژه‌های ساختمانی
              </li>

              <li>معماران ممکن است در نوع خاصی از ساخت و ساز مانند مسکونی، تجاری، صنعتی یا سازمانی تخصص داشته باشند
              </li>


            </ul>
          </div>
        </div>


        <div className='row'>
          <h3>قبل از این که شروع کنید</h3>

          <div className='col-12'>
            <iframe
              style={{ height: '700px' }}
              src='https://www.youtube.com/embed/WIkZZs4kZuk'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div id='P3' className='row'>
          <h3>آزمون ویژه معماران در کانادا Examination for Architects in Canada (EXAC)</h3>

          <div className='col-12'>
            <p>
              انجمن‌های معماران استانی کانادا، آزمون‌های مختلفی را برای پذیرش معماران تعیین کرده‌اند. این آزمون‌ها برای تعیین صلاحیت داوطلبان گرفته می‌شوند. جدیدترین آزمون، آزمون (EXAC) نام دارد.
            </p>

            <p>EXAC از چهار بخش تشکیل شده و حوزه های موضوعی زیر را که در برنامه کارآموزی در معماری آمده است پوشش می‌دهد:
            </p>

            <ul>
              <li>برنامه‌ریزی</li>
              <li>آنالیز سایت و محیط              </li>
              <li>مدیریت هزینه‌ها              </li>
              <li>هماهنگی سیستم‌های مهندسی              </li>
              <li>طراحی نقشه‌ها              </li>
              <li>توسعه طرح‌ها              </li>
              <li>نهایی‌سازی پروژه              </li>
              <li>اشراف بر قوانین              </li>
              <li>مناقصات و مذاکرات برای قراردادها              </li>
              <li>فاز ساخت‌وساز (دفتر کار)              </li>
              <li>فاز ساخت‌وساز (سایت)              </li>
              <li>مدیریت پروژه              </li>
              <li>مطالعات قوانین              </li>
            </ul>
            <h4>منابع اصلی برای آزمون EXAC:            </h4>
            <ul>
              <li>Internship in Architecture (IAP)</li>
              <li>Canadian Handbook of Practice for Architecture (CHOP)</li>
              <li>ExAC Website.</li>
              <li>National Building Code 2005 edition</li>
            </ul>
            <p>
              منبع اصلی برای گذراندن آزمون EXAC و انجام فعالیت حرفه‌ای برای معماری در کانادا، در واقع National Building Code است. در این قسمت متقاضیان با قوانین ریز و درشت تعریف شده کانادا برای ساخت‌وساز و همچنین استانداردهای مورد نیز آشنا می‌شوند. NBC دارای 11 بخش کلی است که مهم‌ترین آن‌ها National Building Code Part3 مربوط به اصول ایمنی و حریق و National Building Code Part9 درباره ساختمان‌های مسکونی در کانادا است.
            </p>
          </div>
        </div>

        <div id='P4' className='row'>
          <h3>مزایای مدرک معماری در کانادا چیست؟ </h3>

          <div className='col-12'>
            <ul>
              <li>
                <strong>فعالیت به عنوان معمار  </strong>
                <p>
                  بر اساس قوانین و سیاست‌های کانادا، تنها کسانی می‌توانند از عنوان حرفه‌ای «معمار» استفاده کنند که مدرک معماری در کانادا را داشته باشند. این مدرک ثابت می‌کند که فرد تمامی شرایط لازم برای فعالیت حرفه‌ای در طیف‌های مختلف معماری در کانادا را دارد. این یعنی که افراد بدون داشتن عضویت در یکی از انجمن‌های معماری استانی، به هیچ وجه اجازه فعالیت‌های معماری را ندارند.
                </p>
              </li>
              <li>
                <strong>پرستیژ کاری </strong>
                <p>
                  عضویت در انجمن‌های معماری استانی به عنوان یک پرستیژ کاری بالا برای افراد تلقی می‌شود و عنوان Architect در انتهای اسم آن‌ها درج می‌شود. این عنوان، آینده شغلی فرد را تضمین کند.
                </p>
              </li>
              <li>
                <strong>امنیت شغلی و تنوع کاری</strong>
                <p>
                اگر مجموعه‌ای در حال تعدیل نیرو باشد، به احتمال زیاد افرادی را نگاه می‌دارد که دارای مجوز معماری از انجمن معماری استان باشند. همچنین اگر فرد بخواهد شرکت شخصی خود را راه‌اندازی کند و از فرصت‌های معماری در کانادا و داشتن یک شرکت در حال رشد استفاده کند، قطعا داشتن چنین مجوزی می‌تواند فرصت‌های بیشتری را نسبت به یک شرکت معمولی پیش روی او قرار دهد.
                </p>
              </li>
              <li>
                <strong>حقوق بالاتر </strong>
                <p>
                  داشتن حق رای در انجمن‌های استانی
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div id='P5' className='row'>
          <h3>معماری در استان انتاریو؛ سازمان OAA کجاست؟ </h3>

          <div className='col-12'>
            <p>
              Ontario Association of Architects یا OAA یک سازمان خودمختار است که به افزایش دانش، مهارت و توانایی‌های اعضای خود و در عین حال خدمت به منافع عمومی اختصاص داده شده است. این سازمان همچنین مسئول تایید صلاحیت و ارائه گواهی رسمی برای تایید فعالیت معماران در استان انتاریو است.

            </p>
            <p>
              افرادی که فارغ التحصیل یکی از رشته‌های معماری در کانادا باشند و بخواهند به عنوان معمار در استان انتاریو فعالیت کنند نیاز به عضویت در این سازمان خواهند داشت. لازم به ذکر است که برای فعالیت در سایر استان‌ها، متقاضیان باید به سازمان مربوطه در استان مورد نظر مراجعه کنند.

            </p>
            <p>OAA صلاحیت اعضای خود را از طریق یک فرآیند دقیق تایید می‌کند:
            </p>
            <ul>
              <li>برآوردن نیازهای آموزشی
              </li>
              <li>گذراندن دوره کارآموزی حرفه‌ای
              </li>
              <li>گذراندن امتحانات گسترده
              </li>
              <li>تکمیل دوره پذیرش OAA
              </li>
              <li>Hداشتن شخصیت حرفه‌ای
              </li>
            </ul>
            <p>
              پس از ارجاع، کمیته الزامات تجربه (ERC) تعیین می‌کند که آیا متقاضی می‌تواند شرایط تجربی مقرر شده در قوانین را داشته باشد تا بتواند برای صدور مجوز OAA برای او اقدام کند.


            </p>
            <p>
              مطابق قانون معماران، سازمان معماری انتاریو متعهد است تا افرادی را در این حرفه نگاه دارد که پیش از دریافت مجوز، تمام الزامات مورد نیاز را برآورده کرده‌اند. OAA باید به طور مداوم الزامات را مطابق با بخش 31 مقررات به منظور انجام تعهدات قانونی خود اعمال و به‌روزرسانی کند.

            </p>
            <p>
              اعضای دارای مجوز از سازمان معماری انتاریو باید از مهر حرفه‌ای صادر شده توسط این سازمان مطابق با قوانین حاکم بر استفاده از آن‌ها در مقررات 27 تحت قانون معماران استفاده کنند. مهر و امضای اعضا بر روی یک سند نشان می دهد که آن سند به طور کامل تحت نظارت و هدایت شخصی یک عضو یا اعضا OAA تهیه شده است. برای داشتن این مهر جهت تایید فعالیت‌های معماری در کانادا عبور از آزمون EXAC الزامی است.

            </p>
            <p>
              مهر اعضای OAA زیر یک سند تنها تاییدیه‌ای است که الزامات قانونی در آن برآورده شده است. از این سند می‌توان جهت برنامه‌ریزی و طراحی برای ساخت و ساز و همچنین ایجاد تغییرات در ساختمان‌ها استفاده کرد.


            </p>
          </div>
        </div>

        <div className='row FNV-Related-Course'>
          <h3>دوره‌های مرتبط</h3>

          {/* Courses Desktop */}
          <CourseDeskSingle courses={courses} addToCart={addToCart} />
          {/* Courses Mobile */}
          <CourseMobileSingle courses={courses} addToCart={addToCart} />
        </div>

        <div id='FAQ' className='row'>
          <h3>سوالات متداول </h3>

          <div className='accordion p-0' id='FAQEngineering'>
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question1'
                  aria-expanded='true'
                  aria-controls='Question1'
                >
                  نرم افزار رویت و اتوکد را چطوری در کانادا می توانیم داخل لب تاب نصب کنیم؟
                </button>
              </h2>
              <div id='Question1' className='accordion-collapse collapse show' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    برای این کار دو راه وجود دارد. شما میتوانید هر یک از این نرم افزارها را بخرید یا به صورت کرک شده دانلود کنید. اگر بخواهید این محصولات را خریداری کنیدمیتوانید پرداخت را در Auotdesk.com انجام دهید و لینک دانلود را دریافت کنید. اما اگر میخواهید از نرم افزارها به صورت کرک شده (یا نسخه قفل شکسته) استفاده کنید، به دلیل مقایرت با قوانین کپی رایت، ما راه حلی برای ارایه نداریم.

                  </p>
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question2'
                  aria-expanded='false'
                  aria-controls='Question2'
                >
                  کدام دانشگاه های مونتریال و کبک ارایه دهنده رشته معماری هستند و چه گرایش هایی را آموزش میدهند؟
                </button>
              </h2>
              <div id='Question2' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    در مونترال دانشگاه Universite De Montreal رشته معماری را به زبان فرانسه و در گرایش های متعددی ارائه میدهد. دانشگاه McGill University تنها یک دوره ی دو ساله ی مستر معماری دارد که از آن جایی که کلاس ها به زبان انگلیسی برگزار میشوند برای شرکت در این دوره داشتن مدرک زبان انگلیسی الزامی است اما دانشجویان میتوانند پروژه های کلاسی و پایان نامه های خود را به زیان فرانسه ارائه دهند.

                  </p>
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question3'
                  aria-expanded='false'
                  aria-controls='Question3'
                >
                  آیا بهتر است روی نرم افزار رویت متمرکز باشیم یا برای مدلسازی قوی تریدی مکس
                </button>
              </h2>
              <div id='Question3' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    رویت و تریدی مکس هر دو از نرم افزارهایی هستند که اکثر حرفه ای ها از جمله اساتید دانشگاهی و شرکت های تجاری از آن ها استفاده میکنند. برای مدلسازی سریع نیز اکثر افراد و شرکت ها از اسکچاپ (Sketchup) استفاده میکنند. در کل تسلط بر تعداد بیشتری از نرم افزارها میتواند برای فرد مزیت مهمی محسوب شود.
                  </p>
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question4'
                  aria-expanded='false'
                  aria-controls='Question4'
                >
                  نرم افزار رویت از چه تاریخی شروع میشود؟
                </button>
              </h2>
              <div id='Question4' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    برای اطلاع دقیق از تاریخ برگزاری دوره ها، لطفا به صفحه هر دوره مراجع کنید یا با پشتیبانی سایت در ارتباط باشید.

                  </p>
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#Question5'
                  aria-expanded='false'
                  aria-controls='Question5'
                >
                  آیا داشتن مدرک زبان فرانسه بعنوان امتیاز مثبت برای دانشگاه های مونتریال و کبک محسوب میشود یا همچنان مدرک زبان انگلیسی مورد نیاز است؟
                </button>
              </h2>
              <div id='Question5' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    تسلط به زبان فرانسه امتیاز مثبت محسوب میشود زیرا احتمال پیدا کردن کار در زمینه ی معماری در مونترال را افزایش میدهد.

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