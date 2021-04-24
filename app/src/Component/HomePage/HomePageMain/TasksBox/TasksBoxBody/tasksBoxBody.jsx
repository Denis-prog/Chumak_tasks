import React from 'react';
import TasksList from '../../../../Common/TaksList';
import { observer } from 'mobx-react';
import ExecutionStatus from '../../../../Common/ExecutionStatus'
import state from '../../../../../State';
import './tasksBoxBody.scss';

const TasksBoxBody = observer(() => {
    const { inActiveTasks, activeTasks } = state;

    return (
        <section className="tasks-box__body">
            <div className="tasks-box__body-item">
                <h2 className="tasks-box__body-item-title">On Hold</h2>
                <TasksList className="tasks-box__body-item-content" tasks={activeTasks} />
            </div>
            <div className="tasks-box__body-item">
                <div className="tasks-box__body-item-title tasks-box__body-item-title_inactive">
                    <h2>Completed</h2>
                    <ExecutionStatus status="inactive" className="tasks-box__body-item-title-icon" />
                </div>
                <TasksList className="tasks-box__body-item-content tasks-box__body-item-content_transparent" tasks={inActiveTasks} />
            </div>
        </section >
    );
});

export default TasksBoxBody;
