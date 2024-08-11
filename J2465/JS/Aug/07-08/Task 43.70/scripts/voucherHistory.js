const BASE_URL = "http://203.171.20.210:8080/devcamp-lucky-dice";
let index = 0;

$(document).ready(() => {
  loadDataToInput();
  loadVoucherHistoryToTable();
});

function getQueryParams(param) {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get(param);
}

function loadDataToInput() {
  const username = getQueryParams("username");
  const firstname = getQueryParams("firstname");
  const lastname = getQueryParams("lastname");

  $("#input-username").val(username);
  $("#input-firstname").val(firstname);
  $("#input-lastname").val(lastname);

  getVoucherHistory(username);
}

function getVoucherHistory(username) {
  $.ajax({
    url: BASE_URL + "/voucher-history?username=" + username,
    type: "GET",
    async: false,
    success: loadVoucherHistoryToTable,
    error: (xhr) => console.log(xhr.responseText),
  });
}

function loadVoucherHistoryToTable(data) {
  if (data && data.vouchers) {
    $voucherHistoryTable.clear().rows.add(data.vouchers).draw();
  }
}

var arrayColumns = ["id", "maVoucher", "phanTramGiamGia", "ngayTao"];
var $voucherHistoryTable = $("#voucher-history-table").DataTable({
  columns: arrayColumns.map((col) => ({ data: col })),
  columnDefs: [
    {
      targets: 0,
      render: generateIndex,
    },
  ],
});

function generateIndex() {
  return ++index;
}
