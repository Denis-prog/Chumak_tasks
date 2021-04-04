import React from 'react';
import ListItem from './ListItem';
import cn from 'classnames';
import './list.scss';

const List = (props) => {
    const { elements, className, cln } = props;
    const classes = cn(className, 'list')

    return (
        <ul className={classes}>
            {elements.map((item, index) => <ListItem id={item.id} className={cln} key={item.id || index}>{props.children(item)}</ListItem>)}
        </ul >
    );
};

export default List;
