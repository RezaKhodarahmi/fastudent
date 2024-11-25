import React, { useEffect, useState } from 'react'

// ** Hook Imports
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

// ** Import Translation
import { useTranslation } from 'react-i18next'

// ** Import Course section
import WorkshopSection from 'src/views/swiper/workshopSection'

const NewWorkshops = () => {
    //Hooks
    const router = useRouter()
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const [courses, setCourses] = useState([])

    const courseData = useSelector(state => state.course)

    useEffect(() => {
        if (courseData?.data) {
            setCourses(courseData?.data?.data)
        }
    }, [courseData])

    const addToCart = id => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        const existInCart = cartItems.includes(id)
        router.push('/cart')

        if (existInCart) {
            window.alert('Item is already in cart!')
            router.push('/cart')
        } else {
            cartItems.push(id)
        }

        const updatedCartItems = [...cartItems]
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-2'>
                        <h3>{t('menu-workshops')}</h3>

                        <Link href="/courses">
                            {t('menu-all-courses')}

                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.5607 0.93934C12.1464 1.52513 12.1464 2.47487 11.5607 3.06066L3.62132 11L11.5607 18.9393C12.1464 19.5251 12.1464 20.4749 11.5607 21.0607C10.9749 21.6464 10.0251 21.6464 9.43934 21.0607L0.43934 12.0607C-0.146447 11.4749 -0.146447 10.5251 0.43934 9.93934L9.43934 0.93934C10.0251 0.353553 10.9749 0.353553 11.5607 0.93934Z" fill="#F0F3FB" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M11 11C11 10.1716 11.6716 9.5 12.5 9.5H20.5C21.3284 9.5 22 10.1716 22 11C22 11.8284 21.3284 12.5 20.5 12.5H12.5C11.6716 12.5 11 11.8284 11 11Z" fill="#F0F3FB" />
                            </svg>
                        </Link>
                    </div>

                    <div className='col-12 col-md-10'>
                        {/* Workshops */}
                        <WorkshopSection courseData={courseData} addToCart={addToCart} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewWorkshops