import React, {useEffect, useState} from "react";
import style from "./Navigation.module.css";
import {setNavigation} from "../../Redux/Reducers/initApp_reducer";
import {useDispatch, useSelector} from "react-redux";

const Navigation = () => {
    const dispatch = useDispatch();
    const [currentIndex, setCurrentIndex] = useState(1);
    const navigation = useSelector(state => state.initApp.navigation);

    const numberToArray = number => {
        let arr = [];
        for (let i = 1, j = 0; i <= number; i++, j++) {
            arr[j] = i;
        }
        return arr;
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
                numberToArray(4).map(i => <div
                    key={i}
                    id={i}
                    onClick={() => setCurrentIndex(i)}
                    className={i !== navigation ? style.Dot : style.Dot_active}>
                </div>)
            }
        </div>
    )
};

export default Navigation;