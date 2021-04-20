import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/660/',
});

const instanceAuth = axios.create({
    baseURL: 'http://localhost:3000/',
});


class Api {
    _getResource = (url, token) => new Promise((res, rej) => {
        instance.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(result => res(result.data))
            .catch(e => rej(e.response.status));
    })

    _addResource = (url, body, token) => new Promise((res, rej) => {
        instance.post(url, body, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(result => res(result.data))
            .catch(e => rej(e.response.status));
    })

    _updateResource = (url, body, token) => new Promise((res, rej) => {
        instance.patch(url, body, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(result => res(result.data))
            .catch(e => rej(e.response.status));
    })

    _deleteResource = (url, token) => new Promise((res, rej) => {
        instance.delete(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(result => res(result.data))
            .catch(e => rej(e.response.status));
    })

    authUser(email, password) {
        return instanceAuth.post('login', {
            email,
            password,
        })
            .then(response => {
                const token = response.data.accessToken;

                return this.getUsers(token)
                    .then((res) => {
                        const [currentUser] = res.filter((item => item.email === email));
                        const id = currentUser.id;

                        return { id, token }
                    })
                    .catch(e => { throw e })

            })
            .catch(e => { throw e.response.statusText })
    }

    getUsers = (token) => this._getResource('users', token)

    getTasks = (token) => this._getResource('tasks', token)
    addTask = (body, token) => this._addResource('tasks', body, token)
    updateTask = (id, body, token) => this._updateResource(`tasks/${id}`, body, token)
    deleteTask = (id, token) => this._deleteResource(`tasks/${id}`, token)

    getComments = (token) => this._getResource('comments', token)
    addComment = (body, token) => this._addResource('comments', body, token)

    getAllData = (token) => {
        return Promise.all([
            this.getTasks(token),
            this.getUsers(token),
            this.getComments(token),
        ])
            .then((response) => response);
    }


    /*  getUsers() {
         return instance.get('users')
             .then(response => { return response.data })
             .catch(e => { throw e })
     } */

    getTasks() {
        return instance.get('tasks')
            .then(response => { return response.data })
            .catch(e => { throw e })
    }
}

const api = new Api();

export default api;
