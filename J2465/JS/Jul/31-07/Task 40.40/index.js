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

  $("#add-btn").click(() => $("#add-user-modal").modal("show"));

  $("#confirm-add-btn").click(() => {
    getUserDataForm();
    if (validateUserData()) {
      addUser();
    }
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
        "<button class='btn btn-primary edit-btn mr-2'>Sửa</button>" +
        "<button class='btn btn-danger delete-btn'>Xoá</button>",
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

function onEditButtonClick(button) {
  const rowData = $userTable.row($(button).closest("tr")).data();
  console.log(rowData.id);
}

function onDeleteButtonClick(button) {
  const rowData = $userTable.row($(button).closest("tr")).data();
  console.log(rowData.id);
}

function getUserDataForm() {
  user.firstname = $("#input-firstname").val();
  user.lastname = $("#input-lastname").val();
  user.subject = $("#input-subject").val();
  user.country = $("#select-country").val();
  user.customerType = $("#select-customer-type").val();
}

function validateUserData() {
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

function onAddUserSuccess() {
  alert("Thêm user thành công");
  resetAddUserForm();
  $("#add-user-modal").modal("hide");
  fetchAllUsers();
}

function resetAddUserForm() {
  user = { ...userTemplate };
  $("#input-firstname").val("");
  $("#input-lastname").val("");
  $("#input-subject").val("");
  $("#select-country").val("0");
  $("#select-customer-type").val("0");
}
