const REQUEST_STATUS_CREATED = 201;
const REQUEST_READY_STATUS_FINISH_AND_OK = 4;
const BASE_URL = "https://62458c222cfed18817229118.mockapi.io/users";

function onPageLoading() {
  document.getElementById("my-form").addEventListener("submit", (e) => {
    e.preventDefault();
    var data = getDataForm();
    if (validate(data)) {
      sendPostRequest(data, handlePostRequest);
    }
  });
}

// Function to collect form data
function getDataForm() {
  const fullname = document.getElementById("input-name").value.trim();
  const email = document.getElementById("input-email").value.trim();
  const password = document.getElementById("input-password").value.trim();

  return { fullname, email, password };
}

// Function to validate form data
function validate(data) {
  const inputNameElement = document.getElementById("name-input");
  const inputEmailElement = document.getElementById("email-input");
  const inputPasswordElement = document.getElementById("password-input");

  let isValid = true;

  isValid = validateFullname(data.fullname, inputNameElement) && isValid;
  isValid = validateEmailField(data.email, inputEmailElement) && isValid;
  isValid =
    validatePasswordField(data.password, inputPasswordElement) && isValid;

  return isValid;
}

// Function to validate fullname
function validateFullname(fullname, inputNameElement) {
  if (!fullname) {
    inputNameElement.style.display = "block";
    return false;
  } else {
    inputNameElement.style.display = "none";
    return true;
  }
}

// Function to validate email field
function validateEmailField(email, inputEmailElement) {
  if (!email) {
    inputEmailElement.style.display = "block";
    inputEmailElement.innerHTML = "Email cần được nhập";
    return false;
  } else if (!validateEmail(email)) {
    inputEmailElement.style.display = "block";
    inputEmailElement.innerHTML = "Email chưa đúng định dạng";
    return false;
  } else {
    inputEmailElement.style.display = "none";
    return true;
  }
}

// Function to validate password field
function validatePasswordField(password, inputPasswordElement) {
  if (!validatePassword(password)) {
    inputPasswordElement.style.display = "block";
    return false;
  } else {
    inputPasswordElement.style.display = "none";
    return true;
  }
}

// Function to validate email format
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Function to validate password
function validatePassword(password) {
  const pattern = /[!@#$%^&*(),.?":{}|<>]/;
  if (!password || password.length < 8 || !pattern.test(password)) {
    return false;
  }
  return true;
}

function sendPostRequest(data, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", BASE_URL, true);
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
