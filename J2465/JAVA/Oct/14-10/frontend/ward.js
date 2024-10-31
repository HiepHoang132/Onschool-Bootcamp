$(document).ready(function () {
  getAllWard();
  loadDataToSelect();
});

function getAllWard() {
  $.ajax({
    url: "http://localhost:8080/ward/all",
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

var columns = ["id", "name", "prefix", "districtName"];

var table = $("#ward-table").DataTable({
  columns: columns.map((col) => ({ data: col })),
});

function loadDataToSelect(res) {
  $.ajax({
    url: "http://localhost:8080/district/all",
    type: "GET",
    dataType: "json",
    success: function (res) {
      res.forEach((item) => {
        var $option = $("<option/>");
        $option.text(item.name);
        $option.val(item.id);
        $("#select-district").append($option);
      });
    },
    error: function (err) {
      console.log(err.responseText);
    },
  });
}

var wardId = null;

table.on("click", "tr", function () {
  let wardId = table.row(this).data().id;
  getWardById(wardId);
});

function loadDataToForm(data) {
  wardId = data.id;
  $("#input-phuong").val(data.name);
  $("#select-prefix").val(data.prefix);
  $("#select-district").val(data.districtId);
}

function getWardById(id) {
  $.ajax({
    url: `http://localhost:8080/ward/details/${id}`,
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
  var name = $("#input-phuong").val().trim();
  var prefix = $("#select-prefix").val().trim();
  var district = { id: $("#select-district").val().trim() };
  return { name, prefix, district };
}

function validateForm(ward) {
  let valid = true;

  $("#huyenError").html("");
  $("#districtError").html("");

  if (!ward.name) {
    $("#huyenError").html("Vui lòng nhập tên phường xã!");
    valid = false;
  }

  if (ward.district.id === "0") {
    $("#districtError").html("Vui lòng chọn quận huyện!");
    valid = false;
  }
  return valid;
}

$("#save_data").click(() => {
  const ward = getDataForm();
  if (validateForm(ward)) {
    updateWard(wardId, ward);
  }
});

function updateWard(id, ward) {
  $.ajax({
    url: `http://localhost:8080/ward/update/${id}`,
    type: "PUT",
    data: JSON.stringify(ward),
    contentType: "application/json;charset=UTF-8",
    dataType: "json",
    success: (res) => {
      alert("Sửa ward thành công");
      resetForm();
    },
    error: (err) => {
      console.log(err.responseText);
    },
  });
}

function resetForm() {
  $("#input-phuong").val("");
  $("#select-prefix").val("");
  $("#select-district").val("");

  getAllWard();
}

$("#btn-create").click(() => {
  const ward = getDataForm();
  if (validateForm(ward)) {
    createWard(ward);
  }
});

function createWard(ward) {
  $.ajax({
    url: `http://localhost:8080/ward/create`,
    type: "POST",
    data: JSON.stringify(ward),
    contentType: "application/json;charset=UTF-8",
    success: (res) => {
      alert("Thêm ward thành công");
      resetForm();
    },
    error: (err) => {
      console.log(err.responseText);
    },
  });
}

$("#btn-delete-one").click(() => {
  if (wardId) {
    deleteWard(wardId);
  } else {
    alert("Chưa chọn ward để xoá");
  }
});

$("#btn-delete-all").click(() => {
  deleteAllWard();
});

function deleteWard(id) {
  const userConfirmed = confirm("Bạn có muốn xoá phường xã này?");

  if (userConfirmed) {
    $.ajax({
      url: `http://localhost:8080/ward/delete/${id}`,
      type: "DELETE",
      success: (res) => {
        alert("Xoá phường xã thành công");
        resetForm();
      },
      error: (err) => {
        console.log(err.responseText);
      },
    });
  }
}

function deleteAllWard() {
  const userConfirmed = confirm("Bạn có muốn xoá tất cả các phường xã");

  if (userConfirmed) {
    $.ajax({
      url: `http://localhost:8080/ward/delete/all`,
      type: "DELETE",
      success: (res) => {
        alert("Xoá tất cả phường xã thành công");
        resetForm();
      },
      error: (err) => {
        console.log(err.responseText);
      },
    });
  }
}
