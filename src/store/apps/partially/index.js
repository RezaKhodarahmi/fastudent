import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import BASE_URL from 'src/api/BASE_URL'
import toast from 'react-hot-toast'

const initialState = {
  loading: false,
  error: null,
  paymentConfirmation: null
}

const partiallySlice = createSlice({
  name: 'partially',
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

export const { startTransaction, transactionSuccess, transactionError } = partiallySlice.actions

export const initiatePayment = params => async dispatch => {
  dispatch(startTransaction())

  try {
    const token = window.localStorage.getItem('accessToken')

    const response = await axios.post(`${BASE_URL}/student/transaction/partially/intent`, params, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })

    dispatch(transactionSuccess(response.data))
  } catch (error) {
    dispatch(transactionError(error.message))

    toast.error('Error! message:' + error.response?.data?.message)
  }
}

export default partiallySlice.reducer
