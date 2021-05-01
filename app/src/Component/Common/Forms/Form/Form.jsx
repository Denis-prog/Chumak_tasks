import React, { forwardRef } from 'react';
import cn from 'classnames';

const Form = forwardRef((props, ref) => {
    const { onSubmit, children, className } = props;
    const classes = cn(className);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmit && onSubmit();
    }

    return (
        <form ref={ref} action="#" method="post" onSubmit={onSubmitHandler} className={classes}>
            {children}
        </form>
    );
});

export default Form;
