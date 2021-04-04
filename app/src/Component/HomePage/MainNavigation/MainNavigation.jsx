import React from 'react';
import Navigation from '../../Common/Navigation';
import './mainNavigation.scss';

const MainNavigation = (props) => {
    const { clns } = props;
    const elements = [{ id: 1, path: '/', label: 'Главная' }, { id: 2, path: '/history', label: 'История' }];

    return (
        <Navigation elements={elements} clns={clns} className="main-navigation" />
    )

};

export default MainNavigation;
