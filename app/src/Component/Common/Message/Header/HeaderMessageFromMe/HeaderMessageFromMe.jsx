import React from 'react';
import MessageTime from '../../MessageTime';

const HeaderMessageFromMe = (props) => {
    const { timestamp, children } = props;

    return (
        <header className="message__header message__header_own">
            <span className="message__header-title message__header-title_own">
                {children}
            </span>
            <MessageTime timestamp={timestamp} />
        </header >
    );
};

export default HeaderMessageFromMe;
