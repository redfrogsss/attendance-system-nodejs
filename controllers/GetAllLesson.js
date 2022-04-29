var express = require('express');
const LessonModel = require('../models/LessonModel');
var router = express.Router();

const processRequest = (req, res) => {
    var u = req.session.active_user;

    new LessonModel().getLessonByTeacherId(u[0].id).then((result)=>{
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