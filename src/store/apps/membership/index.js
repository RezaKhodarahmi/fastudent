import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import BASE_URL from 'src/api/BASE_URL'
import toast from 'react-hot-toast'

export const initialState = {
  data: [],
  loading: false,
  error: null
}

const membershipSlice = createSlice({
  name: 'membership',
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

export const { getDataStart, getDataSuccess, getDataFailure } = membershipSlice.actions

export const buyVipMembership = params => async dispatch => {
  dispatch(getDataStart())
  try {
    const token = window.localStorage.getItem('accessToken')
    const userEmail = window.localStorage.getItem('userData')
    const email = JSON.parse(userEmail)
    const response = await axios.post(
      `${BASE_URL}/student/membership/buy`,
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      }
    )
    dispatch(getDataSuccess(response.data))
  } catch (error) {
    console.log(error)
    toast.error('Error! message:' + error.response.data.message)
    dispatch(getDataFailure(error.message))
  }
}

export default membershipSlice.reducer
