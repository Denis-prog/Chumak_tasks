import React from 'react';
import PropTypes from 'prop-types';
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

List.propsType = {
    elements: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string,
    cln: PropTypes.string,
};

export default List;
