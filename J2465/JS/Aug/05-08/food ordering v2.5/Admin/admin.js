const BASE_URL = "https://food-ordering-fvo9.onrender.com/api/";
let vouchers = [];
let order = {};
let orderId = "";

$(document).ready(() => {
  fetchAllOrders();
  fetchAllVouchers();

  $("#order-table").on("click", ".edit-order", function () {
    var $row = $(this).closest("tr");
    orderId = $orderTable.row($row).data().id;
    console.log(orderId);

    loadDataToModal($row);
  });

  $("#input-voucher").on("keypress", function (e) {
    if (e.key === "Enter") {
      const inputVoucher = $(this).val().trim();
      const voucher = vouchers.find((v) => v.voucherCode === inputVoucher);

      if (voucher) {
        order.voucherId = voucher.id;
        $("#voucher-discount").html(`${voucher.discount}%`);
      }
    }
  });

  $("#update-btn").click(() => {
    getDataFromModal();
    if (validateModal()) {
      updateOrder();
    }
  });

  $("#order-table").on("click", ".delete-order", function () {
    var $row = $(this).closest("tr");
    orderId = $orderTable.row($row).data().id;
    console.log(orderId);

    $("#delete-modal").modal("show");
  });

  $("#delete-btn").click(() => {
    deleteOrder();
  });
});

function fetchAllOrders() {
  $.ajax({
    url: BASE_URL + "orders",
    type: "GET",
    dataType: "json",
    success: loadDataToTable,
    error: (xhr) => console.log(xhr.responseText),
  });
}

function fetchAllVouchers() {
  $.ajax({
    url: BASE_URL + "vouchers",
    type: "GET",
    dataType: "json",
    success: (data) => (vouchers = data),
    error: (xhr) => console.log(xhr.responseText),
  });
}

function loadDataToTable(data) {
  $orderTable.clear().rows.add(data).draw();
}

var $orderTable = $("#order-table").DataTable({
  columns: [
    { data: "id", render: (data, type, row, meta) => meta.row + 1 },
    { data: "orderCode" },
    { data: null, render: generateName },
    { data: "methodPayment" },
    { data: null, render: generateQuantity },
    { data: null, render: generateTotal },
    { data: null, render: generateDay },
    {
      data: null,
      defaultContent: `
        <img class="edit-order" src="https://cdn0.iconfinder.com/data/icons/glyphpack/45/edit-alt-512.png" style="width: 20px; cursor:pointer;">
        <img class="delete-order" src="https://cdn4.iconfinder.com/data/icons/complete-common-version-6-4/1024/trash-512.png" style="width: 20px; cursor:pointer;">
      `,
    },
  ],
});

function generateName(data, type, row) {
  return `${row.lastName} ${row.firstName}`;
}

function generateQuantity(data) {
  return data.foods.length;
}

function generateTotal(data) {
  const total = data.foods.reduce((sum, food) => sum + food.price, 0);
  return `$${total}`;
}

function generateDay(data) {
  const [year, month, day] = data.createdAt.split("T")[0].split("-");
  return `${day}-${month}-${year}`;
}

function loadDataToModal($row) {
  const rowData = $orderTable.row($row).data();

  $("#order-code").html(rowData.orderCode);
  $("#input-lastname").val(rowData.lastName);
  $("#input-firstname").val(rowData.firstName);
  $("#input-email").val(rowData.email);
  $("#input-phone").val(rowData.phone);
  $("#input-address").val(rowData.address);
  $("#select-payment").val(rowData.methodPayment);

  const voucher = vouchers.find((v) => v.id === rowData.voucherId);
  if (voucher) {
    $("#input-voucher").val(voucher.voucherCode);
    $("#voucher-discount").html(`${voucher.discount}%`);
  } else {
    $("#input-voucher").val("");
    $("#voucher-discount").html("0%");
  }

  order.id = rowData.id;
  $("#edit-modal").modal("show");
}

function getDataFromModal() {
  order = {
    lastName: $("#input-lastname").val().trim(),
    firstName: $("#input-firstname").val().trim(),
    email: $("#input-email").val().trim(),
    phone: $("#input-phone").val().trim(),
    address: $("#input-address").val().trim(),
    voucherId:
      vouchers.find((v) => v.voucherCode === $("#input-voucher").val().trim())
        ?.id || null,
  };
}

function validateModal() {
  const alerts = [];

  if (!order.lastName) alerts.push("Họ và đệm cần được nhập");
  if (!order.firstName) alerts.push("Tên cần được nhập");
  if (!order.email) alerts.push("Email cần được nhập");
  if (!order.phone) {
    alerts.push("Phone cần được nhập");
  } else if (!validatePhone(order.phone)) {
    alerts.push("Phone sai định dạng. Cần 10 số");
  }
  if (!order.address) alerts.push("Address cần được nhập");

  if (alerts.length > 0) {
    alert(alerts.join("\n"));
    return false;
  }

  return true;
}

function validatePhone(phone) {
  const phonePattern = /^\d{10}$/;
  return phonePattern.test(phone);
}

function updateOrder() {
  $.ajax({
    url: BASE_URL + "orders/" + orderId,
    type: "PUT",
    contentType: "application/json;charset=UTF-8",
    data: JSON.stringify(order),
    success: handleUpdateSuccessResponse,
    error: (xhr) => console.log(xhr.responseText),
  });
}

function handleUpdateSuccessResponse() {
  alert("Cập nhật đơn hàng thành công");
  $("#edit-modal").modal("hide");
  fetchAllOrders();
}

function deleteOrder() {
  $.ajax({
    url: BASE_URL + "orders/" + orderId,
    type: "DELETE",
    contentType: "application/json;charset=UTF-8",
    success: handleDeleteSuccessResponse,
    error: (xhr) => console.log(xhr.responseText),
  });
}

function handleDeleteSuccessResponse() {
  alert("Xoá đơn hàng thành công");
  $("#delete-modal").modal("hide");
  fetchAllOrders();
}
