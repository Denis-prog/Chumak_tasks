import React from 'react';
import List from '../../Common/List';

const HistoryList = (props) => {
    const { elements } = props;

    if (!elements.length) {
        return (
            <p className="border">История пуста</p>
        );
    }

    return (
        <List className="history-list, border" elements={elements}>
            {(item) => (
                <span>{item.title}</span>
            )}
        </List>
    );
};

export default HistoryList;
