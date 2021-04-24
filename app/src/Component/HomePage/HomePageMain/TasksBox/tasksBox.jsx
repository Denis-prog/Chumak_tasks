import React from 'react';
import TasksBoxHeader from './TasksBoxHeader';
import TasksBoxBody from './TasksBoxBody';
import './tasksBox.scss';

const TasksBox = () => {
    return (
        <section className="tasks-box">
            <TasksBoxHeader />
            <TasksBoxBody />
        </section>
    )
};

export default TasksBox;
