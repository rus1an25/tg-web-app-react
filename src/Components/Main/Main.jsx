import React, {useEffect} from "react";
import style from "./Main.module.css";
import Genres from "../Genres/Genres";
import Search from "../Search/Search";
import Rating from "../Rating/Rating";
import Year from "../Year/Year";
import Navigation from "../Navigation/Navigation";
import ListMoviesPage from "../ListMoviesPage/ListMoviesPage";

const Main = () => {
    return (
        <div className={style.Main}>
            <Navigation />
            <div className={style.Main_content}>
                <Genres />
                <Rating />
                <Year />
                <ListMoviesPage />
            </div>
            <Search />
        </div>
    )
};

export default Main;