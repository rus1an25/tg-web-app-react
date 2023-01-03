import {createSlice} from "@reduxjs/toolkit";

const toInitialApp = createSlice({
    name: 'initApplication',
    initialState: {
        isInitApp: false
    },
    reducers: {
        toInitApp(state, action) {
            state.isInitApp = action.payload;
        }
    }
});

export default toInitialApp.reducer;
export const {toInitApp} = toInitialApp.actions;