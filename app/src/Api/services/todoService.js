class TodoService {

    constructor(commonRequest) {
        this.commonRequest = commonRequest;
    }

    getTasks = () => this.commonRequest.getResource('tasks?_sort=timestamp&_order=desc')

    addTask = (body) => this.commonRequest.addResource('tasks', body)

    updateTask = (id, body) => this.commonRequest.updateResource(`tasks/${id}`, body)

    deleteTask = (id) => this.commonRequest.deleteResource(`tasks/${id}`)
};

export default TodoService;
