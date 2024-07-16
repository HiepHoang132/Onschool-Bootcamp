const REQUEST_STATUS_OK = 200;
const REQUEST_READY_STATUS_FINISH_AND_OK = 4;
const BASE_URL = "https://62458c222cfed18817229118.mockapi.io/users";

function onPageLoading() {
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Sự kiện submit đã tạm dừng");

    var data = getDataForm();

    if (validate(data)) {
      sendGetRequest(data);
    }
  });
}

function getDataForm() {
  var username = document.getElementById("input-email").value.trim();
  var password = document.getElementById("input-password").value.trim();
  return { username, password };
}

function validate(data) {
  var alerts = [];
  if (data.username === "") {
    alerts.push("Email cần được nhập");
  } else if (!validateEmail(data.username)) {
    alerts.push("Email chưa đúng định dạng");
  }

  if (data.password === "") {
    alerts.push("Password cần được nhập");
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

function sendGetRequest(data) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", BASE_URL + "?" + data.toString(), true);
  xmlHttp.send();
  xmlHttp.onreadystatechange = function () {
    if (
      this.status === REQUEST_STATUS_OK &&
      this.readyState === REQUEST_READY_STATUS_FINISH_AND_OK
    ) {
      console.log(xmlHttp.responseText);
    }
  };
}
