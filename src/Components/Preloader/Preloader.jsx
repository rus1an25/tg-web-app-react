import React, {useEffect, useState} from "react";
import style from './Preloader.module.css';
import {useSelector} from "react-redux";

const Preloader = () => {
    const fetchingStatusInit = useSelector(state => state.initApp.status);
    const fetchingStatusContent = useSelector(state => state.content.status);

    const [enableInitPreload, setEnableInitPreload] = useState('pending');
    const [enableContentPreload, setEnableContentPreload] = useState('pending');

    useEffect(() => {
        if (fetchingStatusInit === 'resolved') {
            setTimeout(() => setEnableInitPreload('resolved'), 1000)
        } else {
            setEnableInitPreload('pending');
        }
    }, [fetchingStatusInit])

    useEffect(() => {
        if (fetchingStatusContent === 'resolved') {
            setTimeout(() => setEnableContentPreload('resolved'), 1000)
        } else {
            setEnableContentPreload('pending');
        }
    }, [fetchingStatusContent])

    return (
        <div className={enableInitPreload === 'pending' || enableContentPreload === 'pending' ? style.Preloader : style.Preloader_hidden}>
            <img src="./preloader.svg" alt="Load..."/>
        </div>
    )
};

export default Preloader;