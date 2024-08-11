"use strict";
var gStudents = [
  {
    id: 2,
    studentCode: "1356783",
    firstname: "Ngô Văn",
    lastname: "Quân",
    age: 18,
    email: "quan@gmail.com",
    studyYear: 2015,
  },
  {
    id: 3,
    studentCode: "1356784",
    firstname: "Lê Thị",
    lastname: "Linh",
    age: 19,
    email: "linh@gmail.com",
    studyYear: 2016,
  },
  {
    id: 4,
    studentCode: "1356785",
    firstname: "Trần Văn",
    lastname: "Hiếu",
    age: 20,
    email: "hieu@gmail.com",
    studyYear: 2017,
  },
  {
    id: 5,
    studentCode: "1356786",
    firstname: "Nguyễn Thị",
    lastname: "Mai",
    age: 21,
    email: "mai@gmail.com",
    studyYear: 2018,
  },
  {
    id: 6,
    studentCode: "1356787",
    firstname: "Phạm Văn",
    lastname: "Minh",
    age: 22,
    email: "minh@gmail.com",
    studyYear: 2019,
  },
];

var gSubjects = [
  {
    id: 5,
    subjectCode: "MATH101",
    subjectName: "Toán cao cấp 1",
  },
  {
    id: 6,
    subjectCode: "PHY102",
    subjectName: "Vật lý đại cương",
  },
  {
    id: 7,
    subjectCode: "CHEM103",
    subjectName: "Hóa học cơ bản",
  },
  {
    id: 8,
    subjectCode: "ENG104",
    subjectName: "Tiếng Anh học thuật",
  },
  {
    id: 9,
    subjectCode: "HIST105",
    subjectName: "Lịch sử Việt Nam",
  },
];

var gGrades = [
  {
    id: 2,
    studentId: 2,
    subjectId: 5,
    grade: 8,
    examDate: "13/04/2021",
  },
  {
    id: 3,
    studentId: 3,
    subjectId: 6,
    grade: 7,
    examDate: "20/04/2021",
  },
  {
    id: 4,
    studentId: 4,
    subjectId: 7,
    grade: 9,
    examDate: "15/05/2021",
  },
  {
    id: 5,
    studentId: 5,
    subjectId: 8,
    grade: 6,
    examDate: "10/06/2021",
  },
  {
    id: 6,
    studentId: 6,
    subjectId: 9,
    grade: 8,
    examDate: "22/06/2021",
  },
  {
    id: 7,
    studentId: 2,
    subjectId: 6,
    grade: 5,
    examDate: "30/06/2021",
  },
  {
    id: 8,
    studentId: 3,
    subjectId: 7,
    grade: 7,
    examDate: "12/07/2021",
  },
  {
    id: 9,
    studentId: 4,
    subjectId: 8,
    grade: 9,
    examDate: "20/07/2021",
  },
  {
    id: 10,
    studentId: 5,
    subjectId: 5,
    grade: 7,
    examDate: "25/07/2021",
  },
  {
    id: 11,
    studentId: 6,
    subjectId: 9,
    grade: 10,
    examDate: "30/07/2021",
  },
];

$(document).ready(() => {
  loadDataToStudentOptions();
  loadDataToSubjectOptions();

  loadDataToTable(gGrades);

  $("#filter-btn").click(() => {
    filterTable();
  });
});

function loadDataToStudentOptions() {
  console.log(gStudents);

  const options = gStudents.map((student) =>
    $("<option>")
      .val(student.id)
      .text(`${student.firstname} ${student.lastname}`)
  );

  $("#select-student").append(options);
}

function loadDataToSubjectOptions() {
  console.log(gSubjects);

  const options = gSubjects.map((subject) =>
    $("<option>").val(subject.id).text(subject.subjectName)
  );

  $("#select-subject").append(options);
}

function loadDataToTable(data) {
  console.log(data);

  $studentTable.clear().rows.add(data).draw();
}

let index = 0;
let arrayColumns = ["id", "studentId", "subjectId", "grade", "examDate"];

var $studentTable = $("#score-table").DataTable({
  columns: arrayColumns.map((col) => ({ data: col })),
  columnDefs: [
    {
      targets: 0,
      render: generateIndex,
    },
    {
      targets: 1,
      render: generateStudentName,
    },
    {
      targets: 2,
      render: generateSubjectName,
    },
  ],
});

function generateIndex() {
  return ++index;
}

function generateStudentName(studentId) {
  const student = gStudents.find((student) => student.id === studentId);
  return student ? `${student.firstname} ${student.lastname}` : "";
}

function generateSubjectName(subjectId) {
  const subject = gSubjects.find((subject) => subject.id === subjectId);
  return subject ? subject.subjectName : "";
}

function filterTable() {
  var $student = $("#select-student").find(":selected").text();
  var $subject = $("#select-subject").find(":selected").text();

  $studentTable
    .column(1)
    .search($student !== "Chọn học sinh" ? $student : "")
    .column(2)
    .search($subject !== "Chọn môn học" ? $subject : "")
    .draw();
}
