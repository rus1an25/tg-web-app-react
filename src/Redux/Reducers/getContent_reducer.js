import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {requestToAPI} from "../../API/api";

export const fetchMovies = createAsyncThunk(
    'getContent/fetchMovies',
    async function(request) {
        const response = await requestToAPI.getMovies(request);
        return response;
    });

export const fetchMovieInfo = createAsyncThunk(
    'getContent/fetchMovieInfo',
    async function(request) {
        const response = await requestToAPI.getMovieInfo(request);
        return response;
    });

const getContent = createSlice({
    name: 'getContent',
    initialState: {
        genreId: null,
        rate: null,
        year: null,
        listMovies: [],
        movie: null,
        status: null,
        error: null
    },
    reducers: {
        addGenre(state, action) {
            state.genreId = action.payload;
        },
        setRate(state, action) {
            state.rate = action.payload;
        },
        addYear(state, action) {
            state.year = action.payload;
        }
    },
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.listMovies = action.payload.results;
        },
        [fetchMovies.rejected]: (state) => {
            state.status = 'rejected';
            state.error = true;
        },
        [fetchMovieInfo.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [fetchMovieInfo.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.movie = action.payload;
        },
        [fetchMovieInfo.rejected]: (state) => {
            state.status = 'rejected';
            state.error = true;
        }
    }
});

export default getContent.reducer;
export const {addGenre} = getContent.actions;
export const {setRate} = getContent.actions;
export const {addYear} = getContent.actions;