class CommentService {

    constructor(commonRequest) {
        this.commonRequest = commonRequest;
    }

    getComments = () => this.commonRequest.getResource('comments')
    addComment = (body) => this.commonRequest.addResource('comments', body)
};

export default CommentService;
