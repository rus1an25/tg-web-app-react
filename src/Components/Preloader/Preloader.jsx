import React, {useEffect, useState} from "react";
import style from './Preloader.module.css';
import {useSelector} from "react-redux";

const Preloader = () => {
    const fetchingStatusInit = useSelector(state => state.initApp.status);
    const fetchingStatusContent = useSelector(state => state.content.status);

    const [isEnablePreload, setIsEnablePreload] = useState('pending');

    useEffect(() => {
        if (fetchingStatusInit === 'resolved' || fetchingStatusContent === 'resolved') {
            setIsEnablePreload('resolved');
        }
    }, [fetchingStatusInit, fetchingStatusContent])

    return (
        <div className={isEnablePreload === 'pending' ? style.Preloader : style.Preloader_hidden}>
            <img src="./preloader.svg" alt="Load..."/>
        </div>
    )
};

export default Preloader;