var mysql = require('mysql');

var con = mysql.createConnection({
    host: "db",
    user: "root",
    password: "root",
    database: "sams"
});

module.exports = con;