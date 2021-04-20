import React from 'react';
import Select from '../Select';
import './taskAddForm.scss';

const TaskForm = (props) => {

    const {
        users,
        userId,
        text,
        setText,
        executor,
        setExecutor,
        priority,
        setPriority,
    } = props;

    const priorities = [{ value: 'minor', label: 'Minor' }, { value: 'normal', label: 'Normal' }, { value: 'critical', label: 'Critical' }];
    const possibleExecutors = users.filter((item) => item.id !== userId).map(({ id, firstName, lastName }) => ({value:id, label: `${firstName} ${lastName}` }));

    return (
        <form action="#" method="post" className="task-form">
            <p className="task-form__item">
                <label htmlFor="fieldDescription">Описание:</label>
                <textarea className="task-form__item-text-area" id="fieldDescription" value={text} onChange={({ target: { value } }) => { setText(value) }} />
            </p>

            <p className="task-form__item">
                <Select className="task-form__item-select"
                    label="Исполнитель"
                    value={executor}
                    setValue={setExecutor}
                    optionsData={possibleExecutors}
                    size="4" />
            </p>

            <p className="task-form__item">
                <Select label="Приоритет"
                    value={priority}
                    setValue={setPriority}
                    optionsData={priorities} />
            </p>
        </form>
    );
};

export default TaskForm;


