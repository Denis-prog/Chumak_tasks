import React from 'react';
import './overlay.scss';

const Overlay = (props) => {

    return (
        <div className="overlay">
            {props.children}
        </div>
    );
};

export default Overlay;
