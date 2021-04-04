import React from 'react';
import Page from '../Common/Page';
import Header from './Header';
import Main from './Main';
import './homePage.scss';

const HomePage = () => {
    return (
        <Page
            header={<Header />}
            main={<Main />} />
    );
};

export default HomePage;
