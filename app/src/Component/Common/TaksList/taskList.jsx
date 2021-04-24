import React, { useRef } from 'react';
import List from '../List';
import Task from '../Task';
import cn from 'classnames';
import './tasksList.scss';

const TasksList = (props) => {
    const { tasks, className } = props;
    const classes = cn('tasks-list', className);
    const container = useRef(null);

    return (
        <div className={classes} ref={container}>
            <List elements={tasks} label="Нет задач" clnItem="tasks-list__item">
                {(item) => <Task task={item} container={container} />}
            </List>
        </div>
    )
};

export default TasksList;
