import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RegistrationFrom from '../../Common/Forms/RegistrationForm';
import state from '../../../State';
import { User } from '../../../Entity';
import { observer } from 'mobx-react';
import './registrationPage.scss';

const RegistrationPage = observer(() => {
    const [errorSubmitForm, setErrorSubmitForm] = useState({ error: false, message: '' });
    const history = useHistory();
    const [formData, updateFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        icon: 'icon_user_1.svg'
    });
    const { addUser } = state;
    const onUpdateFormData = (field, value) => {
        updateFormData({
            ...formData,
            [field]: value
        })
    };

    const onSubmit = () => {
        const newUser = new User(formData);
        addUser(newUser).then(() => {
            history.push('/auth');
        }).catch(e => {
            setErrorSubmitForm({
                error: true,
                message: e.response && e.response.data,
            })
        })
    };
/* 
    useEffect(() => {
        if (errorSubmitForm.error) {
            setErrorSubmitForm({});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]); */

    return (
        <main className="registration-page">
            <RegistrationFrom errorSubmitForm={errorSubmitForm} setErrorSubmitForm={setErrorSubmitForm}
                onSubmit={onSubmit} formData={formData} onUpdateFormData={onUpdateFormData} />
        </main>
    );
});

export default RegistrationPage;
