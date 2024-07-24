const BASE_URL = "http://203.171.20.210:8080/devcamp-register-java-api/users";

const formData = {
  firstname: "",
  lastname: "",
  subject: "",
  country: "",
  customerType: "",
  registerStatus: "New",
};

$(document).ready(() => {
  $("#insert-btn").on("click", (e) => {
    e.preventDefault();
    if (validate()) {
      insertUser();
    }
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

function getFormData() {
  formData.firstname = $("#input-first-name").val();
  formData.lastname = $("#input-last-name").val();
  formData.subject = $("#input-subject").val();
  formData.country = $("#input-country").val();
  formData.customerType = $("#input-customer-type").val();
  formData.registerStatus = $("#input-register-status").val();
}

function validate() {
  getFormData();
  const alerts = [];

  if (!formData.firstname) {
    alerts.push("First name chưa được nhập");
  }

  if (!formData.lastname) {
    alerts.push("Last name chưa được nhập");
  }

  if (!formData.subject) {
    alerts.push("Subject chưa được nhập");
  }

  if (formData.country === "0") {
    alerts.push("Country chưa được chọn");
  }

  if (formData.customerType === "0") {
    alerts.push("Customer type chưa được chọn");
  }

  if (alerts.length > 0) {
    alert(alerts.join("\n"));
    return false;
  }

  return true;
}

function insertUser() {
  $.ajax({
    url: BASE_URL,
    type: "POST",
    contentType: "application/json;chartset=UTF-8",
    data: JSON.stringify(formData),
    success: onSuccess,
    error: onError,
  });
}

function onSuccess(res) {
  console.log(res);
  alert("Thêm user thành công!");
  window.location.href = "index.html";
}

function onError(ajaxContent) {
  console.log(ajaxContent.responseText);
  alert("Thêm user không thành công!");
  window.location.href = "index.html";
}
