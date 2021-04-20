import React from 'react';
import TasksList from '../../../../Common/TaksList'
import './tasksBoxBody.scss';
import state from '../../../../../State';
import { observer } from 'mobx-react';

const TasksBoxBody = observer(() => {
    const { inActiveTasks, activeTasks } = state;

    return (
        <section className="tasks-box__body">
            <div className="tasks-box__body-item">
                <h2 className="tasks-box__body-item-title">On Hold</h2>
                <TasksList className="tasks-box__body-item-content" tasks={activeTasks} />
            </div>
            <div className="tasks-box__body-item">
                <h2 className="tasks-box__body-item-title">Completed</h2>
                <TasksList className="tasks-box__body-item-content" tasks={inActiveTasks} />
            </div>
        </section >
    );
});

export default TasksBoxBody;
