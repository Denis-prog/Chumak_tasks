import React from 'react';
import PropTypes from 'prop-types';
import List from '../../../../Common/List';
import './historyList.scss';

const HistoryList = (props) => {
    const { elements, clns } = props;

    if (!elements.length) {
        return (
            <p className="border">История пуста</p>
        );
    }

    return (
        <List className="history-list border" cln={clns[0]} elements={elements}>
            {(item) => (
                <span className={`history-list__item-comand_${item.isError ? 'error' : 'succes'}`}>{item.title}</span>
            )}
        </List>
    );
};

HistoryList.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object),
    clns: PropTypes.arrayOf(PropTypes.string),
};

export default HistoryList;
