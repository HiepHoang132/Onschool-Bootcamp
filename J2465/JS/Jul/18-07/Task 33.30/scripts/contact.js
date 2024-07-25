const BASE_URL = "https://62442d9d3da3ac772b0c50eb.mockapi.io/api/v1/";

const REQUEST_STATUS_OK = 200;
const REQUEST_CREATE_OK = 201; // status 201 là tạo mới thành công
const REQUEST_READY_STATUS_FINISH_AND_OK = 4;

const data = {
  name: "",
  email: "",
  message: "",
  createDate: "",
};

function onPageLoading() {
  const params = new URLSearchParams(window.location.search);
  const contactId = params.get("id");

  getContactById(contactId, handleGetContactByIdResponse);
  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    getDataForm();
    if (validate()) {
      updateContact(contactId);
    }
  });
}

document.addEventListener("DOMContentLoaded", onPageLoading);

function getContactById(id, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", BASE_URL + "/contacts/" + id, false);
  xmlHttp.onload = () => {
    callback(xmlHttp);
  };
  xmlHttp.send();
}

function handleGetContactByIdResponse(xmlHttp) {
  if (
    xmlHttp.status === REQUEST_STATUS_OK &&
    xmlHttp.readyState == REQUEST_READY_STATUS_FINISH_AND_OK
  ) {
    displayContact(xmlHttp.responseText);
  }
}

function displayContact(respsone) {
  const data = JSON.parse(respsone);

  document.getElementById("input-name").value = data["name"];
  document.getElementById("input-email").value = data.email;
  document.getElementById("input-message").value = data.message;
  document.getElementById("input-create-date").value = data.createDate;
}

function getDataForm() {
  data.name = document.getElementById("input-name").value;
  data.email = document.getElementById("input-email").value;
  data.message = document.getElementById("input-message").value;
  data.createDate = document.getElementById("input-create-date").value;
}

function validate() {
  const alerts = [];
  if (!data.name) {
    alerts.push("Tên chưa được nhập");
  }

  if (!data.email) {
    alerts.push("Email chưa được nhập");
  }

  if (!data.message) {
    alerts.push("Message chưa được nhập");
  } else if (data.message.length < 20) {
    alerts.push("Message phải có độ dài trên 20 ký tự");
  }

  if (!data.createDate) {
    alerts.push("Ngày liên hệ chưa được nhập");
  } else if (validateDate(data.createDate)) {
    alerts.push("Invalid date format. Please use dd/mm/yyyy.");
  }

  if (alerts.length > 0) {
    alert(alerts.join("\n"));
    return false;
  }

  return true;
}

function validateDate(dateInput) {
  var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

  if (!regex.test(dateInput)) {
    return true;
  }

  return false;
}

function updateContact(id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("PUT", BASE_URL + "/contacts/" + id, true);
  xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlHttp.send(JSON.stringify(data));

  xmlHttp.onreadystatechange = function () {
    if (
      this.status === REQUEST_STATUS_OK &&
      this.readyState === REQUEST_READY_STATUS_FINISH_AND_OK
    ) {
      alert("Sửa thông tin contact thành công");
      window.location.href = "index.html";
    }
  };
}
