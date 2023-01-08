import React, {useEffect, useState} from "react";
import style from "./Rating.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setRate} from "../../Redux/Reducers/getContent_reducer";

const Rating = () => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(10);
    const navigation = useSelector(state => state.initApp.navigation);

    useEffect(() => {
        dispatch(setRate(rating));
    }, [rating]);

    const numberToArray = number => {
        let arr = [];
        for (let i = 1, j = 0; i <= number; i++, j++) {
            arr[j] = i;
        }
        return arr;
    }

    return (
        <div className={navigation !== 2 ? style.hidden : style.Rating}>
            <h1>Choose A Rating</h1>
            <div className={style.Rating_list}>
                {
                    numberToArray(10).map(rate => {
                        return <div
                            key={rate}
                            className={style.Rate}
                        >
                            <span className={style.Rate_number}>{rate}</span>
                            <span
                                id={rate}
                                className={rate === rating ? style.Dot_active : style.Dot}
                                onClick={(e) => setRating(parseInt(e.target.id))}
                            >
                        </span>
                        </div>
                    })
                }
            </div>
        </div>
    )
};

export default Rating;