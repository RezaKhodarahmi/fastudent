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
                مهندسی در کانادا از دسته مشاغل نظام‌مند (Regulated) است و برای فعالیت حرفه‌ای در این حوزه، متقاضی باید لایسنس مهندس حرفه‌ای (Professional engineer یا به اختصار .P.Eng) را دریافت کند. فعالیت مهندسی در کانادا، شامل آنالیز، طراحی و محاسبات است. هر عملی که در این سه حوزه قرار نداشته باشد، جزو فعالیت مهندسی پذیرفته نمی‌شود.
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
              <p>قطعا، همه افراد نمی&zwnj;توانند برای این لایسنس اقدام کنند. درست مانند هر شغل دیگری، باید شرایطی را داشته باشید تا بتوانید لایسنس مهندسی در کانادا را ار آن خود کنید. برای داشتن صلاحیت دریافت لایسنس مهندسی در کانادا، فعالیت&zwnj;های شما باید شامل موارد زیر باشد:</p>
              <ul>
                <li>آنالیز</li>
                <li>طراحی (Design)</li>
                <li>محاسبات (Calculation)</li>
              </ul>
              <p>اگر فعالیت&zwnj;هایی که انجام داده&zwnj;اید در این سه شاخه قرار ندارند، شما امکان دریافت لایسنس مهندسی را ندارید و تجربیات کاری شما مورد تایید ادارات مهندسی کانادا قرار نمی&zwnj;گیرد. برای مثال، موارد زیر را می&zwnj;توان به عنوان کیس&zwnj;هایی نام برد که نمی&zwnj;توانند لایسنس مهندسی دریافت کنند:</p>
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
              <p>به صورت کلی، &zwnj;استان&zwnj;های کانادا قوانین و مقررات خاص خود را برای ارائه لایسنس مهندسی (P.Eng) دارند، اما تقریبا روند کار در اکثر استان&zwnj;ها مشابه است. پیشنهاد می&zwnj;شود که در اولین گام، تمامی ویدیوهای مربوط به مهندسی در کانادا را در کانال یوتیوب فناوران مشاهده کرده و با قوانین استان مورد نظر خود، آشنا شوید. مراحل دریافت لایسنس مهندسی در کانادا را می&zwnj;توان به صورت زیر، خلاصه کرد:</p>
              <ol>
                <li>ثبت&zwnj;نام در سازمان مربوطه در استان محل سکونت و پر کردن فرم&zwnj;های مورد نیاز<br />در ابتدا، توصیه می&zwnj;شود که قوانین و مقررات و پیش&zwnj;نیازهای هر استان را مطالعه کنید. با اینکه کار متوجه می&zwnj;شوید که آیا واجد شرایط دریافت لایسنس هستید یا خیر. سایت&zwnj;های ادارات مهندسی در استان&zwnj;های مختلف:
                  <ul>
                    <li><Link href="https://www.egbc.ca/">Engineers and Geoscientists British Columbia (EGBC) &ndash; British Columbia</Link></li>
                    <li><Link href="https://www.apega.ca/">Association of Professional Engineers and Geoscientists of Alberta (APEGA) &ndash; Alberta</Link></li>
                    <li><Link href="https://www.apegs.ca/">Association of Professional Engineers and Geoscientists of Saskatchewan (APEGS) &ndash; Saskatchewan</Link></li>
                    <li><Link href="https://www.engm.ca/">Association of Professional Engineers and Geoscientists of Manitoba (APEGM) &ndash; Manitoba</Link></li>
                    <li><Link href="https://www.peo.on.ca/">Professional Engineers Ontario (PEO) &ndash; Ontario</Link></li>
                    <li><Link href="https://www.oiq.qc.ca/">Ordre des ing&eacute;nieurs du Qu&eacute;bec (OIQ) &ndash; Quebec</Link></li>
                    <li><Link href="https://www.apegnb.com/">Professional Engineers and Geoscientists of New Brunswick (PEGNB) &ndash; New Brunswick</Link></li>
                    <li><Link href="https://www.pegnl.ca/">Association of Professional Engineers and Geoscientists of Newfoundland and Labrador (PEGNL) &ndash; Newfoundland and Labrador</Link></li>
                    <li><Link href="https://engineerspei.com/">Association of Professional Engineers of Prince Edward Island (Engineers PEI) &ndash; Prince Edward Island</Link></li>
                    <li><Link href="https://engineersnovascotia.ca/">Engineers Nova Scotia (Engineers NS) &ndash; Nova Scotia</Link></li>
                    <li><Link href="https://www.apegy.ca/">Association of Professional Engineers and Geoscientists of Yukon (APEGY) &ndash; Yukon</Link></li>
                    <li><Link href="https://www.napeg.nt.ca/">Northwest Territories and Nunavut Association of Professional Engineers and Geoscientists (NAPEG) &ndash; Northwest Territories and Nunavut</Link></li>
                  </ul>
                </li>
                <li>تکمیل پیش&zwnj;نیازهای مهندسی هر استان<br />پیش&zwnj;نیازهای مهندسی در استان&zwnj;های مختلف ممکن است متفاوت باشند. می&zwnj;توان پیش&zwnj;نیازهای مهندسی را به شکل زیر خلاصه کرد (توصیه می&zwnj;شود که حتما سایت سازمان مهندسی استان خود را برای این مورد به دقت بررسی کنید):
                  <ul>
                    <li>پیش&zwnj;نیاز آکادمیک: مدرک لیسانس (4 ساله) در یکی از رشته&zwnj;های مهندسی؛ مدارک بالاتر از لیسانس در صورتی قابل ارائه هستند که هم راستا با لیسانس باشند. برای ارسال مدارک تحصیلی خود به سازمان&zwnj;های مهندسی،&zwnj;دو راهکار وجود دارد:
                      <ul>
                        <li>ارائه مدارک مهر و موم: مدارک ترجمه شده باید از دانشگاه شما به صورت مهر و موم شده (Sealed) مستقیم به اداره مهندسی استان فرستاده شود.</li>
                        <li>تایید یک مهندس دارای لایسنس P.Eng: اگر مدارک تحصیلی خود را به صورت ترجمه شده ارائه می&zwnj;دهید، این مدارک باید به تایید یک مهندس دارای لایسنس P.Eng برسند.پس از آن، باید به اداره مهندسی استانتان فرستاده شوند. فناوران برای اعضای VIP مجموعه، تایید مدارک تحصیلی را به صورت رایگان انجام می&zwnj;دهد. در صورت نیاز به تایید، مطابق با <Link href="https://fanavaran.ca/wp-content/uploads/2022/07/2746566a-c838-4feb-8204-a0bf3ab04f66.pdf">این الگو</Link> مدارک خود را به همراه رسید <Link href="https://fanavaran.ca/membership-account/membership-levels/">عضویت VIP</Link> برای ما ارسال کنید.</li>
                        <li>&nbsp;برای ارائه مدارک تحصیلی، باید شرح دروس (Course Description) خود را نیز ارائه کنید.
                          <ul>
                            <li>چند مورد از کورس دیسکریپشن رشته&zwnj;های مختلف:
                              <ul>
                                <li>
                                  <p><Link href="https://fanavaran.ca/courses/nppe-exam-preparation/">دوره آمادگی برای آزمون NPPE</Link></p>
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
              <p>اگر قصد دارید مدارک و سوابق خود را برای سازمان مهندسی استان خود ارسال کنید، ابتدا باید از تمامی فرایند آن آگاه شوید و سپس با اجرای دقیق مراحل آن اقدام به ارسال مدارک کنید.</p>
              <p>مشاهده وبینار .Road to P.Eng در یوتیوب فناوران ((لینک این رو باید بذاریم))</p>
              <ol>
                <li>توصیه فناوران به همه داوطلبان .P.Eng این است که در مرحله اول به طور مفصل درباره مهندسی در کانادا اطلاعات کسب کنند.</li>
                <li>پر کردن فرم&zwnj;های اپلیکیشن اداره مهندسی استان محل سکونت<br />تمام فرم&zwnj;های آپدیت شده در هر استان قرار داده شده است.</li>
                <ul>
                  <li><Link href="https://www.peo.on.ca/">مهندسی در استان انتاریو</Link></li>
                  <li><Link href="https://engineersnovascotia.ca/">مهندسی استان نواسکوشیا</Link></li>
                  <li><Link href="https://www.apega.ca/">مهندسی استان آلبرتا</Link></li>
                  <li><Link href="https://www.egbc.ca/">مهندسی استان بریتیش کلمبیا</Link></li>
                </ul>
                <li>برای ارسال مدارک دو راه کلی وجود دارد:</li>
                <ul>
                  <li>مدارک ترجمه شده باید از دانشگاه شما به صورت مهر و موم شده (Sealed) مستقیم به اداره مهندسی استان فرستاده شود.</li>
                  <li>اگر مدارک تحصیلی خود را به صورت ترجمه شده دارید این مدارک باید به تایید یک مهندس .P.Eng برسد و سپس به اداره مهندسی استانتان فرستاده شود.</li>
                  <ul>
                    <li>اگر برای تایید مدارک ترجمه شده خود برای کانادا، مهندس دارای P.Eng نمی&zwnj;شناسید، فناوران می&zwnj;تواند این سرویس را به شما ارائه دهد. لطفا حتما statementهای مورد نظر خود را هم به زبان فارسی و هم انگلیسی، به مدارک خود اضافه (مانند زیر) و برای آدرس info@fanavaran.ca&nbsp; بفرستید. این خدمات فقط برای اعضای فناوران در دردسترس است. (برای <Link href="https://fanavaran.ca/membership-account/membership-levels/">عضویت در فناوران</Link> کلیک کنید)</li>
                    <li>اگر می&zwnj;خواهید مدارک مهندسی شما توسط فناوران مورد تایید قرار بگیرد لطفا طبق <Link href="https://fanavaran.ca/wp-content/uploads/2022/07/2746566a-c838-4feb-8204-a0bf3ab04f66.pdf">این الگو</Link> اقدام فرمایید.</li>
                    <li>ممکن است برخی افراد پیش از مرحله دریافت گواهی EIT ملزم به گذراندن دوره&zwnj;های تکنیکال باشند. این دوره&zwnj;ها در کانادا، به زبان انگلیسی برگزار می&zwnj;شوند و ممکن است افراد نتوانند در آزمون&zwnj;های نهایی به موفقیت دست پیدا کنند. فناوران با استفاده از اساتید مجرب و دانشگاهی، این <Link href="https://fanavaran.ca/p-eng-courses/">دوره&zwnj;های تکنیکال</Link> را به صورت خصوصی و نیمه خصوصی برای شما برگزار خواهد کرد.(<Link href="https://fanavaran.ca/p-eng-courses/">برای ثبت نام کلیک کنید</Link>)</li>
                  </ul>
                </ul>
                <li>توجه داشته باشید که باید شرح دروس خود را نیز ارائه کنید و در صورت نیاز <Link href="https://fanavaran.ca/wp-content/uploads/2022/06/Grading-Rubric-Polytechnic.pdf">جدول Grading Rubric</Link> را جهت تطبیق نمرات داشته باشید.<br />چند نمونه دیسکریپشن رشته&zwnj;های مهندسی مختلف:
                  <ul>
                    <li><Link href="https://fanavaran.ca/wp-content/uploads/2022/05/Civil-Engineering.pdf">Civil Engineer</Link></li>
                    <li><Link href="https://fanavaran.ca/wp-content/uploads/2022/05/Electrical-Engineering.pdf">Electrical Engineering</Link></li>
                    <li><Link href="https://fanavaran.ca/wp-content/uploads/2022/05/Mechanical-eng-University-of-Tehran.pdf">1 - Mechanical eng</Link></li>
                    <li><Link href="https://fanavaran.ca/wp-content/uploads/2022/09/course.doc">2 - Mechanical eng</Link></li>
                    <li><Link href="https://fanavaran.ca/wp-content/uploads/2022/05/Civil-and-Environmental-Engineering-Babol.pdf">Civil and Environmental Engineering</Link></li>
                    <li><Link href="https://fanavaran.ca/wp-content/uploads/2022/09/PEO-FAQ-for-Experience-Documentation.pdf">Irrigation Engineering</Link></li>
                  </ul>
                </li>
                <li>ممکن است نیاز به جدول Grading Rubric نیز داشته باشید که از طریق <Link href="https://fanavaran.ca/wp-content/uploads/2022/06/Grading-Rubric-Polytechnic.pdf">این لینک</Link> می&zwnj;توانید دریافت کنید.
                  <ul>
                    <li>EIT و آزمون&zwnj;های تکنیکال: در بعضی از استان&zwnj;های کانادا که نیاز به سابقه کار کانادایی وجود دارد، متقاضیان می&zwnj;توانند نسبت به دریافت EIT designation اقدام کنند. پس از ثبت اپلیکیشن، متقاضیان ملزم به گذراندن 4 کورس تکنیکال می&zwnj;شوند. توجه داشته باشید، در صورتی که لیسانس مهندسی شما با سوابق کاری همراستا نباشد، به احتمال زیاد بیشتر از 18 آزمون تکنیکال به شما داده می&zwnj;شود.</li>
                    <li>آزمون تکنیکال شامل چهار آزمون اصلی است. دو امتحان از گروه A از هر رشته مهندسی، یک امتحان از گروه B از هر رشته مهندسی و یک امتحان از مطالعات تکمیلی (CS).</li>
                    <li>به این دلیل که هیچ&zwnj;یک از دانشگاه&zwnj;های ایران در لیست CEAB قرار نمی&zwnj;گیرند، تمامی فارغ&zwnj;التحصیل&zwnj;ها باید disciplines of assessment مربوط به Non-CEAB Graduates هر استان را بررسی کرده، رشته تحصیلی خود را پیدا کنند و سپس اطلاعات و داده&zwnj;های مربوطه را مطالعه کنند.</li>
                    <li>نگارش تجربیات کاری (سوابق مهندسی): نگارش سوابق مهندسی مطابق با استانداردهای سازمان&zwnj;های مهندسی و استفاده از ترمینولوژی&zwnj;های دقیق و رفرال&zwnj;های معتبر اهمیت زیادی در پرونده شما دارد. سوابق کاری شما باید مطابق با تعریف &laquo;مهندسی در کانادا&raquo; باشد و از نظر فاکتورهای مختلف معقول باشد. برای اطلاع از نحوه نگارش سوابق کاری، توصیه می&zwnj;کنیم ورکشاپ تخصصی نگارش تجربیات مهندسی را مشاهده کنید.</li>
                  </ul>
                </li>
              </ol>
              <p>نحوه صحیح نوشتن تجربیات مهندسی در کانادا ((لینک باید گذاشته شود))</p>
              <ul>
                <li>پاس کردن آزمون NPPE: آزمون NPPE یک آزمون دشوار در رابطه با حقوق و اخلاق مهندسی است. این آزمون مربوط به دو کتاب Ethics و Law خواهد بود که مجموعا بیشتر از 1000 صفحه است و برای دریافت لایسنس رشته&zwnj;های مهندسی باید از سد این آزمون عبور کرد. برای کسب اطلاعات بیشتر، صفحه <Link href="https://fanavaran.ca/what-is-the-nppe-test-and-what-are-its-points/">آزمون NPPE</Link> را مطالعه کنید.</li>
                <li>مهارت زبان انگلیسی: زبان انگلیسی مهم&zwnj;ترین فاکتوری است که نه تنها برای رشته&zwnj;های مهندسی، بلکه برای تمامی مشاغل کانادا ضروری است. اگر سطح زبان شما از CLB 10 پایین&zwnj;تر است، شانس شما برای موفقیت در حوزه شغلی کم خواهد بود. توصیه می&zwnj;شود که حتما نسبت به تقویت دانش زبان انگلیسی خود به صورت مستمر برای حداقل یک سال برنامه&zwnj;ریزی کنید.</li>
                <li>ارائه رزومه: فاکتور مهمی که به عنوان یک مهندسی جویای کار باید به آن توجه داشته باشید، نوشتن درست رزومه است. فناوران در جهت کمک هرچه بیشتر به کامیونیتی ایرانی مقیم کانادا، مجموعه&zwnj;ای از دوره&zwnj;ها، وبینارها و کارگاه&zwnj;های ویژه رزومه&zwnj;نویسی و کاریابی را برگزار کرده است. در صفحه <Link href="https://fanavaran.ca/job-searching/">جوینده شغل</Link>، می&zwnj;توانید اطلاعات جامعی در این زمینه به دست بیاورید. برای دانلود تمپلیت رزومه مهندسی از <Link href="https://fanavaran.ca/wp-content/uploads/2022/08/Resume-temp.docx">این لینک</Link> استفاده کنید.</li>
              </ul>
              <p>پس از ارائه اپلیکیشن، در استان&zwnj;هایی مانند انتاریو که تقاضا برای متخصصان رشته&zwnj;های مهندسی بیشتر است، سازمان&zwnj;های مهندسی موظف هستند تا وضعیت اپلیکیشن&zwnj;هایی که کامل هستند را ظرف 6 ماه تعیین تکلیف کنند.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P4'>
        <div className='container'>
          <div className='row'>
            <h3>فناوران چه کمکی می‌کند؟</h3>

            <div className='col-12'>
              <p>فناوران برای کمک هرچه بیشتر به کامیونیتی مهندسان ایران و فارسی زبان، خدمات مختلفی را فراهم کرده است. در این راستا به شما کمک می&zwnj;کند تا بتوانید برای آزمون NPPE آماده شده و همچنین در نگارش صحیح و استاندارد سوابق مهندسی همراه شما خواهد بود.</p>
              <ul>
                <li>آمادگی آزمون NPPE: همانطور که گفته شد، آزمون NPPE یک آزمون دشوار در رابطه با حقوق و اخلاق مهندسی است. موسسه فناوران، دوره آمادگی آزمون NPPE را به زبان فارسی و با ترمینولوژی انگلیسی برگزار می&zwnj;کند. هدف از تدریس به زبان فارسی درک بیشتر و بهتر مطالب است. در این دوره 11 جلسه کتاب&zwnj;های حقوق و اخلاق مهندسی تدریس می&zwnj;شوند و 11 جلسه تست تخصصی برگزار می&zwnj;شود. علاوه بر این، بیشتر از یک هزار تست تخصصی در پنل کاربری وجود دارد که شرکت&zwnj;کنندگان می&zwnj;توانند در شرایط امتحانی تمرین کنند و سوالات خود را از مدرس دوره بپرسند.</li>
              </ul>
              <ul>
                <li>تشکیل پرونده در ادارات مهندسی و نگارش سوابق کاری: نگارش صحیح و استاندارد سوابق مهندسی اهمیت زیادی دارد. در صورتی که سوابق مهندسی خود را به صورت استاندارد و با ترمینولوژی&zwnj;های دقیق ارائه کنید، می&zwnj;تواند آزمون&zwnj;های تکنیکال دوره لیسانس را Waive کنید و به دریافت لایسنس P.Eng نزدیک&zwnj;تر شوید. فناوران این خدمات را برای مهندسان ایرانی فراهم کرده تا پرونده&zwnj;های آن&zwnj;ها با روندی درست در ادارات مهندسی طی شوند. متقاضیان می&zwnj;توانند 15 دقیقه مشاوره رایگان برای آشنایی بیشتر با این روند داشته باشند و در صورت استفاده از این خدمات، یک سال عضویت VIP موسسه فناوران به عنوان هدیه دریافت می&zwnj;کنند.</li>
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Index.guestGuard = true

export default Index
