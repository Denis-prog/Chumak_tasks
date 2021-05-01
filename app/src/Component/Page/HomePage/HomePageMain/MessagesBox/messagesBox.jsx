import { observer } from 'mobx-react';
import React from 'react';
import List from '../../../../Common/List';
import Message from '../../../../Common/Message';
import state from '../../../../../State';
import './messageBox.scss';

const MessagesBox = observer(() => {
    const { users, tasks, comments, messages, authUserId } = state;

    return (
        <List elements={messages} className="message-box" clnItem="message-box__item" label="Нет сообщений">
            {(message) => <Message users={users}
                tasks={tasks} comments={comments}
                message={message} currentUserId={authUserId} />}
        </List>
    )
});

export default MessagesBox;
