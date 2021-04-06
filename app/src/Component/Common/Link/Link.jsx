import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './link.scss';

const Link = (props) => {
    const { path, label, className, activeClassName } = props;
    const classes = cn('link', className)

    return (
        <NavLink activeClassName={activeClassName || 'link_active'} className={classes} exact to={path}>{label}</NavLink>
    );
};

Link.propTypes = {
    path: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    activeClassName: PropTypes.string,
};

export default Link;
