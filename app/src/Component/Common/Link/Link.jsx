import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import cn from 'classnames';
import './link.scss';

const Link = (props) => {
    const { path, label, className } = props;
    const classes = cn('link', className)

    return (
        <NavLink className={classes} to={path}>{label}</NavLink>
    );
}

export default Link;
