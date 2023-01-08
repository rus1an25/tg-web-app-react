import React from "react";
import style from './ListMoviesPage.module.css';
import {useDispatch, useSelector} from "react-redux";
import {setNavigation} from "../../Redux/Reducers/initApp_reducer";
import {fetchMovieInfo, fetchMovies} from "../../Redux/Reducers/getContent_reducer";
import Votes from "../Votes/Votes";

const ListMoviesPage = () => {
    const dispatch = useDispatch();
    const POSTER_BASE_URL = 'https://image.tmdb.org/t/p';
    const POSTER_BASE_SIZE = '/w500';
    const PATH_TO_PUBLIC = './no_poster.png';

    const navigation = useSelector(state => state.initApp.navigation);
    const listGenres = useSelector(state => state.initApp.listGenres);
    const listMovies = useSelector(state => state.content.listMovies);

    const getMovieInfo = (movieId) => {
        const MOVIE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=0471cac914f115a568e4ebde8feb5fd4&language=en-US`;
        dispatch(setNavigation(5));
        dispatch(fetchMovieInfo(MOVIE_URL));
    };

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
                            <h2 onClick={() => getMovieInfo(movie.id)}>{movie.original_title}</h2>
                            <div className={style.Release}><span>Release: {movie.release_date}</span></div>
                            <Votes vote_average={movie.vote_average} />
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