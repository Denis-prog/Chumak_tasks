import React from 'react';
import cn from 'classnames';

const FormItem = (props) => {
    const { children, className } = props;
    const classes = cn(className, 'form__item')

    return (
        <p className={classes}>
            {children}
        </p>
    );
};

export default FormItem;
