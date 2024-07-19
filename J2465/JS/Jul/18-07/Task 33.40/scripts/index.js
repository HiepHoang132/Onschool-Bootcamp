const BASE_URL = "https://62442d9d3da3ac772b0c50eb.mockapi.io/api/v1/";
const REQUEST_STATUS_OK = 200;
const REQUEST_CREATE_OK = 201; // status 201 là tạo mới thành công
const REQUEST_READY_STATUS_FINISH_AND_OK = 4;

function onPageLoading() {
  createTableData();
}

document.addEventListener("DOMContentLoaded", onPageLoading);

function createTableData() {
  sendGetRequest();
}

function sendGetRequest() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", BASE_URL + "/contacts", true);
  xmlHttp.onreadystatechange = function () {
    if (
      this.readyState === REQUEST_READY_STATUS_FINISH_AND_OK &&
      this.status === REQUEST_STATUS_OK
    ) {
      displayData(this.responseText);
    }
  };
  xmlHttp.send();
}

function displayData(response) {
  const data = JSON.parse(response);

  var table = document.getElementById("myTable");
  var tableBody = table.getElementsByTagName("tbody")[0];

  data.forEach((item, index) => {
    var row = tableBody.insertRow(-1);
    var soThuTu = row.insertCell(0);
    var name = row.insertCell(1);
    var email = row.insertCell(2);
    var message = row.insertCell(3);
    var createDate = row.insertCell(4);
    var action = row.insertCell(5);

    soThuTu.innerHTML = index + 1;
    name.innerHTML = item["name"];
    email.innerHTML = item["email"];
    message.innerHTML = item["message"];
    createDate.innerHTML = item["createDate"];

    var editButton = document.createElement("button");
    editButton.className = "btn btn-success mr-3";
    editButton.innerHTML = "Sửa";
    editButton.dataset.id = item["id"];

    var deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.innerHTML = "Xoá";
    deleteButton.dataset.id = item["id"];
    deleteButton.dataset.toggle = "modal";
    deleteButton.dataset.target = "#myModal";

    action.appendChild(editButton);
    action.appendChild(deleteButton);

    editButton.addEventListener("click", function () {
      goToContactDetailPage(this);
    });

    deleteButton.addEventListener("click", function () {
      document
        .getElementById("confirm-delete-btn")
        .addEventListener("click", function () {
          sendDeleteRequest(deleteButton.dataset.id);
        });
    });
  });
}

function goToContactDetailPage(button) {
  window.location.href = "contactDetail.html" + "?id=" + button.dataset.id;
}

function sendDeleteRequest(id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("DELETE", BASE_URL + "/contacts/" + id, true);
  xmlHttp.send();
  xmlHttp.onreadystatechange = function () {
    if (
      this.status === REQUEST_STATUS_OK &&
      this.readyState === REQUEST_READY_STATUS_FINISH_AND_OK
    ) {
      console.log("Delete contact " + id + " thành công");
    }
  };
}
