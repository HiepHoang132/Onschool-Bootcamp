"use strict";
// mảng orders
var gOrderObjects = [
  {
    id: 2,
    orderCode: "12456",
    gPizzaTypeId: 20,
    customerName: "Do Van Linh",
    date: "13/01/2021",
    status: "completed",
  },
  {
    id: 3,
    orderCode: "22456",
    gPizzaTypeId: 10,
    customerName: "Huynh Van Nam",
    date: "13/01/2021",
    status: "new",
  },
  {
    id: 4,
    orderCode: "22986",
    gPizzaTypeId: 15,
    customerName: "Do Thi Lan",
    date: "14/01/2021",
    status: "completed",
  },
  {
    id: 5,
    orderCode: "42086",
    gPizzaTypeId: 10,
    customerName: "Dinh Chau Ngoc",
    date: "14/01/2021",
    status: "completed",
  },
  {
    id: 6,
    orderCode: "56086",
    gPizzaTypeId: 15,
    customerName: "Dang Tien Minh",
    date: "15/01/2021",
    status: "new",
  },
  {
    id: 7,
    orderCode: "90081",
    gPizzaTypeId: 20,
    customerName: "Do Hong Quan",
    date: "15/01/2021",
    status: "inprogress",
  },
  {
    id: 8,
    orderCode: "67012",
    gPizzaTypeId: 15,
    customerName: "Bui Thanh Phuoc",
    date: "15/01/2021",
    status: "inprogress",
  },
];

// mảng pizza Type
var gPizzaType = [
  {
    typeId: 10,
    typeName: "Hải Sản",
  },
  {
    typeId: 15,
    typeName: "Bò bít tết",
  },
  {
    typeId: 20,
    typeName: "Thịt gà",
  },
];

let index = 0;

$(document).ready(() => {
  getPizzaOptions();
  loadDataToTable();
  $("#btn-filter-order").click(() => {
    filterPizza();
  });
});

function loadDataToTable() {
  $orderTable.clear().rows.add(gOrderObjects).draw();
}

var arrayColumns = [
  "id",
  "orderCode",
  "gPizzaTypeId",
  "customerName",
  "date",
  "status",
  "action",
];

var $orderTable = $("#order-table").DataTable({
  columns: arrayColumns.map((col) => ({ data: col })),
  columnDefs: [
    { targets: 0, render: generateIndex },
    {
      targets: 6,
      defaultContent: `
        <i class='fas fa-edit fa-lg' style='cursor:pointer'></i>
        <i class='fas fa-trash-alt fa-lg' style='cursor:pointer'></i>
    `,
    },
  ],
});

function generateIndex() {
  return ++index;
}

function getPizzaOptions() {
  var $selectElement = $("#gPizzaTypeSelect");
  var options = gPizzaType.map((type) =>
    $("<option>").val(type.typeId).text(type.typeName)
  );

  $selectElement.append(options);
}

function filterPizza() {
  var $selectedPizzaType = $("#gPizzaTypeSelect").find(":selected").val();

  $orderTable.column(2).search($selectedPizzaType).draw();
}
