$(document).ready(function () {
  getAllVouchers();
});

function getAllVouchers() {
  $.ajax({
    url: "http://localhost:8080/vouchers",
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

var table = $("#user-table").DataTable({
  columns: [
    { data: "id" },
    { data: "maVoucher" },
    { data: "phanTramGiamGia" },
    { data: "ghiChu" },
    { data: "ngayTao" },
    { data: "ngayCapNhat" },
  ],
});

var voucherId = null;

table.on("click", function (e) {
  let voucherId = table.row(e.target.closest("tr")).data().id;
  getVoucherById(voucherId);
});

function loadDataToForm(data) {
  voucherId = data.id;
  $("#input-voucher-code").val(data.maVoucher);
  $("#input-discount").val(data.phanTramGiamGia);
  $("#input-note").val(data.ghiChu);

  const createDate = new Date(convertDate(data.ngayTao));
  $("#input-createDate").val(createDate.toLocaleDateString("en-CA"));

  const updateDate = new Date(convertDate(data.ngayCapNhat));
  $("#input-updateDate").val(updateDate.toLocaleDateString("en-CA"));
}

function convertDate(date) {
  if (date) {
    const splittedDate = date.split("-");
    return splittedDate[2] + "-" + splittedDate[1] + "-" + splittedDate[0];
  }
}

function getVoucherById(id) {
  $.ajax({
    url: `http://localhost:8080/vouchers/${id}`,
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
  var maVoucher = $("#input-voucher-code").val().trim();
  var phanTramGiamGia = $("#input-discount").val().trim();
  var ghiChu = $("#input-note").val().trim();

  return { maVoucher, phanTramGiamGia, ghiChu };
}

function validateForm(voucher) {
  if (!voucher.maVoucher) {
    alert("Vui lòng nhập mã voucher!");
    return false;
  }

  if (!voucher.phanTramGiamGia) {
    alert("Vui lòng nhập phần trăm giảm giá!");
    return false;
  }

  return true;
}

$("#save_data").click(() => {
  const voucher = getDataForm();
  if (validateForm(voucher)) {
    updateVoucher(voucherId, voucher);
  }
});

function updateVoucher(id, voucher) {
  $.ajax({
    url: `http://localhost:8080/vouchers/${id}`,
    type: "PUT",
    data: JSON.stringify(voucher),
    contentType: "application/json;charset=UTF-8",
    dataType: "json",
    success: (res) => {
      console.log(res);
      alert("Sửa voucher thành công");
      resetForm();
    },
    error: (err) => {
      console.log(err.responseText);
    },
  });
}

function resetForm() {
  $("#input-voucher-code").val("");
  $("#input-discount").val("");
  $("#input-note").val("");
  $("#input-createDate").val("");
  $("#input-updateDate").val("");

  getAllVouchers();
}

$("#btn-create").click(() => {
  const voucher = getDataForm();
  if (validateForm(voucher)) {
    createVoucher(voucher);
  }
});

function createVoucher(voucher) {
  $.ajax({
    url: `http://localhost:8080/vouchers`,
    type: "POST",
    data: JSON.stringify(voucher),
    contentType: "application/json;charset=UTF-8",
    success: (res) => {
      console.log(res);
      alert("Thêm voucher thành công");
      resetForm();
    },
    error: (err) => {
      console.log(err.responseText);
    },
  });
}

$("#btn-delete-one").click(() => {
  if (voucherId) {
    deleteVoucher(voucherId);
  } else {
    alert("Không tìm thấy voucher");
  }
});

$("#btn-delete-all").click(() => {
  deleteAllVoucher();
});

function deleteVoucher(id) {
  const userConfirmed = confirm("Are you sure you want to delete this voucher");

  if (userConfirmed) {
    $.ajax({
      url: `http://localhost:8080/vouchers/${id}`,
      type: "DELETE",
      success: (res) => {
        console.log(res);
        alert("Xoá voucher thành công");
        resetForm();
      },
      error: (err) => {
        console.log(err.responseText);
      },
    });
  }
}

function deleteAllVoucher() {
  const userConfirmed = confirm("Are you sure you want to delete ALL voucher");

  if (userConfirmed) {
    $.ajax({
      url: `http://localhost:8080/vouchers`,
      type: "DELETE",
      success: (res) => {
        console.log(res);
        alert("Xoá tất cả vouchers thành công");
        resetForm();
      },
      error: (err) => {
        console.log(err.responseText);
      },
    });
  }
}
