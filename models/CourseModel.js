var con = require('../settings/mysql');

class CourseModel {

    constructor(){

    }

    getCourseById = async (id) => {
        var sql = "select * from Course where id=" + id + ";";

        var something;

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                something = result;
                res(something[0]);
            });
        });
    }

    getTeacherIdByCourseId = async (course_id) => {
        var sql = "select * from Teach where course_id=" + course_id + ";";

        var something = [];

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                // something = result; //
                for(var i in result){
                    something.push(result[i].teacher_id);
                }
                // console.log("getTeacherIdByCourseId", something);
                res(something);

            });
        });
    }

    getCourseByTeacherId = async (teacher_id) => {
        var sql = "select Course.id, Course.course_name, Course.course_code from Teach left join Course on Course.id = Teach.course_id where teacher_id = " + teacher_id + ";";

        var something;

        return new Promise((res, rej) => {
            con.query(sql, function (err, result) {
                if (err) throw err;
                something = result;
                res(something);
            });
        });
    }

}

module.exports = CourseModel;