import React, { useState } from 'react';
import { observer } from 'mobx-react';
import state from '../../../State';
import ExecutionStatus from '../ExecutionStatus';
import PriorityStatus from './PriorityStatus';
import MemberList from './MemberList';
import ActionOnTask from './ActionOnTask';
import Button from '../Button';
import cn from 'classnames';
import './task.scss';

const Task = observer((props) => {
    const { id: taskId, text, status, priority, author, executor } = props.task;
    const { container } = props;
    const { comments, users } = state;
    const [isOpenActionWindow, toggleActionWindow] = useState(false);
    const onToggleActionWindow = () => {
        toggleActionWindow((prev) => !prev);
    }

    const taskClasses = cn('task', { 'task_inactive': status === 'completed' || status === 'canceled' });

    return (
        <div className="wrapper-task">
            <div className={taskClasses}>
                <span className="'task__element task__text">{text}</span>
                <ExecutionStatus status={status} className="task__element" />
                <PriorityStatus priority={priority} className="task__lement" />
                <MemberList taskId={taskId} taskAuthor={author}
                    taskExecutor={executor} comments={comments} users={users} className="task__element" />
                <Button className="task__update-btn task__element" onClick={onToggleActionWindow}>
                    <div className="task__update-btn-inner task__update-btn-inner_first"></div>
                    <div className="task__update-btn-inner task__update-btn-inner_middle"></div>
                    <div className="task__update-btn-inner task__update-btn-inner_last" ></div>
                </Button>
            </div>
            {
                isOpenActionWindow && <ActionOnTask
                    taskId={taskId}
                    currentStatus={status}
                    isOpen={isOpenActionWindow}
                    onToggleOpen={onToggleActionWindow}
                    container={container} />
            }
        </div>
    );
});

export default Task;
