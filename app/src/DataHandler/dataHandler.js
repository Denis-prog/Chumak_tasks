import api from '../Api';

class DataHandler {

    getAllData = () => {
        Promise.all([
            api.getTasks,
            api.getUsers,
            api.getComments,
        ])
            .then(([tasks, users, comments]) => {

            })
    }
}