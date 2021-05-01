class UserService {

    constructor(commonRequest, commonRegisterRequest) {
        this.commonRegisterRequest = commonRegisterRequest;
        this.commonRequest = commonRequest;
    }

    getUsers = () => this.commonRequest.getResource('users');

    addUser = (body) => this.commonRegisterRequest.addResource('register', body);

};

export default UserService;
