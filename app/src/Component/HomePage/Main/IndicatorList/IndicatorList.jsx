import React from 'react';
import List from '../../../Common/List';
import Indicator from '../../../Common/Indicator';
import withStyle from '../../../../HOC/withStyle';
import './indicatorList.scss';

const IndicatorList = (props) => {
    const { state, indicators, cln } = props;

    return (
        <List className="indicator-list border" cln={cln} elements={indicators}>
            {(item) => <Indicator className={`indicator__progress_${item.type}`} state={state} label={item.label} type={item.type} />}
        </List>
    );
};

export default withStyle(IndicatorList, 'indicator-list__item');
