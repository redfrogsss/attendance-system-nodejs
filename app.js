var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

// registered router
var indexRouter = require('./routes/index');
var CreateAttendanceController = require('./controllers/CreateAttendance');
var CreateLessonController = require('./controllers/CreateLesson');
var GetAllAttendanceController = require('./controllers/GetAllAttendance');
var GetAllLessonController = require('./controllers/GetAllLesson');
var GetAllStudentsController = require('./controllers/GetAllStudents');
var GetAttendanceByIdController = require('./controllers/GetAttendanceById');
var GetAttendanceByLessonIdController = require('./controllers/GetAttendanceByLessonId');
var GetCourseByIdController = require('./controllers/GetCourseById');
var GetCourseByTeacherIdController = require('./controllers/GetCourseByTeacherId');
var GetLessonByIdController = require('./controllers/GetLessonById');
var GetLoginStatusController = require('./controllers/GetLoginStatus');
var GetTeacherByCourseIdController = require('./controllers/GetTeacherByCourseId');
var GetUserAttendanceController = require('./controllers/GetUserAttendance');
var LoginController = require('./controllers/Login');
var LogoutController = require('./controllers/Logout');
var UpdateAttendanceController = require('./controllers/UpdateAttendance');
var UpdateLessonController = require('./controllers/UpdateLesson');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: "ast20201_indiv_proj"})); // session

// custom router part
app.use('/', indexRouter);  //serve static frontend files
app.use('/CreateAttendance', CreateAttendanceController);  
app.use('/CreateLesson', CreateLessonController);  
app.use('/GetAllAttendance', GetAllAttendanceController);  
app.use('/GetAllLesson', GetAllLessonController);  
app.use('/GetAllStudents', GetAllStudentsController);  
app.use('/GetAttendanceById', GetAttendanceByIdController);  
app.use('/GetAttendanceByLessonId', GetAttendanceByLessonIdController);  
app.use('/GetCourseById', GetCourseByIdController);  
app.use('/GetCourseByTeacherId', GetCourseByTeacherIdController);  
app.use('/GetLessonById', GetLessonByIdController);  
app.use('/GetLoginStatus', GetLoginStatusController);
app.use('/GetTeacherByCourseId', GetTeacherByCourseIdController);
app.use('/GetUserAttendance', GetUserAttendanceController);
app.use('/Login', LoginController);  
app.use('/Logout', LogoutController);  
app.use('/UpdateAttendance', UpdateAttendanceController);  
app.use('/UpdateLesson', UpdateLessonController);  

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//mysql
var mysql = require('mysql');
require("./settings/mysql");
var con = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "sams"
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = app;
