const BASE_URL = "http://203.171.20.210:8080/devcamp-register-java-api/users";

$(document).ready(() => {
  $.ajax({
    url: BASE_URL,
    type: "GET",
    datatype: "json",
    success: (res) => loadDataToTable(res),
    error: (ajaxContent) => console.log(ajaxContent.responseText),
  });

  $("#insert-btn").click(() => {
    console.log("Update clicked");
    window.location.href = "insertUser.html";
  });
});

function loadDataToTable(res) {
  var $tableBody = $("#table-users tbody");

  res.forEach((item) => {
    var $row = $("<tr></tr>");

    $row
      .append($("<td></td>").text(item["id"]))
      .append($("<td></td>").text(item["firstname"]))
      .append($("<td></td>").text(item["lastname"]))
      .append($("<td></td>").text(item["country"]))
      .append($("<td></td>").text(item["subject"]))
      .append($("<td></td>").text(item["customerType"]))
      .append($("<td></td>").text(item["registerStatus"]));

    var $editButton = $("<button></button>")
      .addClass("btn btn-primary mr-3")
      .text("Sửa")
      .attr("data-id", item["id"]);
    var $deleteButton = $("<button></button>")
      .addClass("btn btn-danger")
      .text("Xoá")
      .attr("data-id", item["id"]);

    var $action = $("<td></td>").append($editButton).append($deleteButton);
    $row.append($action);
    $tableBody.append($row);
  });
}

$(document).on("click", ".btn-primary", function () {
  console.log("Nút sửa được bấm");
  console.log($(this).data("id"));
  window.location.href = "userDetail.html" + "?id=" + $(this).data("id");
});

$(document).on("click", ".btn-danger", function () {
  console.log("Nút xoá được bấm");
  console.log($(this).data("id"));
  const userId = $(this).data("id");
  if (confirm("Bạn có muốn xoá user này không?")) {
    deleteUser(userId);
  }
});

function deleteUser(userId) {
  $.ajax({
    url: BASE_URL + "/" + userId,
    type: "DELETE",
    datatype: "json",
    success: onSuccess,
    error: onError,
  });
}

function onSuccess(res) {
  alert("Xoá user thành công!");
  window.location.href = "index.html";
}

function onError(res) {
  alert("Xoá user không thành công!");
  window.location.href = "index.html";
}
