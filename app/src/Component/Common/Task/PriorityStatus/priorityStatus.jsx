import React from 'react';
import cn from 'classnames';
import './priorityStatus.scss';

const PriorityStatus = (props) => {
    const { className, priority } = props;
    const priorityHandler = {
        minor: 'Minor',
        normal: 'Normal',
        critical: 'Critical'
    };
    const prefix = priority.toLowerCase();
    const classes = cn(className, 'priority-status', `priority-status_${prefix}`);

    return (
        <span className={classes}>
            {priorityHandler[priority]}
        </span>
    );
};

export default PriorityStatus;
