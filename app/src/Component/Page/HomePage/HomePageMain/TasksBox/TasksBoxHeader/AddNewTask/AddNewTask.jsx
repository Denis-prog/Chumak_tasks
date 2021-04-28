import React, { useState } from 'react';
import Button from '../../../../../../Common/Button';
import Modal from '../../../../../../Common/Modal';
import TaskAddForm from '../../../../../../Common/Forms/TaskAddForm';
import { Task } from '../../../../../../../Entity'
import state from '../../../../../../../State';

import './addNewTask.scss';
import { observer } from 'mobx-react';

const AddNewTask = observer(() => {
    const [isOpenModal, toggleVisibilityModal] = useState(false);
    const [formData, updateFormData] = useState(
        {
            subject: '',
            text: '',
            executor: '',
            priority: '',
        }
    );

    const { addNewTask, users, authUserId: author } = state;

    const onToggleVisibilityModal = () => {
        toggleVisibilityModal((prevCount) => !prevCount);
        updateFormData({
            subject: '',
            text: '',
            executor: '',
            priority: '',
        })
    };

    const addNewTaskHandler = (e) => {
        e.preventDefault();
        const task = new Task({ author, ...formData });
        addNewTask(task);
        onToggleVisibilityModal();
    };

    const onUpdateFormData = (field, value) => {

        updateFormData(
            {
                ...formData,
                [field]: value,
            }
        );
    };

    return (
        <>
            <Button className="add-new-task" onClick={onToggleVisibilityModal}>
                Add New
            </Button>
            < Modal title="Добавить задачу"
                isOpen={isOpenModal}
                onCancel={onToggleVisibilityModal}>
                <TaskAddForm users={users}
                    formData={formData}
                    onUpdateFormData={onUpdateFormData}
                    onSubmit={addNewTaskHandler} />
            </Modal >
        </>
    );
});

export default AddNewTask;
