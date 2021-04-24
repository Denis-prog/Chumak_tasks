import React, { useState } from 'react';
import { observer } from 'mobx-react';
import state from '../../../State';
import Avatar from '../Avatar';
import Button from '../Button';
import ProfileActions from './ProfileActions';
import angleArrowDownIcon from './assets/angleArrowDown.svg';
import angleArrowUpIcon from './assets/angleArrowUp.svg';
import './profile.scss';

const Profile = observer((props) => {
    const [isOpenWindowActions, toggleOpenWindoActions] = useState(false);

    const { currentUserInfo: user, logOutUser } = state;

    const buttonIcon = isOpenWindowActions ? angleArrowUpIcon : angleArrowDownIcon;

    const onToggleOpenWindoActions = () => {
        toggleOpenWindoActions(prev => !prev);
    };

    return (
        <div className="profile">
            <div className="profile__info">
                <span>{user?.firstName}</span>
                <Avatar type="profile" />
                <Button className="profile__info-open-action" onClick={onToggleOpenWindoActions}>
                    <img className="profile__info-open-action-img" src={buttonIcon} alt="open profile menu" />
                </Button>
            </div>
            <ProfileActions isOpen={isOpenWindowActions} logOutUser={logOutUser} />
        </div>
    )
});

export default Profile;
