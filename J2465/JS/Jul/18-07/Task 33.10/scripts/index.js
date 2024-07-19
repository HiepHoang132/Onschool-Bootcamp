const BASE_URL = "https://62442d9d3da3ac772b0c50eb.mockapi.io/api/v1/";
const REQUEST_CREATE_OK = 201; // status 201 là tạo mới thành công
const REQUEST_READY_STATUS_FINISH_AND_OK = 4;

function onPageLoading() {
  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = getDataForm();
    if (validate(data)) {
        sendPostRequest(data)
    }
  });
}
document.addEventListener("DOMContentLoaded", onPageLoading);

function getDataForm() {
  var name = document.getElementById("input-name").value.trim();
  var email = document.getElementById("input-email").value.trim();
  var message = document.getElementById("input-message").value.trim();
  var createDate = getCurrentDate();

  return { name, email, message, createDate };
}

function validate(data) {
  const alerts = [];
  if (!data.name) {
    alerts.push("Chưa nhập tên");
  }

  if (!data.message) {
    alerts.push("Chưa nhập lời nhắn");
  }

  if (alerts.length > 0) {
    alert(alerts.join("\n"));
    return false;
  }

  return true;
}

function getCurrentDate() {
  const today = new Date().toISOString();
  const date = today.split("T")[0];
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

function sendPostRequest(data) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", BASE_URL + "/contacts");
  xmlHttp.setRequestHeader("Content-Type", "application/json;chartset=UTF-8");
  xmlHttp.send(JSON.stringify(data));

  xmlHttp.onreadystatechange = function () {
    if (
      this.status === REQUEST_CREATE_OK &&
      this.readyState === REQUEST_READY_STATUS_FINISH_AND_OK
    ) {
      console.log(this.responseText);
    }
  };
}
