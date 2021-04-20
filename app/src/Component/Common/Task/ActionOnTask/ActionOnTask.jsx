import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import Button from '../../Button';
import Select from '../../Select';
import state from '../../../../State';
import {
    Comment
} from '../../../../entity';
import './actionOnTask.scss';

const ActionOnTask = observer((props) => {
    const { taskId, currentStatus } = props;
    const [status, setStatus] = useState(currentStatus);
    const [commentText, setCommentText] = useState('');

    const statuses = [
        { value: 'pending', label: 'Pending' },
        { value: 'inProgress', label: 'In Progress' },
        { value: 'completed', label: 'Completed' },
        { value: 'canceled', label: 'Canceled' },
    ];

    useEffect(() => {
        const changeStatusTask = (newStatus) => {
            if (newStatus === currentStatus) {
                return;
            }

            updateTask(taskId, { status: newStatus });
        };

        changeStatusTask(status);

    }, [status])

    const { userData: { id: userId }, deleteTask, updateTask, addNewComment } = state;

    const deleteTaskHandler = () => {
        deleteTask(taskId);
    };

    const addNewCommentsHandler = () => {
        const comment = new Comment(taskId, userId, commentText);
        addNewComment(comment);
    };

    return (
        <div className="task-action">
            <div className="task-action__body">
                <Button className="task-action__item task-action__item-delete" onClick={deleteTaskHandler}>
                    Удалить
                </Button>
                <div className="task-action__status task-action__item">
                    <Select label="Обновить статус"
                        value={status} setValue={setStatus}
                        optionsData={statuses}
                        className="task-action__status-field" />
                </div>
            </div>
            <div className="task-action__item task-action__item-add-comment">
                <textarea className="task-action__item-add-comment-field" value={commentText} onChange={({ target: { value } }) => setCommentText(value)} />
                <Button className="task-action__item-add-comment-btn" onClick={addNewCommentsHandler}>
                    Комментировать
                </Button>
            </div>
        </div>
    );
});

export default ActionOnTask;
