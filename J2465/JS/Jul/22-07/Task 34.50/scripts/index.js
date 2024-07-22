"use strict";

const BASE_URL = "http://203.171.20.210:8080/devcamp-pizza365/orders";
const REQUEST_CREATE_SUCCESS = 201; // status 201 - tạo thành công
const REQUEST_READY_STATUS_FINISH_AND_OK = 4;

var gDiscountVouchers = [
  {
    voucherID: "10345",
    percentDiscount: 20,
  }, // mã giảm giá là 10345, phần trăm giảm giá 20%
  {
    voucherID: "11346",
    percentDiscount: 10,
  },
  {
    voucherID: "20445",
    percentDiscount: 5,
  },
  {
    voucherID: "21457",
    percentDiscount: 30,
  },
  {
    voucherID: "32154",
    percentDiscount: 20,
  },
  {
    voucherID: "30546",
    percentDiscount: 25,
  },
  {
    voucherID: "41351",
    percentDiscount: 15,
  },
  {
    voucherID: "53360",
    percentDiscount: 5,
  },
  {
    voucherID: "65343",
    percentDiscount: 30,
  },
  {
    voucherID: "78328",
    percentDiscount: 40,
  },
];

const BTN_SMALL_ID = "btn-size-small",
  BTN_MEDIUM_ID = "btn-size-medium",
  BTN_LARGE_ID = "btn-size-large",
  BTN_HAWAII_ID = "btn-type-hawai",
  BTN_HAISAN_ID = "btn-type-hai-san",
  BTN_BACON_ID = "btn-type-bacon";

const sizeIds = [BTN_SMALL_ID, BTN_MEDIUM_ID, BTN_LARGE_ID];
const typeIds = [BTN_HAWAII_ID, BTN_HAISAN_ID, BTN_BACON_ID];

const order = {
  kichCo: "",
  duongKinh: "",
  suon: "",
  salad: "",
  loaiPizza: "",
  idVourcher: "",
  thanhTien: "",
  giamGia: "",
  idLoaiNuocUong: "",
  soLuongNuoc: "",
  hoTen: "",
  email: "",
  soDienThoai: "",
  diaChi: "",
  loiNhan: "",
  trangThai: "",
};

const gREQUEST_STATUS_OK = 200; // GET & PUT success
const gREQUEST_READY_STATUS_FINISH_AND_OK = 4;
const BASE_URL_DRINK = "http://203.171.20.210:8080/devcamp-pizza365/drinks";
const BASE_URL_VOUCHER =
  "http://203.171.20.210:8080/devcamp-pizza365/voucher_detail/";

