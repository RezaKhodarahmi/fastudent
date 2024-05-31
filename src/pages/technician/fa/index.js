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
          تکنسین فنی در کانادا (Tradesperson) فردی است که در انجام یک حرفه خاص (شغل یا زمینه کاری) تخصص و مهارت کافی
          دارد.
        </p>
        <p>
          بر خلاف سایر زمینه‌های کاری مثل
          <Link href='/architecture'>معماری</Link> و{' '}
          <Link href='/engineering'>مهندسی</Link>، تکنسین‌ها نیازی به داشتن مدرک دانشگاهی ندارند و می‌توانند تنها با
          گذراندن دوره مربوطه در کالج یا سایر موسسات آموزشی و پس از گذراندن دوره کارآموزی (Apprenticeship) به صورت
          رسمی به عنوان یک تکنسین فنی ماهر کار خود را آغاز کنند.
        </p>

        <p>فهرست مطالب:</p>
        <ol>
          <li>
            <Link href='#P1'>وظایف تکنسین‌های فنی</Link>
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

            <p>لیست تکنسین&zwnj;های فنی که داشتن trade certification برای آن&zwnj;ها اجباری است</p>
          </li>
        </ul>

        <p>لیست تکنسین&zwnj;هایی که به trade certification نیاز دارند بر اساس استان یا قلمرو مختلف متغیر است، زیرا هر
          ناحیه دارای یک نهاد نظارتی است که مسئولیت برنامه&zwnj;های کارآموزی و گواهی&zwnj;نامه&zwnj;دهی را بر عهده دارد.
          این نهادها معمولاً یک فهرست از حرفه&zwnj;های compulsory تعیین می&zwnj;کنند، به این معنی که افرادی که در این
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