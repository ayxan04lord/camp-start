import { configureStore } from '@reduxjs/toolkit';
import MoviesReducer from '../reducer/MoviesReducer'; // Убедись, что путь к файлу правильный

export const store = configureStore({
  reducer: {
    movies: MoviesReducer, // Используем MoviesReducer
  },
});
