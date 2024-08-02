"use strict";
var gUsersArr = [];
var gFoundUser = [];
function onPageLoading() {
  $.ajax({
    url: "http://203.171.20.210:8080/devcamp-register-java-api/users",
    type: "GET",
    dataType: "json",
    async: false,
    success: function (paramObjectUser) {
      gUsersArr = paramObjectUser;
    },
    error: (ajaxContent) => console.log(ajaxContent.responseText),
  });

  fillDataTableUser(gUsersArr);

  $("#table-users").on("click", "tr", function () {
    var cellId = $(this).children("td").first().html();
    alert(`Mã người dùng (Id): ${cellId}`);
  });

  $("#btn-filter").on("click", () => {
    var firstNameInput = $("#firstNameInput").val().trim().toLowerCase();
    var lastNameInput = $("#lastNameInput").val().trim().toLowerCase();

    $("#table-users tbody tr").each(function () {
      var $row = $(this);
      var firstName = $row.find("td:nth-child(2)").text().toLowerCase();
      var lastName = $row.find("td:nth-child(3)").text().toLowerCase();

      if (firstNameInput && lastNameInput) {
        $row.toggle(firstName === firstNameInput && lastName === lastNameInput);
      } else if (firstNameInput || lastNameInput) {
        $row.toggle(firstName === firstNameInput || lastName === lastNameInput);
      } else {
        $row.show();
      }
    });
  });
}

/**
 * Hàm load data vào table
 * Input: mảng users
 * Output: table có dữ liệu
 */
function fillDataTableUser(paramObjectUser) {
  var vUserTable = $("#table-users");
  for (var bI = 0; bI < paramObjectUser.length; bI++) {
    var bNewRow = $("<tr/>").appendTo(vUserTable);
    var bId = $("<td/>", {
      html: paramObjectUser[bI].id,
    }).appendTo(bNewRow);

    var vFirstName = $("<td/>", {
      html: paramObjectUser[bI].firstname,
    }).appendTo(bNewRow);

    var vLastName = $("<td/>", {
      html: paramObjectUser[bI].lastname,
    }).appendTo(bNewRow);

    var vCountry = $("<td/>", {
      html: paramObjectUser[bI].country,
    }).appendTo(bNewRow);

    var vSubject = $("<td/>", {
      html: paramObjectUser[bI].subject,
    }).appendTo(bNewRow);

    var vCustomerType = $("<td/>", {
      html: paramObjectUser[bI].customerType,
    }).appendTo(bNewRow);

    var vRegisterStatus = $("<td/>", {
      html: paramObjectUser[bI].registerStatus,
    }).appendTo(bNewRow);

    var vAction = $("<td/>").appendTo(bNewRow);
    var vDetailButon = $("<button/>", {
      text: "Chi tiết",
    })
      .addClass("btn btn-primary")
      .appendTo(vAction);
  }
}
