import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './ListMoviesPage.module.css';
import {useSelector} from "react-redux";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const ListMoviesPage = () => {
    const POSTER_BASE_URL = 'https://image.tmdb.org/t/p';
    const POSTER_BASE_SIZE = '/w500';
    const PATH_TO_PUBLIC = './no_poster.png';

    const navigation = useSelector(state => state.initApp.navigation);
    const listMovies = useSelector(state => state.content.listMovies);
    const listGenres = useSelector(state => state.initApp.listGenres);

    const numberToArray = number => {
        let arr = [];
        for (let i = 1, j = 0; i <= number; i++, j++) {
            arr[j] = i;
        }
        return arr;
    }

    return (
        <div className={navigation !== 4 ? style.hidden : style.MoviesPage}>
            <div className={style.List_movies}>
                {
                    listMovies.map(movie => {
                        const vote_average = movie.vote_average;
                        return <div key={movie.id} className={style.List_item}>
                            <div  className={style.List_Image}>
                                <img src={
                                    movie.poster_path !== null ?
                                        POSTER_BASE_URL+POSTER_BASE_SIZE+movie.poster_path : PATH_TO_PUBLIC
                                    } alt=""
                                />
                            </div>
                            <h2>{movie.title}</h2>
                            <div className={style.Stars}>
                                {
                                    numberToArray(10).map(index => {
                                        return <span key={index} className={index<=vote_average?style.rated:style.no_rated}><FontAwesomeIcon icon={faStar} /></span>
                                    })
                                }
                            </div>
                            <div className={style.Genres}>
                                {
                                    movie.genre_ids.map(id => {
                                        return listGenres.map(obj => obj.id === id ? <span key={id}>{obj.name}</span> : null)
                                    })
                                }
                            </div>
                            <p>{movie.overview}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
};
export default ListMoviesPage;