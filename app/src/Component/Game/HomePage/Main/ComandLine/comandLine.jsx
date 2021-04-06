import React from 'react';
import PropTypes from 'prop-types';
import { transformComand } from '../../../../../helper';
import { handlerActionCreators, saveWrongComandAC } from '../../../../../store/actionCreators';
import './comandLine.scss';

const ComandLine = (props) => {
    const { value, updateValue, сontrolDetails, dispatch } = props;

    const onSubmit = (e) => {
        e.preventDefault();

        if (!value.trim()) {
            updateValue('');
            return;
        }

        const comands = transformComand(сontrolDetails, value);

        comands.forEach(item => {
            const { action, id, isError } = item;

            if (isError) {
                dispatch(saveWrongComandAC(action));
                return;
            }

            dispatch(handlerActionCreators[action](id))
        });

        updateValue('');
    }

    return (
        <form onSubmit={onSubmit} action="#" className="comand-line">
            <input className="comand-line__field"
                type="text"
                placeholder="например, eсть колбаса, заниматься спортом бег"
                value={value}
                onChange={({ target: { value } }) => updateValue(value)} />
        </form>
    );
};

ComandLine.propTypes = {
    value: PropTypes.string,
    updateValue: PropTypes.func,
    сontrolDetails: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func,
};

export default ComandLine;
