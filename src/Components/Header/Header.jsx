import React from "react";
import style from './Header.module.css';
import Button from "../Button/Button";

const Header = (props) => {
    const tg = window.Telegram.WebApp;
    return (
        <div className={style.Header}>
            <Button tg={tg} />
            <span>User name: {JSON.stringify(tg.initDataUnsafe)}</span>
        </div>
    )
};

export default Header;