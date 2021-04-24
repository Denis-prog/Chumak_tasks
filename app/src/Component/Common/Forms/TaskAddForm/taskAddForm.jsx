import React from 'react';
import Select from '../../Select';
import FormItem from '../FormItem';
import './taskAddForm.scss';

const TaskForm = (props) => {
    const {
        users,
        formData,
        onUpdateFormData,
    } = props;

    const priorities = [{ value: 'minor', label: 'Minor' }, { value: 'normal', label: 'Normal' }, { value: 'critical', label: 'Critical' }];
    const possibleExecutors = users.map(({ id, firstName, lastName }) => ({ value: id, label: `${firstName} ${lastName}` }));

    return (
        <form action="#" method="post" className="task-form">
            <FormItem className="task-form__item">
                <label htmlFor="fieldDescription">Тема:</label>
                <textarea className="task-form__item-subject" id="fieldDescription" value={formData['subject']}
                    onChange={({ target: { value } }) => { onUpdateFormData('subject', value) }} />
            </FormItem>
            <FormItem className="task-form__item">
                <label htmlFor="fieldDescription">Описание:</label>
                <textarea className="task-form__item-content" id="fieldDescription" value={formData['text']}
                    onChange={({ target: { value } }) => { onUpdateFormData('text', value) }} />
            </FormItem>
            <FormItem className="task-form__item">
                <Select className="task-form__item-select"
                    label="Исполнитель"
                    value={formData['executor']}
                    setValue={(value) => { onUpdateFormData('executor', value) }}
                    optionsData={possibleExecutors}
                    size="4" />
            </FormItem>
            <FormItem className="task-form__item">
                <Select
                    label="Приоритет"
                    value={formData['priority']}
                    setValue={(value) => { onUpdateFormData('priority', value) }}
                    optionsData={priorities} />
            </FormItem>
        </form>
    );
};

export default TaskForm;


