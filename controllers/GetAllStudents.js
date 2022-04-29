var express = require('express');
const UserModel = require('../models/UserModel');
var router = express.Router();

const processRequest = (req, res) => {
    new UserModel().getAllStudents().then((result)=>{
        res.send(JSON.stringify(result));
    });
}

router.get('/', function (req, res) {
    processRequest(req, res);
});

router.post('/', function (req, res) {
    processRequest(req, res);
});

module.exports = router;