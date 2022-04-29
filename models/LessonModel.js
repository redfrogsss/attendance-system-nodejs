const Lesson = require('../beans/Lesson');
var con = require('../settings/mysql');

class LessonModel {

    constructor() {

    }

    getLessonById = async (id) => {
        var sql = "select * from Lesson where id=" + id + ";";

        var something;

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                something = result;
                res(something[0]);
            });
        });
    }

    getLessonByTeacherId = async (teacher_id) => {
        var sql = "select Lesson.* from Lesson left join Teach on Teach.course_id = Lesson.course_id where teacher_id=" + teacher_id + ";";

        var something;

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                something = result;
                res(something);
            });
        });
    }

    createLesson = async (course_id) => {

        var l = new Lesson();
        l.lesson_name = "New Lesson";
        l.course_id = course_id;

        var time = new Date();
        console.log(time.getHours() + ":" + time.getMinutes());
        l.time_started = new Date().toLocaleTimeString([], { hour12: false }).substr(0, 5);
        var t = new Date().setHours(new Date().getHours() + 1);
        l.time_ended = new Date(t).toLocaleTimeString([], { hour12: false }).substr(0, 5);
        l.lesson_date = new Date().toISOString().slice(0, 10);

        var sql = "INSERT INTO Lesson (lesson_name, course_id, time_started, time_ended, lesson_date) value ('" + l.lesson_name + "', " + l.course_id + ", '" + l.time_started + "', '" + l.time_ended + "', '" + l.lesson_date + "');";

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

    updateLesson = async (l) => {
        var sql = "update Lesson set lesson_name = '" + l.lesson_name + "', time_started = '" + l.time_started + "', time_ended = '" + l.time_ended + "', lesson_date = '" + l.lesson_date + "' where id = " + l.id;

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

module.exports = LessonModel;