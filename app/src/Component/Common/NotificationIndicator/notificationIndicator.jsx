import React from 'react';
import cn from 'classnames';
import icon from './assets/bell.svg';
import './notificationIndicator.scss';

const NotificationIndicator = (props) => {
    const { isNewNotification, className } = props;

    const classes = cn('notification-indicator', className, {
        'notification-indicator_has_new': isNewNotification
    });

    return (
        <div className={classes}>
            <img src={icon} alt="notification indicator" />
        </div>
    );
};

export default NotificationIndicator;