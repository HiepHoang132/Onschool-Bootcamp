const BASE_URL = "http://203.171.20.210:8080/devcamp-lucky-dice";
let index = 0;

$(document).ready(() => {
  loadDataToInput();
});

function getQueryParams(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function loadDataToInput() {
  const username = getQueryParams("username");
  const firstname = getQueryParams("firstname");
  const lastname = getQueryParams("lastname");

  $("#input-username").val(username);
  $("#input-firstname").val(firstname);
  $("#input-lastname").val(lastname);

  getDiceHistory(username);
}

function getDiceHistory(username) {
  $.ajax({
    url: BASE_URL + "/dice-history?username=" + username,
    type: "GET",
    async: false,
    success: loadDiceHistoryToTable,
    error: (xhr) => console.log(xhr.responseText),
  });
}

function loadDiceHistoryToTable(data) {
  console.log(data.dices)
  const tableData = data.dices.map((dice, idx) => ({
    id: idx + 1,
    result: dice,
  }));

  $diceHistoryTable.clear().rows.add(tableData).draw();
}

var arrayColumns = ["id", "result"];

var $diceHistoryTable = $("#dice-history-table").DataTable({
  columns: arrayColumns.map((col) => ({ data: col })),
});
