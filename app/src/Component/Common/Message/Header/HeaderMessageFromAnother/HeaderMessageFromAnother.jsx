import React from 'react';
import Avatar from '../../../Avatar';
import MessageTime from '../../MessageTime';

const MessageHeader = (props) => {
    const { timestamp, firstName, lastName, children } = props;

    return (
        <header className="message__header">
            < Avatar className="message__header-avatar" type={'message'} />
            <div className="message__header-description">
                <p className="message__header-description-top">
                    <span className="message__header-description-author">
                        {`${firstName} ${lastName}`}
                    </span>
                    <MessageTime timestamp={timestamp} />
                </p>
                <span className="message__header-title message__header-title_own">
                    {children}
                </span>
            </div>
        </header >
    );
};

export default MessageHeader;
