var con = require('../settings/mysql');

class UserModel {

    constructor(){

    }

    login = async (email = null, pwd = null) => {
        var sql = "select * from User where email='" + email + "' and pwd='" + pwd + "';";

        var something;

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                something = result;
                res(something);
            });
        });
    }

    getUserById = async (id = null) => {
        var sql = "select * from User where id=" + id + ";";

        var something;

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                something = result;
                res(something[0]);
            });
        });
    }

    getAllStudents = async () => {
        var sql = "select * from User where user_role='student'";

        var something;

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                something = result;
                res(something);
            });
        });
    }
}

module.exports = UserModel;