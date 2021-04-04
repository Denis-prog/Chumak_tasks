import React from 'react';
import List from '../../../Common/List';
import PictureIndicator from '../../../Common/PictureIndicator';
import './picture-indicator-list.scss';

const PictureIndicatorList = (props) => {

    const { elements, state } = props;

    return (
        <List elements={elements} className="picture-indicator-list border">
            {(item) => <PictureIndicator mark={state[item.mark]} img={item.img} />}
        </List >
    )
};

export default PictureIndicatorList;
