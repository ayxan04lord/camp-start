import { configureStore } from '@reduxjs/toolkit'
import MoviesReducer from '../reducer/MoviesReducer'
export const Store = configureStore({
  reducer: {
    MovieList: MoviesReducer,
  },
})