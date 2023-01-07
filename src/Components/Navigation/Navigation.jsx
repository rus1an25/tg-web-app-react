import React, {useEffect, useState} from "react";
import style from "./Navigation.module.css";
import {setNavigation} from "../../Redux/Reducers/initApp_reducer";
import {useDispatch, useSelector} from "react-redux";

const Navigation = () => {
    const dispatch = useDispatch();
    const [currentIndex, setCurrentIndex] = useState(1);
    const navigation = useSelector(state => state.initApp.navigation);

    const addEvent = (e, i) => {
        setCurrentIndex(i);
    }

    useEffect(() => {
        dispatch(setNavigation(currentIndex));
    }, [currentIndex])

    useEffect(() => {
        setCurrentIndex(navigation);
    }, [navigation])

    return (
        <div className={style.Navigation}>
            {
                [1, 2, 3, 4].map(i => <div
                    key={i}
                    id={i}
                    onClick={e => addEvent(e, i)}
                    className={i !== navigation ? style.Dot : style.Dot_active}>
                </div>)
            }
        </div>
    )
};

export default Navigation;