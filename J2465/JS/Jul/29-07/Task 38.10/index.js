"use strict";
/*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
var gUserTable = $("#table-users");

/*** REGION 2 - Vùng gán / thực thi hàm xử lý sự kiện cho các elements */
$("#btn-load-user-table").on("click", onBtnLoadUserClick);
$("#btn-direct-handler-attach").on("click", onDirectHandleAttachClick);
$("#btn-delegate-handler").on("click", onBtnOnDelegateClick);
$("#btn-add-event-rows").on("click", onBtnAddEventRowsClick);

/*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
// hàm thực hiện call api và load dữ liệu user vào table, chưa gán sự kiện cho nút detail
function onBtnLoadUserClick() {
  $.ajax({
    url: "http://203.171.20.210:8080/devcamp-register-java-api/users",
    type: "GET",
    dataType: "json",
    // async ko đc truyền nên nhận giá tị default = true
    success: function (resObj) {
      loadArrayToUserTable(resObj);
    },
    error: function (ajaxContext) {
      console(ajaxContext.responseText);
    },
  });
}

// hàm gắn event handler trực tiếp vào nút chi tiết
function onDirectHandleAttachClick() {
  $(".user-detail").on("click", function () {
    onUserDetailClick(this);
  });
}

// hàm delefate event handler cho các nút chi tiết thông qua table
function onBtnOnDelegateClick() {
  $("#table-users").on("click", ".user-detail", function () {
    onUserDetailClick(this);
  });
}

function onBtnAddEventRowsClick() {
  $("#table-users").on("click", "tr", function () {
    onRowDetailClick(this);
  });
}

function onRowDetailClick(paramRow) {
  console.log($(paramRow).index());
}

// hàm xử lý khi click vào nút user detail
function onUserDetailClick(paramUserDetailBtn) {
  var vUserDetailBtn = $(paramUserDetailBtn);
  var vUserId = vUserDetailBtn.data("user-id");
  var vFirstName = vUserDetailBtn.data("firstname");
  var vLastName = vUserDetailBtn.data("lastname");
  var vCountry = vUserDetailBtn.data("country");

  console.log("Id: " + vUserId);
  console.log("firstname: " + vFirstName);
  console.log("lastname: " + vLastName);
  console.log("Country: " + vCountry);
}

/*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
/**
 * Hàm thực hiện load user server trả về lên table
 */
function loadArrayToUserTable(paramObj) {
  gUserTable.find("tr:gt(0)").remove();
  // load dữ liệu vào bảng
  for (var bI = 0; bI < paramObj.length; bI++) {
    var bNewRow = $("<tr/>").appendTo(gUserTable);
    // $(selector, {})         .action()
    var bUserCode = $("<td/>", {
      html: paramObj[bI].id,
    }).appendTo(bNewRow);

    var bFirstName = $("<td/>", {
      html: paramObj[bI].firstname,
    }).appendTo(bNewRow);

    var bLastName = $("<td/>", {
      html: paramObj[bI].lastname,
    }).appendTo(bNewRow);

    var bAge = $("<td/>", {
      html: paramObj[bI].country,
    }).appendTo(bNewRow);

    var bActionCell = $("<td/>").appendTo(bNewRow);
    var bDetailButton = $("<button/>", {
      text: "Chi tiết",
    })
      .data("user-id", paramObj[bI].id)
      .data("firstname", paramObj[bI].firstname)
      .data("lastname", paramObj[bI].lastname)
      .data("country", paramObj[bI].country)
      .addClass("btn btn-primary user-detail")
      .appendTo(bActionCell);
  }
}
