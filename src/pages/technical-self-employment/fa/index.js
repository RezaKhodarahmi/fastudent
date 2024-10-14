import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// ** Import Translation
import { useTranslation } from 'react-i18next'

// ** Import course section
import CourseDeskSingle from 'src/views/swiper/courseDeskSingle'
import CourseMobileSingle from 'src/views/swiper/courseMobileSingle'

// ** Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

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
      router.push('/technical-self-employment')
    }
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
      <section className='FNV-SinglePage FNV-SinglePage-Header'>
        <div className='container'>
          <div className='row FNV-Header'>
            <div className='col-12'>
              <h1>خود اشتغال فنی</h1>
            </div>

            <div className='col-12 col-md-6'>
              <span>پیش از هر اقدامی، این ویدئو را ببینید</span>
              <iframe
                src='https://www.youtube.com/embed/w8SGo4fUUlc?si=FRxPbHif5MvI_bJx'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>

            <div className='col-12 col-md-6'>
              <p>
              در بعد فنی مهندسی، کانادا کشوری با امکانات زیرساختی فراوان و نیروی کار محدود است. به همین جهت مشاغلی که به عنوان Self employed یا خود اشتغالی فنی در کانادا تعریف می‌شوند دایره گسترده‌ای دارند.
              </p>
              <p>
              در تعریف خود اشتغالی می‌توان چنین گفت: «هرکسی که بنا بر مهارت‌ها و توانمندی‌های خود، کسب‌وکاری ایجاد می‌کند و به تولید و فروش کالا یا خدمات خود می‌پردازد، یک فرد خود اشتغال است. این خود اشتغالی می‌تواند در قالب قراردادهایی با شرکت‌های مختلف هم باشد.»
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
                <li><Link href="#P1">ویژگی‌های خود اشتغالی فنی در کانادا</Link></li>
                <li><Link href="#P2">مشخصات فردی یک Self employed</Link></li>
                <li><Link href="#P3">مزایای خود اشتغالی در کانادا</Link></li>
                <li><Link href="#P4">مضرات خود اشتغالی در کانادا</Link></li>
                <li><Link href="#P5">مشخصه‌های تخصصی یک فرد خود اشتغال</Link></li>
                <li><Link href='#FAQ'>سوالات متداول</Link></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P1'>
        <div className='container'>
          <div className='row'>
            <h3>ویژگی‌های خود اشتغالی فنی در کانادا</h3>

            <div className='col-12'>
              <p>
              کسانی که برای خود اشتغالی فنی در کانادا اقدام می‌کنند، باید با ویژگی‌های زیر آشنا شوند:
              </p>
              <ol>
                <li>می‌توانند همزمان برای چندین شرکت کار کنند</li>
                <li>این افراد شخصا مسئول تکس‌ها و کسری‌های استانی و کشوری هستند</li>
                <li>از امکانات و وسایل خود برای کار استفاده می‌کنند</li>
                <li>
                معمولا تحت قوانین سازمانی، بازرسی و نظارت در کار نمی‌شوند
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P2'>
        <div className='container'>
          <div className='row'>
            <h3>مشخصات فردی یک Self employed</h3>

            <div className='col-12'>
              <ol>
                <li>
                از مشخصات بارز خوداشتغالی، ریسک‌پذیری است، چرا که درآمد فرد شاغل ثابت نیست و به شرایط متعدد محیطی و بیرونی بستگی دارد.
                </li>
                <li>
                یک فرد خود اشتغال باید رهبر و خودکار باشد که هر روز بتواند الویت‌های کاری خود را مرتب کند و به صورت خود انگیزشی به ادامه کار بپردازد.
                </li>
                <li>
                او باید شناخت خوبی از بیزینس کار داشته باشد و شرایط محیطی و روندهای کشوری و استانی را در جهت کاری که می‌خواهد انجام دهد. این یعنی که فرد باید توانایی بازاریابی و ایجاد بیزینس در شغل خود را داشته باشد.
                </li>
                <li>
                این شخص علاوه بر انجام کار تخصصی خود باید به عنوان رهبر بیزینس مدام در صدد ایجاد موقعیت‌های جدید، پیدا کردن کلاینت‌های جدید و بستن قراردادهای جدید باشد.
                </li>
                <li>
                دانش تکنیکال خوب راجع به کار نیز دیگر مشخصه فردی است که برای خود اشتغالی فنی در کانادا باید به آن توجه داشته باشید.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P4'>
        <div className='container'>
          <div className='row'>
            <h3>مزایای خود اشتغالی در کانادا</h3>

            <div className='col-12'>
              <p>
              خوداشتغالی فنی در کانادا مزایای بسیاری برای فرد به همراه دارد که البته در کنار ریسک‌های این کار قرار می‌گیرد:
              </p>
              <ol>
                <li> تقویم و ساعت کاری منعطف </li>
                <li>
                توانایی ایجاد تغییر در هر سطح در بیزینس
                </li>
                <li>
                رسیدن به سطح درآمدی بسیار بالاتر در مقایسه با کار کارمندی
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P5'>
        <div className='container'>
          <div className='row'>
            <h3>مضرات خود اشتغالی در کانادا</h3>

            <div className='col-12'>
            <ul>
                <li>
                ریسک شکست خوردن بیزینس
                </li>
                <li>
                تلاش در چند جبهه (هم قسمت فنی و هم قسمت بیزینس)
                </li>
                <li>
                هزینه‌های اصلی و جانبی بیزینس و لزوم سرمایه‌گذاری دائمی روی مسائلی همچون تبلیغات، استخدام و دیگر مسائل سازمانی
                </li>
              </ul>
              <p>
              کسب‌وکارهای خوداشتغالی عمدتا در زمره‌ی کارگاه‌های کوچک قرار می‌گیرند و بیشتر این کسب و کارها در بخش خدمات هستند.
              </p>
              <p>همچنین از این نوع اشتغال به «اشتغال در مشاغل آزاد» نیز نام برده می‌شود. دلیل این نامگذاری می‌تواند آن باشد که فرد Self-employed از سیطره‌ استخدام کارفرما رها بوده و از آزادی عمل برخوردار است.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P6'>
        <div className='container'>
          <div className='row'>
          <h3>مشخصه‌های تخصصی یک فرد خود اشتغال</h3>

            <div className='col-12'>
              <p>
              معمولا کسانی که به صورت Self employed در رده‌های فنی فعالیت می‌کنند دارای یک یا چند لایسنس تخصصی هستند. البته بسیاری از رشته‌ها در کانادا لایسنس مخصوص به خود را ندارند. عمده‌ترین زمینه‌های فعالیتی به صورت خود اشتغالی در کانادا عبارتند از:
              </p>
              <ol>
                <li>
                خدمات آموزشی: مثل تدریس خصوصی ریاضیات (بدون نیاز به لایسنس)</li>
                <li>بهداشتی درمانی: مثلا تزریق بوتاکس (نیاز به لایسنس دارد) </li>
                <li>مشاوره‌ای: مهندس مشاور (با داشتن مدرک P.Eng)</li>
                <li>فنی حرفه ای: مثل بازرس انرژی ( با داشتن لایسنس Energy advisory)</li>
                <li>
                در بخش کشاورزی: واحدهای کوچک تولید محصولات زراعی، باغی، دامی و آبزیان
                </li>
              </ol>
              <p>
              نظارت دولت بر اکثر کسب‌وکارهای خوداشتغالی از طریق صدور مجوزهای مختلف صورت می‌گیرد. معمول‌ترین این مجوزها «پروانه کسب» است که دریافت آن شرایط خاص خود را دارد و عمدتا از طریق اتحادیه‌های اصناف صورت می‌پذیرد.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage mt-0' id='FAQ'>
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
                  برای خود اشتغالی یا کار به عنوان فریلنسر به چه نوع مجوز یا ویزا کار نیاز دارم؟
                  </button>
                </h2>
                <div id='Question1' className='accordion-collapse collapse show' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                    اگر می خواهید در بیش از یک شرکت کانادایی به عنوان فریلنسر کار کنید، به یک مجوز کار آزاد یا Open Work Permit نیاز دارید. مجوزهای کار معمولی یا Closed Work Permits فقط به شما امکان می دهد برای یک کارفرمای خاص کار کنید.
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
                  آیا میتوان با ویزای تحصیلی به خوداشتغالی پرداخت؟
                  </button>
                </h2>
                <div id='Question2' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                    به طور کلی دارندگان ویزا تحصیلی ممکن است بتوانند در داخل و خارج از دانشگاه برای زمان‌های محدودی کار کنند، بنابراین فریلنسینگ میتواند یک انتخاب خوب برای آنها باشد به شرطی که قوانین اداره مهاجرت و سازمان‌های مربوط به انجام آن کار زیر پا گذاشته نشوند.
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
                آیا می توانم در هر زمینه و برای هر صنعتی به صورت آزاد کار کنم؟

                  </button>
                </h2>
                <div id='Question3' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      <p>
                      خیر. برخی از مشاغل در کانادا تحت نظارت سازمان‌های خاصی هستند، به این معنی که شما باید مجوز فعالیت یا دزیگنیشن‌های (designation) خاصی برای انجام آنها دریافت کنید. استان ها/منطقه های مختلف قوانین و نهادهای نظارتی متفاوتی دارند. اگر شغل شما مورد نظر شما از این دسته از مشاغل باشد، لازم است قبل از شروع فعالیت خود با نهادهای مربوطه تماس بگیرید تا مراحل ارزیابی و صدور مجوز را طی کنید.
                      </p>
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
                آیا برای خوداشتغالی باید به سازمان‌ها یا مراجع کانادایی اطلاع دهم؟
                  </button>
                </h2>
                <div id='Question4' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      <p>
                      اگر فعالیت خود را منحصراً تحت نام خود و بدون نام تجاری دیگری انجام می دهید، نیازی به ثبت فعالیت خود در دولت ندارید.
                      </p>
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
                آیا فعالیت‌های خوداشتغالی شامل مالیات میشوند؟
                  </button>
                </h2>
                <div id='Question5' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                    بله. تمام فعالیت‌هایی که منجر به کسب درآمد در داخل یا خارج از کانادا باشند شامل مالیات میشوند.
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
