class MessageService {

    constructor(instance, commonRequest) {
        this.instance = instance;
        this.commonRequest = commonRequest;
    }

    getMessages = () => this.commonRequest.getResource('messages')

    addMessages = (body) => this.commonRequest.addResource('messages', body)
};

export default MessageService;
