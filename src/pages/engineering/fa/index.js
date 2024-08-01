import React, { useEffect, useState } from 'react'
import feather from 'feather-icons'

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
import Link from 'next/link'

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
    if (lng === 'en') {
      router.push('/engineering')
    }
  }, [router])

  useEffect(() => {
    dispatch(fetchCourseData())
  }, [dispatch])

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

  // Feathericon
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof feather !== 'undefined' && feather !== null) {
        feather.replace()
      }
    }, 1000) // 1 second delay

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <section className='FNV-SinglePage FNV-SinglePage-Header'>
        <div className='container'>
          <div className='row FNV-Header'>
            <div className='col-12'>
              <h1>فعالیت مهندسی در کانادا</h1>
            </div>

            <div className='col-12 col-md-6'>
              <span>پیش از هر اقدامی، این ویدئو را ببینید</span>
              <iframe
                src='https://www.youtube.com/embed/6OdumXuaE50?si=2g6M4dsBeCvTCzKq'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>

            <div className='col-12 col-md-6'>
              <p>
                مهندسی در کانادا از دسته مشاغل نظام‌مند (Regulated) است و برای فعالیت حرفه‌ای در این حوزه، متقاضی باید
                لایسنس مهندس حرفه‌ای (Professional engineer یا به اختصار .P.Eng) را دریافت کند. فعالیت مهندسی در کانادا،
                شامل آنالیز، طراحی و محاسبات است. هر عملی که در این سه حوزه قرار نداشته باشد، جزو فعالیت مهندسی پذیرفته
                نمی‌شود.
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
                  <Link href='#P1'>چگونه می‌توان لایسنس مهندسی حرفه‌ای کانادا یا .P.Eng دریافت کرد؟</Link>
                </li>
                <li>
                  <Link href='#P2'>گام‌های دریافت لایسنس مهندسی حرفه‌ای کانادا یا .P.Eng چیست؟</Link>
                </li>
                <li>
                  <Link href='#P3'>چگونه می‌توانیم در سازمان اداری کانادا ثبت‌نام کنیم؟</Link>
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
            <h3>افرادی که می‌توانند لایسنس مهندسی در کانادا (P.Eng) را دریافت کنند</h3>

            <div className='col-12'>
              <p>
                قطعا، همه افراد نمی&zwnj;توانند برای این لایسنس اقدام کنند. درست مانند هر شغل دیگری، باید شرایطی را
                داشته باشید تا بتوانید لایسنس مهندسی در کانادا را ار آن خود کنید. برای داشتن صلاحیت دریافت لایسنس مهندسی
                در کانادا، فعالیت&zwnj;های شما باید شامل موارد زیر باشد:
              </p>
              <ul>
                <li>آنالیز</li>
                <li>طراحی (Design)</li>
                <li>محاسبات (Calculation)</li>
              </ul>
              <p>
                اگر فعالیت&zwnj;هایی که انجام داده&zwnj;اید در این سه شاخه قرار ندارند، شما امکان دریافت لایسنس مهندسی
                را ندارید و تجربیات کاری شما مورد تایید ادارات مهندسی کانادا قرار نمی&zwnj;گیرد. برای مثال، موارد زیر را
                می&zwnj;توان به عنوان کیس&zwnj;هایی نام برد که نمی&zwnj;توانند لایسنس مهندسی دریافت کنند:
              </p>
              <ul>
                <li>Supervisory, Managerial and business roles</li>
                <li>Routine Maintenance roles</li>
                <li>Testing roles</li>
                <li>Construction or Assembly of work</li>
              </ul>
            </div>
          </div>

          <Link href='/project-management'>
            <div className='row FNV-CTA'>
              <div className='col-12 col-md-8'>
                <h4>
                  در نظر داشته باشید، اگر کار کارگاهی انجام می‌دهید و سرپرست کارگاه‌ هستید، فعالیت شما در دسته امور
                  مربوط به مدیریت پروژه قرار می‌گیرد. برای دریافت اطلاعات بیشتر به صفحه مدیریت پروژه در کانادا مراجعه
                  کنید.
                </h4>
              </div>
              <div className='col-6 col-md-4'>
                <img src='/img/landings/project-manager.png' className='img-fluid' alt='Project Manager' />
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P2'>
        <div className='container'>
          <div className='row'>
            <h3>گام‌های دریافت لایسنس مهندسی حرفه‌ای کانادا یا .P.Eng چیست؟</h3>

            <div className='col-12'>
              <p>
                به صورت کلی، &zwnj;استان&zwnj;های کانادا قوانین و مقررات خاص خود را برای ارائه لایسنس مهندسی (P.Eng)
                دارند، اما تقریبا روند کار در اکثر استان&zwnj;ها مشابه است. پیشنهاد می&zwnj;شود که در اولین گام، تمامی
                ویدیوهای مربوط به مهندسی در کانادا را در کانال یوتیوب فناوران مشاهده کرده و با قوانین استان مورد نظر
                خود، آشنا شوید. مراحل دریافت لایسنس مهندسی در کانادا را می&zwnj;توان به صورت زیر، خلاصه کرد:
              </p>
              <ol>
                <li>
                  ثبت&zwnj;نام در سازمان مربوطه در استان محل سکونت و پر کردن فرم&zwnj;های مورد نیاز
                  <br />
                  در ابتدا، توصیه می&zwnj;شود که قوانین و مقررات و پیش&zwnj;نیازهای هر استان را مطالعه کنید. با اینکه
                  کار متوجه می&zwnj;شوید که آیا واجد شرایط دریافت لایسنس هستید یا خیر. سایت&zwnj;های ادارات مهندسی در
                  استان&zwnj;های مختلف:
                  <ul>
                    <li>
                      <Link href='https://www.egbc.ca/'>
                        Engineers and Geoscientists British Columbia (EGBC) &ndash; British Columbia
                      </Link>
                    </li>
                    <li>
                      <Link href='https://www.apega.ca/'>
                        Association of Professional Engineers and Geoscientists of Alberta (APEGA) &ndash; Alberta
                      </Link>
                    </li>
                    <li>
                      <Link href='https://www.apegs.ca/'>
                        Association of Professional Engineers and Geoscientists of Saskatchewan (APEGS) &ndash;
                        Saskatchewan
                      </Link>
                    </li>
                    <li>
                      <Link href='https://www.engm.ca/'>
                        Association of Professional Engineers and Geoscientists of Manitoba (APEGM) &ndash; Manitoba
                      </Link>
                    </li>
                    <li>
                      <Link href='https://www.peo.on.ca/'>Professional Engineers Ontario (PEO) &ndash; Ontario</Link>
                    </li>
                    <li>
                      <Link href='https://www.oiq.qc.ca/'>
                        Ordre des ing&eacute;nieurs du Qu&eacute;bec (OIQ) &ndash; Quebec
                      </Link>
                    </li>
                    <li>
                      <Link href='https://www.apegnb.com/'>
                        Professional Engineers and Geoscientists of New Brunswick (PEGNB) &ndash; New Brunswick
                      </Link>
                    </li>
                    <li>
                      <Link href='https://www.pegnl.ca/'>
                        Association of Professional Engineers and Geoscientists of Newfoundland and Labrador (PEGNL)
                        &ndash; Newfoundland and Labrador
                      </Link>
                    </li>
                    <li>
                      <Link href='https://engineerspei.com/'>
                        Association of Professional Engineers of Prince Edward Island (Engineers PEI) &ndash; Prince
                        Edward Island
                      </Link>
                    </li>
                    <li>
                      <Link href='https://engineersnovascotia.ca/'>
                        Engineers Nova Scotia (Engineers NS) &ndash; Nova Scotia
                      </Link>
                    </li>
                    <li>
                      <Link href='https://www.apegy.ca/'>
                        Association of Professional Engineers and Geoscientists of Yukon (APEGY) &ndash; Yukon
                      </Link>
                    </li>
                    <li>
                      <Link href='https://www.napeg.nt.ca/'>
                        Northwest Territories and Nunavut Association of Professional Engineers and Geoscientists
                        (NAPEG) &ndash; Northwest Territories and Nunavut
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  تکمیل پیش&zwnj;نیازهای مهندسی هر استان
                  <br />
                  پیش&zwnj;نیازهای مهندسی در استان&zwnj;های مختلف ممکن است متفاوت باشند. می&zwnj;توان پیش&zwnj;نیازهای
                  مهندسی را به شکل زیر خلاصه کرد (توصیه می&zwnj;شود که حتما سایت سازمان مهندسی استان خود را برای این
                  مورد به دقت بررسی کنید):
                  <ul>
                    <li>
                      پیش&zwnj;نیاز آکادمیک: مدرک لیسانس (4 ساله) در یکی از رشته&zwnj;های مهندسی؛ مدارک بالاتر از لیسانس
                      در صورتی قابل ارائه هستند که هم راستا با لیسانس باشند. برای ارسال مدارک تحصیلی خود به
                      سازمان&zwnj;های مهندسی،&zwnj;دو راهکار وجود دارد:
                      <ul>
                        <li>
                          ارائه مدارک مهر و موم: مدارک ترجمه شده باید از دانشگاه شما به صورت مهر و موم شده (Sealed)
                          مستقیم به اداره مهندسی استان فرستاده شود.
                        </li>
                        <li>
                          تایید یک مهندس دارای لایسنس P.Eng: اگر مدارک تحصیلی خود را به صورت ترجمه شده ارائه
                          می&zwnj;دهید، این مدارک باید به تایید یک مهندس دارای لایسنس P.Eng برسند.پس از آن، باید به
                          اداره مهندسی استانتان فرستاده شوند. فناوران برای اعضای VIP مجموعه، تایید مدارک تحصیلی را به
                          صورت رایگان انجام می&zwnj;دهد. در صورت نیاز به تایید، مطابق با{' '}
                          <Link href='https://fanavaran.ca/wp-content/uploads/2022/07/2746566a-c838-4feb-8204-a0bf3ab04f66.pdf'>
                            این الگو
                          </Link>{' '}
                          مدارک خود را به همراه رسید{' '}
                          <Link href='https://fanavaran.ca/membership-account/membership-levels/'>عضویت VIP</Link> برای
                          ما ارسال کنید.
                        </li>
                        <li>
                          &nbsp;برای ارائه مدارک تحصیلی، باید شرح دروس (Course Description) خود را نیز ارائه کنید.
                          <ul>
                            <li>
                              چند مورد از کورس دیسکریپشن رشته&zwnj;های مختلف:
                              <ul>
                                <li>
                                  <p>
                                    <Link href='https://fanavaran.ca/courses/nppe-exam-preparation/'>
                                      دوره آمادگی برای آزمون NPPE
                                    </Link>
                                  </p>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Link href='https://t.me/+D54o2CCh5Bo4NGI0' target='_blank' rel='noreferrer' className='FNV-TelegramBG'>
        <div className='container'>
          <div className='row'>
            <div className='col-10 col-md-8'>
              <h4>به گروه تلگرامی مهندسی در کانادا بپیوندید</h4>
            </div>
            <div className='col-2 col-md-4'>
              <i data-feather='send'></i>
            </div>
          </div>
        </div>
      </Link>

      <section className='FNV-SinglePage FNV-GrayBG' id='P3'>
        <div className='container'>
          <div className='row'>
            <h3>چگونگی ثبت‌نام در سازمان ادارات مهندسی کانادا</h3>

            <div className='col-12'>
              <p>
                اگر قصد دارید مدارک و سوابق خود را برای سازمان مهندسی استان خود ارسال کنید، ابتدا باید از تمامی فرایند
                آن آگاه شوید و سپس با اجرای دقیق مراحل آن اقدام به ارسال مدارک کنید.
              </p>
              <p>مشاهده وبینار .Road to P.Eng در یوتیوب فناوران ((لینک این رو باید بذاریم))</p>
              <ol>
                <li>
                  توصیه فناوران به همه داوطلبان .P.Eng این است که در مرحله اول به طور مفصل درباره مهندسی در کانادا
                  اطلاعات کسب کنند.
                </li>
                <li>
                  پر کردن فرم&zwnj;های اپلیکیشن اداره مهندسی استان محل سکونت
                  <br />
                  تمام فرم&zwnj;های آپدیت شده در هر استان قرار داده شده است.
                </li>
                <ul>
                  <li>
                    <Link href='https://www.peo.on.ca/'>مهندسی در استان انتاریو</Link>
                  </li>
                  <li>
                    <Link href='https://engineersnovascotia.ca/'>مهندسی استان نواسکوشیا</Link>
                  </li>
                  <li>
                    <Link href='https://www.apega.ca/'>مهندسی استان آلبرتا</Link>
                  </li>
                  <li>
                    <Link href='https://www.egbc.ca/'>مهندسی استان بریتیش کلمبیا</Link>
                  </li>
                </ul>
                <li>برای ارسال مدارک دو راه کلی وجود دارد:</li>
                <ul>
                  <li>
                    مدارک ترجمه شده باید از دانشگاه شما به صورت مهر و موم شده (Sealed) مستقیم به اداره مهندسی استان
                    فرستاده شود.
                  </li>
                  <li>
                    اگر مدارک تحصیلی خود را به صورت ترجمه شده دارید این مدارک باید به تایید یک مهندس .P.Eng برسد و سپس
                    به اداره مهندسی استانتان فرستاده شود.
                  </li>
                  <ul>
                    <li>
                      اگر برای تایید مدارک ترجمه شده خود برای کانادا، مهندس دارای P.Eng نمی&zwnj;شناسید، فناوران
                      می&zwnj;تواند این سرویس را به شما ارائه دهد. لطفا حتما statementهای مورد نظر خود را هم به زبان
                      فارسی و هم انگلیسی، به مدارک خود اضافه (مانند زیر) و برای آدرس info@fanavaran.ca&nbsp; بفرستید.
                      این خدمات فقط برای اعضای فناوران در دردسترس است. (برای{' '}
                      <Link href='https://fanavaran.ca/membership-account/membership-levels/'>عضویت در فناوران</Link>{' '}
                      کلیک کنید)
                    </li>
                    <li>
                      اگر می&zwnj;خواهید مدارک مهندسی شما توسط فناوران مورد تایید قرار بگیرد لطفا طبق{' '}
                      <Link href='https://fanavaran.ca/wp-content/uploads/2022/07/2746566a-c838-4feb-8204-a0bf3ab04f66.pdf'>
                        این الگو
                      </Link>{' '}
                      اقدام فرمایید.
                    </li>
                    <li>
                      ممکن است برخی افراد پیش از مرحله دریافت گواهی EIT ملزم به گذراندن دوره&zwnj;های تکنیکال باشند. این
                      دوره&zwnj;ها در کانادا، به زبان انگلیسی برگزار می&zwnj;شوند و ممکن است افراد نتوانند در
                      آزمون&zwnj;های نهایی به موفقیت دست پیدا کنند. فناوران با استفاده از اساتید مجرب و دانشگاهی، این{' '}
                      <Link href='https://fanavaran.ca/p-eng-courses/'>دوره&zwnj;های تکنیکال</Link> را به صورت خصوصی و
                      نیمه خصوصی برای شما برگزار خواهد کرد.(
                      <Link href='https://fanavaran.ca/p-eng-courses/'>برای ثبت نام کلیک کنید</Link>)
                    </li>
                  </ul>
                </ul>
                <li>
                  توجه داشته باشید که باید شرح دروس خود را نیز ارائه کنید و در صورت نیاز{' '}
                  <Link href='https://fanavaran.ca/wp-content/uploads/2022/06/Grading-Rubric-Polytechnic.pdf'>
                    جدول Grading Rubric
                  </Link>{' '}
                  را جهت تطبیق نمرات داشته باشید.
                  <br />
                  چند نمونه دیسکریپشن رشته&zwnj;های مهندسی مختلف:
                  <ul>
                    <li>
                      <Link href='https://fanavaran.ca/wp-content/uploads/2022/05/Civil-Engineering.pdf'>
                        Civil Engineer
                      </Link>
                    </li>
                    <li>
                      <Link href='https://fanavaran.ca/wp-content/uploads/2022/05/Electrical-Engineering.pdf'>
                        Electrical Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href='https://fanavaran.ca/wp-content/uploads/2022/05/Mechanical-eng-University-of-Tehran.pdf'>
                        1 - Mechanical eng
                      </Link>
                    </li>
                    <li>
                      <Link href='https://fanavaran.ca/wp-content/uploads/2022/09/course.doc'>2 - Mechanical eng</Link>
                    </li>
                    <li>
                      <Link href='https://fanavaran.ca/wp-content/uploads/2022/05/Civil-and-Environmental-Engineering-Babol.pdf'>
                        Civil and Environmental Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href='https://fanavaran.ca/wp-content/uploads/2022/09/PEO-FAQ-for-Experience-Documentation.pdf'>
                        Irrigation Engineering
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  ممکن است نیاز به جدول Grading Rubric نیز داشته باشید که از طریق{' '}
                  <Link href='https://fanavaran.ca/wp-content/uploads/2022/06/Grading-Rubric-Polytechnic.pdf'>
                    این لینک
                  </Link>{' '}
                  می&zwnj;توانید دریافت کنید.
                  <ul>
                    <li>
                      EIT و آزمون&zwnj;های تکنیکال: در بعضی از استان&zwnj;های کانادا که نیاز به سابقه کار کانادایی وجود
                      دارد، متقاضیان می&zwnj;توانند نسبت به دریافت EIT designation اقدام کنند. پس از ثبت اپلیکیشن،
                      متقاضیان ملزم به گذراندن 4 کورس تکنیکال می&zwnj;شوند. توجه داشته باشید، در صورتی که لیسانس مهندسی
                      شما با سوابق کاری همراستا نباشد، به احتمال زیاد بیشتر از 18 آزمون تکنیکال به شما داده می&zwnj;شود.
                    </li>
                    <li>
                      آزمون تکنیکال شامل چهار آزمون اصلی است. دو امتحان از گروه A از هر رشته مهندسی، یک امتحان از گروه B
                      از هر رشته مهندسی و یک امتحان از مطالعات تکمیلی (CS).
                    </li>
                    <li>
                      به این دلیل که هیچ&zwnj;یک از دانشگاه&zwnj;های ایران در لیست CEAB قرار نمی&zwnj;گیرند، تمامی
                      فارغ&zwnj;التحصیل&zwnj;ها باید disciplines of assessment مربوط به Non-CEAB Graduates هر استان را
                      بررسی کرده، رشته تحصیلی خود را پیدا کنند و سپس اطلاعات و داده&zwnj;های مربوطه را مطالعه کنند.
                    </li>
                    <li>
                      نگارش تجربیات کاری (سوابق مهندسی): نگارش سوابق مهندسی مطابق با استانداردهای سازمان&zwnj;های مهندسی
                      و استفاده از ترمینولوژی&zwnj;های دقیق و رفرال&zwnj;های معتبر اهمیت زیادی در پرونده شما دارد. سوابق
                      کاری شما باید مطابق با تعریف &laquo;مهندسی در کانادا&raquo; باشد و از نظر فاکتورهای مختلف معقول
                      باشد. برای اطلاع از نحوه نگارش سوابق کاری، توصیه می&zwnj;کنیم ورکشاپ تخصصی نگارش تجربیات مهندسی را
                      مشاهده کنید.
                    </li>
                  </ul>
                </li>
              </ol>
              <p>نحوه صحیح نوشتن تجربیات مهندسی در کانادا ((لینک باید گذاشته شود))</p>
              <ul>
                <li>
                  پاس کردن آزمون NPPE: آزمون NPPE یک آزمون دشوار در رابطه با حقوق و اخلاق مهندسی است. این آزمون مربوط به
                  دو کتاب Ethics و Law خواهد بود که مجموعا بیشتر از 1000 صفحه است و برای دریافت لایسنس رشته&zwnj;های
                  مهندسی باید از سد این آزمون عبور کرد. برای کسب اطلاعات بیشتر، صفحه{' '}
                  <Link href='https://fanavaran.ca/what-is-the-nppe-test-and-what-are-its-points/'>آزمون NPPE</Link> را
                  مطالعه کنید.
                </li>
                <li>
                  مهارت زبان انگلیسی: زبان انگلیسی مهم&zwnj;ترین فاکتوری است که نه تنها برای رشته&zwnj;های مهندسی، بلکه
                  برای تمامی مشاغل کانادا ضروری است. اگر سطح زبان شما از CLB 10 پایین&zwnj;تر است، شانس شما برای موفقیت
                  در حوزه شغلی کم خواهد بود. توصیه می&zwnj;شود که حتما نسبت به تقویت دانش زبان انگلیسی خود به صورت مستمر
                  برای حداقل یک سال برنامه&zwnj;ریزی کنید.
                </li>
                <li>
                  ارائه رزومه: فاکتور مهمی که به عنوان یک مهندسی جویای کار باید به آن توجه داشته باشید، نوشتن درست رزومه
                  است. فناوران در جهت کمک هرچه بیشتر به کامیونیتی ایرانی مقیم کانادا، مجموعه&zwnj;ای از دوره&zwnj;ها،
                  وبینارها و کارگاه&zwnj;های ویژه رزومه&zwnj;نویسی و کاریابی را برگزار کرده است. در صفحه{' '}
                  <Link href='https://fanavaran.ca/job-searching/'>جوینده شغل</Link>، می&zwnj;توانید اطلاعات جامعی در
                  این زمینه به دست بیاورید. برای دانلود تمپلیت رزومه مهندسی از{' '}
                  <Link href='https://fanavaran.ca/wp-content/uploads/2022/08/Resume-temp.docx'>این لینک</Link> استفاده
                  کنید.
                </li>
              </ul>
              <p>
                پس از ارائه اپلیکیشن، در استان&zwnj;هایی مانند انتاریو که تقاضا برای متخصصان رشته&zwnj;های مهندسی بیشتر
                است، سازمان&zwnj;های مهندسی موظف هستند تا وضعیت اپلیکیشن&zwnj;هایی که کامل هستند را ظرف 6 ماه تعیین
                تکلیف کنند.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P4'>
        <div className='container'>
          <div className='row'>
            <h3>فناوران چه کمکی می‌کند؟</h3>

            <div className='col-12'>
              <p>
                فناوران برای کمک هرچه بیشتر به کامیونیتی مهندسان ایران و فارسی زبان، خدمات مختلفی را فراهم کرده است. در
                این راستا به شما کمک می&zwnj;کند تا بتوانید برای آزمون NPPE آماده شده و همچنین در نگارش صحیح و استاندارد
                سوابق مهندسی همراه شما خواهد بود.
              </p>
              <ul>
                <li>
                  آمادگی آزمون NPPE: همانطور که گفته شد، آزمون NPPE یک آزمون دشوار در رابطه با حقوق و اخلاق مهندسی است.
                  موسسه فناوران، دوره آمادگی آزمون NPPE را به زبان فارسی و با ترمینولوژی انگلیسی برگزار می&zwnj;کند. هدف
                  از تدریس به زبان فارسی درک بیشتر و بهتر مطالب است. در این دوره 11 جلسه کتاب&zwnj;های حقوق و اخلاق
                  مهندسی تدریس می&zwnj;شوند و 11 جلسه تست تخصصی برگزار می&zwnj;شود. علاوه بر این، بیشتر از یک هزار تست
                  تخصصی در پنل کاربری وجود دارد که شرکت&zwnj;کنندگان می&zwnj;توانند در شرایط امتحانی تمرین کنند و سوالات
                  خود را از مدرس دوره بپرسند.
                </li>
              </ul>
              <ul>
                <li>
                  تشکیل پرونده در ادارات مهندسی و نگارش سوابق کاری: نگارش صحیح و استاندارد سوابق مهندسی اهمیت زیادی
                  دارد. در صورتی که سوابق مهندسی خود را به صورت استاندارد و با ترمینولوژی&zwnj;های دقیق ارائه کنید،
                  می&zwnj;تواند آزمون&zwnj;های تکنیکال دوره لیسانس را Waive کنید و به دریافت لایسنس P.Eng نزدیک&zwnj;تر
                  شوید. فناوران این خدمات را برای مهندسان ایرانی فراهم کرده تا پرونده&zwnj;های آن&zwnj;ها با روندی درست
                  در ادارات مهندسی طی شوند. متقاضیان می&zwnj;توانند 15 دقیقه مشاوره رایگان برای آشنایی بیشتر با این روند
                  داشته باشند و در صورت استفاده از این خدمات، یک سال عضویت VIP موسسه فناوران به عنوان هدیه دریافت
                  می&zwnj;کنند.
                </li>
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
              {/* Question */}
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
                    آیا تایید سازمان WES (World Education Services) برای تمام استان‌های كانادا لازم است؟
                  </button>
                </h2>
                <div id='Question1' className='accordion-collapse collapse show' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>پاسخ: خير، فقط در برخي از استان‌های كانادا تاييديه از سازمان WES الزامی است.</p>
                  </div>
                </div>
              </div>

              {/* Question */}
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
                    آیا می‌توان برای استانی غیر از استان محل سكونت فعال برای .P.Eng اقدام کرد؟
                  </button>
                </h2>
                <div id='Question2' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>پاسخ: بله</div>
                </div>
              </div>

              {/* Question */}
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
                    اگر لايسنس .P.Eng را در یک استان داشته باشيم، آیا می‌توانیم مجددا برای یک استان دیگر اقدام کنیم؟
                  </button>
                </h2>
                <div id='Question3' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>پاسخ: بله، در صورتي‌كه هزينه عضويت سالانه هر دو استان را پرداخت کرده باشید.</p>
                  </div>
                </div>
              </div>

              {/* Question */}
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
                    آیا باید سابقه تجربه را در مرحله اول ارسال کرد؟
                  </button>
                </h2>
                <div id='Question4' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      پاسخ: خیر، الزامی نیست. اما بهتر است بعد از ارسال سري اول مدارك، Experience Record را تهيه و ارسال
                      نماييد. لازم بذكر است، اين مدرك پس از ارسال در صورت نياز قابل تغيير است.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
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
                    آیا لازم است که دروس عمومی را در شرح دروس ارائه کنیم؟
                  </button>
                </h2>
                <div id='Question5' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>پاسخ: خير، لازم نيست.</p>
                  </div>
                </div>
              </div>

              <h4 className='my-5'>سوالات متداول متقاضیان P.Eng استان انتاریو</h4>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question6'
                    aria-expanded='false'
                    aria-controls='Question6'
                  >
                    من درخواست مجوز را قبل از ۱۵ می ۲۰۲۳ ثبت کرده‌ام. چه اتفاقی برای درخواست من می‌افتد؟
                  </button>
                </h2>
                <div id='Question6' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      اگر شما درخواست مجوز را قبل از ۱۵ می ۲۰۲۳ ثبت کرده‌اید، مسیر مجوزدهی که در زمان ثبت‌نام شما برقرار
                      بود، ادامه خواهد یافت. با این حال، بسته به مرحله درخواست شما، ممکن است توسط PEO به فرآیند جدید
                      دعوت شوید. برای مثال، متقاضیان فعلی که از قوانین جدید بهره‌مند می‌شوند، مانند حذف تجربه کاری
                      کانادایی، در صورتی که تنها یک سال تجربه کاری کانادایی نداشته باشند، پیامی از PEO دریافت خواهند
                      کرد.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question7'
                    aria-expanded='false'
                    aria-controls='Question7'
                  >
                    من یک متقاضی پیش از ۱۵ می ۲۰۲۳ هستم. آیا همچنان باید یک سال تجربه کاری کانادایی را ارائه دهم یا باید
                    از طریق فرآیند جدید مجدداً درخواست دهم؟
                  </button>
                </h2>
                <div id='Question7' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      خیر، مجدداً درخواست ندهید. از ۱۵ می ۲۰۲۳ به بعد، PEO دیگر تجربه کاری کانادایی را برای ارزیابی در
                      نظر نمی‌گیرد (برای هر دو نوع فرآیند جدید و سابق).
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question8'
                    aria-expanded='false'
                    aria-controls='Question8'
                  >
                    PEO چگونه اولویت‌بندی پردازش درخواست‌های فرآیند جدید و سابق را انجام می‌دهد؟
                  </button>
                </h2>
                <div id='Question8' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>ما دو تیم جداگانه ویژه برای هر فرآیند داریم و هیچ‌گونه ترجیحی به یکی از این فرآیندها نداریم.</p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question9'
                    aria-expanded='false'
                    aria-controls='Question9'
                  >
                    آیا به عنوان یک متقاضی پیش از ۱۵ می، واجد شرایط ثبت‌نام در برنامه مهندسی کارآموز (EIT) PEO هستم؟
                  </button>
                </h2>
                <div id='Question9' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      اگر ددلاین‌های تعیین‌شده در درخواست P.Eng. خود را رعایت کرده‌اید، می‌توانید در برنامه EIT ثبت‌نام
                      کنید. لطفاً درخواست EIT خود را به ایمیل eit@peo.on.ca ارسال کنید تا بررسی و پردازش شود. پس از
                      پرداخت و پردازش هزینه سالیانه EIT، عضویت شما فعال خواهد شد.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question10'
                    aria-expanded='false'
                    aria-controls='Question10'
                  >
                    من یک متقاضی سابق هستم که شرایط آکادمیک و NPPE را پاس کرده است و ۴۸ ماه تجربه مهندسی دارم. چگونه
                    می‌توانم اطلاعات تجربه CBA خود را ارسال کنم؟
                  </button>
                </h2>
                <div id='Question10' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      لطفاً اسناد تجربه CBA خود (فرم درخواست P.Eng. و فرم سوابق تجربه CBA) را به ایمیل
                      experiencedocs@peo.on.ca ارسال کنید
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question11'
                    aria-expanded='false'
                    aria-controls='Question11'
                  >
                    من یک متقاضی پیش از ۱۵ می هستم، اما پرونده من به دلیل از دست دادن ددلاین بسته شده است. آیا می‌توانم
                    دوباره درخواست دهم؟
                  </button>
                </h2>
                <div id='Question11' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      ممکن است بتوانید مجدداً درخواست دهید. لطفاً دستورالعمل‌های موجود در وب‌سایت ما را دنبال کنید. هر
                      الزامی که از برنامه قبلی خود را برآورده کرده‌اید، به درخواست جدید انتقال داده خواهد شد. اگر سوالی
                      دارید، لطفاً با ایمیل apply@peo.on.ca تماس بگیرید و شماره PEO خود را ارائه دهید.
                    </p>
                  </div>
                </div>
              </div>

              <h4 className='my-5'> سوالات متداول CBA</h4>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question12'
                    aria-expanded='false'
                    aria-controls='Question12'
                  >
                    آیا ارزیاب من باید یک P.Eng باشد؟
                  </button>
                </h2>
                <div id='Question12' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      برای تجربه کاری مهندسی در کانادا، ارزیاب باید یک مهندس حرفه‌ای (P.Eng.) باشد که در طول دوره کاری
                      معتبر باشد. برای تجربه کاری خارج از کانادا، ارزیاب باید یک مهندس باتجربه باشد. ترجیحاً ارزیابان
                      بین‌المللی باید مهندس مجاز در کشور خود باشند.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question13'
                    aria-expanded='false'
                    aria-controls='Question13'
                  >
                    آیا باید قبل از درخواست، تجربه کاری مهندسی داشته باشم؟
                  </button>
                </h2>
                <div id='Question13' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      بله. تحت فرآیند مجوز جدید که از ۱۵ می ۲۰۲۳ به اجرا درآمده، همه متقاضیان باید قبل از ارسال درخواست،
                      هم شرایط تحصیلی و هم تجربه کاری را اثبات کنند. همه متقاضیان باید حداقل ۴۸ ماه تجربه کاری مهندسی
                      قابل قبول داشته باشند که باید در زمان ارسال درخواست از طریق ارزیابی مبتنی بر شایستگی (CBA) اثبات
                      شود.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question14'
                    aria-expanded='false'
                    aria-controls='Question14'
                  >
                    حداکثر/حداقل تعداد ارزیاب‌های مورد نیاز چیست؟
                  </button>
                </h2>
                <div id='Question14' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>حداقل تعداد ارزیاب‌ها یک نفر است و حداکثر تعداد مشخصی ندارد.</p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question15'
                    aria-expanded='false'
                    aria-controls='Question15'
                  >
                    نقش ارزیاب چیست؟
                  </button>
                </h2>
                <div id='Question15' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      ارزیاب تجربه کاری متقاضی را ارزیابی و امتیازدهی می‌کند. ارزیاب باید دانش مستقیم و دست اول از کار
                      متقاضی را داشته باشد و نظارت حرفه‌ای مناسب بر متقاضی در طول دوره کاری ارسالی را داشته باشد و
                      مسئولیت فنی کار متقاضی را بر عهده بگیرد. ارزیاب ممکن است عنوانی به جز سوپروایزر داشته باشد و ممکن
                      است مدیر، منتور، مشتری یا همکار متقاضی باشد.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question16'
                    aria-expanded='false'
                    aria-controls='Question16'
                  >
                    چرا نیاز به یک ارزیاب برای تجربه کاری وجود دارد؟
                  </button>
                </h2>
                <div id='Question16' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      ارزیابی به PEO کمک می‌کند تا اطمینان حاصل شود که الزامات مجوزدهی براورده شده است. ارزیابی به
                      تنهایی نشان‌دهنده بررسی تجربه کاری متقاضی نیست، بلکه فقط تأیید می‌کند که این تجربه به دست آمده
                      است.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question17'
                    aria-expanded='false'
                    aria-controls='Question17'
                  >
                    آیا تمامی ارزیاب‌های من باید از همان محل کار باشند؟
                  </button>
                </h2>
                <div id='Question17' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      اگرچه این ایده‌آل است، اما ارزیابان نباید لزوماً از همان محل کار باشند. کافی است که ارزیابان به
                      اندازه کافی با تجربه کاری مهندسی متقاضی آشنا باشند و با اطمینان مهارت‌های مورد نظر را امتیازدهی
                      کنند.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question18'
                    aria-expanded='false'
                    aria-controls='Question18'
                  >
                    آیا ملزم به ارائه تجربه کاری کانادایی هستم؟
                  </button>
                </h2>
                <div id='Question18' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>خیر، PEO دیگر برای تجربه کاری کانادایی ارزیابی نمی‌کند.</p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question19'
                    aria-expanded='false'
                    aria-controls='Question19'
                  >
                    اگر ارزیاب من ارزیابی را رد کند، چه کاری باید انجام دهم؟
                  </button>
                </h2>
                <div id='Question19' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      خیمتقاضیان موظف به تعیین یک ارزیاب جدید برای مهارت‌هایی هستند که در ابتدا به ارزیابی که ارزیابی را
                      رد کرده است، اختصاص داده شده بودند.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question20'
                    aria-expanded='false'
                    aria-controls='Question20'
                  >
                    من مدرک کارشناسی ارشد/دکترا دارم. آیا این سابقه می‌تواند به ۴۸ ماه تجربه کاری من اعمال شود؟
                  </button>
                </h2>
                <div id='Question20' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      خچارچوب ارزیابی مبتنی بر شایستگی (CBA) اجازه استفاده از اعتبارات آموزشی پساکارشناسی برای الزام
                      تجربه را نمی‌دهد. با این حال، یک متقاضی می‌تواند تجربه تحقیقات یا کار پساکارشناسی خود را در CBA
                      خود شامل کند تا زمانی که ارزیاب واجد شرایط داشته باشد.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question21'
                    aria-expanded='false'
                    aria-controls='Question21'
                  >
                    آیا می‌توانم تجربه کاری پیش از فارغ‌التحصیلی را در ۴۸ ماه تجربه کاری خود محاسبه کنم؟
                  </button>
                </h2>
                <div id='Question21' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      متقاضیان می‌توانند تا ۱۲ ماه تجربه کاری کسب شده قبل از اتمام مدرک کارشناسی‌شان را در ۴۸ ماه تجربه
                      لحاظ کنند. متقاضیان می‌توانند این تجربه پیش از فارغ‌التحصیلی را در خلاصه تجربه‌شان لحاظ کنند و
                      باید گزینه تجربه پیش از فارغ‌التحصیلی را انتخاب کنند. تاریخ شروع این تجربه نباید بیش از دو سال از
                      تاریخ دریافت مدرک باشد.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question22'
                    aria-expanded='false'
                    aria-controls='Question22'
                  >
                    آیا می‌توانم درخواست پرونده خود را تسریع دهم؟
                  </button>
                </h2>
                <div id='Question22' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      متقاضیان می‌توانند تا ۱۲لطفاً توجه داشته باشید که ما فقط درخواست‌های تسریع را در نظر می‌گیریم که
                      متقاضیان به ما نامه‌ای از کارفرما ارائه داده‌اند که نشان می‌دهد:
                      <ol>
                        <li> نیاز به اخذ مدرک P.Eng برای انجام وظایف کاری فعلی دارند.</li>
                        <li>مدرک P.Eng شرط پیشنهاد کاری است و عامل محدود کننده برای استخدام متقاضی است.</li>
                      </ol>
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question23'
                    aria-expanded='false'
                    aria-controls='Question23'
                  >
                    چگونه متقاضیان می‌توانند فرم‌های CBA را از بعد از ۱ جولای ۲۰۲۳ تکمیل کنند؟
                  </button>
                </h2>
                <div id='Question23' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      برای مشاهده مراحل جدید فرآیند درخواست CBA و شروع فرآیند، به
                      <a href='https://peo.on.ca/apply/become-professional-engineer'>peo.on.ca</a>
                      مراجعه کنید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question25'
                    aria-expanded='false'
                    aria-controls='Question25'
                  >
                    آیا کار تحقیقاتی حامی صنعتی در ۴۸ ماه تجربه مورد نیاز لحاظ می‌شود؟
                  </button>
                </h2>
                <div id='Question25' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>بله، متقاضی می‌تواند کار تحقیقاتی حامی صنعتی را در چارچوب CBA ارائه دهد.</p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question26'
                    aria-expanded='false'
                    aria-controls='Question26'
                  >
                    برای مهارت‌های محیطی کانادا در چارچوب CBA، چگونه می‌توانم این مهارت‌ها را اثبات کنم اگر تجربه کاری
                    کانادایی ندارم؟
                  </button>
                </h2>
                <div id='Question26' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      مهارت‌های محیطی کانادا ممکن است خارج از کانادا کسب شود. به عنوان مثال، یک متقاضی که برای شرکت نفت
                      شل در نیجریه کار می‌کند، ممکن است از استانداردهای مهندسی American Petroleum Institute (API)
                      استفاده کند که در نروژ، ایالات متحده یا ویندزور، انتاریو نیز استفاده می‌شود.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question27'
                    aria-expanded='false'
                    aria-controls='Question27'
                  >
                    آیا می‌توانم در حالی که تجربه کاری را کسب می‌کنم، فرم CBA را پر کنم؟
                  </button>
                </h2>
                <div id='Question27' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      بله، اما شما قادر به ارسال پرونده به صورت کامل نخواهید بود تا زمانی که یک CBA با حداقل ۴۸ ماه
                      تجربه کاری را کامل کرده باشید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question28'
                    aria-expanded='false'
                    aria-controls='Question28'
                  >
                    آیا متقاضی و ارزیاب باید امتیازهای CBA را قبل از ارسال به PEO باهم بررسی کنند؟
                  </button>
                </h2>
                <div id='Question28' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>ارزیابان باید مهارت‌ها را به تنهایی بررسی و امتیازدهی کنند.</p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question29'
                    aria-expanded='false'
                    aria-controls='Question29'
                  >
                    من با کار یک متقاضی آشنا هستم؛ اما مسئولیت فنی برای کار او را بر عهده نگرفته بودم. آیا می‌توانم
                    ارزیاب واجد شرایطی باشم؟
                  </button>
                </h2>
                <div id='Question29' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      بله، تا زمانی که ارزیابان به اندازه کافی با کار متقاضی آشنا هستند و می‌توانند با اطمینان مهارت‌های
                      مورد نظر را ارزیابی کنند.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question30'
                    aria-expanded='false'
                    aria-controls='Question30'
                  >
                    آیا متقاضی و ارزیاب باید امتیازهای CBA را قبل از ارسال به PEO باهم مورد بررسی قرار دهند؟
                  </button>
                </h2>
                <div id='Question30' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      ارزیابان باید مهارت‌ها را به تنهایی بررسی و امتیازدهی کنند. ارزیابی‌های خود متقاضیان و ارزیابان
                      باید به صورت مستقل به PEO ارسال شوند.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question31'
                    aria-expanded='false'
                    aria-controls='Question31'
                  >
                    من در یک شرکت خانوادگی کار می‌کردم و ناظر من یکی از اعضای خانواده بود (و مهندس بود). من در این شرایط
                    باید چه کار کنم؟
                  </button>
                </h2>
                <div id='Question31' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      ما در حال به‌روز رسانی CBA برای روشن‌تر شدن در این شرایط هستیم که یک عضو خانواده نمی‌تواند به
                      عنوان ارزیاب شما باشد. در این شرایط، شما باید یک ارزیاب خارجی پیدا کنید که با کار شما آشنا باشد و
                      بتواند به طور مستقل آن را ارزیابی کند.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question32'
                    aria-expanded='false'
                    aria-controls='Question32'
                  >
                    آیا می‌توانم از یک ارزیاب برای تمام ۴۸ ماه تجربه کاری استفاده کنم؟
                  </button>
                </h2>
                <div id='Question32' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      بله، اگر یک ارزیاب با تمامی ۴۸ ماه تجربه کاری شما آشنا باشد و بتواند تمام مهارت‌های مورد نیاز را
                      ارزیابی کند، می‌توانید از یک ارزیاب برای کل تجربه خود استفاده کنید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question33'
                    aria-expanded='false'
                    aria-controls='Question33'
                  >
                    اگر ارزیاب من در حین فرآیند ارزیابی قابل دسترس نباشد، چه باید بکنم؟
                  </button>
                </h2>
                <div id='Question33' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      اگر ارزیاب شما در دسترس نباشد، شما باید به سرعت یک ارزیاب جایگزین پیدا کنید. این ارزیاب جدید باید
                      بتواند تجربه کاری شما را با همان دقت و جزئیات ارزیابی کند.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question34'
                    aria-expanded='false'
                    aria-controls='Question34'
                  >
                    آیا ارزیاب‌های من باید تجربه کاری را به صورت مستقل از هم ارزیابی کنند یا می‌توانند با هم مشورت کنند؟
                  </button>
                </h2>
                <div id='Question34' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      هر ارزیاب باید به صورت مستقل تجربه کاری شما را ارزیابی کند و امتیازات خود را به طور مستقل به PEO
                      ارسال کند. مشورت بین ارزیاب‌ها می‌تواند به شفافیت و دقت ارزیابی‌ها کمک کند، اما امتیازات نهایی
                      باید مستقل از هم ارائه شوند.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question35'
                    aria-expanded='false'
                    aria-controls='Question35'
                  >
                    آیا PEO آموزش یا راهنمایی خاصی برای ارزیاب‌ها فراهم می‌کند؟
                  </button>
                </h2>
                <div id='Question35' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      بله، PEO منابع و دستورالعمل‌هایی برای ارزیاب‌ها فراهم می‌کند تا آن‌ها بتوانند تجربه کاری متقاضیان
                      را به درستی ارزیابی کنند. این منابع شامل دستورالعمل‌های دقیق در مورد چگونگی ارزیابی مهارت‌های
                      مختلف و معیارهای امتیازدهی می‌شود.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question36'
                    aria-expanded='false'
                    aria-controls='Question36'
                  >
                    اگر متقاضی از یک کشور دیگر تجربه کاری داشته باشد که معیارهای مهندسی متفاوتی دارد، چگونه باید ارزیابی
                    انجام شود؟
                  </button>
                </h2>
                <div id='Question36' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      ارزیاب‌ها باید تجربه کاری متقاضی را بر اساس معیارهای PEO و استانداردهای مهندسی کانادا ارزیابی
                      کنند. اگر معیارهای مهندسی کشور دیگر با معیارهای کانادا متفاوت باشد، ارزیاب باید این تفاوت‌ها را در
                      نظر بگیرد و اطمینان حاصل کند که تجربه کاری متقاضی با استانداردهای PEO سازگار است.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question36'
                    aria-expanded='false'
                    aria-controls='Question36'
                  >
                    آیا می‌توانم تجربه کاری خارج از حوزه مهندسی را در CBA شامل کنم؟
                  </button>
                </h2>
                <div id='Question36' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      تجربه کاری باید به طور مستقیم مرتبط با حوزه مهندسی باشد تا در CBA قابل قبول باشد. تجربه‌های کاری
                      که به طور مستقیم با فعالیت‌های مهندسی مرتبط نیستند، ممکن است توسط PEO پذیرفته نشوند.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question37'
                    aria-expanded='false'
                    aria-controls='Question37'
                  >
                    اگر تجربه کاری من در شرکت‌های مختلفی باشد، چگونه باید آن‌ها را در CBA ارائه دهم؟
                  </button>
                </h2>
                <div id='Question37' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      شما باید تجربه کاری خود را به تفکیک شرکت و موقعیت شغلی در CBA ارائه دهید. برای هر موقعیت شغلی، شما
                      باید جزئیات مربوط به وظایف و مسئولیت‌های خود را شرح دهید و ارزیاب مرتبط با هر تجربه را تعیین کنید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question38'
                    aria-expanded='false'
                    aria-controls='Question38'
                  >
                    آیا می‌توانم تجربه کاری را که به صورت پاره‌وقت یا پروژه‌ای کسب کرده‌ام در CBA شامل کنم؟
                  </button>
                </h2>
                <div id='Question38' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      بله؛ جربه کاری پاره‌وقت یا پروژه‌ای می‌تواند در CBA شامل شود به شرطی که به طور قابل توجهی به
                      مهارت‌های مهندسی شما افزوده باشد و توسط ارزیاب تأیید شود.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question39'
                    aria-expanded='false'
                    aria-controls='Question39'
                  >
                    آیا می‌توانم تجربه کاری را که به صورت پاره‌وقت یا پروژه‌ای کسب کرده‌ام در CBA شامل کنم؟
                  </button>
                </h2>
                <div id='Question39' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      بله؛ جربه کاری پاره‌وقت یا پروژه‌ای می‌تواند در CBA شامل شود به شرطی که به طور قابل توجهی به
                      مهارت‌های مهندسی شما افزوده باشد و توسط ارزیاب تأیید شود.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question40'
                    aria-expanded='false'
                    aria-controls='Question40'
                  >
                    آیا PEO بازخوردی در مورد امتیازات ارزیابی شده ارائه می‌دهد؟
                  </button>
                </h2>
                <div id='Question40' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      PEO بازخورد کلی در مورد درخواست‌ها و امتیازات ارائه می‌دهد، اما جزئیات دقیق ارزیابی هر مهارت به
                      صورت مستقل به متقاضیان ارائه نمی‌شود. اگر درخواست شما رد شود یا نیاز به اصلاحات داشته باشد، PEO به
                      شما اطلاع می‌دهد که کدام مناطق نیاز به بهبود دارند.
                    </p>
                  </div>
                </div>
              </div>

              <h4 className='mt-5'>سوالات متداول متقاضیان P.Eng استان بریتیش کلمبیا</h4>
              <h5 className='mb-5'> درخواست ثبت نام</h5>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question41'
                    aria-expanded='false'
                    aria-controls='Question41'
                  >
                    درخواست ثبت نام من با یک نهاد مهندسی دیگر در کانادا ثبت شده است. چگونه می‌توانم با انجمن مهندسان و
                    زمین‌شناسی بریتیش کلمبیا (EGBC) ثبت نام کنم؟
                  </button>
                </h2>
                <div id='Question41' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      اگر شما قبلاً با یک نهاد مهندسی یا زمین‌شناسی دیگر در کانادا ثبت نام کرده‌اید، ثبت نام با EGBC
                      می‌تواند فرآیندی ساده‌تر باشد. برای ثبت نام، باید مراحل، عناوین و عضویت‌های فعلی و پیشین خود در
                      سایر انجمن‌های مهندسی و زمین‌شناسی کانادا را اعلام کنید. EGBC ممکن است وضعیت ثبت نام و پیشینه
                      درخواست‌های قبلی شما را با انجمن‌های دیگر تأیید کند. اگر پرونده فعالی با یک انجمن دیگر دارید،
                      توصیه می‌شود که آن را تکمیل یا لغو کنید. برای اطلاعات بیشتر و دسترسی به درخواست آنلاین، به وب‌سایت
                      EGBC مراجعه کنید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question42'
                    aria-expanded='false'
                    aria-controls='Question42'
                  >
                    من مطمئن نیستم که آیا باید ابتدا به عنوان فرد تحت آموزش ثبت‌نام کنم یا مستقیماً برای ثبت‌نام حرفه‌ای
                    درخواست دهم. گزینه‌های من چیست؟
                  </button>
                </h2>
                <div id='Question42' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      اگر حداقل ۴ سال تجربه کار حرفه‌ای در زمینه مهندسی یا علوم زمین دارید، می‌توانید مستقیماً برای
                      ثبت‌نام حرفه‌ای (P.Eng. یا P.Geo.) درخواست دهید. در غیر این صورت، می‌توانید به عنوان دانشجو (EIT
                      یا GIT) ثبت‌نام کنید. برای راهنمایی بیشتر در مورد انتخاب مناسب‌ترین مسیر، به وب‌سایت EGBC مراجعه
                      کنید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question43'
                    aria-expanded='false'
                    aria-controls='Question43'
                  >
                    چه مدارکی به عنوان اثبات هویت قابل قبول هستند و چگونه می‌توانم آن‌ها را تصدیق کنم؟
                  </button>
                </h2>
                <div id='Question43' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      برای ثبت‌نام، باید کپی‌های تصدیق‌شده از دو مدرک شناسایی دولتی که شامل نام کامل قانونی شما هستند،
                      ارائه دهید. یکی از این مدارک باید دارای عکس شما باشد. برای اطلاعات بیشتر و راهنمایی در مورد تصدیق
                      مدارک شناسایی، به وب‌سایت EGBC مراجعه کنید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question44'
                    aria-expanded='false'
                    aria-controls='Question44'
                  >
                    مدرک تحصیلی من در کارشناسی ارشد متفاوت از رشته تحصیلی کارشناسی من است و/یا من در یک رشته متفاوت از
                    رشته کارشناسی یا زمینه مهندسی کار می‌کنم. در کدام رشته باید درخواست ثبت‌نام کنم؟
                  </button>
                </h2>
                <div id='Question44' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      اگر قصد ثبت‌نام به عنوان مهندس در دوره آموزشی (EIT) را دارید، در رشته‌ای که بیشترین تطابق با مدرک
                      کارشناسی شما دارد، درخواست دهید. اگر قصد ثبت‌نام به عنوان مهندس حرفه‌ای (P.Eng.) را دارید و تجربه
                      کاری شما در یک رشته متفاوت است، باید در رشته‌ای که تجربه‌ی کاری خود را کسب کرده‌اید، درخواست دهید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question45'
                    aria-expanded='false'
                    aria-controls='Question45'
                  >
                    چگونه می‌توانم امضای دیجیتال و مهر الکترونیکی دریافت کنم؟
                  </button>
                </h2>
                <div id='Question45' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      برای دریافت امضای دیجیتال و مهر الکترونیکی، لطفاً به صفحه مربوط به Engineers and Geoscientists BC
                      در وب‌سایت Notarius مراجعه کنید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question46'
                    aria-expanded='false'
                    aria-controls='Question46'
                  >
                    من به عنوان یک حرفه‌ای P.Eng. ثبت‌نام نکرده‌ام. از چه عنوانی می‌توانم استفاده کنم و چگونه می‌توانم
                    در محیط حرفه‌ای به خود ارجاع دهم؟
                  </button>
                </h2>
                <div id='Question46' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      برای اطلاعات در مورد استفاده از عناوین شغلی برای دانشجویان مهندسی و دانشجویان علوم زمین، به
                      مقاله‌ای که در وب‌سایت EGBC منتشر شده است، مراجعه کنید. همچنین، اطلاعات مربوط به تمرین غیرمجاز و
                      سوءاستفاده از عنوان نیز در وب‌سایت قابل دسترسی است. اگر سوالات بیشتری دارید، با جیک شرویدر تماس
                      بگیرید: jschroeder@egbc.ca.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question47'
                    aria-expanded='false'
                    aria-controls='Question47'
                  >
                    سوال من در این لیست نیست. چه کاری باید انجام دهم؟
                  </button>
                </h2>
                <div id='Question47' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      ممکن است جواب سوال شما در یک مجموعه دیگر از سوالات متداول (FAQs) قرار داشته باشد. برای سوالات خاص
                      مرتبط با فرآیند ثبت‌نام و ثبت، می‌توانید ایمیل به register@egbc.ca ارسال کنید.
                    </p>
                  </div>
                </div>
              </div>

              <h5 class='my-5'>درخواست ثبت نام</h5>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question48'
                    aria-expanded='false'
                    aria-controls='Question48'
                  >
                    چگونه می‌توانم در یک مصاحبه تجربه کاری (experience interview) شرکت کنم؟
                  </button>
                </h2>
                <div id='Question48' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      مصاحبه‌ها به اختیار کمیته اعتبارات (Credentials Committee) انجام می‌شوند. در صورتی که برای شما
                      مصاحبه توصیه شده باشد، کارکنان EGBC با شما تماس خواهند گرفت تا راهنمایی‌های لازم را ارائه دهند.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question49'
                    aria-expanded='false'
                    aria-controls='Question49'
                  >
                    مصاحبه من کی برگزار می‌شود؟
                  </button>
                </h2>
                <div id='Question49' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      تعیین زمان مصاحبه به عهده اعضای کمیته اعتبارات است و معمولاً زمان ترتیب دادن یک مصاحبه 2 تا 6 ماه
                      زمان می‌برد. مصاحبه‌ها در ساعات کاری و زمانی که مصاحبه‌گران در دسترس هستند، برنامه‌ریزی می‌شوند.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question50'
                    aria-expanded='false'
                    aria-controls='Question50'
                  >
                    چه چیزی را باید به مصاحبه بیاورم؟
                  </button>
                </h2>
                <div id='Question50' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      اگر به یک مصاحبه دعوت شده‌اید، باید نمونه‌ای از کار خود را ارائه دهید که به وضوح تجربیات شما را
                      نشان دهد و نحوه استفاده از دانش خود برای حل یک مسئله فنی را توضیح دهد. همچنین باید آماده باشید به
                      سوالات فنی درباره پروژه‌هایی که در گزارش شایستگی خود ذکر کرده‌اید، پاسخ دهید.
                    </p>
                  </div>
                </div>
              </div>

              <h5 class='my-5'> بازیابی وضعیت</h5>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question51'
                    aria-expanded='false'
                    aria-controls='Question51'
                  >
                    من یک فرد تحت آموزش سابق، ثبت‌نام‌کننده سابق یا دارنده مجوز سابق هستم. چگونه می‌توانم وضعیت خود را
                    با EGBC بازیابی کنم؟
                  </button>
                </h2>
                <div id='Question51' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      افراد تحت آموزش (EIT)، ثبت‌نام‌کنندگان و دارندگان مجوز سابق می‌توانند وضعیت خود را به عنوان یک
                      دانشجو یا ثبت‌نام‌کننده بدون حق کاربردی بازیابی کنند یا حقوق کاربردی خود را بازیابی کنند. برای
                      اطلاعات بیشتر به صفحه بازیابی وضعیت (Reinstatement of Status) در وب‌سایت EGBC مراجعه کنید.
                    </p>
                  </div>
                </div>
              </div>

              <h5 class='my-5'>تغییرات وضعیت، استعفا و بازنشستگی</h5>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question52'
                    aria-expanded='false'
                    aria-controls='Question52'
                  >
                    من یک ثبت‌ نام‌کننده حرفه‌ای با وضعیت فعال هستم. چگونه می‌توانم به وضعیت غیرفعال منتقل شوم؟
                  </button>
                </h2>
                <div id='Question52' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      برای کسب اطلاعات بیشتر در مورد تغییر وضعیت به غیرفعال، به صفحه وب‌سایت EGBC مربوط به
                      ثبت‌نام‌کنندگان غیرفعال مراجعه کنید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question53'
                    aria-expanded='false'
                    aria-controls='Question53'
                  >
                    چگونه می‌توانم از EGBC استعفا دهم یا بازنشسته شوم؟
                  </button>
                </h2>
                <div id='Question53' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>برای استعفا، وارد حساب کاربری آنلاین خود شوید و شرایط و مقررات مربوطه را تایید کنید.</p>
                  </div>
                </div>
              </div>

              <h5 class='my-5'> الزامات تجربه</h5>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question54'
                    aria-expanded='false'
                    aria-controls='Question54'
                  >
                    در حال استفاده از سامانه ارزیابی شایستگی برای گزارش تجربیات کاری خود هستم، اما ولیدیتور من ایمیل
                    اطلاعیه دریافت نکرده است. چه کاری باید انجام دهم؟
                  </button>
                </h2>
                <div id='Question54' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      اطلاعیه‌ها می‌توانند مجدداً از طریق ورود به سامانه ارزیابی شایستگی (Competency Assessment System)
                      ارسال شوند. ولیدیتورها باید فولدر SPAM ایمیل خود را بررسی کنند. اگر ولیدیتور هنوز ایمیل را دریافت
                      نکرده باشد، لطفاً یک ایمیل به competency@egbc.ca با نام ولیدیتور و درخواست خود ارسال کنید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question55'
                    aria-expanded='false'
                    aria-controls='Question55'
                  >
                    در حال استفاده از سامانه ارزیابی شایستگی برای گزارش تجربیات کاری خود هستم، اما ولیدیتور من ایمیل
                    اطلاعیه دریافت نکرده است. چه کاری باید انجام دهم؟
                  </button>
                </h2>
                <div id='Question55' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      اطلاعیه‌ها می‌توانند مجدداً از طریق ورود به سامانه ارزیابی شایستگی (Competency Assessment System)
                      ارسال شوند. ولیدیتورها باید فولدر SPAM ایمیل خود را بررسی کنند. اگر ولیدیتور هنوز ایمیل را دریافت
                      نکرده باشد، لطفاً یک ایمیل به competency@egbc.ca با نام ولیدیتور و درخواست خود ارسال کنید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question56'
                    aria-expanded='false'
                    aria-controls='Question56'
                  >
                    من از سامانه ارزیابی شایستگی برای گزارش تجربیات کاری خود استفاده می‌کنم و ولیدیتور من می‌خواهد
                    تغییراتی اعمال کنم، اما من نمی‌توانم هیچ تغییری ایجاد کنم. چه کاری باید انجام دهم؟
                  </button>
                </h2>
                <div id='Question56' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      لطفاً یک ایمیل به competency@egbc.ca با نام کامل، شناسه سیستمی و شماره شناسایی خاص شایستگی خود
                      ارسال کنید تا تغییرات لازم اعمال شود.
                    </p>
                  </div>
                </div>
              </div>

              <h5 class='my-5'>پاسخ‌ها و راهنمایی‌ها برای سوالات شایع در مورد ثبت‌نام و ارزیابی شایستگی</h5>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question57'
                    aria-expanded='false'
                    aria-controls='Question57'
                  >
                    من از سامانه ارزیابی شایستگی برای گزارش تجربیات کاری استفاده می‌کنم و می‌خواهم یک ولیدیتور جدید
                    اضافه کنم، اما سامانه امکان افزودن نام ایشان را به من نمی‌دهد. چگونه می‌توانم نام ایشان را اضافه
                    کنم؟
                  </button>
                </h2>
                <div id='Question57' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      لطفاً یک ایمیل به competency@egbc.ca بفرستید و نام کامل ولیدیتور و آدرس ایمیل فعلی ایشان را ارائه
                      دهید تا ما ولیدیتور را به لیست شما اضافه کنیم.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question58'
                    aria-expanded='false'
                    aria-controls='Question58'
                  >
                    من در زمینه مهندسی/زمین‌شناسی فعالیت می‌کنم و هیچ مهندس حرفه‌ای یا علم‌زمین‌شناس حرفه‌ای برای نظارت
                    بر کار من وجود ندارد. چه کاری می‌توانم انجام دهم تا با مقررات هماهنگ شوم؟
                  </button>
                </h2>
                <div id='Question58' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      مهندسان و علم‌زمین‌شناسان BC می‌پذیرد که دسترسی به ناظران حرفه‌ای بستگی به صنعت، پروژه و شرکت دارد
                      و همدردی می‌کند که متقاضیان ثبت حرفه‌ای ممکن است دشواری در یافتن ناظران حرفه‌ای مناسب برای کارهای
                      مهندسی یا علم‌زمین‌شناسی‌شان داشته باشند. برای رفع مشکلات و رعایت قوانین قانون مدیریت حرفه‌ای و
                      کسب تجربه قابل قبول برای ثبت نام، شما باید:
                      <ol>
                        <li>
                          از کارفرمای خود بخواهید که خدمات یک مهندس حرفه‌ای یا علم‌زمین‌شناس حرفه‌ای ثبت‌نام‌شده در BC
                          را در رشته شما برای نظارت منظم و برعهده‌گیری حرفه‌ای بر کارهای شما مشغول کند.
                        </li>
                        <li>
                          درخواست نظارت از مهندسان حرفه‌ای یا علم‌زمین‌شناسان حرفه‌ای ثبت‌نام‌شده در BC که با کارفرمای
                          شما همکاری دارند و یا دانش دقیقی از کار شما دارند. از حمایت مهندسان حرفه‌ای یا ‌زمین‌شناسان
                          حرفه‌ای مشتریان یا همکارانی که دانش دقیقی از کار شما دارند، خواهش کنید و از آنها بخواهید به
                          عنوان داوران عمل کنند.
                        </li>
                      </ol>
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question59'
                    aria-expanded='false'
                    aria-controls='Question59'
                  >
                    من در زمینه مهندسی/زمین‌شناسی فعالیت می‌کنم و هیچ مهندس حرفه‌ای یا علم‌زمین‌شناس حرفه‌ای برای نظارت
                    بر کار من وجود ندارد. چه کاری می‌توانم انجام دهم تا با مقررات هماهنگ شوم؟
                  </button>
                </h2>
                <div id='Question59' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      مهندسان و علم‌زمین‌شناسان BC می‌پذیرد که دسترسی به ناظران حرفه‌ای بستگی به صنعت، پروژه و شرکت دارد
                      و همدردی می‌کند که متقاضیان ثبت حرفه‌ای ممکن است دشواری در یافتن ناظران حرفه‌ای مناسب برای کارهای
                      مهندسی یا علم‌زمین‌شناسی‌شان داشته باشند. برای رفع مشکلات و رعایت قوانین قانون مدیریت حرفه‌ای و
                      کسب تجربه قابل قبول برای ثبت نام، شما باید:
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question60'
                    aria-expanded='false'
                    aria-controls='Question60'
                  >
                    آیا می‌توانم از تجربیات کاری کسب شده در طول برنامه Co-op یا قبل از فارغ‌التحصیلی اعتبار کسب کنم؟
                  </button>
                </h2>
                <div id='Question60' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      تا حداکثر 1 سال از تجربیات کسب شده در طول دوره Co-op یا قبل از فارغ‌التحصیلی ممکن است پذیرفته شود
                      اگر:
                      <ul>
                        <li>
                          بعد از تکمیل حداقل نصف مدت دوره مهندسی یا علوم زمین شما انجام شده باشد اما قبل از
                          فارغ‌التحصیلی؛
                        </li>
                        <li>تحت نظارت حرفه‌ای مربوط صورت گرفته باشد؛</li>
                        <li>
                          {' '}
                          و اگر به هر دیگر معیار تجربه که توسط مهندسان و علم‌زمین‌شناسان BC تعیین شده است، پاسخ دهد.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question60'
                    aria-expanded='false'
                    aria-controls='Question60'
                  >
                    آیا می‌توانم از مدرک دوره کارشناسی ارشد یا دکتری خود امتیاز کسب کنم؟
                  </button>
                </h2>
                <div id='Question60' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      متقاضیان با درجه‌های ارشد یا دکتری ممکن است برای تجربیات کسب شده به عنوان بخشی از تحصیلات ارشد خود
                      اعتبار دریافت کنند. حداکثر 1 سال اعتبار برای دوره ارشد با عنوان پایان‌نامه و حداکثر 2 سال اعتبار
                      برای دوره دکتری اختصاص خواهد یافت. حداکثر 2 سال اعتبار برای ترکیبی از دوره ارشد و دکتری در نظر
                      گرفته می‌شود. شما باید یک کپی از چکیده(های) پایان‌نامه خود را با درخواست خود ارسال کنید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question61'
                    aria-expanded='false'
                    aria-controls='Question61'
                  >
                    آیا می‌توانم از مدرک دوره کارشناسی ارشد یا دکتری خود امتیاز کسب کنم؟
                  </button>
                </h2>
                <div id='Question61' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      متقاضیان با درجه‌های ارشد یا دکتری ممکن است برای تجربیات کسب شده به عنوان بخشی از تحصیلات ارشد خود
                      اعتبار دریافت کنند. حداکثر 1 سال اعتبار برای دوره ارشد با عنوان پایان‌نامه و حداکثر 2 سال اعتبار
                      برای دوره دکتری اختصاص خواهد یافت. حداکثر 2 سال اعتبار برای ترکیبی از دوره ارشد و دکتری در نظر
                      گرفته می‌شود. شما باید یک کپی از چکیده(های) پایان‌نامه خود را با درخواست خود ارسال کنید.
                    </p>
                  </div>
                </div>
              </div>

              <h5 class='my-5'>تجربه کار در محیط‌های کانادایی </h5>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question62'
                    aria-expanded='false'
                    aria-controls='Question62'
                  >
                    مهارت‌های حرفه‌ای در محیط‌های کانادایی چه هستند؟
                  </button>
                </h2>
                <div id='Question62' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      مهارت‌های حرفه‌ای محیط زیست کانادا زیرمجموعه‌ای از 8 مهارت است که از 34 مهارت موجود در چارچوب
                      مهارت‌ها شناسایی شده‌اند و بهترین نمونه‌های دانسته شده از دانش و تجربه در مورد مقررات، کدها،
                      استانداردها، کنترل کیفیت، حس آگاهی از ایمنی، مسئولیت حرفه‌ای و ارتباطات را نشان می‌دهند. هدف این
                      است که روش ارزیابی الزامات مهارت‌های حرفه‌ای محیط زیست کانادا را با سامانه ارزیابی شایستگی آنلاین
                      هماهنگ کرده و تعریف و شفافیت بهتری فراهم آورد.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question62'
                    aria-expanded='false'
                    aria-controls='Question62'
                  >
                    تجربه کاری در کانادا ندارم. آیا همچنان می‌توانم گزارش شایستگی خود را با نمونه‌های بین‌المللی برای
                    مهارت‌های حرفه‌ای کانادایی ارسال کنم؟
                  </button>
                </h2>
                <div id='Question62' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      بله، شما می‌توانید پیش از داشتن هر گونه تجربه کاری در کانادا درخواست ثبت نام کنید و ممکن است برای
                      شایستگی‌های خود، از جمله مهارت‌های حرفه‌ای محیط زیست کانادا، از نمونه‌های بین‌المللی استفاده کنید.
                      مسئولیت ارائه نمونه‌های کافی برای ایجاد معادلت بر عهده متقاضی است، اگرچه استفاده از تجربیات
                      بین‌المللی هیچ‌گونه تضمینی برای مطابقت با شایستگی‌ها فراهم نمی‌کند. شما باید اطمینان حاصل کنید که
                      چگونگی معادله تجربیات بین‌المللی شما با تجربیات کانادایی را توضیح دهید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question63'
                    aria-expanded='false'
                    aria-controls='Question63'
                  >
                    آیا سمینار کار در کانادا می‌تواند جایگزین تجربه کار کانادایی شود؟
                  </button>
                </h2>
                <div id='Question63' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      سمینار کار در کانادا به منظور جایگزینی تجربه کار یا مهارت‌های حرفه‌ای کانادا نباید مطرح شود؛ بلکه
                      قرار است یک گزینه تکمیلی برای متقاضیانی باشد که تجربه مستقیم در محیط کاری کانادایی (یا معادل آن)
                      را ندارند، اما در تمام حوزه‌های مهارتی قوی دارند. دسترسی به سمینار کار در کانادا تنها در صورت
                      توصیه پس از انجام ارزیابی فراهم می‌شود.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question64'
                    aria-expanded='false'
                    aria-controls='Question64'
                  >
                    اگر به حداقل سطوح مورد نیاز برای ارضای مهارت‌های حرفه‌ای محیط کانادایی نرسم، چه اتفاقی می‌افتد؟
                  </button>
                </h2>
                <div id='Question64' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      ممکن است به شما مهارت‌های خاص در کانادا دوباره اختصاص داده شود تا زمانی که حداقل سطح مورد نیاز را
                      برآورده کنید. برای ثبت نام به عنوان یک حرفه‌ای ثبت‌نام‌شده، تمام الزامات مهارتی، از جمله 8 مهارت
                      حرفه‌ای محیط کانادا، باید برآورده شود.
                    </p>
                  </div>
                </div>
              </div>

              <h5 class='my-5'>برنامه کارفرمای معتبر</h5>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question65'
                    aria-expanded='false'
                    aria-controls='Question65'
                  >
                    برنامه کارفرمای معتبر چیست؟
                  </button>
                </h2>
                <div id='Question65' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      برنامه کارفرمای معتبر به ایجاد فرصت برای جذب و نگه‌داشتن استعدادهای ممتاز کمک می‌کند و فرآیند
                      ارزیابی و پردازش درخواست‌های افرادی که به دنبال ثبت حرفه‌ای هستند را ساده‌تر می‌کند. در این
                      برنامه، شرکت‌های مهندسی و علم زمین با Engineers and Geoscientists BC همکاری می‌کنند تا محیط‌های
                      کاری ارائه دهند که اطمینان حاصل شود که کارآموزانشان می‌توانند در زمان درخواست ثبت حرفه‌ای خود از
                      تجربه‌های لازم بهره‌مند شوند.
                    </p>
                    <p>
                      برای جزئیات برنامه، فرم ثبت‌نام آنلاین و لیست کنونی همکاران کارفرمای معتبر، به وب‌سایت ما مراجعه
                      کنید یا ایمیلی به AccreditedEmployer@egbc.ca ارسال کنید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question66'
                    aria-expanded='false'
                    aria-controls='Question66'
                  >
                    زمان برگزاری آزمون‌های تحصیلی چه زمانی است؟
                  </button>
                </h2>
                <div id='Question66' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      آزمون‌های تحصیلی دو بار در سال برگزار می‌شوند. نیمه اول سال (مه تا ژوئیه) و پاییز (اکتبر تا
                      دسامبر) دوره‌های آزمونی هستند. برنامه زمانبندی آزمون دو ماه قبل از شروع دوره آزمون منتشر می‌شود.
                      برای اطلاعات جدیدترین، لطفاً به صفحه وضعیت آزمون‌های تحصیلی آنلاین مراجعه کنید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question67'
                    aria-expanded='false'
                    aria-controls='Question67'
                  >
                    چه زمانی نتایج آزمون‌های تحصیلی در دسترس خواهند بود؟
                  </button>
                </h2>
                <div id='Question67' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      نتایج بر روی صفحه وضعیت برنامه شما قرار داده می‌شود و یک ایمیل اطلاع رسانی ارسال خواهد شد هنگامی
                      که نمره شما به‌روز شده باشد. برای کاندیداهای متقاضی از سایر استان‌ها، لطفاً با دپارتمان آزمون
                      مربوط به منطقه خود برای به‌روزرسانی نتایج تماس بگیرید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question68'
                    aria-expanded='false'
                    aria-controls='Question68'
                  >
                    آیا می‌توانم آزمون‌های تحصیلی را به تعویق انداخت؟
                  </button>
                </h2>
                <div id='Question68' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      برای کاندیدایان بریتیش کلمبیا، ممکن است قبل از یک زمان مشخص امکان به تعویق انداختن وجود داشته
                      باشد. برای کاندیدایان متقاضی از سایر استان‌ها/سرزمین‌ها، لطفاً با دپارتمان آزمون منطقه خود در مورد
                      سیاست‌ها و رویه‌های به تعویق انداختن آن‌ها تماس بگیرید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question69'
                    aria-expanded='false'
                    aria-controls='Question69'
                  >
                    من برای آزمون (NPPE) از طریق Engineers and Geoscientists BC ثبت‌نام کردم. آیا صندلی من تضمین شده
                    است؟
                  </button>
                </h2>
                <div id='Question69' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      صندلی آزمون شما تا زمان رزرو جلسه آزمون با Meazure Learning در بازه زمانی معین تضمین نشده است.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question70'
                    aria-expanded='false'
                    aria-controls='Question70'
                  >
                    چه زمانی نتایج آزمون (NPPE) من منتشر می‌شود؟
                  </button>
                </h2>
                <div id='Question70' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>نتایج آزمون حدود 3 تا 4 هفته پس از تاریخ آزمون از طریق پورتال وضعیت برنامه منتشر می‌شوند.</p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question72'
                    aria-expanded='false'
                    aria-controls='Question72'
                  >
                    چگونه می‌توانم آزمون (NPPE) را به تعویق انداخته و یا به تعویق بیاندازم؟
                  </button>
                </h2>
                <div id='Question72' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      پیش از انقضاء مهلت ثبت‌نام، شما می‌توانید آزمون خود را هر زمان قبل از مهلت ثبت‌نام هر جلسه آزمون
                      به تعویق بیاندازید. پس از انقضاء مهلت ثبت‌نام، ما به‌صورت خودکار آزمون شما را به جلسه آزمون بعدی
                      موجود به صورت رایگان به تعویق می‌اندازیم.
                    </p>
                    <p>
                      اطلاعات کامل در مورد نحوه ارائه درخواست و مدارک مورد نیاز در صفحه وب "نحوه ارائه درخواست" در دسترس
                      است. لطفاً قبل از ارسال درخواست خود، این اطلاعات را به دقت مرور کنید تا مطمئن شوید که همه مدارک
                      لازم را آماده کرده‌اید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question73'
                    aria-expanded='false'
                    aria-controls='Question73'
                  >
                    من فارغ‌التحصیل یک برنامه معتبر از یک دانشگاه کانادایی هستم. آیا همچنان نیاز به ارزیابی تحصیلی دارم؟
                  </button>
                </h2>
                <div id='Question73' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      اگر شما فارغ‌التحصیل یک برنامه معتبر توسط Engineers Canada هستید، نیاز به ارزیابی تحصیلی جداگانه
                      ندارید. اما همچنان باید درخواست ثبت‌نام خود را تکمیل کرده و مدارک خود را ارسال کنید. مدارک تحصیلی
                      رسمی شما باید از مؤسسه تحصیلی به صورت مستقیم به مهندسان و زمین‌شناسان بریتیش کلمبیا ارسال شود.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question74'
                    aria-expanded='false'
                    aria-controls='Question74'
                  >
                    آیا می‌توانم مدارک تحصیلی خود را به صورت الکترونیکی ارسال کنم؟
                  </button>
                </h2>
                <div id='Question74' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      بله، بسیاری از مؤسسات تحصیلی اکنون امکان ارسال مدارک به صورت الکترونیکی را فراهم کرده‌اند. در
                      صورتی که مؤسسه تحصیلی شما این امکان را فراهم کرده است، می‌توانید مدارک خود را به صورت الکترونیکی
                      ارسال کنید. لطفاً اطمینان حاصل کنید که مدارک به صورت مستقیم از طریق مؤسسه تحصیلی به مهندسان و
                      زمین‌شناسان بریتیش کلمبیا ارسال می‌شود تا معتبر شناخته شود.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question75'
                    aria-expanded='false'
                    aria-controls='Question75'
                  >
                    مراحل آزمون صلاحیت حرفه‌ای چیست؟
                  </button>
                </h2>
                <div id='Question75' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      آزمون صلاحیت حرفه‌ای (PPE) یکی از مراحل مهم برای کسب مجوز مهندسی حرفه‌ای در بریتیش کلمبیا است. این
                      آزمون شامل دو بخش اصلی می‌شود:
                    </p>
                    <ul>
                      <li>
                        بخش قوانین و اخلاق حرفه‌ای: این بخش شامل سؤالاتی در مورد قوانین، مقررات و اخلاق حرفه‌ای است که
                        باید توسط مهندسین حرفه‌ای رعایت شود.
                      </li>
                      <li>
                        بخش مدیریت و اقتصاد مهندسی: این بخش شامل سؤالاتی در مورد اصول مدیریت و اقتصاد مرتبط با حرفه
                        مهندسی است.
                      </li>
                    </ul>
                    <p>
                      آزمون PPE به صورت آنلاین و در تاریخ‌های معینی برگزار می‌شود. اطلاعات بیشتر در مورد زمان‌بندی و
                      نحوه ثبت‌نام برای آزمون PPE در وب‌سایت مهندسان و زمین‌شناسان بریتیش کلمبیا موجود است.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question75'
                    aria-expanded='false'
                    aria-controls='Question75'
                  >
                    آیا برای کسب مجوز باید تجربه کاری مرتبط داشته باشم؟
                  </button>
                </h2>
                <div id='Question75' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      بله، یکی از الزامات کسب مجوز مهندسی حرفه‌ای در بریتیش کلمبیا، داشتن تجربه کاری مرتبط است. معمولاً
                      حداقل ۴ سال تجربه کاری در زمینه مهندسی نیاز است. این تجربه باید تحت نظارت یک مهندس حرفه‌ای (P.Eng)
                      باشد و شامل توسعه مهارت‌های فنی و حرفه‌ای لازم برای انجام وظایف مهندسی به صورت مستقل باشد.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question76'
                    aria-expanded='false'
                    aria-controls='Question76'
                  >
                    چطور می‌توانم از دوره‌های آموزشی و برنامه‌های توسعه حرفه‌ای استفاده کنم؟
                  </button>
                </h2>
                <div id='Question76' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      مهندسان و زمین‌شناسان بریتیش کلمبیا دوره‌های آموزشی و برنامه‌های توسعه حرفه‌ای متنوعی را ارائه
                      می‌دهند. این دوره‌ها به مهندسان کمک می‌کنند تا مهارت‌ها و دانش خود را به‌روز کنند و با آخرین
                      تکنولوژی‌ها و روندهای صنعتی آشنا شوند. اطلاعات بیشتر در مورد دوره‌ها و برنامه‌های آموزشی موجود در
                      وب‌سایت مهندسان و زمین‌شناسان بریتیش کلمبیا قابل دسترسی است.
                    </p>
                  </div>
                </div>
              </div>
              <p>
                این پاسخ‌ها نمونه‌ای از سوالات متداول در مورد مجوز مهندسی در بریتیش کلمبیا است. برای اطلاعات بیشتر و
                پاسخ به سوالات خاص خود، حتماً به وب‌سایت رسمی مهندسان و زمین‌شناسان بریتیش کلمبیا مراجعه کنید.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Index.guestGuard = true

export default Index
