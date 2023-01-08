import React, {useEffect, useState} from "react";
import style from "./Year.module.css";
import {useDispatch, useSelector} from "react-redux";
import {addYear} from "../../Redux/Reducers/getContent_reducer";

const Year = () => {
    const dispatch = useDispatch();
    const navigation = useSelector(state => state.initApp.navigation);
    const currentYear = useSelector(state => state.initApp.currentYear);
    const [year, setYear] = useState(currentYear);

    useEffect(() => {
        dispatch(addYear(year));
    })

    const setYearArray = (begin, end) => {
        const arr = [];
        for (let i = begin, j = 0; i <= end; i++, j++) {
            arr[j] = i;
        }
        return arr;
    }

    return (
        <div className={navigation !== 3 ? style.hidden : style.Year}>
            <h1>Choose A Year</h1>
            <div className={style.Year_list}>
                {
                    setYearArray(1900, currentYear).reverse().map(yearNumber => {
                        return <span
                            key={yearNumber}
                            className={year === yearNumber ? style.Year_number_active : style.Year_number}
                            onClick={() => setYear(yearNumber)}
                        >
                            {yearNumber}
                        </span>
                    })
                }
            </div>
        </div>
    )
};

export default Year;