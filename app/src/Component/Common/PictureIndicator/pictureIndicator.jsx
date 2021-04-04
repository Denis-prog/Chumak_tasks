import React from 'react';
import icon from './assets/ok.png';

const PictureIndicator = (props) => {
    const { mark, img } = props;

    return (
        <div className="picture-indicator">
            <img className="picture-indicator__img" src={mark === 100 ? `./assets/${img}` : icon} alt="" />
        </div>
    )
}

export default PictureIndicator;
