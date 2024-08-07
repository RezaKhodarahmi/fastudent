import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'

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
      router.push('/privacy-policy')
    }
  }, [])

  return (
    <>
      <section className='FNV-SinglePage FNV-SinglePage-Header'>
        <div className='container'>
          <div className='row FNV-Header'>
            <div className='col-12'>
              <h1>قوانین کلاس های آموزشی فناوران</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P1'>
        <div className='container'>
          <div className='row'>
            <h3>تاریخ اجرا: 12 سپتامبر 2020</h3>

            <div className='col-12'>
              <p>مجموعه آموزشی فناوران در جهت حفظ آرامش و ارائه بهترین خدمات آموزشی به دانشجویان خود ، قوانین زیر را ایجاد کرده است.</p>
              <p>این قوانین لازم الاجرا است و تخطی از هرکدام میتواند موجب پنالتی (از جریمه نقدی، اخراج از کلاس و یا حتی شکایت در مراجع قانونی) شود.</p>
              <ol>
                <li>کلاس های آنلاین فناوران در پلتفرم ZOOM برگزار میشود&nbsp;</li>
                <li>عضویت در گروه تلگرامی دوره طبق قوانین فناوران الزامی میباشد.</li>
                <li>آدرس ایمیلی که با آن اقدام به ایجاد اکانت در وبسایت فناوران کرده&zwnj;اید باید بهترین ایمیل برای برقراری ارتباط با دانشجو باشد.</li>
                <li>مدت دسترسی شما به ویدئو&zwnj;ها، تست ها و کلیه محتوای آموزشی از زمان شروع دوره بمدت 8 ماه میباشد و پس از این زمان دسترسی شما قطع میشود.</li>
                <ol>
                  <li>این دسترسی با پرداخت هزینه مازاد قابل تمدید میباشد.</li>
                </ol>
                <li>درخواست کنسلی کلاس&zwnj;های آنلاین فقط تا قبل از جلسه دوم امکانپذیر میباشد و پس از برگزاری جلسه دوم امکان استرداد وجه پرداختی به هیچ وجه وجود نخواهد داشت.</li>
                <li>حق مالکیت و انتشار تمامی متریال&zwnj;های آموزشی و تمامی محتویات کلاس&zwnj;ها اعم از موارد زیر فقط برای شرکت فناوران میباشد&nbsp;</li>
                <ol>
                  <li>ویدیوهایی که در محیط آموزشی گرفته میشود</li>
                  <li>فایل&zwnj;های به اشتراک گذاشته شده در گروه&zwnj;های تلگرامی</li>
                  <li>جزوات</li>
                  <li>ریکورد کلاس&zwnj;ها</li>
                  <li>سایر موارد</li>
                </ol>
                <li>قواعد حق انتشار محتوای تولیدی فناوران شامل موارد زیر میباشد.</li>
                <ol>
                  <li>هردانشجو فقط با یک سیستم یا دیوایس میتواند از محتویات آموزشی استفاده کند.</li>
                  <li>اشتراک گذاری محتوای آموزشی <strong>رایگان</strong> در فناوران مجاز میباشد، طبعا اشتراک گذاری محتوای آموزشی غیر رایگان ممنوع می&zwnj;باشد.</li>
                  <li>هرگونه نشر و انتشار محتوای آموزشی فناوران نقض قوانین کپی رایت در کانادا میباشد و طبق این قوانین با خاطیان برخورد میشود.</li>
                  <li>رکورد جلسات کلاسی از طرف شرکت کنندگان (به هر منظور از جمله استفاده شخصی و با هر روشی) غیرمجاز میباشد و در صورت مشاهده با خاطیان برخورد جدی میشود.&nbsp;</li>
                </ol>
                <li>قانونگذاری، اجرا و تغییر قوانین کلاس شامل: نحوه برگزاری کلاس،حضور با دوربین روشن در کلاس، حضور با نام واقعی، تغییر ساعت&zwnj;های کلاس، کنسلی یا به تعویق انداختن هر جلسه با نظر مستقیم فناوران و مدرس کلاس میباشد.</li>
                <ol>
                  <li>رعایت همه این قوانین به عهده دانشجویان میباشد. تخطی از این قوانین میتواند منجر به اخراج از کلاس شود.</li>
                  <li>فناوران و مدرس کلاس میتوانند با برگزاری رای گیری نتیجه هر نوع تغییر در کلاس را بر عهده دانشجویان قرار دهند.</li>
                  <li>اگر دوره&zwnj;ای به هردلیل از طرف فناوران با تاخیر بیش از <strong>یک ماه</strong> مواجه شد، دانشجو میتواند درخواست ریفاند کامل یا انتقال وجه به دوره دیگر داشته باشد.</li>
                </ol>
                <li>تشکیل گروه موازی با گروه کلاسی (به هردلیل) با حضور دانشجویان کلاس که در جهت ارتباط به منظور <strong>آموزشی</strong> یا هر <strong>منظوری که به منافع فناوران مرتبط باشد</strong>، بدون حضور یکی از ادمین&zwnj;های فناوران و هماهنگی با مدیریت فناوران غیرمجاز است.</li>
                <ol>
                  <li>تشکیل هرگروه موازی با گروه اصلی کلاس در موارد زیر مجاز است.</li>
                  <ol>
                    <li>تشکیل گروه&zwnj;های دوستانه که با قوانین کپی&zwnj;رایت فناوران همخوانی داشته باشد.</li>
                    <li>گروهی جهت هماهنگی برای هر نوع اکتیویتی خارج از حوزه فعالیت&zwnj;های فناوران</li>
                  </ol>
                  <li>تشکیل گروه&zwnj;های موازی بمنظور موارد زیر غیرمجاز است.</li>
                  <ol>
                    <li>به اشتراک گذاری محتویات آموزشی فناوران</li>
                    <li>گفتگو در رابطه با مسائل کلاسی</li>
                    <li>هماهنگی گروهی برای انجام هرنوع عملی برخلاف منافع فناوران</li>
                  </ol>
                  <li>اقدام به تشکیل یا حضور در گروه&zwnj;های موازی غیرمجاز، ممکن است سبب اخراج و یا شکایت در مراجع قانونی شود.&nbsp;</li>
                  <ol>
                    <li>لطفا قبل از تشکیل یا حضور در هرگروه موازی، موارد را با ادمین&zwnj;های فناوران هماهنگ کنید.&nbsp;</li>
                    <li>اگر به هر نحو دانشجویی به گروه دیگری اضافه شود که ادمین&zwnj;های فناوران در آن حضور نداشته باشند (غیر از گروه کلاسی) باید سریعا گروه موازی را حذف و از گروه خارج شود.&nbsp;</li>
                    <li>این مورد حتما باید به فناوران توسط دانشجو اطلاع داده شود.&nbsp;</li>
                    <li>در صورت اطلاع از فعالیت گروه های موازی و انتشار اطلاعات کلاسی در گروه های دیگر فناوران این حق را برای خود محفوظ میدارد که طبق قوانین با خاطی برخود کند.</li>
                  </ol>
                  <li>در صورت تشکیل هرگروه موازی فناوران حق راستی&zwnj;&zwnj;آزمایی ماهیت گروه را برای خود محفوظ میدارد.</li>
                </ol>
                <li>دوره های ورکشاپ قابلیت کنسلی ندارند و فقط با هماهنگی فناوران قابلیت انتقال به دوره&zwnj;های دیگر درهمان رشته را دارد.</li>
                <li>ایمنی کارگاه (Heatlh and Safety) از اهمیت بسیاری برخوردار میباشد. هرگونه عدم همکاری و رعایت قوانین میتواند منجر به اخراج از کلاس شود</li>
                <ol>
                  <li>همه کارگاه&zwnj;های آموزشی دارای آموزش ابتدایی H&amp;S میباشد. این دوره شرط لازم ورود به کلاس&zwnj;های کارگاهی میباشد.</li>
                  <li>گواهینامه&zwnj;های پایان دوره فقط توسط فناوران و با حفظ رعایت شروط کلاسی امکان پذیر میباشد.</li>
                  <li>اگر کلاسی مشروط به امتحان پایان دوره میباشد، شرکت در امتحان جهت صدور گواهینامه الزامی است.</li>
                </ol>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Index.guestGuard = true

export default Index