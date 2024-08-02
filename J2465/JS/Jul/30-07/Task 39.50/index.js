$(document).ready(() => {
  $.ajax({
    url: "http://203.171.20.210:8080/devcamp-register-java-api/users",
    type: "GET",
    dataType: "json",
    success: onSuccess,
    error: onError,
  });
});

function onSuccess(res) {
  const arrayCols = [
    "id",
    "firstname",
    "lastname",
    "country",
    "subject",
    "customerType",
    "registerStatus",
    "action",
  ];

  $("#user-table").on("click", ".infoBtn", function () {
    var id = $(this).closest("tr").find("td:nth-child(1)").html();
    var firstName = $(this).closest("tr").find("td:nth-child(2)").html();
    var lastName = $(this).closest("tr").find("td:nth-child(3)").html();
    var country = $(this).closest("tr").find("td:nth-child(4)").html();
    var subject = $(this).closest("tr").find("td:nth-child(5)").html();
    var customerType = $(this).closest("tr").find("td:nth-child(6)").html();
    var registerStatus = $(this).closest("tr").find("td:nth-child(7)").html();

    console.log("%cThông tin user", "color:blue");
    console.log(`Id: ${id}`);
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
    console.log(`Country: ${country}`);
    console.log(`Subject: ${subject}`);
    console.log(`Customer type: ${customerType}`);
    console.log(`Register status: ${registerStatus}`);
  });

  $("#user-table").DataTable({
    columns: [
      { data: arrayCols[0] },
      { data: arrayCols[1] },
      { data: arrayCols[2] },
      { data: arrayCols[3] },
      { data: arrayCols[4] },
      { data: arrayCols[5] },
      { data: arrayCols[6] },
      { data: arrayCols[7] },
    ],
    columnDefs: [
      {
        targets: 7,
        defaultContent:
          "<button class='btn btn-info infoBtn'>Chi tiết</button>",
      },
    ],
  });

  loadDataToTable(res);
}

function onError(ajaxContent) {
  console.log(ajaxContent.responseText);
}

function loadDataToTable(data) {
  var $table = $("#user-table").DataTable();
  $table.clear();
  $table.rows.add(data);
  $table.draw();
}
