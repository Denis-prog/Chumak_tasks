import React, { useState } from 'react';
import { observer } from 'mobx-react';
import state from '../../../State';
import ExecutionStatus from './ExecutionStatus';
import PriorityStatus from './PriorityStatus';
import MemberList from './MemberList';
import ActionOnTask from './ActionOnTask';
import Button from '../Button';
import './task.scss';

const Task = observer((props) => {
    const { id, text, status, priority } = props.task;
    const { tasksParticipants } = state;
    const [isOpenActionWindow, toggleActionWindow] = useState(false);
    const { participants } = tasksParticipants.filter(item => item.taskId === id)[0];
    const participantsView = participants.slice(0, 4);

    let countParticipantsHidden = participants.length - 4;
    countParticipantsHidden = countParticipantsHidden > 0 ? countParticipantsHidden : null

    const onToggleActionWindow = () => {
        toggleActionWindow((prev) => !prev);
    }

    return (
        <div className="wrapper-task">
            <div className="task">
                <span className="task__element task__text">{text}</span>
                <ExecutionStatus status={status} className="task__element" />
                <PriorityStatus priority={priority} className="task__lement" />
                <MemberList participants={participantsView} countParticipantsHidden={countParticipantsHidden} className="task__element" />
                <Button className="task__update-btn task__element" onClick={onToggleActionWindow}>
                    <div className="task__update-btn-inner task__update-btn-inner_first"></div>
                    <div className="task__update-btn-inner task__update-btn-inner_middle"></div>
                    <div className="task__update-btn-inner task__update-btn-inner_last" ></div>
                </Button>
            </div>
            {
                isOpenActionWindow && <ActionOnTask taskId={id} currentStatus={status} isOpen={isOpenActionWindow} onToggleOpen={onToggleActionWindow} />
            }
        </div>
    );
});

export default Task;
