class Message {

    constructor(source, action, author, text, subject, sourceAuthor) {
        this.source = source;
        this.action = action;
        this.text = text;
        this.author = author;
        this.subject = subject;
        this.sourceAuthor = sourceAuthor;
        this.timestamp = Date.now();
    }
}

export default Message;
