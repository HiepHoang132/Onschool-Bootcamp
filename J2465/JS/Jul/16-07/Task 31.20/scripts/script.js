"use strict";

const REQUEST_STATUS_OK = 200;
const REQUEST_READY_STATUS_FINISH_AND_OK = 4;
const BASE_URL = "http://203.171.20.210:8080/devcamp-pizza365/orders";

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
  var button = document.createElement("button");
  button.className = "btn btn-info";
  button.innerHTML = "Chi tiết";
  button.dataset.id = item["id"];
  button.dataset.orderCode = item["orderCode"];
  button.addEventListener("click", function () {
    onButtonClick(this);
  });
  cell.appendChild(button);
}

function onButtonClick(button) {
  window.location.href =
    "orderDetail.html" +
    "?id=" +
    button.dataset.id +
    "&orderCode=" +
    button.dataset.orderCode;
}
