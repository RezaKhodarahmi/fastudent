import React, { useEffect } from 'react'
import feather from 'feather-icons'

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
              <h1>آزمون‌های تکنیکال مهندسی در کانادا</h1>
              <h2 className='text-center'>(برای دریافت لایسنس P.Eng)</h2>
              <p className='mt-4'>بسیاری از مهندسان متقاضی لایسنس مهندسی در کانادا (به ویژه در استان&zwnj;های انتاریو و بریتیش کلمبیا) ملزم به عبور از سد آزمون&zwnj;های تکنیکال هستند. موسسه فناوران دوره&zwnj;های آمادگی آزمون&zwnj;های تکنیکال مهندسی را با همکاری اساتید فارسی زبان دانشگاه یورک برگزار می&zwnj;کند. این دوره&zwnj;ها به زبان فارسی و به مدت ۱۶ ساعت برگزار می&zwnj;شوند و با بررسی نمونه سوالات قبلی، سعی می&zwnj;شود تا متقاضیان بتوانند آزمون&zwnj;های مورد نظر خود را پاس کنند.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG'>
        <div className='container pt-0'>
          <div className='row pt-0'>
            <div className='col-12'>
              <caption>Mechanical Engineering</caption>
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
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
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
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
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
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
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
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>

              <caption>Civil Engineering</caption>
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
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
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
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
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
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
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
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <caption>Electrical Engineering</caption>
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
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
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
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
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
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <caption>CS Group Exams</caption>
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
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
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
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG'>
        <div className='container'>
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

      <section className='FNV-SinglePage FNV-GreyBG'>
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
    </>
  )
}

Index.guestGuard = true

export default Index
