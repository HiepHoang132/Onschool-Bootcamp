const BASE_URL = "http://203.171.20.210:8080/devcamp-register-java-api/users"
const REQUEST_STATUS_OK = 200

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
  document.getElementById("input-firstname").placeholder = data.firstname
  document.getElementById("input-lastname").placeholder = data.lastname
  document.getElementById("input-country").placeholder = data.country
  document.getElementById("input-subject").placeholder = data.subject
}
