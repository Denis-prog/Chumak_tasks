import React from 'react';
import state from '../../../../../../State';
import cn from 'classnames';
import './status.scss';
import { observer } from 'mobx-react';

const Status = observer((props) => {
    const { countActiveTasks } = state;
    const { className } = props;
    const classes = cn('status', className);

    return (
        <h2 className={classes}>
            You’ve got <span className={"status_important"}>{countActiveTasks} task</span> today
        </h2>
    )
});

export default Status;
