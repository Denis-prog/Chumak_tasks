import React from 'react';
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

export default Control;
