import React from 'react';
import TasksBox from './TasksBox';

const HomePageMain = () => {
    return (
        <div className="home-page__row">
            <div className="home-page__column home-page__column_left">
                <TasksBox />
            </div>
            <div className="home-page__column home-page__column_rigth"></div>
        </div>
    );
};

export default HomePageMain;
