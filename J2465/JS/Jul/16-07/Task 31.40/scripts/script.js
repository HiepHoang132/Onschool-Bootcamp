"use strict";

const REQUEST_STATUS_OK = 200;
const REQUEST_READY_STATUS_FINISH_AND_OK = 4;
const BASE_URL = "http://203.171.20.210:8080/devcamp-pizza365/orders";
const REQUEST_DELETE_SUCCESS = 204; // status 204 - Xóa thành công

function onPageLoading() {
  getAllOrders();
}

function getAllOrders() {
  var xmlHttp = new XMLHttpRequest();
  callApiToGetAllOrders(xmlHttp);

  xmlHttp.onreadystatechange = function () {
    if (
      this.readyState == REQUEST_READY_STATUS_FINISH_AND_OK &&
      this.status == REQUEST_STATUS_OK
    ) {
      loadOrderToTable(xmlHttp);
    }
  };
}

function callApiToGetAllOrders(xmlHttp) {
  xmlHttp.open("GET", BASE_URL, true);
  xmlHttp.send();
}

function loadOrderToTable(xmlHttp) {
  var data = JSON.parse(xmlHttp.responseText);
  var tableBody = document.querySelector("#table-order tbody");
  data.forEach((item) => createTableRow(tableBody, item));
}

function createTableRow(tableBody, item) {
  var newRow = tableBody.insertRow(-1);
  addTableCell(newRow, item["orderCode"]);
  addTableCell(newRow, item["kichCo"]);
  addTableCell(newRow, item["loaiPizza"]);
  addTableCell(newRow, item["idLoaiNuocUong"]);
  addTableCell(newRow, item["thanhTien"]);
  addTableCell(newRow, item["hoTen"]);
  addTableCell(newRow, item["soDienThoai"]);
  addTableCell(newRow, item["trangThai"]);
  addButtonCell(newRow, item);
}

function addTableCell(row, text) {
  var cell = row.insertCell(-1);
  cell.innerHTML = text;
}

function addButtonCell(row, item) {
  var cell = row.insertCell(-1);
  var infoButton = document.createElement("button");
  infoButton.className = "btn btn-info";
  infoButton.innerHTML = "Chi tiết";

  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger ml-3 button-delete";
  deleteButton.innerHTML = "Delete";
  deleteButton.dataset.id = item["id"];
  deleteButton.addEventListener("click", function () {
    if (confirm("Bạn có muốn xoá đơn hàng?")) {
      onBtnDeleteOrderClick(this);
    } else {
      console.log("Huỷ bỏ hành động xoá");
    }
  });

  infoButton.dataset.id = item["id"];
  infoButton.dataset.orderCode = item["orderCode"];
  infoButton.addEventListener("click", function () {
    onButtonInfoClick(this);
  });
  cell.appendChild(infoButton);
  cell.appendChild(deleteButton);
}

function onButtonInfoClick(button) {
  window.location.href =
    "orderDetail.html" +
    "?id=" +
    button.dataset.id +
    "&orderCode=" +
    button.dataset.orderCode;
}

function onBtnDeleteOrderClick(button) {
  console.log(button.dataset.id);
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("DELETE", `${BASE_URL}/${button.dataset.id}`);
  xmlHttp.send();
  xmlHttp.onreadystatechange = function () {
    if (
      this.status === REQUEST_DELETE_SUCCESS &&
      this.readyState === REQUEST_READY_STATUS_FINISH_AND_OK
    ) {
      console.log("Delete order " + button.dataset.id + " thành công!");
    }
  };
}
