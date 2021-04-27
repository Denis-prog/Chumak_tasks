import React from 'react';
import TasksBox from './TasksBox';
import MessagesBox from './MessagesBox';
import './homePageMain.scss';

const HomePageMain = () => {
    return (
        <div className="home-page-main home-page__row">
            <div className="home-page__column home-page__column_left">
                <TasksBox />
            </div>
            <div className="home-page__column home-page__column_right">
                <MessagesBox />
            </div>
        </div>
    );
};

export default HomePageMain;
