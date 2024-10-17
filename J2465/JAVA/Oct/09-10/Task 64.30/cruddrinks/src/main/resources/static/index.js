$(document).ready(() => {
  getAllDrinks();
});

var columns = [
  "id",
  "maNuocUong",
  "tenNuocUong",
  "donGia",
  "ngayTao",
  "ngayCapNhat",
];

var drinkId = null;

var table = $("#drink-table").DataTable({
  columns: columns.map((col) => ({ data: col })),
});

function getAllDrinks() {
  $.ajax({
    url: "http://localhost:8080/drinks",
    type: "GET",
    dataType: "json",
    success: (res) => {
      table.clear();
      table.rows.add(res);
      table.draw();
    },
    error: (err) => {
      console.log(`Error: ${err.responseText}`);
    },
  });
}

table.on("click", "tr", function () {
  drinkId = table.row(this).data().id;
  getDrinkById(drinkId);
});

function loadDataToForm(data) {
  $("#input-drink-code").val(data.maNuocUong);
  $("#input-drink-name").val(data.tenNuocUong);
  $("#input-price").val(data.donGia);

  var createDate = new Date(convertDate(data.ngayTao));
  $("#input-createDate").val(createDate.toLocaleDateString("en-CA"));
  var updateDate = new Date(convertDate(data.ngayCapNhat));
  $("#input-updateDate").val(updateDate.toLocaleDateString("en-CA"));
}

function convertDate(date) {
  if (date) {
    const splittedDate = date.split("-");
    return splittedDate[2] + "/" + splittedDate[1] + "/" + splittedDate[0];
  }
}

function getDataForm() {
  var maNuocUong = $("#input-drink-code").val();
  var tenNuocUong = $("#input-drink-name").val();
  var donGia = $("#input-price").val();

  return { maNuocUong, tenNuocUong, donGia };
}

function createDrink(drink) {
  $.ajax({
    url: "http://localhost:8080/drinks",
    type: "POST",
    data: JSON.stringify(drink),
    dataType: "json",
    contentType: "application/json;charset=UTF-8",
    success: (res) => {
      alert("Thêm nước uống thành công!");
      resetForm();
      getAllDrinks();
    },
    error: (err) => {
      console.log(`Error: ${err.responseText}`);
    },
  });
}

function validate(data) {
  if (!data.maNuocUong) {
    alert("Vui lòng nhập mã nước uống!");
    return false;
  }

  if (!data.tenNuocUong) {
    alert("Vui lòng nhập tên nước uống!");
    return false;
  }

  if (!data.donGia) {
    alert("Vui lòng nhập đơn giá!");
    return false;
  }

  return true;
}

$("#btn-create").click(() => {
  const data = getDataForm();
  if (validate(data)) {
    createDrink(data);
  }
});

function resetForm() {
  $("#input-drink-code").val("");
  $("#input-drink-name").val("");
  $("#input-price").val("");
  $("#input-createDate").val("");
  $("#input-updateDate").val("");
}

function getDrinkById(id) {
  $.ajax({
    url: `http://localhost:8080/drinks/${id}`,
    type: "GET",
    dataType: "json",
    success: (res) => {
      loadDataToForm(res);
    },
    error: (err) => {
      console.log(`Error: ${err.responseText}`);
    },
  });
}

$("#save-data").click(() => {
  const data = getDataForm();
  if (validate(data)) {
    editDrink(drinkId, data);
  }
});

function editDrink(id, drink) {
  $.ajax({
    url: `http://localhost:8080/drinks/${id}`,
    type: "PUT",
    data: JSON.stringify(drink),
    contentType: "application/json;charset=UTF=8",
    success: (res) => {
      alert("Sửa nước uống thành công!");
      resetForm();
      getAllDrinks();
    },
    error: (err) => {
      console.log(`Error: ${err.responseText}`);
    },
  });
}

$("#btn-delete-one").click(() => {
  if (confirm("Bạn có muốn xoá nước uống này không?")) {
    deleteDrinkById(drinkId);
  }
});

function deleteDrinkById(id) {
  $.ajax({
    url: `http://localhost:8080/drinks/${id}`,
    type: "DELETE",
    success: (res) => {
      alert("Xoá nước uống thành công!");
      resetForm();
      getAllDrinks();
    },
    error: (err) => {
      console.log(`Error: ${err.responseText}`);
    },
  });
}

$("#btn-delete-all").click(() => {
  if (confirm("Bạn có muốn xoá tất cả nước uống không?")) {
    deleteAllDrinks();
  }
});

function deleteAllDrinks() {
  $.ajax({
    url: `http://localhost:8080/drinks`,
    type: "DELETE",
    success: (res) => {
      alert("Xoá tất cả nước uống thành công!");
      resetForm();
      getAllDrinks();
    },
    error: (err) => {
      console.log(`Error: ${err.responseText}`);
    },
  });
}
