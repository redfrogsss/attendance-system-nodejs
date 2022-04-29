class Attendance {

    constructor() {
        this.id = null;
        this.student_id = null;
        this.lesson_id = null;
        this.attendance_time = null;
        this.attendance_date = null;
        this.attendance_status = null;
    }
    
    getId() {
        return id;
    }

    getStudentId() {
        return student_id;
    }

    getLessonId() {
        return lesson_id;
    }

    getAttendanceTime() {
        return attendance_time;
    }

    getAttendanceDate() {
        return attendance_date;
    }

    setId(id) {
        this.id = id;
    }

    setStudentId(student_id) {
        this.student_id = student_id;
    }

    setLessonId(lesson_id) {
        this.lesson_id = lesson_id;
    }

    setAttendanceTime(attendance_time) {
        this.attendance_time = attendance_time;
    }

    setAttendanceDate(attendance_date) {
        this.attendance_date = attendance_date;
    }

    getAttendanceStatus() {
        return attendance_status;
    }

    setAttendanceStatus(attendance_status) {
        this.attendance_status = attendance_status;
    }
}

module.exports = Attendance;