import React from 'react';
import PropTypes from 'prop-types';
import List from '../../../../Common/List';
import Indicator from '../../../../Common/Indicator';
import './indicatorList.scss';

const IndicatorList = (props) => {
    const { state, indicators, clns } = props;

    return (
        <List className="indicator-list border" cln={clns[0]} elements={indicators}>
            {(item) => <Indicator className={`indicator__progress_${item.type}`} state={state} label={item.label} type={item.type} />}
        </List>
    );
};

IndicatorList.propTypes = {
    state: PropTypes.object,
    indicators: PropTypes.arrayOf(PropTypes.object),
    clns: PropTypes.arrayOf(PropTypes.string),
};

export default IndicatorList;
