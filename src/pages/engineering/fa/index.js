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

    // Feathericon
    useEffect(() => {
      const timer = setTimeout(() => {
        if (typeof feather !== 'undefined' && feather !== null) {
          feather.replace();
        }
      }, 1000); // 1 second delay

      // Cleanup the timeout on component unmount
      return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures this runs only once

    if (existInCart) {
      window.alert('Item is already in cart!')
      router.push('/cart')
    } else {
      cartItems.push(id)
    }

    const updatedCartItems = [...cartItems]
    ocalStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  return (
    <>
      <section className='FNV-SinglePage'>
        <div className='FNV-BG'>
          <img src='/img/landings/engineering-bg.jpg' className='img-fluid' />
        </div>

        <div className='container'>
          <div className='row FNV-Header'>
            <div className='col-12'>
              <h1>فعالیت مهندسی در کانادا</h1>
            </div>

            <div className='col-12 col-md-6'>
              <span>پیش از هر اقدامی، این ویدئو را ببینید</span>
              <iframe src="https://www.youtube.com/embed/6OdumXuaE50?si=2g6M4dsBeCvTCzKq" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className='col-12 col-md-6'>
              <p>
                مهندسی در کانادا جزوه‌ای نظام‌مند است. کسی که می‌خواد در این حوزه فعالیت داشته باشد باید لایسنس مهندس
                حرفه‌ای یا به اختصار .P.Eng را دریافت کند. فعالیت مهندسی در کانادا شامل سه بخش اصلی آنالیز، طراحی و محاسبات
                است. هر عملی که در این سه بخش قرار نمی‌گیرد، از دسته فعالیت‌های مهندسی نیست.
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
                  <a href='#P1'>چگونه می‌توان لایسنس مهندسی حرفه‌ای کانادا یا .P.Eng دریافت کرد؟</a>
                </li>
                <li>
                  <a href='#P2'>گام‌های دریافت لایسنس مهندسی حرفه‌ای کانادا یا .P.Eng چیست؟</a>
                </li>
                <li>
                  <a href='#P3'>چگونه می‌توانیم در سازمان اداری کانادا ثبت‌نام کنیم؟</a>
                </li>
                <li>
                  <a href='#FAQ'>سوالات متداول</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P1'>
        <div className='container'>
          <div className='row'>
            <h3> چگونه می‌توان لایسنس مهندسی حرفه‌ای کانادا یا .P.Eng دریافت کرد؟</h3>

            <div className='col-12'>
              <p>فعالیت&zwnj;های شما برای دریافت لایسنس مهندسی در کانادا، در سه دسته&zwnj; اصلی زیر قرار می&zwnj;گیرد:</p>
              <ul>
                <li>آنالیز</li>
                <li>طراحی</li>
                <li>محاسبات</li>
              </ul>
              <p>آنچه که اهمیت دارد این است که، باید فعالیت&zwnj;های شما در این سه بخش اصلی قرار گیرد. برای مثال، موارد زیر
                در
                دسته فعالیت&zwnj;های مورد تایید لایسنس مهندسی در کانادا نیستند:</p>
              <ul>
                <li>نقش&zwnj;های نظارتی، مدیریتی و تجاری</li>
                <li>نقش&zwnj;های تعمیر&zwnj;ونگهداری روتین</li>
                <li>تست نقش&zwnj;ها</li>
                <li>ساخت&zwnj;وساز یا مونتاژکار</li>
              </ul>
            </div>
          </div>

          <a href='/project-management' className='row FNV-CTA'>
            <div className='col-12 col-md-8'>
              <h4>در نظر داشته باشید، اگر کار کارگاهی انجام می‌دهید و سرپرست کارگاه‌ هستید، فعالیت شما در دسته امور مربوط به
                مدیریت پروژه قرار می‌گیرد. برای دریافت اطلاعات بیشتر به صفحه مدیریت پروژه در کانادا مراجعه کنید.</h4>
            </div>
            <div className='col-6 col-md-4'>
              <img src='/img/landings/project-manager.png' className='img-fluid' />
            </div>
          </a>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P2'>
        <div className='container'>
          <div className='row'>
            <h3>گام‌های دریافت لایسنس مهندسی حرفه‌ای کانادا یا .P.Eng چیست؟</h3>

            <div className='col-12'>
              <p>به صورت کلی، استان&zwnj;های کانادا قوانین و مقررات خاص خود را برای ارائه لایسنس مهندسی (P.Eng) دارند، هرچند
                که می&zwnj;توان گفت تا حدودی روند کار در اکثر استان&zwnj;ها مشابه است.</p>
              <p>مراحل دریافت لایسنس مهندسی حرفه&zwnj;ای کانادا به شرح زیر است:</p>
              <ul>
                <li>اولین گام: ثبت&zwnj;نام در سازمان&zwnj;های استان محل سکونت و تکمیل فرم&zwnj;های مورد نیاز</li>
              </ul>
              <p>ابتدا، قوانین و مقررات مربوط به هر استان را کامل مطالعه کنید تا از شرایط اصلی آن آگاه شوید. برای دریافت
                اطلاعات مورد نظر به سایت&zwnj;های زیر مراجعه کنید:</p>
              <ul>
                <li>مهندسان و دانشمندان زمین&zwnj;شناسی بریتیش&zwnj;کلمبیا (EGBC) - بریتیش&zwnj;کلمبیا</li>
                <li>انجمن مهندسین و زمین&zwnj;شناسان حرفه&zwnj;ای آلبرتا (APEGA) - آلبرتا</li>
                <li>انجمن مهندسین و زمین&zwnj;شناسان حرفه&zwnj;ای ساسکاچوان (APEGS) - ساسکاچوان</li>
                <li>انجمن مهندسین و زمین&zwnj;شناسان حرفه&zwnj;ای منیتوبا (APEGM) - مانیتوبا</li>
                <li>مهندسین حرفه&zwnj;ای انتاریو (PEO) - انتاریو</li>
                <li>Ordre des ing&eacute;nieurs du Qu&eacute;bec (OIQ) &ndash; کبک</li>
                <li>مهندسان و زمین&zwnj;شناسان حرفه&zwnj;ای نیوبرانزویک (PEGNB) - نیوبرانزویک</li>
                <li>انجمن مهندسین و زمین&zwnj;شناسان حرفه&zwnj;ای نیوفاندلند و لابرادور (PEGNL) - نیوفاندلند و لابرادور</li>
                <li>انجمن مهندسین حرفه&zwnj;ای جزیره پرنس&zwnj;ادوارد (مهندسین PEI) - جزیره پرنس&zwnj;ادوارد</li>
                <li>مهندسین نوا اسکوشیا (Engineers NS) &ndash; نوا اسکوشیا</li>
                <li>انجمن مهندسین و زمین&zwnj;شناسان حرفه&zwnj;ای یوکان (APEGY) - یوکان</li>
                <li>سرزمین&zwnj;های شمال غربی و انجمن مهندسین و زمین&zwnj;شناسان حرفه&zwnj;ای نوناووت (NAPEG) -
                  سرزمین&zwnj;های شمال غربی و نوناووت</li>
                <li>دومین گام: تکمیل پیش&zwnj;نیازهای مهندسی هر استان</li>
              </ul>
              <p>توصیه ما این است که ابتدا سایت سازمان مهندسی استان خود را در این مورد بررسی کنید. اما به طور کلی،
                پیش&zwnj;نیاز آکادمیک در تمامی استان&zwnj;ها مشترک است و شرایط آن به شرح زیر است:</p>
              <ul>
                <li>پیش&zwnj;نیاز آکادمیک</li>
              </ul>
              <p>مدرک لیسانس (4 ساله) در یکی از رشته&zwnj;های مهندسی</p>
              <p>نکته: مدارک بالاتر از لیسانس در صورتی قابل ارائه است که هم&zwnj;راستا با لیسانس باشد. به عنوان مثال اگر
                لیسانس مهندسی برق ارائه می&zwnj;دهید، ارشد شما هم مهندسی برق باشد.</p>
              <ul>
                <li>روش ارسال مدارک تحصیلی به سازمان&zwnj;های مهندسی</li>
              </ul>
              <p>برای ارسال مدارک تحصیلی خود به سازمان&zwnj;های مهندسی، دو راهکار وجود دارد:</p>
              <ul>
                <li>مدارک ترجمه&zwnj;شده باید از دانشگاه شما به صورت مهروموم&zwnj; شده (Sealed) مستقیم به اداره مهندسی استان
                  فرستاده شود.</li>
                <li>مدارک تحصیلی ترجمه&zwnj;شده&zwnj; شما باید به تایید یک مهندس دارای لایسنس P.Eng برسد و سپس به اداره
                  مهندسی استان فرستاده شود. فناوران برای اعضای VIP مجموعه، تاییدیه مدرک تحصیلی را به صورت رایگان انجام
                  می&zwnj;دهد. در صورت نیاز به تایید، مدارک خود را برای ما ارسال کنید.</li>
              </ul>
              <p>نکته: برای ارائه مدارک تحصیلی، باید شرح دروس (شرح درس) خود را نیز ارائه دهید.</p>
            </div>
          </div>
        </div>
      </section>

      <a href='https://t.me/+D54o2CCh5Bo4NGI0' target='_blank' className='FNV-TelegramBG'>
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
      </a>

      <section className='FNV-SinglePage FNV-GrayBG' id='P3'>
        <div className='container'>
          <div className='row'>
            <h3>چگونه می‌توانیم در سازمان اداری کانادا ثبت‌نام کنیم؟</h3>

            <div className='col-12'>
              <p>همواره توصیه فناوران به داوطلبان .P.Eng این بوده است که، ابتدا اطلاعات کامل را راجع به مهندسی حرفه&zwnj;ای در کانادا و شرایط هر استان کسب کرده و سپس به فکر اقدام برای آن باشند. به طور کلی مراحل ثبت&zwnj;نام در سازمان&zwnj; اداری کانادا به شرح زیر است:</p>
              <ul>
                <li>قدم اول: پر کردن فرم&zwnj;های اپلیکیشن اداره مهندسی استان محل سکونت</li>
              </ul>
              <p>برای مشاهده&zwnj; فرم&zwnj;های هر استان به لینک&zwnj;های زیر مراجعه کنید:</p>
              <ul>
                <li>مهندسی در استان انتاریو</li>
                <li>مهندسی در استان نواسکوشیا</li>
                <li>مهندسی در استان آلبرتا</li>
                <li>مهندسی در استان بریتیش&zwnj;کلمبیا</li>
                <li>قدم دوم: ارسال مدارک تحصیلی</li>
              </ul>
              <p>برای ارسال مدارک دو راه کلی وجود دارد:</p>
              <ul>
                <li>مدارک ترجمه&zwnj;شده باید از دانشگاه شما به صورت مهر و موم شده (Sealed) مستقیم به اداره مهندسی استان فرستاده شود.</li>
                <li>مدارک ترجمه&zwnj;شده&zwnj; شما باید به تایید یک مهندس با لایسنس مهندسی حرفه&zwnj;ای در کانادا برسد.</li>
              </ul>
              <p>از جمله خدمات فناوران می&zwnj;توان به این مورد اشاره کرد که، اگر برای کانادا، مهندس دارای P.Eng نمی&zwnj;شناسید، می&zwnj;تواند این سرویس را به شما ارائه دهد. حتما بیانیه&zwnj;های مورد نظر خود را هم به زبان فارسی و هم انگلیسی به مدارک خود اضافه کرده و برای ما به آدرس info@fanavaran.ca ارسال کنید. این خدمات فقط برای اعضای فناوران دردسترس است. (برای عضویت در فناوران کلیک کنید)</p>
              <ul>
                <li>نکته: توجه داشته باشید که PEO تنها ترجمه&zwnj;هایی را می&zwnj;پذیرد که توسط یک مترجم معتبر ATIO یا یک P.Eng کانادایی انجام شود. مترجم باید به هر دو زبان مسلط باشد، فقط در این صورت است که دقت ترجمه مورد تایید قرار می&zwnj;&zwnj;گیرد. مترجم موظف است که شماره عضویت خود را ارائه کرده و هر صفحه را امضا و تاریخ را زیر آن درج کند. برای تایید مدارک باید رونوشت زبان اصلی و ریزنمرات لیسانس و ارشد را برای فناوران ارسال کنید. سعی کنید مدارک لیسانس و ارشد و همچنین رزومه&zwnj; خود را در یک فایل PDF برای ما ارسال کنید.</li>
                <li>EIT و آزمون&zwnj;های تکنیکال</li>
              </ul>
              <p>در حالی که استان&zwnj;های کانادا به افراد کانادایی برای موقعیت&zwnj;های شغلی خود نیازمند هستند، افراد می&zwnj;توانند نسبت به دریافت دزیگنیشن EIT اقدام کنند. برای دریافت این لایسنس، در برخی موارد افراد پس از ثبت اپلیکیشن نیازمند گذراندن 4 کورس تکنیکال هستند. البته در صورت نگارش تجربیات کاری مرتبط ممکن است بتوانید دوره&zwnj;های تکنیکال را پشت سر بگذارید. این موضوع را به یاد داشته باشید که اگر تجربه&zwnj;های کاری شما در راستای رشته&zwnj; تحصیلی شما نباشد، 18 کورس تکنیکال به عنوان پیش&zwnj;نیاز به شما تعلق می&zwnj;گیرد.</p>
              <p>برای نگارش تجربیات کاری توجه داشته باشید که سوابق مهندسی مطابق با استانداردهای سازمان&zwnj;های مهندسی و استفاده از ترمینولوژی&zwnj;های دقیق و رفرال&zwnj;های مهم در پرونده شما است. سوابق کاری شما باید مطابق با تعریف &laquo;مهندسی در کانادا&raquo; باشد و از نظر فاکتورهای مختلف، معقول و قابل&zwnj;پذیرش باشد. برای اطلاع از نحوه نگارش سوابق کاری، توصیه می&zwnj;کنیم ورکشاپ تخصصی نگارش تجربیات مهندسی را مشاهده کنید.</p>
              <p>اگر به گذراندن دوره&zwnj;های تکنیکال نیازمند بودید بدانید که فناوران همراه شماست و با استفاده از اساتید مجرب و دانشگاهی، این دوره&zwnj;های تکنیکال را به صورت اختصاصی و نیمه&zwnj;خصوصی برای شما برگزار خواهد کرد. (برای ثبت&zwnj;نام کلیک کنید)</p>
              <p>توجه داشته باشید که باید شرح دروس خود را ارائه دهید و در صورت نیاز، جدول درجه&zwnj;بندی روبیک را جهت تطبیق نمرات داشته باشید.</p>
              <p>چند نمونه دیسکریپشن رشته&zwnj;های مهندسی مختلف:</p>
              <ul>
                <li>مهندس عمران</li>
                <li>مهندسی برق</li>
                <li>مهندسی مکانیک - 1</li>
                <li>مهندسی مکانیک - 2</li>
                <li>مهندسی عمران و محیط&zwnj;زیست</li>
                <li>مهندسی آبیاری</li>
              </ul>
              <p>به این نکته دقت کنید که ممکن است به جدول Grading Rubric نیز نیاز باشد که از طریق این لینک می&zwnj;توانید دریافت کنید.</p>
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
                    آیا تایید سازمان WES (World Education Services) برای تمام استان‌های كانادا لازم است؟
                  </button>
                </h2>
                <div id='Question1' className='accordion-collapse collapse show' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      پاسخ: خير، فقط در برخي از استان‌های كانادا تاييديه از سازمان WES الزامی است.
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                    data-bs-target='#Question2' aria-expanded='false' aria-controls='Question2'>
                    آیا می‌توان برای استانی غیر از استان محل سكونت فعال برای .P.Eng اقدام کرد؟
                  </button>
                </h2>
                <div id='Question2' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>پاسخ: بله</div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                    data-bs-target='#Question3' aria-expanded='false' aria-controls='Question3'>
                    اگر لايسنس .P.Eng را در یک استان داشته باشيم، آیا می‌توانیم مجددا برای یک استان دیگر اقدام کنیم؟
                  </button>
                </h2>
                <div id='Question3' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      پاسخ: بله، در صورتي‌كه هزينه عضويت سالانه هر دو استان را پرداخت کرده باشید.
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                    data-bs-target='#Question4' aria-expanded='false' aria-controls='Question4'>
                    آیا باید سابقه تجربه را در مرحله اول ارسال کرد؟
                  </button>
                </h2>
                <div id='Question4' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      پاسخ: خیر، الزامی نیست. اما بهتر است بعد از ارسال سري اول مدارك، Experience Record را تهيه و ارسال نماييد. لازم بذكر است، اين مدرك پس از ارسال در صورت نياز قابل تغيير است.
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
                    data-bs-target='#Question5' aria-expanded='false' aria-controls='Question5'>
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