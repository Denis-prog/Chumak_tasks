class UserService {

    constructor(instance, commonRequest) {
        this.instance = instance;
        this.commonRequest = commonRequest;
    }

    getUsers = () => this.commonRequest.getResource('users')

};

export default UserService;
