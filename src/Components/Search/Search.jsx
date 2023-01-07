import React, {useEffect, useState} from "react";
import style from './Search.module.css';
import {fetchMovies} from "../../Redux/Reducers/getContent_reducer";
import {useDispatch, useSelector} from "react-redux";
import {setNavigation} from "../../Redux/Reducers/initApp_reducer";

const Search = () => {
    const dispatch = useDispatch();
    const baseRequest = useSelector(state => state.initApp.baseRequest);
    const genreId = useSelector(state => state.content.genreId);
    const rate = useSelector(state => state.content.rate);
    const year = useSelector(state => state.content.year);

    const [resultReq, setResultReq] = useState('');

    useEffect(() => {
        if (resultReq !== '') dispatch(fetchMovies(resultReq))
    }, [resultReq])

    const sendSearchRequest = () => {
        dispatch(setNavigation(4));
        if (genreId !== null) {
            const newReq = baseRequest+`&with_genres=${genreId}&vote_average.lte=${rate}&primary_release_year=${year}`;
            setResultReq(newReq);
        } else {
            const newReq = baseRequest+`&vote_average.lte=${rate}&primary_release_year=${year}`;
            setResultReq(newReq);
        }
    }

    return (
        <div className={style.Search} onClick={sendSearchRequest}>
            Find Me Movies
        </div>
    )
};

export default Search;