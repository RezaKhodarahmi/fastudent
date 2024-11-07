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
    if (lng === 'fa') {
      router.push('/refund-policy/fa')
    }
  }, [])

  return (
    <>
      <section className='FNV-Single' style={{ direction: 'ltr'}}>
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
                          <Link href='#P1'>Cancellation and Refund Conditions</Link>
                        </li>
                      </ol>
                    </div>
                  </aside>

                  <main className='col-12 col-md-9'>
                    <h2>Cancellation and Refund Conditions</h2>

                    <p>Cancellation requests for online classes are only possible before the second session. After the second session has taken place, no refunds will be issued under any circumstances.</p>
                    <p>Please make sure to review your schedule and commitment to the course before the second session to ensure it aligns with your expectations.</p>
                    <p>If you decide to cancel before the second session, the refund process will be managed through Klarna, in accordance with their policies and timelines.</p>

                    <div className='row FNV-Single-Guide' id='P1'>
                        <h3>Summary</h3>
                        <ul>
                            <li><strong>Refund Eligibility:</strong> Only possible before the second session.</li>
                            <li><strong>No Refunds:</strong> No refunds are available after the second session.</li>
                            <li><strong>Refund Processing:</strong> Managed through Klarna’s platform if cancellation is eligible.</li>
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