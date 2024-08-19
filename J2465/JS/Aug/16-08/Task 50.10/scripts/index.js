"use strict";
var gVoucherId = 0;

const gBASE_URL = "https://62442d9d3da3ac772b0c50eb.mockapi.io/api/v1/";
const gCONTENT_TYPE = "application/json;charset=UTF-8";
var gSTT = 1;

var $contactTable = $("#contact-table").DataTable({
  columns: [
    "stt",
    "id",
    "name",
    "email",
    "message",
    "createDate",
    "action",
  ].map((col) => ({ data: col })),
  columnDefs: [
    {
      // định nghĩa lại cột STT
      targets: 0,
      render: function () {
        return gSTT++;
      },
    },
    {
      // định nghĩa lại cột action
      targets: 6,
      defaultContent: `
    <img class="edit-voucher" src="https://cdn0.iconfinder.com/data/icons/glyphpack/45/edit-alt-512.png" style="width: 20px;cursor:pointer;">
    <img class="delete-voucher" src="https://cdn4.iconfinder.com/data/icons/complete-common-version-6-4/1024/trash-512.png" style="width: 20px;cursor:pointer;">
  `,
    },
  ],
});

/*** REGION 2 - Vùng gán / thực thi sự kiện cho các elements */
$(document).ready(function () {
  // thực hiện tải trang
  onPageLoading();

  // 2 - C: gán sự kiện Create - Thêm mới voucher
  $("#btn-add-contact").on("click", function () {
    onBtnAddNewContactClick();
  });
  // 3 - U: gán sự kiện Update - Sửa 1 voucher
  $("#contact-table").on("click", ".edit-voucher", function () {
    onBtnEditVoucherClick(this, "#update-voucher-modal");
  });

  $("#contact-table").on("click", ".delete-voucher", function () {
    onBtnDeleteVoucherClick(this);
  });

  // gán sự kiện cho nút Create Voucher (trên modal)
  $("#btn-create-voucher").on("click", function () {
    onBtnCreateVoucherClick();
  });

  // gán sự kiện cho nút Update Voucher (trên modal)
  $("#btn-update-voucher").on("click", function () {
    onBtnUpdateVoucherClick();
  });

  // gán sự kiện cho nút Delete Voucher (trên modal)
  $("#btn-confirm-delete-voucher").on("click", function () {
    onBtnConfirmDeleteClick();
  });
});

/*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
// hàm thực thi khi trang được load
function onPageLoading() {
  // 1 - R: Read / Load voucher to DataTable
  getAllVouchers();
}

// Hàm xử lý sự kiện khi nút Thêm mới đc click
function onBtnAddNewContactClick() {
  // hiển thị modal trắng lên
  $("#create-contact-modal").modal("show");
}

// Hàm xử lý sự kiện khi icon edit voucher trên bảng đc click
function onBtnEditVoucherClick(paramBtnEdit) {
  // lưu thông tin voucherId đang được edit vào biến toàn cục
  gVoucherId = getVoucherIdFromButton(paramBtnEdit);
  // load dữ liệu vào các trường dữ liệu trong modal
  getVoucherById(gVoucherId);
}

// Hàm xử lý sự kiện khi icon delete voucher trên bảng đc click
function onBtnDeleteVoucherClick(paramBtnEdit) {
  // lưu thông tin voucherId đang được edit vào biến toàn cục
  gVoucherId = getVoucherIdFromButton(paramBtnEdit);
  $("#delete-confirm-modal").modal("show");
}

// hàm xử lý sự kiện create voucher modal click
function onBtnCreateVoucherClick() {
  // khai báo đối tượng chứa voucher data
  var vVoucherObj = {
    voucherCode: "",
    discount: -1,
  };
  // B1: Thu thập dữ liệu
  getCreateVoucherData(vVoucherObj);
  // B2: Validate insert
  var vIsVoucherValidate = validateVoucherData(vVoucherObj);
  if (vIsVoucherValidate) {
    // B3: insert voucher
    $.ajax({
      url: gBASE_URL,
      type: "POST",
      contentType: gCONTENT_TYPE,
      data: JSON.stringify(vVoucherObj),
      success: function (paramRes) {
        // B4: xử lý front-end
        handleInsertVoucherSuccess();
      },
      error: function (paramErr) {
        console.log(paramErr.status);
      },
    });
  }
}

// hàm xử lý sự kiện update voucher modal click
function onBtnUpdateVoucherClick() {
  // khai báo đối tượng chứa voucher data
  var vVoucherObj = {
    voucherCode: "",
    discount: -1,
  };
  // B1: Thu thập dữ liệu
  getUpdateVoucherData(vVoucherObj);
  // B2: Validate update
  var vIsVoucherValidate = validateVoucherData(vVoucherObj);
  if (vIsVoucherValidate) {
    // B3: update voucher
    $.ajax({
      url: gBASE_URL + gVoucherId,
      type: "PUT",
      contentType: gCONTENT_TYPE,
      data: JSON.stringify(vVoucherObj),
      success: function (paramRes) {
        // B4: xử lý front-end
        handleUpdateVoucherSuccess();
      },
      error: function (paramErr) {
        console.log(paramErr.status);
      },
    });
  }
}

function onBtnConfirmDeleteClick() {
  $.ajax({
    url: gBASE_URL + gVoucherId,
    type: "DELETE",
    contentType: gCONTENT_TYPE,
    success: function (paramRes) {
      // B4: xử lý front-end
      handleDeleteVoucherSuccess();
    },
    error: function (paramErr) {
      console.log(paramErr.status);
    },
  });
}

/*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
// hàm gọi api để lấy all danh sách user đăng ký
function getAllVouchers() {
  $.ajax({
    url: gBASE_URL + "contacts",
    type: "GET",
    success: function (paramVouchers) {
      loadDataToVoucherTable(paramVouchers);
    },
    error: function (paramErr) {
      console.log(paramErr.status);
    },
  });
}
/** load voucher array to DataTable
 * in: voucher array
 * out: voucher table has data
 */
