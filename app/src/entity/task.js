class Task {

    constructor({ author, executor, text, subject,
        priority, status = 'pending' }) {
        this.author = author;
        this.executor = Number(executor);
        this.text = text.trim();
        this.subject = subject;
        this.priority = !!priority ? priority : 'normal';
        this.timestamp = Date.now();
        this.status = status;
    }
}

export default Task;
