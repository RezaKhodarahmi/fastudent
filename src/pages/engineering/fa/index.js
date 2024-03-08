import React, { useEffect, useState } from 'react'

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
      router.push('/engineering')
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
      <section className='FNV-SinglePage'>
        <div className='container'>
          <div className='row FNV-Header'>
            <h1>مهندسی در کانادا</h1>
          </div>

          <div className='row'>
            <div className='col-12'>
              <p>
                مهندسی در کانادا جزو مشاغل نظام‌مند (Regulated) است و برای فعالیت حرفه‌ای در این حوزه، متقاضی باید لایسنس مهندس حرفه‌ای (Professional engineer یا به اختصار .P.Eng) را دریافت کند.
              </p>
              <p>
                «فعالیت مهندسی در کانادا» شامل آنالیز، طراحی و محاسبات است. هر عملی که در این سه حوزه قرار نداشته باشد، جزو فعالیت مهندسی پذیرفته نمی‌شود.
              </p>
              <p>فهرست مطالب:</p>
              <ol>
                <li>
                  <a href='#P1'>افرادی که می‌توانند برای مهندسی در کانادا .P.Eng شوند</a>
                </li>
                <li>
                  <a href='#P2'>مزایای دریافت لایسنس .P.Eng</a>
                </li>
                <li>
                  <a href='#P3'>چگونه می‌توانیم در سازمان ادارات مهندسی کانادا ثبت نام کنیم؟</a>
                </li>
                <li>
                  <a href='#P4'>شرایط لازم برای گرفتن P.Eng </a>
                </li>
                <li>
                  <a href='#P5'>آزمون NPPE چیست؟</a>
                </li>
                <li>
                  <a href='#FAQ'>سوالات متداول</a>
                </li>
              </ol>
            </div>
          </div>

          <div className='row'>
            <h3>قبل از اینکه شروع کنید</h3>
            <div className='col-12'>
              <iframe
                src='https://www.youtube.com/embed/6OdumXuaE50?si=zdJ9yaeeUc3M2d5l'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div id='P1' className='row'>
            <h3>چه افرادی می‌توانند لایسنس مهندسی در کانادا (P.Eng) را دریافت کنند؟</h3>

            <div className='col-12'>
              <p>
                برای داشتن صلاحیت دریافت لایسنس مهندسی در کانادا، فعالیت‌های شما باید شامل موارد زیر باشد:
              </p>
              <ul>
                <li>آنالیز</li>
                <li>طراحی (Design)</li>
                <li>محاسبات (Calculation)</li>
              </ul>
              <p>
                اگر فعالیت‌هایی که انجام داده‌اید در این سه شاخه قرار ندارند، شما امکان دریافت لایسنس مهندسی را ندارید و تجربیات کاری شما مورد تایید ادارات مهندسی کانادا قرار نمی‌گیرد. برای مثال، موارد زیر را می‌توان به عنوان کیس‌هایی نام برد که نمی‌توانند لایسنس مهندسی دریافت کنند:
              </p>

              <ul>
                <li>Supervisory, Managerial and business roles</li>
                <li>Routine Maintenance roles</li>
                <li>Testing roles</li>
                <li>Construction or Assembly of work</li>
              </ul>
              <p>در نظر داشته باشید، اگر کارهای کارگاهی انجام داده‌اید، سرپرست کارگاه بوده‌اید، مدیریت پروژه انجام داده‌اید و به صورت کلی، فعالیت شما شامل «آنالیز، دیزاین و محاسبات» نبوده، توصیه می‌شود که نسبت به دریافت سرتیفیکیت PMP اقدام کنید. برای آشنایی بیشتر، از <a href="/project-management/fa">صفحه مدیریت پروژه</a> در کانادا بازدید کنید.</p>
            </div>
          </div>

          <div className='row FNV_BG_Telegram'>
            <a href='https://t.me/+D54o2CCh5Bo4NGI0' target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
              </svg>
              عضویت در گروه تلگرامی مهندسی</a>
          </div>

          <div id='P2' className='row'>
            <h3>گام‌های رسیدن به لایسنس مهندسی در کانادا (P.Eng)</h3>

            <div className='col-12'>
              <p>به صورت کلی، ‌استان‌های کانادا قوانین و مقررات خاص خود را برای ارائه لایسنس مهندسی (P.Eng) دارند، اما تقریبا روند کار در اکثر استان‌ها مشابه است. پیشنهاد می‌شود که در اولین گام، تمامی ویدیوهای مربوط به مهندسی در کانادا را در کانال یوتیوب فناوران مشاهده کنید و خود را به صورت کامل با قوانین استانی خود آشنا کنید. می‌توان مراحل را به صورت زیر خلاصه کرد:</p>
              <ol>
                <li>ثبت نام در سازمان مربوطه در استان محل سکونت و پر کردن فرم‌های مورد نیاز</li>
                <ul>
                  <li>در ابتدا، توصیه می‌شود که قوانین و مقررات و پیش‌نیازهای هر استان را مطالعه کنید و بفهمید که آیا واجد شرایط دریافت لایسنس هستید یا خیر. سایت‌های ادارات مهندسی در استان‌های مختلف:</li>
                  <ul>
                    <li><a href="https://www.egbc.ca/" target="_blank" rel="noopener">Engineers and Geoscientists British Columbia (EGBC) &ndash; British Columbia</a></li>
                    <li><a href="https://www.apega.ca/" target="_blank" rel="noopener">Association of Professional Engineers and Geoscientists of Alberta (APEGA) &ndash; Alberta</a></li>
                    <li><a href="https://www.apegs.ca/" target="_blank" rel="noopener">Association of Professional Engineers and Geoscientists of Saskatchewan (APEGS) &ndash; Saskatchewan</a></li>
                    <li><a href="https://www.engm.ca/" target="_blank" rel="noopener">Association of Professional Engineers and Geoscientists of Manitoba (APEGM) &ndash; Manitoba</a></li>
                    <li><a href="https://www.peo.on.ca/" target="_blank" rel="noopener">Professional Engineers Ontario (PEO) &ndash; Ontario</a></li>
                    <li><a href="https://www.oiq.qc.ca/" target="_blank" rel="noopener">Ordre des ing&eacute;nieurs du Qu&eacute;bec (OIQ) &ndash; Quebec</a></li>
                    <li><a href="https://www.apegnb.com/" target="_blank" rel="noopener">Professional Engineers and Geoscientists of New Brunswick (PEGNB) &ndash; New Brunswick</a></li>
                    <li><a href="https://www.pegnl.ca/" target="_blank" rel="noopener">Association of Professional Engineers and Geoscientists of Newfoundland and Labrador (PEGNL) &ndash; Newfoundland and Labrador</a></li>
                    <li><a href="https://engineerspei.com/" target="_blank" rel="noopener">Association of Professional Engineers of Prince Edward Island (Engineers PEI) &ndash; Prince Edward Island</a></li>
                    <li><a href="https://engineersnovascotia.ca/" target="_blank" rel="noopener">Engineers Nova Scotia (Engineers NS) &ndash; Nova Scotia</a></li>
                    <il><a href="https://www.apegy.ca/" target="_blank" rel="noopener">Association of Professional Engineers and Geoscientists of Yukon (APEGY) &ndash; Yukon</a></il>
                    <li><a href="https://www.napeg.nt.ca/" target="_blank" rel="noopener">Northwest Territories and Nunavut Association of Professional Engineers and Geoscientists (NAPEG) &ndash; Northwest Territories and Nunavut</a></li>
                  </ul>
                </ul>
                <li>تکمیل پیش‌نیازهای مهندسی هر استان:
                  <p>پیش‌نیازهای مهندسی در استان‌های مختلف ممکن است متفاوت باشند. می‌توان پیش‌نیازهای مهندسی را به شکل زیر خلاصه کرد (توصیه می‌شود که حتما سایت سازمان مهندسی استان خود را برای این مورد به دقت بررسی کنید):</p>
                  <ul>
                    <li>پیش‌نیاز آکادمیک:
                      <p>مدرک لیسانس (4 ساله) در یکی از رشته‌های مهندسی؛ مدارک بالاتر از لیسانس در صورتی قابل ارائه هستند که هم راستا با لیسانس باشند. برای ارسال مدارک تحصیلی خود به سازمان‌های مهندسی،‌دو راهکار وجود دارد:</p>
                      <ul>
                        <li>مدارک ترجمه شده باید از دانشگاه شما به صورت مهر و موم شده (Sealed) مستقیم به اداره مهندسی استان فرستاده شود.</li>
                        <li>گر مدارک تحصیلی خود را به صورت ترجمه شده دارید، این مدارک باید به تایید یک مهندس دارای لایسنس P.Eng برسد و سپس به اداره مهندسی استانتان فرستاده شود. فناوران برای اعضای VIP مجموعه، تایید مدارک تحصیلی را به صورت رایگان انجام می‌دهد. در صورت نیاز به تایید، مطابق با این الگو مدارک خود را به همراه رسید <a href='/membership/checkout/fa'><strong>عضویت VIP</strong></a> برای ما ارسال کنید.</li>
                        <li>برای ارائه مدارک تحصیلی، باید شرح دروس (Course Description) خود را نیز ارائه کنید.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div id='P3' className='row'>
            <h3>دانش‌آموزان این دوره</h3>

            <div className='col-12 col-md-3 ps-0'>
              <iframe
                src='https://www.youtube.com/embed/BVqmL9g3_eA'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>

            <div className='col-12 col-md-3'>
              <iframe
                src='https://www.youtube.com/embed/BVqmL9g3_eA'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>

            <div className='col-12 col-md-3'>
              <iframe
                src='https://www.youtube.com/embed/BVqmL9g3_eA'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>

            <div className='col-12 col-md-3 pe-0'>
              <iframe
                src='https://www.youtube.com/embed/BVqmL9g3_eA'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div id='P4' className='row'>
            <h3>چگونگی ثبت نام در سازمان ادارات مهندسی کانادا</h3>

            <div className='col-12'>
              <ul>
                <li>توصیه فناوران به همه داوطلبان .P.Eng این است که در مرحله اول به طور مفصل درباره مهندسی در کانادا اطلاعات کسب کنند.</li>
                <li>پر کردن فرم‌های اپلیکیشن اداره مهندسی استان محل سکونت
                  <p>تمام فرمها آپدیت شده در هر استان قرار داده شده است.</p>
                  <ul>
                    <li><a href='https://www.peo.on.ca/'>مهندسی در استان آنتاریو</a></li>
                    <li><a href='https://engineersnovascotia.ca/'>مهندسی در استان نواسکوشیا</a></li>
                    <li><a href='https://www.apega.ca/'>مهندسی در استان آلبرتا</a></li>
                    <li><a href='https://www.egbc.ca/'>مهندسی در استان بریتیش کلمبیا</a></li>
                  </ul>
                </li>
                <li>ارسال مدارک تحصیلی, برای این کار دو راه وجود دارد:
                  <ol>
                    <li>مدارک ترجمه شده باید از دانشگاه شما به صورت مهر و موم شده (Sealed) مستقیم به اداره مهندسی استان فرستاده شود.</li>
                    <li>اگر مدارک تحصیلی خود را به صورت ترجمه شده دارید این مدارک باید به تایید یک مهندس .P.Eng برسد و سپس به اداره مهندسی استانتان فرستاده شود.
                      <ul>
                        <li>اگر برای تایید مدارک ترجمه شده خود برای کانادا مهندس دارای P.Eng نمی‌شناسید، فناوران می‌تواند این سرویس را به شما ارائه دهد. لطفا حتما statement های مورد نظر خود را هم به زبان فارسی و هم انگلیسی به مدارک خود اضافه (مانند زیر) و برای ما به آدرس info@fanavaran.ca  بفرستید . این خدمات فقط برای اعضای فناوران در دردسترس میباشد. (برای عضویت در فناوران کلیک کنید)
                          <p className='text-start text-justify my-2'>
                            Please note that PEO only accepts translations done by a certified translator of ATIO or by a Canadian P.Eng. fluent in both languages.  The P.Eng. must state that they are fluent in both languages and that this is an accurate translation, provide their membership number and sign and date each page. We will require your transcript in the original language. We need your bachelor’s and master’s transcript of marks in the original language, not the degree certificates.  Also, the P.Eng. only certified your bachelor’s degree certificate.  You need the master’s degree translated as well.And we will need your resume in a PDF document
                          </p>
                        </li>
                        <li>اگر میخواهید مدارک مهندسی شما توسط فناوران مورد تایید قرار بگیرد لطفا طبق این الگو اقدام بفرمایید.</li>
                        <li>ممکن است برخی افراد پیش از مرحله دریافت گواهی EIT ملزم به گذراندن دوره‌های تکنیکال باشند، این دوره‌ها در کانادا به زبان انگلیسی برگزار می‌شوند و ممکن است افراد نتوانند در آزمون‌های نهایی به موفقیت دست پیدا کنند. فناوران با استفاده از اساتید مجرب و دانشگاهی، این دوره‌های تکنیکال را به صورت خصوصی و نیمه خصوصی برای شما برگزار خواهد کرد.(برای ثبت نام کلیک کنید)</li>
                      </ul>
                      <li>توجه داشته باشید که باید شرح دروس خود را نیز ارائه کنید و در صورت نیاز جدول Grading Rubric را جهت تطبیق نمرات داشته باشید.
                        <p>چند نمونه دیسکریپشن رشته های مهندسی مختلف</p>
                        <ul>
                          <li><a href='https://fanavaran.ca/wp-content/uploads/2022/05/Civil-Engineering.pdf'>Civil Engineer</a></li>
                          <li><a href='https://fanavaran.ca/wp-content/uploads/2022/05/Electrical-Engineering.pdf'>Electrical Engineering</a></li>
                          <li><a href='https://fanavaran.ca/wp-content/uploads/2022/05/Mechanical-eng-University-of-Tehran.pdf'>Mechanical Eng - 1</a></li>
                          <li><a href='https://fanavaran.ca/wp-content/uploads/2022/09/course.doc'>Mechanical Eng - 2</a></li>
                          <li><a href='https://fanavaran.ca/wp-content/uploads/2022/05/Civil-and-Environmental-Engineering-Babol.pdf'>Civil and Environmental Engineering</a></li>
                          <li><a href='https://fanavaran.ca/wp-content/uploads/2022/09/PEO-FAQ-for-Experience-Documentation.pdf'>Irrigation Engineering</a></li>
                        </ul>
                      </li>
                      <li>ممکن است نیاز به جدول Grading Rubric نیز داشته باشید که از طریق این لینک می‌توانید دریافت کنید.
                        <ul>
                          <li><b>EIT و آزمون‌های تکنیکال:</b> در بعضی از استان‌های کانادا که نیاز به سابقه کار کانادایی وجود دارد، متقاضیان می‌توانند نسبت به دریافت دزیگنیشن EIT اقدام کنند. پس از ثبت اپلیکیشن، به صورت عمومی متقاضیان ممکن است ملزم به گذراندن 4 کورس تکنیکال شوند. با نگارش صحیح تجربیات کاری، به احتمال زیاد آزمون‌های تکنیکال را waive می‌کنید. توجه داشته باشید، در صورتی که لیسانس مهندسی شما با سوابق کاری همراستا نباشد، به احتمال زیاد بیشتر از 18 آزمون تکنیکال به شما داده می‌شود.</li>
                          <li><b>نگارش تجربیات کاری (سوابق مهندسی):</b> نگارش سوابق مهندسی مطابق با استانداردهای سازمان‌های مهندسی و استفاده از ترمینولوژی‌های دقیق و رفرال‌های معتبر اهمیت زیادی در پرونده شما دارد. سوابق کاری شما باید مطابق با تعریف «مهندسی در کانادا» باشد و از نظر فاکتورهای مختلف معقول و قابل‌پذیرش باشد. برای اطلاع از نحوه نگارش سوابق کاری، توصیه می‌کنیم ورکشاپ تخصصی نگارش تجربیات مهندسی را مشاهده کنید.</li>
                        </ul>
                      </li>
                    </li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
              <iframe
                src='https://www.youtube.com/embed/l6oN39V43Ng?si=XVzu839CBRXnpavk'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>
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
                    1. آيا تاييد سازمان WES (World Education Services) براي تمام استانهاي كانادا لازم است؟
                  </button>
                </h2>
                <div id='Question1' className='accordion-collapse collapse show' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                    پاسخ: خير، فقط در بعضي از استانهاي كانادا داشتن تاييديه از سازمان WES الزامي است (استانهاي ساسكاچوان، ….) و اين سازمان مدارک اصلی شما را به هیچ ارگانی ارسال نمي كند و فقط تاییدیه مدارك را ارسال مي نمايد.
                    </p>
                    <p>
                    مثلاً نسخه ریزنمراتی که قبلا ارسال نموده ايد در سازمان WES باقي مي ماند و برای موارد ديگر بايستي نسخه جدیدی تهيه نماييد.
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
                    2. آيا مي توان براي استاني غير از استان محل سكونت فعلي براي .P.Eng اقدام نمود؟
                  </button>
                </h2>
                <div id='Question2' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>پاسخ: بله</div>
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
                    3. اگر لايسنس .P.Eng را در استان داشته باشيم ميتوانيم براي Peng شدن در استان ديگري اقدام نماييم؟
                  </button>
                </h2>
                <div id='Question3' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                    پاسخ: بله، در صورتيكه هزينه عضويت سالانه هر دو استان را پرداخت نماييد امكان پذير است.
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
                    4. آيا بايستي Experience Record را در مرحله اول ارسال نمود؟
                  </button>
                </h2>
                <div id='Question4' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                    پاسخ: خير، الزامي نيست. اما بهتر است بعد از ارسال سري اول مدارك، Experience Record را تهيه و ارسال نماييد. لازم بذكر است، اين مدرك پس از ارسال در صورت نياز قابل تغيير مي باشد.
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
                    5. آيا لازم است كه دروس عمومي را در شرح دروس ارائه نماييم؟
                  </button>
                </h2>
                <div id='Question5' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                    پاسخ: خير، لازم نيست.
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
