import React from 'react';
import Avatar from '../Avatar';
import {convertTimeToString} from '../../../Helper';
import cn from 'classnames';
import './message.scss';

const Message = (props) => {

    const { currentUser: { id: currentUserId },
        message: { source, action, author, text, subject, sourceAuthor, timestamp },
        users
    } = props;

    const { firstName, lastName } = users.find((user) => user.id === author);

    const isMessageFromMe = currentUserId === author;

    const classesMessage = cn('message', {
        'message_own': isMessageFromMe,
    });
    const classesHeader = cn('message__header', {
        'message__header_own': isMessageFromMe,
    });
    const classesHeaderDescription = cn('message__header-description', {
        'message__header-description_own': isMessageFromMe,
    });
    const classesHeaderDescriptionTitle = cn('message__header-description-title', {
        'message__header-description-title_own': isMessageFromMe,
    });
    const content = cn('message__content', {
        'message__content_own': isMessageFromMe,
    });

    const handler = () => {

        const createSubtitle = () => {
            switch (source) {
                case 'comments': {
                    const commentIsOwnCurrentUser = author === currentUserId;
                    const taskIsOwnCurrentUser = sourceAuthor === currentUserId;

                    if (action === 'post') {
                        return (
                            <span className={classesHeaderDescriptionTitle}>
                                {`${commentIsOwnCurrentUser ? 'You c' : 'C'}omment on
                                    ${taskIsOwnCurrentUser ? 'your' : ''} `} task
                                <span className="message__header-description-subtitle-subject"> {subject}</span>
                            </span>);
                    }

                    break;
                }
                case 'tasks': {
                    const commentIsOwnCurrentUser = author === currentUserId;
                    const taskIsOwnCurrentUser = sourceAuthor === currentUserId;

                    if (action === 'delete') {
                        return (
                            <span className={classesHeaderDescriptionTitle}>
                                {`${commentIsOwnCurrentUser ? 'You d' : 'D'}elete
                         ${taskIsOwnCurrentUser ? 'your' : ''} `} task
                                <span className="message__header-description-subtitle-subject"> {subject}</span>
                            </span>);
                    }

                    if (action === 'post') {
                        return (<span className={classesHeaderDescriptionTitle}>
                            {`${commentIsOwnCurrentUser ? 'You a' : 'A'}dd`} task
                            <span className="message__header-description-subtitle-subject"> {subject}</span>
                        </span>);
                    }

                    if (action === 'patch') {
                        return (<span className={classesHeaderDescriptionTitle}>
                            {`${commentIsOwnCurrentUser ? 'You u' : 'U'}pdate
                         ${taskIsOwnCurrentUser ? 'your' : ''} `} task
                            <span className="message__header-description-subtitle-subject"> {subject}</span>
                        </span>);
                    }

                    break;
                }
                default: {
                    return '';
                }
            }
        }

        return (
            <article className={classesMessage}>
                <header className={classesHeader}>
                    {!isMessageFromMe && < Avatar className="message__header-avatar" type={'message'} />}
                    {isMessageFromMe && createSubtitle()}
                    <div className={classesHeaderDescription}>
                        <p className="message__header-description-top">
                            {!isMessageFromMe && <span className="message__header-description-author">
                                {`${firstName} ${lastName}`}
                            </span>}
                            <span className="message__header-description-date">
                                {isMessageNew && '- Just Now'}
                                {isMessageOld && 'more than one day ago'}
                                {(!isMessageNew && !isMessageOld) &&
                                    `${timePassed} ago`
                                }
                            </span>
                        </p>

                        {!isMessageFromMe && createSubtitle()}
                    </div>
                </header>
                <div className={content}>
                    {text}
                </div>
            </article>
        );
    }

    const timeDiff = Date.now()-timestamp;
    const isMessageOld = (timeDiff) / 1000 > 86400; // 1сутки
    const isMessageNew = (timeDiff) / 1000 < 60;  //менее минуты
    const timePassed = convertTimeToString(timeDiff);

    return (
        <>
            { handler()}
        </>
    );

};

export default Message;
