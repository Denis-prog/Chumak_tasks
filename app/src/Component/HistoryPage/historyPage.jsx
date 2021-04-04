import React from 'react';
import Header from './Header';
import Main from './Main';
import Page from '../Common/Page';
import withStyle from '../../HOC/withStyle';
import './historyPage.scss';

const HistoryPage = (props) => {
    return (
        <Page {...props} className="page-history" header={<Header />}
            main={< Main />} />
    );
};

export default withStyle(HistoryPage, 'page-history__main');
