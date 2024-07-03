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
      router.push('/english')
    }
  }, [])

  return (
    <>
      <section className='FNV-SinglePage FNV-SinglePage-Header'>
        <div className='container'>
          <div className='row FNV-Header'>
            <div className='col-12'>
              <h1>تدریس خصوصی زبان انگلیسی در کانادا</h1>
            </div>

            <div className='col-12 col-md-6 col-lg-12'>
              <p>تسلط بر زبان انگلیسی یکی از مهارت&zwnj;های بسیار ضروری برای کسانی است که قصد مهاجرت به کشورهای انگلیسی زبان مانند کانادا را دارند. تدریس خصوصی زبان انگلیسی در کانادا را می&zwnj;توان یکی از مهم&zwnj;ترین گام&zwnj;ها برای مهاجران تازه وارد دانست.</p>
              <p><strong>فناوران دوه&zwnj;های ترمیک کلاس انگلیسی خصوصی در کشور کانادا برای ایرانیان با مدرس کانادایی را فراهم کرده تا در سریع&zwnj;ترین زمان به صورت کاملا استاندارد زبان انگلیسی خود را تقویت کنند.</strong></p>
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
                <li><Link href="#P1" target="_blank" rel="noopener">تدریس خصوصی زبان انگلیسی در کانادا برای ایرانیان</Link></li>
                <li><Link href="#P2" target="_blank" rel="noopener">پکیج کلاس زبان انگلیسی خصوصی برای ایرانیان</Link></li>
                <li><Link href="#P3">تدریس خصوصی با معلم نیتیو کانادایی</Link></li>
                <li> <Link href="#P4" target="_blank" rel="noopener">هزینه دوره های زبان در کانادا</Link></li>
                <li><Link href="#P5">کالج زبان انگلیسی در کانادا</Link></li>
                <li><Link href="#P6">مقایسه کالج زبان انگلیسی و دوره خصوصی زبان انگلیسی</Link></li>
                <li><Link href="#P7">دوره های رایگان زبان انگلیسی در کانادا برای مهاجران تازه وارد</Link></li>
                <li><Link href="#P8" target="_blank" rel="noopener">توصیه فناوران به مهاجران تازه‌وارد</Link></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P1'>
        <div className='container'>
          <div className='row'>
            <h3>تدریس خصوصی زبان انگلیسی در کانادا برای ایرانیان</h3>

            <div className='col-12'>
              <p>یکی از چالش‌های اصلی ایرانیان پس از مهاجرت به کانادا زبان انگلیسی است. تفاوت زبانی بین ایران و کانادا اصلی‌ترین دلیلی است که این مشکل ایجاد می‌شود. استفاده از تدریس خصوصی زبان انگلیسی در کانادا اولین توصیه‌ای است که فناوران برای مهاجران تازه وارد به این کشور دارد.</p>
              <p>با فرض بر اینکه شما مهارت‌های فنی یا مهندسی قابل قبولی دارید و حتی توانسته‌اید لایسنس رشته خود را نیز در کانادا دریافت کنید، بدون دانش قوی زبان انگلیسی در کانادا، شانس شما برای استخدام و دریافت حقوق‌های بالا به شدت کاهش می‌یابد و بعضا به صفر می‌رسد.</p>

              <h4>دوره‌های ترمیک زبان انگلیسی خصوصی برای ایرانیان</h4>
              <p>دوره&zwnj;های ترمیک زبان انگلیسی خصوصی برای ایرانیان با توجه به نیازهای متقاضیان طراحی شده&zwnj; است. این دوره&zwnj;های در دو گروه عمومی (General) و تخصصی (Specialized) طراحی شده&zwnj;اند که شامل موضوعات مختلفی مانند گرامر، لغت و مکالمه در سطوح پایه و تخصصی ویژه محیط کار کانادایی هستند.&nbsp;</p>
              <p>از جمله ویژگی&zwnj;های این دوره&zwnj;ها می&zwnj;توان موارد زیر را نام برد:</p>

              <ul>
                <li>تعیین سطح و مشاوره تخصصی مسیر آموزشی</li>
                <li>مدرس کانادایی (Native)</li>
                <li>آموزش تلفظ درست کلمات</li>
                <li>آموزش عبارات تخصصی زبان انگلیسی</li>
                <li>تطبیق موضوعات آموزشی با رشته و محیط کاری (زبان انگلیسی ویژه مهندسان، معماران و &hellip;)</li>
                <li>هزینه به مراتب کمتر در مقایسه با موسسات مشابه و کالج&zwnj;ها</li>
                <li>پرسش و پاسخ و عیب&zwnj;یابی</li>
                <li>آشنایی با فرهنگ&zwnj;های کانادایی (به ویژه در محیط کاری)</li>
                <li>شناسایی نقاط ضعف و قدرت و هماهنگ&zwnj;سازی با مدرس برای داشتن بهترین نتیجه</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P2'>
        <div className='container'>
          <div className='row'>

            <div className='col-12'>

            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P3'>
        <div className='container'>
          <div className='row'>
            <h3>تدریس خصوصی با معلم نیتیو کانادایی</h3>

            <div className='col-12'>
              <p>تدریس خصوصی با معلم نیتیو کانادایی به شما کمک می&zwnj;کند تا به سرعت دانش زبانی خود را تقویت کنید. مدرس نیتیو با نیازهای شما آشناست و به شما کمک می&zwnj;کند تا به سطح مورد نظر خود در زبان انگلیسی برسید.</p>
              <p>تدریس خصوصی زبان انگلیسی در کانادا با مدرس نیتیو کانادایی به چه مواردی کمک می&zwnj;کند؟</p>
              <ul>
                <li><strong>تصحیح اشتباهات رایج گرامری، لغوی و &hellip;</strong></li>
                <li><strong>کمک به افزایش دایره واژگان</strong></li>
                <li><strong>آشنایی کامل با اصطلاحات و واژگان رشته&zwnj;های مختلف شغلی</strong></li>
                <li><strong>فرهنگ کاری در کانادا</strong></li>
                <li><strong>تقویت مهارت&zwnj;های زبانی</strong></li>
                <li><strong>تقویت شنوایی</strong></li>
                <li><strong>افزایش اعتماد به نفس در مکالمه</strong></li>
                <li><strong>ارائه فیدبک&zwnj;های آنی</strong></li>
                <li><strong>فرهنگ مکالمه درست کانادایی</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P4'>
        <div className='container'>
          <div className='row'>
            <h3>هزینه دوره های زبان در کانادا</h3>

            <div className='col-12'>
              <p>هزینه دوره های زبان در کانادا به عوامل متعددی بستگی دارد، از جمله:</p>
              <ul>
                <li><strong>شهر محل برگزاری دوره</strong></li>
                <li><strong>مدت زمان دوره</strong></li>
                <li><strong>سطح آموزشی</strong></li>
                <li><strong>نوع دوره</strong></li>
                <li><strong>موسسه آموزشی ارائه دهنده دوره</strong></li>
              </ul>
              <p>با این حال، به صورت میانگین، هزینه کلاس خصوصی انگلیسی در کانادا تا ماهی&nbsp;۲۰۰۰ دلار متغیر است. موسسه فناوران پکیج&zwnj;های ویژه&zwnj;ای را طراحی کرده که با تمرکز به نیاز مهاجران تازه&zwnj;وارد، به ویژه محدودیت&zwnj;های آن&zwnj;ها در هزینه&zwnj;ها قیمت&zwnj;گذاری شده است.</p>
              <p>بعضی از شهرهای کانادا مانند ونکوور و تورنتو، هزینه&zwnj;های بالاتری برای آموزش زبان دارند.</p>
              <p>&nbsp;در مقابل، شهرهای کوچکتر مثل کلگری و ادمونتون، هزینه&zwnj;های پایین&zwnj;تری دارند. دوره&zwnj;های عمومی زبان انگلیسی معمولا ارزان&zwnj;تر از دوره&zwnj;های تخصصی مثل آمادگی برای آزمون IELTS یا TOEFL و دوره&zwnj;های آموزشی تخصصی زبان انگلیسی ویژه فیلد شغلی فرد هستند.&nbsp;</p>
              <ul>
                <li><strong>میانگین هزینه یک دوره زبان عمومی انگلیسی در کانادا حدود ۲۵۰ تا ۳۵۰ دلار کانادایی در هفته است.</strong></li>
                <li><strong>هزینه یک دوره خصوصی زبان انگلیسی در کانادا می&zwnj;تواند بین ۶۰ تا ۱۰۰ دلار کانادایی در ساعت باشد.</strong></li>
                <li><strong>هزینه یک دوره آمادگی برای آزمون IELTS یا TOEFL می&zwnj;تواند بین ۴۰۰ تا ۶۰۰ دلار کانادایی در هفته باشد.</strong></li>
                <li><strong>موسسه آموزشی ارائه دهنده دوره</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P5'>
        <div className='container'>
          <div className='row'>
            <h3>کالج زبان انگلیسی در کانادا</h3>

            <div className='col-12'>
              <p>کالج زبان انگلیسی در کانادا محیط مناسبی برای یادگیری زبان انگلیسی فراهم می&zwnj;کند. دانشجویان فرصت خوبی برای بهبود مهارت&zwnj;های زبانی و فرهنگی دارند.&nbsp;</p>
              <p>دانشجویان می&zwnj;توانند از امکانات فرهنگی و اجتماعی کالج&zwnj;ها نیز بهره&zwnj;برداری کنند.&nbsp;</p>
              <p>با این حال، از نظر هزینه کالج&zwnj;ها به شدت گران هستند و برای مهاجران تازه وارد گزینه مطلوبی نیستند. دیگر مواردی که می&zwnj;توان عنوان کرد:</p>
              <ul>
                <li><strong>تراکم و تعداد بالای دانشجویان</strong></li>
                <li><strong>محدودیت در توجه فردی به هر دانشجو</strong></li>
                <li><strong>جدول زمانی مشخص و انعطاف&zwnj;ناپذیر</strong></li>
                <li><strong>محدودیت در تنوع برنامه&zwnj;های آموزشی</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P6'>
        <div className='container'>
          <div className='row'>
            <h3>مقایسه کالج زبان انگلیسی و دوره خصوصی زبان انگلیسی</h3>

            <div className='col-12'>
              <p>دوره‌های خصوصی زبان انگلیسی:</p>
              <ul>
                <li><strong>توجه فردی بیشتر از سمت مدرس</strong></li>
                <li><strong>جدول زمانی انعطاف&zwnj;پذیر</strong></li>
                <li><strong>محتوای آموزشی سفارشی</strong></li>
                <li><strong>رشد سریع&zwnj;تر</strong></li>
                <li><strong>افزایش اعتماد به نفس</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P7'>
        <div className='container'>
          <div className='row'>
            <h3>دوره های رایگان زبان انگلیسی در کانادا برای مهاجران تازه وارد</h3>

            <div className='col-12'>
              <p>با توجه به اهمیت زبان انگلیسی در کانادا و ورود مهاجران متعدد به این کشور، دولت کانادا دوره های رایگان زبان انگلیسی را برگزار می&zwnj;کند.</p>
              <p>&nbsp;بسیاری از مهاجران با هدف کاهش هزینه&zwnj;ها در دوره های رایگان زبان انگلیسی شرکت می&zwnj;کنند. در نگاه اول، این دوره&zwnj;ها تا حدودی کمک&zwnj;کننده هستند، اما معایب مختلفی را می&zwnj;توان نام برد:</p>
              <ul>
                <li><strong>محدودیت در زمان و مدت دوره&zwnj;ها</strong></li>
                <li><strong>واگذاری صندلی در صورت غیبت&zwnj;های متوالی</strong></li>
                <li><strong>کمبود تمرکز فردی و عدم توجه به نیازهای خاص هر فرد</strong></li>
                <li><strong>احتمال کمبود منابع و تجهیزات آموزشی</strong></li>
                <li><strong>عدم پشتوانه و تردید در معتبر بودن گواهی&zwnj;های دریافتی</strong></li>
                <li><strong>تراکم بالا در کلاس&zwnj;ها و کیفیت آموزش پایین&zwnj;تر</strong></li>
                <li><strong>نیاز به داشتن معیارها و شرایط خاص برای ورود به دوره&zwnj; ها</strong></li>
                <li><strong>عدم تمرکز بر موضوعات و مهارت&zwnj;های خاص مورد نیاز مهاجران (به ویژه مهندسان، تکنسین&zwnj; های فنی و &hellip;)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P8'>
        <div className='container'>
          <div className='row'>
            <h3>توصیه فناوران به مهاجران تازه‌وارد</h3>

            <div className='col-12'>
              <ul>
                <li>دانش زبان انگلیسی کمتر از CLB 7: هفته&zwnj;ای دو جلسه آموزش زبان انگلیسی با مدرس کانادایی به مدت حداقل یک سال</li>
                <li>دانش زبان انگلیسی کمتر از CLB 10 و بیشتر از CLB 7: هفته&zwnj;ای یک جلسه آموزش زبان انگلیسی با مدرس کانادایی برای حداقل شش ماه</li>
                <li>دانش زبان انگلیسی بیشتر از CLB 10: هفته&zwnj;ای یک جلسه تقویت زبان انگلیسی برای تطبیق هرچه بیشتر با فرهنگ کانادایی</li>
              </ul>
              <p>برای تطبیق آزمون IELTS و CLB کانادا می‌توانید از جدول زیر استفاده کنید:</p>

              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th>CLB Level</th>
                    <th>Reading</th>
                    <th>Writing</th>
                    <th>Listening</th>
                    <th>Speaking</th>
                    <th>IELTS Band Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CLB 4</td>
                    <td>3.5</td>
                    <td>4.0</td>
                    <td>4.5</td>
                    <td>4.0</td>
                    <td>4.0</td>

                  </tr>
                  <tr>
                    <td>CLB 5</td>
                    <td>4.0</td>
                    <td>5.0</td>
                    <td>5.0</td>
                    <td>5.0</td>
                    <td>5.0</td>


                  </tr>
                  <tr>
                    <td>CLB 6</td>
                    <td>5.0</td>
                    <td>5.5</td>
                    <td>5.5</td>
                    <td>5.5</td>
                    <td>5.5</td>


                  </tr>
                  <tr>
                    <td>CLB 7</td>
                    <td>6.0</td>
                    <td>6.0</td>
                    <td>6.0</td>
                    <td>6.0</td>
                    <td>6.0</td>


                  </tr>
                  <tr>
                    <td>CLB 8</td>
                    <td>6.5</td>
                    <td>6.5</td>
                    <td>7.5</td>
                    <td>6.5</td>
                    <td>6.5</td>


                  </tr>
                  <tr>
                    <td>CLB 9</td>
                    <td>7.0</td>
                    <td>7.0</td>
                    <td>8.0</td>
                    <td>7.0</td>
                    <td>7.0</td>

                  </tr>
                  <tr>
                    <td>CLB 10</td>
                    <td>8.0</td>
                    <td>7.5</td>
                    <td>8.5</td>
                    <td>7.5</td>
                    <td>7.5</td>

                  </tr>
                  <tr>
                    <td>CLB 11</td>
                    <td>8.5</td>
                    <td>8.0</td>
                    <td>9.0</td>
                    <td>8.0</td>
                    <td>8.0</td>

                  </tr>
                  <tr>
                    <td>CLB 12</td>
                    <td>9.0</td>
                    <td>8.5</td>
                    <td>9.5</td>
                    <td>8.5</td>
                    <td>8.5</td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Index.guestGuard = true

export default Index
