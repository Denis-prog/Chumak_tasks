import axios from 'axios';
import state from '../State';

import {
    CommonRequest,
    TodoService,
    UserService,
    CommentService,
    MessageService,
    AuthService,
} from './services';

class API {
    constructor(baseURL, authURL) {
        this.requestList = [];
        this.request = axios.create({
            baseURL,
        });
        this.authRequest = axios.create({
            baseURL: authURL,
        });

        this.setTokenInterceptors();
        this.authHandlerIntercertors();
        this.setPreloadInterceptors();
        this.setErrorInterceptors();
        this.setUpdate();

        this.commonRequest = new CommonRequest(this.request);
        this.todo = new TodoService(this.request, this.commonRequest);
        this.user = new UserService(this.request, this.commonRequest);
        this.comment = new CommentService(this.request, this.commonRequest);
        this.message = new MessageService(this.request, this.commonRequest);
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
            state.setErrorAuthorization(true);
            return Promise.reject(error);
        })
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

    setUpdate() {
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
}

const api = new API('http://localhost:3000/660/', 'http://localhost:3000/');
export default api;
