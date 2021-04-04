import React from 'react';
import MainNavigation from './MainNavigation';
import withStyle from '../../../HOC/withStyle';

const MainNavigationContainer = (props) => {
    return (
        <MainNavigation {...props} />
    )
}

export default withStyle(MainNavigationContainer,
    'main-navigation__list',
    'main-navigation__list-item',
    'main-navigation__list-item-link',
);
