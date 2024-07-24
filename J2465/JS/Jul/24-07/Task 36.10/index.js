"use strict";
const gREQUEST_READY_STATE_FINISH_OK = 4;
const gREQUEST_STATUS_OK = 200;
/*
 * load user data
 */
function loadDataUsers() {
  var vXhttp = new XMLHttpRequest();
  vXhttp.onreadystatechange = function () {
    if (
      this.readyState == gREQUEST_READY_STATE_FINISH_OK &&
      this.status == gREQUEST_STATUS_OK
    ) {
      console.log("responseText = " + vXhttp.responseText);
    }
  };
  vXhttp.open(
    "GET",
    "http://203.171.20.210:8080/devcamp-register-java-api/users",
    true
  );
  vXhttp.send();
}

//sample function get user data by id
function getUserDataById() {
  var vUserId = "207419";
  var vXhttp = new XMLHttpRequest();
  vXhttp.onreadystatechange = function () {
    if (
      this.readyState == gREQUEST_READY_STATE_FINISH_OK &&
      this.status == gREQUEST_STATUS_OK
    ) {
      console.log(vXhttp.responseText); // xem trên console.log để biết cấu trúc
    }
  };
  vXhttp.open(
    "GET",
    "http://203.171.20.210:8080/devcamp-register-java-api/users/" + vUserId,
    true
  );
  vXhttp.send();
}

/*
 * load user data
 */
function loadAjaxDataUsers() {
  $.ajax({
    url: "http://203.171.20.210:8080/devcamp-register-java-api/users",
    type: "GET",
    dataType: "json", // added data type
    success: function (res) {
      console.log(res);
    },
    error: function (ajaxContext) {
      alert(ajaxContext.responseText);
    },
  });
}

//sample function get user data by id
function getAjaxUserDataById() {
  var vUserId = "206797";

  $.ajax({
    url:
      "http://203.171.20.210:8080/devcamp-register-java-api/users/" + vUserId,
    type: "GET",
    dataType: "json", // added data type
    success: function (res) {
      console.log(res);
    },
    error: function (ajaxContext) {
      alert(ajaxContext.responseText);
    },
  });
}

//update user info
function callRestApiUpdate() {
  var vUserId = "207419";
  //data to be sent
  var vObjectRequestData = {
    firstname: "Mike", //bạn có thể sửa các giá trị này để thử, và lại get lại data
    lastname: "Donasky",
    subject: "On business 200",
    country: "USA",
  };
  //
  var vXmlhttp = new XMLHttpRequest(); // new HttpRequest instance
  var vUrlUpdateInfo =
    "http://203.171.20.210:8080/devcamp-register-java-api/users/" + vUserId;

  vXmlhttp.open("PUT", vUrlUpdateInfo);
  vXmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  vXmlhttp.onreadystatechange = function () {
    if (
      this.readyState == gREQUEST_READY_STATE_FINISH_OK &&
      this.status == gREQUEST_STATUS_OK
    ) {
      console.log("Cap nhat thong tin thanh cong: " + this.responseText);
    }
  };
  vXmlhttp.send(JSON.stringify(vObjectRequestData)); //send request
}

function callAjaxRestApiUpdate() {
  var vUserId = "206797";

  var vObjectRequestData = {
    firstname: "Robert",
    lastname: "Downey Jr.",
    subject: "Iron man",
    country: "USA",
  };

  $.ajax({
    url:
      "http://203.171.20.210:8080/devcamp-register-java-api/users/" + vUserId,
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify(vObjectRequestData),
    success: onSuccess,
    error: onError,
  });
}

function onSuccess(res) {
  console.log(res);
  console.log(Object.entries(res));
}

function onError(ajaxContext) {
  alert(ajaxContext.responseText);
}
