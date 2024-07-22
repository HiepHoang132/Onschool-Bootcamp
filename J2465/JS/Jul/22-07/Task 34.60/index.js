const data = {
  firstName: "",
  lastName: "",
  age: "",
};

$(document).ready(() => {
  $("#btn-submit-data").click(() => {
    if (validate()) {
      displayData();
    }
  });

  $("#btn-clear-log").click(() => {
    $("#p-html-log").empty();
  });
});

function getDataForm() {
  data.firstName = $("#inp-first-name").val();
  data.lastName = $("#inp-last-name").val();
  data.age = $("#inp-age").val();
}

function validate() {
  getDataForm();

  const alerts = [];
  if (!data.firstName) {
    alerts.push("First name chưa được nhập");
  }

  if (!data.lastName) {
    alerts.push("Last name chưa được nhập");
  }

  if (!data.age) {
    alerts.push("Tuổi chưa được nhập");
  } else if (data.age < 0 || data.age > 200) {
    alerts.push("Tuổi phải là số từ 0 đến 200");
  }

  if (alerts.length > 0) {
    alert(alerts.join("\n"));
    return false;
  }

  return true;
}

function displayData() {
  $("#p-html-log").html(
    `> Age: ${data.age} <br>
         > FirstName: ${data.firstName} <br>
         > LastName: ${data.lastName}`
  );
}
