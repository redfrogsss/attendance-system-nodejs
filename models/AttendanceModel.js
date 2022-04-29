var con = require('../settings/mysql');

class AttendanceModel {

    constructor() {

    }

    getAttendanceByUserId = async (userId) => {
        var sql = "select * from Attendance where student_id=" + userId;

        var something;

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                something = result;
                res(something);
            });
        });
    }

    getAttendanceById = async (id) => {
        var sql = "select * from Attendance where id=" + id;

        var something;

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                something = result;
                res(something[0]);
            });
        });
    }

    getAttendanceByLessonId = async (lesson_id) => {
        var sql = "select * from Attendance where lesson_id=" + lesson_id + ";";

        var something;

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                something = result;
                res(something);
            });
        });
    }

    createAttendance = async (a) => {
        var sql = "INSERT INTO Attendance (student_id, lesson_id, attendance_time, attendance_date, attendance_status) value (" + a.student_id + ", " + a.lesson_id + ", '" + a.attendance_time + "', '" + a.attendance_date + "', '" + a.attendance_status + "');";

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                if (result.affectedRows > 0) {
                    res(result.insertId);
                } else {
                    res(null);
                }
            });
        });
    }

    getUserAttendanceByLessonId = async (lesson_id, student_id) => {
        var sql = "select * from Attendance where lesson_id=" + lesson_id + " and student_id=" + student_id + ";";

        var something;

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                something = result;
                res(something);
            });
        });
    }

    updateAttendance = async (a) => {
        var sql = "update Attendance set student_id = " + a.student_id + ", lesson_id = " + a.lesson_id + ", attendance_time = '" + a.attendance_time + "', attendance_date = '" + a.attendance_date + "', attendance_status='" + a.attendance_status + "' where id = " + a.id + ";";

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                if (result.affectedRows > 0) {
                    res(true);
                } else {
                    res(false);
                }
            });
        });
    }

    removeAttendanceById = async (id) => {
        var sql = "DELETE FROM Attendance WHERE id=" + id + ";";

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                if (result.affectedRows > 0) {
                    res(true);
                } else {
                    res(false);
                }
            });
        });
    }
}

module.exports = AttendanceModel;