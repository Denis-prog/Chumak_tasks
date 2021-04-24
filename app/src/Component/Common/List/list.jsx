import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './listItem';
import cn from 'classnames';
import './list.scss';

const List = (props) => {
    const { elements, className, clnItem, label } = props;
    const classes = cn(className, 'list');

    if (!elements.length) {
        return <p className="list_empty-label">{label || "пусто"}</p>
    }

    return (
        <ul className={classes}>
            { elements.map((item, index) => <ListItem id={item.id} className={clnItem && cn(clnItem, `${clnItem}_${index}`)} key={item.id || index}>{props.children(item)}</ListItem>)}
        </ul >
    );
};

List.propsType = {
    elements: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string,
    cln: PropTypes.string,
};

export default List;