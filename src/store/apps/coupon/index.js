import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import BASE_URL from 'src/api/BASE_URL'
import toast from 'react-hot-toast'

export const initialState = {
  data: [],
  loading: false,
  error: null
}

const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    getDataStart(state) {
      state.loading = true
      state.error = null
    },
    getDataSuccess(state, { payload }) {
      state.loading = false
      state.data = payload
    },
    getDataFailure(state, { payload }) {
      state.loading = false
      state.error = payload
    }
  }
})

export const { getDataStart, getDataSuccess, getDataFailure } = couponSlice.actions

export const verifyCouponCode = params => async dispatch => {
  dispatch(getDataStart())
  try {
    const token = window.localStorage.getItem('accessToken')

    const response = await axios.post(`${BASE_URL}/student/coupon/verify`, params, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })

    dispatch(getDataSuccess(response.data))
  } catch (error) {
    toast.error('Error! message:' + error.response.data.message)

    dispatch(getDataFailure(error.message))
  }
}

export default couponSlice.reducer
