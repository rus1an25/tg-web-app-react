import React from "react";
import style from './Header.module.css';
import Button from "../Button/Button";

const Header = (props) => {
    const tg = window.Telegram.WebApp;
    return (
        <div className={style.Header}>
            <Button tg={tg} />
            <span>User name: {tg.initDataUnsafe.stringify()}</span>
        </div>
    )
};

export default Header;