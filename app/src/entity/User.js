class User {
    
    constructor({ email, password, firstName, lastName,
        icon }) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.icon = icon;
        this.timestamp = Date.now();
    }
}

export default User;
