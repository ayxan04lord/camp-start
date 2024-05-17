import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovie = createAsyncThunk('movies/fetchMovie', async (name) => {
    try {
        const response = await axios.get(`https://www.omdbapi.com/?s=${name}&page=2&apikey=1fd4bd0f`);
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const addToFavorites = createAsyncThunk('movies/addToFavorites', async (movie) => {
    try {
        return movie;
    } catch (error) {
        throw error;
    }
});

export const removeFromFavorites = createAsyncThunk('movies/removeFromFavorites', async (movieId) => {
    try {
        return movieId;
    } catch (error) {
        throw error;
    }
});

export const saveFavoritesList = createAsyncThunk('movies/saveFavoritesList', async (favorites) => {
    try {
        const response = await axios.post('https://acb-api.algoritmika.org/api/movies/list', {
            title: 'Favorites List',
            movies: favorites.map(movie => movie.imdbID)
        });
        return response.data;
    } catch (error) {
        throw error;
    }
});

const initialState = {
    isLoading: false,
    data: [],
    favorites: [],
    error: false,
    lists: []
};

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        createNewList: (state, action) => {
            state.lists.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchMovie.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload.Search;
        });
        builder.addCase(fetchMovie.rejected, (state) => {
            state.error = true;
        });

        builder.addCase(addToFavorites.fulfilled, (state, action) => {
            const existingMovie = state.favorites.find(movie => movie.imdbID === action.payload.imdbID);
            if (!existingMovie) {
                state.favorites.push(action.payload);
            }
        });

        builder.addCase(removeFromFavorites.fulfilled, (state, action) => {
            state.favorites = state.favorites.filter(movie => movie.imdbID !== action.payload);
        });

        builder.addCase(saveFavoritesList.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(saveFavoritesList.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(saveFavoritesList.rejected, (state) => {
            state.error = true;
        });
    }
});

export default moviesSlice.reducer;
