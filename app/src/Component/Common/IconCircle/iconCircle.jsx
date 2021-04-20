import React from 'react';
import cn from 'classnames';
import './iconCircle.scss';

const IconCircle = (props) => {

    const { className} = props;

    const classes = cn('icon-circle', className);

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
};

export default IconCircle;
