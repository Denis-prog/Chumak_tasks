import React from 'react';
import cn from 'classnames';
import './roundIcon.scss';

const IconCircle = (props) => {

    const { className} = props;

    const classes = cn('round-icon', className);

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
};

export default IconCircle;
