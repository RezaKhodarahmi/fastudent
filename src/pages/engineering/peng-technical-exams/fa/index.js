// React
import React, { useEffect } from 'react'
import feather from 'feather-icons'
import { appConfig } from 'src/configs/appConfig'

// ** Import Translation
import { useTranslation } from 'react-i18next'

import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

const Index = () => {
  //Hooks
  const router = useRouter()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  // Check website lang
  useEffect(() => {
    const lng = window.localStorage.getItem('i18nextLng')
    if (lng == 'en') {
      router.push('/engineering/peng-technical-exams')
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
              <h1>آزمون‌های تکنیکال مهندسی در کانادا </h1>
              <h2 className='text-center'>(برای دریافت لایسنس P.Eng)</h2>
              <p className='mt-4'>بسیاری از مهندسان متقاضی لایسنس مهندسی در کانادا (به ویژه در استان&zwnj;های انتاریو و بریتیش کلمبیا) ملزم به عبور از سد آزمون&zwnj;های تکنیکال هستند. موسسه فناوران دوره&zwnj;های آمادگی آزمون&zwnj;های تکنیکال مهندسی را با همکاری اساتید فارسی زبان دانشگاه یورک برگزار می&zwnj;کند. این دوره&zwnj;ها به زبان فارسی و به مدت ۱۶ ساعت برگزار می&zwnj;شوند و با بررسی نمونه سوالات قبلی، سعی می&zwnj;شود تا متقاضیان بتوانند آزمون&zwnj;های مورد نظر خود را پاس کنند.</p>
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
                  <Link href='#P1'>Mechanical Engineering</Link>
                </li>
                <li>
                  <Link href='#P2'>Civil Engineering</Link>
                </li>
                <li>
                  <Link href='#P3'>Electrical Engineering</Link>
                </li>
                <li>
                  <Link href='#P4'>Materials Engineering</Link>
                </li>
                <li>
                  <Link href='#P5'>CS Group Exams</Link>
                </li>
                <li>
                  <Link href='#P6'>آزمون‌های تکنیکال مهندسی چیست؟</Link>
                </li>
                <li>
                  <Link href='#P7'>محدودیت‌های زمانی برای شرکت در آزمون‌های تکنیکال PEO</Link>
                </li>
                <li>
                  <Link href='#FAQ'>سوالات متداول</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG'>
        <div className='container pt-0'>
          <div className='row pt-0'>
            <div className='col-12'>
              <caption id='P1'>Mechanical Engineering</caption>
              <table className='table table-striped table-hover'>
                <tbody>
                  <tr>
                    <td>
                      <p>Group | Code</p>
                    </td>
                    <td>
                      <p>Course</p>
                    </td>
                    <td>
                      <p>Dates</p>
                    </td>
                    <td>
                      <p>Days of the Week</p>
                    </td>
                    <td>
                      <p>Time</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 16-Mec-A1</p>
                    </td>
                    <td>
                      <p>Applied Thermodynamics and Heat Transfer</p>
                    </td>
                    <td>
                      <p>August-19-2024</p>
                    </td>
                    <td>
                      <p>Mondays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 16-Mec-A6</p>
                    </td>
                    <td>
                      <p>Advanced Fluid Mechanics</p>
                    </td>
                    <td>
                      <p>August-20-2024</p>
                    </td>
                    <td>
                      <p>Tuesdays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 16-Mec-A7</p>
                    </td>
                    <td>
                      <p>Advanced Strength of Materials</p>
                    </td>
                    <td>
                      <p>August-21-2024</p>
                    </td>
                    <td>
                      <p>Wednesdays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>B | 16-Mec-B8</p>
                    </td>
                    <td>
                      <p>Engineering Materials</p>
                    </td>
                    <td>
                      <p>August-22-2024</p>
                    </td>
                    <td>
                      <p>Thursdays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <caption id='P2'>Civil Engineering</caption>
              <table className='table table-striped table-hover'>
                <tbody>
                  <tr>
                    <td>
                      <p>Group | Code</p>
                    </td>
                    <td>
                      <p>Course</p>
                    </td>
                    <td>
                      <p>Dates</p>
                    </td>
                    <td>
                      <p>Days of the Week</p>
                    </td>
                    <td>
                      <p>Time</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 16-Civ-A1</p>
                    </td>
                    <td>
                      <p>Elementary Structural Analysis</p>
                    </td>
                    <td>
                      <p>August-19-2024</p>
                    </td>
                    <td>
                      <p>Mondays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 16-Civ-A5</p>
                    </td>
                    <td>
                      <p>Hydraulic Engineering</p>
                    </td>
                    <td>
                      <p>August-20-2024</p>
                    </td>
                    <td>
                      <p>Tuesdays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>B | 16-Civ-B7</p>
                    </td>
                    <td>
                      <p>Transportation Planning and Engineering</p>
                    </td>
                    <td>
                      <p>August-21-2024</p>
                    </td>
                    <td>
                      <p>Wednesdays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>B | 16-Civ-B10</p>
                    </td>
                    <td>
                      <p>Traffic Engineering</p>
                    </td>
                    <td>
                      <p>August-22-2024</p>
                    </td>
                    <td>
                      <p>Thursdays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <caption id='P3'>Electrical Engineering</caption>
              <table className='table table-striped table-hover'>
                <tbody>
                  <tr>
                    <td>
                      <p>Group | Code</p>
                    </td>
                    <td>
                      <p>Course</p>
                    </td>
                    <td>
                      <p>Dates</p>
                    </td>
                    <td>
                      <p>Days of the Week</p>
                    </td>
                    <td>
                      <p>Time</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 16-Elec-A1</p>
                    </td>
                    <td>
                      <p>Circuits</p>
                    </td>
                    <td>
                      <p>August-19-2024</p>
                    </td>
                    <td>
                      <p>Mondays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 16-Elec-A3</p>
                    </td>
                    <td>
                      <p>Signals and Communications</p>
                    </td>
                    <td>
                      <p>August-20-2024</p>
                    </td>
                    <td>
                      <p>Tuesdays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>B | 16-Elec-B3</p>
                    </td>
                    <td>
                      <p>Digital Communications Systems</p>
                    </td>
                    <td>
                      <p>August-21-2024</p>
                    </td>
                    <td>
                      <p>Wednesdays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <caption id='P4'>Materials Engineering</caption>
              <table className='table table-striped table-hover'>
                <tbody>
                  <tr>
                    <td>
                      <p>Group | Code</p>
                    </td>
                    <td>
                      <p>Course</p>
                    </td>
                    <td>
                      <p>Dates</p>
                    </td>
                    <td>
                      <p>Days of the Week</p>
                    </td>
                    <td>
                      <p>Time</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A | 21‐Mat‐A3</p>
                    </td>
                    <td>
                      <p>Structure and Characterization of Materials</p>
                    </td>
                    <td>
                      <p>August-19-2024</p>
                    </td>
                    <td>
                      <p>Mondays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A |21‐Mat‐A4</p>
                    </td>
                    <td>
                      <p>Deformation Behaviour and Properties of Materials</p>
                    </td>
                    <td>
                      <p>August-20-2024</p>
                    </td>
                    <td>
                      <p>Tuesdays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>B | 21‐Mat‐A5</p>
                    </td>
                    <td>
                      <p>Phase Transformations and Thermal Treatment</p>
                    </td>
                    <td>
                      <p>August-21-2024</p>
                    </td>
                    <td>
                      <p>Wednesdays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <caption id='P5'>CS Group Exams</caption>
              <table className='table table-striped table-hover'>
                <tbody>
                  <tr>
                    <td>
                      <p>Group | Code</p>
                    </td>
                    <td>
                      <p>Course</p>
                    </td>
                    <td>
                      <p>Dates</p>
                    </td>
                    <td>
                      <p>Days of the Week</p>
                    </td>
                    <td>
                      <p>Time</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>CS | 11-CS-1</p>
                    </td>
                    <td>
                      <p>Engineering Economics</p>
                    </td>
                    <td>
                      <p>August-22-2024</p>
                    </td>
                    <td>
                      <p>Thursdays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>CS | 11-CS-2</p>
                    </td>
                    <td>
                      <p>Engineering in Society - Health &amp; Safety</p>
                    </td>
                    <td>
                      <p>August-23-2024</p>
                    </td>
                    <td>
                      <p>Fridays</p>
                    </td>
                    <td>
                      <p>20:00 EST</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P6'>
        <div className='container'>
          <img src={appConfig.appUrl + '/images/pages/engineering/peng-road-map.jpg'} className='img-fluid' />

          <div className='row'>
            <h3>آزمون‌های تکنیکال مهندسی چیست؟</h3>

            <div className='col-12'>
              <p>متقاضیانی که مدرک کارشناسی مهندسی خود را در خارج از کانادا و آمریکا دریافت کرده&zwnj;اند، برای دریافت لایسنس مهندسی (P.Eng) ملزم به گذراندن یکی از دو برنامه آزمون&zwnj;های تکنیکال مهندسی هستند.</p>
              <ul>
                <li>Confirmatory Exam Program (CEP)</li>
                <li>Specific Exam Program (SEP)</li>
              </ul>

              <h4>Confirmatory Exam Program (CEP)</h4>
              <p>داوطلبانی که مدرک کارشناسی مهندسی خود را از طریق برنامه&zwnj;ای به نظر مشابه با برنامه مورد تایید CEAB دریافت کرده&zwnj;اند، معمولا چهار آزمون تکنیکال دریافت می&zwnj;کنند. هدف از آزمون&zwnj;ها این است که داوطلبان فرصت داشته باشند آمادگی علمی خود را معادل با فارغ&zwnj;التحصیلان برنامه&zwnj;های مورد تایید CEAB نشان دهند.</p>
              <p>داوطلبانی که CEP به آ&zwnj;ن&zwnj;ها اختصاص داده شده و حداقل 5 سال تجربه مهندسی از تاریخ اخذ مدرک کارشناسی خود به دست آورده&zwnj;اند، ممکن است درخواست آن&zwnj;ها به بخش ارزیابی تجربه کاری PEO برای بررسی ارجاع داده شود.</p>
              <p>این بخش می&zwnj;تواند تصمیم بگیرد که آیا آزمون&zwnj;های تکنیکال فرد متقاضی را می&zwnj;توان حذف کرد یا کاهش داد، در غیر اینصورت آزمون&zwnj;ها به قوت خود باقی هستند. (براساس تجربه به دست آمده،&zwnj;احتمال ویو شدن آزمون&zwnj;های تکنیکال به شدت پایین است.)</p>
              <ul>
                <li>داوطلبانی که به بخش ارزیابی تجربه کاری PEO ارجاع داده می&zwnj;شوند، باید اسناد و مدارک تجربه خود را در فرمت&zwnj;های مورد نیاز تا مهلت تعیین شده ارائه کنند.</li>
                <li>داوطلبانی که مدارک مورد نیاز را تا مهلت تعیین شده ارائه نکنند، فرصت ارزیابی تجربه خود را از دست می&zwnj;دهند و باید برنامه امتحانی خود را تا مهلت تعیین شده آغاز کنند.</li>
                <li>داوطلبانی که تا مهلت تعیین شده برنامه امتحانی خود را شروع نکنند، درخواست فعلی P.Eng آن&zwnj;ها لغو می&zwnj;شود.</li>
                <li>داوطلبانی که CEP به آن&zwnj;ها اختصاص داده شده، ممکن است برای بخشی از آزمون تعیین شده خود معافیت بگیرند، به شرطی که معیارهای عملکرد خوب (Good Performance Criteria) را برآورده کنند.</li>
              </ul>
              <p>داوطلبانی که در دو آزمون مردود شوند، برنامه امتحان Failed-to-Confirm (FTC) به آن&zwnj;ها اختصاص داده خواهد شد. برنامه امتحان FTC نوعی برنامه SEP محسوب می&zwnj;شود؛ بنابراین داوطلبان در صورت عملکرد خوب می&zwnj;توانند از معافیت&zwnj;هایی برخوردار شوند، ولی در صورت عدم موفقیت در دو امتحان، برنامه امتحانی سخت&zwnj;تری در انتظار آن&zwnj;ها خواهد بود.</p>

              <h4>Specific Exam Program (SEP)</h4>
              <p>اگر ارزیابی PEO نشان دهد که مدارک علمی فرد متقاضی پایین&zwnj;تر از استاندارد مورد قبول کانادا است، به او یک برنامه امتحان اختصاصی برای رفع نقاط ضعف شناسایی شده داده می&zwnj;شود. برنامه آزمون اختصاصی ممکن است شامل موارد زیر باشد:</p>
              <ul>
                <li>Basic Studies exams</li>
                <li>Discipline-specific exams</li>
                <li>Complementary Studies exams</li>
                <li>Thesis</li>
              </ul>
              <p>آزمون&zwnj;های پایه (Basic Studies exams) پیش&zwnj;نیاز هستند و باید ابتدا گذرانده شوند. پس از گذراندن موفقیت&zwnj;آمیز تمامی آزمون&zwnj;های پایه، PEO پرونده داوطلب را مجددا ارزیابی می&zwnj;کند و ممکن است برنامه امتحان اصلی را تغییر دهد و داوطلب را از گزینه&zwnj;های موجود برای گذراندن آزمون&zwnj;های باقی مانده مطلع نماید.</p>

              <h5>به صورت کلی، آزمون&zwnj;های تکنیکال شامل چهار آزمون است:</h5>
              <ul>
                <li>دو آزمون از گروه A در شاخه&zwnj;های مهندسی</li>
                <li>یک آزمون از گروه B در شاخه&zwnj;های مهندسی</li>
                <li>و یک آزمون از Complementary Studies (گروه آزمون CS)</li>
              </ul>
              <p>امتیاز قبولی برای تمامی آزمون&zwnj;های PEO برای با 50% است. زمانی که میانگین نمرات متقاضی در آزمون&zwnj;های تکنیکال برابر با 55% باشد، متقاضی این برنامه را به موفقیت به پایان رسانده است.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GreyBG mb-5' id='P7'>
        <div className='container'>
          <div className='row'>
            <h3>محدودیت&zwnj;های زمانی برای شرکت در آزمون&zwnj;های تکنیکال PEO:</h3>

            <div className='col-12'>
              <ul>
                <li>آزمون&zwnj;های تکنیکال PEO سالانه دو بار برگزار می&zwnj;شوند.</li>
                <li>داوطلبان باید در حداقل یک آزمون تکنیکال ظرف دو سال تحصیلی پس از دریافت برنامه امتحانی خود شرکت کنند.</li>
                <li>پس از شروع برنامه امتحانی، داوطلب باید هر سال تحصیلی در حداقل یک آزمون شرکت کند، در غیر این صورت پرونده او بسته می&zwnj;شود.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='FAQ'>
        <div className='container'>
          <div className='row'>
            <h3>سوالات متداول</h3>

            <div className='accordion p-0' id='FAQEngineering'>
              {/* Question & Answer */}
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
                    آیا تطابق نوع رشته با امتحانات تکنیکال انتخابی ما الزامی است؟
                  </button>
                </h2>
                <div id='Question1' className='accordion-collapse collapse show' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>خیر؛ شما می‌توانید امتحان مورد نظر را از رشته دلخواه خود انتخاب کنید. به طور کلی باید دو امتحان از گروه A، یک امتحان از گروه B و یک امتحان از مطالعات تکمیلی گروه CS انتخاب کنید.</p>
                  </div>
                </div>
              </div>

              {/* Question & Answer */}
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
                    آیا می‌توانم دروسی که بعد از ثبت‌نام انتخاب کرده‌ام را تغییر دهم؟
                  </button>
                </h2>
                <div id='Question2' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>داوطلبان می‌توانند قبل از ثبت‌نام دروس انتخابی خود را تغییر دهند. پس از ثبت‌نام، تغییرات امکان‌پذیر نیست و نوع امتحانات غیرقابل تغییر است.</div>
                </div>
              </div>

              {/* Question & Answer */}
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
                    چگونه برای امتحاناتی که در پرتال موجود نیستند ثبت‌نام کنم؟
                  </button>
                </h2>
                <div id='Question3' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>اگر امتحاناتی که داوطلبان قصد دارند در آن شرکت کنند، در پرتال لیست نشده‌ باشد، می‌توانند به apply@peo.on.ca ایمیل بزنند و این مسئله را اطلاع دهند؛ در این صورت ممکن است امکان ثبت نام در امتحان مورد نظر، طی دوره بعدی امکان پذیر باشد.</p>
                  </div>
                </div>
              </div>

              {/* Question & Answer */}
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
                    داوطلبان چند بار می‌توانند در یک امتحان تکنیکال مردود شوند؟
                  </button>
                </h2>
                <div id='Question4' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>
                      داوطلبان می‌توانند بی‌نهایت بار در امتحانات تکنیکال شرکت کنند تا زمانی که تعداد امتحانات تکنیکال لازم برای دریافت لایسنس مورد نظر را به حد نصاب مربوطه برسانند‌‌.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question & Answer */}
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
                    مرحله بعد از پاس کردن امتحانات تکنیکال چیست؟
                  </button>
                </h2>
                <div id='Question5' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>داوطلبان باید قسمت «Academics» را در پرتال درخواست مجوز، به عنوان "Complete" علامت‌گذاری کنند.</p>
                  </div>
                </div>
              </div>

              {/* Question & Answer */}
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
                    چگونه از نتایج امتحان مطلع شویم؟
                  </button>
                </h2>
                <div id='Question6' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>ایمیلی دریافت خواهید کرد که نتیجه هر امتحان را نشان می‌دهد.</p>
                  </div>
                </div>
              </div>

              {/* Question & Answer */}
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
                    چند بار در سال امتحانات برگزار می‌شود؟
                  </button>
                </h2>
                <div id='Question7' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <ul>
                      <li>امتحانات دو بار در سال برگزار می‌شوند.</li>
                      <li>ثبت‌نام برای جلسه بهار/تابستان در ژانویه آغاز می‌شود</li>
                      <li>ثبت‌نام برای جلسه پاییز/زمستان در جولای آغاز می‌شود</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Question & Answer */}
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
                    چگونه باید برای امتحانات تکنیکال آماده شوم؟
                  </button>
                </h2>
                <div id='Question8' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>به منظور آمادگی برای شرکت در آزمون مربوطه می‌توانید در کلاس‌ها و دوره‌های آموزشی شرکت کرده یا کتاب‌های آموزشی مرتبط با نوع رشته و امتحان موردنظر را مطالعه کنید. موسسه فناوران دوره‌های آمادگی ازمون‌های تکنیکال را به صورت دوره‌ای برگزار می‌کند.</p>
                  </div>
                </div>
              </div>

              {/* Question & Answer */}
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#Question9'
                    aria-expanded='false'
                    aria-controls='Question9'
                  >
                    آیا می‌توانم در آزمون تکنیکال خارج از کانادا شرکت کنم؟
                  </button>
                </h2>
                <div id='Question9' className='accordion-collapse collapse' data-bs-parent='#FAQEngineering'>
                  <div className='accordion-body'>
                    <p>بله؛ آزمون‌های تکنیکال به صورت آنلاین برگزار می‌شود. ازاین‌رو داوطلبان می‌توانند در صورت دسترسی به اینترنت پرسرعت و یک وبکم، در خارج از کانادا در آزمو‌ن‌های تکنیکال مورد نظر شرکت کنند.</p>
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
