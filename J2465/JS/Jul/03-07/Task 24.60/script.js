//base url
const REQUEST_STATUS_OK = 200
const REQUEST_READY_STATUS_FINISH_AND_OK = 4
const BASE_URL = "http://203.171.20.210:8080/devcamp-lucky-dice/"
const UTF8_TEXT_APPLICATON_HEADER = "application/json;charset=UTF-8"

function getFormData() {
  var usernameData = document.getElementById("input-username").value.trim()
  var firstNameData = document.getElementById("input-fname").value.trim()
  var lastNameData = document.getElementById("input-lname").value.trim()

  return {
    username: usernameData,
    firstName: firstNameData,
    lastName: lastNameData,
  }
}

function validateData(data) {
  if (data.username === "") {
    alert("Username cần được nhập")
    return false
  }

  if (data.firstName === "") {
    alert("First name cần được nhập")
    return false
  }

  if (data.lastName === "") {
    alert("Last name cần được nhập")
    return false
  }

  return true
}

function sendPostRequest(data) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open("POST", BASE_URL + "/dice", true)
  xmlHttp.setRequestHeader("Content-Type", UTF8_TEXT_APPLICATON_HEADER)
  xmlHttp.send(data)
  return xmlHttp
}

function handleResponse(xmlHttp) {
  xmlHttp.onreadystatechange = function () {
    if (
      this.status === REQUEST_STATUS_OK &&
      this.readyState === REQUEST_READY_STATUS_FINISH_AND_OK
    ) {
      var response = JSON.parse(xmlHttp.responseText)
      display(response)
    }
  }
}

function display(response) {
  var paragraph = document.getElementById("paragraph")
  paragraph.style.visibility = "visible"

  paragraph.innerHTML = `
        Dice: ${response.dice} <br>
        Voucher: ${handleVoucher(response.voucher)} <br>
        Prize: ${handlePrize(response.prize)}
    `
}

function handleVoucher(voucher) {
  if (voucher !== null) {
    return ` voucher code: ${voucher.id}, discount: ${voucher.phanTramGiamGia}%`
  }
  return "Không có"
}

function handlePrize(prize) {
  if (prize !== null) {
    return prize
  }
  return "Không có"
}

function onBtnGetNewDice() {
  var formData = getFormData()
  if (validateData(formData)) {
    var jsonStringData = JSON.stringify(formData)
    var xmlHttp = sendPostRequest(jsonStringData)
    handleResponse(xmlHttp)
  }
}
