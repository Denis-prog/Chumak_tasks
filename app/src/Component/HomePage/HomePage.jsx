import React from 'react';
import Page from '../Common/Page';
import MainNavigationContainer from '../HomePage/MainNavigation';
import Main from './Main';

const HomePage = () => {
    return (
        <Page
            header={<MainNavigationContainer />}
            main={<Main />} />
    );
};

export default HomePage;