function loadDataToVoucherTable(paramVoucherArr) {
  $contactTable.clear();
  $contactTable.rows.add(paramVoucherArr);
  $contactTable.draw();
}

// hàm get voucher by id
function getVoucherById(paramVoucherId) {
  $.ajax({
    url: gBASE_URL + paramVoucherId,
    type: "GET",
    success: function (paramVoucher) {
      showVoucherDataToModal(paramVoucher);
    },
    error: function (paramErr) {
      console.log(paramErr.status);
    },
  });
  // hiển thị modal lên
  $("#update-voucher-modal").modal("show");
}

// hàm show voucher obj lên modal
function showVoucherDataToModal(paramVoucher) {
  $("#input-update-voucher-code").val(paramVoucher.voucherCode);
  $("#input-update-discount").val(paramVoucher.discount);
}

// hàm thu thập dữ liệu để create voucher
function getCreateVoucherData(paramVoucherObj) {
  paramVoucherObj.voucherCode = $("#input-create-voucher-code").val().trim();
  paramVoucherObj.discount = parseInt($("#input-create-discount").val());
}

// hàm thu thập dữ liệu để update voucher
function getUpdateVoucherData(paramVoucherObj) {
  paramVoucherObj.voucherCode = $("#input-update-voucher-code").val().trim();
  paramVoucherObj.discount = parseInt($("#input-update-discount").val());
}

// hàm validate data
function validateVoucherData(paramVoucherObj) {
  if (paramVoucherObj.voucherCode === "") {
    alert("Voucher code cần nhập");
    return false;
  }
  if (isNaN(paramVoucherObj.discount)) {
    alert("Discount cần nhập vào phải là số");
    return false;
  }

  if (paramVoucherObj.discount < 0 || paramVoucherObj.discount > 100) {
    alert("Discount phải nhập trong khoảng từ 0 đến 100!");
    return false;
  }

  return true;
}

// hàm xử lý hiển thị front-end khi thêm voucher thành công
function handleInsertVoucherSuccess() {
  alert("Thêm voucher thành công!");
  getAllVouchers();
  resetCreateVoucherForm();
  $("#create-voucher-modal").modal("hide");
}

// hàm xử lý hiển thị front-end khi sửa voucher thành công
function handleUpdateVoucherSuccess() {
  alert("Sửa voucher thành công!");
  getAllVouchers();
  resetUpdateVoucherForm();
  $("#update-voucher-modal").modal("hide");
}

function handleDeleteVoucherSuccess() {
  alert("Xoá voucher thành công!");
  getAllVouchers();
  $("#delete-confirm-modal").modal("hide");
}

// hàm xóa trắng form create voucher
function resetCreateVoucherForm() {
  $("#input-create-voucher-code").val("");
  $("#input-create-discount").val("");
}

// hàm xóa trắng form update voucher
function resetUpdateVoucherForm() {
  $("#input-update-voucher-code").val("");
  $("#input-update-discount").val("");
}

// hàm dựa vào button detail (edit or delete) xác định đc id voucher
function getVoucherIdFromButton(paramButton) {
  var vTableRow = $(paramButton).parents("tr");
  var vVoucherRowData = $contactTable.row(vTableRow).data();
  return vVoucherRowData.id;
}
