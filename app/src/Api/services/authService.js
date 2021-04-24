import jwt from 'jsonwebtoken';

class AuthService {

    constructor(instance) {
        this.instance = instance;
    }

    authUser(email, password) {
        return this.instance.post('login', {
            email,
            password,
        })
            .then(response => {
                const token = response.data.accessToken;
                const { payload: { sub } } = jwt.decode(token, { complete: true });
                const id = +sub;
                return { id, token }
            })
            .catch(e => { throw e })
    }
};

export default AuthService;
