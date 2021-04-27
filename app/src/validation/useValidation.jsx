import React from 'react';

export const minLengthValue = (min) => (value) => {

    let isErrorValidate = false;
    let message = '';

    if (value.trim().length < min) {
        isErrorValidate = true;
        const wordFloor = (min % 10 === 1 && min % 100 !== 11) ? ''
            : ((min % 10 > 1 && min % 10 < 5) && min % 100 < 10) ? 'а' : 'ов';

        message = `мин длина ${min} символ${wordFloor}`
    }

    return {
        isErrorValidate,
        message,
    }
};

export const requiredField = (value) => {
    let isErrorValidate = false;
    let message = '';

    // == позволяет исключить и null и undefined засчет приведения типов
    // eslint-disable-next-line 
    if (value == undefined || !value.trim().length) {
        isErrorValidate = true;
        message = 'поле не должно быть пустым';
    }

    return {
        isErrorValidate,
        message,
    }
}

export function useValidation(data, rules) {
    const results = Object.keys(rules).reduce((result, key) => {
        result[key] = rules[key].map((rule) => rule(data[key]));
        return result;
    }, {});

    const validate = () => {
        let firstErrors = null;

        Object.keys(rules).forEach((key) => {
            const error = results[key].find((result) => result.isErrorValidate);
            if (error) {
                if(!firstErrors) {firstErrors={}}
                firstErrors[key] = error;
            }
        });

        return firstErrors;
    }

    return {
        validationResult: results,
        validate,
    }
};
