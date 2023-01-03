import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import style from './App.module.css';
import Header from "../Header/Header";

const App = () => {
    const dispatch = useDispatch();
    const initApp = useSelector(state => state.initApp.isInitApp);
    const tg = window.Telegram.WebApp;

    return (
        <div className={style.App}>
            <Header tg={tg} />
        </div>
    )
}

export default App;