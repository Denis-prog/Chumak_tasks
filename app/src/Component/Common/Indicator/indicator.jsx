import React from 'react';
import cn from 'classnames';
import './indicator.scss';

const Indicator = (props) => {
    const { state, className, label, type} = props;
    const classes = cn('indicator__progress', className)

    return (
        <div className="indicator">
            <span className="indicator__title">{`${label}:`}</span>
            <progress className={classes} value={state[type]} max="100">
                {label} <span>{state[type]}</span>%
            </progress>
        </div>
    )
}

export default Indicator;
