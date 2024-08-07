import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'

import Link from 'next/link'

// ** Import Translation
import { useTranslation } from 'react-i18next'

function Index() {
  //Hooks
  const router = useRouter()
  const { t } = useTranslation()

  // Check website lang
  useEffect(() => {
    const lng = window.localStorage.getItem('i18nextLng')
    if (lng == 'en') {
      router.push('/accounting')
    }
  }, [])

  return (
    <>
      <section className='FNV-SinglePage FNV-SinglePage-Header'>
        <div className='container'>
          <div className='row FNV-Header'>
            <div className='col-12'>
              <h1>حسابداری در کانادا</h1>
            </div>

            <div className='col-12 col-md-6'>
              <span>پیش از هر اقدامی، این ویدئو را ببینید</span>
              <iframe
                src='https://www.youtube.com/embed/jBdDxN1iP9o?si=wToJo_2qJG_xPxln'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>

            <div className='col-12 col-md-6'>
              <p>
                حسابداری در کانادا جزو مشاغل پرتقاضا است. کانادا یک کشور مدرن و رو به رشد است، از این رو همواره تلاش می‌کند تا شکاف‌های حیاتی خود در بخش نیروی کار و اقتصاد را برطرف کند و برای این کار روی نیروی ماهر مهاجر حساب باز کرده است. با وجود اینکه طی چند سال گذشته حسابداران زیادی وارد کانادا شده‌اند، اما همچنان در سراسر کانادا، چه در سطح فدرال و چه در سطح استانی تقاضای بالایی برای حسابدار و حسابرس وجود دارد. با بیش از هزار گزینه شغلی حسابداری موجود در کانادا، می‌توان این کشور را بهشتی برای حسابداران متخصص و باتجربه دانست.
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
                  <Link href='#P1'>چرا حسابداری برای کسب‌وکارها و شرکت‌ها در کانادا مهم است؟</Link>
                </li>
                <li>
                  <Link href='#P2'>میزان درآمد یک حسابدار در کانادا</Link>
                </li>
                <li>
                  <Link href='#P3'>شغل حسابداری در استان‌های مختلف کانادا</Link>
                </li>
                <li>
                  <Link href='#P4'>عناوین شغلی حسابداری در کانادا</Link>
                </li>
                <li>
                  <Link href='#P5'>مهارت‌های مورد نیاز برای حسابداری در کانادا</Link>
                </li>
                <li>
                  <Link href='#P6'>پیش‌نیازهای حسابدار برای ورود به بازار کار کانادا</Link>
                </li>
                <li>
                  <Link href='#P7'>مجوزهای لازم برای کار در رشته حسابداری در کانادا</Link>
                </li>
                <li>
                  <Link href='#P8'>گواهی CPA، دلیل اهمیت آن و چگونگی دریافت</Link>
                </li>
                <li>
                  <Link href='#P9'>دیگر اطلاعات مورد نیاز برای حسابداران تازه‌وارد به کانادا</Link>
                </li>
                <li>
                  <Link href='#P10'>نرم‌افزار کوییک‌بوکس، آنچه حسابدار در کانادا باید بداند</Link>
                </li>
                <li>
                  <Link href='#P11'>قوانین مالیاتی کانادا، آنچه حسابداران باید بدانند</Link>
                </li>
                <li>
                  <Link href='#P12'>مهارت زبانی مورد نیاز یک حسابدار</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P1'>
        <div className='container'>
          <div className='row'>
            <h3>چرا حسابداری برای کسب‌وکارها و شرکت‌ها در کانادا مهم است؟</h3>

            <div className='col-12'>
              <p>هرچه یک کسب&zwnj;وکار بزرگ&zwnj;تر باشد، حسابدار اهمیت بیشتری پیدا می&zwnj;کند، به همین دلیل است که این شغل در سیستم اکسپرس اینتری مهاجرت به کانادا یک موقعیت کارگر ماهر (Skilled Worker) با تقاضای بالاست. بخش مهمی از نقش حسابداران، مشاوره به مشتریان در مورد اصول مالیاتی کاناداست، اما به طور کلی، نقش اصلی متخصصان حسابداری در کانادا کمک به کسب&zwnj;وکارها و افراد برای مدیریت امور مالی است.</p>
              <p>بازار کار حسابداری در کانادا همچنان روبه&zwnj;رشد باقی مانده است. بیکاری حسابداران واجد شرایط در کانادا بسیار کمتر از حد متوسط است.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P2'>
        <div className='container'>
          <div className='row'>
            <h3>میزان درآمد یک حسابدار در کانادا</h3>

            <div className='col-12'>
              <p>میانگین دستمزد در ساعت حسابداران ۳۳.۶۵ دلار است. همچنین، حداکثر دستمزد ممکن در این حوزه به اندازه ۵۷.۶۹ دلار و حداقل دستمزد آن به مقدار ۱۹.۵۰ دلار اعلام شده است. این اطلاعات ممکن است نشان&zwnj;دهنده چگونگی ارزش&zwnj;گذاری بازار کار حسابداری در کانادا باشد و نیازمند توجه به شرایط مختلف بازار کار و نیز توانایی&zwnj;ها و تخصص&zwnj;های مورد نیاز در این زمینه است. از طرفی، حسابداری در کانادا نیز می&zwnj;تواند به عنوان یکی از حوزه&zwnj;هایی با تقاضای بالا در بازار کار این کشور مطرح شود، زیرا شرکت&zwnj;ها و سازمان&zwnj;های مختلف به دنبال حفظ دقت و صحت در دفاتر حساب و گزارشات مالی خود هستند و این نیاز به حسابداران حرفه&zwnj;ای را ایجاد می&zwnj;کند.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P3'>
        <div className='container'>
          <div className='row'>
            <h3>شغل حسابداری در استان‌های مختلف کانادا</h3>

            <div className='col-12'>
              <p>در کانادا، رشته حسابداری یکی از رشته&zwnj;های مرتبط با مدیریت و مالیات است که تقاضا برای آن در سال&zwnj;های اخیر رو به افزایش بوده است. در زیر، وضعیت بازار کار حسابداری در استان&zwnj;های مختلف کانادا در ده سال آینده وجود دارد:</p>
              <ul>
                <li>چشم&zwnj;انداز شغلی: بر اساس اطلاعات بانک مشاغل کانادا، رشته حسابداری در ده سال آینده از لحاظ عرضه و تقاضا نسبتاً برابری خواهد داشت. بین سال&zwnj;های ۲۰۱۷ تا ۲۰۲۸، می&zwnj;توان انتظار داشت که حدود ۹۴۴۰۰ شغل جدید در این صنعت ایجاد شود و حدود ۹۴۱۰۰ نیروی کار جویای کار در این رشته فرصت شغلی پیدا کنند.</li>
                <li>بازار کار نسبتاً خوب در: استان&zwnj;های نیوفاندلند و لابرادور، ساسکاچوان، پرنس ادوارد، کبک، انتاریو، آلبرتا، بریتیش کلمبیا، یوکان و مانیتوبا</li>
                <li>بازار کار خوب در: استان&zwnj;های نیوبرانزویک، نوا اسکوشیا و نوناووت</li>
              </ul>
              <p>بنابراین، می&zwnj;توان گفت که حسابداران در بسیاری از استان&zwnj;های کانادا به شغل و فرصت&zwnj;های شغلی خوبی دست پیدا خواهند کرد. این رشته در دهه آینده همچنان از اهمیت و تقاضای بالایی برخوردار خواهد بود و برای افراد با تخصص و مهارت&zwnj;های عالی، فرصت&zwnj;های شغلی قابل توجهی را به همراه خواهد داشت.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P4'>
        <div className='container'>
          <div className='row'>
            <h3>عناوین شغلی حسابداری در کانادا</h3>

            <div className='col-12'>
              <p>در کانادا، حوزه حسابداری بسیار مورد توجه است. در زیر، عناوین شغلی متداول در این حوزه ذکر شده&zwnj;اند:</p>
              <ul>
                <li>حسابرس داخلی: شخصی که مسئولیت ارزیابی و اطمینان از صحت و کارایی سیستم&zwnj;های حسابداری و کنترل داخلی یک سازمان را بر عهده دارد.</li>
                <li>حسابدار حرفه&zwnj;ای دارای گواهینامه (CPA، CA): فردی که با اخذ گواهینامه CPA (حسابدار حرفه&zwnj;ای) و مهارت&zwnj;های مالی، حسابداری، مالیات و مدیریت مجتمع، مسئولیت&zwnj;های مالی یک سازمان را برعهده دارد.</li>
                <li>حسابدار رسمی دارای گواهینامه (CPA، CGA): فردی که با اخذ گواهینامه CPA (حسابدار حرفه&zwnj;ای) و CGA (حسابدار رسمی)، مسئولیت&zwnj;های حسابداری مالی و مالیاتی را در یک سازمان بر عهده دارد.</li>
                <li>حسابدار مدیریت دارای گواهینامه (CPA، CMA): فردی که با اخذ گواهینامه CPA (حسابدار حرفه&zwnj;ای) و CMA (حسابدار مدیریت)، مسئولیت&zwnj;های مدیریتی و تصمیم&zwnj;گیری استراتژیک در حوزه مالی یک سازمان را بر عهده دارد.</li>
                <li>حسابرس مالی: شخصی که مسئولیت ارزیابی و تایید صحت گزارش&zwnj;های مالی یک سازمان را بر عهده دارد و از طریق بررسی و ارزیابی حساب&zwnj;ها و گزارش&zwnj;های مالی، تأیید می&zwnj;کند که آن&zwnj;ها با استانداردهای حسابداری مطابقت دارند.</li>
                <li>کارشناس مالیات بر درآمد: فردی که مسئولیت مشاوره و پیشنهادات مالیاتی به افراد و سازمان&zwnj;ها را بر عهده دارد و از طریق تحلیل قوانین مالیاتی، بهینه&zwnj;سازی مالیاتی را برای مشتریان ارائه می&zwnj;دهد.</li>
                <li>حسابدار صنعتی: فردی که در بخش خصوصی یا صنعتی فعالیت می&zwnj;کند و مسئولیت&zwnj;های حسابداری و مالی یک شرکت یا سازمان را بر عهده دارد.</li>
                <li>سر حسابدار: شخصی که مسئولیت نظارت و رهبری بخش حسابداری یک سازمان را بر عهده دارد و با ارائه راهنمایی&zwnj;های مالی و حسابداری، به ارتقای کارایی و کارآمدی این بخش کمک می&zwnj;کند.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P5'>
        <div className='container'>
          <div className='row'>
            <h3>مهارت‌های مورد نیاز برای حسابداری در کانادا</h3>

            <div className='col-12'>
              <p>مهارت&zwnj;های یک حسابدار در کانادا برای موفقیت در حرفه&zwnj;ی خود، نه تنها شامل دانش حسابداری و اقتصاد می&zwnj;شود، بلکه مهارت&zwnj;های تخصصی و کلیدی دیگری را نیز در برمی&zwnj;گیرد. در زیر به برخی از این مهارت&zwnj;ها اشاره شده است:</p>
              <ul>
                <li>برنامه&zwnj;ریزی: قابلیت برنامه&zwnj;ریزی و تنظیم زمان برای انجام وظایف مختلف در محیط&zwnj;های کاری گوناگون از جمله مهارت&zwnj;های اساسی یک حسابدار است.</li>
                <li>تحقیق و پژوهش: توانایی در جستجو، ارزیابی و تحلیل اطلاعات مالی و مالیاتی، به منظور رسیدن به تصمیمات موثر و صحیح در محیط کاری.</li>
                <li>تحلیل داده&zwnj;ها: توانایی در جمع&zwnj;آوری، تحلیل و تفسیر داده&zwnj;های مالی و مالیاتی به منظور ارائه گزارش&zwnj;های دقیق و تصمیم&zwnj;گیری مبتنی بر اطلاعات.</li>
                <li>مدیریت و نظارت: توانایی در مدیریت و نظارت بر فعالیت&zwnj;های حسابداری و مالی سازمان و اطمینان از رعایت استانداردها و قوانین مربوطه.</li>
                <li>برقراری ارتباط حرفه&zwnj;ای: توانایی برقراری ارتباط موثر با اعضای دیگر تیم، مشتریان و ارائه&zwnj;دهندگان خدمات به منظور انجام وظایف به بهترین شکل ممکن.</li>
                <li>توانایی آموزش دیگران: توانایی به اشتراک&zwnj;گذاری دانش و تجربه با سایر اعضای تیم و آموزش دیگران در مورد مسائل حسابداری و مالی.</li>
                <li>مشاوره: توانایی ارائه مشاوره&zwnj;های مالی و حسابداری به مدیران و مسئولان سازمان به منظور بهبود عملکرد مالی و افزایش سودآوری.</li>
                <li>دانش حسابداری و اقتصاد: داشتن دانش عمیق و موثر در زمینه حسابداری مالی، مالیاتی، مدیریت مالی و اصول اقتصادی برای انجام وظایف به روز و دقیق در محیط کاری.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P6'>
        <div className='container'>
          <div className='row'>
            <h3>پیش‌نیازهای حسابدار برای ورود به بازار کار کانادا</h3>

            <div className='col-12'>
              <p>شما به این موارد احتیاج دارید تا بتوانید وارد بازار تخصصی حسابداری در کانادا شوید:</p>
              <ul>
                <li>حسابدارانی که مایلند به عنوان حسابدار قسم خورده (خبره یا CA) کار کنند باید مدرک دانشگاهی یا تکمیل دوره آموزشی معتبر، زیر نظر موسسه کانادایی حسابداران خبره به مدت ۲ سال یا ۳۰ ماه بسته به استان را ارائه کنند.</li>
                <li>حسابدارانی که مایلند به عنوان حسابدار عمومی و مدیریت کار کنند باید مدرک دانشگاهی یا تکمیل دوره آموزشی معتبر زیر نظر انجمن حسابداران عمومی ثبت شده یا جامعه حسابداران مدیریت کانادا با چند سال آموزش ضمن کار داشته باشند تا مجاز به اخذ مجوز مربوطه شوند.</li>
                <li>حسابرسان برای اینکه به عنوان حسابدار خبره، حسابداران عمومی و یا مدیریتی مجوزدار به رسمیت شناخته شوند باید دوره آموزشی معتبر را طی کرده و سابقه کاری داشته باشند.</li>
                <li>حسابرسان باید از سمت موسسه حسابرسی داخلی به رسمیت شناخته شوند.</li>
                <li>حسابرسان و حسابداران برای اینکه به عنوان متولی در امور ورشکستگی فعالیت کنند، باید به عنوان متولی ورشکستگی دارای مجوز باشند.</li>
                <li>اخذ مجوز از موسسه یا انجمن استان برای حسابداران و حسابرسانی که حسابداری عمومی انجام می&zwnj;دهند الزامی است.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P7'>
        <div className='container'>
          <div className='row'>
            <h3>مجوزهای لازم برای کار در رشته حسابداری در کانادا</h3>

            <div className='col-12'>
              <p>هر استان مجوز خاص خود را نیاز دارد. در بخش زیر لینک&zwnj;های دسترسی برای اطلاعات بیشتر برای شما آورده شده است:</p>
              <ul>
                <li>استان آلبرتا: اخذ مجوز از <Link href="https://www.cpaalberta.ca/About-Us/Contact-Us">Chartered Professional Accountants of Alberta</Link></li>
                <li>استان بریتیش کلمبیا: سمت شغلی حسابدار حرفه ای اخذ مجوز از <Link href="https://www.bccpa.ca/">Chartered Professional Accountants of British Columbia</Link></li>
                <li>استان بریتیش کلمبیا: سمت شغلی حسابدار اخذ مجوز از <Link href="https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/central-government-agencies/office-of-the-comptroller-general">Auditor Certification Board, Government of British Columbia</Link></li>
                <li>استان مانیتوبا: اخذ مجوز از <Link href="https://cpamb.ca/">Chartered Professional Accountants Manitoba</Link></li>
                <li>استان نیو برانزویک: اخذ مجوز از <Link href="https://www.cpanewbrunswick.ca/">Chartered Professional Accountants New Brunswick</Link></li>
                <li>استان نیوفاندلند و لابرادور: اخذ مجوز از <Link href="https://www.cpanl.ca/">Chartered Professional Accountants of Newfoundland and Labrador</Link></li>
                <li>استان نوا اسکوشیا: سمت شغلی حسابدار حرفه ای اخذ مجوز از Chartered Professional Accountants of Nova Scotia</li>
                <li>استان نوا اسکوشیا: سمت شغلی حسابدار اخذ مجوز از <Link href="https://www.pabns.com/">Public Accountants Board of the Province of Nova Scotia</Link></li>
                <li>استان انتاریو: سمت شغلی حسابدار حرفه ای اخذ مجوز از <Link href="https://www.cpaontario.ca/">Chartered Professional Accountants of Ontario</Link></li>
                <li>استان انتاریو: سمت شغلی حسابدار اخذ مجوز از <Link href="https://www.bdo.ca/en-ca/services/assurance-and-accounting/a-a-knowledge-centre/psas/">Public Accountants Council for the Province of Ontario</Link></li>
                <li>جزیره پرنس ادوارد: اخذ مجوز از <Link href="https://www.cpapei.ca/">Chartered Professional Accountants of Prince Edward Island</Link></li>
                <li>استان کبک: اخذ مجوز از <Link href="https://cpaquebec.ca/en/">Ordre des comptables professionnels agr&eacute;&eacute;s du Qu&eacute;bec</Link></li>
                <li>استان ساسکاچوان: اخذ مجوز از <Link href="https://www.cpask.ca/">Institute of Chartered Professional Accountants of Saskatchewan</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P8'>
        <div className='container'>
          <div className='row'>
            <h3>گواهی CPA، دلیل اهمیت آن و چگونگی دریافت</h3>

            <div className='col-12'>
              <p>در کانادا، دزیگنیشن Chartered Professional Accountant (CPA) معتبرترین دزیگنیشن برای تایید صلاحیت حسابداران است. این دزیگنیشن می&zwnj;تواند پنجره&zwnj;ای برای موقعیت&zwnj;های شغلی بالاتر در سطوح اجرایی و مشاوره در مشاغل مرتبط با حسابداری، مالی و تجاری باشد. هرچند، داشتن CPA برای فعالیت به عنوان حسابدار در کانادا برای همه استان&zwnj;ها ضروری نیست، اما با داشتن آن درآمد بیشتری خواهید داشت و شغل بهتری خواهید یافت.</p>
              <p>بسیاری از مشاغل Entry-Level و Mid-Level نیازی به مدرک CPA کانادا ندارند. مشاغل زیر را می&zwnj;توان در این زمینه نام برد:</p>
              <ul>
                <li>Staff accountant</li>
                <li>Accounting technician</li>
                <li>Accounts receivable clerk</li>
                <li>Bookkeeper</li>
              </ul>
              <p>برای این دست مشاغل، کارفرمایان کانادایی عمدتا افرادی که دارای مدارک تحصیلی زیر باشند را استخدام می&zwnj;کنند:</p>
              <ul>
                <li>Bachelor&rsquo;s degree in accounting (BCom Accounting),</li>
                <li>Business administration (BBA),</li>
                <li>Master&rsquo;s in business administration (MBA),</li>
              </ul>
              <p>در نظر داشته باشید، چنانچه تحصیلات خود را در خارج از کانادا انجام داشته باشید، نیاز به ارزیابی مدارک تحصیلی خود (ECA) خواهید داشت.</p>
              <p>برای مشاغل حوزه حسابداری و امور مالی که در رده Senior-Level قرار دارند، داشتن CPA اهمیت زیادی دارد، چرا که کارفرمایان ترجیح می&zwnj;دهند افراد دارای گواهی CPA را استخدام کنند. البته بعضی از کارفرمایان ممکن است افرادی که در رده Mid-Level قرار دارند و برای CPA اقدام کرده&zwnj;اند را نیز استخدام کنند، به این ترتیب این افراد فرصت رشد ضمن کار درون سازمان را دارند.</p>
              <p>بنابراین، با وجود اینکه CPA برای حسابداری در کانادا یک پیش نیاز الزامی نیست، اما می&zwnj;تواند به پیشرفت شغلی کمک کند و دریچه&zwnj;ای برای نقش&zwnj;های اجرایی در سطح عالی باشد. برای این منظور، می&zwnj;توان این مشاغل را نام برد:</p>
              <ul>
                <li>Chief financial officer</li>
                <li>Treasurer</li>
                <li>Auditing manager</li>
                <li>Comptroller</li>
              </ul>
              <p>چگونگی دریافت دزیگنیشن CPA</p>
              <p>به عنوان یک حسابدار تحصیل&zwnj;کرده بین&zwnj;المللی، فرایند دریافت گواهینامه CPA کانادا بسته به مدارک و گواهینامه&zwnj;های فعلی شما متفاوت است. به عنوان مثال، اگر مدرک کارشناسی یا کارشناسی ارشد مرتبط دارید اما عضو یک نهاد حسابداری بین&zwnj;المللی نیستید، باید فرایند صدور گواهینامه CPA را در کانادا از ابتدا شروع کنید. با این حال، اگر قبلا یک Chartered Accountant (CA) یا Chartered Professional Accountant (CPA) در کشور دیگری بوده&zwnj;اید، می&zwnj;توانید تحت&nbsp; توافقنامه&zwnj;های متقابل Reciprocal Agreement) یا Memorandum of Understanding (MOU) برای داشتن CPA کانادا واجد شرایط باشید.</p>
              <p>برای دریافت گواهینامه CPA باید:</p>
              <ul>
                <li>برنامه آموزش حرفه&zwnj;ای CPA PEP را تکمیل کنید.</li>
                <li>آزمون نهایی (CFE) را بگذرانید.</li>
                <li>و تجربه عملی کسب کنید.</li>
              </ul>
              <p>در این حالت، فرایند صدور گواهینامه CPA برای حسابداری در کانادا را می&zwnj;توان به صورت زیر خلاصه کرد:</p>
              <ul>
                <li>ثبت نام در ارگان CPA استانی</li>
              </ul>
              <p>اولین قدم این است که در ارگان CPA استانی خود به عنوان دانشجو ثبت&zwnj;نام کنید و یک پروفایل بسازید.</p>
              <ul>
                <li>پرداخت هزینه</li>
              </ul>
              <p>سپس باید هزینه ترانسکریپت ارزیابی خود را بپردازید و اپلیکیشن CPA PEP خود را ارائه کنید.</p>
              <p>در نظر داشته باشید که اکثر استان&zwnj;ها اجازه می&zwnj;دهند که این فرایند را پیش از ورود به کانادا آغاز کنید و پیش ببرید.</p>
              <ul>
                <li>ارزیابی مدارک تحصیلی</li>
              </ul>
              <p>در صورتی که مدارک تحصیلی حرفه&zwnj;ای دارید، باید اسناد خود را به ارگانی که در استان مد نظر شما مسئول CPA است تحویل دهید. ارگان&zwnj;های استانی نحوه ارسال مدارک را برای شما مشخص خواهند کرد.</p>
              <p>به عنوان مثال، CPA Ontario مدارک تحصیلی خارجی را مستقیما نخواهد پذیرفت. در عوض، شما باید از طریق World Education Services (WES) درخواست ارزیابی کورس به کورس (Course-by-Course Evaluation) بدهید.</p>
              <p>از سوی دیگر، سازمان&zwnj;های مسئول CPA در بریتیش کلمبیا، مانیتوبا، ساسکاچوان و آلبرتا نیاز به ترنسکریپت&zwnj;های خارجی دارند که از سوی CPA Western School of Business ارزیابی می&zwnj;شود.</p>
              <p>پس از این مراحل، ارگان CPA استانی از ترنسکریپت&zwnj;های ارزیابی شما استفاده می&zwnj;کند تا تعیین کند که شرایط تحصیلی را دارید و موضوعات پیش&zwnj;نیاز برای برنامه آموزش حرفه&zwnj;ای (CPA PEP) را تکمیل کرده&zwnj;اید. اگر تمام موضوعات مورد نیاز را در تحصیلات قبلی خود تکمیل نکرده باشید، ارگان مربوطه توصیه&zwnj;های خود را برای تکمیل ارائه خواهد کرد.</p>
              <h4>برنامه آموزش حرفه&zwnj;ای CPA PEP</h4>
              <p>برنامه CPA PEP یک برنامه آموزشی حرفه&zwnj;ای است که در رابطه با این موارد خواهد بود:</p>
              <ul>
                <li>تحصیلات</li>
                <li>ارزیابی تحصیلی</li>
                <li>استانداردهای مبتنی بر تجربه کاری (مطابق با استانداردهای International Federation of Accountants (IFAC)</li>
              </ul>
              <p>برای این منظور، باید پیش از شرکت در CPA PEP در ارگان استانی CPA خود حتما ثبت&zwnj;نام کرده باشید. این برنامه شامل این موارد است:&nbsp;</p>
              <ul>
                <li>Two core (common) modules</li>
                <li>Two core (common) modules</li>
                <li>Strategy and governance</li>
                <li>Management accounting</li>
                <li>Audit and assurance</li>
                <li>Finance</li>
                <li>Taxation</li>
                <li>Two elective modules</li>
                <li>Assurance</li>
                <li>Performance management</li>
                <li>Tax</li>
                <li>Finance</li>
              </ul>
              <h4>آزمون The Common Final Examination (CFE)</h4>
              <p>آزمون نهایی یک آزمون سه روزه است که در آن متقاضیان باید مسائل شبیه&zwnj;سازی شده تجاری را حل کنند و شایستگی خود را در زمینه&zwnj;های فنی تحت پوشش برنامه CPA PEP نشان دهند:</p>
              <ul>
                <li>جمع&zwnj;آوری تجارب عملی مرتبط</li>
              </ul>
              <p>تجربه عملی حسابداری یک معیار ضروری برای تعیین شایستگی دریافت دزیگنیشن CPA در کاناداست. شما باید حداقل 30 ماه تجربه حسابداری حرفه&zwnj;ای مرتبط، با حقوق و تحت نظارت (24 ماه در کبک) داشته باشید تا برای گواهی CPA کانادا برای حسابداری واجد شرایط شوید.</p>
              <p>به طور معمول، این تجربه عملی را می توان در طول برنامه CPA PEP به دست آورد و تنها زمانی شروع می&zwnj;شود که یک منتور CPA داشته باشید. با این حال، حداکثر تا 12 ماه تجربه قبلی (8 ماه در کبک) که طی هفت سال گذشته به دست آمده باشد را می&zwnj;توان در نظر گرفت، مشروط بر اینکه در دو حوزه تکنیکال CPA به سطح یک رسیده باشید.</p>
              <ul>
                <li>دریافت CPA</li>
              </ul>
              <p>پس از موفقیت در آزمون CFE برای حسابداری در کانادا و جمع&zwnj;آوری تجربه عملی مورد نیاز، می&zwnj;توانید به عنوان یک عضو در ارگان CPA استانی خود ثبت نام کنید و دزیگنیشن CPA را در کنار نام خود استفاده کنید. به عنوان یک عضو CPA:</p>
              <ul>
                <li>باید حق عضویت سالانه پرداخت کنید</li>
                <li>به برنامه Continuing Professional Development متعهد باشید</li>
                <li>به قوانین و مقررات اعضا پایبند باشید.</li>
              </ul>
              <h4>مدت زمان دریافت CPA چقدر است؟</h4>
              <p>برای تکمیل برنامه&nbsp; CPA PEP، شرکت در آزمون CFE و دریافت CPA بین ۲ تا ۳ سال زمان نیاز است.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P9'>
        <div className='container'>
          <div className='row'>
            <h3>دیگر اطلاعات مورد نیاز برای حسابداران تازه‌وارد به کانادا</h3>

            <div className='col-12'>
              <p>به عنوان یک حسابدار تازه&zwnj;وارد به کانادا، باید با استانداردهای حسابداری در کانادا آشنا شوید:&nbsp;</p>
              <ul>
                <li>Accounting Standards for Private Enterprises (ASPE)</li>
                <li>International Financial Reporting Standards (IFRS)</li>
                <li>Public Sector Accounting Board (PSAB)</li>
                <li>Accounting Standards for Not-for-Profit Organizations (ASNPO),</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P10'>
        <div className='container'>
          <div className='row'>
            <h3>نرم‌افزار کوییک‌بوکس، آنچه حسابدار در کانادا باید بداند</h3>

            <div className='col-12'>
              <p>کوییک بوکس یا همان QuickBooks یکی از برترین ابزارهایی&zwnj;ست که امروزه برای انجام امور حسابداری در دسترس همگان قرار گرفته&zwnj;است. تمام کسب&zwnj;وکارها نیز در هر اندازه که باشند، برای&nbsp; بررسی درآمد، مخارج و دیگر اطلاعات مالی خود از نسخه&zwnj;ی دسکتاپ (یعنی نرم&zwnj;افزاری) و یا آنلاین (تحت وب) این نرم&zwnj;افزار استفاده&nbsp; کرده&zwnj;اند.</p>
              <ul>
                <li>بهترین اپلیکیشن&zwnj;های کوییک&zwnj;بوکس</li>
                <li>TSheets Time Trackingمی&zwnj;توان این اپلیکیشن را در لیست بهترین&zwnj;های بازار کوییک&zwnj;بوکس قرار داد. TSheets برای تیم&zwnj;هایی که جهت مدیریت زمان و حقوق کارمندان خود به کمک نیاز دارند، راه&zwnj;حل&zwnj;هایی را برای بررسی زمان، حقوق و دستمزدها و همچنین صورت&zwnj;حساب&zwnj;ها ارائه می&zwnj;دهد. برای مدیریت کارهای خودتان، نسخه&zwnj;ی تیم تک نفره&zwnj;ی این اپلیکیشن به&zwnj;صورت رایگان در دسترس است اما برای استفاده از نسخه&zwnj;ی پولی و چند نفره&zwnj;ی آن به ازای هر ماه مبلغ ۲۰ دلار و همچنین به ازای هریک از اعضای تیم در ماه، لازم است مبلغ ۵ دلار پرداخت کنید.</li>
                <li>Expensify بررسی هزینه&zwnj;ها یکی از مسائلی ا&zwnj;ست که هر روزه اهمیت آن برای کسب&zwnj;وکارهای کوچک هر چند از اوایل کار بسیار پررنگ&zwnj;تر می&zwnj;شود. Expensify قابلیت استفاده از تصاویر رسیدها و دیگر اطلاعات مربوط به هزینه&zwnj;هایتان را به شما می&zwnj;دهد و از این طریق می&zwnj;توانید به&zwnj;صورت خودکار اطلاعات خود را در کوییک بوکس بروزرسانی کنید. هزینه&zwnj;ی پایه استفاده از این اپلیکیشن به ازای هر فرد در ماه ۵ دلار است.</li>
                <li>LivePlan LivePlan یکی از اپلیکیشن&zwnj;های کوییک بوکس است که به منظور کمک به صاحبان کسب&zwnj;وکار جهت برنامه&zwnj;ریزی برای آینده توسط پیش&zwnj;بینی&zwnj;های مالی و همچنین ابزارهای بودجه&zwnj;بندی ایجاد شده است. این ابزار بر روی کوئیک&zwnj;بوکس امکان به&zwnj;روز رسانی آنی معیارهای کلیدی کسب&zwnj;وکار را فراهم می&zwnj;کند که بدین طریق می&zwnj;توانید تأثیرات هر گونه تحولی را بر روی امور مالی شرکت در آینده مشاهده کنید.</li>
                <li>Business Payments بسیاری از کسب&zwnj;وکارها به&zwnj;منظور آسان&zwnj;تر کردن فرآیند تراکنش&zwnj;های خود از بسترهای پرداختی از جمله پی پل (Paypal) و استرایپ (Stripe) استفاده می&zwnj;کنند بدین دلیل ابزار Business Payment راه&zwnj;حلی را برای همگام&zwnj;سازی مستقیم این سرویس&zwnj;ها با کوییک بوکس ارائه داده&zwnj;است. این سرویس برای کسب&zwnj;وکارهایی با کمتر از ۵۰ تراکنش در یک ماه، رایگان است و افرادی که به تراکنش&zwnj;های بیشتری نیاز دارند باید به ازای هر ماه ۹ دلار بپردازند.</li>
                <li>Funboxبرای کسب&zwnj;وکارهایی که به دنبال پیشرفت از طریق دسترسی به سرمایه&zwnj;گذاری هستند، Funbox راه رسیدن به این هدف را از طریق همپارچه شدن با کوییک&zwnj;بوکس هموار ساخته&zwnj;است. بدین طریق می&zwnj;توانید به&zwnj;راحتی درخواست&zwnj;های سرمایه&zwnj;گذاری خود را ثبت نموده و به صورت خودکار اطلاعات مالی شرکت را از دفترچه حساب به این ابزار بیافزایید و همچنین مفادی مبنی بر توانایی شرکتتان برای پرداخت وام فراهم آورید.</li>
                <li>Method:CRM CRM به معنای مدیریت ارتباط با مشتری&zwnj;ست که البته ابزاری به نام Method &ndash; CRM نیز به&zwnj;صورت اختصاصی برای کوییک بوکس طراحی شده&zwnj;است که توسط آن می&zwnj;توان تمام ارتباطات و روابط شرکت خود با مشتریان را مدیریت و همچنین اطلاعات فروش و مدیریت ارتباط با مشتری خود را با هم یکپارچه نمود. قیمت این ابزار از ۲۵ دلار به ازای هر ماه شروع می&zwnj;شود. اساساً این اپلیکیشن با فراهم آوردن بستری مشترک برای به&zwnj;کار بردن اطلاعات فروش و مالی در کنار هم، فعالیت&zwnj;های شما را برای مدیریت کردن ارتباطات خود با مشتریانتان را آسان&zwnj;تر کرده&zwnj;است.</li>
                <li>Bill Pay به منظور مدیریت برنامه&zwnj;ی منظم پرداخت صورت&zwnj;حساب&zwnj;های شرکت، ابزار Bill Pay با کوییک بوکس یکپارچه شده&zwnj;است و این امکان را به شما می&zwnj;دهد تا تنها با یک کلیک صورت&zwnj;حساب&zwnj;های فروشندگان و پیمانکاران را پرداخت نمایید. با استفاده از این ابزار، مبالغ پرداختی شما به&zwnj;صورت خودکار از دفتر به این ابزار افزوده شده در نتیجه در زمان خود نیز می&zwnj;توانید صرفه&zwnj;جویی کنید. نسخه&zwnj;ی سازگار آن با کوییک بوکس آنلاین برای استفاده&zwnj;ی عموم رایگان است.</li>
                <li>Business Importer این ابزار با وارد کردن فاکتورها، پرداخت&zwnj;ها، هزینه&zwnj;ها و دیگر اطلاعات مالی از اکسل یا مستندات گوگل (Google Docs) به&zwnj;صورت خودکار در کوییک بوکس به شما کمک بسیاری می&zwnj;کند. بنابراین اگر تیم کوچکی دارید که قصد ارسال گزارشات مالی یا مستندات دیگری را برای شما دارند می&zwnj;توانید به&zwnj;راحتی اسناد و نرم&zwnj;افزار خود را به این ابزار تغییر دهید. نسخه&zwnj;ی آزمایشی این اپلیکیشن رایگان و برای کسب&zwnj;وکارهای کوچک نیز به ازای هر ماه ۱۰ دلار نیاز است.</li>
                <li>JuvdR این ابزار در واقع وسیله&zwnj;ای برای مدیریت کارمندان است که ارزیابی عملکردها و همچنین بازخوردها را به&zwnj;صورت مستمر و سریع به اشتراک می&zwnj;گذارد. فایده&zwnj;ی این کار این است که اعضای تیم را از وظایف خود آگاه و آن&zwnj;ها را با محیط کار سازگار می&zwnj;نماید. هزینه&zwnj;ی این اپلیکیشن به ازای هر کاربر در ماه ۳.۷۵ دلار است.</li>
              </ul>
              <p>Cloud Cart Connectorاگر تجارتی الکترونیکی را اداره می&zwnj;کنید، به&zwnj;راحتی با استفاده از اپلیکیشن Cloud Card Connector می&zwnj;توانید فروش&zwnj;های آنلاین خود را مستقیماً به کوییک بوکس اضافه نمایید. همگام&zwnj;سازی کوئیک&zwnj;بوکس با Amazon، Bigcommerce، Infusionsoft، Shopify، ShipStation و دیگر پلتفرم&zwnj;هایی که می&zwnj;توانید مستقیماً بوسیله&zwnj;ی آن&zwnj;ها فروش&zwnj;های خود را به صورت آنلاین با مشتریانتان انجام دهید، بر عهده&zwnj;ی Cloud Cart Connector است. هزینه&zwnj;ی پایه&zwnj;ی این اپلیکیشن به ازای هر ماه برابر ۲۹ دلار است.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P11'>
        <div className='container'>
          <div className='row'>
            <h3>قوانین مالیاتی کانادا، آنچه حسابداران باید بدانند</h3>

            <div className='col-12'>
              <p>حسابدارانی که با قوانین مالیاتی در کانادا سر و کار دارند، باید دانش کاملی از سیستم مالیاتی کانادا داشته باشند که شامل قوانین و مقررات مالیاتی فدرال، استانی و قلمرویی است. در زیر چند نکته کلیدی درباره قوانین مالیاتی در کانادا ذکر شده است:</p>
              <ul>
                <li>قوانین مالیاتی فدرال: قوانین مالیاتی فدرال کانادا اصولاً توسط قانون مالیات بر درآمد اداره می&zwnj;شود که قوانین و مقررات مربوط به مالیات بر درآمد، کسرها، اعتبارها و دیگر مسائل مربوط به مالیات را در سطح فدرال تعیین می&zwnj;کند.</li>
                <li>قوانین مالیاتی استانی و قلمرویی: علاوه بر مالیات&zwnj;های فدرال، هر استان و قلمرو در کانادا دارای مجموعه&zwnj;ای از قوانین مالیاتی خود هستند که برای ساکنین و کسب&zwnj;وکارهای فعال در محدوده آن&zwnj;ها اعمال می&zwnj;شود. این قوانین شامل مالیات بر درآمد، مالیات&zwnj;های فروش (مانند مالیات فروش استانی یا مالیات فروش هماهنگ شده)، مالیات&zwnj;های املاک و مالیات&zwnj;های دیگر مربوط به هر منطقه است.</li>
                <li>مالیات بر کالاها و خدمات (GST) و مالیات فروش هماهنگ (HST): حسابداران باید با قوانین و مقررات مربوط به GST و HST آشنا باشند که مالیات&zwnj;های مصرفی بر روی اکثر کالاها و خدماتی هستند که در کانادا فروخته می&zwnj;شوند. HST یک مالیات ترکیبی فدرال-استانی در برخی استان&zwnj;ها است، در حالی که برخی از دیگران GST جداگانه و مالیات فروش استانی را دارند.</li>
                <li>برنامه&zwnj;ریزی مالیاتی: حسابداران با ارائه استراتژی&zwnj;های برنامه&zwnj;ریزی مالیاتی به منظور کاهش پرداختی مالیات و همچنین اطمینان از رعایت تمام قوانین و مقررات مالیاتی مربوط، به مشتریان کمک می&zwnj;کنند.</li>
                <li>گزارش&zwnj;دهی و ارسال مالیاتی: حسابداران به مشتریان کمک می&zwnj;کنند تا انواع مختلفی از اظهارنامه&zwnj;های مالیاتی را اعمال و ارسال کنند، از جمله اظهارنامه&zwnj;های مالیات بر درآمد شخصی، اظهارنامه&zwnj;های مالیاتی شرکت، اظهارنامه&zwnj;های GST/HST، اظهارنامه&zwnj;های مالیات پرداختی، و سایر اسناد مالیاتی مربوطه مورد نیاز ادارات دولتی.</li>
                <li>حسابرسی و اختلافات مالیاتی: در صورت حسابرسی مالیاتی یا اختلاف با ادارات مالیاتی، حسابداران نمایندگی و کمک به مشتریان را انجام می&zwnj;دهند و اطمینان حاصل می&zwnj;کنند که آن&zwnj;ها حقوق و تعهدات خود را درک کرده&zwnj;اند و به حل هرگونه مسئله با ادارات مالیاتی کمک می&zwnj;کنند.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P12'>
        <div className='container'>
          <div className='row'>
            <h3>مهارت زبانی مورد نیاز یک حسابدار</h3>

            <div className='col-12'>
              <p>از آنجایی که برنامه CPA PEP برای رشته حسابداری در کانادا به زبان انگلیسی است، داشتن مهارت زبانی قابل قبول به عنوان یک پیش شرط الزامی برای ورود به این برنامه خواهد بود. اگرچه که مهارت زبانی بسته به هر استان ممکن است متفاوت باشد، اما عموما باید نتیجه آزمون زبان خارجی خود را با حداقل CLB 8 در تمامی چهار مهارت زبانی؛ شامل خواندن، نوشتن، گوش دادن و صحبت کردن ارائه کنید. برای استان کبک، مهارت زبانی فرانسه مد نظر خواهد بود.</p>
              <p>شرایط پذیرش CPA PEP برای متقاضیان نیروی کار بدون مدرک کارشناسی</p>
              <p>برای ورود به برنامه حرفه&zwnj;ای حسابداری (CPA PEP) بدون داشتن مدرک کارشناسی، لازم است معیارهای واجد شرایط بودن را رعایت کنید. به عنوان دانشجوی بدون مدرک کارشناسی، شما باید:</p>
              <ul>
                <li>حداقل هشت سال تجربه مرتبط در یکی از حوزه&zwnj;های فنی CPA را داشته باشید، از جمله: گزارش&zwnj;دهی مالی، حسابرسی و اطمینان، استراتژی و حاکمیت، حسابداری مدیریت، مالی و مالیات که هر دو زیرشاخه باید به حداقل سطح ۱ مهارت در اسناد تجربه عملی CPA (CPA PER) رسیده باشند.</li>
                <li>&nbsp;رزومه جامعی را که شامل سوابق کاری، خدمات اجتماعی و فعالیت&zwnj;های داوطلبانه باشد به نهاد استانی/منطقه&zwnj;ای خود ارسال کنید.</li>
                <li>&nbsp;ریزنمرات رسمی دوره&zwnj;های دانشگاهی یا کالج که شرکت کرده&zwnj;اید را به نهاد استانی/منطقه&zwnj;ای خود ارائه دهید.</li>
                <li>سه نامه مرجع از کارفرمای فعلی، همکار CPA یا عضو یک نهاد حسابداری بین&zwnj;المللی با توافقنامه متقابل با CPA کانادا و یک مرجع شخصی به نهاد استانی/منطقه&zwnj;ای خود ارسال کنید.</li>
                <li>بیانیه&zwnj;ای شخصی در مورد انگیزه، ظرفیت و تعهد خود برای دنبال کردن مدرک CPA به نهاد استانی/منطقه&zwnj;ای خود ارائه دهید.</li>
                <li>در تکمیل موضوعات پیش&zwnj;نیاز پشتکار داشته باشید.</li>
              </ul>
              <p>&nbsp;شرایط پذیرش CPA PEP برای دارندگان مدرک کارشناسی</p>
              <p>برای ورود به برنامه حرفه&zwnj;ای حسابداری (CPA PEP)، باید دارای مدرک کارشناسی با پوشش موضوعات مربوطه باشید. اگر در رشته&zwnj;ای غیر از حسابداری تحصیل می&zwnj;کنید، می&zwnj;توانید این پوشش موضوعی را از طریق دوره&zwnj;های مقدماتی از راه دور یا جلسات حضوری که توسط نهادهای استانی (یا در برخی موارد نهادهای منطقه&zwnj;ای) ارائه می&zwnj;شود، دریافت کنید. این دوره&zwnj;های مقدماتی به&zwnj;صورت ملی توسط حرفه حسابداری توسعه یافته&zwnj;اند و توسط نهادهای استانی ارائه می&zwnj;شوند. نهادهای استانی CPA مستقیماً با مؤسسات آموزش عالی برای توسعه الزامات دوره&zwnj;های خاص دانشجویان همکاری می&zwnj;کنند.</p>
              <h4>شرایط انتقال از برنامه قدیمی CA، CMA یا CGA به CPA</h4>
              <p>اگر از برنامه&zwnj;های قدیمی CA، CMA یا CGA به برنامه جدید CPA منتقل شده&zwnj;اید، باید با راهنمایی&zwnj;های انتقال آشنا شوید. حرفه CPA متعهد شده است که تحصیلات و تجربیاتی که برای یک مدرک قدیمی کسب کرده&zwnj;اید، به&zwnj;عنوان مدرک CPA شما شناخته شود. اگر تا سپتامبر 2015 تمام الزامات تحصیلی برنامه قدیمی خود را تکمیل نکرده و به نقطه مناسب در برنامه CPA منتقل شده&zwnj;اید، پس از تکمیل برنامه مذکور، به CPA تبدیل خواهد شد.</p>
              <ul>
                <li>چند نکته برای راهنمایی دانشجویان انتقالی</li>
              </ul>
              <p>برای اطلاع از مهلت&zwnj;های انتقال و تکمیل الزامات CPA، به راهنمای دانشجویان انتقالی مراجعه کنید. برخی از بازه&zwnj;های زمانی کلیدی شامل موارد زیر است:</p>
              <ul>
                <li>30 ژوئن 2020: باید مدرک خود را تا این تاریخ تکمیل کنید.</li>
                <li>30 ژوئن 2022: اگر نتوانستید الزامات تجربی قدیمی (PER) را تا 1 سپتامبر 2018 (31 اوت 2018 در بریتیش کلمبیا) تکمیل کنید، باید CPA PEP و امتحان نهایی مشترک (CFE) را تا این تاریخ تکمیل کنید.</li>
                <li>30 ژوئن 2023: اگر CPA PEP و CFE را تا 30 ژوئن 2022 به اتمام رساندید، باید CPA PER را تا این تاریخ تکمیل کنید تا گواهینامه بگیرید.</li>
                <li>30 ژوئن 2028: اگر به دوره&zwnj;های مقدماتی CPA منتقل شده&zwnj;اید، باید آن&zwnj;ها را تا 30 ژوئن 2022 تکمیل کنید و سپس به CPA PEP و CFE منتقل و آن را هم تا این تاریخ تکمیل کنید تا حقوق انتقال خود را حفظ نمایید.</li>
                <li>30 ژوئن 2029: اگر به دوره&zwnj;های مقدماتی CPA منتقل شده&zwnj;اید و سپس به CPA PEP و CFE انتقال یافته&zwnj;اید و آن را هم تا 30 ژوئن 2028 تکمیل کرده&zwnj;اید، باید CPA PER را تا این تاریخ تکمیل کنید تا حقوق انتقال خود را حفظ نمایید.</li>
                <li>دانشجویان و داوطلبان انتقالی در کبک باید برای اطلاعات بیشتر با CPA Qu&eacute;bec تماس بگیرند.</li>
              </ul>
              <h4>نحوه ارزیابی مدارک بین&zwnj;المللی متقاضیان توسط CPA</h4>
              <p>اگر یک حسابدار آموزش&zwnj;دیده بین&zwnj;المللی هستید، حرفه CPA کانادا مدارک تحصیلی و حرفه&zwnj;ای شما را به&zwnj;سرعت ارزیابی می&zwnj;کند و مسیر روشنی برای دریافت مدرک CPA کانادا فراهم می&zwnj;سازد. ما برنامه&zwnj;های ساده&zwnj;ای را ارائه می&zwnj;دهیم تا به شما کمک کنیم به&zwnj;طور کارآمد واجد شرایط شوید، و همچنین مسیرهای شغلی جایگزینی که می&zwnj;توانند به عنوان یک گام موقت برای اشتغال در کانادا یا دستیابی به اهداف شغلی کوتاه&zwnj;مدت هستند را ارائه دهیم.</p>
              <ul>
                <li>توافقنامه&zwnj;های شناخت عضویت بین&zwnj;المللی</li>
              </ul>
              <p>درحال&zwnj;حاضر CPA کانادا توافقنامه&zwnj;های شناخت عضویت با نهادهای حسابداری بین&zwnj;المللی امضا کرده است که به CPAهای کانادایی اجازه می&zwnj;دهد برای عضویت در آن نهادها اقدام کنند و به اعضای آن نهادها اجازه می&zwnj;دهد که برای دریافت مدرک CPA کانادا درخواست دهند.</p>
              <p>حرفه&zwnj;ای&zwnj;های حسابداری بین&zwnj;المللی بدون توافقنامه&zwnj;ها</p>
              <p>برای حرفه&zwnj;ای&zwnj;های حسابداری بین&zwnj;المللی که عضو نهادهای حسابداری با توافقنامه&zwnj;های رسمی با حرفه حسابداری کانادا نیستند، فرایند ارزیابی فرد متقاضی برای تبدیل شدن به CPA کانادا وجود دارد که به شما این امکان را می&zwnj;دهد تا مدارک خود را برای بررسی&zwnj;های جداگانه ارائه دهید.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Index.guestGuard = true

export default Index
