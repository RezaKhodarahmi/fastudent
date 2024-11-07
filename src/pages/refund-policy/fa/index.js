import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router'
import Link from 'next/link';

function Guide() {
  //Hooks
  const router = useRouter()
  const { t } = useTranslation();

  // Check website lang
  useEffect(() => {
    const lng = window.localStorage.getItem('i18nextLng')
    if (lng === 'en') {
      router.push('/refund-policy')
    }
  }, [])

  return (
    <>
      <section className='FNV-Single'>
        <header className='FNV-Single-Header' 
          style={{
            backgroundImage: `url("/images/pages/header-bg.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px'
          }}
        >
          <div className='container'>
            <div className='row'>
              <h1 style={{ color: "#223885"}}>{t('footer-three-refund-privacy')}</h1>
            </div>
          </div>
        </header>

        <main>
          <article>
            <section className='FNV-WhiteBg'>
              <div className='container'>
                <div className='row'>
                  <aside className='col-12 col-md-3'>
                    <div className='card'>
                      <span>{t('single-content-table')}</span>
                      <ol>
                        <li>
                          <Link href='#P1'>شرایط کنسلی و بازپرداخت</Link>
                        </li>
                      </ol>
                    </div>
                  </aside>

                  <main className='col-12 col-md-9'>
                    <h2>شرایط کنسلی و بازپرداخت</h2>
                    <p>درخواست کنسلی کلاس‌های آنلاین فقط تا قبل از جلسه دوم امکان‌پذیر می‌باشد. پس از برگزاری جلسه دوم، امکان استرداد وجه پرداختی به هیچ وجه وجود نخواهد داشت.</p>
                    <p>لطفاً قبل از شرکت در جلسه دوم از برنامه و تعهد خود به دوره اطمینان حاصل کنید تا با انتظارات شما همخوانی داشته باشد.</p>
                    <p>در صورتی که تصمیم به کنسلی قبل از جلسه دوم گرفتید، فرایند بازپرداخت از طریق کلارنا و بر اساس سیاست‌ها و زمان‌بندی این پلتفرم انجام خواهد شد.</p>
                    
                    <div className='row FNV-Single-Guide' id='P1'>
                      <h3>خلاصه</h3>
                      <ul>
                          <li><strong>شرایط بازپرداخت:</strong> فقط قبل از جلسه دوم امکان‌پذیر است.</li>
                          <li><strong>عدم بازپرداخت:</strong> پس از جلسه دوم، هیچ‌گونه بازپرداختی انجام نمی‌شود.</li>
                          <li><strong>فرآیند بازپرداخت:</strong> در صورت واجد شرایط بودن کنسلی، بازپرداخت از طریق پلتفرم کلارنا انجام خواهد شد.</li>
                      </ul>
                    </div>
                  </main>
                </div>
              </div>
            </section>
          </article>
        </main>
      </section>
    </>
  );
}

// Add guestGuard property
Guide.guestGuard = true;

export default Guide;