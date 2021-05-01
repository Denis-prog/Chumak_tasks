import React from 'react';
import { convertTimeToString } from '../../../../Helper';
import './messageTime.scss';
import cn from 'classnames';

const MessageTime = (props) => {
    const { timestamp, className } = props;
    const classes = cn('message-time', className);

    const timeDiff = Date.now() - timestamp;
    const isMessageOld = (timeDiff) / 1000 > 86400; // 1сутки
    const isMessageNew = (timeDiff) / 1000 < 60;  //менее минуты
    const timePassed = convertTimeToString(timeDiff);

    return (
        <span className={classes}>
            {isMessageNew && '- Just Now'}
            {isMessageOld && 'more than one day ago'}
            {(!isMessageNew && !isMessageOld) &&
                `${timePassed} ago`
            }
        </span>
    );
};

export default MessageTime;
