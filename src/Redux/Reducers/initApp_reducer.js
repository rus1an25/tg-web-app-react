import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {requestToAPI} from "../../API/api";

export const fetchCGenres = createAsyncThunk(
    'initApplication/fetchCategories',
    async function() {
        const response = await requestToAPI.getGenres();
        return response;
    });

const toInitializeApp = createSlice({
    name: 'initApplication',
    initialState: {
        listGenres: [],
        status: null,
        error: null
    },
    extraReducers: {
        [fetchCGenres.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [fetchCGenres.fulfilled]: (state, action) => {
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
// export const {toInitApp} = toInitializeApp.actions;