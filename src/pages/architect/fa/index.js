import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { appConfig } from 'src/configs/appConfig'

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
      router.push('/architect')
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
              <h1>معماری در کانادا</h1>
            </div>

            <div className='col-12 col-md-6'>
              <span>پیش از هر اقدامی، این ویدئو را ببینید</span>
              <iframe
                src='https://www.youtube.com/embed/aiEf2coL1Io?si=797TOjCck3TonU0e'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>

            <div className='col-12 col-md-6'>
              <p>
                معماری در کانادا جزو مشاغل نظام‌مند است. معماران، متخصصان حرفه‌ای هستند که از انجمن معماری یک یا چند استان، مجوز مورد نیاز برای انجام فعالیت‌های معماری را اخذ کرده‌اند. معماری در کانادا شامل نقشه‌کشی، طراحی و توسعه طرح‌های ساختمانی یا نوسازی ساختمان‌های تجاری، مسکونی و سازمانی است. برای یک معمار در این کشور، شرکت‌های معماری، شرکت‌های خصوصی و بخش‌های دولتی فرصت‌های شغلی بسیاری ارائه می‌کنند و معماران می‌توانند به صورت خوداشتغالی نیز فعالیت داشته باشند. این افراد به عنوان اعضای انجمن‌های معماری کانادا موظفند تا به صورت کامل قانون معماران و آیین‌نامه‌های استانی را رعایت کرده و انتظار می‌رود که منشور اخلاقی انجمن خود را نیز دنبال کنند. پس از دریافت مجوز، همه معماران باید تلاش کنند تا عضویت خود را در استان مربوطه حفظ کنند.
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
                  <Link href='#P1'>سازمان امور مربوط به معماری کانادا (CACB)</Link>
                </li>
                <li>
                  <Link href='#P2'>انجمن‌های معماری استانی</Link>
                </li>
                <li>
                  <Link href='#P3'>آزمون ویژه معماران در کانادا Examination for Architects in Canada (EXAC)</Link>
                </li>
                <li>
                  <Link href='#P4'>پیش‌نیازهای دریافت لایسنس معماری در استان‌های مختلف</Link>
                </li>
                <li>
                  <Link href='#P5'>مسیر شغلی معمار در استان انتاریو</Link>
                </li>
                <li>
                  <Link href='#P6'>مسیر شغلی معمار در بریتیش کلمبیا</Link>
                </li>
                <li>
                  <Link href='#P7'>وظایف شغلی معماران در کانادا</Link>
                </li>
                <li>
                  <Link href='#P8'>بازار کار شغل معماری در کانادا</Link>
                </li>
                <li>
                  <Link href='#P9'>مهارت‌های مورد نیاز شغل معماری در کانادا</Link>
                </li>
                <li>
                  <Link href='#P10'>مزایای مدرک معماری در کانادا</Link>
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
            <h3>سازمان امور مربوط به معماری کانادا (CACB)</h3>

            <div className='col-12'>
              <p>سازمان CACB مخفف (Canadian Architectural Certification Board) سازمان انحصاری امور مربوط به معماری در کانادا است. متقاضیان قبل از ثبت&zwnj;نام در هر یک از انجمن&zwnj;های استانی کانادا، باید مدارک تحصیلی خود را توسط CACB تایید کنند. با توجه به مطابقت مدرک با استانداردهای آموزشی اعتبار شش ساله، سه ساله یا دو ساله به آن مدرک تعلق می&zwnj;گیرد. داشتن مدرک حرفه&zwnj;ای معتبر به عنوان پیش&zwnj;نیازی برای کسب مجوز از نظام معماری استانی یا منطقه&zwnj;ای توصیه می&zwnj;شود. با تایید مدارک تحصیلی، متقاضیان باید شرایط کسب مجوز (از جمله کارورزی+ آزمون) را در استانی که قصد ثبت&zwnj;نام در آن دارند، تکمیل کنند. چهار گروه برای برآورده کردن استاندارد آموزشی کانادا (نوع مدرک تحصیلی) وجود دارد:</p>
              <ul>
                <li>مدارک حرفه&zwnj;ای معتبر: مختص فارغ&zwnj;التحصیلان دوره&zwnj;های معماری مورد تایید CACB یا NAAB آمریکا</li>
                <li>مدارک حرفه&zwnj;ای یا دیپلم&zwnj;های تایید نشده توسط CACB: مختص فارغ&zwnj;التحصیلان مدارس معماری کانادا قبل از تاسیس CACB در سال 1991 و فارغ&zwnj;التحصیلان مدارس و دانشکده&zwnj;های معماری خارج از کانادا (به جز آمریکا)</li>
                <li>ثبت&zwnj;نام قبل از گذراندن مراحل گواهینامه: مختص معمارانی که قبل از 1 جولای 1976 در نظام استانی ثبت&zwnj;نام کرده&zwnj;اند.</li>
                <li>دیپلم خلاصه دروس دوره&zwnj;های موسسه سلطنتی معماری کانادا: مختص فارغ&zwnj;التحصیلان موسسه سلطنتی معماری کانادا</li>
              </ul>

              <h4>حوزه فعالیت سازمان CACB</h4>

              <p>این سازمان معمولاً به عنوان بخشی از اتحادیه معماران کانادا یا به صورت مستقل فعالیت می&zwnj;کند و وظیفه اصلی آن اعتبارسنجی برنامه&zwnj;های آموزشی معماری و صدور گواهینامه&zwnj;های حرفه&zwnj;ای برای معماران است. این سازمان با هدف تضمین استانداردهای حرفه&zwnj;ای و اخلاقی در حوزه معماری فعالیت می&zwnj;کند و نقش مهمی در تقویت کیفیت آموزش و حرفه&zwnj;ای شدن معماران در کانادا دارد. حوزه فعالیت سازمان CACB به شرح زیر است:</p>
              <ul>
                <li>ارزیابی مدارک تحصیلی فارغ&zwnj;التحصیلان معماری</li>
                <li>تایید دوره&zwnj;های حرفه&zwnj;ای معماری ارائه شده در دانشگاه&zwnj;های کانادایی</li>
                <li>گواهی مدارک حرفه&zwnj;ای معماران خارجی بسیار با تجربه (BEFA)</li>
              </ul>
              <p>این سازمان تنها در همین سه حوزه فعالیت دارد. پس اگر موضوع شما در هیچ&zwnj;یک از این سه بخش قرار ندارد، باید به دنبال سازمان مورد نظر باشید.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P2'>
        <div className='container'>
          <div className='row'>
            <h3>انجمن‌های معماری استانی</h3>

            <div className='col-12'>
              <p>به طور کلی، برای آنکه شخصی به عنوان معمار در کانادا شناخته شده و اجازه کار حرفه&zwnj;ای داشته باشد باید چندین مرحله را طی کند. اگرچه مدرک تحصیلی از اهمیت بالایی برخوردار است، اما کانادا جزو کشورهایی است که صرفا فارغ&zwnj;التحصیلی در رشته&zwnj;های معماری یا مهندسی را به عنوان قدم لازم و کافی برای فعالیت در این رشته&zwnj;ها به شمار نمی&zwnj;آورد. در نتیجه&zwnj;، کسانی که می&zwnj;خواهند در این حرفه&zwnj; فعالیت کنند باید:</p>
              <ul>
                <li>در رشته معماری تحصیل کرده باشند.</li>
                <li>سابقه کاری کافی داشته باشند.</li>
                <li>آزمون Examination for Architects in Canada (ExAC) را بگذرانند</li>
              </ul>
              <p>&nbsp;نحوه گذراندن این مراحل برای هر استان می&zwnj;تواند متفاوت باشد. شما می&zwnj;توانید برای اطلاع دقیق&zwnj;تر از عملکرد هر استان به سایت رسمی انجمن معماران استانی که در زیر آمده است مراجعه کنید.</p>
              <ul>
                <li>آلبرتا: <Link href="http://www.aaa.ab.ca/">Alberta Association of Architects</Link></li>
                <li>بریتیش کلمبیا: <Link href="http://www.aibc.ca/">Architectural Institute of British Columbia</Link></li>
                <li>مانیتوبا: <Link href="http://www.mbarchitects.org/">Manitoba Association of Architects</Link></li>
                <li>نیو برونزویک: <Link href="http://www.aanb.org/">Architects&rsquo; Association of New Brunswick</Link></li>
                <li>نیو فاندلند و لابرادور: <Link href="http://www.albnl.com/documents/">Architects Licensing Board of Newfoundland &amp; Labrador</Link></li>
                <li>سرزمین&zwnj;های شمال غرب: <Link href="http://www.nwtaa.ca/">Northwest Territories Association of Architects</Link></li>
                <li>نووا اسکاتیا: <Link href="http://www.nsaa.ns.ca/">Nova Scotia Association of Architects</Link></li>
                <li>انتاریو: <Link href="http://www.oaa.on.ca/">Ontario Association of Architects</Link></li>
                <li>جزیره پرنس ادوارد: <Link href="http://www.aapei.com/">Architects Association of Prince Edward Island</Link></li>
                <li>کبک: <Link href="http://www.oaq.com/">Ordre des architectes du Qu&eacute;bec</Link></li>
                <li>ساسکاچوان: <Link href="http://www.saskarchitects.com/">Saskatchewan Association of Architects</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P3'>
        <div className='container'>
          <div className='row'>
            <h3>آزمون ویژه معماران در کانادا Examination for Architects in Canada (EXAC)</h3>

            <div className='col-12'>
              <p>آزمون ExAC یک آزمون ملی است که شایستگی فارغ&zwnj;التحصیلان معماری را ارزیابی می&zwnj;کند. این آزمون توسط کمیته ExAC اداره می&zwnj;شود که اعضای آن نمایندگانی از مقامات معمار استانی در سراسر کانادا را شامل می&zwnj;شود. هدف ExAC اطمینان از این است که معماران دارای دانش و مهارت&zwnj;های لازم برای کار در کانادا باشند. این آزمون درک داوطلبان از جنبه&zwnj;های مختلف عملکرد معماری را، از جمله طراحی، سیستم&zwnj;های ساختمانی، روش&zwnj;های ساخت، مدیریت پروژه، عملکرد حرفه&zwnj;ای و اخلاقیات ارزیابی می&zwnj;کند.</p>
              <p>ویژگی&zwnj;های کلیدی ExAC عبارتند از:</p>
              <ul>
                <li>قالب این آزمون: ExAC یک آزمون جامع دو روزه است که از دو بخش تشکیل شده است. بخش اول به طور معمول شامل سوالات چند گزینه&zwnj;ای است، در حالی که بخش دوم شامل سوالات مبتنی بر سناریو و تمرین&zwnj;های گرافیکی می&zwnj;شود.</li>
                <li>محتوای این آزمون: محتوای آزمون بر مشخصات ملی آزمون معماران در کانادا استوار است که زمینه&zwnj;های شایستگی و دانش مورد نیاز برای فعالیت معماری را شرح می&zwnj;دهد. محتوا به&zwnj;صورت دوره&zwnj;ای بررسی و به&zwnj;روزرسانی می&zwnj;شود تا تغییرات در حرفه و استانداردهای صنعت را منعکس کند.</li>
                <li>آمادگی برای آزمون: داوطلبان به&zwnj;طور معمول از طریق ترکیبی از خودآموزی، دوره&zwnj;های آموزشی و آزمون&zwnj;های عملی برای ExAC آماده می&zwnj;شوند.</li>
                <li>دفعات برگزاری آزمون: ExAC دو بار در سال برگزار می&zwnj;شود، معمولا در بهار و پاییز. داوطلبان باید پیش&zwnj;نیازهای تعیین&zwnj;شده را برای ثبت&zwnj;نام در آزمون برآورده کنند.</li>
              </ul>
              <p>بخش&zwnj;های اصلی EXAC&nbsp;</p>
              <p>EXAC&nbsp; نیز درست مانند هر آزمون دیگری، بخش&zwnj;های خاص مربوط به خود را دارد. EXAC از چهار بخش تشکیل شده و حوزه&zwnj;های موضوعی زیر را که در برنامه کارآموزی در معماری آمده است پوشش می&zwnj;دهد:</p>
              <ul>
                <li>برنامه&zwnj;ریزی</li>
                <li>آنالیز سایت و محیط</li>
                <li>مدیریت هزینه&zwnj;ها</li>
                <li>هماهنگی سیستم&zwnj;های مهندسی</li>
                <li>طراحی نقشه&zwnj;ها</li>
                <li>توسعه طرح&zwnj;ها</li>
                <li>نهایی&zwnj;سازی پروژه</li>
                <li>اشراف بر قوانین</li>
                <li>مناقصات و مذاکرات برای قراردادها</li>
                <li>فاز ساخت&zwnj;وساز (دفتر کار)</li>
                <li>فاز ساخت&zwnj;وساز (سایت)</li>
                <li>مدیریت پروژه</li>
                <li>مطالعات قوانین</li>
              </ul>
              <h4>منابع اصلی برای آزمون EXAC</h4>
              <p>اگر قصد دارید در این آزمون شرکت کنید، باید به منابعی دسترسی داشته باشید که می&zwnj;توانند بهترین نتیجه را در اختیار شما قرار دهند. در این بخش تلاش کرده&zwnj;ایم منابع اصلی این آزمون را در اختیار شما قرار دهیم. منابع اصلی این آزمون به شرح زیر است:</p>
              <ul>
                <li>Internship in Architecture (IAP)</li>
                <li>Canadian Handbook of Practice for Architecture (CHOP)</li>
                <li>ExAC Website.</li>
                <li>National Building Code 2005 edition</li>
                <li>National Building Code of Canada, 2015 Edition (without the provincial adaptations)</li>
                <li>CCDC Contracts and Guides:&nbsp; *CCDC2</li>
                <li>RAIC Contracts and Guides: *RAIC Document 6</li>
                <li>The Architect's Studio Companion: Rules of Thumb for Preliminary Design</li>
                <li>RIAC - Sustainable Design Fundamentals for Buildings</li>
                <li>LEED - Green Building Rating Systems</li>
                <li>Building Envelope&nbsp;</li>
                <li>Building Systems: wood framing, steel framing, mass timber</li>
                <li>Acoustics</li>
                <li>Lighting: day-lighting and artificial lighting</li>
                <li>Cost estimation and budgeting&nbsp;</li>
              </ul>
              <h5>National Building Code of Canada چیست؟</h5>
              <p>منبع اصلی برای گذراندن آزمون EXAC و انجام فعالیت حرفه&zwnj;ای برای معماری در کانادا، در واقع National Building Code است. در این قسمت متقاضیان با قوانین ریز و درشت تعریف شده کانادا برای ساخت&zwnj;وساز و همچنین استانداردهای مورد نیاز، آشنا می&zwnj;شوند. NBC دارای 11 بخش کلی است که مهم&zwnj;ترین آن&zwnj;ها National Building Code Part3 مربوط به اصول ایمنی و حریق و National Building Code Part 9 درباره ساختمان&zwnj;های مسکونی در کانادا است.</p>
              <p>در آزمون ExAC، داوطلبان ممکن است با سوالات مرتبط با کدهای ملی ساختمانی کانادا (NBC)، به خصوص بخش 3 و بخش 9، روبه&zwnj;رو شوند. در زیر مروری بر این بخش&zwnj;ها خواهیم داشت:</p>
              <p>۱. بخش 3: محافظت در برابر آتش، ایمنی ساکنین و نوع دسترسی:</p>
              <ul>
                <li>بخش 3 از کد ملی ساختمان کانادا به طور عمده به الزامات مربوط به محافظت در برابر آتش، ایمنی ساکنین و دسترسی در ساختمان&zwnj;ها می&zwnj;پردازد.</li>
                <li>این بخش شامل مقرراتی برای مصالح ساختمانی مقاوم در برابر آتش، سیستم&zwnj;های آلارم آتش، سیستم&zwnj;های آب&zwnj;پاش، مسیرهای خروج اضطراری، جداکننده&zwnj;های آتش و سایر اقدامات ایمنی در برابر آتش می&zwnj;شود.</li>
                <li>بخش 3 همچنین به نیازمندی&zwnj;های دسترسی پرداخته است تا اطمینان حاصل شود که ساختمان&zwnj;ها به&zwnj;طور قابل استفاده&zwnj;ای برای افراد معلول طراحی شده&zwnj;اند، شامل مقرراتی برای دسترسی بدون مانع، عرض درها، پله&zwnj;ها، آسانسورها و حمام&zwnj;های قابل دسترسی است.</li>
                <li>معماران باید دانش قوی&zwnj;ای از الزامات بخش 3 داشته باشند تا اطمینان حاصل کنند که طراحی&zwnj;های آن&zwnj;ها با استانداردهای ایمنی در برابر آتش و دسترسی به&zwnj;روز هستند.</li>
              </ul>
              <p>۲. بخش 9: مسکن و ساختمان&zwnj;های کوچک</p>
              <ul>
                <li>بخش 9 از کد ملی ساختمان کانادا بر روی طراحی و ساخت ساختمان&zwnj;های کوچک، مانند خانه&zwnj;های تک خوابه، خانه&zwnj;های یک طبقه و ساختمان&zwnj;های تجاری کوچک، تمرکز دارد.</li>
                <li>این الزامات و معیارهای کاربردی برای طراحی ساختاری، ایمنی در برابر آتش، جداسازی محیطی، کارایی انرژی و سایر جنبه&zwnj;های مرتبط با ساختمان&zwnj;های مسکونی و مقیاس کوچک ارائه می&zwnj;دهد.</li>
                <li>بخش 9 به&zwnj;ویژه برای معمارانی که در پروژه&zwnj;های مسکونی درگیر هستند، بسیار مهم است زیرا حداقل استانداردها و روش&zwnj;هایی برای اطمینان از ایمنی، دوام و راحتی را مشخص می&zwnj;کند.</li>
                <li>معماران باید با الزامات بخش 9 آشنایی داشته باشند تا اطمینان حاصل شود که طراحی&zwnj;های آن&zwnj;ها با مقررات کدهای ساختمانی سازگاری دارند و محیطی ایمن و قابل سکونت برای ساکنان فراهم کنند.</li>
              </ul>
              <h5>Canadian Experience Record Book چیست؟</h5>
              <p>Canadian Experience Record Book یا به اختصار CERB، سندی است که توسط کارآموزان معماری در کانادا برای ثبت تجربه حرفه&zwnj;ای مورد استفاده قرار می&zwnj;گیرد. این داکیومنت یک دفترچه روزانه ساختارمند است که به متقاضیان کمک می&zwnj;کند تا تجربه عملی خود را ردیابی و ثبت کنند. ویژگی&zwnj;های کلیدی Canadian Experience Record Book عبارتند از:</p>
              <ul>
                <li>ساختارمند است.</li>
                <li>هر حوزه در CERB متناظر با وظایف، مسئولیت&zwnj;ها و اهداف یادگیری خاصی است که انتظار می&zwnj;رود کارآموزان در طول آموزش عملی خود به آن&zwnj;ها برسند.</li>
                <li>کارآموزان باید زیر نظر یک معمار مجاز کار کنند که راهنما و ارزیابی پیشرفت آن&zwnj;ها را انجام می&zwnj;دهد.</li>
                <li>هنگامی که کارآموزان دوره مورد نیاز آموزش عملی را کامل کرده و تجربه کافی را که در CERB ثبت شده است به دست آورده&zwnj;اند، می&zwnj;توانند داکیومنت را به عنوان بخشی از درخواست مجوز خود به مقامات تقدیم کنند.</li>
                <li>در کل، CERB یک ابزار ضروری برای کارآموزانی است که به دنبال مجوز کار در معماری در کانادا هستند.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P4'>
        <div className='container'>
          <div className='row'>
            <h3>پیش‌نیازهای دریافت لایسنس معماری در استان‌های مختلف</h3>

            <div className='col-12'>
              <p>پیش&zwnj;نیازهای دریافت مجوز معماری در استان&zwnj;های مختلف کانادا کمی متفاوت است، زیرا هر استان دارای انجمن معماری خود بوده که مسئول صدور مجوز معماران است. با این حال، برخی از الزامات در کلیه استان&zwnj;ها مشترک است:</p>
              <ul>
                <li>تحصیلات: به طور معمول، متقاضیان باید یک مدرک حرفه&zwnj;ای در معماری از یک دانشگاه معتبر ارائه دهند.ت</li>
                <li>تجربه: کاندیداها باید تجربه عملی معینی را در زیر نظر یک معمار مجاز کسب کنند. مدت این دوره تجربی در هر استان متفاوت است، اما به طور عمده حدود ۳٬۷۲۰ ساعت (معادل حدود دو سال کار تمام وقت) است. کارآموزان باید تجربیات خود را در یک دفترچه روزنامه&zwnj;ای ساختارمند، مانند کتاب سابقه تجربه کانادایی (CERB)، ثبت کنند.</li>
                <li>آزمون: کاندیداها باید آزمون معماران در کانادا (ExAC) را قبول شوند.</li>
                <li>نظارت: در طول دوره تجربه عملی خود، کاندیداها باید زیر نظر یک معمار مجاز کار کنند که پیشرفت آن&zwnj;ها را ارزیابی می&zwnj;کند.</li>
                <li>توسعه حرفه&zwnj;ای: توسعه حرفه&zwnj;ای شامل شرکت در فعالیت&zwnj;هایی مانند کارگاه&zwnj;ها، سمینارها و دوره&zwnj;های مرتبط با معماری می&zwnj;شود.</li>
              </ul>
              <p>در ادامه مسیر شغلی معمار در انتاریو و بریتیش کلمبیا بررسی شده است.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P5'>
        <div className='container'>
          <div className='row'>
            <h3>مسیر شغلی معمار در استان انتاریو</h3>

            <div className='col-12'>
              <p>معماری در استان انتاریو در کانادا، یک زمینهٔ پرشور و پرفراز و نشیب است که برای فارغ&zwnj;التحصیلان و حرفه&zwnj;ای&zwnj;های این صنعت چالش&zwnj;ها و فرصت&zwnj;های فراوانی را فراهم می&zwnj;کند. ابتدا برای ورود به این حرفه، باید دارای مدرک لایسنس (معادل مجوز) از انجمن معماران انتاریو باشید که نیازمند تحصیلات مربوطه و گذراندن آزمون&zwnj;های لازم است. در این استان، معماران می&zwnj;توانند در زمینه&zwnj;های مختلف از جمله معماری مسکونی، تجاری، صنعتی و حتی نوسازی شهری فعالیت کنند. با وجود شهرهای بزرگ مانند تورنتو و اتاوا، فرصت&zwnj;های شغلی فراوانی برای طراحی و ساخت وجود دارد. همچنین، توجه به مسائل محیط&zwnj;زیستی و پایداری از اهمیت بالایی برخوردار است که معماران با ایده&zwnj;های نوین و پایداری می&zwnj;توانند در حرفه خود پیشرفت کنند. در جدول زیر می&zwnj;توانید مسیر شغلی معمار در انتاریو را مشاهده کنید:</p>
              <img src={appConfig.appUrl + '/img/landings/oaa-paths-to-license.png'} className='img-fluid' />

              <h4 className='mt-4'>لایسنس BCIN&nbsp; در استان انتاریو</h4>               
              <p>Building Code Identification Number به اختصار (BCIN) در انتاریو برای افرادی است که می&zwnj;خواهند در فعالیت&zwnj;های مختلف مرتبط به ساختمان در این استان مشغول به کار شوند و یک جایگزین موقت برای دریافت لایسنس مهندسی و معماری است. با دریافت این لایسنس می&zwnj;توانید مادامی که فرایند اخذ لایسنس معماری یا مهندسی را طی می&zwnj;کنید، کار کنید و سابقه کار مورد نیاز یا کارآموزی مورد نیاز را پر کنید.&nbsp;</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P6'>
        <div className='container'>
          <div className='row'>
            <h3>مسیر شغلی معمار در بریتیش کلمبیا</h3>

            <div className='col-12'>
              <p>ر استان بریتیش کلمبیا کانادا، حرفه معماری زمینه&zwnj;ای پولساز و جذاب را برای علاقه&zwnj;مندان به طراحی و ساخت محیط&zwnj;های زندگی، فراهم می&zwnj;کند. برای ورود به این حرفه، ابتدا باید دارای مدرک لایسنس (معادل مجوز) از انجمن معماران بریتیش کلمبیا باشید که نیازمند تحصیلات مربوطه و گذراندن آزمون&zwnj;های لازم است. این استان با شهرهایی همچون ونکوور و ویکتوریا، به عنوان مراکز فرهنگی و اقتصادی، ارائه&zwnj;دهنده فرصت&zwnj;های شغلی گسترده در زمینه&zwnj;های مختلف از جمله معماری مسکونی، تجاری، صنعتی و حتی طراحی فضاهای عمومی و نوسازی شهری است. همچنین، توجه به مسائل محیط&zwnj;زیستی و پایداری از اهمیت بالایی برخوردار است که معماران می&zwnj;توانند با ایده&zwnj;های نوین و پایداری در زمینه حفظ محیط زیست و طراحی&zwnj;های سازگار با محیط، به پیشرفت حرفه خود کمک کنند. در جدول زیر، مسیر شغلی معمار در بریتیش کلمبیا، آورده شده است:</p>

              <img src={appConfig.appUrl + '/img/landings/pathways-to-register-as-an-architect-in-british-columbia.png'} className='img-fluid' />
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P7'>
        <div className='container'>
          <div className='row'>
            <h3>وظایف شغلی معماران در کانادا</h3>

            <div className='col-12'>
              <p>معماران در کانادا مسئولیت&zwnj;ها و وظایف گسترده&zwnj;ای دارند که شامل طراحی، برنامه&zwnj;ریزی، و نظارت بر ساخت و ساز محیط&zwnj;های زندگی است. آن&zwnj;ها با مشتریان همکاری می&zwnj;کنند تا نیازها و انتظاراتشان را درک کرده و طرح&zwnj;هایی برای ساختمان&zwnj;ها و فضاهای مختلف ارائه دهند. این شامل معماری مسکونی، تجاری، صنعتی و حتی فضاهای عمومی و نوسازی شهری می&zwnj;شود. به طور کلی، شغل معماری در کانادا شامل برخی یا تمام وظایف زیر می&zwnj;شود:</p>
              <ul>
                <li>رایزنی با مشتریان و تعیین نوع، سبک و هدف نوسازی یا ساخت بنای جدید</li>
                <li>طراحی و کشیدن نقشه ساختمان&zwnj;ها و توسعه طرح&zwnj;ها و نقشه&zwnj;هایی که ویژگی&zwnj;های طرح، مواد ساختمانی، هزینه&zwnj;ها و برنامه ساخت&zwnj;وساز را توضیح می&zwnj;دهد.</li>
                <li>آماده کردن طرح&zwnj;ها و مدل&zwnj;ها برای مشتریان</li>
                <li>آماده کردن یا نظارت بر آماده&zwnj;سازی نقشه&zwnj;ها، ویژگی&zwnj;ها و دیگر مدارک ساخت&zwnj;وساز برای پیمان&zwnj;کاران و کارفرماها</li>
                <li>آماده کردن اسناد مناقصه، مشارکت در مذاکرات عقد قرارداد و اعطای عقد قراردادهای ساخت</li>
                <li>نظارت بر فعالیت&zwnj;ها در محل&zwnj;های ساخت&zwnj;وساز برای اطمینان از انطباق کار با ویژگی&zwnj;ها و مشخصات نقشه&zwnj;ها</li>
                <li>بررسی&zwnj; عملی بودن پروژه و آنالیزهای مالی پروژه&zwnj;های ساختمانی</li>
              </ul>
              <p>نکته: معماران ممکن است در نوع خاصی از ساختمان تخصص داشته باشند، مثل ساختمان مسکونی، تجاری، صنعتی یا سازمانی</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P7'>
        <div className='container'>
          <div className='row'>
            <h3>بازار کار شغل معماری در کانادا</h3>

            <div className='col-12'>
              <p>طبق گزارش بانک کار دولت کانادا، بیش از 18000 نفر به عنوان معمار در کانادا کار می&zwnj;کنند. در نتیجه ایجاد فرصت&zwnj;های شغلی خالی و رشد اشتغال در این صنعت، پیش بینی کمبود نیروی متخصص وجود دارد. طبق گزارش سایت Y-Axis بین دوره 2022-2031، انتظار می&zwnj;رود کمبود 5400 موقعیت شغلی وجود داشته باشد. برای جبران این مشکل، دولت کانادا تمرکز خود را روی فارغ&zwnj;التحصیلان و مهاجران برای بهبود شرایط بازار کار معماری در کانادا گذاشته است. در نتیجه، اگر می&zwnj;خواهید به درآمد بالا برسید و حتی اقامت دائم کانادا را نیز کسب کنید، این رشته می&zwnj;تواند مسیر شما به سمت موفقیت باشد.</p>
              <p>بازار کار شغل معماری در کانادا از توازن و بالانس قابل قبولی برخوردار است و عرضه و تقاضا برای این شغل در ده سال آینده متعادل خواهد بود. در سال ۲۰۱۸ میزان اشتغال در حرفه معماری در کانادا ۱۸،۳۰۰ نفر، متوسط سن افرادی که در این حرف مشغول فعالیت هستند ۴۵ سال و متوسط سن بازنشستگی آنان ۶۵ سال بود.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P7'>
        <div className='container'>
          <div className='row'>
            <h3>مهارت‌های مورد نیاز شغل معماری در کانادا</h3>

            <div className='col-12'>
              <p>برای توفیق در حرفه معماری در کانادا، مهارت&zwnj;های گسترده&zwnj;ای لازم است. اولین و مهم&zwnj;ترین مهارت، توانایی طراحی خلاقانه و نوآورانه است که بتواند نیازها و انتظارات مشتریان را برآورده سازد. همچنین، داشتن دانش فنی قوی در زمینه&zwnj;های معماری و مهندسی ساختمانی اساسی است، که شامل آشنایی با نرم&zwnj;افزارهای مدل&zwnj;سازی سه بعدی، نقشه&zwnj;کشی و طراحی معماری می&zwnj;شود. معماران باید توانایی مذاکره و ارتباط موثر با مشتریان، تیم&zwnj;های پروژه و مقامات محلی را داشته باشند تا بتوانند پروژه&zwnj;ها را به درستی مدیریت و اجرا کنند.به طور کلی، از مهارت&zwnj;های مورد نیاز یک معمار برای حضور در کشور کانادا می&zwnj;توان به موارد زیر اشاره کرد:</p>
              <ul>
                <li>مدیریت</li>
                <li>سرپرستی و نظارت</li>
                <li>آنالیز</li>
                <li>آنالیز اطلاعات</li>
                <li>برنامه ریزی</li>
                <li>نتایج پروژه</li>
              </ul>
              <p>آشنایی با مقررات ساختمانی و قانونی، استفاده از مواد ساختمانی پایدار و مدیریت هزینه&zwnj;ها نیز از جنبه&zwnj;های مهم دیگری از مهارت&zwnj;های مورد نیاز است. به طور کلی، معماران باید بتوانند ترکیبی از خلاقیت، دانش فنی، مهارت&zwnj;های ارتباطی و مدیریتی را به کار بگیرند تا در این حرفه موفقیت آمیز عمل کنند.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P7'>
        <div className='container'>
          <div className='row'>
            <h3>مزایای مدرک معماری در کانادا</h3>

            <div className='col-12'>
              <p>دریافت مدرک معماری در کانادا به فارغ&zwnj;التحصیلان این رشته مزایای چشمگیری ارائه می&zwnj;دهد. این مدرک نه تنها اعتبار بین&zwnj;المللی فراوانی دارد و که امکان اشتغال به کار در سطح بین&zwnj;المللی را فراهم می&zwnj;سازد، بلکه دانش فنی عمیق و مهارات عملی ضروری برای اجرای پروژه&zwnj;های معماری به روز را نیز فراهم می&zwnj;آورد. اگر با مدرک معماری به کانادا مهاجرت کنید یا اینکه در این کشور به خواندن مهندسی معماری بپردازید، از مزایای زیر برخوردار می&zwnj;شوید:</p>
              <ul>
                <li>فعالیت به عنوان معمار</li>
                <li>پرستیژ کاری</li>
                <li>امنیت شغلی و تنوع کاری</li>
                <li>حقوق بالاتر</li>
                <li>داشتن حق رای در انجمن&zwnj;های استانی</li>
              </ul>
              <p>معماران با استفاده از آموزش&zwnj;های عملی و نظری جامع، قادر به طراحی و مدیریت اجرای پروژه&zwnj;های گوناگون از جمله مسکونی، تجاری، صنعتی و حتی نوسازی شهری هستند. مهارت آن&lrm;ها، مهارتی پول&zwnj;ساز است.</p>
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