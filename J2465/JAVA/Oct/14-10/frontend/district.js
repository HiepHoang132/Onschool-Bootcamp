$(document).ready(function () {
  getAllDistrict();
  loadDataToSelect();
});

function getAllDistrict() {
  $.ajax({
    url: "http://localhost:8080/district/all",
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

var columns = ["id", "name", "prefix", "provinceName"];

var table = $("#district-table").DataTable({
  columns: columns.map((col) => ({ data: col })),
});

function loadDataToSelect(res) {
  $.ajax({
    url: "http://localhost:8080/province/all",
    type: "GET",
    dataType: "json",
    success: function (res) {
      res.forEach((item) => {
        var $option = $("<option/>");
        $option.text(item.name);
        $option.val(item.id);
        $("#select-province").append($option);
      });
    },
    error: function (err) {
      console.log(err.responseText);
    },
  });
}

var districtId = null;

table.on("click", "tr", function () {
  let districtId = table.row(this).data().id;
  getDistrictById(districtId);
});

function loadDataToForm(data) {
  districtId = data.id;
  $("#input-quan").val(data.name);
  $("#select-prefix").val(data.prefix);
  $("#select-province").val(data.provinceId);
}

function getDistrictById(id) {
  $.ajax({
    url: `http://localhost:8080/district/details/${id}`,
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
  var name = $("#input-quan").val().trim();
  var prefix = $("#select-prefix").val().trim();
  var province = { id: $("#select-province").val().trim() };
  return { name, prefix, province };
}

function validateForm(district) {
  let valid = true;

  $("#quanError").html("");
  $("#provinceError").html("");

  if (!district.name) {
    $("#quanError").html("Vui lòng nhập tên quận huyện!");
    valid = false;
  }

  if (district.province.id === "0") {
    $("#provinceError").html("Vui lòng chọn tỉnh thành!");
    valid = false;
  }
  return valid;
}

$("#save_data").click(() => {
  const district = getDataForm();
  if (validateForm(district)) {
    updateDistrict(districtId, district);
  }
});

function updateDistrict(id, district) {
  $.ajax({
    url: `http://localhost:8080/district/update/${id}`,
    type: "PUT",
    data: JSON.stringify(district),
    contentType: "application/json;charset=UTF-8",
    dataType: "json",
    success: (res) => {
      alert("Sửa district thành công");
      resetForm();
    },
    error: (err) => {
      console.log(err.responseText);
    },
  });
}

function resetForm() {
  $("#input-quan").val("");
  $("#select-prefix").val("");
  $("#select-province").val("");

  getAllDistrict();
}

$("#btn-create").click(() => {
  const district = getDataForm();
  if (validateForm(district)) {
    createDistrict(district);
  }
});

function createDistrict(district) {
  $.ajax({
    url: `http://localhost:8080/district/create`,
    type: "POST",
    data: JSON.stringify(district),
    contentType: "application/json;charset=UTF-8",
    success: (res) => {
      console.log(res);
      alert("Thêm district thành công");
      resetForm();
    },
    error: (err) => {
      console.log(err.responseText);
    },
  });
}

$("#btn-delete-one").click(() => {
  if (districtId) {
    deleteDistrict(districtId);
  } else {
    alert("Chưa chọn district để xoá");
  }
});

$("#btn-delete-all").click(() => {
  deleteAllDistrict();
});

function deleteDistrict(id) {
  const userConfirmed = confirm("Bạn có muốn xoá quận huyện này?");

  if (userConfirmed) {
    $.ajax({
      url: `http://localhost:8080/district/delete/${id}`,
      type: "DELETE",
      success: (res) => {
        alert("Xoá quận huyện thành công");
        resetForm();
      },
      error: (err) => {
        console.log(err.responseText);
      },
    });
  }
}

function deleteAllDistrict() {
  const userConfirmed = confirm("Bạn có muốn xoá tất cả các quận huyện");

  if (userConfirmed) {
    $.ajax({
      url: `http://localhost:8080/district/delete/all`,
      type: "DELETE",
      success: (res) => {
        console.log(res);
        alert("Xoá tất cả quận huyện thành công");
        resetForm();
      },
      error: (err) => {
        console.log(err.responseText);
      },
    });
  }
}
