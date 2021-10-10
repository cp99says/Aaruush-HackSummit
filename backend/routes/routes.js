const app = require("express")();
const registration = require("./../controllers/registration");

//uploader-APIs

//teacher-APIs
app.route("/teacher/register").post(registration.registration);
app.route("/student/register").post(registration.student_registration);

//student-APIs

module.exports = app;
