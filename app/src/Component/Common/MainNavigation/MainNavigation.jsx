import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import './mainNavigation.scss';

const MainNavigation = (props) => {
    const { clns } = props;
    const elements = [{ id: 1, path: '/', label: 'Главная' }, { id: 2, path: '/history', label: 'История' }];

    return (
        <Navigation activeClassName={'main-navigation__list-item-link_active'}
            elements={elements} clns={clns} className="main-navigation" />
    )
};

MainNavigation.propTypes = {
    clns: PropTypes.arrayOf(PropTypes.string),
};

export default MainNavigation;
