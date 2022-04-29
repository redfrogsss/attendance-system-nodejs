var express = require('express');
const Attendance = require('../beans/Attendance');
const AttendanceModel = require('../models/AttendanceModel');
var router = express.Router();

const processRequest = (req, res) => {

    var lesson_id = req.body.lesson_id;
    var student_id = req.body.student_id;
    var status = req.body.status;

    if (status === "Absent") {
        //delete attendance record
        new AttendanceModel().getAttendanceByLessonId(lesson_id).then((la) => {
            var hasAttendance = false;

            if (la.length !== 0) {
                for (var i in la) {
                    if (parseInt(la[i].student_id) === parseInt(student_id)) {
                        hasAttendance = true;
                        new AttendanceModel().removeAttendanceById(la[i].id).then((success) => {
                            if (success === true) {
                                res.send("success");
                            } else {
                                res.send("fail deleting attendance")
                            }
                        });
                    }
                }

                if (!hasAttendance) {
                    res.send("success");
                }
            } else {
                res.send("success");
            }
        })
    } else {
        if (status === "Present" || status === "Late") {
            new AttendanceModel().getAttendanceByLessonId(lesson_id).then((la) => {
                var hasAttendance = false;

                if (la.length !== 0) {
                    for (var i in la) {
                        if (parseInt(la[i].student_id) === parseInt(student_id)) {
                            hasAttendance = true;
                            //update
                            var a = la[i];
                            a.student_id = student_id;
                            a.lesson_id = lesson_id;

                            a.attendance_time = new Date().toLocaleTimeString([], { hour12: false }).substr(0, 5);
                            a.attendance_date = new Date().toISOString().slice(0, 10);
                            a.attendance_status = status;

                            new AttendanceModel().updateAttendance(a).then((success) => {
                                if (success) {
                                    res.send("success");
                                } else {
                                    res.send("fail updating attendance");
                                }
                            });
                        }
                    }
                }
                if (!hasAttendance) {
                    //create a new attendance
                    var a = new Attendance();
                    a.student_id = student_id;
                    a.lesson_id = lesson_id;

                    a.attendance_time = new Date().toLocaleTimeString([], { hour12: false }).substr(0, 5);
                    a.attendance_date = new Date().toISOString().slice(0, 10);
                    a.attendance_status = status;


                    new AttendanceModel().createAttendance(a).then((success) => {
                        console.log("success", success);
                        if (success !== null) {
                            res.send("success");
                        } else {
                            res.send("fail creating attendance");
                        }
                    });
                }
            });
        }
    }

}

router.get('/', function (req, res) {
    processRequest(req, res);
});

router.post('/', function (req, res) {
    processRequest(req, res);
});

module.exports = router;