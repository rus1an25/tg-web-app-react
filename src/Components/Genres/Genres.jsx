import React from "react";
import style from './Genres.module.css';
import {setGenre} from "../../Redux/Reducers/getContent_reducer";
import {useDispatch} from "react-redux";

const Genres = (props) => {
    const dispatch = useDispatch();
    return (
        <div className={style.Genres}>
            {
                props.list.map(genre => {
                    return (
                        <div key={genre.id}><span onClick={() => dispatch(setGenre(genre.id))}>{genre.name} {genre.id}</span></div>
                    )
                })
            }
        </div>
    )
};

export default Genres;