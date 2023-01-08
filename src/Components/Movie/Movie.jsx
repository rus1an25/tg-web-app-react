import React, {useEffect, useState} from "react";
import style from './Movie.module.css';
import {useSelector} from "react-redux";
import Votes from "../Votes/Votes";

const Movie = () => {
    const POSTER_BASE_URL = 'https://image.tmdb.org/t/p';
    const POSTER_BASE_SIZE = '/w500';
    const PATH_TO_PUBLIC = './no_poster.png';

    const languages = useSelector(state => state.initApp.languages);
    const navigation = useSelector(state => state.initApp.navigation);
    const movie = useSelector(state => state.content.movie);

    const [language, setLanguage] = useState(null);

    useEffect(() => {
        if (movie) findLanguageName(movie.original_language)
    }, [movie])

    const findLanguageName = (filter) => {
        languages.forEach(lang => {
            if (filter === lang.iso_639_1) {
                setLanguage(lang.english_name);
            }
        })
    };

    if (movie !== null) {
        return (
            <div className={navigation !== 5 ? style.hidden : style.Movie}>
                <div className={style.Movie_poster}>
                    {
                        movie.poster_path !== null ?
                            <img src={POSTER_BASE_URL + POSTER_BASE_SIZE + movie.poster_path} alt=""/> :
                            <img src={PATH_TO_PUBLIC} alt=""/>
                    }
                </div>
                <div className={style.Movie_info}>
                    <h2>{movie.original_title}</h2>
                    <Votes vote_average={movie.vote_average} />
                    <p>Original language: {language}</p>
                    {movie.runtime !== 0 ? <p>Runtime: {movie.runtime} minutes</p> : null}
                    <p>{movie.overview}</p>
                    {
                        movie.production_companies.length ?
                            <p>Companies: {movie.production_companies.map(company => {
                                return (
                                    <span className={style.Companies} key={company.id}>{company.name}</span>
                                )
                            })}</p> :
                            null
                    }
                    {
                        movie.production_countries.length ?
                            <p>Countries: {movie.production_countries.map((country, index) => {
                                return (
                                    <span className={style.Countries} key={index}>{country.name}</span>
                                )
                            })}</p> :
                            null
                    }
                    {
                        movie.homepage ?
                        <a href={movie.homepage} className={style.Movie_link} target="_blank" rel="noopener noreferrer">
                            Watch Online
                        </a>
                        :
                        null
                    }
                </div>
            </div>
        )
    }
};

export default Movie;