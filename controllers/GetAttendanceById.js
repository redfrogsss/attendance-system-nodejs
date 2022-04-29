var express = require('express');
const AttendanceModel = require('../models/AttendanceModel');
var router = express.Router();

const processRequest = (req, res) => {

    var a_id = req.body.attendance_id;

    new AttendanceModel().getAttendanceById(a_id).then((result)=>{
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