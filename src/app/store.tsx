import { configureStore } from '@reduxjs/toolkit'
import captureReducer from '../features/capture/captureSlice'

export default configureStore({
  reducer: {
    capture: captureReducer
  }
})
