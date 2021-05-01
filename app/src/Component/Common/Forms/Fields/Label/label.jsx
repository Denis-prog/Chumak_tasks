import React from 'react';
import cn from 'classnames';

const Label = (props) => {
    const { className, inputId, label, ariaLabel } = props;
    const classes = cn('label', className);

    return (
        <label className={classes} htmlFor={inputId} aria-label={ariaLabel}>{label}</label>
    );
};

export default Label;
