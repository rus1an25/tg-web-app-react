import React, {useEffect} from "react";
import style from "./Main.module.css";
import Genres from "../Genres/Genres";
import Search from "../Search/Search";

const Main = (props) => {
    return (
        <div className={style.Main}>
            <Genres list={props.listGenres} />
            <Search />
        </div>
    )
};

export default Main;