import React, {useEffect} from "react";
import style from './App.module.css';
import Main from "../Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {fetchCGenres, fetchCountries, fetchLanguages} from "../../Redux/Reducers/initApp_reducer";
import {fetchMovies} from "../../Redux/Reducers/getContent_reducer";

const App = () => {
    const dispatch = useDispatch();
    const countriesRequest = useSelector(state => state.initApp.languagesRequest);
    const genresRequest = useSelector(state => state.initApp.genresRequest);
    const baseRequest = useSelector(state => state.initApp.baseRequest);
    const list = useSelector(state => state.content.listMovies);

    useEffect(() => {
        dispatch(fetchLanguages(countriesRequest));
        dispatch(fetchCGenres(genresRequest));
        dispatch(fetchMovies(baseRequest));
    }, []);

    return (
        <div className={style.App}>
            <Main />
        </div>
    )
}

export default App;