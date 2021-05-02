import React from 'react';
import SearchForm from '../../../Common/Forms/SearchForm';
import NotificationIndicator from '../../../Common/NotificationIndicator';
import Profile from '../../../Common/Profile';
import './homePageHeader.scss';

const HomePageHeader = () => {
    return (
        <header className="home-page__row home-page__header">
            <div className="home-page__column">
                <nav className="home-page__header-nav">
                    <SearchForm />
                    <div className="home-page__header-nav-user-info">
                        <NotificationIndicator className="home-page__header-nav-user-info-notificatation-indicator" isNewNotification={true} />
                        <Profile type="profile" />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HomePageHeader;
