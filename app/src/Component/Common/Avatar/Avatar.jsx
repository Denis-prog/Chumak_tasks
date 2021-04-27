import React from 'react';
import CircleBorder from './AvatarBackground';
import noAvatarIcon from './assets/noAvatar.png';
import cn from 'classnames';
import './avatar.scss';

const Avatar = (props) => {
    const { type, img, className } = props;
    const classes = cn('avatar', className);

    return (
        <CircleBorder content={type} className={classes}>
            <img className="avatar__img" src={img || noAvatarIcon} alt="user icon" />
        </CircleBorder>
    );
};

export default Avatar;
