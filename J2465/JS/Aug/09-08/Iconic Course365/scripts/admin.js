const API_BASE_URL = "https://624abe0dfd7e30c51c110ac6.mockapi.io/api/v1/";

let currentCourse = {};

$(document).ready(() => {
  loadAllCourses();
  styleTableCells();

  setupFileInputHandlers();
  setupAddCourseButton();
  setupEditCourseHandlers();
  setupDeleteCourseHandlers();
});

function loadAllCourses() {
  $.ajax({
    url: `${API_BASE_URL}courses`,
    type: "GET",
    dataType: "json",
    success: populateCourseTable,
    error: (xhr) => console.error(xhr.responseText),
  });
}

function populateCourseTable(data) {
  courseTable.clear().rows.add(data).draw();
}

function styleTableCells() {
  $("#course-table tbody tr td").each(function () {
    $(this).addClass("align-middle");
  });
}

function setupFileInputHandlers() {
  $(".custom-file-input").on("change", function () {
    const fileName = $(this).val().split("\\").pop();
    $(this).next(".custom-file-label").html(fileName);
  });
}

function setupAddCourseButton() {
  $("#add-btn").click(() => {
    $("#add-course-modal").modal("show");
  });

  $("#add-confirm-btn").click(() => {
    gatherAddCourseFormData();
    if (isCourseDataValid(currentCourse)) {
      createCourse();
    }
  });
}

function setupEditCourseHandlers() {
  $("#course-table").on("click", ".edit-btn", function () {
    showEditCourseModal(this);
  });

  $("#edit-confirm-btn").click(() => {
    gatherEditCourseFormData();
    if (isCourseDataValid(currentCourse)) {
      updateCourse();
    }
  });
}

function setupDeleteCourseHandlers() {
  $("#course-table").on("click", ".delete-btn", function () {
    currentCourse.id = courseTable.row(this.closest("tr")).data().id;
    $("#delete-course-modal").modal("show");
  });

  $("#delete-confirm-btn").click(() => {
    removeCourse();
  });
}

let courseTable = $("#course-table").DataTable({
  columns: [
    "id",
    "coverImage",
    "courseCode",
    "courseName",
    "duration",
    "level",
    "price",
    "discountPrice",
    "teacherPhoto",
    "teacherName",
    "isPopular",
    "isTrending",
  ].map((col) => ({ data: col })),
  columnDefs: [
    { targets: 0, render: renderIndex },
    { targets: 1, render: renderCourseImage },
    { targets: 8, render: renderTeacherImage },
    {
      targets: 12,
      defaultContent: `
        <i class="fas fa-edit mr-2 text-success edit-btn" style='cursor: pointer'></i>
        <i class="fas fa-trash-alt text-danger delete-btn" style='cursor: pointer'></i>
    `,
    },
  ],
});

let indexCounter = 0;
function renderIndex() {
  return ++indexCounter;
}

function renderCourseImage(data) {
  return `<img src='${data}' style="width: 100%;">`;
}

function renderTeacherImage(data) {
  return `<img src='${data}' style="width: 110%;">`;
}

function gatherAddCourseFormData() {
  if (!validateAddCourseForm()) {
    alert("Please fill out all required fields.");
    return;
  }

  currentCourse.coverImage = $("#input-file-cover-image").val();
  currentCourse.courseCode = $("#input-course-code").val();
  currentCourse.courseName = $("#input-course-name").val();
  currentCourse.duration = $("#input-duration").val();
  currentCourse.level = $("#input-level").val();
  currentCourse.price = $("#input-price").val();
  currentCourse.discountPrice = $("#input-discount").val();
  currentCourse.teacherPhoto = $("#input-file-teacher-image").val();
  currentCourse.teacherName = $("#input-teacher-name").val();
  currentCourse.isPopular = $("#check-popular").is(":checked");
  currentCourse.isTrending = $("#check-trending").is(":checked");
}

function validateAddCourseForm() {
  let isValid = true;
  let requiredFields = [
    "#input-file-cover-image",
    "#input-course-code",
    "#input-course-name",
    "#input-duration",
    "#input-level",
    "#input-price",
    "#input-discount",
    "#input-file-teacher-image",
    "#input-teacher-name",
  ];

  $(".form-control, .custom-file-input").removeClass("is-invalid");

  requiredFields.forEach((field) => {
    if ($(field).val().trim() === "") {
      $(field).addClass("is-invalid");
      isValid = false;
    }
  });

  return isValid;
}

