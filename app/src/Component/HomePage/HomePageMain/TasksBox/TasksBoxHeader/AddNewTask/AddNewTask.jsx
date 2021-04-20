import React, { useState } from 'react';
import Button from '../../../../../Common/Button';
import Modal from '../../../../../Common/Modal';
import TaskAddForm from '../../../../../Common/TaskAddForm';
import { Task } from '../../../../../../entity'
import state from '../../../../../../State';
import './addNewTask.scss';
import { observer } from 'mobx-react';

const AddNewTask = observer(() => {
    const [isOpenModal, toggleVisibilityModal] = useState(false);
    const [text, setText] = useState('');
    const [executor, setExecutor] = useState('');
    const [priority, setPriority] = useState('');
    const { addNewTask, users, userData: { id: author } } = state;

    const onToggleVisibilityModal = () => {
        toggleVisibilityModal((prevCount) => !prevCount);
        setText('');
        setExecutor('');
        setPriority('');
    };

    const addNewTaskHandler = (e) => {
        e.preventDefault();
        const task = new Task({ author, executor, text, priority });
        addNewTask(task);
        toggleVisibilityModal();
    };

    return (
        <>
            <Button className="add-new-task" onClick={onToggleVisibilityModal}>
                Add New
            </Button>
            < Modal title="Добавить задачу"
                buttonLabel="Добавить"
                isOpen={isOpenModal}
                onCancel={onToggleVisibilityModal}
                onSubmit={addNewTaskHandler}>
                <TaskAddForm users={users}
                    userId={author}
                    text={text}
                    setText={setText}
                    executor={executor}
                    setExecutor={setExecutor}
                    priority={priority}
                    setPriority={setPriority}
                />
            </Modal >
        </>
    );
});

export default AddNewTask;
