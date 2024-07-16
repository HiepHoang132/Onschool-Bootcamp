const REQUEST_STATUS_CREATED = 201;
const REQUEST_READY_STATUS_FINISH_AND_OK = 4;
const BASE_URL = "https://62458c222cfed18817229118.mockapi.io/users";

function onPageLoading() {
  document.getElementById("my-form").addEventListener("submit", (e) => {
    e.preventDefault();
    var data = getDataForm();
    if (validate(data)) {
      console.log(data);
      sendPostRequest(data, handlePostRequest);
    }
  });
}

function getDataForm() {
  var fullname = document.getElementById("input-name").value.trim();
  var email = document.getElementById("input-email").value.trim();
  var password = document.getElementById("input-password").value.trim();
  var confirmPassword = document
    .getElementById("input-confirm-password")
    .value.trim();

  return {
    fullname,
    email,
    password,
    confirmPassword,
  };
}

function validate(data) {
  const alerts = [];
  if (!data.fullname) {
    alerts.push("Tên chưa nhập");
  }

  if (!data.email) {
    alerts.push("Email chưa nhập");
  } else if (!validateEmail(data.email)) {
    alerts.push("Email chưa đúng định dạng");
  }

  if (!data.password) {
    alerts.push("Password chưa nhập");
  }

  if (!data.confirmPassword) {
    alerts.push("Xác nhận password chưa nhập");
  } else if (data.password !== data.confirmPassword) {
    alerts.push("Password và xác nhận password không khớp");
  }

  if (alerts.length > 0) {
    alert(alerts.join("\n"));
    return false;
  }

  return true;
}

function validateEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function sendPostRequest(data, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", BASE_URL, true);
  xmlHttp.send(JSON.stringify(data));
  xmlHttp.onload = function () {
    callback(this);
  };
}

function handlePostRequest(xmlHttp) {
  if (
    xmlHttp.status === REQUEST_STATUS_CREATED &&
    xmlHttp.readyState === REQUEST_READY_STATUS_FINISH_AND_OK
  ) {
    console.log(xmlHttp.responseText);
  } else {
    console.log("Request failed with status:", xmlHttp.status);
  }
}
