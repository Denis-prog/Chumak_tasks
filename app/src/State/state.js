import { makeAutoObservable, action } from "mobx"
import api from '../Api';
import {
    setAuthUser as setAuthUserToLocaleStorage,
    getAuthUser as getAuthUserFromLocaleStorage,
    clearAuthUser as clearAuthUserFromLocaleStorage,
} from '../Helper';

class State {

    constructor() {
        makeAutoObservable(this)
    }

    isAuth = false;
    userAuthData = null;
    isErrorAuthorization = false;
    isFetching = false;
    isError = false;
    filter = '';
    tasks = [];
    users = [];
    comments = [];


    getSavedUserData = () => {
        const user = getAuthUserFromLocaleStorage();

        if (user) {
            this.isAuth = true;
            this.userAuthData = user;
        }
    }

    setAuthUserData = (response) => {
        setAuthUserToLocaleStorage(response);
        this.isAuth = true;
        this.userAuthData = response;
    }

    setErrorAuthorization = (isError) => {
        this.isErrorAuthorization = isError;
    }

    setPreloader = (isFetching) => {
        this.isFetching = isFetching;
    }

    setErrorIndicator = (isError) => {
        this.isError = isError;
    }

    clearAuthUserData = () => {
        clearAuthUserFromLocaleStorage();
        this.isAuth = false;
        this.userAuthData = null;
    }

    setFilter = (searchText) => {
        this.filter = searchText.trim();
    }

    authUser = (email, password) => {
        api.auth.authUser(email, password)
            .then(
                action('succes', (response) => {
                    this.setAuthUserData(response)
                }))
            .catch(action('error', e => { console.dir(e); }))
    }

    logOutUser = () => {
        this.isAuth = false;
        this.userAuthData = null;
        clearAuthUserFromLocaleStorage();
    }

    setAllData = () => {
        api.getAllData()
            .then(
                action('succes', (response) => {
                    this.updateAllData(response);
                })
            );
    }

    updateAllData([tasks, users, comments, messages]) {
        this.tasks = tasks;
        this.users = users;
        this.comments = comments;
        this.messages = messages;
    }

    addNewTask = (task) => {
        api.todo.addTask(task)
            .then(
                action('succes', (response) => {
                    this.updateAllData(response);
                })
            );
    }

    deleteTask = (id) => {
        api.todo.deleteTask(id)
            .then(
                action('succes', (response) => {
                    this.updateAllData(response);
                })
            );
    }

    updateTask = (id, body) => {
        api.todo.updateTask(id, body)
            .then(
                action('succes', (response) => {
                    this.updateAllData(response);
                })
            );
    }

    addNewComment = (comment) => {
        api.comment.addComment(comment)
            .then(
                action('succes', (response) => {
                    this.updateAllData(response);
                })
            );
    }

    get authUserId() {
        return this.userAuthData.id;
    }

    get currentUserInfo() {
        return this.users.find((user) => user.id === this.authUserId)
    }

    get currentTasks() {
        if (!!this.filter) {
            return this.tasks.filter((task) => task.text.indexOf(this.filter) !== -1);
        }

        return this.tasks;
    }

    get activeTasks() {
        return this.currentTasks.filter(item => item.status !== 'completed' && item.status !== 'canceled');
    }

    get countActiveTasks() {
        return this.activeTasks.length;
    }

    get inActiveTasks() {
        return this.currentTasks.filter(item => item.status === 'completed' || item.status === 'canceled');
    }
}

const state = new State();

export default state;
