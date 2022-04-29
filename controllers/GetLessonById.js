var express = require('express');
const LessonModel = require('../models/LessonModel');
var router = express.Router();

const processRequest = (req, res) => {

    var l_id = req.body.lesson_id;

    new LessonModel().getLessonById(l_id).then((result)=>{
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