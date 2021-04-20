import React from 'react';
import './executionStatus.scss';
import cn from 'classnames';

const ExecutionStatus = (props) => {

    const { status, className } = props;
    const statusHandler = {
        pending: 'Pending',
        inProgress: 'In Progress',
        completed: 'Completed',
        canceled: 'Canceled'
    };
    const prefix = status.toLowerCase();
    const classes = cn(className, 'execution-status', `execution-status_${prefix}`);

    return (
        <span className={classes}>
            { statusHandler[status]}
        </span>
    );
};

export default ExecutionStatus;
