"use strict";

$(document).ready(() => {
  $("#btn-add-new-row").on("click", onBtnAddNewRowClick);
  $("#userTable").on("click", "tr", function () {
    showUsername(this);
  });
});

function onBtnAddNewRowClick() {
  var vUserTable = $("#userTable");
  var bNewRow = $("<tr/>").appendTo(vUserTable);
  $("<td/>", {
    html: "namtt",
  }).appendTo(bNewRow);

  $("<td/>", {
    html: "Trần Trọng",
  }).appendTo(bNewRow);

  $("<td/>", {
    html: "Nam",
  }).appendTo(bNewRow);

  $("<td/>", {
    html: "namtt@gmail.com",
  }).appendTo(bNewRow);

  $("<td/>", {
    html: 23,
  }).appendTo(bNewRow);
}

function showUsername(row) {
  const username = $(row).children("td").first().html();
  alert(`Username: ${username}`);
}
