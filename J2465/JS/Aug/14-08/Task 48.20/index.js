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
    ]
}`;

var gUserObj = JSON.parse(gJsonUser)["users"];

var gUserTable = $("#table-users").DataTable({
  columns: ["userId", "firstname", "lastname", "age", "action"].map((col) => ({
    data: col,
  })),
  columnDefs: [
    {
      targets: 4,
      defaultContent:
        "<button class='btn btn-primary user-detail'>Chi tiết</button>",
    },
  ],
});

$(document).ready(() => {
  loadDataToTable();

  gUserTable.on("click", ".user-detail", function () {
    onUserDetailClick(this);
  });
});

function loadDataToTable() {
  gUserTable.clear().rows.add(gUserObj).draw();
}

// hàm xử lý khi click vào nút user detail
function onUserDetailClick(paramUserDetailBtn) {
  var vUserDetailBtn = $(paramUserDetailBtn);
  var vTableRow = vUserDetailBtn.parents("tr");
  var vDataTableRow = gUserTable.row(vTableRow);
  var vData = vDataTableRow.data();
  /***
   * TODO: xử lý tiếp để show dữ liệu user lên Modal
   */

  $("#input-user-id").val(vData.userId);
  $("#input-firstname").val(vData.firstname);
  $("#input-lastname").val(vData.lastname);
  $("#input-age").val(vData.age);
  $("#modal-user-detail").modal("show");
}
