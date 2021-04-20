import React from 'react';
import './select.scss';
import cn from 'classnames';

const Select = (props) => {
    const { label, value, setValue, optionsData, className, size } = props;

    const options = optionsData.map(({ label, value }, index) => (
        <option key={index} value={value}>{label}</option>
    ));

    const classes = cn('select-field', className);

    return (
        <>
            <label htmlFor="fieldDescription">{label}:</label>
            <select className={classes} size={size || 0} name="executor"
                value={value}
                onChange={(({ target: { value } }) => setValue(value))}>
                <option value='' disabled>{label}</option>
                {options}
            </select>
        </>
    );
};

export default Select;
