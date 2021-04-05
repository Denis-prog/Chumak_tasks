import React from 'react';
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
}

export default ControlList;
