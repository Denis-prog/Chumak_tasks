
import React from 'react';
import HeaderMessageFromMe from './Header/HeaderMessageFromMe/';
import HeaderMessageFormAnother from './Header/HeaderMessageFromAnother';
import HeaderInner from './Header/HeaderInner';
import cn from 'classnames';
import './message.scss';

const Message = (props) => {

    const { currentUserId,
        message: { source, action, author, text, subject, sourceAuthor, timestamp },
        users
    } = props;

    const { firstName, lastName } = users.find((user) => user.id === author);

    const isMessageFromMe = currentUserId === author;

    const classesMessage = cn('message', {
        'message_own': isMessageFromMe,
    });

    const content = cn('message__content', {
        'message__content_own': isMessageFromMe,
    });

    const headerInner = (<HeaderInner source={source} action={action}
        subject={subject} currentUserId={currentUserId} author={author} sourceAuthor={sourceAuthor} />);

    return (
        <article className={classesMessage}>
            { isMessageFromMe ?
                <HeaderMessageFromMe timestamp={timestamp}>
                    {headerInner}
                </HeaderMessageFromMe>
                : <HeaderMessageFormAnother timestamp={timestamp} firstName={firstName} lastName={lastName}>
                    {headerInner}
                </HeaderMessageFormAnother>
            }
            <div className={content}>
                {text}
            </div>
        </article>
    );
};

export default Message;
