import React from 'react';
import PropTypes from 'prop-types';
import List from '../../../../Common/List';
import Control from '../../../../Common/Control';
import { showControldetailsAC } from '../../../../../store/actionCreators';
import './controlList.scss';

const ControlList = (props) => {
    const { controls, dispatch, clns } = props;

    return (
        <List className="control-list border" cln={clns[0]} elements={controls}>
            {(item) => (
                <Control className={`control_${item.type}`} onClick={() => { dispatch(showControldetailsAC(item.type)) }}>
                    {item.title}
                </Control>)}
        </List>
    );
};

ControlList.propTypes = {
    controls: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func,
    clns: PropTypes.arrayOf(PropTypes.string),
};

export default ControlList;
