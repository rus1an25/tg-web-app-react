import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {requestToAPI} from "../../API/api";

let URL = '/discover/movie?api_key=0471cac914f115a568e4ebde8feb5fd4&language=en-EN&sort_by=vote_average.desc&page=1';

const generateURL = (genreId, page=1) => {
    URL = `discover/movie?api_key=0471cac914f115a568e4ebde8feb5fd4&language=en-EN&with_genres=${genreId}&page=${page}`;
}

export const fetchMovies = createAsyncThunk(
    'getContent/fetchMovies',
    async function() {
        const response = await requestToAPI.getMovies(URL);
        return response;
    });

const getContent = createSlice({
    name: 'getContent',
    initialState: {
        genreId: null,
        listMovies: [],
        status: null,
        error: null
    },
    reducers: {
        setGenre(state, action) {
            console.log('REDUCER', action.payload)
            generateURL(action.payload)
            state.genreId = action.payload;
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
        [fetchMovies.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = true;
        }
    }
});

export default getContent.reducer;
export const {setGenre} = getContent.actions;