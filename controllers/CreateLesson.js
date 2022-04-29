var express = require('express');
const LessonModel = require('../models/LessonModel');
var router = express.Router();

const processRequest = (req, res) => {

    var course_id = req.body.course_id;

    new LessonModel().createLesson(course_id).then((l_id)=>{
        new LessonModel().getLessonById(l_id).then((l)=>{
            res.send(JSON.stringify(l));
        });
    });
}

router.get('/', function (req, res) {
    processRequest(req, res);
});

router.post('/', function (req, res) {
    processRequest(req, res);
});

module.exports = router;