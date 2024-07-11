const BASE_URL = "http://203.171.20.210:8080/devcamp-register-java-api/users"
const REQUEST_STATUS_OK = 200
const REQUEST_READY_STATUS_FINISH_AND_OK = 4

function onPageLoading() {
  const queryParams = new URLSearchParams(window.location.search)
  const userId = queryParams.get("id")

  if (validate(userId)) {
    sendGetRequest(userId, handleGetRequest)
  }
}

function validate(userId) {
  if (!userId) {
    alert("Không có id được cung cấp trên URL.")
    window.location.href = "index.html"
    return false
  }

  return true
}

function sendGetRequest(userId, callback) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open("GET", BASE_URL + `/${userId}`, false)
  xmlHttp.onload = () => callback(xmlHttp)
  xmlHttp.send()
}

function handleGetRequest(xmlHttp) {
  if (xmlHttp.status === REQUEST_STATUS_OK) {
    var data = JSON.parse(xmlHttp.responseText)
    displayForm(data)
  }
}

function displayForm(data) {
  document.getElementById("input-firstname").value = data.firstname
  document.getElementById("input-lastname").value = data.lastname
  document.getElementById("input-country").value = data.country
  document.getElementById("input-subject").value = data.subject
}

function onBtnUpdateUserClick() {
  const queryParams = new URLSearchParams(window.location.search)
  const userId = queryParams.get("id")

  const data = getDataForm()
  console.log(data)
  if (validateDataForm(data)) {
    sendPutRequest(userId, data)
  }
}

function getDataForm() {
  var firstname = document.getElementById("input-firstname").value.trim()
  var lastname = document.getElementById("input-lastname").value.trim()
  var country = document.getElementById("input-country").value.trim()
  var subject = document.getElementById("input-subject").value.trim()

  return { firstname, lastname, country, subject }
}

function validateDataForm(formData) {
  if (!formData.firstname) {
    alert("First name cần được nhập")
    return false
  }

  if (!formData.lastname) {
    alert("Last name cần được nhập")
    return false
  }

  if (!formData.country) {
    alert("Country cần được nhập")
    return false
  }

  if (!formData.subject) {
    alert("Subject cần được nhập")
    return false
  }

  return true
}

function sendPutRequest(userId, formData) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open("PUT", BASE_URL + `/${userId}`, true)
  xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")

  xmlHttp.onreadystatechange = function () {
    if (
      xmlHttp.status === REQUEST_STATUS_OK &&
      xmlHttp.readyState === REQUEST_READY_STATUS_FINISH_AND_OK
    ) {
      alert("Cập nhật thông tin user thành công")
    }
  }

  xmlHttp.send(JSON.stringify(formData))
}
