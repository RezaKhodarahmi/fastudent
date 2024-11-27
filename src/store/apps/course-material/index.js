// src/store/apps/course.js
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import BASE_URL from 'src/api/BASE_URL'

export const initialState = {
  tests: [],
  videos: [],
  faqs: [],
  loading: false,
  error: null
}

const materialSlice = createSlice({
  name: 'materials',
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true
      state.error = null
    },
    fetchTestsSuccess(state, { payload }) {
      state.loading = false
      state.tests = payload
    },
    fetchVideosSuccess(state, { payload }) {
      state.loading = false
      state.videos = payload
    },
    fetchFaqsSuccess(state, { payload }) {
      state.loading = false
      state.faqs = payload
    },
    fetchFailure(state, { payload }) {
      state.loading = false
      state.error = payload
    }
  }
})

export const { fetchStart, fetchTestsSuccess, fetchVideosSuccess, fetchFaqsSuccess, fetchFailure } =
  materialSlice.actions

export const fetchCourseVideos = courseId => async dispatch => {
  dispatch(fetchStart())
  try {
    const response = await axios.get(`${BASE_URL}/student/courses/${courseId}/videos`)
    dispatch(fetchVideosSuccess(response.data))
  } catch (error) {
    dispatch(fetchFailure(error.message))
  }
}
export const fetchCourseTests = courseId => async dispatch => {
  dispatch(fetchStart())
  try {
    const response = await axios.get(`${BASE_URL}/student/courses/${courseId}/tests`)
    dispatch(fetchTestsSuccess(response.data))
  } catch (error) {
    dispatch(fetchFailure(error.message))
  }
}

export const fetchCourseFaqs = courseId => async dispatch => {
  dispatch(fetchStart())
  try {
    const response = await axios.get(`${BASE_URL}/student/courses/${courseId}/faqs`)
    dispatch(fetchFaqsSuccess(response.data))
  } catch (error) {
    dispatch(fetchFailure(error.message))
  }
}

export default materialSlice.reducer
