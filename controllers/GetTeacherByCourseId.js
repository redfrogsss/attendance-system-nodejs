var express = require('express');
const CourseModel = require('../models/CourseModel');
const UserModel = require('../models/UserModel');
var router = express.Router();

const processRequest = async (req, res) => {

    var c_id = req.body.course_id;
    var teacher_list = [];

    var teacher_id_list;
    await new CourseModel().getTeacherIdByCourseId(c_id).then((t) => {
        teacher_id_list = t;
    });

    for (var i in teacher_id_list) {
        await new UserModel().getUserById(teacher_id_list[i]).then((u)=>{
            teacher_list.push(u);
        });
    }

    res.send(JSON.stringify(teacher_list));
}

router.get('/', function (req, res) {
    processRequest(req, res);
});

router.post('/', function (req, res) {
    processRequest(req, res);
});

module.exports = router;