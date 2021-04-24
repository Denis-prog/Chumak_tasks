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
server.use(router);


server.listen(3000, function () {
    console.log('JSON Server is running')
})