import React, {useEffect, useState} from "react";
import style from './Movie.module.css';
import {useSelector} from "react-redux";
import Votes from "../Votes/Votes";
import {retry} from "@reduxjs/toolkit/query";

const Movie = () => {
    const POSTER_BASE_URL = 'https://image.tmdb.org/t/p';
    const POSTER_BASE_SIZE = '/w500';
    const PATH_TO_PUBLIC = './no_poster.png';

    const languages = useSelector(state => state.initApp.languages);
    const navigation = useSelector(state => state.initApp.navigation);
    const movie = useSelector(state => state.content.movie);

    const [movieInfo, setMovieInfo] = useState(null);
    const [language, setLanguage] = useState(null);

    useEffect(() => {
        if (movieInfo) findLanguageName(movieInfo.original_language)
    }, [movieInfo])

    useEffect(() => {
        if (movie) {
            setMovieInfo(movie)
        }
    }, [movie]);

    const findLanguageName = (filter) => {
        languages.forEach(lang => {
            if (filter === lang.iso_639_1) {
                setLanguage(lang.english_name);
            }
        })
    };

    if (movieInfo !== null) {
        return (
            <div className={navigation !== 5 ? style.hidden : style.Movie}>
                <div className={style.Movie_poster}>
                    {
                        movieInfo.poster_path !== null ?
                            <img src={POSTER_BASE_URL + POSTER_BASE_SIZE + movieInfo.poster_path} alt=""/> :
                            <img src={PATH_TO_PUBLIC} alt=""/>
                    }
                </div>
                <div className={style.Movie_info}>
                    <h2>{movieInfo.original_title}</h2>
                    <Votes vote_average={movieInfo.vote_average} />
                    <p>Original language: {language}</p>
                    {movieInfo.runtime !== 0 ? <p>Runtime: {movieInfo.runtime} minutes</p> : null}
                    <p>{movieInfo.overview}</p>
                    {
                        movieInfo.production_companies.length ?
                            <p>Companies: {movieInfo.production_companies.map(company => {
                                return (
                                    <span className={style.Companies} key={company.id}>{company.name}</span>
                                )
                            })}</p> :
                            null
                    }
                    {
                        movieInfo.production_countries.length ?
                            <p>Countries: {movieInfo.production_countries.map((country, index) => {
                                return (
                                    <span className={style.Countries} key={index}>{country.name}</span>
                                )
                            })}</p> :
                            null
                    }
                    <a href={movieInfo.homepage}>{movieInfo.homepage}</a>
                </div>
            </div>
        )
    }
};

export default Movie;