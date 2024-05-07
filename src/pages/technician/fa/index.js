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
              تکنسین فنی در کانادا (Tradesperson) فردی است که در انجام یک حرفه خاص (شغل یا زمینه کاری) تخصص و مهارت کافی دارد.
            </p>
            <p>
              بر خلاف سایر زمینه‌های کاری مثل <a href='/architecture'>معماری</a> و <a href='/engineering'>مهندسی</a>، تکنسین‌ها نیازی به داشتن مدرک دانشگاهی ندارند و می‌توانند تنها با گذراندن دوره مربوطه در کالج یا سایر موسسات آموزشی و پس از گذراندن دوره کارآموزی (Apprenticeship) به صورت رسمی به عنوان یک تکنسین فنی ماهر کار خود را آغاز کنند.
            </p>

            <p>
              فهرست مطالب:</p>
            <ol>
              <li>
                <a href='#P1'>حرفه (Skilled Trade) در کانادا چیست؟</a>
              </li>
              <li>
                <a href='#P2'>سایت های اتحادیه های تکنیسین ها برای هر استان کانادا</a>
              </li>
              <li>
                <a href='#P3'>چگونگی دریافت مجوز کار (لایسنس) به عنوان تکنسین در استان انتاریو</a>
              </li>
              <li>
                <a href='#P4'>نحوه گذراندن دوره نظری و کارآموزی برای یک تکنسین فنی کانادایی </a>
              </li>
              <li>
                <a href='#P5'>آمادگی و آزمون نهایی برای دریافت گواهینامه اجازه کار در کانادا</a>
              </li>
              <li>
                <a href='#P6'>نحوه ثبت نام در آزمون Certificate of Qualification</a>
              </li>
              <li>
                <a href='#FAQ'>سوالات متداول</a>
              </li>
            </ol>
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
          <h3>حرفه (Skilled Trade) در کانادا چیست؟</h3>

          <div className='col-12'>
            <p>
              حرفه یا Skilled Trade یک مسیر شغلی است که به کار عملی و دانش تخصصی نیاز دارد. فعالان در این حوزه‌ها عمدتا زیرساخت‌هایی مانند خانه‌ها، مدارس، بیمارستان‌ها، جاده‌ها، مزارع و پارک‌ها را ساخته و از آن‌ها نگهداری می‌کنند. آن‌ها صنایع را فعال نگه می‌دارند و خدماتی را که ما هر روز به آن‌ها تکیه می‌کنیم، مانند آرایش مو، تهیه غذا یا خدمات اجتماعی به پیش می‌برند.
            </p>
            <p>
              برق کاری ساختمان در کانادا، نجاری در کانادا، لوله کشی در کانادا و برق کاری صنعتی مثال‌هایی از این مشاغل هستند.
            </p>

            <h4>مراحل کلی برای کار به عنوان تکنسین فنی در کانادا</h4>

            <p>مسیری که یک فرد برای تبدیل شدن به تکنسین فنی در کانادا یا Tradesperson طی می‌کند پیچیده نیست اما شامل مراحلی است که باید به ترتیب و به صورت کامل طی شود. به طور کلی مراحل اخذ مجوز کار به عنوان تکنسین کانادایی در هر حرفه به صورت زیر است:</p>

            <ol>
              <li>انتخاب حرفه مورد نظر</li>
              <li>گذراندن دوره نظری و کارآموزی</li>
              <li>شرکت در آزمون مربوطه (تنها برای حرفه هایی که گذراندن آزمون در آنها اجباری یا Compulsory باشد)</li>
            </ol>

            <p>هر استان کانادا حرفه‌های خاصی را برای تکنسین‌ها در نظر گرفته است و در صورتی که یک شخص در یک استان مجوز کار به عنوان یک تکنسین را دریافت کند، نمی‌تواند در استان دیگر به انجام آن حرفه بپردازد، مگر در شرایطی که حرفه مورد نظر دارای مدرک Red Seal باشد و فرد متقاضی توانسته باشد گواهینامه Red Seal را دریافت کند.</p>
            <p>رِد سیل آزمونی است که توانایی های تکنسین متقاضی را با توجه به استاندارد های ملی مورد سنجش قرار میدهد. دریافت مدرک این آزمون اعتبار دارنده آن و همچنین شانس یافتن شغل مناسب را برای شخص به طرز قابل توجهی  افزایش میدهد. برای مطالعه بیشتر در مورد رِد سیل، به صفحه زیر رجوع کنید.</p>
            <p>تعداد ساعات مورد نیاز برای آموزش های نظری و دوره کارآموزی در حرفه هاو استان های مختلف متفاوت است.</p>
          </div>
        </div>

        <div id='P2' className='row'>
          <h3>سایت های اتحادیه های تکنیسین ها برای هر استان کانادا</h3>

          <div className='col-12'>
            <ul>
              <li><a href='http://skilledtradesontario.ca/' target='_blank'>آنتاریو</a></li>
              <li><a href='https://www.itabc.ca/' target='_blank'>بریتیش کلومبیا</a></li>
              <li><a href='https://tradesecrets.alberta.ca/' target='_blank'>آلبرتا</a></li>
              <li><a href='https://www.nsapprenticeship.ca/' target='_blank'>نوا اسکوشا</a></li>
              <li><a href='https://saskapprenticeship.ca/' target='_blank'>ساسکچوان</a></li>
              <li><a href='https://www.princeedwardisland.ca/' target='_blank'>جزایر پرنس ادوارد</a></li>
              <li><a href='https://www.gov.mb.ca/wd/apprenticeship/discover/mbtrades/index.html' target='_blank'>مانیتوبا</a></li>
              <li><a href='https://www2.gnb.ca/' target='_blank'>نیو برنزویک</a></li>
              <li><a href='https://www.gov.nl.ca/' target='_blank'>نیو فاند لند و سالوادور</a></li>
              <li><a href='https://www.quebec.ca/' target='_blank'>کبک</a></li>
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
          <h3>چگونگی دریافت مجوز کار (لایسنس) به عنوان تکنسین در استان انتاریو</h3>

          <div className='col-12'>
            <p>
            در این بخش به بررسی مسیر دریافت گواهی برای فعالیت به عنوان تکنسین فنی در کانادا (Tradesperson) در یک حرفه خاص برای افرادی که در انتاریو ساکن هستند و هیچگونه سابقه کاری قبلی در حرفه مورد نظر خود ندارند می‌پردازیم.
            </p>

            <p>
            برای دریافت مجوز کار در هر حرفه، متقاضی باید 2 مرحله انتخاب حرفه و گذراندن دوره آموزش نظری و کارآموزی را طی کند و در مرحله آخر از سد آزمون نهایی آن حرفه با نمره بالاتر از 70 عبور کند. البته حرفه‌هایی نیز وجود دارند که نیازی به گذراندن آزمون برای آن‌ها نیست.
            </p>

            <p>
            از نظر نوع آزمون، حرفه‌ها در استان انتاریو دو دسته هستند: آن‌ها که نیاز به گذراندن امتحان دارند را Compulsory و آن‌ها که نیازی به گذراندن امتحان ندارند را Non-Compulsory می‌نامند.
            </p>

            <h4>حرفه های دارای آزمون در کانادا (Compulsory) برای تبدیل شدن به تکنسین فنی</h4>

            <p>در انتاریو، 23 حرفه به عنوان Compulsory تعیین شده است. برای کار در این حرفه‌ها باید گواهی صلاحیت ملی یا گواهی صلاحیت استانی صادر شده توسط Skilled Trades Ontario داشته باشید یا به عنوان کارآموز در وزارت کار، آموزش و توسعه مهارت‌ها (Ministry of Labour, Training and Skills Development) ثبت نام کنید و یک قرارداد آموزشی ثبت شده داشته باشید. اطلاعات شما باید در ثبت نام عمومی Skilled Trades Ontario نشان داده شود.</p>
            <p>تمامی حرفه‌ها در این دسته‌بندی دارای آزمون‌های تاییدیه هستند. گواهی صلاحیت برای فعالیت در این حرفه‌ها دارای تاریخ انقضا است و باید در تاریخ معینی تمدید شود، فرد با دریافت این گواهینامه مجوز فعالیت به عنوان تکنسین فنی در کانادا (Tradesperson) را خواهد داشت.</p>

            <h4>حرفه های بدون آزمون در کانادا (Non-Compulsory) برای تبدیل شدن به تکنسین فنی</h4>

            <p>در انتاریو، 121 حرفه وجود دارد که به آزمون نیازی ندارند. از این تعداد، 60 حرفه دارای آزمون‌های تایید صلاحیت هستند اما برای فعالیت در این حرفه‌ها، گذراندن این آزمون‌ها اجباری نیستند. با این حال، برای انجام کار فنی در کانادا، کارآموزی و در صورت امکان کسب گواهی صلاحیت مزایای شغلی زیادی به همراه خواهد داشت. همچنین برنامه‌های کارآموزی برای تمام این مشاغل موجود است.</p>
            <p>دانستنی: <a href='https://www.skilledtradesontario.ca/about-trades/trades-information/'>مشاغل بدون آزمون در کانادا (Non-Compulsory)</a> </p>
          </div>
        </div>

        <div id='P4' className='row'>
          <h3>نحوه گذراندن دوره نظری و کارآموزی برای یک تکنسین فنی کانادایی</h3>

          <div className='col-12'>
            <p>پس از انتخاب حرفه مورد نظر، فرد متقاضی باید معمولا ابتدا 1 سال به عنوان کارآموز کار کند، سپس برای 8 تا 12 هفته بسته به حرفه‌ای که انتخاب کرده است، کلاس‌های نظری را پشت سر بگذارد.</p>
          
            <h4>شروع دوره کارآموزی در انتاریو</h4>

            <p>گذراندن دوره کارآموزی بخش بسیار مهمی از فرایند دریافت مجوز کار به عنوان یک تکنسین در انتاریو است. به عنوان یک کارآموز، شما با افراد باتجربه کار می‌کنید و از آن‌ها یاد می‌گیرید و با انجام کار عملی دستمزد دریافت می‌کنید. شما همچنین در کلاس درس از مربیانی که این حرفه را بلد هستند نیز مطالب بسیاری یاد می‌گیرید.</p>
            <p>تکمیل دوره کارآموزی بین دو تا پنج سال، بسته به حرفه‌ای که انتخاب کرده‌اید زمان در بر خواهد گرفت. وزارت کار، آموزش و توسعه مهارت‌ها، برنامه‌های کارآموزی را در انتاریو مدیریت می‌کند.  برای گذراندن این دوره‌ها 4 مرحله اصلی وجود دارد:</p>

            <h5>مرحله اول: احراز صلاحیت</h5>
            <p>برای واجد شرایط  کارآموزی بودن، متقاضی باید:</p>

            <ul>
              <li>حداقل 16 سال سن داشته باشد</li>
              <li>مجوز قانونی برای کار در کانادا داشته باشد</li>
              <li>الزامات آموزشی برای حرفه انتخابی خود را برآورده کرده باشد</li>
              <li>یک اسپانسر در انتاریو داشته باشد</li>
            </ul>

            <h5>مرحله دوم: پیدا کردن اسپانسر</h5>

            <ul>
              <li>اسپانسر کسی است که متقاضی را برای دوره کارآموزی می‌پذیرد.</li>
              <li>اسپانسر می‌تواند یک کارفرما، یک فرد (به عنوان مثال، یک پیمانکار) یا گروهی از کارفرمایان (به عنوان مثال، اتحادیه‌ها یا کنسرسیوم‌های غیر اتحادیه) باشد.</li>
            </ul>

            <p>برای فعالیت به عنوان کارآموز تکنسین فنی در کانادا (Tradesperson) نیاز به اسپانسر دارید، اما آیا می‌دانید که چطور باید اسپانسر پیدا کنید؟ روش‌های مختلفی برای این کار وجود دارد که در ادامه به صورت مفصل آن‌ها را برای شما بیان می‌کنیم.</p>
            <p><b>آنلاین:</b> شما می‌توانید به صورت آنلاین رزومه خود را در بانک مشاغل انتاریو آپلود کنید و فرصت‌های کارآموزی در حرفه خود را بیابید.</p>
            <p><b>سازمان <a href='http://feats.findhelp.ca/eng/search.html' target='_blank'>Employment Ontario (EO)</a>:</b> این سازمان خدماتی مانند مچ کردن جویندگان کارآموزی با کارفرمایان را انجام می‌دهد. برای استفاده از این امکان اینجا کلیک کنید.</p>
            <p><b>اتحادیه ها یا انجمن های صنفی:</b> بسیاری از مشاغل اتحادیه‌ها یا انجمن‌هایی دارند که منابعی برای یافتن و تطبیق کارآموزان با اسپانسرهای عضو در نظر گرفته‌اند.</p>
            <p><b>شرکت های محلی</b> درباره شرکت‌های محلی در سایت <a href='http://skilledtradesontario.ca/' target='_blank'>Skilledtradesontario.ca</a> تحقیق کنید. منابع آنلاین محلی خود، روزنامه ها یا فهرست های دیگر را نیز امتحان کنید.</p>
            <p><b>شبکه افرادی که میشناسید: </b> استفاده از شبکه افرادی که در انتاریو می‌شناسید احتمالا مهم‌ترین انتخاب شما برای پیدا کردن شغل یا اسپانسر کارآموزی است. ایجاد کانکشن‌های قوی و مستمر یکی از مهم‌ترین راه‌های پیشرفت و ارتقا شغلی نه تنها در کانادا، بلکه در تمام کشورهای جهان اول و در حال توسعه است.</p>
            <p>مجموعه فناوران برای تسهیل امر شبکه‌سازی و نتورکینگ و آشنایی ایرانیان مقیم کانادا با این روند، دوره <a href='courses/resume-and-networking' target='_blank'>Resume & Networking</a> حرفه ای را تهیه کرده است. در صورتی که عضو فناوران شوید و در هریک از دوره‌های ما شرکت کننید، دوره رزومه‌نویسی و نتورکینگ حرفه‌ای را به صورت رایگان دریافت خواهید کرد.</p>
            <p>شما میتوانید قسمت اول این دوره را بصورت رایگان در بخش زیر یا در <a href='https://www.youtube.com/c/Fanavaran_ca'>یوتیوب فناوران</a> مشاهده کنید.</p>
          </div>
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
                  آیا میتوان برای GSI اقدام نکرد و به طور مستقیم برای GSC اقدام کرد؟
                </button>
              </h2>
              <div id='Question1' className='accordion-collapse collapse show' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                  بله اما اگر بخواهید مستقیما برای GSC اقدام کنید لازم است که حداقل ۵ سال سابقه کار حرفه ای داشته باشید که حداقل ۴ سال آن را باید در کانادا کار کرده باشید و می توانید فقط یک سال از آن را از سوابق کاری خود در ایران و یا امتیاز تحصیلات مربوطه استفاده کنید.
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
                  آیا امتحان Gold Seal Designationحضوری است؟
                </button>
              </h2>
              <div id='Question2' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                    به خاطر شرایط ویروس کرونا امتحان در حال حاضر به صورت آنلاین برگزار میشود.
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
                  کدام مراکز تحصیلی دروس اجباری مشخص شده برای هر رشته را ارائه میدهند؟
                </button>
              </h2>
              <div id='Question3' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                  شما میتوانید با کلیک بر روی تمامی درس های اجباری مشخص شده برای هر رشته در سایت Gold Seal Designation ، لیست کالج ها و دانشگاه هایی که آن درس ها را ارائه میدهند را مشاهده کنید.
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
                  آیا کسانی که در بخش محاسبات و طراحی کار میکنند میتوانند سابقه کار خود را ارائه دهند؟
                </button>
              </h2>
              <div id='Question4' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                  این امتحان و Designation مربوط به بخش عملی و اجرای پروژه های ساختمانی می باشد. بنابراین سابقه کار مهندسی مثل طراحی و محاسبات لحاظ نخواهد شد.
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
                  آیا باید عضو سازمان بود تا بتوان برای Gold Seal Designation اقدام کرد؟
                </button>
              </h2>
              <div id='Question5' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                <div className='accordion-body'>
                  <p>
                  خیر.شما میتوانید بدون عضویت در سازمان و به طور مستقیم مدارک خود را برای سازمان فرستاده و برای Gold Seal Designation اقدام کنید.
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