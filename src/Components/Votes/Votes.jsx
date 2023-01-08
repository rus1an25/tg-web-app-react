import React, {useEffect, useState} from "react";
import style from './Votes.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const Votes = props => {

    const [votes, setVotes] = useState(null);

    useEffect(() => {
        if (props.vote_average) setVotes(props.vote_average);
    }, [props.vote_average])

    const numberToArray = number => {
        let arr = [];
        for (let i = 1, j = 0; i <= number; i++, j++) {
            arr[j] = i;
        }
        return arr;
    }

    return(
        <div className={style.Votes}>
            {
                numberToArray(10).map(index => {
                    return <span key={index} className={
                        index <= votes ? style.rated : style.no_rated}><FontAwesomeIcon icon={faStar} /></span>
                })
            }
        </div>
    )
};

export default Votes;