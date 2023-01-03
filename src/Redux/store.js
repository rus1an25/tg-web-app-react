import {combineReducers} from "redux";
import initApp_reducer from "./Reducers/initApp_reducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    initApp: initApp_reducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;