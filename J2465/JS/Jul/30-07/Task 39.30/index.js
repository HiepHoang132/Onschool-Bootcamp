$(document).ready(function () {
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

  const loadDataToTable = (data) => {
    "use strict";
    var $table = $("#user-table").DataTable();
    $table.clear();
    $table.rows.add(data);
    $table.draw();
  };

  onPageLoading();

  function onPageLoading() {
    var arrayColumns = ["userId", "firstname", "lastname", "age", "action"];

    $("#user-table").DataTable({
      columns: [
        { data: arrayColumns[0] },
        { data: arrayColumns[1] },
        { data: arrayColumns[2] },
        { data: arrayColumns[3] },
        { data: arrayColumns[4] },
      ],
      columnDefs: [
        { targets: 0, className: "text-center text-primary" },
        { targets: 3, className: "text-right" },
        {
          targets: 4,
          className: "text-center",
        },
        {
          targets: 4,
          defaultContent: "<button class='btn btn-info'>Chi tiết</button>",
        },
      ],
    });

    loadDataToTable(JSON.parse(gJsonUser)["users"]);
  }
});
