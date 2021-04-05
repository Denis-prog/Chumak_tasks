import React from 'react';
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

export default IndicatorList;
