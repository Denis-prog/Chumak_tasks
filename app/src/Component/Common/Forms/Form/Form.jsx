import React from 'react';
import cn from 'classnames';

const Form = (props) => {
    const { onSubmit, children, className } = props;
    const classes = cn(className);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmit && onSubmit();
    }

    return (
        <form action="#" method="post" onSubmit={onSubmitHandler} className={classes}>
            {children}
        </form>
    );
};

export default Form;
