class User {

    constructor() {
        this.id = null;
        this.user_name = null;
        this.email = null;
        this.pwd = null;
        this.user_role = null;
    }

    getId() {
        return id;
    }

    setId(id) {
        this.id = id;
    }

    getUserName() {
        return user_name;
    }

    setUserName(user_name) {
        this.user_name = user_name;
    }

    getEmail() {
        return email;
    }

    setEmail(email) {
        this.email = email;
    }

    getPwd() {
        return pwd;
    }

    setPwd(pwd) {
        this.pwd = pwd;
    }

    getUserRole() {
        return user_role;
    }

    setUserRole(user_role) {
        this.user_role = user_role;
    }

}

module.exports = User;