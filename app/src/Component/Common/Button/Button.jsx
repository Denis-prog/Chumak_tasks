import React from 'react';
import PropTypes from 'prop-types';
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
};

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;
