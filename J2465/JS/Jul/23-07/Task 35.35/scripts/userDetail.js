const BASE_URL = "http://203.171.20.210:8080/devcamp-register-java-api/users";

$(document).ready(() => {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("id");
  $.ajax({
    url: BASE_URL + "/" + userId,
    type: "GET",
    datatype: "json",
    success: (res) => loadDataToForm(res),
    error: (ajaxContent) => console.log(ajaxContent.responseText),
  });
});

function loadDataToForm(res) {
  $("#input-first-name").val(res["firstname"]);
  $("#input-last-name").val(res["lastname"]);
  $("#input-subject").val(res["subject"]);
  $("#input-country").val(res["country"]);
  $("#input-customer-type").val(res["customerType"]);
  $("#input-register-status").val(res["registerStatus"]);
}