async function onPageLoading() {
  const data = await fetchData(BASE_URL_DRINK);

  $("#ma-don-hang").hide();
  $("#div-container-order").hide();

  displayOptions(data, "select-drink");
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

function displayOptions(data, elementId) {
  var $selectElement = $(`#${elementId}`);

  $.each(data, (index, item) => {
    var $option = $("<option></option>");
    $option.val(item.maNuocUong).text(item.tenNuocUong);
    $selectElement.append($option);
  });
}
$(document).ready(onPageLoading);

function onBtnChooseTypeClick(buttonId) {
  // Loop through typeIds and update class and attribute
  $.each(typeIds, function (index, id) {
    $("#" + id)
      .removeClass("btn-yellow")
      .addClass("btn-green")
      .attr("data-is-selected", "N");
  });

  // Update the clicked button's class and attribute
  $("#" + buttonId)
    .removeClass("btn-green")
    .addClass("btn-yellow")
    .attr("data-is-selected", "Y");

  // Get pizza type data and display it
  const pizzaType = getPizzaTypeData(buttonId);
  displayPizzaType(pizzaType);

  // Set the selected pizza type in the order
  order.loaiPizza = pizzaType;
}

function getPizzaTypeData(buttonId) {
  var index = getPizzaTypeIndex(buttonId);

  const $types = $(`.pizza-type:nth-child(${index}) h3`);
  const pizzaType = $types[0].innerHTML;

  return pizzaType;
}

function displayPizzaType(pizzaType) {
  console.log("%cThông tin Pizza đã chọn", "color: blue");
  console.log(`Tên pizza: ${pizzaType}`);
}

function onBtnChooseSizeClick(buttonId) {
  $.each(sizeIds, (index, id) => {
    $("#" + id)
      .removeClass("btn-yellow")
      .addClass("btn-green")
      .attr("data-is-selected", "N");
  });

  $("#" + buttonId)
    .removeClass("btn-green")
    .addClass("btn-yellow")
    .attr("data-is-selected", "Y");

  getPizzaSizeComboData(buttonId);
  displayPizzaSizeCombo();
}

function getPizzaSizeComboData(buttonId) {
  // Determine index based on buttonId
  var index = getPizzaSizeComboIndex(buttonId);

  if (index === 0) return false;
  // Get size
  order.kichCo = getMenuName(index).split(" ")[0];

  // Get details
  var details = getDetailsElement(index);

  if (details) {
    order.duongKinh = extractDiameter(details);
    order.suon = extractGrilledPork(details);
    order.salad = extractSalad(details);
    order.soLuongNuoc = extractDrink(details);
    order.thanhTien = extractPrice(details);
  }
}

function getPizzaSizeComboIndex(buttonId) {
  if (buttonId === BTN_SMALL_ID) return 1;
  else if (buttonId === BTN_MEDIUM_ID) return 2;
  else if (buttonId === BTN_LARGE_ID) return 3;
  return 0; // Default to 0 or handle as needed
}

function getMenuName(index) {
  var $menuNameElement = $(`.pizza-size:nth-child(${index}) h3`);

  return $menuNameElement ? $menuNameElement.text().trim() : "";
}

function getDetailsElement(index) {
  return $(`.pizza-size:nth-child(${index}) .list-group`);
}

function getPizzaTypeIndex(buttonId) {
  if (buttonId === BTN_HAWAII_ID) return 1;
  else if (buttonId === BTN_HAISAN_ID) return 2;
  else if (buttonId === BTN_BACON_ID) return 3;
  return 0;
}

function extractDiameter(details) {
  return $(details).find("li:nth-child(1) b").text().trim();
}

function extractGrilledPork(details) {
  return $(details).find("li:nth-child(2) b").text().trim();
}

function extractSalad(details) {
  return $(details).find("li:nth-child(3) b").text().trim();
}

function extractDrink(details) {
  return $(details).find("li:nth-child(4) b").text().trim();
}

function extractPrice(details) {
  var vndText = $(details).find("li:nth-child(5) b").text().trim();
  return parseInt(vndText.replace(",", ""));
}

function displayPizzaSizeCombo() {
  console.log("%cThông tin Pizza Size Combo", "color: blue");
  console.log(`Tên menu: ${order.kichCo}`);
  console.log(`Đường kính (cm): ${order.duongKinh}`);
  console.log(`Sườn nướng: ${order.suon}`);
  console.log(`Salad (gr): ${order.salad}`);
  console.log(`Drink(s): ${order.soLuongNuoc}`);
  console.log(`Price (VND): ${order.thanhTien}`);
}

function onBtnKiemTraDonClick() {
  saveDataFromForm();
  if (validateData()) {
    displayData();
  }
}

function onBtnGuiDonClick() {
  console.log("%cĐơn đặt hàng của khách", "color: blue");
  console.log(`Họ và tên: ${order.hoTen}`);
  console.log(`Email: ${order.email}`);
  console.log(`Số điện thoại: ${order.soDienThoai}`);
  console.log(`Địa chỉ: ${order.diaChi}`);
  console.log(`Lời nhắn: ${order.loiNhan}`);
  console.log(`Kích cỡ: ${order.kichCo}`);
  console.log(`Đường kính: ${order.duongKinh}`);
  console.log(`Sườn nướng: ${order.suon}`);
  console.log(`Salad: ${order.salad}`);
  console.log(`Nước ngọt: ${order.idLoaiNuocUong}`);
  console.log(`Loại: ${order.loaiPizza}`);
  console.log(`Mã voucher: ${order.voucher}`);
  console.log(`Giá vnd: ${order.thanhTien}`);
  console.log(`Discount %: ${order.phanTramGiamGia}`);
  console.log(
    `Phải thanh toán vnd: ${Number(order.thanhTien) - Number(order.giamGia)}`
  );
  order.trangThai = "open";
  order.giamGia = order.giamGia.toString();
  order.thanhTien = order.thanhTien.toString();
  createOrder();
}

function createOrder() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", BASE_URL, true);
  xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlHttp.send(JSON.stringify(order));

  xmlHttp.onreadystatechange = function () {
    if (
      this.status === REQUEST_CREATE_SUCCESS &&
      this.readyState === REQUEST_READY_STATUS_FINISH_AND_OK
    ) {
      const response = this.responseText;
      $("#ma-don-hang").show();
      var orderCode = JSON.parse(response)["orderCode"];
      $("#input-order-code").val(orderCode);
    }
  };
}

