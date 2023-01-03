import React from "react";
import style from './Header.module.css';
import Button from "../Button/Button";

const Header = (props) => {
    console.log(props.tg)
    return (
        <div className={style.Header}>
            <Button tg={props.tg} />
            <span>User name: {props.tg.initDataUnsafe?.user?.username}</span>
        </div>
    )
};

export default Header;