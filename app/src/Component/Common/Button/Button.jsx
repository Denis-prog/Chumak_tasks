import React from 'react';
import cn from 'classnames';
import './button.scss';

const Button = (props) => {
    const { onClick, className } = props;
    const classes = cn('button', className);

    const handler = () => {
        onClick && onClick();
    }

    return (
        <button className={classes} onClick={handler}>{props.children}</button>
    );
}

export default Button;
