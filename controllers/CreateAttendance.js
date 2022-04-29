var express = require('express');
const Attendance = require('../beans/Attendance');
const AttendanceModel = require('../models/AttendanceModel');
var router = express.Router();

const processRequest = (req, res) => {

    var u = req.session.active_user;
    var user_id = u[0].id;
    var lesson_id = req.body.lesson_id;
    var attendance_time = new Date().toLocaleTimeString([], { hour12: false }).substr(0, 5);
    var attendance_date = new Date().toISOString().slice(0, 10);
    var attendance_status = "Present";

    var a = new Attendance();
    a.student_id = user_id;
    a.lesson_id = lesson_id;
    a.attendance_time = attendance_time;
    a.attendance_date = attendance_date;
    a.attendance_status = attendance_status;

    new AttendanceModel().createAttendance(a).then((a_id)=>{
        new AttendanceModel().getAttendanceById(a_id).then((result)=>{
            res.send(JSON.stringify(result));
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