import React from 'react';
import PropTypes from 'prop-types';
import icon from './assets/ok.png';
import './pictureIndicator.scss';

const PictureIndicator = (props) => {
    const { mark, img } = props;

    return (
        <div className="picture-indicator">
            <img className="picture-indicator__img" src={mark === 100 ? `./assets/${img}` : icon} alt="" />
        </div>
    )
};

PictureIndicator.propTypes = {
    mark: PropTypes.number,
    img: PropTypes.string,
};

export default PictureIndicator;
