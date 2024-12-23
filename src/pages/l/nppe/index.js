import React from 'react'

import Link from 'next/link'

// Logo
import Logo from 'src/views/logoWhite'

function NPPE() {
    return (
        <>
            <main className='FNV-Landings Electrician-Landings'>
                <header>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 d-flex justify-content-center'>
                                <Logo />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12 col-md-5'>
                                <h1>دوره 309A</h1>
                                <p>دوره برق فناوران، تنها دوره مورد تایید اسکیلد ترید انتاریو به زبان فارسی در کانادا</p>
                                <Link href="#" className='FNV-Badge SecondaryColor Large mb-4'>ثبت نام دوره جدید</Link>
                            </div>
                        </div>
                    </div>
                </header>

                <article>
                    <section className='Whats309'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-12 text-center'>
                                    <img src='/images/pages/landings/309/redseal.webp' className='img-fluid' />
                                </div>

                                <div className='col-12'>
                                    <h3>چرا باید ردسیل برق بگیرید و چه موانعی وجود دارد؟</h3>
                                    <p>برای فعالیت به عنوان برقکار در کانادا، باید لایسنس برقکاری (لایسنس نشنال Redseal یا استانی با مهر تایید Redseal) بگیرید. پیش‌نیازهای دریافت این لایسنس در اکثر استان‌ها ۹۰۰۰ ساعت (معادل ۵ سال) سابقه کار و پاس کردن آزمون Redseal است. بسیاری از نیوکامرها و ایرانیان در پاس کردن این آزمون با چالش مواجه می‌شوند.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='Why309'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <p>
                                        در صورت داشتن سابقه کار برق، دوره فناوران کمک می‌کند تا مهارتهای لازم در زمینه کدبوک را آموزش ببینید و با تدریس فارسی و ترمینولوژی انگلیسی، واژگان تخصصی و اصطلاحات درست این پوزیشن شغلی را بیاموزید.
                                    </p>

                                    <Link href="#" className='FNV-Badge SecondaryColor Large mb-4'>ثبت نام دوره جدید</Link>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <img src='/images/pages/landings/309/309Certificate.webp' className='img-fluid w-100' />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='WhyFanavaran309'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-md-6 d-flex flex-column align-items-start'>
                                    <h2>جلسه اول رایگان است</h2>

                                    <p>
                                        بعد از شرکت در جلسه اول برای ثبت‌نام در دوره تصمیم بگیرید
                                        <br />
                                        <mark>برای شرکت در جلسه اول با شماره ذیل تماس بگیرید</mark>
                                    </p>

                                    <Link href="tel:+19055052323" className='FNV-Badge SecondaryColor Large mb-4'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.3712 15.359C19.206 15.168 19.0017 15.0147 18.772 14.9097C18.5423 14.8046 18.2927 14.7503 18.0401 14.7503C17.7875 14.7503 17.5379 14.8046 17.3082 14.9097C17.0786 15.0147 16.8742 15.168 16.709 15.359C16.087 15.9734 15.4651 16.5953 14.8507 17.2249C14.793 17.3034 14.7071 17.3568 14.6111 17.3737C14.515 17.3907 14.4162 17.37 14.335 17.3159C13.933 17.0959 13.5007 16.9215 13.1138 16.6788C11.3388 15.5284 9.76538 14.0933 8.45685 12.4314C7.77365 11.6259 7.20917 10.7268 6.78061 9.76152C6.73401 9.68148 6.71831 9.58715 6.73647 9.49633C6.75464 9.40551 6.80542 9.32448 6.87922 9.26852C7.50116 8.66175 8.10793 8.04739 8.7223 7.42545C8.9228 7.25889 9.08416 7.05022 9.1949 6.81426C9.30565 6.5783 9.36306 6.32086 9.36306 6.06021C9.36306 5.79955 9.30565 5.5421 9.1949 5.30614C9.08416 5.07018 8.9228 4.8615 8.7223 4.69495L7.25845 3.23111C6.75786 2.73052 6.25727 2.22234 5.74151 1.71417C5.57496 1.52532 5.37013 1.37407 5.14063 1.27047C4.91112 1.16687 4.6622 1.11328 4.4104 1.11328C4.15859 1.11328 3.90967 1.16687 3.68017 1.27047C3.45066 1.37407 3.24583 1.52532 3.07928 1.71417C2.44975 2.32853 1.85056 2.96563 1.20586 3.57241C0.638262 4.10773 0.298732 4.84115 0.257781 5.62028C0.20375 6.89808 0.431629 8.17212 0.925238 9.35197C1.87126 11.8046 3.23376 14.0755 4.9527 16.0644C7.21516 18.7812 10.0311 20.9843 13.2124 22.5266C14.6262 23.2669 16.1732 23.7181 17.7633 23.8539C18.2959 23.9138 18.8351 23.8459 19.3363 23.656C19.8375 23.4661 20.2863 23.1595 20.6454 22.7617C21.1764 22.1625 21.7756 21.6164 22.3444 21.0476C22.5411 20.8802 22.6991 20.6722 22.8075 20.4377C22.9158 20.2033 22.972 19.9481 22.972 19.6899C22.972 19.4316 22.9158 19.1765 22.8075 18.9421C22.6991 18.7076 22.5411 18.4996 22.3444 18.3322C21.3635 17.3412 20.3724 16.3501 19.3712 15.359Z" fill="white" />
                                            <path d="M23.3077 11.0297C21.3328 6.41652 17.6461 2.74886 13.0228 0.797902C12.8366 0.728395 12.6306 0.734735 12.449 0.815586C12.2675 0.896437 12.1249 1.04532 12.052 1.23021C12.0123 1.32273 11.9914 1.42224 11.9905 1.52292C11.9896 1.62361 12.0088 1.72346 12.0469 1.81666C12.085 1.90985 12.1413 1.99451 12.2125 2.06571C12.2837 2.13692 12.3684 2.19325 12.4616 2.2314C16.7233 4.03188 20.1215 7.41377 21.9424 11.6668C22.0239 11.8471 22.1725 11.9885 22.3567 12.0608C22.541 12.1331 22.7461 12.1305 22.9284 12.0536C23.0218 12.0127 23.106 11.9535 23.1759 11.8793C23.2459 11.8052 23.3002 11.7178 23.3356 11.6222C23.371 11.5266 23.3868 11.4249 23.382 11.3231C23.3772 11.2213 23.3519 11.1215 23.3077 11.0297Z" fill="white" />
                                            <path d="M12.0663 6.34988C14.6496 7.43797 16.7104 9.48517 17.8156 12.0612C17.8742 12.1882 17.9669 12.2966 18.0834 12.3742C18.1999 12.4519 18.3356 12.4958 18.4754 12.5011C18.5778 12.5003 18.6788 12.477 18.7712 12.4328C18.9456 12.3474 19.0806 12.1982 19.1484 12.0162C19.2161 11.8342 19.2114 11.6331 19.1353 11.4544C17.8826 8.52978 15.5443 6.2051 12.6124 4.96948C12.4319 4.90539 12.2338 4.912 12.0579 4.98797C11.882 5.06395 11.7414 5.20365 11.6644 5.37904C11.593 5.56145 11.5951 5.76438 11.67 5.94534C11.7449 6.1263 11.887 6.27127 12.0663 6.34988Z" fill="white" />
                                        </svg>

                                        905 505 2323
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='WhyFanavaran309-2'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 d-flex flex-column align-items-start'>
                                    <h2>چرا دوره برق فناوران؟</h2>

                                    <ul>
                                        <li>مورد تایید Skilled Trade of Ontario</li>
                                        <li>طراحی شده برای قبولی در آزمون مطابق با آخرین تغییرات کدبوک</li>
                                        <li>اساتید مجرب لایسنس دار و Master با سابقه چندین ساله به عنوان تکنسین برق در کانادا</li>
                                        <li>مقرون&zwnj;به&zwnj;صرفه در مقایسه با دوره&zwnj;های مشابه</li>
                                        <li>پرداخت به صورت اقساط</li>
                                        <li>امکان دسترسی به ویدوهای رکورد شده دوره&zwnj;ها به مدت ۸ ماه</li>
                                        <li>تدریس به زبان فارسی و ترمینولوژی انگلیسی برای یادگیری واژگان و اصطلاحات درست برقکاری در کانادا</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='FanvaranStudents'>
                        <div className='container p-0'>
                            <div className='row'>
                                <img src='/images/pages/landings/309/309Students.webp' />
                            </div>
                        </div>
                    </section>

                    <section className='FanvaranText1'>
                        <div className='container'>
                            <div className='row'>
                                <h2>چرا سرتیفیکیت فناوران؟</h2>
                                <p>متقاضیان لایسنس برق در <mark>استان انتاریو</mark> باید ۶ ماه سابقه کار کانادایی ارائه دهند. اگر ندارند، باید یک دوره اجباری CSA به قیمت +600 دلار ثبت‌نام کنند.</p>
                            </div>
                        </div>
                    </section>

                    <section className='FanvaranText2'>
                        <div className='container'>
                            <div className='row'>
                                <p>با دریافت <mark>سرتیفیکیت پایان دوره فناوران</mark>، سابقه کار کانادایی یا دوره CSA را حذف می‌کنید.</p>
                            </div>
                        </div>
                    </section>

                    <section className='FanvaranClasses'>
                        <div className='container p-0'>
                            <div className='row'>
                                <img src='/images/pages/landings/309/Classes.webp' className='img-fluid w-100 d-none d-md-block' />

                                <img src='/images/pages/landings/309/Classes-mob.webp' className='img-fluid w-100 d-block d-md-none' />
                            </div>
                        </div>
                    </section>

                    <section className='FanvaranText3'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-md-4'>
                                    <p>آیا می‌دانستید که دوره برق فناوران، تنها دوره فارسی زبان در کانادا است که تکنیک‌های تست‌زنی را به شما آموزش می‌دهد؟</p>
                                    <Link href="#" className='FNV-Badge SecondaryColor Large mb-4'>ثبت نام کنید</Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='FanvaranText4'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-md-4'>
                                    <p>
                                        نگران تایید سابقه کار خود هستید؟ <br />
                                        با خدمات نگارش سوابق کاری تکنسینی، متخصصان فناوران تا رسیدن به تاییدیه آزمون در کنار شما هستند.
                                    </p>
                                    <Link href="#" className='FNV-Badge SecondaryColor Large mb-4'>خرید خدمات</Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='FanvaranText5'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-md-4'>
                                    <p>
                                        با خرید پکیج ویژه برق، هم تاییدیه آزمون بگیرید، هم برای آزمون آماده شوید و هم سیو سود داشته باشید!
                                    </p>
                                    <Link href="#" className='FNV-Badge SecondaryColor Large mb-4'>خرید پکیج</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </main>
        </>
    )
}

NPPE.guestGuard = true

export default NPPE
