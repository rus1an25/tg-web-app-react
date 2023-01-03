import React, {useEffect} from "react";
import style from './Button.module.css';

const Button = (props) => {
    useEffect(() => {
        props.tg.ready()
    }, [])

    const closeApp = () => props.tg.close();
    return (
        <div onClick={closeApp} className={style.Button}>button</div>
    )
}

export default Button;