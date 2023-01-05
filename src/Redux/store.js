import {combineReducers} from "redux";
import initApp_reducer from "./Reducers/initApp_reducer";
import getContent_reducer from "./Reducers/getContent_reducer";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    initApp: initApp_reducer,
    content: getContent_reducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});

export default store;