function createCourse() {
  $.ajax({
    url: `${API_BASE_URL}courses`,
    type: "POST",
    contentType: "application/json;charset=UTF-8",
    data: JSON.stringify(currentCourse),
    success: handleCourseCreationSuccess,
    error: (xhr) => console.error(xhr),
  });
}

function handleCourseCreationSuccess() {
  resetCourseForm();
  $("#add-course-modal").modal("hide");
  loadAllCourses();
}

function resetCourseForm() {
  $("#input-file-cover-image").val("");
  $("#input-course-code").val("");
  $("#input-course-name").val("");
  $("#input-duration").val("");
  $("#input-level").val("");
  $("#input-price").val("");
  $("#input-discount").val("");
  $("#input-file-teacher-image").val("");
  $("#input-teacher-name").val("");
  $("#check-popular").prop("checked", false);
  $("#check-trending").prop("checked", false);
  $(".custom-file-label").html("Choose file...");
}

function showEditCourseModal(button) {
  $("#edit-course-modal").modal("show");

  let $row = $(button).closest("tr");
  let rowData = courseTable.row($row).data();
  currentCourse.id = rowData.id;

  $("#input-edit-file-cover-image").val(rowData.coverImage);
  $("#input-edit-course-code").val(rowData.courseCode);
  $("#input-edit-course-name").val(rowData.courseName);
  $("#input-edit-duration").val(rowData.duration);
  $("#input-edit-level").val(rowData.level);
  $("#input-edit-price").val(rowData.price);
  $("#input-edit-discount").val(rowData.discountPrice);
  $("#input-edit-file-teacher-image").val(rowData.teacherPhoto);
  $("#input-edit-teacher-name").val(rowData.teacherName);
  $("#check-edit-popular").prop("checked", rowData.isPopular);
  $("#check-edit-trending").prop("checked", rowData.isTrending);
}

function gatherEditCourseFormData() {
  if (!validateEditCourseForm()) {
    alert("Please fill out all required fields.");
    return;
  }

  currentCourse.coverImage = $("#input-edit-file-cover-image").val();
  currentCourse.courseCode = $("#input-edit-course-code").val();
  currentCourse.courseName = $("#input-edit-course-name").val();
  currentCourse.duration = $("#input-edit-duration").val();
  currentCourse.level = $("#input-edit-level").val();
  currentCourse.price = $("#input-edit-price").val();
  currentCourse.discountPrice = $("#input-edit-discount").val();
  currentCourse.teacherPhoto = $("#input-edit-file-teacher-image").val();
  currentCourse.teacherName = $("#input-edit-teacher-name").val();
  currentCourse.isPopular = $("#check-edit-popular").is(":checked");
  currentCourse.isTrending = $("#check-edit-trending").is(":checked");
}

function validateEditCourseForm() {
  let isValid = true;
  let requiredFields = [
    "#input-edit-file-cover-image",
    "#input-edit-course-code",
    "#input-edit-course-name",
    "#input-edit-duration",
    "#input-edit-level",
    "#input-edit-price",
    "#input-edit-discount",
    "#input-edit-file-teacher-image",
    "#input-edit-teacher-name",
  ];

  $(".form-control, .custom-file-input").removeClass("is-invalid");

  requiredFields.forEach((field) => {
    if ($(field).val().trim() === "") {
      $(field).addClass("is-invalid");
      isValid = false;
    }
  });

  return isValid;
}

function updateCourse() {
  $.ajax({
    url: `${API_BASE_URL}courses/${currentCourse.id}`,
    type: "PUT",
    contentType: "application/json;charset=UTF-8",
    data: JSON.stringify(currentCourse),
    success: handleCourseUpdateSuccess,
    error: (xhr) => console.error(xhr),
  });
}

function handleCourseUpdateSuccess() {
  $("#edit-course-modal").modal("hide");
  loadAllCourses();
}

function removeCourse() {
  $.ajax({
    url: `${API_BASE_URL}courses/${currentCourse.id}`,
    type: "DELETE",
    success: handleCourseDeletionSuccess,
    error: (xhr) => console.error(xhr),
  });
}

function handleCourseDeletionSuccess() {
  $("#delete-course-modal").modal("hide");
  loadAllCourses();
}

function isCourseDataValid(course) {
  return Object.keys(course).length !== 0 && course.constructor === Object;
}
