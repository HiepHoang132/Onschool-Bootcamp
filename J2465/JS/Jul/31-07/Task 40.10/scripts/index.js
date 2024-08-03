"use strict";
var gJsonUser = `{
    "description": "Data user",
    "users": [
    {
        "userId": 1,
        "firstname": "Test1",
        "lastname": "User1",
        "age": 18
    },
    {
        "userId": 2,
        "firstname": "Test2",
        "lastname": "User2",
        "age": 19
    },
    {
        "userId": 3,
        "firstname": "Test3",
        "lastname": "User3",
        "age": 18
    },
    {
        "userId": 4,
        "firstname": "Test4",
        "lastname": "User4",
        "age": 20
    },
    {
        "userId": 5,
        "firstname": "Test5",
        "lastname": "User5",
        "age": 21
    },
    {
        "userId": 6,
        "firstname": "Test6",
        "lastname": "User6",
        "age": 20
    }
]}`;

const gUSER_COLS = ["userId", "firstname", "lastname", "age", "action"];

const gUSER_ID_COL = 0;
const gUSER_FIRSTNAME_COL = 1;
const gUSER_LASTNAME_COL = 2;
const gUSER_AGE_COL = 3;
const gUSER_ACTION_COL = 4;

var gUserObj = JSON.parse(gJsonUser);

var gUserTable = $("#table-users").DataTable({
  data: gUserObj.users,
  columns: gUSER_COLS.map((col) => ({ data: col })),
  columnDefs: [
    {
      targets: 4,
      className: "text-center",
      defaultContent:
        "<button class='btn btn-primary user-detail'>Chi tiết</button>",
    },
  ],
});

$("#table-users").on("click", ".user-detail", function () {
  onUserDetailClick(this);
});

function onUserDetailClick(paramUserDetailBtn) {
  // lấy được data của user
  var vTableRow = $(paramUserDetailBtn).parents("tr");
  var vDataTableRow = gUserTable.row(vTableRow);
  var vUserData = vDataTableRow.data();
  /***
   * TODO: xử lý tiếp để show dữ liệu user lên Modal
   */
  $("#user-modal").modal("show");
  $("#input-modal-userid").val(vUserData["userId"]);
  $("#input-modal-firstname").val(vUserData["firstname"]);
  $("#input-modal-lastname").val(vUserData["lastname"]);
  $("#input-modal-age").val(vUserData["age"]);
}
