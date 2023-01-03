import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import style from './App.module.css';

const App = () => {
    const tg = window.Telegram.WebApp;
    const dispatch = useDispatch();
    const initApp = useSelector(state => state.initApp.isInitApp);

    useEffect(() => {
        tg.ready()
    }, [])

    const closeApp = () => tg.close();

    return (
        <div className={style.App}>
            <button onClick={() => closeApp()}>Close</button>
        </div>
    )
}

export default App;