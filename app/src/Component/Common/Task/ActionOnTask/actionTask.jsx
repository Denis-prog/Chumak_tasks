import { observer } from 'mobx-react';
import React, { useEffect, useState, useRef } from 'react';
import Button from '../../Button';
import Select from '../../Select';
import state from '../../../../State';
import {
    Comment
} from '../../../../entity';
import {
    requiredField,
    useValidation,
} from '../../../../validation';
import './actionOnTask.scss';

const ActionOnTask = observer((props) => {
    const { taskId, currentStatus, isOpen, onToggleOpen, container } = props;
    const [status, setStatus] = useState(currentStatus);
    const [commentText, setCommentText] = useState('');
    const actionWindow = useRef(null);
    const statuses = [
        { value: 'pending', label: 'Pending' },
        { value: 'inprogress', label: 'In Progress' },
        { value: 'completed', label: 'Completed' },
        { value: 'canceled', label: 'Canceled' },
    ];

    useEffect(() => {
        const changeStatusTask = (newStatus) => {
            if (newStatus === currentStatus) {
                return;
            }

            updateTask(taskId, { status: newStatus });
            onToggleOpen();
        };

        changeStatusTask(status);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status])

    useEffect(() => {
        function scrollToActionWindow() {
            if (isOpen) {
                const itemWindow = actionWindow.current.offsetTop + actionWindow.current.offsetHeight;
                const body = container.current.offsetTop + container.current.offsetHeight;
                const diff = body - itemWindow;

                if (diff < 0) {
                    actionWindow.current.scrollIntoView(false)
                }
            }
        };

        scrollToActionWindow();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])


    const { authUserId: userId, deleteTask, updateTask, addNewComment } = state;

    const deleteTaskHandler = () => {
        deleteTask(taskId);
    };

    const validation = useValidation({commentText}, {
        commentText: [
            requiredField,
        ]
    })

    const addNewCommentsHandler = () => {
        const comment = new Comment(taskId, userId, commentText);
        addNewComment(comment);
        onToggleOpen();
    };

    return (
        <div className="task-action" ref={actionWindow}>
            <div className="task-action__top">
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
                <Button disabled={!!validation.validate(commentText)} className="task-action__item-add-comment-btn" onClick={addNewCommentsHandler}>
                    Комментировать
                </Button>
            </div>
        </div>
    );
});

export default ActionOnTask;
