class Lesson {
    constructor() {
        this.id = null;
        this.lesson_name = null;
        this.course_id = null;
        this.time_started = null;
        this.time_ended = null;
        this.lesson_date = null;
    }

    getId() {
        return id;
    }

    getLessonName() {
        return lesson_name;
    }

    getCourseId() {
        return course_id;
    }

    getTimeStarted() {
        return time_started;
    }

    getTimeEnded() {
        return time_ended;
    }

    getLessonDate() {
        return lesson_date;
    }

    setId(id) {
        this.id = id;
    }

    setLessonName(lesson_name) {
        this.lesson_name = lesson_name;

    }

    setCourseId(course_id) {
        this.course_id = course_id;

    }

    setTimeStarted(time_started) {
        this.time_started = time_started;
    }

    setTimeEnded(time_ended) {
        this.time_ended = time_ended;
    }

    setLessonDate(lesson_date) {
        this.lesson_date = lesson_date;
    }

}

module.exports = Lesson;