function saveDataFromForm() {
  order.idLoaiNuocUong = $("#select-drink").val();
  order.hoTen = $("#input-name").val();
  order.email = $("#input-email").val();
  order.soDienThoai = $("#input-phone").val();
  order.diaChi = $("#input-address").val();
  order.loiNhan = $("#input-message").val();
  order.idVourcher = $("#input-voucher").val();
}

function validateData() {
  if (order.kichCo === null) {
    alert("Menu chưa được chọn!");
    return false;
  }

  if (order.loaiPizza === "") {
    alert("Loại pizza chưa được chọn!");
    return false;
  }

  if (order.idLoaiNuocUong === "0") {
    alert("Nước uống chưa được chọn!");
    return false;
  }

  if (order.hoTen === "") {
    alert("Họ và tên cần được nhập!");
    return false;
  }

  if (order.email === "") {
    alert("Email cần được nhập!");
    return false;
  } else if (!validateEmail(order.email)) {
    return false;
  }

  if (order.soDienThoai === "") {
    alert("Số điện thoại cần được nhập!");
    return false;
  } else if (!validatePhoneNumber(order.soDienThoai)) {
    return false;
  }

  if (order.diaChi === "") {
    alert("Địa chỉ cần được nhập!");
    return false;
  }

  if (order.idVourcher) {
    var xmlHttp = validateVoucher(order.idVourcher);
    if (xmlHttp) {
      var response = JSON.parse(xmlHttp.responseText);
      order["phanTramGiamGia"] = response.phanTramGiamGia;
      order.giamGia = (order["phanTramGiamGia"] * order.thanhTien) / 100;
    } else {
      order.giamGia = "";
      order["phanTramGiamGia"] = "0";
    }
  } else {
    order.giamGia = "";
    order["phanTramGiamGia"] = "0";
  }

  return true;
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Email chưa đúng định dạng");
    return false;
  }

  return true;
}

function validatePhoneNumber(phoneNumber) {
  const phonePattern = /^(?:\+|\d)[\d]{9,11}$/;
  if (!phonePattern.test(phoneNumber)) {
    alert(
      "Số điện thoại phải nhập là số, có dấu + hoặc số 0 ở đầu; độ dài từ 10 đến 12 ký tự"
    );
    return false;
  }

  return true;
}

function validateVoucher(voucherId) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", BASE_URL_VOUCHER + voucherId, false);
  xmlHttp.send();
  if (xmlHttp.status !== gREQUEST_STATUS_OK) {
    alert("Không tìm thấy voucher");
    return false;
  }

  return xmlHttp;
}

function displayData() {
  $("#div-container-order").show();

  $("#div-order-infor").html(
    `
      Họ và tên: ${order.hoTen} <br>
      Email: ${order.email} <br>
      Số điện thoại: ${order.soDienThoai} <br>
      Địa chỉ: ${order.diaChi} <br>
      Lời nhắn: ${order.loiNhan} <br>
      ''''''''''''''''''''''''''''''''''''' <br>
      Kích cỡ: ${order.kichCo} <br>
      Đường kính: ${order.duongKinh} <br>
      Sườn nướng: ${order.suon} <br>
      Salad: ${order.salad} <br>
      Đồ uống: ${order.idLoaiNuocUong} <br>
      Số lượng nước: ${order.soLuongNuoc} <br>
      ''''''''''''''''''''''''''''''''''''' <br>
      Loại: ${order.loaiPizza} <br>
      Mã voucher: ${order.idVourcher} <br>
      Giá vnd: ${order.thanhTien} <br>
      Discount % : ${order.phanTramGiamGia} <br>
      Phải thanh toán vnd: ${
        Number(order.thanhTien) - Number(order.giamGia)
      } <br>
    `
  );
}
