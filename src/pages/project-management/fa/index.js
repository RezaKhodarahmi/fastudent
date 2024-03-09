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

const Index = props => {
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
      router.push('/project-management/')
    }
  }, [])

  useEffect(() => {
    dispatch(fetchCourseData())
  }, [])

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
      <section className='FNV-SinglePage'>
        <div className='container'>
          <div className='row FNV-Header'>
            <h1>مدیریت پروژه</h1>
          </div>

          <div className='row'>
            <div className='col-12'>
              <h2>گواهینامه مدیریت حرفه ای پروژه (PMP) </h2>
              <p>
                گواهینامه مدیریت حرفه ای پروژه (PMP) یکی از بهترین و معتبرترین لایسنس‌هایی است که از سوی موسسه Project Management Institute PMI صادر می‌شود. این لایسنس اثبات می‌کند که فرد تجربه کامل رهبری و دانش کافی برای مدیریت پروژه‌ها را دارد. همچنین این لایسنس به مشاغل حوزه مدیریت در صنایع مختلف قدرت می‌دهد.
              </p>
              <p>مطابق با تعریف، مدیریت پروژه فرآیند رهبری یک تیم برای دستیابی به تمام اهداف پروژه در چارچوب محدودیت های داده شده است.</p>
            </div>
          </div>

          <div className='row'>
            <h3>قبل از اینکه شروع کنید</h3>
            <div className='col-12'>
              <iframe
                style={{ height: '700px' }}
                src='https://www.youtube.com/embed/0Qy2IcqiC4I'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div id='P1' className='row'>
            <h3>سرتیفیکیت مدیریت حرفه ای پروژه (PMP)</h3>

            <div className='col-12'>
              <p>
                در بین همه سرتیفیکیت‌های مدیریت پروژه، گواهینامه مدیریت حرفه ای پروژه (PMP) معروفترین و شناخته‌شده‌ترین گواهینامه در کانادا است. دارندگان این سرتیفیکیت به کارفرما این نوید را می‌دهند که یک مدیر پروژه حرفه‌ای و آشنا به داکیومنت‌های مدیریت پروژه و اصول کنترل پروژه به تیم می‌پیوندد.

                <ul>
                  <li>افراد: توسعه و بهبود مهارت‌های نرم مورد نیاز برای رهبری موثر تیم دخیل در پروژه.</li>
                  <li>فرآیندها: تقویت اجزای سازنده فنی مدیریت پروژه.</li>
                  <li>محیط کسب‌وکار: ارتباط و تطبیق استراتژی‌ها و سیاست‌های سازمانی با پروژه.</li>
                </ul>
              </p>

              <h4>مدیریت پروژه از نگاه PMBOK</h4>
              <p>مدیریت پروژه هنر خلق واقعیت از ایده‌هاست. در حقیقت هرگاه ایده‌ای از نظر توجیه اقتصادی یا Business Case  سبک سنگین شد و مورد تایید سازمان قرار گرفت، برای آن بودجه‌ای در نظر می گیرند  و سازمان خود را متعهد به تحقق آن ایده می‌کند.</p>
              <p>بودجه سازمان معمولا در دست شخصی با سمت شغلی Project Sponsor قرار می‌گیرد. همچنین Project Sponsor، فرد با صلاحیتی را به عنوان Project Manager یا مدیر پروه انتخاب می‌کند. قاعدتا افرادی که دارای گواهینامه مدیریت حرفه ای پروژه (PMP) هستند در اولویت قرار خواهند گرفت.</p>
              <p>مدیر پروژه در تعریف PMI کسی است که هم از نظر تکنیکی، هم از نظر رهبری و هم از نظر دانش تجاری نسبت به پروژه اشراف کامل دارد و کاملا از آن آگاه است.</p>
              <p>Project Manager  یا شخص تعیین شده طی قراردادی به نام Project Charter خود و سازمان را متعهد می‌کند تا پروژه را در جهت اهداف خود پیش ببرد. همچنین در چهارچوب قدرتی که دارد، قادر خواهد بود تا منابع یا  Resourceهای سازمان را در راستای موفقیت پروژه بکار بگیرد.</p>
            </div>
          </div>

          <div id='P2' className='row'>
            <h3>ویژگی های شخصیتی مدیر پروژه</h3>

            <div className='col-12'>
              <ol>
                <li>مدیر پروژه موفق شخصی است که خوب گوش می‌دهد (Active listening)</li>
                <li>خوب مذاکره می‌‌کند (Negotiation)  </li>
                <li>به موقع مانند یک سیاست‌مدار جواب می‌دهد (Political answer)</li>
              </ol>

              <h4> روند مدیریت پروژه در کانادا </h4>
              <p>روند مدیریت پروژه به خوبی در مقاله «مدیریت پروژه چیست و چرا کانادا مقصد خوبی برای مدیران پروژه است؟» توضیح داده شده است </p>

            </div>
          </div>

          <div className='row'>
            <h3>دانش آموزان این دوره</h3>

            <div className='col-12 col-md-12 ps-0'>
              <iframe
                src='https://www.youtube.com/embed/_kOTkSRzevo'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div id='P3' className='row'>
            <h3>درآمد مدیر پروژه سرتیفای شده و حوزه فعالیت</h3>
            <div className='col-12'>
              <p>
                افرادی که مدرک مدیریت حرفه ای پروژه PMP دارند، به طور متوسط 79,185 دلار در سال کسب درآمد می‌کنند. شرکت SNC Lavalin با پرداخت میانگین 242384 دلار در سال به مدیران پروژه خود بزرگترین شرکت در زمینه خدمات مدیریت پروژه است.
              </p>

              <h4>حوزه فعالیت</h4>

              <p>
                افرادی که گواهینامه مدیریت حرفه ای پروژه (PMP) دارند می‌توانند در شرکت‌های ساختمانی فعالیت کنند. این افراد همچنین می‌توانند به عنوان مشاور، مهندس، متخصص نرم افزار، معمار و متخصص IT فعالیت داشته باشند.
              </p>
            </div>
          </div>

          <div id='P4' className='row'>
            <h3>نگاهی به پروژه‌های سنتی پیشبینی‌پذیر Predictive یا Waterfall</h3>
            <div className='col-12'>
              <p>
                این پروژه‌ها همانطور که از نامشان پیداست قابل پیشبینی هستند و از نظر ریسک و درجه پیچیدگی (Complexity) پروژه‌های آسانی هستند. مثال ساده این پروژه‌ها، پروژه‌های ساختمانی است. در این پروژه‌ها، مدیر پروژه از روز اول می‌تواند محصول نهایی را کاملا شناسایی و حتی شبیه‌سازی (Simulate) کند. جنس، ماهیت و همه ویژگی‌های محصول و کارهایی که در جهت رسیدن به این محصول باید انجام شود را به صورت کلی (Scope) می‌گویند.

              </p>
              <p>
                هدف اصلی در این پروژه‌ها انجام کار در محدوده Scope، Schedule و Cost است. این سه دانش را محدودیت‌های اصلی پروژه (Constraints) می‌نامند. معمولا مهم‌ترین محدودیت برای پروژه‌های پیش‌بینی‌پذیر کنترل بودجه و هزینه‌ها است.
              </p>

              <p>
                هدف اصلی در این پروژه‌ها انجام کار در محدوده Scope، Schedule و Cost است. این سه دانش را محدودیت‌های اصلی پروژه (Constraints) می‌نامند. معمولا مهم‌ترین محدودیت برای پروژه‌های پیش‌بینی‌پذیر کنترل بودجه و هزینه‌ها است.

                <ol>
                  <li>Initiating – راه‌اندازی
                  </li>
                  <li>Planning – برنامه‌ریزی
                  </li>
                  <li>Execution – اجرا
                  </li>
                  <li>Monitor and control – نظارت و کنترل
                  </li>
                  <li>Closing – اتمام
                  </li>
                </ol>
              </p>
              <p>
                مدیرانی که برای گواهینامه مدیریت حرفه ای پروژه (PMP) اقدام می‌کنند موظف هستند تا به خوبی ساختارهای مدیریتی را درک کنند و روندها را مطابق با نیاز پروژه بچینند.
              </p>
            </div>
          </div>

          <div id='P5' className='row'>
            <h3>پروژه‌های اجایل (Agile)</h3>
            <div className='col-12'>
              <p>
                این پروژه‌ها به توجه به ریسک و درجه Complexity به نحوی اجرا می‌شوند که کمترین میزان دوباره‌کاری را داشته باشند. در این پروژه‌ها هدف نهایی ایجاد ارزش و رضایتمندی مشتری است که در قالب کیفیت تعریف می‌شود. ساده‌ترین مثال این پروژه‌ها، پروژه ایجاد یک برنامه کامپیوتری است.

              </p>

            </div>
          </div>

          <div id='P6' className='row'>
            <h3>بهترین سرتیفیکیت های مدیریت پروژه در کانادا </h3>

            <div className='col-12'>
              <p>
                مدیریت پروژه سرتیفیکیت‌های مختلفی را شامل می‌شود

                <ol>
                  <li>
                    سرتیفیکیت مدیریت حرفه ای پروژه (PMP) برای مدیران با بیش از 3 سال سابقه
                  </li>
                  <li>
                    سرتیفیکیت کمک مدیر پروژه (CAPM) یا دستیار مدیر پروژه برای مدیرانی با سابقه کمتر از 3 سال
                  </li>
                  <li>
                    سرتیفیکیت Scrum Master برای مدیران پروژه در سازمان‌های Agile و مدیران رشته‌های IT و نرم افزار
                  </li>
                  <li>
                    سرتیفیکیت PMI-ACP برای مدیران پروژه در سازمان‌های Agile و مدیران رشته‌های IT و نرم افزار.
                  </li>
                  <li>سرتیفیکیت PMI-RMP برای مدیریت ریسک.
                  </li>

                </ol>
              </p>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-md-12 ps-0'>
              <iframe
                src='https://www.youtube.com/embed/bb5K2gQTZ0c'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div id='P7' className='row'>
            <h3>افرادی که می‌توانند برای گرفتن مدرک PMP اقدام کنند</h3>
            <div className='col-12'>
              <p>
                <ul>
                  <li>Project Managers – مدیران پروژه </li>
                  <li>فرآیندهArchitects – معماران </li>
                  <li>Project coordinators – هماهنگ‌کننده پروژه </li>
                  <li>Site supervisors – ناظران</li>
                  <li>Construction Managers – مدیران ساخت و ساز</li>
                  <li>IT Managers – مدیران IT </li>
                  <li>Directors – متصدیان</li>
                  <li>Project Engineers – مهندسان پروژه</li>
                  <li>Anyone who deals with projects – هرکسی که با پروژه درگیر باشد </li>
                </ul>
              </p>
            </div>
          </div>

          <div id='P8' className='row'>
            <h3>مزایای دریافت سرتیفیکیت PMP </h3>
            <div className='col-12'>
              <p>
                دریافت گواهینامه مدیریت حرفه ای پروژه (PMP) مزایای بسیاری برای شخص خواهد داشت. از جمله مزیت های مدرک PMP می‌توان به موارد زیر اشاره کرد:

                <ul>
                  <li>P ارتقاء رزومه حرفه‌ای و اعتبار فرد              </li>
                  <li>تایید تجربه حرفه‌ای و دانش فنی شخص در مدیریت پروژه توسط یک انستیتوی معتبر بین‌المللی               </li>
                  <li>افزایش حقوق (حدود 15 هزار دلار در سال در آمریکای شمالی)    </li>
                  <li> ایجاد فرصت‌های کاری و شبکه‌سازی بیشتر    </li>
                </ul>

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
            <h3>سوالات متداول</h3>

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
                     آیا شرکت در آزمون PMP مستلزم گذراندن دوره‌های آموزشی ویژه است؟
                  </button>
                </h2>
                <div id='Question1' className='accordion-collapse collapse show' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                    بله، یکی از پیش شرط‌های این آزمون، گذراندن 35 ساعت دوره آموزش ویژه PMP توسط داوطلب است.
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
                     گرفتن  مدرک PMPچه مزایایی دارد؟ 
                  </button>
                </h2>
                <div id='Question2' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <ul>
                      <li> ارتقاء رزومه حرفه ای و اسم شما </li>
                      <li>
                      تایید تجربه حرفه ای و دانش فنی شما در مدیریت پروژه توسط یک انستیتوی معتبر بین المللی 
                      </li>
                      <li>افزایش حقوق (حدود 15 هزار دلار در سال در آمریکای شمالی)   </li>
                      <li> ایجاد فرصت های کاری و شبکه سازی بیشتری                      </li>
                    </ul>
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
                       دریافت PMP چه مزایایی برای مهاجرین دارد؟ 
                  </button>
                </h2>
                <div id='Question3' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                    بسیاری از مهاجرین در بدو ورود به کانادا علاوه بر شوک فرهنگی با عدم استقبال نسبت به رزومه خود مواجه می‌شوند. در حقیقت این رزومه‌ها فاقد قسمتی است که اعتبار آن را از دیدگاه یک کارفرمای کانادایی تایید کند. در این حالت داشتن Designation های مناسب میتواند به کارفرما نشان دهد که صاحب رزومه: 

                    </p>
                    <ul>
                      <li>از بعد اخلاق حرفه ای تعهد لازم را دارد   </li>
                      <li>از تجربه حرفه ای لازم برخوردار است    </li>
                      <li>از نظر دانش فنی تایید شده است</li>
                    </ul>
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
                   برای آمادگی در آزمون CAPMبرای اون ۲۳ ساعت کلاس که خودشون هم ارائه میدن، راه دیگه ای هم هستش؟ مثلا کلاس فناوران رو برای آموزش ارائه بدیم 

                  </button>
                </h2>
                <div id='Question4' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <ul>
                      <li>
                       مورد ارزانتر هست مثلا Udemy و … که ضبط شده و مسائل خودش را داره

                      </li>
                      <li>
                      کلاس فناوران هست خیلی طولانی تره اما مسایل خیلی بیشتری را راجع به مدیریت پروژه یاد میگیری. تست داره و کاملا میارت تو فضای مدیریت پروژه
                      </li>
                      <li>
                      کلاس های PMI که به صورت bootcamp هست
                      </li>
                    </ul>
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
                  شیوه درخواست وقت اضافه در آزمون PMP؟
                  
                  </button>
                </h2>
                <div id='Question5' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>اگر بخواهید زمان بیشتری برای امتحان PMP  درخواست کنید باید مراحل زیر طی  شود: </p>
                    <p>
                    قبل از ثبت زمان آزمون  با آدرس customercare@pmi.org مکاتبه کنید و در متنی رسمی و محترمانه توضیح دهید که شماره ممبرشیپ (XYZ) هستید و به دلیل اینکه زبان اصلی شما فارسی است و امتحان به زبان مادری شما برگزار نمی‌شود تقاضای وقت اضافه دارید. حتما تاکید کنید که تازه متوجه این موضوع شده‌اید و دوستان دیگرتان هم 50% وقت اضافه گرفته اند. 
                    </p>
                    <p>
                    در انتظار پاسخ باشید، اگر جواب بدون چون و چرا مثبت بود چند گزینه به شما پیشنهاد می‌دهند . یکی از پیشنهادها را انتخاب کنید و در پروفایل خود تایم مورد نظر را ثبت کنید سپس نسبت به تعیین زمان آزمون اقدام کنید. در پایان در بخش توضیحات آزمون، زمان آزمون برای شما بجای 4 ساعت، 6 ساعت منظور خواهد شد.
                    </p>
                    <p>اگر پاسخشان منفی باشد، با شماره ای که اعلام می‌کنند تماس گرفته و مشکل خود را مطرح کنید.                     </p>
                    <p>
                    وقتی  ایمیل تمدید زمان آزمون را دریافت کردید، با خیال راحت زمان  امتحان را ثبت کنید. قبل از دریافت ایمیل تایید هیچ کاری انجام ندهید. 
                    </p>
                    <p>
                    خبر خوب اینکه تا ۲ ساعت زمان امتحان افزایش می‌یابد. فقط در نظر داشته باشید که زمان استراحت همان ۱۰ دقیقه باقی خواهد ماند. یعنی پس از 2 ساعت اول امتحان دسترسی به سوالات پاسخ داده شده مسدود خواهد شد. ( البته دو ساعت وقت اضافه اینجا می‌تواند مفید باشد)
                    </p>
                    <p>
                    گروه فنی و مهندسی فناوران با ارائه دوره آموزشی 35 ساعته ویژه آزمون PMP  توسط اساتید توانمند که هرکدام دارای چندین سال سابقه مدیریت پروژه هستند شما را برای موفقیت در این آزمون گام به گام همراهی می کند. 
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

export async function getStaticProps() {
  return { props: {} }
}

Index.guestGuard = true

export default Index
