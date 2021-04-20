class Task {

    constructor({ author, executor, text,
        priority, commentators = [], comments = [],
        status = 'pending', date = Date.now() }) {

        this.author = author;
        this.executor = Number(executor);
        this.text = text.trim();
        this.priority = !!priority ? priority : 'normal';
        this.data = date;
        this.status = status;
        this.commentators = commentators;
        this.comments = comments;
    }
}

export default Task;
