import React from 'react';
import Button from '../../Button';
import List from '../../List';
import cn from 'classnames';
import './profileActions.scss';

const ProfileActions = (props) => {

    const { logOutUser, isOpen } = props;

    const actions = [
        {
            label: 'Выйти',
            action: () => {
                logOutUser();
            }
        }
    ];

    const classes = cn('profile-actions', {
        'profile-actions_open': isOpen,
    });

    return (
        <List elements={actions} className={classes} clnItem="profile-actions__item">
            {({ action, label }) => <Button className="profile-actions__item-btn" onClick={action}>{label}</Button>}
        </List>
    );
};

export default ProfileActions;
