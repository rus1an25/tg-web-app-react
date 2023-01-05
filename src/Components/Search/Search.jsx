import React from "react";
import style from './Search.module.css';
import {fetchMovies} from "../../Redux/Reducers/getContent_reducer";
import {useDispatch, useSelector} from "react-redux";

const Search = () => {
    const dispatch = useDispatch();
    const listMovies = useSelector(state => state.content.listMovies);

    return (
        <div className={style.Search} onClick={() => dispatch(fetchMovies())}>SEARCH
            {console.log(listMovies)}
        </div>
    )
};

export default Search;