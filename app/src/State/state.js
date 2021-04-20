import { makeAutoObservable, action } from "mobx"
import api from '../Api';
import {
    getUniqCounts,
    setAuthUser,
    getAuthUser,
} from '../Helper';

class State {

    constructor() {
        makeAutoObservable(this)
    }

    isAuth = false;
    userData = null;
    isFetching = false;
    tasks = [];
    users = [];
    comments = [];

    getAuthUserData = () => {
        const user = getAuthUser();

        if (user) {
            this.isAuth = true;
            this.userData = user;
        }
    }

    authUser = (email, password) => {
        this.isFetching = true;
        api.authUser(email, password)
            .then(
                action('succes', (response) => {
                    this.userData = response;
                    setAuthUser(response);
                    this.isAuth = true;
                    this.isFetching = false;
                }))
            .catch(action('error', e => { console.log(e); }))
    }

    getAllData = () => {
        const { token } = this.userData;
        this.isFetching = true;
        api.getAllData(token)
            .then(
                action('succes', ([tasks, users, comments]) => {
                    this.tasks = tasks;
                    this.users = users;
                    this.comments = comments;
                    this.isFetching = false;
                }))
            .catch(
                action('error', (e) => {
                    this.isFetching = false;
                    if (e === 401) {
                        this.isAuth = false;
                        this.userData = null;
                    }
                    console.log(e);
                })
            )
    }

    addNewTask = (task) => {
        const { token } = this.userData;
        this.isFetching = true;
        api.addTask(task, token)
            .then(
                action('succes', (task) => {
                    console.log(task);
                    this.tasks.push(task);
                    this.isFetching = false;
                })
            )
            .catch(
                action('error', (e) => {
                    this.isFetching = false;
                    if (e === 401) {
                        this.isAuth = false;
                        this.userData = null;
                    }
                    console.log(e);
                })
            );
    }

    deleteTask = (id) => {
        const { token } = this.userData;
        this.isFetching = true;
        api.deleteTask(id, token)
            .then(
                action('succes', () => {
                    this.tasks = this.tasks.filter((task) => task.id !== id);
                    this.isFetching = false;
                })
            )
            .catch(
                action('error', (e) => {
                    this.isFetching = false;
                    if (e === 401) {
                        this.isAuth = false;
                        this.userData = null;
                    }
                    console.log(e);
                })
            )
    }

    updateTask = (id, body) => {
        const { token } = this.userData;
        this.isFetching = true;
        api.updateTask(id, body, token)
            .then(
                action('succes', (response) => {
                    this.tasks = this.tasks.map((item) => {
                        if (item.id === id) {
                            return response;
                        }

                        return item;
                    })
                    this.isFetching = false;
                })
            )
            .catch(
                action('error', (e) => {
                    this.isFetching = false;
                    if (e === 401) {
                        this.isAuth = false;
                        this.userData = null;
                    }
                    console.log(e);
                })
            )
    }

    addNewComment = (comment) => {
        const { token } = this.userData;
        this.isFetching = true;
        api.addComment(comment, token)
            .then(
                action('succes', (comment) => {
                    this.comments.push(comment);
                    this.isFetching = false;
                })
            )
            .catch(
                action('error', (e) => {
                    this.isFetching = false;
                    if (e === 401) {
                        this.isAuth = false;
                        this.userData = null;
                    }
                    console.log(e);
                })
            )
    }

    get tasksParticipants() {
        const tasksParticipants = [];

        this.tasks.forEach((item) => {
            const { id, author, executor, commentators } = item;
            let participants = [author, executor, ...commentators];

            participants = getUniqCounts(participants);

            const participantsItem = [];

            participants.forEach((item) => {
                const { firstName, lastName, icon } = this.users.find(user => user.id === item);

                participantsItem.push({ firstName, lastName, icon });
            });

            tasksParticipants.push({ taskId: id, participants: participantsItem });
        });

        return tasksParticipants;
    }

    get activeTasks() {
        return this.tasks.filter(item => item.status !== 'completed' && item.status !== 'canceled');
    }

    get countActiveTasks() {
        return this.activeTasks.length;
    }

    get inActiveTasks() {
        return this.tasks.filter(item => item.status === 'completed' || item.status === 'canceled');
    }
}

const state = new State();

export default state;
