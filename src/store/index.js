// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import chat from 'src/store/apps/chat'
import user from 'src/store/apps/user'
import profile from 'src/store/apps/profile'
import cart from 'src/store/apps/cart'
import course from 'src/store/apps/course'
import search from 'src/store/apps/search'
import email from 'src/store/apps/email'
import stripe from 'src/store/apps/stripe'
import partially from 'src/store/apps/partially'
import invoice from 'src/store/apps/invoice'
import calendar from 'src/store/apps/calendar'
import permissions from 'src/store/apps/permissions'
import coupon from 'src/store/apps/coupon'
import tests from 'src/store/apps/tests'
import referral from 'src/store/apps/referral'

export const store = configureStore({
  reducer: {
    user,
    cart,
    tests,
    profile,
    course,
    search,
    coupon,
    referral,
    stripe,
    partially,
    chat,
    email,
    invoice,
    calendar,
    permissions
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
