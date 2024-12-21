import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import themeConfig from 'src/configs/themeConfig'
import Link from 'next/link'
import BASE_URL from 'src/api/BASE_URL'

import { Button } from '@mui/material'

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

  const buyMembership = async plan => {
    setIsLoading(true)

    try {
      const token = window.localStorage.getItem('accessToken')

      // Fetch the session ID from your backend
      const response = await fetch(`${BASE_URL}/student/membership/buy/${email}/${plan}`, {
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
      }
    } catch (err) {}
  }

  return (
    <div className='FNV-Membership' style={{ direction: 'rtl' }}>
      <section className='FNV-Header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-none d-md-block'></div>
            <div className='col-12 col-md-6'>
              <h1>
                با عضویت ویژه فناوران <br /> سریع‌تر به اهداف خود برسید.
              </h1>
              <p>
                پکیج‌های ویژه فناوران با هدف آماده‌سازی شما عزیزان جهت دریافت سرتیفیکیت و پیدا کردن هر چه سریع‌تر شغل
                مورد نظر شما در کانادا، ایجاد شده‌اند.
              </p>
              <Link href='#packages' className='FNV-Btn BtnOutline WhiteColor BtnLarge'>
                خرید عضویت VIP فناوران
              </Link>
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
                <img alt='image' src={'/img/membership/percent.png'} className='img-fluid w-75 rounded mb-4' />

                <div className='card-body p-0'>
                  <h3>تخفیف همیشگی دوره ها</h3>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='card'>
                <img alt='image' src={'/img/membership/monitor.png'} className='img-fluid w-75 rounded mb-4' />

                <div className='card-body p-0'>
                  <h3>استفاده از دوره های رایگان</h3>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='card'>
                <img alt='image' src={'/img/membership/file.png'} className='img-fluid w-75 rounded mb-4' />

                <div className='card-body p-0'>
                  <h3>دسترسی به مدارک و فرم ها</h3>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='card'>
                <img alt='image' src={'/img/membership/resume.png'} className='img-fluid w-75 rounded mb-4' />

                <div className='card-body p-0'>
                  <h3>مشاوره رزومه و کاریابی</h3>
                </div>
              </div>
            </div>

            <div class='col-12'>
              <p>
                با عضویت ویژه فناوران می‌توانید از تخفیف‌های ويژه برای تمام دوره‌ها، مشاوره تحصیلی رایگان، شرکت در کلاس
                رزومه‌نویسی و کاریابی فناوران به صورت کاملا رایگان، مهر و امضای تمامی مدارک مهندسی جهت ارائه به سازمان
                مهندسی و پنل منتورهای فناوران به صورت هفتگی بهره‌مند شوید.
              </p>
            </div>
          </div>

          <div id='packages' className='row'>
            <div className='col-12'>
              <h2>پلن های عضویت فناوران</h2>
            </div>

            <div className='col-12 col-md-4'>
              <div className='card FNV-Free'>
                <h3>عضویت ساده</h3>
                <h4>رایگان</h4>

                <ul>
                  <li>دسترسی به وبینارهای رایگان</li>
                  <li>مشاوره رایگان ۱۵ دقیقه‌ای خدمات نگارش سوابق کاری تکنسین‌ها</li>
                  <li>مشاوره تخصصی کاریابی (ساعتی ۱۵۰ دلار)</li>
                  <li>پرداخت اقساط ۳ ماهه</li>
                </ul>

                <Button disabled={email} className='FNV-Btn BtnOutline PrimaryColor BtnLarge'>
                  {email ? 'شما‌عضوهستید' : <Link href='/register'>ثبت‌نام</Link>}
                </Button>
              </div>
            </div>

            <div className='col-12 col-md-4'>
              <div className='card FNV-Gold'>
                <h3>عضویت طلایی</h3>
                <h4>C$80 / سالیانه</h4>

                <ul>
                  <li>۵٪ تخفیف دوره‌ها و پکیج‌ها تا سقف 60 دلار</li>
                  <li>دسترسی به دانلود سنتر فناوران</li>
                  <li>تایید مدارک تحصیلی (توسط P.Eng برای مهندسی)</li>
                  <li>دسترسی به پنل مشاوره‌ای فناوران</li>
                  <li>دسترسی به ویدیوهای رزومه‌نویسی و نتورکینگ</li>
                  <li>رینیو دوره‌های منقضی با ۵۰٪ هزینه به قیمت روز</li>
                  <li>دسترسی به مشاوره تخصصی کاریابی (ساعتی ۱۲۰ دلار)</li>
                  <li>پرداخت اقساط ۶ ماهه</li>
                  <li>مشاوره رایگان ۳۰ دقیقه‌ای خدمات نگارش سوابق کاری تکنسین‌ها</li>
                </ul>

                {email ? (
                  <Button
                    disabled={true}
                    // onClick={e => buyMembership('vip')}
                    className='FNV-Btn BtnOutline PrimaryColor BtnLarge'
                  >
                    <span>
                      {isLoading ? (
                        <div class='spinner-border' role='status'>
                          <span class='visually-hidden'>Loading...</span>
                        </div>
                      ) : (
                        'متاسفیم، این سرویس غیرفعال است'
                      )}
                    </span>
                  </Button>
                ) : (
                  <Link
                    href={'/login?returnUrl=/membership/checkout'}
                    className='FNV-Btn BtnOutline PrimaryColor BtnLarge'
                  >
                    ابتدا وارد شوید
                  </Link>
                )}
              </div>
            </div>

            <div className='col-12 col-md-4'>
              <div className='card FNV-Platinium'>
                <h3>عضویت پلاتینیوم</h3>

                <h4>C$180 / سالیانه</h4>

                <ul>
                  <li>۱۰٪ تخفیف دوره‌ها و پکیج‌ها تا سقف ۱۰۰ دلار</li>
                  <li>دسترسی به دانلود سنتر فناوران</li>
                  <li>تایید مدارک تحصیلی</li>
                  <li>تایید مدارک تحصیلی (توسط P.Eng برای مهندسی)</li>
                  <li>دسترسی به ویدیوهای رزومه‌نویسی و نتورکینگ</li>
                  <li>هفت روز تمدید رایگان دوره‌های منقضی</li>
                  <li>رینیو دوره‌های منقضی با ۴۰٪ هزینه به قیمت روز</li>
                  <li>۱۵ دقیقه مشاوره تخصصی کاریابی رایگان</li>
                  <li>دسترسی به مشاوره تخصصی کاریابی (ساعتی ۱۲۰ دلار)</li>
                  <li>پرداخت اقساط ۶ ماهه</li>
                  <li>مشاوره رایگان ۳۰ دقیقه‌ای خدمات نگارش سوابق کاری تکنسین‌ها</li>
                </ul>

                {email ? (
                  <Button
                    disabled={true}
                    // onClick={e => buyMembership('pro')}
                    className='FNV-Btn BtnOutline PrimaryColor BtnLarge'
                  >
                    <span>
                      {isLoading ? (
                        <div class='spinner-border' role='status'>
                          <span class='visually-hidden'>Loading...</span>
                        </div>
                      ) : (
                        'متاسفیم، این سرویس غیرفعال است'
                      )}
                    </span>
                  </Button>
                ) : (
                  <Link
                    href={'/login?returnUrl=/membership/checkout'}
                    className='FNV-Btn BtnOutline PrimaryColor BtnLarge'
                  >
                    ابتدا وارد شوید
                  </Link>
                )}
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
