import React from 'react';
import PropTypes from 'prop-types';
import Control from '../Control';
import cn from 'classnames';
import './detail.scss';

const Detail = (props) => {
    const { title, className, onClick } = props;
    const classes = cn(className);

    return (
        <div className="detail">
            <Control onClick={onClick} className={classes}>
                {title}
            </Control>
        </div>
    )
};

Detail.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Detail;
