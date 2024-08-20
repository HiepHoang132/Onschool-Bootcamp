class Student {
  constructor(studentName, studentAge, studentClass) {
    this.studentName = studentName;
    this.studentAge = studentAge;
    this.studentClass = studentClass;
  }

  getInfo() {
    return `Student name: ${this.studentName}, age: ${this.studentAge}, class: ${this.studentClass}`;
  }
}

class StudentList {
  constructor() {
    this.students = [];
  }

  add(student) {
    this.students.push(student);
  }

  get() {
    return this.students;
  }
}

const studentList = new StudentList();

function addStudent() {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  const studentName = document.getElementById("input-name").value;
  const studentAge = document.getElementById("input-age").value;
  const studentClass = document.getElementById("input-class").value;

  if (studentName && studentAge && studentClass) {
    const student = new Student(studentName, studentAge, studentClass);
    studentList.add(student);
    resultElement.innerHTML = "Đã thêm học sinh";
  } else {
    alert("Please fill in all fields");
  }
}

function showStudents() {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  studentList.get().forEach((student) => {
    const p = document.createElement("p");
    p.innerHTML = student.getInfo();
    resultElement.appendChild(p);
  });
}
document.getElementById("add-student").addEventListener("click", addStudent);
document
  .getElementById("show-students")
  .addEventListener("click", showStudents);
