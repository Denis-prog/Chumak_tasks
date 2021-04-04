import React from 'react';
import { transformComand } from '../../../../helper';
import { handlerActionCreators } from '../../../../store/actionCreators';
import './comandLine.scss';

const ComandLine = (props) => {
    const { value, updateValue, сontrolDetails, dispatch } = props;

    const onSubmit = (e) => {
        e.preventDefault();
        const comands = transformComand(сontrolDetails, value);
        comands.forEach(item => {
            const { action, id } = item;
            dispatch(handlerActionCreators[action](id))
        });
    }

    return (
        <form onSubmit={onSubmit} action="#" className="comand-line">
            <input className="comand-line__field"
                type="text"
                placeholder="Insert your command..."
                value={value}
                onChange={({ target: { value } }) => updateValue(value)} />
        </form>
    );
};

export default ComandLine;
