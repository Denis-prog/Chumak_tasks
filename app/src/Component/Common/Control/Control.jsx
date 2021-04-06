import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import cn from 'classnames';
import './control.scss';

const Control = (props) => {
    const { className, ...restProps } = props;
    const classes = cn(className, 'control');

    return (
        <Button className={classes} {...restProps} />
    )
};

Control.propTypes = {
    className: PropTypes.string,
};

export default Control;
