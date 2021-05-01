import React from 'react';

const HeaderInner = (props) => {
    const { source, action, subject, currentUserId, author, sourceAuthor } = props;

    switch (source) {
        case 'comments': {
            const commentIsOwnCurrentUser = author === currentUserId;
            const taskIsOwnCurrentUser = sourceAuthor === currentUserId;

            if (action === 'post') {
                return (
                    <>
                        {`${commentIsOwnCurrentUser ? 'You c' : 'C'}omment on
                                ${taskIsOwnCurrentUser ? 'your' : ''} `} task
                        < span className="message__header-subtitle-subject" > {subject}</span >
                    </>);
            }
            break;
        }
        case 'tasks': {
            const commentIsOwnCurrentUser = author === currentUserId;
            const taskIsOwnCurrentUser = sourceAuthor === currentUserId;

            if (action === 'delete') {
                return (
                    <>
                        {`${commentIsOwnCurrentUser ? 'You d' : 'D'}elete
                     ${taskIsOwnCurrentUser ? 'your' : ''} `} task
                         < span className="message__header-subtitle-subject" > {subject}</span >
                    </>);
            }

            if (action === 'post') {
                return (
                    <>
                        {`${commentIsOwnCurrentUser ? 'You a' : 'A'}dd`} task
                        < span className="message__header-subtitle-subject" > {subject}</span >
                    </>);
            }

            if (action === 'patch') {
                return (
                    <>
                        {`${commentIsOwnCurrentUser ? 'You u' : 'U'}pdate
                     ${taskIsOwnCurrentUser ? 'your' : ''} `} task
                        < span className="message__header-subtitle-subject" > {subject}</span >
                    </>);
            }

            break;
        }

        default: {
            return null;
        }
    }
};

export default HeaderInner;