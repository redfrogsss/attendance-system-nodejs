var express = require('express');
const Lesson = require('../beans/Lesson');
const LessonModel = require('../models/LessonModel');
var router = express.Router();

const processRequest = (req, res) => {

    var lesson_id = req.body.lesson_id;
    var lesson_name = req.body.lesson_name;
    var lesson_date = req.body.lesson_date;
    var time_started = req.body.time_started;
    var time_ended = req.body.time_ended;

    // var l = new Lesson();
    new LessonModel().getLessonById(lesson_id).then((l) => {
        l.lesson_name = lesson_name;
        l.lesson_date = lesson_date;
        l.time_started = time_started;
        l.time_ended = time_ended;

        new LessonModel().updateLesson(l).then((success) => {
            if (success) {
                res.send(JSON.stringify(l));
            }
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