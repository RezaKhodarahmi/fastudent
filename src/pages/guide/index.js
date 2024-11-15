import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

function Guide() {
  const { t } = useTranslation();
  const playerRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    // Load the YouTube Iframe API script if not already loaded
    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.onload = () => {
        // When the API is ready, initialize the YouTube player
        window.onYouTubeIframeAPIReady = () => {
          playerRef.current = new window.YT.Player('youtube-player', {
            videoId: 'nmsTJZ2LmbA', // Updated video ID
            events: {
              onReady: () => {
                setPlayerReady(true);
              },
            },
          });
        };
      };
      document.body.appendChild(script);
    } else {
      // Initialize the player immediately if the API is already loaded
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: 'nmsTJZ2LmbA', // Updated video ID
        events: {
          onReady: () => {
            setPlayerReady(true);
          },
        },
      });
    }
  }, []);

  // Function to jump to a specific time in the video
  const seekToTime = (seconds) => {
    if (playerReady && playerRef.current && typeof playerRef.current.seekTo === 'function') {
      playerRef.current.seekTo(seconds, true);
    }
  };

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
              <h1 style={{ color: "#223885" }}>{t('footer-three-guide')}</h1>
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
                      <span>فهرست مطالب:</span>
                      <ol>
                        <li>
                          <Link href='#P1'>آموزش استفاده از داشبورد و سایت فناوران</Link>
                        </li>
                        <li><Link href="javascript:void(0);" onClick={() => seekToTime(4)}>آموزش ثبت نام در سایت فناوران</Link></li>
                        <li><Link href="javascript:void(0);" onClick={() => seekToTime(72)}>چطور دوره های فناوران را قسطی خریداری کنیم؟</Link></li>
                        <li><Link href="javascript:void(0);" onClick={() => seekToTime(130)}>چطور دوره های فناوران را بخریم و یا ثبت نام کنیم؟</Link></li>
                        <li><Link href="javascript:void(0);" onClick={() => seekToTime(178)}>چطور رمزعبور خود را بازیابی کنیم؟</Link></li>
                        <li><Link href="javascript:void(0);" onClick={() => seekToTime(237)}>چطور می توانیم فاکتور خرید را دریافت کنیم؟</Link></li>
                        <li><Link href="javascript:void(0);" onClick={() => seekToTime(263)}>چطور اسم و فامیلی خود را در پروفایل ویرایش کنیم؟</Link></li>
                        <li><Link href="javascript:void(0);" onClick={() => seekToTime(295)}>چگونه سرتیفیکیت دوره را دریافت کنیم؟</Link></li>
                        <li><Link href="javascript:void(0);" onClick={() => seekToTime(358)}>چگونه وارد کلاس آنلاین شویم؟</Link></li>
                        <li><Link href="javascript:void(0);" onClick={() => seekToTime(478)}>چگونه به متریال های کلاس دسترسی پیدا کنیم؟</Link></li>
                      </ol>
                    </div>
                  </aside>

                  <main className='col-12 col-md-9'>
                    <div className='row FNV-Single-Guide' id='P1'>
                      <h3>آموزش استفاده از داشبورد و سایت فناوران</h3>
                      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                        <iframe
                          id="youtube-player"
                          src="https://www.youtube.com/embed/nmsTJZ2LmbA?enablejsapi=1&rel=0&si=Ih_UqGT8r1Wxf8Q0"
                          title="آموزش استفاده از داشبورد و سایت فناوران"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        ></iframe>
                      </div>

                      {/* Buttons to Jump to Specific Times */}
                      <ul className='list-group list-group-flush mt-3 p-0'>
                        <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary BtnMedium' onClick={() => seekToTime(4)}>آموزش ثبت نام در سایت فناوران</button></li>
                        <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary BtnMedium' onClick={() => seekToTime(65)}>چطور دوره های فناوران را قسطی خریداری کنیم؟</button></li>
                        <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary BtnMedium' onClick={() => seekToTime(126)}>چطور دوره های فناوران را بخریم و یا ثبت نام کنیم؟</button></li>
                        <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary BtnMedium' onClick={() => seekToTime(174)}>چطور رمزعبور خود را بازیابی کنیم؟</button></li>
                        <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary BtnMedium' onClick={() => seekToTime(230)}>چطور می توانیم فاکتور خرید را دریافت کنیم؟</button></li>
                        <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary BtnMedium' onClick={() => seekToTime(257)}>چطور اسم و فامیلی خود را در پروفایل ویرایش کنیم؟</button></li>
                        <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary BtnMedium' onClick={() => seekToTime(288)}>چگونه سرتیفیکیت دوره را دریافت کنیم؟</button></li>
                        <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary BtnMedium' onClick={() => seekToTime(350)}>چگونه وارد کلاس آنلاین شویم؟</button></li>
                        <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary BtnMedium' onClick={() => seekToTime(471)}>چگونه به متریال های کلاس دسترسی پیدا کنیم؟</button></li>
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