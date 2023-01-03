import React from "react";
import style from './Header.module.css';
import Button from "../Button/Button";

const Header = (props) => {
    const tg = window.Telegram.WebApp;
    return (
        <div className={style.Header}>
            <Button tg={props.tg} />
            <span>User name: {tg.initDataUnsafe?.user?.username}</span>
        </div>
    )
};

export default Header;