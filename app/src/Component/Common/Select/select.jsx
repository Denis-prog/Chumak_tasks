import React from 'react';
import './select.scss';
import cn from 'classnames';

const Select = (props) => {
    const { label, value, setValue, optionsData, className, size, isRequired } = props;

    const options = optionsData.map(({ label, value }, index) => (
        <option key={index} value={value}>{label}</option>
    ));

    const classesSelect = cn('select-field', className);
    const classesLabel = cn('select-label', {
        'select-label_required': isRequired,
    })

    return (
        <>
            <label htmlFor="fieldDescription" className={classesLabel}>{label}:</label>
            <select className={classesSelect} size={size || 0} name="executor"
                value={value}
                onChange={(({ target: { value } }) => setValue(value))}>
                <option value='' disabled>{label}</option>
                {options}
            </select>
        </>
    );
};

export default Select;
