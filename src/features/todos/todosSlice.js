import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    loading: false,
    success: false,
    error: false,
    data: []
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
    }
  }
})

export const { loading, success, error } = todosSlice.actions

export default todosSlice.reducer
