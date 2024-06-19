import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import themeConfig from 'src/configs/themeConfig'
import Link from 'next/link'
import BASE_URL from 'src/api/BASE_URL'

import { appConfig } from 'src/configs/appConfig'

const stripePromise = loadStripe(themeConfig.stripePublicKey)

const StripeCheckoutButton = () => {
  //set state

  const [email, setEmail] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const userEmail = window.localStorage.getItem('userData')
    const email = JSON.parse(userEmail)
    setEmail(email)
  }, [])

  const buyMembership = async () => {
    setIsLoading(true)

    try {
      const token = window.localStorage.getItem('accessToken')

      // Fetch the session ID from your backend
      const response = await fetch(`${BASE_URL}/student/membership/buy/${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      const { sessionId } = await response.json()

      const stripe = await stripePromise

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId
      })

      if (error) {
        console.error(error)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='FNV-Membership' style={{ direction: 'rtl' }}>
      <section className='FNV-Header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-none d-md-block'></div>
            <div className='col-12 col-md-6'>
              <h1>با عضویت ویژه فناوران <br /> سریع‌تر به اهداف خود برسید.</h1>
              <p>
              پکیج‌های ویژه فناوران با هدف آماده‌سازی شما عزیزان جهت دریافت سرتیفیکیت و پیدا کردن هر چه سریع‌تر شغل مورد نظر شما در کانادا، ایجاد شده‌اند.
              </p>
              <Link href="3" className="FNV-Btn BtnOutline WhiteColor BtnLarge">خرید عضویت VIP فناوران</Link>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Membership-Page' style={{ direction: 'rtl' }}>
        <div className='container'>
          <h2>مزایای خرید عضویت VIP فناوران</h2>

          <div className='row'>
            <div className='col-6 col-md-3'>
              <div className='card'>
                <img src={'/img/membership/percent.png'} className='img-fluid w-75 rounded mb-4' />

                <div className='card-body'>
                  <h3>تخفیف همیشگی دوره ها</h3>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='card'>
                <img src={'/img/membership/monitor.png'} className='img-fluid w-75 rounded mb-4' />

                <div className='card-body'>
                  <h3>تخفیف همیشگی دوره ها</h3>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='card'>
                <img src={'/img/membership/file.png'} className='img-fluid w-75 rounded mb-4' />

                <div className='card-body'>
                  <h3>تخفیف همیشگی دوره ها</h3>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='card'>
                <img src={'/img/membership/resume.png'} className='img-fluid w-75 rounded mb-4' />

                <div className='card-body'>
                  <h3>تخفیف همیشگی دوره ها</h3>
                </div>
              </div>
            </div>

            <div class='col-12'>
              <p>
              با عضویت ویژه فناوران می‌توانید از تخفیف‌های ويژه برای تمام دوره‌ها، مشاوره تحصیلی رایگان، شرکت در کلاس رزومه‌نویسی و کاریابی فناوران به صورت کاملا رایگان، مهر و امضای تمامی مدارک مهندسی جهت ارائه به سازمان مهندسی و پنل منتورهای فناوران به صورت هفتگی بهره‌مند شوید.
              </p>
            </div>
          </div>

          <div className='row'> 
            <div className='col-12'>
              <h2>پلن های عضویت فناوران</h2>
            </div>

            <div className='col-12 col-md-4'>
              <div className='card FNV-Free'>
                <h3>عضویت ساده</h3>
                <h4>رایگان</h4>

                <ul>
                  <li>خدمات وبینارهای رایگان</li>
                  <li>تخفیف تا ۵۰ دلار بسته به دوره و هزینه دوره</li>
                  <li>مشاوره رایگان ۱۵ دقیقه‌ای جهت خریداری خدمات نگارش سوابق کاری</li>
                  <li>اولویت رسیدگی به مشکلات مربوط به کلاس (متوسط)</li>
                  <li>مشاوره تخصصی کاریابی و مشاوره (ساعتی ۱۵۰ دلار)</li>
                  <li>پرداخت اقساط ۳ ماهه</li>
                </ul>

                <Link className='FNV-Btn BtnOutline PrimaryColor BtnLarge' href='/register'>
                  ثبت‌نام
                </Link>
              </div>
            </div>

            <div className='col-12 col-md-4'>
              <div className='card FNV-Gold'>
                <h3>عضویت طلایی</h3>
                <h4>C$80 / سالیانه</h4>

                <ul>
                  <li>۵٪ تخفیف برای تمامی دوره‌های آنلاین، رکورد شده و پکیج‌های فناوران تا سقف 80 دلار </li>
                  <li>دسترسی به دانلود سنتر فناوران</li>
                  <li>تایید مدارک تحصیلی (توسط P.Eng برای مهندسی)</li>
                  <li>دسترسی به پنل مشاوره‌ای فناوران</li>
                  <li>اولویت رسیدگی به مشکلات مربوط به کلاس (بالا)</li>
                  <li>دسترسی به ویدیوهای رزومه‌نویسی و نتورکینگ</li>
                  <li>رینیو کردن دوره‌هایی که مهلت استفاده اون‌ها به پایان رسیده</li>
                  <li>امکان دریافت مشاوره تخصصی کاریابی و مشاوره (ساعتی ۱۲۰ دلار)</li>
                  <li>امکان پرداخت اقساط ۶ ماهه</li>
                  <li>مشاوره رایگان ۱۵ دقیقه‌ای جهت خریداری خدمات نگارش سوابق کاری</li>
                </ul>

                {email ? (
                  <button
                    disabled={isLoading}
                    id='submit'
                    onClick={buyMembership}
                    className='FNV-Btn BtnOutline PrimaryColor BtnLarge'
                  >
                    <span id='button-text'>
                      {isLoading ? (
                        <div class='spinner-border' role='status'>
                          <span class='visually-hidden'>Loading...</span>
                        </div>
                      ) : (
                        'Pay now'
                      )}
                    </span>
                  </button>
                ) : (
                  <Link className='FNV-Btn BtnOutline PrimaryColor BtnLarge' href='/login/?returnUrl=membership/checkout'>
                    ثبت‌نام
                  </Link>
                )}
              </div>
            </div>

            <div className='col-12 col-md-4'>
              <div className='card FNV-Platinium'>
                <h3>عضویت پلاتینیوم</h3>

                <h4>C$180 / سالیانه</h4>

                <ul>
                  <li>۱۰٪ تخفیف برای تمامی دوره‌های آنلاین، رکورد شده و پکیج‌های فناوران تا سقف 180 دلار</li>
                  <li>دسترسی به دانلود سنتر فناوران</li>
                  <li>تایید مدارک تحصیلی</li>
                  <li>دسترسی به پنل مشاوره‌ای فناوران</li>
                  <li>اولویت رسیدگی به مشکلات مربوط به کلاس (Top priority)</li>
                  <li>دسترسی به ویدیوهای رزومه‌نویسی و نتورکینگ (مهندس امانی)</li>
                  <li>دسترسی به ویدیوهای آمادگی اینترویو</li>
                  <li>تمدید مدت زمان دسترسی به دوره‌هایی که مهلت استفاده اون‌ها به پایان رسیده به مدت ۷ روز</li>
                  <li>امکان رینیو کردن دوره‌هایی که مهلت استفاده اون‌ها به پایان رسیده</li>
                  <li>مکان دریافت مشاوره تخصصی کاریابی و مشاوره (15 دقیقه رایگان- بیشتر از اون، ساعتی ۱۲۰ دلار)</li>
                  <li>امکان پرداخت اقساط ۶ ماهه</li>
                  <li>دریافت مشاوره رایگان 30 دقیقه‌ای جهت خریداری خدمات نگارش سوابق کاری</li>
                  <li>دریافت مشاوره با مدرس پیش از خرید دوره جهت پرسش و پاسخ اولیه</li>
                </ul>

                <Link className='FNV-Btn BtnOutline PrimaryColor BtnLarge' href='/login/?returnUrl=membership/checkout'>
                  ثبت‌نام
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

StripeCheckoutButton.guestGuard = true

export default StripeCheckoutButton
