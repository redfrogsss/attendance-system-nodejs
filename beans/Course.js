class Course {

    constructor() {
        this.id = null;
        this.course_name = null;
        this.course_code = null;
    }

    getId() {
        return id;
    }

    getCourseName() {
        return course_name;
    }

    getCourseCode() {
        return course_code;
    }

    setId(id) {
        this.id = id;
    }

    setCourseName(course_name) {
        this.course_name = course_name;
    }

    setCourseCode(course_code) {
        this.course_code = course_code;
    }

}

module.exports = Course;