import React from 'react';
import Form from '../Form'
import FormItem from '../FormItem';
import Button from '../../Button';
import cn from 'classnames';
import {
    requiredField,
    useValidation,
} from '../../../../validation';
import './authForm.scss';

const AuthForm = (props) => {
    const { className, formData, onUpdateFormData, onSubmit, isErrorAuthorization } = props;
    const classes = cn('auth-form', className);
    const validation = useValidation(formData, {
        email: [
            requiredField,
        ],
        password: [
            requiredField
        ]
    });

    return (
        <Form className={classes} onSubmit={onSubmit}>
            <FormItem className="auth-form__item">
                <label htmlFor="authFieldEmail" className="auth-form__item-label">Email:</label>
                <input id="authFieldEmail" type="email" value={formData['email']}
                    onChange={({ target: { value } }) => onUpdateFormData('email', value)} />
            </FormItem>
            <FormItem className="auth-form__item">
                <label htmlFor="authFieldPassword" className="auth-form__item-label">Password:</label>
                <input id="authFieldPassword" type="password" value={formData['password']}
                    onChange={({ target: { value } }) => onUpdateFormData('password', value)} />
            </FormItem>
            <Button disabled={validation.validate()} className="auth-form__submit">Войти</Button>
            {isErrorAuthorization && <p className="auth-form__error">ошибка аутентификации</p>}
        </Form>
    );
};

export default AuthForm;
