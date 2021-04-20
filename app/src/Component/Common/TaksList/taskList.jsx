import React from 'react';
import List from '../List';
import Task from '../Task';
import cn from 'classnames';
import './tasksList.scss';

const TasksList = (props) => {
    const { tasks, label, className } = props;
    const classes = cn('tasks-list', className);

    return (
        <div className={classes}>
            <List elements={tasks} label="Нет задач" clnItem="tasks-list__item">
                {(item) => <Task task={item} />}
            </List>
        </div>
    )
};

export default TasksList;
