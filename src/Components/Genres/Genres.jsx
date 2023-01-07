import React, {useEffect, useState} from "react";
import style from './Genres.module.css';
import {addGenre} from "../../Redux/Reducers/getContent_reducer";
import {useDispatch, useSelector} from "react-redux";

const Genres = () => {
    const dispatch = useDispatch();
    const listGenres = useSelector(state => state.initApp.listGenres);
    const navigation = useSelector(state => state.initApp.navigation);

    const [genreId, setGenreId] = useState(null);

    useEffect(() => {
        dispatch(addGenre(genreId));
    }, [genreId])

    return (
        <div className={navigation !== 1 ? style.hidden : style.Genres}>
            <h1>Choose A Genres</h1>
            <span
                onClick={() => setGenreId(null)}
                className={genreId !== null ? style.no_active : style.active}
            >All
            </span>
            {
                listGenres.map(genre => {
                    // listGenres.forEach(obj => {
                    //     console.log(Object.keys(obj).includes(genre))
                    // });
                    return (
                        <span
                            key={genre.id}
                            onClick={() => setGenreId(genre.id)}
                            className={genre.id !== genreId ? style.no_active : style.active}
                        >
                        {genre.name} {genre.id}
                        </span>
                    )
                })
            }
        </div>
    )
};

export default Genres;