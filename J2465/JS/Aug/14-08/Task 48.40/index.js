const BASE_URL = "http://203.171.20.210:8080/crud-api/users/";
const CONTENT_TYPE = "application/json;charset=UTF-8";

const userTemplate = {
  firstname: "",
  lastname: "",
  subject: "",
  country: "",
  customerType: "",
  registerStatus: "New",
};

let user = { ...userTemplate };
let columnId = 0;
let userId = 0;

const arrayColumns = [
  "id",
  "firstname",
  "lastname",
  "country",
  "subject",
  "customerType",
  "registerStatus",
  "action",
];

$(document).ready(() => {
  initializePage();

  $("#table-user tbody tr td").each(function () {
    $(this).addClass("align-middle");
  });

  $("#add-btn").click(() => $("#add-user-modal").modal("show"));

  $("#confirm-add-btn").click(() => {
    getCreateUserDataForm();
    if (validateCreateUserData()) {
      addUser();
    }
  });

  $("#confirm-update-btn").click(() => {
    getUpdateUserDataForm();
    if (validateUpdateUserData()) {
      updateUser();
    }
  });

  $("#confirm-delete-btn").click(() => {
    deleteUser();
  });

  $userTable.on("click", ".edit-btn", function () {
    onEditButtonClick(this);
  });

  $userTable.on("click", ".delete-btn", function () {
    onDeleteButtonClick(this);
  });
});

function initializePage() {
  fetchAllUsers();
}

function fetchAllUsers() {
  $.ajax({
    url: BASE_URL,
    type: "GET",
    dataType: "json",
    success: loadUsersToTable,
    error: handleAjaxError,
  });
}

function getUserById() {
  $.ajax({
    url: BASE_URL + userId,
    type: "GET",
    dataType: "json",
    success: (userData) => loadUserToEditModal(userData),
    error: handleAjaxError,
  });
  $("#edit-user-modal").modal("show");
}

function handleAjaxError(ajaxContent) {
  console.error(ajaxContent.responseText);
}

var $userTable = $("#table-user").DataTable({
  columns: arrayColumns.map((col) => ({ data: col })),
  columnDefs: [
    { targets: 0, render: generateId },
    {
      targets: 7,
      defaultContent:
        "<button class='btn btn-primary edit-btn mb-2'>Sửa</button>" +
        "<button class='btn btn-danger delete-btn'>Xoá</button>",
    },
    {
      targets: "_all", // Apply to all columns
      createdCell: function (td, cellData, rowData, row, col) {
        $(td).addClass("align-middle");
      },
    },
  ],
});

function generateId() {
  return ++columnId;
}

function loadUsersToTable(userData) {
  $userTable.clear();
  $userTable.rows.add(userData);
  $userTable.draw();
}

function loadUserToEditModal(data) {
  $("#input-edit-firstname").val(data.firstname);
  $("#input-edit-lastname").val(data.lastname);
  $("#input-edit-subject").val(data.subject);
  $("#select-edit-country").val(data.country);
  $("#select-edit-customer-type").val(data.customerType);
  $("#select-edit-register-status").val(data.registerStatus);
}

function onEditButtonClick(button) {
  const rowData = $userTable.row($(button).closest("tr")).data();
  userId = rowData.id;
  getUserById();
}

function onDeleteButtonClick(button) {
  const rowData = $userTable.row($(button).closest("tr")).data();
  userId = rowData.id;
  $("#delete-user-modal").modal("show");
}

function getCreateUserDataForm() {
  user.firstname = $("#input-add-firstname").val();
  user.lastname = $("#input-add-lastname").val();
  user.country = $("#select-add-country").val();
  user.subject = $("#input-add-subject").val();
  user.customerType = $("#select-add-customer-type").val();
}

function validateCreateUserData() {
  const alerts = [];

  if (!user.firstname) {
    alerts.push("First name chưa được nhập");
  }

  if (!user.lastname) {
    alerts.push("Last name chưa được nhập");
  }

  if (!user.subject) {
    alerts.push("Subject chưa được nhập");
  }

  if (user.country === "0") {
    alerts.push("Country chưa được chọn");
  }

  if (user.customerType === "0") {
    alerts.push("Customer type chưa được chọn");
  }

  if (alerts.length > 0) {
    alert(alerts.join("\n"));
    return false;
  }

  return true;
}

function getUpdateUserDataForm() {
  user.firstname = $("#input-edit-firstname").val();
  user.lastname = $("#input-edit-lastname").val();
  user.country = $("#select-edit-country").val();
  user.subject = $("#input-edit-subject").val() || "N/A";
  user.customerType = $("#select-edit-customer-type").val();
  user.registerStatus = $("#select-edit-register-status").val();
}

function validateUpdateUserData() {
  const alerts = [];

  if (!user.firstname) {
    alerts.push("First name chưa được nhập");
  }

  if (!user.lastname) {
    alerts.push("Last name chưa được nhập");
  }

  if (alerts.length > 0) {
    alert(alerts.join("\n"));
    return false;
  }

  return true;
}

function addUser() {
  $.ajax({
    url: BASE_URL,
    type: "POST",
    contentType: CONTENT_TYPE,
    data: JSON.stringify(user),
    success: onAddUserSuccess,
    error: handleAjaxError,
  });
}

function updateUser() {
  $.ajax({
    url: BASE_URL + userId,
    type: "PUT",
    contentType: CONTENT_TYPE,
    data: JSON.stringify(user),
    success: onUpdateUserSuccess,
    error: handleAjaxError,
  });
}

function deleteUser() {
  $.ajax({
    url: BASE_URL + userId,
    type: "DELETE",
    contentType: CONTENT_TYPE,
    success: onDeleteUserSuccess,
    error: handleAjaxError,
  });
}

function onAddUserSuccess() {
  alert("Thêm user thành công");
  resetAddUserForm();
  $("#add-user-modal").modal("hide");
  fetchAllUsers();
}

function onUpdateUserSuccess() {
  alert("Sửa user thành công");
  $("#edit-user-modal").modal("hide");
  fetchAllUsers();
}

function onDeleteUserSuccess() {
  alert("Xoá user thành công");
  $("#delete-user-modal").modal("hide");
  fetchAllUsers();
}

function resetAddUserForm() {
  user = { ...userTemplate };
  $("#input-add-firstname").val("");
  $("#input-add-lastname").val("");
  $("#input-add-subject").val("");
  $("#select-add-country").val("0");
  $("#select-add-customer-type").val("0");
}
