import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './button.scss';

const Button = (props) => {
    const { onClick, className, ariaLabel, disabled } = props;
    
    const classes = cn('button', className);

    const handler = (e) => {
        onClick && onClick(e);
    }

    return (
        <button disabled={disabled} className={classes} aria-label={ariaLabel} onClick={handler}>{props.children}</button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;
