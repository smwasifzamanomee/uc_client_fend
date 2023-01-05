import { configureStore } from '@reduxjs/toolkit'
import tripRedcer from '../redux/tripinformation';

export const store = configureStore({
  reducer: {
    trip: tripRedcer
  },
})