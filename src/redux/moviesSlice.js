import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const fetchMovieList = createAsyncThunk('movies/fetchMovieList', async (listId) => {
    try {
        // Здесь можно выполнить запрос на сервер для получения списка фильмов по идентификатору списка
        // Например:
        // const response = await axios.get(`https://your-api.com/lists/${listId}`);
        // return response.data.movies; // Предположим, что сервер возвращает массив фильмов
        return []; // Заглушка, если серверный запрос не используется
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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovieList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
    }
});

export const { createNewList } = moviesSlice.actions;

export default moviesSlice.reducer;
