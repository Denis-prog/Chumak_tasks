class MessageService {

    constructor(commonRequest) {
        this.commonRequest = commonRequest;
    }

    getMessages = () => this.commonRequest.getResource('messages?_sort=timestamp&_order=desc')

    addMessage = (body) => this.commonRequest.addResource('messages', body)
};

export default MessageService;
