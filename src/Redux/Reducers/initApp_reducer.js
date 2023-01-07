import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {requestToAPI} from "../../API/api";

export const fetchCGenres = createAsyncThunk(
    'initApplication/fetchCategories',
    async function(data) {
        const response = await requestToAPI.getGenres(data);
        return response;
    });

const toInitializeApp = createSlice({
    name: 'initApplication',
    initialState: {
        genresRequest: '/genre/movie/list',
        baseRequest: '/discover/movie?api_key=0471cac914f115a568e4ebde8feb5fd4&language=en-EN&sort_by=vote_average.desc',
        listGenres: [],
        navigation: 1,
        currentYear: new Date().getFullYear(),
        status: null,
        error: null
    },
    reducers: {
        setNavigation(state, action) {
            state.navigation = action.payload;
        }
    },
    extraReducers: {
        [fetchCGenres.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [fetchCGenres.fulfilled]: (state, action) => {
            console.log(action.payload.genres)
            state.status = 'resolved';
            state.listGenres = action.payload.genres;
        },
        [fetchCGenres.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = true;
        }
    }
});

export default toInitializeApp.reducer;
export const {setNavigation} = toInitializeApp.actions;