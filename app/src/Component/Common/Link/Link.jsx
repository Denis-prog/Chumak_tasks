import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './link.scss';

const Link = (props) => {
    const { path, label, className, activeClassName } = props;
    const classes = cn('link', className)

    return (
        <NavLink activeClassName={activeClassName || 'link_active'} className={classes} exact to={path}>{label}</NavLink>
    );
}

export default Link;
