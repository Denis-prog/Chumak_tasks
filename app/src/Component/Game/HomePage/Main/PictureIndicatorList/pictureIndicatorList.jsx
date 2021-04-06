import React from 'react';
import PropTypes from 'prop-types';
import List from '../../../../Common/List';
import PictureIndicator from '../../../../Common/PictureIndicator';
import './picture-indicator-list.scss';

const PictureIndicatorList = (props) => {

    const { elements, state, clns } = props;

    return (
        <List elements={elements} cln={clns[0]} className="picture-indicator-list border">
            {(item) => <PictureIndicator mark={state[item.mark]} img={item.img} />}
        </List >
    )
};

PictureIndicatorList.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object),
    state: PropTypes.object,
    clns: PropTypes.arrayOf(PropTypes.string),
};

export default PictureIndicatorList;
