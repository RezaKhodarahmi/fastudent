import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import NoHeaderFooterLayout from '../../layouts/components/NoHeaderFooterLayout'; // Adjust the import path as needed

const Links = () => {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2024-10-11T18:30:00-04:00'); // October 11, 2024, 6:30 PM Toronto time (Eastern Time)

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    updateCountdown(); // Initial call
    const intervalId = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <NoHeaderFooterLayout>
      <section className='FNV-Links'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 FNV-Logo'>
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M136.797 93.8492L343.001 25.2939V110.056L136.797 178.612V93.8492Z" fill="#FFA600" />
                <path d="M90.0371 194.886L250.426 161.282V246.045L90.0371 279.626V194.886Z" fill="#223885" />
                <path d="M56.5898 289.324L136.795 283.981V374.086H56.5898V289.324Z" fill="#223885" />
              </svg>
            </div>

            <div className='col-12'>
              <h1>موسسه فنی مهندسی فناوران</h1>
            </div>

            <div className='col-12'>
              <p>
                تنها برگزارکننده دوره‌های آمادگی آزمون‌های تخصصی فنی، مهندسی و مدیریتی در کانادا و تنها نماینده فارسی زبان PMI.org در کانادا
              </p>
            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
              <h2>جشن بزرگ مهرگان</h2>
              <Link href="https://mehregan.vip/" target='_blank'>خرید بلیط مهرگان</Link>
            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
              <h3>زمان باقیمانده تا شروع جشن</h3>
              <div className='FNV-Counter'>
                <div className='col-3'>
                  <span>{timeRemaining.days}</span>
                  <span> روز </span>
                </div>

                <div className='col-3'>
                  <span>{timeRemaining.hours}</span>
                  <span> ساعت </span>
                </div>

                <div className='col-3'>
                  <span>{timeRemaining.minutes}</span>
                  <span> دقیقه </span>
                </div>

                <div className='col-3'>
                  <span>{timeRemaining.seconds}</span>
                  <span> ثانیه </span>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 FNV-Department'>
              <h2>دپارتمان مهندسی</h2>

              <Link href="/engineering/peng-technical-exams/fa" target='_blank'>آمادگی آزمون‌های تکنیکال مهندسی در کانادا</Link>

              <Link href="/courses/nppe-exam-preparation-test" target='_blank'>آمادگی آزمون NPPE</Link>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 FNV-Contact'>
              <h2>راه‌های ارتباطی</h2>

              <Link href="tel:+14168932110" target='_blank'>
                <span>تورنتو</span>
                <span>4168932110</span>
              </Link>

              <Link href="tel:+16723996600" target='_blank'>
                <span>ونکوور</span>
                <span>6723996600</span>
              </Link>

              <Link href="mailto:info@fanavaran.ca" target='_blank'>
                <span>ایمیل</span>
                <span>info@fanavaran.ca</span>
              </Link>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 FNV-Social'>
              <h2>شبکه‌های اجتماعی</h2>

              <Link href="https://t.me/fanavaran_ca" target='_blank'>کانال تلگرام فناوران</Link>
              <Link href="https://t.me/+D54o2CCh5Bo4NGI0" target='_blank'>گروه متخصصی مهندسی در کانادا</Link>
              <Link href="https://www.youtube.com/c/Fanavaran_ca" target='_blank'>یوتیوب</Link>
              <Link href="https://www.linkedin.com/company/fanavaran-ca/" target='_blank'>لینکدین</Link>
            </div>
          </div>
        </div>
      </section>
    </NoHeaderFooterLayout>
  )
}
Links.guestGuard = true

export default Links
