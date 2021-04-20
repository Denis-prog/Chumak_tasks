import React from 'react';
import TasksBoxHeader from './TasksBoxHeader';
import TasksBoxBody from './TasksBoxBody';

const TasksBox = () => {
    return (
        <section className="tasks-box">
            <TasksBoxHeader />
            <TasksBoxBody />
        </section>
    )
};

export default TasksBox;
