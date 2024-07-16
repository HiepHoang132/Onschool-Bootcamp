const REQUEST_STATUS_CREATED = 201;
const REQUEST_READY_STATUS_FINISH_AND_OK = 4;
const BASE_URL_CONTACTS =
  "https://62458c222cfed18817229118.mockapi.io/contacts";

function onPageLoading() {
  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    var data = getDataForm();
    if (validate(data)) {
      sendPostRequest(data, handlePostRequest)
    }
  });
}

function getDataForm() {
  const name = document.getElementById("input-name").value.trim();
  const email = document.getElementById("input-email").value.trim();
  const contact = document.getElementById("textarea-contact").value.trim();

  return { name, email, contact };
}

function validate(data) {
  if (!data.name) {
    alert("Tên chưa được nhập!");
    return false;
  }

  if (!data.email) {
    alert("Email chưa được nhập!");
    return false;
  } else if (!validateEmail(data.email)) {
    alert("Email chưa đúng định dạng!");
    return false;
  }

  if (!data.contact) {
    alert("Contact chưa được nhập!");
    return false;
  }

  return true;
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function sendPostRequest(data, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", BASE_URL_CONTACTS, true);
  xmlHttp.send(JSON.stringify(data));
  xmlHttp.onload = function () {
    callback(this);
  };
}

function handlePostRequest(xmlHttp) {
  if (
    xmlHttp.status === REQUEST_STATUS_CREATED &&
    xmlHttp.readyState === REQUEST_READY_STATUS_FINISH_AND_OK
  ) {
    console.log(xmlHttp.responseText);
  }
}
