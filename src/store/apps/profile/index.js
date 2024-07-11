import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import BASE_URL from 'src/api/BASE_URL'
import toast from 'react-hot-toast'

export const initialState = {
  data: [],
  loading: false,
  error: null
}

const profileSlice = createSlice({
  name: 'cart',
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

export const { getDataStart, getDataSuccess, getDataFailure } = profileSlice.actions

export const getProfileInfo = () => async dispatch => {
  dispatch(getDataStart())

  try {
    const token = window.localStorage.getItem('accessToken')
    const user = window.localStorage.getItem('userData')
    const userEmail = JSON.parse(user)

    const response = await axios.get(`${BASE_URL}/student/profile/${userEmail}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })

    dispatch(getDataSuccess(response.data))
  } catch (error) {
    dispatch(getDataFailure(error.message))
  }
}

export const getCourses = userEmail => async dispatch => {
  dispatch(getDataStart())

  try {
    const token = window.localStorage.getItem('accessToken')

    const response = await axios.post(`${BASE_URL}/student/profile/courses`, userEmail, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })

    dispatch(getDataSuccess(response.data))
  } catch (error) {
    dispatch(getDataFailure(error.message))
  }
}

export const autoRenewal = customerID => async dispatch => {
  dispatch(getDataStart())

  try {
    const token = window.localStorage.getItem('accessToken')

    const response = await axios.post(`${BASE_URL}/student/profile/auto-renewal`, customerID, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })

    dispatch(getDataSuccess(response.data))
  } catch (error) {
    dispatch(getDataFailure(error.message))
  }
}

export const updateProfileDetails = data => async dispatch => {
  dispatch(getDataStart())

  try {
    const token = window.localStorage.getItem('accessToken')

    const response = await axios.patch(`${BASE_URL}/student/profile/update`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
    toast.success('Profile updated successfully')
    dispatch(getDataSuccess(response.data))
  } catch (error) {
    dispatch(getDataFailure(error.message))

    toast.error('Error! message:' + error?.response?.data?.message || 'Error!')
  }
}

export const updatePassword = password => async dispatch => {
  dispatch(getDataStart())
  try {
    const token = window.localStorage.getItem('accessToken')

    const response = await axios.patch(`${BASE_URL}/student/profile/resetpassword`, password, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })

    toast.success('Password updated successfully!')
    dispatch(getDataSuccess(response.data))
  } catch (error) {
    dispatch(getDataFailure(error.message))

    toast.error('Error! message:' + error?.response?.data?.message || 'Error!')
  }
}

export default profileSlice.reducer
