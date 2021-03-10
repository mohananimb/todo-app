import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    success: false,
    error: false,
    data: [],
    singleTodo: {}
  },
  reducers: {
    loading: state => {
      state.loading = true
    },
    success: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    error: state => {
      state.loading = false
      state.error = true
    },
    singleTodo: (state, action) => {
      state.singleTodo = action.payload
    }
  }
})

export const { loading, success, error, singleTodo } = userSlice.actions

export default userSlice.reducer
