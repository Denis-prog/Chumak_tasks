import React from 'react';
import Select from '../../Select';
import FormItem from '../FormItem';
import Form from '../Form';
import Button from '../../Button'
import {
    useValidation,
    requiredField,
    minLengthValue,
} from '../../../../validation';
import './taskAddForm.scss';

const TaskAddForm = (props) => {
    const {
        users,
        formData,
        onUpdateFormData,
        onSubmit,
    } = props;

    const validation = useValidation(formData, {
        subject: [
            requiredField,
            minLengthValue(3),
        ],
        text: [
            requiredField,
            minLengthValue(6),
        ],
        executor: [
            requiredField,
        ]
    });

    const priorities = [{ value: 'minor', label: 'Minor' }, { value: 'normal', label: 'Normal' }, { value: 'critical', label: 'Critical' }];
    const possibleExecutors = users.map(({ id, firstName, lastName }) => ({ value: id, label: `${firstName} ${lastName}` }));

    return (
        <Form className="task-form">
            <FormItem className="task-form__item">
                <label htmlFor="fieldDescription" className="task-form__item-label">
                    Тема: <span className="task-form__item-label-limitation">не менее 3 символов</span>
                </label>
                <textarea className="task-form__item-subject" id="fieldDescription" value={formData['subject']}
                    onChange={({ target: { value } }) => { onUpdateFormData('subject', value) }} />
            </FormItem>
            <FormItem className="task-form__item">
                <label htmlFor="fieldDescription" className="task-form__item-label">
                    Описание: <span className="task-form__item-label-limitation">не менее 6 символов</span>
                    </label>
                <textarea className="task-form__item-content" id="fieldDescription" value={formData['text']}
                    onChange={({ target: { value } }) => { onUpdateFormData('text', value) }} />
            </FormItem>
            <FormItem className="task-form__item">
                <Select className="task-form__item-select"
                    label="Исполнитель"
                    value={formData['executor']}
                    setValue={(value) => { onUpdateFormData('executor', value) }}
                    optionsData={possibleExecutors}
                    isRequired
                    size="4" />
            </FormItem>
            <FormItem className="task-form__item">
                <Select
                    label="Приоритет"
                    value={formData['priority']}
                    setValue={(value) => { onUpdateFormData('priority', value) }}
                    optionsData={priorities} />
            </FormItem>
            <Button disabled={!!validation.validate()} onClick={onSubmit} className="task-form__btn-submit">
                Добавить
            </Button>
        </Form>
    );
};

export default TaskAddForm;


