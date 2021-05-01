const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const auth = require('json-server-auth');
var cors = require('cors');
var middlewares = jsonServer.defaults();
server.db = router.db;

server.use(function (req, res, next) {
    setTimeout(next, 1000);
});

server.use(cors());
server.use(auth);
server.use(middlewares);
server.use(function (req, res, next) {  //настройка запроса Delete для таски таким образом, чтобы в ответе присутствовала удаленная сущность
    const extractId = /\d+$/;
    const extractEntity = /(?<=\/)[^/]+(?=\/)/;

    if (req.method === 'DELETE') {
        const currentId = +extractId.exec(req.url)[0];
        const currentEntity = extractEntity.exec(req.url)[0];
        const entityList = router.db.get(currentEntity).valueOf();
        const entity = entityList.find(entity => entity.id === currentId);
        const newEntityList = entityList.filter((item) => item.id !== entity.id);
        const commentsList = router.db.get('comments').valueOf().filter((comment) => comment.taskId !== entity.id)
        router.db.set('tasks', newEntityList).write();
        router.db.set('comments', commentsList).write();
        return res.status(200).jsonp(entity);
    }
    next();
});
server.use(router);

server.listen(3001, function () {
    console.log('JSON Server is running')
})