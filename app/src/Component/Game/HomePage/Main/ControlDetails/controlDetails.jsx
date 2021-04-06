import React from 'react';
import PropTypes from 'prop-types';
import List from '../../../../Common/List';
import Detail from '../../../../Common/Detail';
import { handlerActionCreators } from '../../../../../store/actionCreators';
import './controlDetails.scss';


const ControlDetails = (props) => {

    const { currentControlDetails, сontrolDetails, clns, dispatch } = props;

    if (!currentControlDetails) {
        return <p className="border">Действие не выбрано</p>;
    }

    const details = сontrolDetails.find((item) => item.type === currentControlDetails);
    const type = details.type;

    return (
        <List className="details-list border" cln={clns[0]} elements={details.elements} dispatch={dispatch}>
            {(item) => <Detail className={`detail_${type}`}
                title={item.title}
                item={item}
                onClick={() => dispatch(handlerActionCreators[type](item.id))} />}
        </List>
    )
};

ControlDetails.propTypes = {
    currentControlDetails: PropTypes.string,
    сontrolDetails: PropTypes.arrayOf(PropTypes.object),
    clns: PropTypes.arrayOf(PropTypes.string),
    dispatch: PropTypes.func,
};

export default ControlDetails;
