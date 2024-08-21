import { Student } from "./scripts/student.js";
import { StudentList } from "./scripts/studentList.js";

const studentList = new StudentList();

function addStudent() {
  const studentName = document.getElementById("name").value;
  const studentAge = document.getElementById("age").value;
  const studentClass = document.getElementById("class").value;

  if (studentName && studentAge && studentClass) {
    const student = new Student(studentName, studentAge, studentClass);
    studentList.add(student);
    displayStudents();
    resetForm();
  } else {
    alert("Please fill in all fields");
  }
}

function displayStudents() {
  document.getElementById("students").innerHTML = "";

  studentList.get().forEach((student) => {
    const p = document.createElement("p");
    p.innerHTML = student.getInfo();
    document.getElementById("students").appendChild(p);
  });
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("class").value = "";
}

document.getElementById("add-student").addEventListener("click", addStudent);
