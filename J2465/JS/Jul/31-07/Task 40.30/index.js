const BASE_URL = "http://203.171.20.210:8080/crud-api/users/";

$(document).ready(() => {
  onPageLoading();

  $userTable.on("click", ".edit-btn", function () {
    onBtnEditClick(this);
  });

  $userTable.on("click", ".delete-btn", function () {
    onBtnDeleteClick(this);
  });
});

function onPageLoading() {
  getAllUsers();
}

function getAllUsers() {
  $.ajax({
    url: BASE_URL,
    type: "GET",
    dataType: "json",
    success: (userData) => {
      loadDataToUserTable(userData);
    },
    error: onError,
  });
}

function onError(ajaxContent) {
  console.log(ajaxContent.responseText);
}

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

function loadDataToUserTable(userData) {
  $userTable.clear();
  $userTable.rows.add(userData);
  $userTable.draw();
}

function onBtnEditClick(button) {
  var $tableRow = $(button).parents("tr");
  var $tableRowData = $userTable.row($tableRow).data();
  console.log($tableRowData.id);
}

function onBtnDeleteClick(button) {
  var $tableRow = $(button).parents("tr");
  var $tableRowData = $userTable.row($tableRow).data();
  console.log($tableRowData.id);
}
