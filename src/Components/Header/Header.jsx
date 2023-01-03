import React from "react";
import style from './Header.module.css';
import Button from "../Button/Button";

const Header = () => {
    const tg = window.Telegram.WebApp;
    return (
        <div className={style.Header}>
            <Button tg={tg} />
            <span>{tg.initDataUnsafe.user.userName}</span>
        </div>
    )
};

export default Header;