import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import BASE_URL from 'src/api/BASE_URL'
import toast from 'react-hot-toast'
const initialState = {
  loading: false,
  error: null,
  paymentConfirmation: null
}

const stripeSlice = createSlice({
  name: 'stripe',
  initialState,
  reducers: {
    startTransaction: state => {
      state.loading = true
      state.error = null
    },
    transactionSuccess: (state, action) => {
      state.loading = false
      state.paymentConfirmation = action.payload
    },
    transactionError: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { startTransaction, transactionSuccess, transactionError } = stripeSlice.actions

export const paymentResult = paymentIntentId => async dispatch => {
  dispatch(startTransaction())

  try {
    const token = window.localStorage.getItem('accessToken')
    const response = await axios.post(`${BASE_URL}/student/transaction/confirm-payment`, paymentIntentId, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
    toast.success('Payment was successfully')
    dispatch(transactionSuccess(response.data))
  } catch (error) {
    console.log(error.response?.data?.message)
    dispatch(transactionError(error.message))
    toast.error('Error! message:' + error.response?.data?.message)
  }
}
export default stripeSlice.reducer
