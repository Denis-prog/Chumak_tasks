import React from 'react';
import './executionStatus.scss';
import cn from 'classnames';

const ExecutionStatus = (props) => {

    const { status, className } = props;
    const statusHandler = {
        pending: 'Pending',
        inprogress: 'In Progress',
        completed: 'Completed',
        canceled: 'Canceled',
        inactive: 'Inactive',
    };
    const classes = cn(className, 'execution-status', `execution-status_${status}`);

    return (
        <span className={classes}>
            { statusHandler[status]}
        </span>
    );
};

export default ExecutionStatus;
