import React from 'react';
import SearchForm from '../../../Common/Forms/SearchForm';
import Profile from '../../../Common/Profile';
import './homePageHeader.scss';

const HomePageHeader = () => {
    return (
        <header className="home-page__row home-page__header">
            <div className="home-page__column">
                <SearchForm />
                <Profile type="profile"/>
            </div>
        </header>
    );
};

export default HomePageHeader;
