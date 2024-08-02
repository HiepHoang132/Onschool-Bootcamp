$(document).ready(function () {
  var gJsonUsers = `{
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

  onPageLoading();
  $("#user-table").on("click", "#infoBtn", function () {
    console.log($(this).closest("tr").find("td:nth-child(1)").html());
    console.log($(this).closest("tr").find("td:nth-child(2)").html());
    console.log($(this).closest("tr").find("td:nth-child(3)").html());
    console.log($(this).closest("tr").find("td:nth-child(4)").html());
  });

  function onPageLoading() {
    const userData = JSON.parse(gJsonUsers)["users"];
    const arrayColumns = ["userId", "firstname", "lastname", "age", "action"];

    $("#user-table").DataTable({
      columns: [
        { data: arrayColumns[0] },
        { data: arrayColumns[1] },
        { data: arrayColumns[2] },
        { data: arrayColumns[3] },
        { data: arrayColumns[4] },
      ],
      data: userData,
      columnDefs: [
        {
          targets: 0,
          className: "text-center text-primary",
        },
        {
          targets: 3,
          className: "text-right",
        },
        {
          targets: 4,
          defaultContent:
            "<button class='btn btn-info text-center' id='infoBtn'>Chi tiết</button>",
        },
        {
          targets: 4,
          className: "text-center",
        },
      ],
    });
  }
});
