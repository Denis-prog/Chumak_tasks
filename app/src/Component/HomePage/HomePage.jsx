import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import Main from './HomePageMain';
import state from '../../State';
import './homePage.scss';

const HomePage = observer(() => {
    const { getAllData } = state;

    useEffect(() => {
        getAllData();
    }, []);

    return (
        <div className="home-page">
            <Main />
        </div>
    )
});

export default HomePage;
