import { observer } from 'mobx-react';
import React from 'react';
import List from '../../../Common/List';
import Message from '../../../Common/Message';
import state from '../../../../State';
import './messageBox.scss';

const MessagesBox = observer(() => {
    const { users, tasks, comments, messages, currentUserInfo } = state;

    return (
        <List elements={messages} className="message-box" clnItem="message-box__item">
            {(message) => <Message users={users}
                tasks={tasks} comments={comments}
                message={message} currentUser={currentUserInfo} />}
        </List>
    )
});

export default MessagesBox;
