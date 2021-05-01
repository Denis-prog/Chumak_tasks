import * as axios from 'axios';
import state from '../State';
import Message from '../Entity/Message';

import {
    CommonRequest,
    TodoService,
    UserService,
    CommentService,
    MessageService,
    AuthService,
} from './services';

class API {
    
    constructor(baseURL, authURL, registerUrl) {
        this.requestList = [];
        this.request = axios.create({
            baseURL,
        });
        this.authRequest = axios.create({
            baseURL: authURL,
        });
        this.registerRequest = axios.create({
            baseURL: registerUrl
        });

        this.setRegistrationInterceptors();
        this.setPreloadInterceptors();
        this.setTokenInterceptors();
        this.authHandlerIntercertors();
        this.setErrorInterceptors();
        this.setAddMessageInterceptors();
        this.setAllDataInterceptors();

        this.commonRequest = new CommonRequest(this.request);
        this.commonAuthRequest = new CommonRequest(this.authRequest);
        this.commonRegisterRequest = new CommonRequest(this.registerRequest);

        this.todo = new TodoService(this.commonRequest);
        this.user = new UserService(this.commonRequest, this.commonRegisterRequest);
        this.comment = new CommentService(this.commonRequest);
        this.message = new MessageService(this.commonRequest);
        this.auth = new AuthService(this.authRequest);
    }

    getAllData = () => {
        return Promise.all([
            this.todo.getTasks(),
            this.user.getUsers(),
            this.comment.getComments(),
            this.message.getMessages(),
        ])
            .then((response) => response)
            .catch((e) => { throw e });
    }

    authHandlerIntercertors() {
        this.authRequest.interceptors.request.use((config) => {
            state.setPreloader(true);
            return config;
        });
        this.authRequest.interceptors.response.use((response) => {
            state.setPreloader(false);
            return response;
        }, (error) => {
            state.setPreloader(false);
            state.setErrorAuth(true);
            return Promise.reject(error);
        });
    }

    setRegistrationInterceptors() {
        this.registerRequest.interceptors.request.use((config) => {
            state.setPreloader(true);
            return config;
        });
        this.registerRequest.interceptors.response.use(() => {
            state.setPreloader(false);
        }, (error) => {
            state.setPreloader(false);
            throw error;
        });
    }

    setTokenInterceptors() {
        this.request.interceptors.request.use((config) => {
            if (state.isAuth) {
                const { token } = state.userAuthData;
                config.headers = {
                    'Authorization': `Bearer ${token}`,
                }
            } else {
                delete config.headers.Authorization;
            }
            return config;
        });
    }

    setErrorInterceptors() {
        this.request.interceptors.response.use((response) => {
            return response;
        }, (error) => {

            if (401 === error.response.status) {
                state.clearAuthUserData();
                throw error;
            }
            if (error.url === 'login') {
                throw error;
            }

            state.setErrorIndicator(true);
            return Promise.reject(error);
        })
    }

    setPreloadInterceptors() {
        this.request.interceptors.request.use((config) => {
            this.requestList.push(config);
            state.setPreloader(true);
            return config;
        });
        this.request.interceptors.response.use((response) => {
            this.requestList.pop();
            state.setPreloader(!!this.requestList.length);
            return response;
        }, (error) => {
            this.requestList = [];
            state.setPreloader(false);
            throw error;
        });
    }

    historyHandler = (response) => {
        const [source] = response.config.url.split('/');
        const action = response.config.method;
        const entity = response.data;

        switch (source) {
            case 'comments': {
                const task = state.tasks.find((item) => item.id === entity.taskId);
                return new Message(source, action, state.authUserId, entity.text,
                    task.subject, task.author);
            }
            case 'tasks': {

                return new Message(source, action, state.authUserId, entity.text,
                    entity.subject, entity.author);
            }

            default: throw new Error('нет совпадений');
        }
    }

    setAllDataInterceptors() {
        this.request.interceptors.response.use((response) => {
            const method = response.config.method;

            if (method === 'post' || method === 'delete' || method === 'patch') {
                return this.getAllData()
                    .then((response) => response);
            }

            return response;
        }, (error) => {
            throw error;
        });
    }

    setAddMessageInterceptors() {
        this.request.interceptors.response.use(async (response) => {

            const method = response.config.method;

            if (method === 'post' || method === 'delete' || method === 'patch') {

                if (response.config.url !== 'messages') {

                    await this.message.addMessage(this.historyHandler(response))
                }
            }

            return response;
        }, (error) => {
            throw error;
        });
    }
}

const api = new API(
    'http://localhost:3000/660/',
    'http://localhost:3000/',
    'http://localhost:3000/');
export default api;
