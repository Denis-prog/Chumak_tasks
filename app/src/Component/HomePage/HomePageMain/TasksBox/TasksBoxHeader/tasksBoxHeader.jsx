import React from 'react';
import Status from './Status';
import AddNewTask from './AddNewTask';
import './tasksBoxHeader.scss';

const TasksBoxHeader = () => {
    return (
        <div className="tasks-box__header">
            <Status className="tasks-box__header-status"/>
            <AddNewTask />
        </div>
    );
};

export default TasksBoxHeader;
