import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import BASE_URL from 'src/api/BASE_URL'
import toast from 'react-hot-toast'

export const initialState = {
  data: [],
  loading: false,
  error: null
}

const courseDescriptionSlice = createSlice({
  name: 'courseDes',
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

export const { getDataStart, getDataSuccess, getDataFailure } = courseDescriptionSlice.actions

export const createNewCourseDescription = (user, data) => async dispatch => {
  dispatch(getDataStart())
  console.log(user)
  try {
    const token = window.localStorage.getItem('accessToken')

    const response = await axios.post(`${BASE_URL}/student/course-description/create/${user}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })

    dispatch(getDataSuccess(response.data))
  } catch (error) {
    dispatch(getDataFailure(error?.response || 'Error!'))
  }
}

export default courseDescriptionSlice.reducer
