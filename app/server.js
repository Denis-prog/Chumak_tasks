const jsonServer = require('json-server')
const cloneDeep = require("lodash.clonedeep");
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const auth = require('json-server-auth')
var cors = require('cors');
var middlewares = jsonServer.defaults()
server.db = router.db
server.use(cors())

let clonedTasks = [];

const tasksCloner = (req, res, next) => {
    clonedTasks = cloneDeep(router.db.get("tasks").valueOf());
    next();
};
server.use(tasksCloner)
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST' && req.url === '/660/comments') {
        const { taskId, author } = req.body;

        const comments = router.db.get("comments").valueOf();
        const commentId = comments[comments.length - 1].id + 1;

        const tasks = clonedTasks.map((task) => {
            if (task.id === taskId) {
                task.commentators = [...task.commentators, author];
                task.comments = [...task.comments, commentId];
            }

            return task;
        });

        router.db.set("tasks", tasks).write();
    }
    next()
})


server.use(auth)
server.use(middlewares)
server.use(router)

server.listen(3000, function () {
    console.log('JSON Server is running')
})