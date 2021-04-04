import React from 'react';
import { useStore } from '../../../../context';
import ControlDetails from './controlDetails';
import withStyle from '../../../../HOC/withStyle';

const ControlDetailsContainer = (props) => {
    const { state, dispatch } = useStore();
    const { currentControlDetails, сontrolDetails } = state;
    
    return (
        <ControlDetails state={state}
            currentControlDetails={currentControlDetails}
            dispatch={dispatch} {...props} сontrolDetails={сontrolDetails} />
    )

};

export default withStyle(ControlDetailsContainer, 'details-list__item');
