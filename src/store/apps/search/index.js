import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import BASE_URL from 'src/api/BASE_URL'
import toast from 'react-hot-toast'

export const initialState = {
  data: [],
  loading: false,
  error: null
}

const searchSlice = createSlice({
  name: 'search',
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

export const { getDataStart, getDataSuccess, getDataFailure } = searchSlice.actions

export const fetchCourseSearchData = () => async dispatch => {
  dispatch(getDataStart())
  try {
    const token = window.localStorage.getItem('accessToken')

    const response = await axios.get(`${BASE_URL}/student/courses/all`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })

    dispatch(getDataSuccess(response.data))
  } catch (error) {
    toast.error('Error! message:' + error.message)

    dispatch(getDataFailure(error.message))
  }
}

export const fetchSearchedCourse = searchTerm => async dispatch => {
  dispatch(getDataStart())
  try {
    const token = window.localStorage.getItem('accessToken')

    const response = await axios.get(`${BASE_URL}/student/search/${searchTerm}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })

    dispatch(getDataSuccess(response.data))
  } catch (error) {
    toast.error('Error! message:' + error.message)

    dispatch(getDataFailure(error.message))
  }
}

export default searchSlice.reducer
