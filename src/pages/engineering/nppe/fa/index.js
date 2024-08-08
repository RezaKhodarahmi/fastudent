import React, { useEffect } from 'react'
import feather from 'feather-icons'

import { useRouter } from 'next/router'
import Link from 'next/link'

const Nppe = () => {
  //Hooks
  const router = useRouter()

  useEffect(() => {
    const lng = window.localStorage.getItem('i18nextLng')
    if (lng === 'en') {
      router.push('/engineering/nppe')
    }
  }, [router])

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
      <section className='FNV-SinglePage FNV-SinglePage-Header' >
        <div className='container'>
          <div className='row FNV-Header'>
            <div className='col-12 FNV-Content-White'>
              <h1>آزمون NPPE</h1>
              <p>
                آزمون NPPE را می‌توان یکی از سخت‌ترین مراحل برای دریافت P.Eng. دانست. همانطور که می‌دانید، مهندسان در کانادا برای فعالیت حرفه‌ای مهندسی نیاز به دریافت P.Eng. دارند و NPPE، آزمونی است که برای تمامی رشته‌های مهندسی اجرا می‌شود.
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
                  <Link href='#P1'>معرفی آزمون NPPE در کانادا</Link>
                </li>
                <li>
                  <Link href='#P2'>مشخصه‌های آزمون NPPE</Link>
                </li>
                <li>
                  <Link href='#P3'>هزینه آزمون</Link>
                </li>
                <li>
                  <Link href='#P4'>سیلابس‌های درسی</Link>
                </li>
                <li>
                  <Link href='#P5'>منابع امتحانی</Link>
                </li>
                <li>
                  <Link href='#P6'>درخواست‌های سفارشی</Link>
                </li>
                <li>
                  <Link href='#P7'>محل آزمون و نظارت از راه دور</Link>
                </li>
                <li>
                  <Link href='#P8'>ایمیل تایید</Link>
                </li>
                <li>
                  <Link href='#P9'>مقررات آزمون- در مرکز آزمون</Link>
                </li>
                <li>
                  <Link href='#P10'>مقررات آزمون- از راه دور</Link>
                </li>
                <li>
                  <Link href='#P11'>قوانین مردودی</Link>
                </li>
                <li>
                  <Link href='#FAQ'>سوالات متداول</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage pb-5' id='P1'>
        <div className='container'>
          <div className='row'>
            <h3>معرفی آزمون NPPE در کانادا</h3>

            <div className='col-12'>
              <p>
                آزمون NPPE اختصار یافته National Professional Practice Exam، یک آزمون 2.5 ساعته به صورت کتاب بسته و آنلاین است که مهارت شما را در موارد زیر می‌سنجد:
              </p>
              <ul>
                <li>فعالیت حرفه‌ای مهندسی</li>
                <li>قانون مهندسی</li>
                <li>اخلاق مهندسی</li>
                <li>مسئولیت‌پذیری حرفه‌ای</li>
              </ul>
              <p>
                متقاضیان واجد شرایطی که ۴۸ ماه تجربه کاری مهندسی (به عنوان پیش‌نیاز دریافت لایسنس) را گذرانده‌اند، می‌توانند هر زمانی که آماده شدند، طبق چارچوب زمانی اعلام شده از طرف PEO برای آزمون ثبت نام کنند. برای سایر استان‌ها نیز آزمون در ماه‌های یاد شده برگزار می‌شوند.
              </p>
              <ul>
                <li>ژانویه یا فوریه</li>
                <li>آوریل</li>
                <li>ژوئن</li>
                <li>آگوست یا سپتامبر</li>
                <li>نوامبر</li>
              </ul>
              <p>
                این آزمون به صورت آنلاین و Remote Proctoring برگزار می‌شود، این یعنی که متقاضیان می‌توانند از خانه خود نیز برای آن اقدام کنند. در صورتی که نیاز به خدمات ویژه‌ای در این زمینه دارید، می‌توانید با PEO (برای کسانی که در انتاریو ساکن هستند) یا سازمان مهندسی استانی خود برای این خدمات در ارتباط باشید.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P2'>
        <div className='container'>
          <div className='row'>
            <h3>مشخصه‌های آزمون NPPE</h3>

            <div className='col-12'>
              <p>
                همانطور که گفته شد، آزمون NPPE دانش حرفه‌ای، قانونی و اخلاقی شما را محک می‌زند. ۱۲ سازمان رگولاتوری کانادا برای اعطای لایسنس مهندسی آزمون NPPE را برگزار می‌کنند.
              </p>

              <ul>
                <li>در آزمون ۱۱۰ سوال وجود دارد</li>
                <li>سوالات به صورت چند گزینه‌ای هستند</li>
                <li>سوالات به ۶ بخش موضوعی تقسیم شده‌اند</li>
                <li>زمان در نظر گرفته شده برای آزمون ۲.۵ ساعت است</li>
                <li>برای هر پاسخ ۱ امتیاز در نظر گرفته شده و برای پاسخ‌های نادرست جریمه‌ای وجود ندارد</li>
                <li>برای دریافت نمره قبولی، باید به ۶۵ درصد سوالات (۷۲ سوال) پاسخ درست بدهید</li>
              </ul>
              <p>در این جدول، اطلاعات مربوط به توزیع سوالات در موضوعات امتحانی را خواهید یافت.</p>
              <table className='table table-striped table-hover'>
                <tbody>
                  <tr>
                    <td>
                      <p>10% | 7-10 سوال</p>
                    </td>
                    <td>
                      <p>Professionalism</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>20% | 17-21 سوال</p>
                    </td>
                    <td>
                      <p>Ethics</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>30% | 27-32 سوال</p>
                    </td>
                    <td>
                      <p>Professional Practice</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>20% | 23-28 سوال</p>
                    </td>
                    <td>
                      <p>Law for Professional Practice</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>10% | 7-10 سوال</p>
                    </td>
                    <td>
                      <p>Professional Law</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>10% | 7-10 سوال</p>
                    </td>
                    <td>
                      <p>Regulation of Members &amp; Discipline Processes</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P3'>
        <div className='container'>
          <div className='row'>
            <h3>هزینه آزمون</h3>

            <div className='col-12'>
              <p>
                این هزینه‌ها ب استفاده از هوش مصنوعی تولید شده و ممکن است دقیق نباشد. جزئیات دقیق‌تر را از طریق سازمان مهندسی خود به دست بیاورید.
              </p>
              <ul style={{ direction: 'ltr' }}>
                <li>Alberta: $250 (excluding GST) (APEGA).</li>
                <li>British Columbia: $350 (Engineers and Geoscientists BC).</li>
                <li>Manitoba: $300 (APEGM).</li>
                <li>New Brunswick: $340 (NPP Exam).</li>
                <li>Newfoundland and Labrador: $350 (PEGNL).</li>
                <li>Nova Scotia: $375 (HST included) within Nova Scotia, $450 within Canada, $450 in the USA, and $500 overseas (Engineers Nova Scotia) (GeoscientistsNS).</li>
                <li>Ontario: $350 (PEO Ontario).</li>
                <li>Prince Edward Island: $345 (NPP Exam).</li>
                <li>Quebec: Not specified individually, generally ranges around $350 (NPP Exam).</li>
                <li>Saskatchewan: $300 (APEGS).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P4'>
        <div className='container'>
          <div className='row'>
            <h3>سیلابس‌های درسی</h3>

            <div className='col-12'>
              <p>
                همانطور که پیشتر دریافتید، سیلابس‌های آزمون NPPE به شش حوزه موضوعی مرتبط می‌شوند که در زیر به صورت چکیده می‌توانید ببینید:
              </p>
              <ol style={{ direction: 'ltr' }}>
                <li>Professionalism</li>
                <ol style={{ listStyleType: 'lower-alpha' }}>
                  <li>Definition and Interpretation of Professionalism and Professional Status</li>
                  <li>The Role and Responsibilities of Professionals in Society</li>
                  <li>&nbsp;Engineering and Geoscience Professions in Canada; Definitions and Scopes of Practice</li>
                  <li>The Value of Engineering and Geoscience Professions to Society</li>
                </ol>
                <li>Ethics</li>
                <ol style={{ listStyleType: 'lower-alpha' }}>
                  <li>The Role of Ethics in Society; Cultures and Customs</li>
                  <li>Ethical Theories and Principles</li>
                  <li>Codes of Ethics of Professional Engineers and Geoscientists in Canada</li>
                  <li>Common Ethical Issues and Dilemmas; Making Ethical Decisions</li>
                </ol>
                <li>Professional Practice</li>
                <ol style={{ listStyleType: 'lower-alpha' }}>
                  <li>Professional Accountability for Work, Workplace Issues, Job Responsibilities, and Standards of Practice</li>
                  <li>The Role and Responsibilities of Professionals to Employers and Clients</li>
                  <li>Relations with Other Professionals and Non-Professionals; Business Practices</li>
                  <li>Statutory and Non-Statutory Standards and Codes of Practice</li>
                </ol>
                <li>Law for Professional Practice</li>
                <ol style={{ listStyleType: 'lower-alpha' }}>
                  <li>The Canadian Legal System</li>
                  <li>Contract Law &ndash; Elements, Principles, and Applications</li>
                  <li>Tort Law &ndash; Elements, Principles, and Applications</li>
                  <li>Business, Employment, and Labour Law</li>
                </ol>
                <li>Professional Law</li>
                <ol style={{ listStyleType: 'lower-alpha' }}>
                  <li>The Acts, Regulations, and Bylaws of Provincial and Territorial Associations</li>
                  <li>Admission to the Professions</li>
                  <li>Professional and Technical Societies</li>
                </ol>
                <li>Law for Professional Practice</li>
                <ol style={{ listStyleType: 'lower-alpha' }}>
                  <li>Discipline Procedures</li>
                  <li>Practice Review of Individuals</li>
                  <li>Practice Review of Firms</li>
                  <li>Continuing Professional Development</li>
                </ol>
              </ol>
              <p>توجه داشته باشید، برای اینکه واجد شرایط شرکت در این آزمون باشید، باید ابتدا برای دریافت لایسنس درخواست داده باشید. در بعضی از استان&zwnj;ها مانند بریتیش کلمبیا، می&zwnj;توانید از همان ابتدا پس از تشکیل پرونده در آزمون شرکت کنید و در بعضی از استان&zwnj;ها مانند انتاریو، پس از دریافت تاییده PEO می&zwnj;توانید در آزمون شرکت کنید.</p>
              <p>افرادی که تاکنون EIT نشده&zwnj;اند نیز می&zwnj;توانند نسبت به شرکت در این آزمون ثبت نام کنند. شرکت&zwnj;کنندگان بین&zwnj;المللی استان انتاریو که سابقه کار در خارج از کانادا را دارند، پس از درخواست برای لایسنس و دریافت شماره PEO Number، ممکن است که نیاز باشد بعضی از دوره&zwnj;های لیسانس را طی کنند (برنامه آزمون&zwnj;های تکنیکال مهندسی). فناوران خدمات <Link href="https://fanavaran.ca/engineering/peng-technical-exams/fa" target='_blank'>دوره های تکنیکال لیسانس برای دریافت P.Eng.</Link> را برای رشته&zwnj;های مکانیک، برق، عمران، متریال و سایر رشته&zwnj;های مهندسی به همراه دروس گروه CS ارائه کرده است. می&zwnj;توانید در این دوره&zwnj;ها شرکت کنید.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P5'>
        <div className='container'>
          <div className='row'>
            <h3>منابع امتحانی</h3>

            <div className='col-12'>
              <p>
                در حال حاضر، برای شرکت در آزمون NPPE (استان انتاریو) دو نسخه کتاب را به عنوان منبع برای آمادگی در آزمون NPPE می‌توانید در نظر داشته باشید:
              </p>
              <ol style={{ direction: 'ltr' }}>
                <li>Canadian Professional Engineering and Geoscience: Practice &amp; Ethics, Fifth or Sixth Edition, by Gordon C. Andrews, Patricia Shaw, John McPhee</li>
                <li>Practical Law of Architecture, Engineering, and Geoscience, Second or Third Canadian Edition, by Brian M. Samuels and Doug R. Sanders</li>
              </ol>
              <p>به علاوه، منابع دیگری نیز در این زمینه وجود دارند که می&zwnj;توانید با مراجعه به <Link href="https://peo.on.ca/sites/default/files/2020-07/NPPE_candidate_guide_PEO_version_v.2.pdf" target='_blank'>فایل راهنمای PEO</Link> از آن&zwnj;ها استفاده کنید.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P6'>
        <div className='container'>
          <div className='row'>
            <h3>درخواست‌های سفارشی</h3>

            <div className='col-12'>
              <p>
                برای متقاضیان واجد شرایط (عمدتا افرادی که دارای معلولیت در عضو خاصی هستند)، درخواست‌های سفارشی برای آزمون NPPE فراهم خواهد شد. این درخواست‌های می‌تواند شامل موارد زیر باشد:
              </p>
              <ul>
                <li>زمان اضافی</li>
                <li>تایم استراحت</li>
                <li>اتاق ویژه برای آزمون</li>
                <li>فونت بزرگ&zwnj;تر (که البته برای همه داوطلبین امتحان در دسترس است)</li>
              </ul>
              <p>
                برای این درخواست‌ها نیاز است که هنگام ثبت‌نام برای آزمون و پیش از پایان بازه زمانی ثبت‌نام اقدام کنید. مدارک پزشکی یا تاییدیه از متخصصان آموزشی (طی سه سال اخیر) نیاز خواهد بود که شامل موارد زیر باشد:
              </p>
              <ul>
                <li>جزئیات معلولیت فرد</li>
                <li>جزئیات در رابطه با علت نیاز فرد به یک درخواست ویژه مطابق با معلولیت او</li>
                <li>بیان دقیق درخواست اضافی (برای مثال، یک ساعت زمان اضافی برای افرادی که دارای مشکلات بینایی هستند و نیاز به دستیار صوتی دارند)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P7'>
        <div className='container'>
          <div className='row'>
            <h3>محل آزمون و نظارت از راه دور</h3>

            <div className='col-12'>
              <p>مراکز آزمون آنلاین NPPE در بخش&zwnj;های مختلفی از کانادا وجود دارند. هنگام ثبت&zwnj;نام، از شما درخواست می&zwnj;شود تا مرکز مناسبی برای آزمون آنلاین خود انتخاب کنید. ممکن است بعضی از متقاضیان بخواهند تا آزمون را در خارج از کانادا و یا در جایی به غیر از مراکز تعیین شده بدهند که در این صورت تسهیلات لازم وجود دارد.</p>
              <p>متقاضیان می&zwnj;توانند با کامپیوتر مجهز به وبکم یا لپ تاپ و همچنین اینترنت پرسرعت، آزمون خود را بدهند. برای این افراد، آزمون با نظارت شرکت ProctorU برگزار می&zwnj;شود.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P8'>
        <div className='container'>
          <div className='row'>
            <h3>ایمیل تایید</h3>

            <div className='col-12'>
              <p>در حدود سه تا چهار هفته پیش از برگزاری آزمون، ایمیل تاییدیه&zwnj;ای از طرف Yardstick حاوی اطلاعات مرتبط با محل و ساعت برگزاری آزمون خود دریافت خواهید کرد. حتما به پوشه اسپم ایمیل خود نیز سر بزنید. اگر در حداقل دو هفته قبل از آزمون ایمیلی دریافت نکردید، حتما به <span style={{ color: 'red' }}>testingsupport@getyardstick.com</span> ایمیل بزنید و تقاضای ارسال مجدد ایمیل تایید کنید.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P9'>
        <div className='container'>
          <div className='row'>
            <h3>مقررات آزمون- در مرکز آزمون</h3>

            <div className='col-12'>
              <ul>
                <li>توصیه می&zwnj;شود که تایید ایمیل Yardstick را به همراه داشته باشید.</li>
                <li>آیدی کارت به همراه داشته باشید.</li>
                <li>ایمیل تایید را برای موارد مجاز و غیرمجاز در جلسه آزمون به دقت بخوانید.</li>
                <li>مشخصات خود را در ایمیل با آیدی کارت تطبیق دهید و در صورت مغایرت، به سرعت به Yardstick اطلاع بدهید.</li>
                <li>در صورتی که سوالی در خصوص پارکینگ یا لوکیشن دارید، با Yardstick ارتباط برقرار کنید.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P10'>
        <div className='container'>
          <div className='row'>
            <h3>مقررات آزمون- از راه دور</h3>

            <div className='col-12'>
              <ul>
                <li>بهتر است تمامی چکاپ&zwnj;های مورد نیاز برای پیش&zwnj;نیازهای کامپیوتری را بررسی کنید.</li>
                <li>حتما برای کامپیوتر خود وبکم داشته باشید، گوشی و دیگر موارد قابل قبول نیست.</li>
                <li>برنامه ProctorU تنها در روز آزمون قابل دانلود است و نمی&zwnj;توانید یک روز قبل&zwnj;تر برنامه را دانلود کنید.</li>
                <li>متقاضیان تنها ۱۵ دقیقه فرصت دارند تا به اکانت خود لاگین کنند، در غیراینصورت امتحان کنسل خواهد شد. ممکن است که گاهی لاگین شدن به حساب کاربری تا ۳۰ دقیقه زمان ببرد.</li>
                <li>تنها یکبار روی لینک لاگین کلیک کنید. توجه داشته باشید که اگر لاگین شما در جریان است و کامل نشده، هرگز لاگ آف نکنید و یا از مرورگر خارج نشوید، به این ترتیب جلسه کنسل شده در نظر گرفته می&zwnj;شود. تا زمانی که پروسه لاگین در جریان است، حتی اگر از تایم امتحان هم گذشته باشد جلسه کنسل نخواهد شد.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P11'>
        <div className='container'>
          <div className='row'>
            <h3>قوانین مردودی</h3>

            <div className='col-12'>
              <p>
              در اکثر استان‌های کانادا، متقاضیان تا چهار بار می‌توانند در آزمون NPPE مردود شوند. در صورتی که فرد متقاضی چهار بار مردود شد، پس از یک سال وقفه، می‌تواند برای پنجمین بار در آزمون شرکت کند. در صورتی که فرد متقاضی برای پنجمین بار مردود شود، پرونده او لغو شده و باید مجددا اپلیکیشن خود را آغاز کند.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='FAQ'>
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
                    آیا برای ثبت نام در آزمون NPPE باید مجوز داشته باشم؟
                  </button>
                </h2>
                <div id='Question1' className='accordion-collapse collapse show' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p> بله؛ داوطلبان باید برای ثبت نام در آزمون NPPE، فرایند درخواست لایسنس را تکمیل کنند.</p>
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
                    آیا برای شرکت در آزمون NPPE، مهلت مشخصی وجود دارد؟
                  </button>
                </h2>
                <div id='Question2' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                    بله؛ متقاضیان باید طبق تاریخ تعیین‌شده توسط PEO در آزمون NPPE شرکت کنند. این مهلت تضمین می‌کند که به درخواست‌ها در مدت ۱۸۰ روز (شامل زمان پردازش آزمون)، رسیدگی شود. پس از تأیید تکمیل بودن درخواست توسط PEO، داوطلبان می‌توانند از طریق پورتال درخواست خود برای شرکت در آزمون ثبت نام کنند.
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
                    data-bs-target='#Question3'
                    aria-expanded='false'
                    aria-controls='Question3'
                  >
                    آزمون NPPE چند بار در سال برگزار می‌شود؟
                  </button>
                </h2>
                <div id='Question3' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      آزمون NPPE پنج بار در سال برگزار می‌شود. لطفاً برای مشاهده برنامه آزمون‌های آتی به وب‌سایت NPPE مراجعه کنید.
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
                    data-bs-target='#Question4'
                    aria-expanded='false'
                    aria-controls='Question4'
                  >
                    اگر قبلاً در آزمون NPPE قبول شده باشم، آیا باید دوباره آزمون دهم؟
                  </button>
                </h2>
                <div id='Question4' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      خیر؛ نتایج قبلی به درخواست جدید منتقل شده و معتبر هستند.
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
                    چگونه برای شرکت در آزمون NPPE ثبت نام کنم؟
                  </button>
                </h2>
                <div id='Question8' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                    داوطلبان پس از تأیید تکمیل بودن فرایند درخواست توسط PEO، می‌توانند برای شرکت در آزمون NPPE ثبت نام کنند. پس از دریافت تأییدیه PEO و دستورالعمل‌های لازم برای آزمون، برگه ثبت نام در صفحه اصلی درخواست ظاهر خواهد شد. داوطلبان باید تا تاریخ مشخص‌شده توسط PEO در آزمون شرکت کنند. در برخی از استان‌ها مانند بریتیش کلمبیا، متقاضیان می‌توانند ا همان ابتدای تشکیل پرونده نسبت به شرکت در آزمون NPPE اقدام کنند.
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
                    آیا وضعیت قبولی در آزمون NPPE منقضی می‌شود؟
                  </button>
                </h2>
                <div id='Question5' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      خیر؛ وضعیت قبولی در آزمون NPPE منقضی نمی‌شود.
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
                    data-bs-target='#Question6'
                    aria-expanded='false'
                    aria-controls='Question6'
                  >
                    چگونه باید برای شرکت در آزمون NPPE آماده شوم؟
                  </button>
                </h2>
                <div id='Question6' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                    منابع مطالعه پیشنهادی برای آمادگی شامل سه کتاب درسی و چندین منبع رایگان است. همچنین تست‌های تمرینی برای آماده‌سازی در دسترس هستند. پکیج آماده‌سازی آزمون NPPE نیز برای خرید موجود است.
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
                    فرمت آزمون NPPE به چه صورت است؟
                  </button>
                </h2>
                <div id='Question7' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                    آزمون NPPE به صورت آنلاین و کتاب بسته بوده و مدت زمان آن ۲.۵ ساعت است. این آزمون شامل ۱۱۰ سوال چند گزینه‌ای در شش موضوع مختلف می‌شود که به اخلاق، تمرین حرفه‌ای، حقوق مهندسی و مسئولیت حرفه‌ای مربوط است.
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

Nppe.guestGuard = true

export default Nppe
