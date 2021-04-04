import React from 'react';
import { useStore } from '../../../../context';
import PictureIndicatorList from './pictureIndicatorList'


const PictureIndicatorListContainer = (props) => {
    const { state } = useStore();
    const elements = [{ id: 1, mark: 'thirst', img: 'water.png' }, { id: 2, mark: 'hunger', img: 'dish.png' }, { id: 3, mark: 'fatigue', img: 'bed.png' }];

    return (
        <PictureIndicatorList state={state} elements={elements} {...props} />
    )
};

export default PictureIndicatorListContainer;
