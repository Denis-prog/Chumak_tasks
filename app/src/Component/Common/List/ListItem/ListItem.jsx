import React from 'react';
import cn from 'classnames';
import './listItem.scss';

const ListItem = (props) => {

    const { className } = props;
    const classes = cn('list-item', className);

    return (
        <li className={classes}>{props.children}</li>
    );
};

export default ListItem;
