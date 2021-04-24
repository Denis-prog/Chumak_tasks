class Comment {
    constructor(taskId, author, text) {
        this.taskId = taskId;
        this.author = author;
        this.text = text;
        this.date=Date.now();
    }
};

export default Comment;
