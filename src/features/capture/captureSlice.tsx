import { createSlice } from '@reduxjs/toolkit'

export const captureSlice = createSlice({
  name: 'capture',
  initialState: {
    storedString: ''
  },
  reducers: {
    captureValue: (state, action) => {
      state.storedString = action.payload
    }
  }
})

export const { captureValue } = captureSlice.actions

export default captureSlice.reducer
