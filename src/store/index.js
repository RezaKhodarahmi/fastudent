// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducer
import user from 'src/store/apps/user'
import profile from 'src/store/apps/profile'
import course from 'src/store/apps/course'
import search from 'src/store/apps/search'
import stripe from 'src/store/apps/stripe'
import partially from 'src/store/apps/partially'
import coupon from 'src/store/apps/coupon'
import tests from 'src/store/apps/tests'
import referral from 'src/store/apps/referral'
import cart from 'src/store/apps/cart'
import cartItem from 'src/store/apps/cartItem'
import category from 'src/store/apps/category'
import blog from 'src/store/apps/blog'
import webinar from 'src/store/apps/webinar'
import appointment from 'src/store/apps/appointment'
import blogCategory from 'src/store/apps/blog-category'
import reqCourseDemo from 'src/store/apps/demo-request'

export const store = configureStore({
  reducer: {
    user,
    tests,
    profile,
    course,
    category,
    search,
    coupon,
    referral,
    stripe,
    partially,
    blog,
    webinar,
    blogCategory,
    cart,
    cartItem,
    appointment,
    reqCourseDemo
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
