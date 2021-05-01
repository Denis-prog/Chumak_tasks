import React from 'react';
import cn from 'classnames';

const FormItem = (props) => {
    const { children, className } = props;
    const classes = cn(className, 'form__item')

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default FormItem;
