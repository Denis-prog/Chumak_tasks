import React, { useState, Children } from 'react';
import Modal from '../Modal';
import TaskForm from '../TaskFormAdd';

const ActionOnTask = (props) => {
    const {
        modalOptions,
        action,
        users,
        author,
    } = props;

    const { title, labelBtn } = modalOptions;

    const [isOpenModal, toggleVisibilityModal] = useState(false);
    const [text, setText] = useState('');
    const [executor, setExecutor] = useState('');
    const [priority, setPriority] = useState('');

    const onToggleVisibilityModal = () => {
        toggleVisibilityModal((prevCount) => !prevCount);
        setText('');
        setExecutor('');
        setPriority('');
    };

    const onAction = (e) => {
        e.preventDefault();
        action({text, executor, priority});
    }

    return (
        <>
            {Children.map(props.children, (child) => {
                return React.cloneElement(child, { onClick: onToggleVisibilityModal })
            })}
            < Modal title={title}
                buttonLabel={labelBtn}
                isOpen={isOpenModal}
                onCancel={onToggleVisibilityModal}
                onSubmit={onAction}>
                <TaskForm users={users}
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

}

export default ActionOnTask;
