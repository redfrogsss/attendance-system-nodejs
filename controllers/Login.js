var UserModel = require("../models/UserModel");
var express = require('express');
var router = express.Router();

const processRequest = (req, res) => {
    const email = req.body.email;
    const pwd = req.body.pwd;

    new UserModel().login(email, pwd).then((u) => {
        if (u.length !== 0) {
            req.session.active_user = u;
            res.send("success");
        } else {
            res.send("Login Failed. Please try again.");
        }
    });
}

router.get('/', function (req, res) {
    processRequest(req, res);
});

router.post('/', function (req, res) {
    processRequest(req, res);
});

module.exports = router;