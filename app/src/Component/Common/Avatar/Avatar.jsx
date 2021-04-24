import React from 'react';
import CircleBorder from './AvatarBackground';
import noAvatarIcon from './assets/noAvatar.png';
import './avatar.scss';

const Avatar = (props) => {
    const { type, img } = props;

    return (
        <CircleBorder content={type} className="avatar">
            <img className="avatar__img" src={img || noAvatarIcon} alt="user icon" />
        </CircleBorder>
    );
};

export default Avatar;
