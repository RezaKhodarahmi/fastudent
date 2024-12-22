import React from 'react'

import Link from 'next/link'

// Logo
import Logo from 'src/views/logoWhite'

function PMP() {
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

                    <section className='WhyFanavaranPMP'>
                        <div className='container'>
                            <div className='AuthBadge'>
                                <img src='/images/pages/landings/pmp/PMIAuthorizedBadge.webp' className='img-fluid' />
                            </div>

                            <div className='row'>
                                <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                                    <h2>چرا PMP فقط با فناوران؟</h2>

                                    <p>فناوران تنها موسسه آموزشی مورد تایید PMI است که خدمات خود را به زبان فارسی ارائه می‌دهد.</p>

                                    <svg width="51" height="53" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.0069 28.7245C24.946 28.7245 23.8852 28.3337 23.0756 27.5241L2.24977 7.20076C0.602691 5.58159 0.574775 2.92951 2.16602 1.28243C3.78519 -0.364658 6.43727 -0.392574 8.08436 1.19868L25.9789 18.6745L43.8735 1.19868C45.5206 -0.420489 48.1727 -0.392573 49.7919 1.28243C51.411 2.92951 51.3831 5.5816 49.7081 7.20076L28.8823 27.5241C28.0727 28.3058 27.0119 28.7245 25.951 28.7245L26.0069 28.7245Z" fill="#F56322" />
                                        <path d="M25.5137 52.5692C24.4529 52.5692 23.392 52.1784 22.5824 51.3688L1.75661 31.0455C0.109527 29.4263 0.0816108 26.7742 1.67286 25.1272C3.29203 23.4801 5.94411 23.4522 7.59119 25.0434L25.4858 42.5192L43.3804 25.0434C45.0274 23.4242 47.6795 23.4522 49.2987 25.1272C50.9179 26.7742 50.8899 29.4263 49.2149 31.0455L28.3891 51.3688C27.5795 52.1505 26.5187 52.5692 25.4579 52.5692L25.5137 52.5692Z" fill="#F56322" />
                                    </svg>
                                </div>

                                <div className='col-12 col-md-6 d-flex justify-content-end'>
                                    <img src='/images/pages/landings/pmp/WhyFanavaranPMP.webp' className='img-fluid d-none d-md-block' />
                                    <img src='/images/pages/landings/pmp/WhyFanavaranPMPMob.webp' className='img-fluid d-block d-md-none w-100' />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='VerifyFanavaran'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 d-flex justify-content-between'>
                                    <span>برای مشاهده تاییدیه فناوران به عنوان آموزشگاه مورد تایید PMI، روی لینک زیر کلیک کنید.</span>
                                    <span>روش راستی آزمایی</span>
                                </div>

                                <div className='col-12 col-md-6'>
                                    <div className='card'>
                                        <img src='/images/pages/landings/pmp/verify/1.webp' className='img-fluid' />
                                    </div>
                                </div>

                                <div className='col-12 col-md-6'>
                                    <div className='card'>
                                        <img src='/images/pages/landings/pmp/verify/2.webp' className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='AuthorizedFanvaaran'>
                        <div className='container'>
                            <img src='/images/pages/landings/pmp/section6.webp' className='img-fluid w-100' />
                        </div>
                    </section>

                    <section className='BuyCourse'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <img src='/images/pages/landings/pmp/BuyCourse.webp' className='img-fluid w-100' />

                                    <div className='row'>
                                        <div className='col-12 col-md-8'>
                                            <img src='/images/pages/landings/pmp/BuyCoursePlan.webp' className='img-fluid d-none d-md-block' />

                                            <Link href="tel:+989121433158" className='d-block d-md-none'>
                                                <img src='/images/pages/landings/pmp/BuyCourseIran.webp' className='img-fluid w-100' />
                                            </Link>

                                            <Link href="tel:+19055052323" className='d-block d-md-none'>
                                                <img src='/images/pages/landings/pmp/BuyCourseCanada.webp' className='img-fluid w-100' />
                                            </Link>
                                        </div>

                                        <div className='col-12 col-md-6 d-none d-md-block'>
                                            <Link href="tel:+989121433158">تماس با واحد فروش ایران <span dir='ltr'>0912 143 3158</span></Link>
                                        </div>

                                        <div className='col-12 col-md-6 d-none d-md-block'>
                                            <Link href="tel:+19055052323">تماس با واحد فروش کانادا <span dir='ltr'>905 505 2323</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='OnlineClass'>
                        <div className='container'>
                            <img src='/images/pages/landings/pmp/section8.webp' className='img-fluid w-100' />
                        </div>
                    </section>

                    <section className='Register'>
                        <div className='container'>
                            <h2>
                                Get Ready for the <br />
                                CAPM® <span>/</span> PMP®
                            </h2>
                        </div>

                        <div className='col-12'>
                            <p>با دوره‌های آموزشی فناوران، برای آموزش‌های CAPM و PMP به بهترین شکل آماده شوید!</p>
                        </div>

                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <Link href="#">
                                        Apply now for CAPM

                                        <svg width="69" height="51" viewBox="0 0 69 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.4999 25.4824C29.4999 26.5432 29.1091 27.6041 28.2995 28.4136L7.97615 49.2395C6.35698 50.8866 3.7049 50.9145 2.05782 49.3232C0.410732 47.7041 0.382816 45.052 1.97407 43.4049L19.4499 25.5103L1.97406 7.61573C0.354897 5.96865 0.382813 3.31657 2.05781 1.6974C3.7049 0.0782317 6.35698 0.106151 7.97615 1.78115L28.2995 22.607C29.0811 23.4166 29.4999 24.4774 29.4999 25.5382L29.4999 25.4824Z" fill="white" />
                                            <path d="M68.2196 25.4824C68.2196 26.5432 67.8288 27.6041 67.0192 28.4136L46.6959 49.2395C45.0767 50.8866 42.4246 50.9145 40.7775 49.3232C39.1305 47.7041 39.1025 45.052 40.6938 43.4049L58.1696 25.5103L40.6938 7.61573C39.0746 5.96865 39.1025 3.31657 40.7775 1.6974C42.4246 0.0782317 45.0767 0.106151 46.6959 1.78115L67.0192 22.607C67.8009 23.4166 68.2196 24.4774 68.2196 25.5382L68.2196 25.4824Z" fill="white" />
                                        </svg>

                                    </Link>
                                </div>

                                <div className='col-12 col-md-6'>
                                    <Link href="#">
                                        Apply now for PMP

                                        <svg width="69" height="51" viewBox="0 0 69 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.4999 25.4824C29.4999 26.5432 29.1091 27.6041 28.2995 28.4136L7.97615 49.2395C6.35698 50.8866 3.7049 50.9145 2.05782 49.3232C0.410732 47.7041 0.382816 45.052 1.97407 43.4049L19.4499 25.5103L1.97406 7.61573C0.354897 5.96865 0.382813 3.31657 2.05781 1.6974C3.7049 0.0782317 6.35698 0.106151 7.97615 1.78115L28.2995 22.607C29.0811 23.4166 29.4999 24.4774 29.4999 25.5382L29.4999 25.4824Z" fill="white" />
                                            <path d="M68.2196 25.4824C68.2196 26.5432 67.8288 27.6041 67.0192 28.4136L46.6959 49.2395C45.0767 50.8866 42.4246 50.9145 40.7775 49.3232C39.1305 47.7041 39.1025 45.052 40.6938 43.4049L58.1696 25.5103L40.6938 7.61573C39.0746 5.96865 39.1025 3.31657 40.7775 1.6974C42.4246 0.0782317 45.0767 0.106151 46.6959 1.78115L67.0192 22.607C67.8009 23.4166 68.2196 24.4774 68.2196 25.5382L68.2196 25.4824Z" fill="white" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='ComparePmpCapm'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <img src='/images/pages/landings/pmp/section10.webp' className='img-fluid w-100' />

                                    <div className='row'>
                                        <h2>مقایسه دوره‌های PMP و CAPM</h2>

                                        <div className='col-12 col-md-7'>
                                            <img src='/images/pages/landings/pmp/compare.webp' className='img-fluid d-none d-md-block' />
                                            <img src='/images/pages/landings/pmp/CompareMob.webp' className='img-fluid d-block d-md-none w-100' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='OnlineClass'>
                        <div className='container'>
                            <img src='/images/pages/landings/pmp/section11.webp' className='img-fluid w-100' />
                        </div>
                    </section>
                </article>
            </main>
        </>
    )
}

PMP.guestGuard = true

export default PMP
