import React from 'react';
import cn from 'classnames';
import './avatarBackground.scss';

const CircleBorder = (props) => {
    const { className, content, children } = props;
    const classes = cn('avatar-background', `avatar-background_${content}`, className);

    return (
        <div className={classes}>
            <div className="avatar-background__inner">
                {children}
            </div>
        </div>
    );
};

export default CircleBorder;
