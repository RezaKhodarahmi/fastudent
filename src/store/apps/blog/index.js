import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import BASE_URL from 'src/api/BASE_URL'
import toast from 'react-hot-toast'

export const initialState = {
  data: [],
  loading: false,
  error: null
}

const blogSlice = createSlice({
  name: 'blog',
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

export const { getDataStart, getDataSuccess, getDataFailure } = blogSlice.actions

export const fetchBlogData = () => async dispatch => {
  dispatch(getDataStart())
  try {
    const token = window.localStorage.getItem('accessToken')

    const response = await axios.get(`${BASE_URL}/student/blog`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })

    dispatch(getDataSuccess(response.data))
  } catch (error) {
    toast.error('Error!')
    dispatch(getDataFailure(error.message))
  }
}

export const getBlogWithSlug = slug => async dispatch => {
  dispatch(getDataStart())
  try {
    const token = window.localStorage.getItem('accessToken')

    const response = await axios.get(`${BASE_URL}/student/blog/${slug}`, {
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

export default blogSlice.reducer
