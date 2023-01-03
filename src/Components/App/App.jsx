import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import style from './App.module.css';
import Header from "../Header/Header";

const App = () => {
    const dispatch = useDispatch();
    const initApp = useSelector(state => state.initApp.isInitApp);

    return (
        <div className={style.App}>
            <Header />
        </div>
    )
}

export default App;