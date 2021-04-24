import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import HomePageHeader from './HomePageHeader';
import HomePageMain from './HomePageMain';
import state from '../../State';
import './homePage.scss';

const HomePage = observer(() => {
    const { setAllData } = state;

    useEffect(() => {
        setAllData();
    }, []);

    return (
        <div className="home-page">
            <HomePageHeader />
            <HomePageMain />
        </div>
    )
});

export default HomePage;
