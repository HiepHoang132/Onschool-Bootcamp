/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
var students = [
    {
        name: "John",
        age: 16,
        scores: {
            math: 90,
            english: 85,
            science: 88,
        },
    },
    {
        name: "Jane",
        age: 17,
        scores: {
            math: 92,
            english: 87,
            science: 91,
        },
    },
];
function displayStudents(students) {
    var studentsDiv = document.getElementById("students");
    studentsDiv.innerHTML = ""; // Clear existing content
    students.forEach(function (student) {
        var studentDiv = document.createElement("div");
        studentDiv.className = "student";
        studentDiv.textContent = "Name: ".concat(student.name, ", Age: ").concat(student.age, ", Math: ").concat(student.scores.math, ", English: ").concat(student.scores.english, ", Science: ").concat(student.scores.science);
        studentsDiv.appendChild(studentDiv);
    });
}
// Initial display
displayStudents(students);
document.getElementById("add-student").addEventListener("click", function () {
    var newStudent = {
        name: "Alice",
        age: 18,
        scores: {
            math: 95,
            english: 90,
            science: 93,
        },
    };
    students.push(newStudent);
    displayStudents(students);
});

/******/ })()
;
//# sourceMappingURL=bundle.js.map