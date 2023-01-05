import React, {useEffect} from "react";
import style from './App.module.css';
import Main from "../Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {fetchCGenres} from "../../Redux/Reducers/initApp_reducer";
import {fetchMovies} from "../../Redux/Reducers/getContent_reducer";

const App = () => {
    const dispatch = useDispatch();
    const listGenres = useSelector(state => state.initApp.listGenres);

    useEffect(() => {
        console.log('UseEffect')
        dispatch(fetchCGenres());
        dispatch(fetchMovies());
    }, []);

    return (
        <div className={style.App}>
            <Main listGenres={listGenres} />
        </div>
    )
}

export default App;