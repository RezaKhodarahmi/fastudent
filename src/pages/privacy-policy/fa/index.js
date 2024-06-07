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
    if (lng == 'fa') {
      router.push('/privacy-policy')
    }
  }, [])

  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          <h1>سیاست حفظ حریم خصوصی</h1>
          <p><strong>تاریخ اجرا: 7 ژوئن 2024</strong></p>

          <h2>مقدمه</h2>
          <p>به موسسه فناوری و مهندسی فناوران خوش آمدید. حریم خصوصی شما برای ما مهم است. این سیاست حفظ حریم خصوصی توضیح می‌دهد که چگونه اطلاعات شما را هنگام بازدید از وب‌سایت ما <a href="https://fanavaran.ca">https://fanavaran.ca</a> یا تماس با ما از طریق روش‌های دیگر جمع‌آوری، استفاده، افشا و محافظت می‌کنیم. لطفاً این سیاست را با دقت بخوانید تا دیدگاه‌ها و شیوه‌های ما در مورد داده‌های شخصی شما و نحوه برخورد ما با آن‌ها را درک کنید.</p>

          <h2>اطلاعاتی که جمع‌آوری می‌کنیم</h2>
          <p>ما ممکن است اطلاعات زیر را درباره شما جمع‌آوری و پردازش کنیم:</p>

          <h3>اطلاعات شناسایی شخصی</h3>
          <ul>
            <li>نام</li>
            <li>آدرس ایمیل</li>
            <li>شماره تلفن</li>
            <li>آدرس پستی</li>
            <li>پیشینه تحصیلی</li>
            <li>اطلاعات پرداخت (هنگامی که در دوره‌های ما ثبت‌نام می‌کنید)</li>
            <li>هر گونه اطلاعات دیگری که به صورت داوطلبانه ارائه می‌دهید</li>
          </ul>

          <h3>اطلاعات غیر شناسایی شخصی</h3>
          <ul>
            <li>نوع مرورگر</li>
            <li>سیستم عامل</li>
            <li>آدرس پروتکل اینترنت (IP)</li>
            <li>ارائه‌دهنده خدمات اینترنت (ISP)</li>
            <li>تاریخ و زمان بازدیدها</li>
            <li>صفحات ارجاع/خروج</li>
            <li>تعداد کلیک‌ها</li>
          </ul>

          <h2>نحوه استفاده از اطلاعات شما</h2>
          <p>ما از اطلاعات جمع‌آوری شده به روش‌های زیر استفاده می‌کنیم:</p>
          <ul>
            <li>برای ارائه و نگهداری وب‌سایت ما</li>
            <li>برای ارائه دوره‌های آنلاین و خدمات آموزشی ما</li>
            <li>برای پردازش تراکنش‌ها</li>
            <li>برای بهبود وب‌سایت و خدمات ما</li>
            <li>برای درک و تحلیل نحوه استفاده شما از وب‌سایت ما</li>
            <li>برای توسعه محصولات، خدمات، ویژگی‌ها و قابلیت‌های جدید</li>
            <li>برای ارتباط با شما، از جمله برای خدمات مشتری، به‌روزرسانی‌ها و مقاصد تبلیغاتی</li>
            <li>برای ارسال ایمیل‌های مرتبط با پیشرفت دوره شما، به‌روزرسانی‌ها یا سایر خدمات</li>
            <li>برای محافظت از وب‌سایت و خدمات ما در برابر سوءاستفاده یا فعالیت‌های غیرقانونی</li>
          </ul>

          <h2>نحوه اشتراک‌گذاری اطلاعات شما</h2>
          <p>ما اطلاعات شناسایی شخصی شما را به اشخاص ثالث نمی‌فروشیم، تجارت نمی‌کنیم یا انتقال نمی‌دهیم، مگر اینکه قبلاً به کاربران اطلاع داده باشیم. این شامل همکاران میزبانی وب‌سایت و سایر طرف‌هایی که به ما در اداره وب‌سایت، انجام کسب و کار یا خدمات‌دهی به کاربران ما کمک می‌کنند نمی‌شود، به شرطی که آن طرف‌ها موافقت کنند که این اطلاعات را محرمانه نگه دارند. همچنین ممکن است اطلاعات را زمانی که لازم باشد برای رعایت قانون، اجرای سیاست‌های سایت ما یا حفاظت از حقوق، دارایی یا ایمنی خود یا دیگران، افشا کنیم.</p>

          <h2>امنیت اطلاعات شما</h2>
          <p>ما از تدابیر امنیتی اداری، فنی و فیزیکی برای کمک به محافظت از اطلاعات شخصی شما استفاده می‌کنیم. در حالی که ما اقدامات معقولی برای ایمن‌سازی اطلاعات شخصی که به ما ارائه می‌دهید انجام داده‌ایم، لطفاً توجه داشته باشید که علی‌رغم تلاش‌های ما، هیچ تدبیر امنیتی کامل یا غیرقابل نفوذ نیست و هیچ روش انتقال داده نمی‌تواند تضمین شود که در برابر هر گونه ره‌گیری یا سوءاستفاده دیگر محافظت شود.</p>

          <h2>حقوق حفاظت از داده‌های شما</h2>
          <p>بسته به موقعیت جغرافیایی شما، ممکن است حقوق زیر را در مورد اطلاعات شخصی خود داشته باشید:</p>
          <ul>
            <li>حق دسترسی - شما حق دارید که کپی‌هایی از داده‌های شخصی خود را درخواست کنید.</li>
            <li>حق تصحیح - شما حق دارید که درخواست کنید هر گونه اطلاعاتی که معتقدید نادرست است را تصحیح کنیم یا اطلاعاتی را که معتقدید ناقص است تکمیل کنیم.</li>
          </ul>

          <p>اگر سوالی در مورد این سیاست حفظ حریم خصوصی دارید، لطفاً با ما تماس بگیرید:</p>
          <p>ایمیل: <a href="mailto:info@fanavaran.ca">info@fanavaran.ca</a></p>
          <p>تلفن: (905) 505-2323 و (672) 399-6600</p>
        </div>
      </div>
    </>
  )
}

Index.guestGuard = true
export default Index