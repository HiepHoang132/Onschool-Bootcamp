/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
var DataManager = /** @class */ (function () {
    function DataManager() {
        this.items = [];
    }
    DataManager.prototype.add = function (item) {
        this.items.push(item);
    };
    DataManager.prototype.getAll = function () {
        return this.items;
    };
    return DataManager;
}());
var studentManager = new DataManager();
var courseManager = new DataManager();
var enrollmentManager = new DataManager();
studentManager.add({ id: 1, name: "John", age: 16 });
studentManager.add({ id: 2, name: "Jane", age: 17 });
courseManager.add({ id: 1, title: "Mathematics", credits: 3 });
courseManager.add({ id: 2, title: "English", credits: 2 });
enrollmentManager.add({ studentId: 1, courseId: 1 });
enrollmentManager.add({ studentId: 2, courseId: 2 });
function displayStudents() {
    var students = studentManager.getAll();
    var courses = courseManager.getAll();
    var enrollments = enrollmentManager.getAll();
    var studentsDiv = document.getElementById("students");
    studentsDiv.innerHTML = ""; // Clear existing content
    students.forEach(function (student) {
        var studentDiv = document.createElement("div");
        studentDiv.className = "student";
        studentDiv.textContent = "Student: ".concat(student.name, ", Age: ").concat(student.age, ", Courses: ").concat(getCourses(student.id, enrollments, courses).join(", "));
        studentsDiv.appendChild(studentDiv);
    });
}
function getCourses(studentId, enrollments, courses) {
    return enrollments
        .filter(function (enrollment) { return enrollment.studentId === studentId; })
        .map(function (enrollment) {
        var course = courses.find(function (course) { return course.id === enrollment.courseId; });
        return course ? course.title : "Unknown";
    });
}
// Initial display
displayStudents();
document.getElementById("add-student").addEventListener("click", function () {
    var newStudent = {
        id: studentManager.getAll().length + 1,
        name: "Alice",
        age: 18,
    };
    studentManager.add(newStudent);
    displayStudents();
});

/******/ })()
;
//# sourceMappingURL=bundle.js.map