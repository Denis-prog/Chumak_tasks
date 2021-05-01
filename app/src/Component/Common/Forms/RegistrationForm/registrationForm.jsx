import React, { useState } from 'react';
import Form from '../Form';
import FormItem from '../FormItem';
import Input from '../Fields/Input';
import Label from '../Fields/Label';
import Button from '../../Button';
import cn from 'classnames';
import {
    useValidation,
    minLengthValue,
    requiredField,
    matchRegExp,
} from '../../../../validation';
import './registrationForm.scss';

const RegistrationForm = (props) => {
    const [validateResult, setValidateResult] = useState({});
    const { className, formData, onUpdateFormData, onSubmit, errorSubmitForm, setErrorSubmitForm } = props;
    const classesForm = cn('reg-form', className);
    const validation = useValidation(formData, {
        email: [
            requiredField,
            matchRegExp(/^.{3,}@.+\..{2,}$/i, 'email должен быть вида: example.mail.ru'),
        ],
        firstName: [
            requiredField,
            minLengthValue(3),
        ],
        lastName: [
            requiredField,
            minLengthValue(3),
        ],
        password: [
            requiredField,
            matchRegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/,
                'пароль должен содержать не менее 6 символов. (заглавные, строчные латинские буквы, цифры)'),
        ],
    });

    const onSubmitHandler = () => {
        const validationResult = validation.validate();
        if (validationResult) {
            setValidateResult(validation.validate());
            return
        }
        onSubmit();
    }

    const onBlur = (e) => {
        const nameInput = e.target.name;
        if (errorSubmitForm) {
            setErrorSubmitForm({});
        }

        if (nameInput && validateResult[nameInput]) {
            setValidateResult({
                ...validateResult,
                [nameInput]: null
            });
        }
    }

    return (
        <Form className={classesForm} onSubmit={onSubmitHandler}>
            <FormItem className="reg-form__item">
                <Label inputId="reg-form-email" label="Email:" />
                <Input inputId="reg-form-email"
                    name="email"
                    onBlur={onBlur}
                    value={formData['email']}
                    validationResult={validateResult['email']}
                    updateData={(value) => { onUpdateFormData('email', value) }}
                />
            </FormItem >
            <FormItem className="reg-form__item">
                <Label inputId="reg-form-first-name" label="FirstName:" />
                <Input inputId="reg-form-first-name"
                    name="firstName"
                    onBlur={onBlur}
                    value={formData['firstName']}
                    validationResult={validateResult['firstName']}
                    updateData={(value) => { onUpdateFormData('firstName', value) }}
                />
            </FormItem>
            <FormItem className="reg-form__item">
                <Label inputId="reg-form-last-name" label="LastName:" />
                <Input inputId="reg-form-last-name"
                    name="lastName"
                    onBlur={onBlur}
                    value={formData['lastName']}
                    validationResult={validateResult['lastName']}
                    updateData={(value) => { onUpdateFormData('lastName', value) }}
                />
            </FormItem>
            <FormItem className="reg-form__item">
                <Label inputId="reg-form-password" label="Password:" />
                <Input inputId="reg-form-password" type="password"
                    name="password"
                    onBlur={onBlur}
                    value={formData['password']}
                    validationResult={validateResult['password']}
                    updateData={(value) => { onUpdateFormData('password', value) }}
                />
            </FormItem>
            <FormItem className="reg-form__item reg-form__item-radio-box">
                <p className="reg-form__item-radio-box-title">Select your profile icon:</p>
                <p className="reg-form__item-radio-box-content">

                    <Input className="reg-form__item-radio" inputId="iconChoice1" type="radio" name="icon"
                        value={formData['icon']} defaultValue="icon_user_1.svg"
                        updateData={(value) => { onUpdateFormData('icon', value) }} />
                    <Label inputId="iconChoice1" ariaLabel="user icon"
                        className="reg-form__item-radio-label reg-form__item-radio-label_first" />

                    <Input className="reg-form__item-radio" inputId="iconChoice2" type="radio" name="icon"
                        value={formData['icon']} defaultValue="icon_user_2.svg"
                        updateData={(value) => { onUpdateFormData('icon', value) }} />
                    <Label inputId="iconChoice2" ariaLabel="user icon"
                        className="reg-form__item-radio-label reg-form__item-radio-label_second" />

                    <Input className="reg-form__item-radio" inputId="iconChoice3" type="radio" name="icon"
                        value={formData['icon']} defaultValue="icon_user_3.svg"
                        updateData={(value) => { onUpdateFormData('icon', value) }} />
                    <Label inputId="iconChoice3" ariaLabel="user icon"
                        className="reg-form__item-radio-label reg-form__item-radio-label_third" />

                    <Input className="reg-form__item-radio" inputId="iconChoice4" type="radio" name="icon"
                        value={formData['icon']} defaultValue="icon_user_4.svg"
                        updateData={(value) => { onUpdateFormData('icon', value) }} />
                    <Label inputId="iconChoice4" ariaLabel="user icon"
                        className="reg-form__item-radio-label reg-form__item-radio-label_fourth" />

                </p>
            </FormItem>

            <Button className="reg-form__btn-submit">
                Добавить пользователя
            </Button>

            {errorSubmitForm.error && <p className="reg-form__error-submit">{errorSubmitForm.message || 'ошибка регистрации'}</p>}
        </Form >
    );
};


export default RegistrationForm;
