import { configureStore } from '@reduxjs/toolkit';
import MoviesReducer from '../reducer/MoviesReducer'; 

export const store = configureStore({
  reducer: {
    movies: MoviesReducer, 
  },
});
