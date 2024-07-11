const BASE_URL = "http://203.171.20.210:8080/devcamp-register-java-api/users"

async function onPageLoading() {
  const userData = await fetchData(BASE_URL)
  displayData(userData)
}

async function fetchData(url) {
  try {
    const response = await fetch(url)
    if (!response) throw new Error(`Fetch error: ${response.status}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error: ", error)
    throw new Error()
  }
}

document.addEventListener("DOMContentLoaded", onPageLoading)

function displayData(data) {
  var table = document.getElementById("user-table")
  var tableBody = table.getElementsByTagName("tbody")[0]

  data.forEach((item) => {
    var newRow = tableBody.insertRow(-1)

    const fields = [
      "id",
      "firstname",
      "lastname",
      "country",
      "subject",
      "customerType",
      "registerStatus",
    ]

    fields.forEach((field) => {
      const row = newRow.insertCell()
      row.innerHTML = item[field]
    })
    const userAction = newRow.insertCell()

    var infoButton = document.createElement("button")
    infoButton.innerHTML = "Chi tiết "
    infoButton.className = "btn btn-primary"

    const infoData = [
      "id",
      "firstname",
      "lastname",
      "country",
      "subject",
      "customerType",
      "registerStatus",
    ]

    infoData.forEach((info) => {
      infoButton.dataset[info] = item[info]
    })

    userAction.appendChild(infoButton)

    infoButton.addEventListener("click", function () {
      onBtnShowInfoClick(this)
    })
  })

  function onBtnShowInfoClick(button) {
    const USER_DETAIL_URL = "userDetails.html"
    const SITE_TO_OPEN_URL = USER_DETAIL_URL + "?" + "id=" + button.dataset.id

    window.location.href = SITE_TO_OPEN_URL
  }
}
