$(document).ready(function () {
  getAllProvince();
});

function getAllProvince() {
  $.ajax({
    url: "http://localhost:8080/province/all",
    type: "GET",
    dataType: "json",
    success: function (res) {
      table.clear();
      table.rows.add(res);
      table.draw();
    },
    error: function (err) {
      console.log(err.responseText);
    },
  });
}

var columns = ["id", "code", "name"];

var table = $("#province-table").DataTable({
  columns: columns.map((col) => ({ data: col })),
});

var provinceId = null;

table.on("click", "tr", function () {
  let provinceId = table.row(this).data().id;
  getProvinceById(provinceId);
});

function loadDataToForm(data) {
  provinceId = data.id;
  $("#input-tinh-thanh").val(data.name);
  $("#input-code").val(data.code);
}

function getProvinceById(id) {
  $.ajax({
    url: `http://localhost:8080/province/details/${id}`,
    type: "GET",
    dataType: "json",
    success: (res) => {
      loadDataToForm(res);
    },
    error: (err) => {
      console.log(err.responseText);
    },
  });
}

function getDataForm() {
  var name = $("#input-tinh-thanh").val().trim();
  var code = $("#input-code").val().trim();

  return { name, code };
}

function validateForm(province) {
  let valid = true;

  $("#tinhThanhError").html("");
  $("#codeError").html("");

  if (!province.name) {
    $("#tinhThanhError").html("Vui lòng nhập tên tỉnh thành!");
    valid = false;
  }

  if (!province.code) {
    $("#codeError").html("Vui lòng nhập mã tỉnh thành!");
    valid = false;
  }
  return valid;
}

$("#save_data").click(() => {
  const province = getDataForm();
  if (validateForm(province)) {
    updateProvince(provinceId, province);
  }
});

function updateProvince(id, province) {
  $.ajax({
    url: `http://localhost:8080/province/update/${id}`,
    type: "PUT",
    data: JSON.stringify(province),
    contentType: "application/json;charset=UTF-8",
    dataType: "json",
    success: (res) => {
      alert("Sửa province thành công");
      resetForm();
    },
    error: (err) => {
      console.log(err.responseText);
    },
  });
}

function resetForm() {
  $("#input-tinh-thanh").val("");
  $("#input-code").val("");

  getAllProvince();
}

$("#btn-create").click(() => {
  const province = getDataForm();
  if (validateForm(province)) {
    createProvince(province);
  }
});

function createProvince(province) {
  $.ajax({
    url: `http://localhost:8080/province/create`,
    type: "POST",
    data: JSON.stringify(province),
    contentType: "application/json;charset=UTF-8",
    success: (res) => {
      console.log(res);
      alert("Thêm tỉnh thành thành công");
      resetForm();
    },
    error: (err) => {
      console.log(err.responseText);
    },
  });
}

$("#btn-delete-one").click(() => {
  if (provinceId) {
    deleteProvince(provinceId);
  } else {
    alert("Chưa chọn tỉnh thành để xoá");
  }
});

$("#btn-delete-all").click(() => {
  deleteAllProvince();
});

function deleteProvince(id) {
  const userConfirmed = confirm("Bạn có muốn xoá tỉnh thành này?");

  if (userConfirmed) {
    $.ajax({
      url: `http://localhost:8080/province/delete/${id}`,
      type: "DELETE",
      success: (res) => {
        alert("Xoá tỉnh thành thành công");
        resetForm();
      },
      error: (err) => {
        console.log(err.responseText);
      },
    });
  }
}

function deleteAllProvince() {
  const userConfirmed = confirm("Bạn có muốn xoá tất cả các tỉnh thành");

  if (userConfirmed) {
    $.ajax({
      url: `http://localhost:8080/province/delete/all`,
      type: "DELETE",
      success: (res) => {
        console.log(res);
        alert("Xoá tất cả tỉnh thành thành công");
        resetForm();
      },
      error: (err) => {
        console.log(err.responseText);
      },
    });
  }
}
